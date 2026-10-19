/**
 * ============================================
 * INTERACTIVE CIRCUIT-BOARD BACKGROUND
 * ============================================
 * A procedurally routed PCB drawn on a fixed <canvas> behind the page:
 * chip footprints, copper traces (0° / 45° / 90°) and vias.
 * - Signals (glowing pulses) travel along the traces.
 * - The cursor acts like a probe: nearby copper lights up and emits pulses.
 * - Click / tap injects a burst of signals from the nearest pads.
 *
 * Colours come from the CSS variables --bg, --copper, --copper-hi and --signal,
 * so changing the palette in CSS also changes the board.
 * Uses <canvas id="board-bg"> if the page has one, otherwise creates it.
 */
(() => {
  let canvas = document.getElementById("board-bg");
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.id = "board-bg";
    canvas.setAttribute("aria-hidden", "true");
    document.body.prepend(canvas);
  }
  const ctx = canvas.getContext("2d");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(pointer: fine)").matches;

  // "#c8a24e" -> "200,162,78"
  function cssRgb(name, fallback) {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    const m = /^#([0-9a-f]{6})$/i.exec(v);
    if (!m) return fallback;
    const n = parseInt(m[1], 16);
    return `${n >> 16},${(n >> 8) & 255},${n & 255}`;
  }

  const BG = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim() || "#08080a";
  const COPPER = cssRgb("--copper", "200,162,78");
  const COPPER_HI = cssRgb("--copper-hi", "242,193,78");
  const SIGNAL = cssRgb("--signal", "255,179,71");

  const G = 26;                       // routing grid pitch (px)
  const PROBE_R = 150;                // cursor influence radius
  const DIRS = [[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]];

  let W = 0, H = 0, dpr = 1;
  let traces = [], chips = [], endpoints = [], pulses = [];
  let layer = null;
  let last = 0, ambientClock = 0;
  const pointer = { x: -9999, y: -9999, active: false, lastSpawn: 0 };

  /* ---------- Board generation ---------- */
  function generate() {
    const cols = Math.ceil(W / G) + 1;
    const rows = Math.ceil(H / G) + 1;
    const used = new Uint8Array(cols * rows);
    const id = (c, r) => r * cols + c;
    const inside = (c, r) => c >= 0 && r >= 0 && c < cols && r < rows;
    const free = (c, r) => inside(c, r) && !used[id(c, r)];
    const px = c => c * G + G / 2;

    traces = []; chips = []; endpoints = [];
    const seeds = [];

    // 1. Chip footprints (ICs) with pins that seed traces
    const chipCount = Math.max(3, Math.round((W * H) / 260000));
    for (let k = 0; k < chipCount * 4 && chips.length < chipCount; k++) {
      const w = 3 + Math.floor(Math.random() * 4);
      const h = 2 + Math.floor(Math.random() * 3);
      const c0 = 2 + Math.floor(Math.random() * Math.max(1, cols - w - 4));
      const r0 = 2 + Math.floor(Math.random() * Math.max(1, rows - h - 4));
      let ok = true;
      for (let c = c0 - 2; c <= c0 + w + 1 && ok; c++)
        for (let r = r0 - 2; r <= r0 + h + 1 && ok; r++)
          if (!inside(c, r) || used[id(c, r)]) ok = false;
      if (!ok) continue;
      for (let c = c0; c < c0 + w; c++) for (let r = r0; r < r0 + h; r++) used[id(c, r)] = 1;
      chips.push({ x: px(c0) - G * 0.4, y: px(r0) - G * 0.4, w: (w - 1) * G + G * 0.8, h: (h - 1) * G + G * 0.8 });
      for (let c = c0; c < c0 + w; c++) {
        seeds.push({ c, r: r0 - 1, d: 6, pin: true });
        seeds.push({ c, r: r0 + h, d: 2, pin: true });
      }
      for (let r = r0; r < r0 + h; r++) {
        seeds.push({ c: c0 - 1, r, d: 4, pin: true });
        seeds.push({ c: c0 + w, r, d: 0, pin: true });
      }
    }

    // 2. Random seeds to fill the rest of the board
    const target = Math.round((cols * rows) / 13);
    for (let i = 0; i < target * 3; i++) {
      seeds.push({
        c: Math.floor(Math.random() * cols),
        r: Math.floor(Math.random() * rows),
        d: Math.floor(Math.random() * 4) * 2,
        pin: false
      });
    }

    // 3. Route each seed as a trace with 45° turns, avoiding occupied cells
    for (const s of seeds) {
      if (!s.pin && traces.length >= target) break;
      let { c, r, d } = s;
      if (!free(c, r)) continue;
      const cells = [[c, r]];
      used[id(c, r)] = 1;
      const maxLen = 4 + Math.floor(Math.random() * 20);
      let straight = 0;
      for (let step = 0; step < maxLen; step++) {
        if (straight > 1 && Math.random() < 0.2) { d = (d + (Math.random() < 0.5 ? 1 : 7)) % 8; straight = 0; }
        const [dx, dy] = DIRS[d];
        const nc = c + dx, nr = r + dy;
        if (!free(nc, nr)) break;
        // don't let diagonals cross other diagonals
        if (dx && dy && used[id(c + dx, r)] && used[id(c, r + dy)]) break;
        c = nc; r = nr;
        used[id(c, r)] = 1;
        cells.push([c, r]);
        straight++;
      }
      if (cells.length < 3) continue;

      // keep only corner points
      const pts = [cells[0]];
      for (let i = 1; i < cells.length - 1; i++) {
        const [a, b, n] = [cells[i - 1], cells[i], cells[i + 1]];
        if (b[0] - a[0] !== n[0] - b[0] || b[1] - a[1] !== n[1] - b[1]) pts.push(b);
      }
      pts.push(cells[cells.length - 1]);

      const P = pts.map(([cc, rr]) => ({ x: px(cc), y: px(rr) }));
      const cum = [0];
      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      for (let i = 0; i < P.length; i++) {
        if (i) cum.push(cum[i - 1] + Math.hypot(P[i].x - P[i - 1].x, P[i].y - P[i - 1].y));
        minX = Math.min(minX, P[i].x); maxX = Math.max(maxX, P[i].x);
        minY = Math.min(minY, P[i].y); maxY = Math.max(maxY, P[i].y);
      }
      const tr = {
        pts: P, cum, len: cum[cum.length - 1],
        box: { minX, minY, maxX, maxY },
        width: Math.random() < 0.14 ? 3 : 1.4,   // a few thicker "power" traces
        pin: s.pin
      };
      traces.push(tr);
      endpoints.push({ tr, end: 0, x: P[0].x, y: P[0].y });
      endpoints.push({ tr, end: 1, x: P[P.length - 1].x, y: P[P.length - 1].y });
    }
  }

  /* ---------- Static layer (drawn once per resize) ---------- */
  function drawLayer() {
    layer = document.createElement("canvas");
    layer.width = W * dpr; layer.height = H * dpr;
    const l = layer.getContext("2d");
    l.scale(dpr, dpr);

    // faint fabrication grid
    l.fillStyle = "rgba(200,180,140,0.05)";
    for (let x = G / 2; x < W; x += G) for (let y = G / 2; y < H; y += G) l.fillRect(x - 0.5, y - 0.5, 1, 1);

    // traces
    l.lineJoin = "round"; l.lineCap = "round";
    for (const t of traces) {
      l.beginPath();
      l.moveTo(t.pts[0].x, t.pts[0].y);
      for (let i = 1; i < t.pts.length; i++) l.lineTo(t.pts[i].x, t.pts[i].y);
      l.strokeStyle = `rgba(${COPPER},${t.width > 2 ? 0.2 : 0.16})`;
      l.lineWidth = t.width;
      l.stroke();
    }

    // pads / vias at trace ends
    for (const e of endpoints) {
      l.beginPath();
      l.arc(e.x, e.y, e.tr.pin && e.end === 0 ? 2.2 : 3.4, 0, Math.PI * 2);
      l.fillStyle = BG;
      l.fill();
      l.lineWidth = 1.3;
      l.strokeStyle = `rgba(${COPPER},0.3)`;
      l.stroke();
    }

    // chip footprints with silkscreen outline and pin-1 dot
    for (const c of chips) {
      l.fillStyle = "rgba(16,16,20,0.92)";
      l.strokeStyle = "rgba(230,220,200,0.14)";
      l.lineWidth = 1;
      l.beginPath();
      l.roundRect ? l.roundRect(c.x, c.y, c.w, c.h, 3) : l.rect(c.x, c.y, c.w, c.h);
      l.fill(); l.stroke();
      l.beginPath();
      l.arc(c.x + 7, c.y + 7, 2, 0, Math.PI * 2);
      l.fillStyle = "rgba(230,220,200,0.22)";
      l.fill();
    }
  }

  /* ---------- Geometry helpers ---------- */
  function pointAt(t, d) {
    d = Math.max(0, Math.min(t.len, d));
    let i = 1;
    while (i < t.cum.length - 1 && t.cum[i] < d) i++;
    const a = t.pts[i - 1], b = t.pts[i];
    const seg = t.cum[i] - t.cum[i - 1] || 1;
    const k = (d - t.cum[i - 1]) / seg;
    return { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k };
  }

  function distToSeg(px, py, a, b) {
    const dx = b.x - a.x, dy = b.y - a.y;
    const L = dx * dx + dy * dy || 1;
    let k = ((px - a.x) * dx + (py - a.y) * dy) / L;
    k = Math.max(0, Math.min(1, k));
    return Math.hypot(px - (a.x + dx * k), py - (a.y + dy * k));
  }

  /* ---------- Pulses ---------- */
  function spawn(tr, fromEnd, opts = {}) {
    if (pulses.length > 140) return;
    pulses.push({
      tr,
      dir: fromEnd ? -1 : 1,
      pos: fromEnd ? tr.len : 0,
      speed: opts.speed || 90 + Math.random() * 110,
      tail: opts.tail || 46 + Math.random() * 40,
      color: opts.color || (Math.random() < 0.18 ? COPPER_HI : SIGNAL)
    });
  }

  function spawnNear(x, y, radius, max, opts) {
    const near = endpoints
      .map(e => ({ e, d: Math.hypot(e.x - x, e.y - y) }))
      .filter(o => o.d < radius)
      .sort((a, b) => a.d - b.d)
      .slice(0, max);
    near.forEach(o => spawn(o.e.tr, o.e.end === 1, opts));
    return near.length;
  }

  function drawPulse(p) {
    const steps = 10;
    const pts = [];
    for (let i = 0; i <= steps; i++) pts.push(pointAt(p.tr, p.pos - p.dir * (p.tail * i / steps)));

    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
    ctx.strokeStyle = `rgba(${p.color},0.12)`;
    ctx.lineWidth = 7;
    ctx.stroke();

    for (let i = 1; i < pts.length; i++) {
      ctx.beginPath();
      ctx.moveTo(pts[i - 1].x, pts[i - 1].y);
      ctx.lineTo(pts[i].x, pts[i].y);
      ctx.strokeStyle = `rgba(${p.color},${(1 - i / steps) * 0.95})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    const head = pts[0];
    const g = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 9);
    g.addColorStop(0, `rgba(${p.color},0.95)`);
    g.addColorStop(1, `rgba(${p.color},0)`);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(head.x, head.y, 9, 0, Math.PI * 2);
    ctx.fill();
  }

  /* ---------- Probe (cursor) highlight ---------- */
  function drawProbe() {
    const { x, y } = pointer;
    ctx.lineCap = "round";
    for (const t of traces) {
      const b = t.box;
      if (x < b.minX - PROBE_R || x > b.maxX + PROBE_R || y < b.minY - PROBE_R || y > b.maxY + PROBE_R) continue;
      for (let i = 1; i < t.pts.length; i++) {
        const d = distToSeg(x, y, t.pts[i - 1], t.pts[i]);
        if (d > PROBE_R) continue;
        const a = Math.pow(1 - d / PROBE_R, 1.6);
        ctx.beginPath();
        ctx.moveTo(t.pts[i - 1].x, t.pts[i - 1].y);
        ctx.lineTo(t.pts[i].x, t.pts[i].y);
        ctx.strokeStyle = `rgba(${COPPER_HI},${a * 0.75})`;
        ctx.lineWidth = t.width + 0.6;
        ctx.stroke();
      }
    }
    for (const e of endpoints) {
      const d = Math.hypot(e.x - x, e.y - y);
      if (d > PROBE_R) continue;
      const a = 1 - d / PROBE_R;
      ctx.beginPath();
      ctx.arc(e.x, e.y, 3.6, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${SIGNAL},${a * 0.9})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    if (!finePointer) return;
    // probe crosshair + coordinate readout (like a CAD cursor)
    ctx.strokeStyle = `rgba(${SIGNAL},0.45)`;
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 4]);
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(x - 30, y); ctx.lineTo(x - 24, y);
    ctx.moveTo(x + 24, y); ctx.lineTo(x + 30, y);
    ctx.moveTo(x, y - 30); ctx.lineTo(x, y - 24);
    ctx.moveTo(x, y + 24); ctx.lineTo(x, y + 30);
    ctx.stroke();
    ctx.font = "10px 'JetBrains Mono', monospace";
    ctx.fillStyle = `rgba(${SIGNAL},0.7)`;
    ctx.fillText(`X ${(x * 0.1).toFixed(1)}  Y ${(y * 0.1).toFixed(1)} mm`, x + 30, y + 34);
  }

  /* ---------- Frame loop ---------- */
  function frame(now) {
    const dt = Math.min(0.05, (now - (last || now)) / 1000);
    last = now;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(layer, 0, 0, W, H);

    // ambient signal traffic
    ambientClock += dt;
    const ambientTarget = Math.min(40, Math.round(traces.length * 0.12));
    if (ambientClock > 0.12 && pulses.length < ambientTarget && traces.length) {
      ambientClock = 0;
      spawn(traces[Math.floor(Math.random() * traces.length)], Math.random() < 0.5);
    }

    // pointer emits pulses from nearby pads while it moves
    if (pointer.active && now - pointer.lastSpawn > 110) {
      pointer.lastSpawn = now;
      spawnNear(pointer.x, pointer.y, PROBE_R * 0.8, 1);
    }

    if (pointer.active) drawProbe();

    ctx.lineCap = "round";
    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i];
      p.pos += p.dir * p.speed * dt;
      if (p.pos < -p.tail || p.pos > p.tr.len + p.tail) { pulses.splice(i, 1); continue; }
      drawPulse(p);
    }

    requestAnimationFrame(frame);
  }

  /* ---------- Setup ---------- */
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    pulses = [];
    generate();
    drawLayer();
    if (reduceMotion) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(layer, 0, 0, W, H);
    }
  }

  let resizeTimer;
  let lastW = window.innerWidth;
  window.addEventListener("resize", () => {
    // ignore mobile URL-bar height jitter; only re-route when the size changes noticeably
    if (Math.abs(window.innerWidth - lastW) < 40 && Math.abs(window.innerHeight - H) < 160) return;
    lastW = window.innerWidth;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 180);
  });

  resize();
  if (reduceMotion) return;

  window.addEventListener("pointermove", e => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.active = e.pointerType !== "touch";
  }, { passive: true });

  document.addEventListener("pointerleave", () => { pointer.active = false; });
  window.addEventListener("blur", () => { pointer.active = false; });

  // scrolling "drives current" through the board: faster scroll → more pulses
  let lastScrollY = window.scrollY, scrollEnergy = 0;
  window.addEventListener("scroll", () => {
    scrollEnergy = Math.min(600, scrollEnergy + Math.abs(window.scrollY - lastScrollY));
    lastScrollY = window.scrollY;
  }, { passive: true });
  setInterval(() => {
    if (!traces.length || scrollEnergy < 40) { scrollEnergy *= 0.5; return; }
    const n = Math.min(4, Math.floor(scrollEnergy / 80));
    for (let i = 0; i < n; i++) {
      spawn(traces[Math.floor(Math.random() * traces.length)], Math.random() < 0.5, { speed: 200 + Math.random() * 120 });
    }
    scrollEnergy = 0;
  }, 120);

  window.addEventListener("pointerdown", e => {
    // signal burst from the pads around the click
    const n = spawnNear(e.clientX, e.clientY, 220, 18, { speed: 220 + Math.random() * 80, tail: 70, color: SIGNAL });
    if (!n) spawnNear(e.clientX, e.clientY, 600, 4, { speed: 240, tail: 70 });
  }, { passive: true });

  requestAnimationFrame(frame);
})();

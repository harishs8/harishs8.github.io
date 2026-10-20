/**
 * ============================================
 * SITE SHELL + SCROLL ANIMATIONS
 * ============================================
 * Loaded (with defer) on every page. It:
 * 1. Builds the shared header + footer, so navigation is edited in ONE place (NAV below)
 * 2. Highlights the current page in the nav and handles the mobile menu
 * 3. Draws the gold scroll-progress line under the header
 * 4. Reveals .reveal elements as they scroll into view (staggered inside [data-stagger])
 * 5. Counts numbers up ([data-count]) when they appear
 * 6. Draws scroll-linked timelines (.timeline) and the home-page scroll rail (.scroll-rail)
 * 7. Adds a gentle parallax to [data-parallax] elements
 */
(() => {
  const NAV = [
    { href: "/", label: "Home", match: p => p === "/" || p === "/index.html" },
    { href: "/projects.html", label: "Projects", match: p => p.startsWith("/projects") },
    { href: "/experience.html", label: "Experience", match: p => p.startsWith("/experience") },
    { href: "/contact.html", label: "Contact", match: p => p.startsWith("/contact") }
  ];

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const path = location.pathname;

  /* ---------- 1. Header ---------- */
  const header = document.getElementById("site-header");
  if (header) {
    header.classList.add("site-header");
    header.innerHTML = `
      <div class="container nav">
        <a href="/" class="brand" aria-label="Harishkumaar — home">
          <span class="brand-mark">HK</span>
          <span>Harishkumaar</span>
        </a>
        <nav class="nav-links" id="navLinks" aria-label="Main navigation">
          ${NAV.map(n => `<a href="${n.href}"${n.match(path) ? ' class="active" aria-current="page"' : ""}>${n.label}</a>`).join("")}
        </nav>
        <a class="button nav-cta" href="/contact.html">Let’s talk</a>
        <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="navLinks">☰</button>
      </div>
      <div class="scroll-progress" aria-hidden="true"></div>`;

    const toggle = header.querySelector(".nav-toggle");
    const links = header.querySelector(".nav-links");
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "✕" : "☰";
    });
  }

  /* ---------- 1b. Footer ---------- */
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.classList.add("site-footer");
    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>
            <a href="/" class="brand"><span class="brand-mark">HK</span><span>Harishkumaar</span></a>
            <p>Hardware design engineer — PCB layout, embedded systems, battery management and power electronics.</p>
          </div>
          <div>
            <h4>Pages</h4>
            <ul>${NAV.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}</ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:hk@harishkumaar.in">hk@harishkumaar.in</a></li>
              <li><a href="https://www.linkedin.com/in/harishkumaarm/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
              <li><a href="https://harishkumaar.in" target="_blank" rel="noopener noreferrer">harishkumaar.in ↗</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-base">
          <span>© ${new Date().getFullYear()} Harishkumaar</span>
          <span class="ref">Designed &amp; routed by hand · Rotterdam</span>
        </div>
      </div>`;
  }

  /* ---------- 4. Reveal on scroll ---------- */
  // Case-study sections reveal automatically
  document.querySelectorAll(".case-main > .project-section, .case > .project-tags, .case-aside > *, .case-next > *").forEach(el => el.classList.add("reveal"));

  // Stagger children inside [data-stagger]
  function applyStagger(root = document) {
    const groups = [...root.querySelectorAll("[data-stagger]")];
    if (root.matches?.("[data-stagger]")) groups.push(root);
    groups.forEach(group => {
      const step = Number(group.dataset.stagger) || 90;
      [...group.children].filter(c => c.classList.contains("reveal"))
        .forEach((c, i) => c.style.setProperty("--d", `${(i % 6) * step}ms`));
    });
  }

  const io = "IntersectionObserver" in window && !reduceMotion
    ? new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (!en.isIntersecting) return;
          en.target.classList.add("in");
          if (en.target.dataset.count !== undefined) countUp(en.target);
          io.unobserve(en.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" })
    : null;

  function observe(el) {
    if (io) io.observe(el);
    else el.classList.add("in");
  }

  function observeAll(root = document) {
    applyStagger(root);
    root.querySelectorAll(".reveal:not(.in), [data-count]:not([data-counted])").forEach(observe);
  }

  /* ---------- 5. Count-up numbers ---------- */
  function countUp(el) {
    el.dataset.counted = "";
    const target = Number(el.dataset.count);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    if (reduceMotion || !target) { el.textContent = prefix + target + suffix; return; }
    const dur = 1400;
    const t0 = performance.now();
    (function tick(now) {
      const k = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (k < 1) requestAnimationFrame(tick);
    })(t0);
  }

  // Start counters at 0 so they visibly count (text in HTML is the final value for no-JS)
  const zero = el => { el.textContent = (el.dataset.prefix || "") + "0" + (el.dataset.suffix || ""); };
  if (!reduceMotion) document.querySelectorAll("[data-count]").forEach(zero);

  /* ---------- 6. Scroll-linked pieces ---------- */
  const progressBar = document.querySelector(".scroll-progress");
  const timelines = [...document.querySelectorAll(".timeline")];
  timelines.forEach(t => {
    if (!t.querySelector(".timeline-fill")) {
      const fill = document.createElement("div");
      fill.className = "timeline-fill";
      t.prepend(fill);
    }
  });

  // Home-page rail: one node per section listed in data-sections
  const rail = document.querySelector(".scroll-rail");
  let railSections = [], railNodes = [];
  if (rail) {
    railSections = rail.dataset.sections.split(",").map(s => {
      const [id, label] = s.split(":");
      return { el: document.getElementById(id.trim()), id: id.trim(), label: (label || id).trim() };
    }).filter(s => s.el);
    rail.innerHTML = `<div class="rail-fill"></div>` + railSections.map((s, i) =>
      `<a class="rail-node" href="#${s.id}" style="top:${(i / Math.max(1, railSections.length - 1)) * 100}%" aria-label="${s.label}"><span>${s.label}</span></a>`
    ).join("");
    railNodes = [...rail.querySelectorAll(".rail-node")];
  }

  const parallax = [...document.querySelectorAll("[data-parallax]")];

  function onScroll() {
    const y = window.scrollY;
    const vh = window.innerHeight;
    const max = document.documentElement.scrollHeight - vh;

    if (progressBar) progressBar.style.setProperty("--progress", max > 0 ? (y / max).toFixed(4) : 0);

    // timelines: the copper trace grows as the timeline passes the 60% line of the viewport
    for (const t of timelines) {
      const r = t.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (vh * 0.6 - r.top) / r.height));
      t.style.setProperty("--p", p.toFixed(4));
      const tipY = r.top + p * r.height;
      t.querySelectorAll(".tl-item").forEach(item => {
        item.classList.toggle("lit", item.getBoundingClientRect().top + 26 <= tipY);
      });
    }

    // rail: interpolate between sections around the middle of the viewport
    if (railSections.length > 1) {
      const mid = y + vh * 0.45;
      const tops = railSections.map(s => s.el.getBoundingClientRect().top + y);
      let i = 0;
      while (i < tops.length - 1 && mid >= tops[i + 1]) i++;
      const next = tops[i + 1] ?? document.documentElement.scrollHeight;
      const frac = Math.max(0, Math.min(1, (mid - tops[i]) / (next - tops[i])));
      const atBottom = y >= max - 4;
      const value = atBottom ? 1 : Math.min(1, (i + (i < tops.length - 1 ? frac : 0)) / (tops.length - 1));
      rail.style.setProperty("--rail", value.toFixed(4));
      railNodes.forEach((n, k) => {
        n.classList.toggle("lit", k / (tops.length - 1) <= value + 0.001);
        n.classList.toggle("current", atBottom ? k === tops.length - 1 : k === i);
      });
    }

    // parallax: drift up and fade as you scroll past
    if (!reduceMotion) {
      for (const el of parallax) {
        const speed = Number(el.dataset.parallax) || 0.15;
        const k = Math.min(1, y / (vh * 0.9));
        el.style.transform = `translateY(${(-y * speed).toFixed(1)}px)`;
        el.style.opacity = (1 - k * 0.65).toFixed(3);
      }
    }
  }

  let ticking = false;
  function requestScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; onScroll(); });
  }

  window.addEventListener("scroll", requestScroll, { passive: true });
  window.addEventListener("resize", requestScroll);

  observeAll();
  onScroll();

  // Pages that add content later (projects.js) call Site.refresh(container)
  window.Site = {
    refresh(root = document) { observeAll(root); onScroll(); }
  };
})();

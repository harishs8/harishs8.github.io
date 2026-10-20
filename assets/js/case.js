/**
 * ============================================
 * CASE-STUDY PAGE EXTRAS (projects/*.html)
 * ============================================
 * Fills <aside id="caseAside"> with:
 *   - project facts (category / company) looked up in portfolio-data.js by page URL
 *   - an "On this page" outline built from the section headings; a trace fills
 *     and nodes light up as you read (same idea as the experience timeline)
 * and adds previous / next project links above the bottom footer.
 * Nothing to edit here when you add a project: just write <section class="project-section"><h2>…</h2>.
 */
(() => {
  const main = document.querySelector(".case-main");
  const aside = document.getElementById("caseAside");
  if (!main || !aside) return;

  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const all = typeof portfolioProjects !== "undefined" ? portfolioProjects : [];
  const here = location.pathname.toLowerCase();
  const me = all.find(p => (p.modal?.caseStudyLink || "").toLowerCase() === here);

  /* ---------- Sections → outline ---------- */
  const sections = [...main.querySelectorAll(":scope > .project-section")].filter(s => s.querySelector("h2"));
  sections.forEach((s, i) => {
    if (!s.id) {
      s.id = s.querySelector("h2").textContent.trim().toLowerCase()
        .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || `section-${i + 1}`;
    }
  });

  /* ---------- Key numbers strip under the title ---------- */
  const tags = document.querySelector(".case > .project-tags");
  if (me?.metrics?.length && tags) {
    const animate = !matchMedia("(prefers-reduced-motion: reduce)").matches;
    const strip = document.createElement("dl");
    strip.className = "case-metrics reveal";
    strip.setAttribute("aria-label", "Key numbers");
    strip.innerHTML = me.metrics.slice(0, 4).map(m => {
      // count up plain numbers like "250 W", "<20 ms", "−60%" — leave ranges like "36/48 V" static
      const n = /^([<>~−-]?)(\d+)(\D*)$/.exec(m.value);
      const count = n && animate && Number(n[2]) > 0
        ? ` data-count="${n[2]}" data-prefix="${esc(n[1])}" data-suffix="${esc(n[3])}"` : "";
      const shown = count ? `${esc(n[1])}0${esc(n[3])}` : esc(m.value);
      return `<div><dt>${esc(m.label)}</dt><dd${count}>${shown}</dd></div>`;
    }).join("");
    tags.after(strip);
  }

  const facts = [["Category", me?.category], ["Company", me?.company]].filter(f => f[1]);

  aside.innerHTML =
    (facts.length ? `
      <div class="aside-card panel">
        <span class="ref">Project</span>
        <dl>${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
      </div>` : "") +
    (sections.length > 1 ? `
      <div class="aside-card panel toc-card">
        <span class="ref">On this page</span>
        <nav class="toc" aria-label="On this page">
          <div class="toc-fill"></div>
          ${sections.map(s => `<a href="#${s.id}">${esc(s.querySelector("h2").textContent.trim())}</a>`).join("")}
        </nav>
      </div>` : "");

  /* ---------- Previous / next project (same order as the projects page) ---------- */
  const visible = all.filter(p => p.visible).sort((a, b) => Number(b.featured) - Number(a.featured));
  const idx = me ? visible.indexOf(me) : -1;
  const footer = main.querySelector(".project-footer");
  if (idx !== -1 && visible.length > 1 && footer) {
    const prev = visible[(idx - 1 + visible.length) % visible.length];
    const next = visible[(idx + 1) % visible.length];
    const nav = document.createElement("nav");
    nav.className = "case-next";
    nav.setAttribute("aria-label", "More projects");
    nav.innerHTML = `
      <a class="panel prev" href="${esc(prev.modal.caseStudyLink)}"><span class="ref">← Previous project</span><strong>${esc(prev.title)}</strong></a>
      <a class="panel next" href="${esc(next.modal.caseStudyLink)}"><span class="ref">Next project →</span><strong>${esc(next.title)}</strong></a>`;
    footer.before(nav);
  }

  [...aside.children, ...main.querySelectorAll(".case-next > *")].forEach(el => el.classList.add("reveal"));
  window.Site?.refresh();

  /* ---------- Scroll-spy for the outline ---------- */
  const links = [...aside.querySelectorAll(".toc a")];
  const fill = aside.querySelector(".toc-fill");
  if (!links.length) return;

  function update() {
    const y = window.scrollY;
    const mid = y + window.innerHeight * 0.35;
    const tops = sections.map(s => s.getBoundingClientRect().top + y);
    let i = -1;
    while (i < tops.length - 1 && mid >= tops[i + 1]) i++;

    const atBottom = y + window.innerHeight >= document.documentElement.scrollHeight - 4;
    if (atBottom) i = tops.length - 1;

    links.forEach((a, k) => {
      a.classList.toggle("lit", k <= i);
      a.classList.toggle("current", k === i);
    });

    // fill the trace to the current node, then part-way towards the next one
    const nodeY = a => a.offsetTop + 13;
    let h = 0;
    if (i >= 0) {
      h = nodeY(links[i]);
      if (i < links.length - 1 && !atBottom) {
        const frac = Math.max(0, Math.min(1, (mid - tops[i]) / (tops[i + 1] - tops[i])));
        h += frac * (nodeY(links[i + 1]) - nodeY(links[i]));
      }
    }
    fill.style.height = Math.max(0, h - 10) + "px";
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; update(); });
  }, { passive: true });
  window.addEventListener("resize", update);
  update();
})();

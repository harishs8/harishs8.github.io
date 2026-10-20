/**
 * ============================================
 * PROJECT CARDS
 * ============================================
 * Builds project cards from portfolioProjects (portfolio-data.js).
 * Each card links straight to its case-study page (modal.caseStudyLink).
 *
 * Usage in HTML:
 *   <div class="project-grid" data-projects="featured" data-limit="3"></div>   ← home page
 *   <div class="filters" id="projectFilters"></div>
 *   <div class="project-grid" data-projects="all"></div>                       ← projects page
 *
 * Only projects with visible: true are shown. Featured projects come first.
 * The filter buttons are made from each project's `category`.
 */
(() => {
  if (typeof portfolioProjects === "undefined") return;

  const visible = portfolioProjects
    .filter(p => p.visible)
    .sort((a, b) => Number(b.featured) - Number(a.featured));

  const url = src => (/^(https?:)?\//.test(src) ? src : "/" + src);
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function card(p) {
    const a = document.createElement("a");
    a.className = "project-card reveal";
    a.href = p.modal?.caseStudyLink || p.modal?.companyWebsite || "#";
    a.dataset.category = p.category || "Other";
    a.innerHTML = `
      <div class="project-thumb">
        ${p.featured ? '<span class="project-badge">★ Featured</span>' : ""}
        <img src="${esc(url(p.thumbnail))}" alt="" loading="lazy">
      </div>
      <div class="project-body">
        <div class="project-meta">${esc(p.category || "")}${p.company ? " · " + esc(p.company) : ""}</div>
        <h3>${esc(p.title)}</h3>
        ${p.metrics?.length ? `
        <dl class="card-metrics">
          ${p.metrics.slice(0, 3).map(m => `<div><dt>${esc(m.label)}</dt><dd>${esc(m.value)}</dd></div>`).join("")}
        </dl>` : ""}
        <p>${esc(p.shortDescription)}</p>
        <div class="tags">${(p.tags || []).slice(0, 4).map(t => `<span>${esc(t)}</span>`).join("")}</div>
        <span class="project-cta">Read case study</span>
      </div>`;

    // Missing thumbnail → tidy placeholder instead of a broken image
    const img = a.querySelector("img");
    img.addEventListener("error", () => { img.parentElement.classList.add("no-image"); img.remove(); });
    return a;
  }

  document.querySelectorAll("[data-projects]").forEach(grid => {
    const mode = grid.dataset.projects;
    const limit = Number(grid.dataset.limit) || Infinity;
    grid.setAttribute("data-stagger", "90");

    function render(items) {
      grid.innerHTML = "";
      items.forEach(p => grid.appendChild(card(p)));
      window.Site?.refresh(grid);
    }

    render(visible.slice(0, limit));

    // Filters (projects page only)
    const filters = document.getElementById("projectFilters");
    if (!filters || mode !== "all") return;

    const cats = [...new Set(visible.map(p => p.category || "Other"))];
    const count = c => visible.filter(p => (p.category || "Other") === c).length;
    const initial = new URLSearchParams(location.search).get("category");

    filters.innerHTML =
      `<button type="button" class="filter" data-cat="all">All<span>${visible.length}</span></button>` +
      cats.map(c => `<button type="button" class="filter" data-cat="${esc(c)}">${esc(c)}<span>${count(c)}</span></button>`).join("");

    function select(cat) {
      filters.querySelectorAll(".filter").forEach(b => {
        const on = b.dataset.cat === cat;
        b.classList.toggle("active", on);
        b.setAttribute("aria-pressed", String(on));
      });
      render(cat === "all" ? visible : visible.filter(p => (p.category || "Other") === cat));
      const q = cat === "all" ? location.pathname : `${location.pathname}?category=${encodeURIComponent(cat)}`;
      history.replaceState(null, "", q);
    }

    filters.addEventListener("click", e => {
      const b = e.target.closest(".filter");
      if (b) select(b.dataset.cat);
    });

    select(cats.includes(initial) ? initial : "all");
  });
})();

const featuredGrid = document.getElementById("featuredGrid");
const moreGrid = document.getElementById("moreProjectsGrid");
const toggleBtn = document.getElementById("toggleProjects");
const otherGrid = document.getElementById("otherGrid");


const overlay = document.getElementById("portfolioOverlay");
const modal = document.querySelector(".portfolio-modal");

/* -----------------------------
   BUILD PORTFOLIO CARDS
----------------------------- */

portfolioProjects.forEach(project => {
  const card = document.createElement("div");
  card.className = "portfolio-card";
  card.onclick = () => openPortfolio(project.id);

  card.innerHTML = `
    <div class="portfolio-thumb">
      <img src="${project.thumbnail}" alt="${project.title}">
    </div>
    <div class="portfolio-content">
      <h3>${project.title}</h3>
      <p>${project.shortDescription}</p>
      <div class="portfolio-tags">
        ${project.tags.slice(0, 3).map(t => `<span>${t}</span>`).join("")}
      </div>
    </div>
  `;

  project.featured
    ? featuredGrid.appendChild(card)
    : moreGrid.appendChild(card);
});

/* -----------------------------
   TOGGLE MORE PROJECTS
----------------------------- */

toggleBtn.addEventListener("click", () => {
  moreGrid.classList.toggle("collapsed");
  toggleBtn.classList.toggle("open");

  toggleBtn.querySelector("span").textContent =
    moreGrid.classList.contains("collapsed")
      ? "More projects"
      : "Fewer projects";
});

/* -----------------------------
   MODAL OPEN
----------------------------- */

function openPortfolio(id) {
  const p = portfolioProjects.find(x => x.id === id);
  if (!p) return;

  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalDescription").textContent =
    p.modal?.description || "";

  const companyLink = document.getElementById("modalCompany");
  if (p.modal?.companyWebsite) {
    companyLink.href = p.modal.companyWebsite;
    companyLink.style.display = "inline";
  } else {
    companyLink.style.display = "none";
  }

  /* Images */
  const imgs = document.getElementById("modalImages");
  imgs.innerHTML = "";
  (p.modal?.images || []).forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";
    imgs.appendChild(img);
  });

  /* Bullets */
  const list = document.getElementById("modalList");
  list.innerHTML = "";
  (p.modal?.bullets || []).forEach(b => {
    const li = document.createElement("li");
    li.textContent = b;
    list.appendChild(li);
  });

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

/* -----------------------------
   MODAL CLOSE
----------------------------- */

function closePortfolio() {
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

overlay.addEventListener("click", closePortfolio);
modal.addEventListener("click", e => e.stopPropagation());

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && overlay.classList.contains("active")) {
    closePortfolio();
  }
});

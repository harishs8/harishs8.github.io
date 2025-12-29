/* =========================================================
   PORTFOLIO – GRID + MODAL + EXPAND
========================================================= */

/* -----------------------------
   DOM REFERENCES
----------------------------- */

const featuredGrid = document.getElementById("featuredGrid");
const otherGrid = document.getElementById("otherGrid");
const toggleBtn = document.getElementById("toggleProjects");

const overlay = document.getElementById("portfolioOverlay");
const modal = document.querySelector(".portfolio-modal");

/* Safety check */
if (!featuredGrid || !otherGrid || !overlay || !modal) {
  console.warn("Portfolio elements missing in DOM");
}

/* -----------------------------
   BUILD PORTFOLIO CARDS
----------------------------- */

portfolioProjects.forEach(project => {
  const card = document.createElement("div");
  card.className = "portfolio-card";
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");

  card.onclick = () => openPortfolio(project.id);
  card.onkeypress = e => {
    if (e.key === "Enter") openPortfolio(project.id);
  };

  card.innerHTML = `
    <div class="portfolio-thumb">
      <img src="${project.thumbnail}" alt="${project.title}">
    </div>

    <div class="portfolio-content">
      <h3>${project.title}</h3>
      <p>${project.shortDescription}</p>

      <div class="portfolio-tags">
        ${project.tags.slice(0, 3).map(tag => `<span>${tag}</span>`).join("")}
      </div>
    </div>
  `;

  if (project.featured) {
    featuredGrid.appendChild(card);
  } else {
    otherGrid.appendChild(card);
  }
});

/* -----------------------------
   EXPAND / COLLAPSE OTHER PROJECTS
----------------------------- */

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    otherGrid.classList.toggle("hidden");

    toggleBtn.innerHTML = otherGrid.classList.contains("hidden")
      ? `Show more projects <span>↓</span>`
      : `Show fewer projects <span>↑</span>`;
  });
}

/* -----------------------------
   OPEN MODAL
----------------------------- */

function openPortfolio(id) {
  const project = portfolioProjects.find(p => p.id === id);
  if (!project) return;

  /* Title & Description */
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDescription").textContent =
    project.modal?.description || "";

  /* Company link (Read More / Project Page) */
  const companyLink = document.getElementById("modalCompany");
  if (companyLink && project.modal?.companyWebsite) {
    companyLink.href = project.modal.companyWebsite;
    companyLink.style.display = "inline";
  } else if (companyLink) {
    companyLink.style.display = "none";
  }

  /* -----------------------------
     MODAL IMAGES
  ----------------------------- */

  const imagesContainer = document.getElementById("modalImages");
  imagesContainer.innerHTML = "";

  if (project.modal?.images?.length) {
    project.modal.images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.loading = "lazy";
      img.alt = project.title;
      imagesContainer.appendChild(img);
    });
  }

  /* -----------------------------
     MODAL BULLETS
  ----------------------------- */

  const bulletList = document.getElementById("modalList");
  bulletList.innerHTML = "";

  if (project.modal?.bullets?.length) {
    project.modal.bullets.forEach(text => {
      const li = document.createElement("li");
      li.textContent = text;
      bulletList.appendChild(li);
    });
  }

  /* Show modal */
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

/* -----------------------------
   CLOSE MODAL
----------------------------- */

function closePortfolio() {
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

/* Click outside closes */
overlay.addEventListener("click", closePortfolio);

/* Prevent inner modal clicks */
modal.addEventListener("click", e => e.stopPropagation());

/* ESC key closes */
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && overlay.classList.contains("active")) {
    closePortfolio();
  }
});

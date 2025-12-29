const featuredGrid = document.getElementById("featuredGrid");
const otherGrid = document.getElementById("otherGrid");
const toggleBtn = document.getElementById("toggleProjects");

const overlay = document.getElementById("portfolioOverlay");
const modal = document.querySelector(".portfolio-modal");

/* -----------------------------
   BUILD PORTFOLIO CARDS
----------------------------- */

portfolioProjects.forEach(p => {
  const card = document.createElement("div");
  card.className = "portfolio-card";
  card.onclick = () => openPortfolio(p.id);

  card.innerHTML = `
    <div class="portfolio-thumb">
      <img src="${p.thumbnail}" alt="">
    </div>
    <div class="portfolio-content">
      <h3>${p.title}</h3>
      <p>${p.shortDescription}</p>
      <div class="portfolio-tags">
        ${p.tags.slice(0, 5).map(t => `<span>${t}</span>`).join("")}
      </div>
    </div>
  `;

  if (p.featured) {
    card.classList.add("featured");
    featuredGrid.appendChild(card);
  } else {
    otherGrid.appendChild(card);
  }
});

/* -----------------------------
   EXPAND / COLLAPSE
----------------------------- */

toggleBtn.addEventListener("click", () => {
  otherGrid.classList.toggle("hidden");

  toggleBtn.textContent = otherGrid.classList.contains("hidden")
    ? "Show more projects ↓"
    : "Show fewer projects ↑";
});

/* -----------------------------
   MODAL OPEN
----------------------------- */

function openPortfolio(id) {
  const p = portfolioProjects.find(x => x.id === id);
  if (!p) return;

  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalDescription").textContent = p.modal.description;

  document.getElementById("modalCompany").href = p.modal.companyWebsite || "#";

  /* Images */
  const imgs = document.getElementById("modalImages");
  imgs.innerHTML = "";
  p.modal.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";
    imgs.appendChild(img);
  });

  /* Bullets */
  const list = document.getElementById("modalList");
  list.innerHTML = "";
  if (p.modal.bullets) {
    p.modal.bullets.forEach(b => {
      const li = document.createElement("li");
      li.textContent = b;
      list.appendChild(li);
    });
  }

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

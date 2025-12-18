const grid = document.getElementById("portfolioGrid");
const overlay = document.getElementById("portfolioOverlay");
const modal = document.querySelector(".portfolio-modal");

/* Build cards */
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
        ${p.tags.map(t => `<span>${t}</span>`).join("")}
      </div>
    </div>
  `;

  grid.appendChild(card);
});

/* Open modal */
function openPortfolio(id) {
  const p = portfolioProjects.find(x => x.id === id);
  if (!p) return;

  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalDescription").textContent = p.modal.description;
  document.getElementById("modalLink").href = p.modal.link;

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

/* Close modal */
function closePortfolio() {
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

/* Click outside closes */
overlay.addEventListener("click", closePortfolio);

/* Prevent inner clicks */
modal.addEventListener("click", e => e.stopPropagation());

/* ESC key */
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && overlay.classList.contains("active")) {
    closePortfolio();
  }
});

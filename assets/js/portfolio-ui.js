const grid = document.getElementById("portfolioGrid");
const overlay = document.getElementById("portfolioOverlay");

portfolioProjects.forEach(p => {
  const card = document.createElement("div");
  card.className = "portfolio-card";
  card.onclick = () => openPortfolio(p.id);

  card.innerHTML = `
    <div class="portfolio-thumb">
      <img src="${p.thumbnail}">
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

function openPortfolio(id) {
  const p = portfolioProjects.find(x => x.id === id);
  if (!p) return;

  document.getElementById("modalTitle").innerText = p.title;
  document.getElementById("modalDescription").innerText = p.modal.description;
  document.getElementById("modalLink").href = p.modal.link;

  const imgs = document.getElementById("modalImages");
  imgs.innerHTML = "";
  p.modal.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.style.width = "100%";
    imgs.appendChild(img);
  });

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePortfolio() {
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

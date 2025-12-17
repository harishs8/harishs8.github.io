const grid = document.getElementById("portfolioGrid");
const overlay = document.getElementById("portfolioOverlay");

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
        ${project.tags.map(t => `<span>${t}</span>`).join("")}
      </div>
    </div>
  `;

  grid.appendChild(card);
});

function openPortfolio(id) {
  const project = portfolioProjects.find(p => p.id === id);
  if (!project) return;

  document.getElementById("modalTitle").innerText = project.title;
  document.getElementById("modalDescription").innerText =
    project.modal.description;

  const images = document.getElementById("modalImages");
  images.innerHTML = "";
  project.modal.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    images.appendChild(img);
  });

  const list = document.getElementById("modalList");
  list.innerHTML = "";
  project.modal.bullets.forEach(b => {
    const li = document.createElement("li");
    li.innerText = b;
    list.appendChild(li);
  });

  document.getElementById("modalLink").href = project.modal.link;

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePortfolio() {
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

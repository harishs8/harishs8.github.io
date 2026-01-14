/**
 * ============================================
 * PORTFOLIO UI - Dynamic Card & Modal System
 * ============================================
 * This file creates and manages the portfolio cards:
 * 1. Builds portfolio tile cards from data
 * 2. Separates featured (top) vs other projects
 * 3. Handles expand/collapse of project list
 * 4. Manages portfolio detail modal (popup)
 */

// Get references to HTML elements we'll manipulate
const featuredGrid = document.getElementById("featuredGrid");
const otherGrid = document.getElementById("otherGrid");
const toggleBtn = document.getElementById("toggleProjects");

const overlay = document.getElementById("portfolioOverlay");
const modal = document.querySelector(".portfolio-modal");

/**
 * ============================================
 * SECTION 1: BUILD PORTFOLIO CARDS
 * ============================================
 * Loop through portfolioProjects array (from portfolio-data.js)
 * For each project, create a clickable card with image and info
 * Featured projects go to top grid, others go to hidden grid below
 */
portfolioProjects.forEach(p => {
  const card = document.createElement("div");
  card.className = "portfolio-card";
  // When clicked, open the modal for this project
  card.onclick = () => openPortfolio(p.id);

  // Build card HTML with project info
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

  // Separate featured from other projects
  if (p.featured) {
    card.classList.add("featured");
    featuredGrid.appendChild(card);
  } else {
    otherGrid.appendChild(card);
  }
});

/**
 * ============================================
 * SECTION 2: SHOW MORE / SHOW LESS TOGGLE
 * ============================================
 * When user clicks "Show more projects" button,
 * toggle the "hidden" class to show/hide otherGrid
 * Also update button text to show state
 */
toggleBtn.addEventListener("click", () => {
  otherGrid.classList.toggle("hidden");

  toggleBtn.textContent = otherGrid.classList.contains("hidden")
    ? "Show more projects ↓"
    : "Show fewer projects ↑";
});

/**
 * ============================================
 * SECTION 3: OPEN PROJECT MODAL
 * ============================================
 * openPortfolio(id) - When user clicks a project card:
 * 1. Find the project data by ID
 * 2. Fill modal with project title, description, images, bullets
 * 3. Display the modal overlay (popup)
 * 4. Prevent background page from scrolling
 */
function openPortfolio(id) {
  const p = portfolioProjects.find(x => x.id === id);
  if (!p) return;

  // Set modal title and description
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalDescription").textContent = p.modal.description;

  // Set link to company website or project page
  document.getElementById("modalCompany").href = p.modal.companyWebsite || "#";

  /**
   * Add images to modal gallery
   * Loading: "lazy" means images only load when visible (faster page)
   */
  const imgs = document.getElementById("modalImages");
  imgs.innerHTML = "";
  p.modal.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";
    imgs.appendChild(img);
  });

  /**
   * Add bullet points (key achievements/specs)
   * Empty list first, then add each bullet item
   */
  const list = document.getElementById("modalList");
  list.innerHTML = "";
  if (p.modal.bullets) {
    p.modal.bullets.forEach(b => {
      const li = document.createElement("li");
      li.textContent = b;
      list.appendChild(li);
    });
  }

  // Show the modal and prevent background scrolling
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

/**
 * ============================================
 * SECTION 4: CLOSE PROJECT MODAL
 * ============================================
 * closePortfolio() - Hides the modal and restores page scrolling
 */
function closePortfolio() {
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

/**
 * Three ways user can close the modal:
 * 1. Click outside the modal (on dark overlay)
 * 2. Click inside the modal content (don't close - stopPropagation prevents this)
 * 3. Press Escape key (handled by event listener below)
 */
overlay.addEventListener("click", closePortfolio);
modal.addEventListener("click", e => e.stopPropagation());

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && overlay.classList.contains("active")) {
    closePortfolio();
  }
});

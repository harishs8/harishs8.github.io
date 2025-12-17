function toggleCard(card) {
  document
    .querySelectorAll(".exp-card.active")
    .forEach(c => c !== card && c.classList.remove("active"));

  card.classList.toggle("active");
}

function toggleCard(card) {
  card.classList.toggle("active");
}

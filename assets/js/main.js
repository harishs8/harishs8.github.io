function toggleCard(clickedCard) {
  const cards = document.querySelectorAll(".exp-card");

  cards.forEach(card => {
    if (card !== clickedCard) {
      card.classList.remove("active");
    }
  });

  clickedCard.classList.toggle("active");
}



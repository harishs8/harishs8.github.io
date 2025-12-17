function toggleCard(clickedCard) {
  const allCards = document.querySelectorAll(".exp-card");

  allCards.forEach(card => {
    if (card !== clickedCard) {
      card.classList.remove("active"); // close others
    }
  });

  clickedCard.classList.toggle("active"); // toggle clicked one
}

function togglePortfolio(card) {
  const cards = document.querySelectorAll(".portfolio-card");

  cards.forEach(c => {
    if (c !== card) c.classList.remove("active");
  });

  card.classList.toggle("active");
}





const portfolioData = {
  rover: {
    title: "Autonomous Rover Control PCB",
    image: "/assets/images/rover-main.jpg",
    description:
      "Designed a multi-layer control PCB supporting sensor fusion, closed-loop motor control, and efficient power distribution under tight EMI constraints.",
    bullets: [
      "4-layer PCB with split analog/digital grounds",
      "STM32 + IMU sensor fusion",
      "Motor driver thermal optimization"
    ],
    link: "/projects/rover.html"
  }
  
};
const portfolioData = {
  power: {
    title: "Low-Noise Power Supply Module",
    image: "/assets/images/power-main.jpg",
    description:
      "Designed a multi-layer control PCB supporting sensor fusion, closed-loop motor control, and efficient power distribution under tight EMI constraints.",
    bullets: [
      "4-layer PCB with split analog/digital grounds",
      "STM32 + IMU sensor fusion",
      "Motor driver thermal optimization"
    ],
    link: "/projects/rover.html"
  }
  
};


function openPortfolio(key) {
  const data = portfolioData[key];

  document.getElementById("modalTitle").innerText = data.title;
  document.getElementById("modalImage").src = data.image;
  document.getElementById("modalDescription").innerText = data.description;

  const list = document.getElementById("modalList");
  list.innerHTML = "";
  data.bullets.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });

  document.getElementById("modalLink").href = data.link;

  document.getElementById("portfolioOverlay").classList.add("active");
  document.body.style.overflow = "hidden"; // lock scroll
}

function closePortfolio() {
  document.getElementById("portfolioOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

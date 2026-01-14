function toggleCard(clickedCard) {
  const cards = document.querySelectorAll(".exp-card");

  cards.forEach(card => {
    if (card !== clickedCard) {
      card.classList.remove("active");
    }
  });

  clickedCard.classList.toggle("active");
}

// Phone Form Modal Functions
function openPhoneForm() {
  const modal = document.getElementById("phoneModal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePhoneForm() {
  const modal = document.getElementById("phoneModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
  
  // Reset form
  document.getElementById("phoneForm").reset();
  document.getElementById("formMessage").textContent = "";
  document.getElementById("formMessage").className = "form-message";
}

function handlePhoneRequest(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const formMessage = document.getElementById("formMessage");
  
  // Prepare email data
  const emailData = {
    name: name,
    email: email,
    message: message,
    requestType: "phone_access_request"
  };
  
  // Send to FormSubmit.co (free service)
  fetch('https://formspree.io/f/meeeoalv', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailData)
  })
  .then(response => {
    if (response.ok) {
      formMessage.textContent = "✓ Request sent successfully! I'll contact you soon.";
      formMessage.className = "form-message success";
      document.getElementById("phoneForm").reset();
      setTimeout(() => {
        closePhoneForm();
      }, 2000);
    } else {
      throw new Error('Form submission failed');
    }
  })
  .catch(error => {
    formMessage.textContent = "✗ Error sending request. Please try again.";
    formMessage.className = "form-message error";
    console.error('Error:', error);
  });
}

// Close modal when clicking outside of it
window.addEventListener("click", function(event) {
  const modal = document.getElementById("phoneModal");
  if (event.target === modal) {
    closePhoneForm();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    const modal = document.getElementById("phoneModal");
    if (modal.classList.contains("active")) {
      closePhoneForm();
    }
  }
});




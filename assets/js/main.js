/**
 * ============================================
 * PORTFOLIO WEBSITE - MAIN JAVASCRIPT
 * ============================================
 * This file handles all interactive features:
 * 1. Experience cards - expand/collapse functionality
 * 2. Phone contact form - modal popup and form submission
 */

// ============================================
// EXPERIENCE CARD TOGGLE FUNCTIONALITY
// ============================================
/**
 * toggleCard() - Opens/closes experience card details
 * When user clicks an experience card, this function:
 * - Closes any other open card (only one open at a time)
 * - Toggles the clicked card open/closed
 * 
 * How it works:
 * - Find all experience cards on the page
 * - Remove "active" class from all cards (closes them)
 * - Add "active" class to the clicked card (opens it)
 * 
 * @param {HTMLElement} clickedCard - The card element that was clicked
 */
function toggleCard(clickedCard) {
  const cards = document.querySelectorAll(".exp-card");

  cards.forEach(card => {
    if (card !== clickedCard) {
      card.classList.remove("active");
    }
  });

  clickedCard.classList.toggle("active");
}

// ============================================
// PHONE REQUEST FORM - MODAL FUNCTIONS
// ============================================
/**
 * openPhoneForm() - Opens the phone contact form modal
 * Shows the form popup and prevents scrolling in background
 */
function openPhoneForm() {
  const modal = document.getElementById("phoneModal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

/**
 * closePhoneForm() - Closes the phone contact form modal
 * Hides the form, restores scrolling, and clears the form fields
 */
function closePhoneForm() {
  const modal = document.getElementById("phoneModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto"; // Restore scrolling
  
  // Clear form inputs and messages
  document.getElementById("phoneForm").reset();
  document.getElementById("formMessage").textContent = "";
  document.getElementById("formMessage").className = "form-message";
}

/**
 * handlePhoneRequest() - Submits the phone request form to Formspree
 * Validates form input and sends data to email via Formspree API
 * 
 * How it works:
 * 1. Get user's input (name, email, optional message)
 * 2. Send to Formspree service (formspree.io)
 * 3. Show success or error message
 * 4. Auto-close form after 2 seconds if successful
 * 
 * @param {Event} event - Form submission event
 */
function handlePhoneRequest(event) {
  event.preventDefault(); // Prevent page from reloading
  
  // Get user input from form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const formMessage = document.getElementById("formMessage");
  
  // Prepare data to send
  const emailData = {
    name: name,
    email: email,
    message: message,
    requestType: "phone_access_request"
  };
  
  // Send form data to Formspree (email service)
  fetch('https://formspree.io/f/meeeoalv', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailData)
  })
  .then(response => {
    if (response.ok) {
      // Success - show confirmation message
      formMessage.textContent = "✓ Request sent successfully! I'll contact you soon.";
      formMessage.className = "form-message success";
      document.getElementById("phoneForm").reset();
      
      // Close form after 2 seconds
      setTimeout(() => {
        closePhoneForm();
      }, 2000);
    } else {
      throw new Error('Form submission failed');
    }
  })
  .catch(error => {
    // Error - show error message
    formMessage.textContent = "✗ Error sending request. Please try again.";
    formMessage.className = "form-message error";
    console.error('Error:', error);
  });
}

// ============================================
// MODAL CLOSE TRIGGERS
// ============================================
/**
 * Close modal when clicking outside the form
 * If user clicks the dark background area, close the modal
 */
window.addEventListener("click", function(event) {
  const modal = document.getElementById("phoneModal");
  if (event.target === modal) {
    closePhoneForm();
  }
});

/**
 * Close modal when pressing Escape key
 * Provides keyboard shortcut to close the modal
 */
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    const modal = document.getElementById("phoneModal");
    if (modal.classList.contains("active")) {
      closePhoneForm();
    }
  }
});




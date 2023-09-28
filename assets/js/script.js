'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });







// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// document.addEventListener("DOMContentLoaded", function () {
//   const openModalBtn = document.getElementById("openModalBtnFinance");
//   const modal = document.getElementById("modalFinance");
//   const closeModalBtn = document.getElementById("closeModalBtnFinance");

//   openModalBtn.addEventListener("click", function () {
//       modal.style.display = "block";
//   });

//   closeModalBtn.addEventListener("click", function () {
//       modal.style.display = "none";
//   });

//   // Close the modal if the user clicks outside the content area
//   window.addEventListener("click", function (event) {
//       if (event.target == modal) {
//           modal.style.display = "none";
//       }
//   });
// });


// document.addEventListener("DOMContentLoaded", function () {
//   // Get references to the Orizon modal elements
//   const openModalBtnOrizon = document.getElementById("openModalBtnOrizon");
//   const modalOrizon = document.getElementById("modalOrizon");
//   const closeModalBtnOrizon = document.getElementById("closeModalBtnOrizon");

//   openModalBtnOrizon.addEventListener("click", function () {
//     modalOrizon.style.display = "block";
//   });

//   closeModalBtnOrizon.addEventListener("click", function () {
//     modalOrizon.style.display = "none";
//   });

//   // Close the modal if the user clicks outside the content area
//   window.addEventListener("click", function (event) {
//     if (event.target == modalOrizon) {
//       modalOrizon.style.display = "none";
//     }
//   });
// });

//Combined Modals



// document.addEventListener("DOMContentLoaded", function () {
//   const openModalBtns = document.querySelectorAll(".open-modal-btn");
//   const closeModalBtns = document.querySelectorAll(".close-modal-btn");
//   const commonModals = document.querySelectorAll(".common-modal");

//   // Function to open a modal
//   const openModal = function (modalId) {
//     const modal = document.getElementById(modalId);
//     modal.style.display = "block";
//   };

//   // Function to close a modal
//   const closeModal = function (modalId) {
//     const modal = document.getElementById(modalId);
//     modal.style.display = "none";
//   };

//   // Event listener for opening modals
//   openModalBtns.forEach(function (btn) {
//     btn.addEventListener("click", function () {
//       const modalId = this.getAttribute("data-modal-target");
//       openModal(modalId);
//     });
//   });

//   // Event listener for closing modals
//   closeModalBtns.forEach(function (btn) {
//     btn.addEventListener("click", function () {
//       const modalId = this.getAttribute("data-modal-target");
//       closeModal(modalId);
//     });
//   });

//   // Event listener to close the modal if the user clicks outside the content area
//   window.addEventListener("click", function (event) {
//     commonModals.forEach(function (modal) {
//       if (event.target == modal) {
//         modal.style.display = "none";
//       }
//     });
//   });
// });








// Combined Modal Dialog Working Code 

document.addEventListener("DOMContentLoaded", function () {
  const openModalBtns = document.querySelectorAll(".open-modal-btn");
  const closeModalBtns = document.querySelectorAll(".close-modal-btn");
  const commonModals = document.querySelectorAll(".common-modal");

  // Function to open a modal
  const openModal = function (modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  };

  // Function to close a modal
  const closeModal = function (modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
  };

  // Event listener for opening modals
  openModalBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const modalId = this.getAttribute("data-modal-target");
      openModal(modalId);
    });
  });

  // Event listener for closing modals
  closeModalBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const modalId = this.getAttribute("data-modal-target");
      closeModal(modalId);
    });
  });

  // Event listener to close the modal if the user clicks outside the content area
  window.addEventListener("click", function (event) {
    commonModals.forEach(function (modal) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });
});



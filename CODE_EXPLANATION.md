# Portfolio Website - Code Explanation (For Beginners)

## 📖 Overview
This is a portfolio website for Harishkumaar, a Hardware Design Engineer. The code is organized into **HTML (structure), CSS (styling), and JavaScript (interactivity)**.

Think of it like a house:
- **HTML** = The blueprint/structure of rooms
- **CSS** = The paint, furniture, and decorations
- **JavaScript** = The things that move/work (doors opening, lights turning on)

---

## 📁 File Structure

```
harishs8.github.io/
├── index.html                    ← Main page (the whole website)
├── assets/
│   ├── css/
│   │   ├── base.css             ← Core styling (fonts, spacing)
│   │   ├── components.css       ← Card styling (navigation, tiles, forms)
│   │   ├── portfolio.css        ← Portfolio gallery styling
│   │   ├── project.css          ← Individual project pages
│   │   └── responsive.css       ← Mobile/tablet adjustments
│   └── js/
│       ├── main.js              ← Main interactions (forms, modals)
│       ├── portfolio-data.js    ← Project information (data storage)
│       └── portfolio-ui.js      ← Portfolio card builder (dynamic content)
└── projects/                    ← Individual project HTML pages
```

---

## 🏗️ HTML Breakdown (`index.html`)

### What is HTML?
HTML is like the skeleton of a website. It defines what content goes where.

### Main Sections:

#### 1. **HEAD** (Metadata - not visible on page)
```html
<head>
  <meta charset="utf-8">                    ← Text encoding (supports special characters)
  <meta name="viewport" ...>                ← Mobile responsiveness
  <title>Harishkumaar — Hardware Design Engineer</title>  ← Browser tab title
  <link rel="stylesheet" href="...">       ← Links to CSS files
</head>
```
**In English:** This section tells the browser "how to understand" the page.

---

#### 2. **Navigation Bar** (Links at top)
```html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    ...
  </ul>
</nav>
```
**In English:** Creates a fixed menu at the top with clickable links.
- `href="#home"` = Jump to section with `id="home"`
- Navigation stays at top when scrolling

---

#### 3. **Home Section** (Intro)
```html
<section id="home">
  <h1>Harishkumaar</h1>
  <p>Hardware Design Engineer...</p>
</section>
```
**In English:** First section users see - name and introduction.

---

#### 4. **What I'm Doing** (Skills/Services)
```html
<section id="what-i-do">
  <h2>What I'm Doing</h2>
  <div class="cards">
    <div class="card">
      <div class="icon">⚙️</div>
      <div class="content">
        <h3>New Product Development</h3>
        <p>Ideation · Innovation · Prototyping · Testing</p>
      </div>
    </div>
  </div>
</section>
```
**In English:** Shows 6 skill cards in a grid. Each card has:
- An emoji icon
- A skill title
- Description of what's involved

---

#### 5. **Portfolio Section** (Project Gallery)
```html
<section id="portfolio">
  <h2>Portfolio</h2>
  <h3>Featured Projects</h3>
  <div id="featuredGrid"></div>          ← JavaScript fills this with project cards
  <button id="toggleProjects">Show more projects ↓</button>
  <div id="otherGrid" class="hidden"></div>  ← More projects (initially hidden)
</section>
```
**In English:** 
- Shows featured projects first
- "Show more" button reveals additional projects
- Cards are built by JavaScript (see `portfolio-ui.js`)

---

#### 6. **Experience Section** (Job History)
```html
<section id="experience">
  <h2>Experience</h2>
  <div class="exp-card" onclick="toggleCard(this)">
    <div class="exp-header">
      <h3>EMotorad</h3>
      <span class="date">Oct 2023 – Present</span>
    </div>
    <div class="exp-body">  ← Starts closed, opens when clicked
      <p class="role">Engineer – Hardware Development</p>
      <ul class="exp-projects">
        <li><b>E-Bike Controller</b></li>
      </ul>
    </div>
  </div>
</section>
```
**In English:**
- Each job is a clickable card
- Click = Details expand
- Only one card open at a time (CSS handles animation)
- `onclick="toggleCard(this)"` calls JavaScript function

---

#### 7. **Contact Section** (How to reach Harish)
```html
<section id="contact">
  <h2>Get In Touch</h2>
  <a href="mailto:hk@harishkumaar.in">
    <span class="contact-icon">✉</span>
    <div>Email</div>
  </a>
  <button onclick="openPhoneForm()">Request Phone Number</button>
</section>
```
**In English:**
- Email link
- LinkedIn link
- Phone request button (opens a form)

---

#### 8. **Phone Request Modal** (Popup Form)
```html
<div id="phoneModal" class="modal">
  <div class="modal-content">
    <h3>Request Phone Number</h3>
    <form id="phoneForm" onsubmit="handlePhoneRequest(event)">
      <input type="text" id="name" placeholder="Your name">
      <input type="email" id="email" placeholder="Your email">
      <textarea id="message" placeholder="Message (optional)"></textarea>
      <button type="submit">Send Request</button>
    </form>
  </div>
</div>
```
**In English:**
- Hidden form that pops up when "Request Phone" is clicked
- Takes Name, Email, optional Message
- Submits to Formspree (email service)

---

## 🎨 CSS Breakdown (Styling)

### What is CSS?
CSS is like interior design. It controls colors, sizes, spacing, fonts, and animations.

### File Organization:

#### **base.css** - Foundation
- `*` selector = Reset all elements (remove default browser styling)
- `body` = Font, colors, background for entire page
- `.wrapper` = Creates a centered column (max 760px wide, 24px padding on mobile)
- `h1, h2` = Heading sizes and spacing
- `.muted` = Gray text for secondary info
- `.justify` = Text spreads edge-to-edge

**Key Concept:** Smaller screens get 24px padding, content never wider than 760px.

---

#### **components.css** - Reusable Pieces

1. **Navigation Bar**
   ```css
   nav {
     position: fixed;           ← Stays at top while scrolling
     top: 0;
     width: 100%;
     z-index: 100;              ← Appears above other content
   }
   ```
   **In English:** Sticky menu that doesn't move when you scroll.

2. **Skill Cards** (grid layout)
   ```css
   .cards {
     display: grid;
     grid-template-columns: repeat(2, 1fr);  ← 2 columns
     gap: 18px;                 ← Space between cards
   }
   ```
   **In English:** Creates a 2-column grid with 18px gaps.

3. **Experience Cards** (expandable)
   ```css
   .exp-card {
     cursor: pointer;           ← Changes cursor to hand (clickable)
     transition: all 0.4s ease; ← Smooth animation when expanding
   }
   
   .exp-card.active {           ← When clicked
     box-shadow: 0 14px 40px rgba(0,0,0,0.08);  ← Drop shadow
     transform: scale(1.015);   ← Slightly enlarge
   }
   
   .exp-body {
     max-height: 0;             ← Starts collapsed (no height)
     opacity: 0;                ← Invisible
     overflow: hidden;          ← Hide content that goes below 0px
     transition: max-height 0.4s, opacity 0.25s;  ← Smooth animation
   }
   
   .exp-card.active .exp-body {
     max-height: 700px;         ← When expanded, allow content
     opacity: 1;                ← Make visible
   }
   ```
   **In English:** When you click, the card expands smoothly with animation.

4. **Portfolio Tiles**
   ```css
   .portfolio-grid {
     grid-template-columns: repeat(2, 1fr);  ← 2 columns on desktop
   }
   
   .portfolio-tile:hover {
     transform: translateY(-2px);  ← Moves up slightly
     box-shadow: 0 10px 28px rgba(...);  ← Adds shadow
   }
   ```
   **In English:** Hover over a project = it lifts up with a shadow effect.

5. **Contact Links**
   ```css
   .contact-link {
     display: flex;
     gap: 16px;                 ← Space between icon and text
     align-items: center;       ← Vertically centered
   }
   ```
   **In English:** Icon and text sit side-by-side.

---

## ⚙️ JavaScript Breakdown (Interactivity)

### What is JavaScript?
JavaScript makes things **interactive**. It responds to user clicks, form submissions, etc.

### 3 Main Files:

---

### **1. main.js** - Core Interactions

#### **Function: toggleCard()**
```javascript
function toggleCard(clickedCard) {
  const cards = document.querySelectorAll(".exp-card");
  
  // Close all cards
  cards.forEach(card => {
    if (card !== clickedCard) {
      card.classList.remove("active");
    }
  });
  
  // Toggle clicked card
  clickedCard.classList.toggle("active");
}
```
**In English:**
1. Find all experience cards
2. Remove "active" class from all (closes them)
3. Toggle "active" on clicked card (opens it)
4. Result: Only one card open at a time

**How CSS hooks in:**
- When "active" class is added → CSS rule `.exp-card.active` triggers
- This expands the card with smooth animation

---

#### **Function: openPhoneForm()**
```javascript
function openPhoneForm() {
  const modal = document.getElementById("phoneModal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";  // Prevent scrolling
}
```
**In English:** 
- Find the phone modal form
- Add "active" class to show it
- Prevent scrolling so user focuses on form

---

#### **Function: closePhoneForm()**
```javascript
function closePhoneForm() {
  const modal = document.getElementById("phoneModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";    // Enable scrolling
  
  document.getElementById("phoneForm").reset();  // Clear form fields
}
```
**In English:** Close the modal, restore scrolling, clear the form.

---

#### **Function: handlePhoneRequest()**
```javascript
function handlePhoneRequest(event) {
  event.preventDefault();  // Don't reload the page
  
  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  // Prepare data
  const emailData = {
    name: name,
    email: email,
    message: message,
    requestType: "phone_access_request"
  };
  
  // Send to Formspree (email service)
  fetch('https://formspree.io/f/meeeoalv', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(emailData)
  })
  .then(response => {
    if (response.ok) {
      // Success
      formMessage.textContent = "✓ Request sent successfully!";
      formMessage.className = "form-message success";
      setTimeout(() => closePhoneForm(), 2000);  // Close after 2 seconds
    } else {
      throw new Error('Failed');
    }
  })
  .catch(error => {
    // Error
    formMessage.textContent = "✗ Error sending request.";
  });
}
```
**In English:**
1. User fills name, email, message
2. Code packages this into `emailData`
3. Sends to Formspree (email service)
4. Shows "✓ Success" message
5. Closes form after 2 seconds

---

#### **Event Listeners** (Listen for user actions)
```javascript
// Close modal when clicking outside
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    closePhoneForm();
  }
});

// Close modal when pressing Escape key
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closePhoneForm();
  }
});
```
**In English:**
- If user clicks the dark background → close modal
- If user presses Escape key → close modal

---

### **2. portfolio-data.js** - Project Information

This file is a **database** of all projects. Think of it as a filing cabinet.

```javascript
const portfolioProjects = [
  {
    id: "holosuit",
    featured: true,                    ← Show in top grid
    title: "HoloSuit - Immersive Suit",
    thumbnail: "/projects/Files/holosuittt3/holosuitdisplay.png",  ← Card image
    shortDescription: "Motion capturing suit...",
    tags: ["VR/XR", "Mo-Cap", "IMU", "Haptics"],
    
    modal: {                           ← Content when card is clicked
      images: [...],                   ← Images to display
      description: "Led Electronics design...",
      bullets: [                       ← Key points
        "4-layer PCB with split analog, digital and power grounds",
        "RP2040 + IMU sensor fusion",
        ...
      ],
      companyWebsite: "/projects/holosuit.html"
    }
  },
  { ... more projects ... }
];
```

**In English:** Each project has:
- **id** = Unique identifier
- **featured** = Show first or show in "more projects"
- **title** = Project name
- **thumbnail** = Small image for card
- **shortDescription** = One-liner preview
- **tags** = Skills/technologies used
- **modal** = Full details (images, description, bullets)

---

### **3. portfolio-ui.js** - Card Builder

This file takes project data and creates interactive cards.

#### **Part 1: Build Cards**
```javascript
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
        ${p.tags.slice(0, 5).map(t => `<span>${t}</span>`).join("")}
      </div>
    </div>
  `;
  
  if (p.featured) {
    featuredGrid.appendChild(card);    ← Put at top
  } else {
    otherGrid.appendChild(card);       ← Put in hidden section
  }
});
```

**In English:**
1. Loop through all projects
2. For each project, create a card with image, title, description, tags
3. If `featured = true` → add to featured grid (shown immediately)
4. If `featured = false` → add to other grid (hidden until "Show more" clicked)

**Template Literal Explanation:**
```javascript
`<h3>${p.title}</h3>`
```
This is like a mail merge letter. The `${p.title}` gets replaced with actual project name.

---

#### **Part 2: Show/Hide More Projects**
```javascript
toggleBtn.addEventListener("click", () => {
  otherGrid.classList.toggle("hidden");  ← Add/remove "hidden" class
  
  toggleBtn.textContent = otherGrid.classList.contains("hidden")
    ? "Show more projects ↓"              ← Text if hidden
    : "Show fewer projects ↑";            ← Text if visible
});
```

**In English:**
- Click button → toggle visibility of other projects
- Update button text to show current state

---

#### **Part 3: Open Project Modal**
```javascript
function openPortfolio(id) {
  const p = portfolioProjects.find(x => x.id === id);  ← Find project
  
  // Fill modal with project data
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalDescription").textContent = p.modal.description;
  
  // Add images
  const imgs = document.getElementById("modalImages");
  p.modal.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";              ← Load only when visible
    imgs.appendChild(img);
  });
  
  // Add bullet points
  const list = document.getElementById("modalList");
  p.modal.bullets.forEach(b => {
    const li = document.createElement("li");
    li.textContent = b;
    list.appendChild(li);
  });
  
  // Show modal
  overlay.classList.add("active");
}
```

**In English:**
1. User clicks a project card
2. Find that project's data by ID
3. Put title, description, images, bullets into the modal
4. Show the modal (popup)

---

#### **Part 4: Close Modal**
```javascript
overlay.addEventListener("click", closePortfolio);  ← Click background
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closePortfolio();        ← Press Escape
});
```

**In English:** Three ways to close modal:
1. Click outside the modal (on dark overlay)
2. Press Escape key
3. (In HTML) Click the X button

---

## 🔄 How It All Works Together

### Example: User clicks "E-Bike Motor Controller" project

1. **User Action:** Click card
2. **HTML:** `onclick="openPortfolio(p.id)"` triggers
3. **JavaScript (portfolio-ui.js):** 
   - Find project with matching ID
   - Find all images, title, description, bullets from `portfolio-data.js`
4. **JavaScript:** Put data into modal HTML elements
5. **JavaScript:** Show modal with `overlay.classList.add("active")`
6. **CSS:** Modal appears with animation (opacity, positioning)
7. **User Action:** Click X or Escape key
8. **JavaScript:** `closePortfolio()` removes "active" class
9. **CSS:** Modal disappears with animation

---

## 📱 Responsive Design

The website adapts to different screen sizes using CSS Grid and media queries.

### Desktop (Large screens)
- Cards in 2-column grid
- Full width margins
- Large fonts

### Tablet/Mobile (Smaller screens)
- Cards stack in 1 column
- Smaller padding and fonts
- Larger touch targets for buttons

**How?** In `responsive.css`, media queries like:
```css
@media (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;  ← Switch to 1 column
  }
  
  nav a {
    font-size: 12px;             ← Smaller text
  }
}
```

---

## 🚀 How to Modify

### Add a New Project
1. Open `portfolio-data.js`
2. Add new object to `portfolioProjects` array:
```javascript
{
  id: "my-new-project",
  featured: false,
  title: "My Project Title",
  thumbnail: "/path/to/image.jpg",
  shortDescription: "Brief description",
  tags: ["tag1", "tag2"],
  modal: {
    images: ["/image1.jpg"],
    description: "Full description",
    bullets: ["Point 1", "Point 2"],
    companyWebsite: "/link"
  }
}
```
3. Save → Project automatically appears in portfolio!

### Change Colors
1. Open `base.css` or `components.css`
2. Change color codes (e.g., `color: #111` → `color: #00ff00`)
3. Save → Website updates immediately

### Change Fonts
1. Open `base.css`
2. Change `font-family: Inter, sans-serif` to another font
3. Save

---

## 📋 Summary

| File | Purpose | Simple Explanation |
|------|---------|-------------------|
| **index.html** | Content structure | What's on the page (text, images, sections) |
| **base.css** | Core styling | Font, colors, spacing rules |
| **components.css** | Visual design | Card styles, shadows, animations |
| **portfolio.css** | Gallery styling | Portfolio-specific look |
| **responsive.css** | Mobile adapt | Rules for small screens |
| **main.js** | User interactions | Forms, modals, card clicks |
| **portfolio-data.js** | Project database | All project information |
| **portfolio-ui.js** | Dynamic content | Build cards from data |

---

## 🔑 Key Concepts Explained

### Classes (HTML `class` attribute)
```html
<div class="portfolio-card featured">
```
- `class` = Labels for styling and JavaScript
- Like sticky notes that say "this is a portfolio card"
- CSS uses: `.portfolio-card { ... }`
- JavaScript uses: `document.querySelector(".portfolio-card")`

### IDs (HTML `id` attribute)
```html
<div id="phoneModal">
```
- `id` = Unique identifier (only one per page)
- Like a name badge
- JavaScript uses: `document.getElementById("phoneModal")`

### Event Listeners
```javascript
button.addEventListener("click", function() { ... })
```
- Listen for user action (click, hover, keypress)
- When action happens → run code

### DOM (Document Object Model)
- The structure of HTML elements
- JavaScript can read/modify DOM:
  - `document.getElementById()` = Find element
  - `.classList.add()` = Add class
  - `.innerHTML` = Change content
  - `.style.color` = Change styling

---

## ✅ Code Quality Check

What was cleaned up:
- ✓ Removed duplicate `<body>` tag
- ✓ Removed duplicate CSS `.exp-body` rules
- ✓ Organized all comments (explained what code does)
- ✓ Added inline explanations for beginners
- ✓ Documented disabled sections (3D viewer, bio section)
- ✓ Clear file organization and structure

---

**Questions?** Each function now has comments explaining what it does in simple English!

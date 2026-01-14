# Visual Guide - How the Website Works

## 🎬 User Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    USER VISITS WEBSITE                          │
└────────────────┬────────────────────────────────────────────────┘
                 │
                 ▼
    ┌────────────────────────┐
    │   Browser loads HTML   │
    │  (index.html + CSS)    │
    └────────────┬───────────┘
                 │
                 ▼
    ┌──────────────────────────────────────┐
    │  Page displays with all sections:    │
    │  - Navigation (top)                  │
    │  - Home (intro)                      │
    │  - Skills (cards)                    │
    │  - Portfolio (projects)              │
    │  - Experience (jobs)                 │
    │  - Contact (links)                   │
    └────────────┬─────────────────────────┘
                 │
        ┌────────┴───────────┐
        │                    │
        ▼                    ▼
   Click Project         Click Job Card
        │                    │
        ▼                    ▼
   Portfolio Modal       Job Details Expand
   (JavaScript           (CSS Animation +
   opens popup)          JavaScript toggle)
```

---

## 🏗️ Code Architecture

```
HTML (structure)           CSS (styling)              JavaScript (behavior)
─────────────────────────────────────────────────────────────────────────

index.html ──────────────► base.css ──────────────────┐
  │                        - Font setup              │
  ├─ nav                   - Spacing                  │
  │   └─ ul/li/a           - Resets                   │
  │                                                   │
  ├─ section#home       ◄─ components.css ◄─ main.js
  │   └─ h1, p            - Nav styling    - Click handlers
  │                       - Cards layout   - Form submission
  ├─ section#portfolio  ◄─ portfolio.css ◄─ portfolio-ui.js
  │   ├─ featuredGrid     - Grid layout   - Card builder
  │   └─ otherGrid        - Gallery tiles - Modal manager
  │
  ├─ section#experience ◄─ components.css ◄─ main.js
  │   └─ exp-card          - Card expand   - Toggle expand
  │       ├─ header        - Animations
  │       └─ body
  │
  ├─ section#contact    ◄─ components.css ◄─ main.js
  │   └─ Contact forms     - Form styling  - Modal open/close
  │                        - Links         - Email send (Formspree)
  │
  └─ phoneModal         ◄─ components.css ◄─ main.js
      └─ Contact form       - Modal popup   - Form validation
                            - Inputs        - Success/error messages

└─ Script tags link JavaScript files
  (Load order: main.js → portfolio-data.js → portfolio-ui.js)
```

---

## 🔄 Card Expansion Flow

```
┌──────────────────────────────────────────────────────────────┐
│  USER CLICKS ON EXPERIENCE CARD                              │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       ▼
         ┌─────────────────────────┐
         │  HTML onclick trigger   │
         │  onclick="toggleCard(   │
         │    this               │
         │  )"                   │
         └──────────┬────────────┘
                    │
                    ▼
         ┌────────────────────────────┐
         │  JavaScript runs:          │
         │  toggleCard(clickedCard) { │
         │    1. Find all cards       │
         │    2. Remove "active"      │
         │       from all cards       │
         │    3. Toggle "active"      │
         │       on clicked card      │
         │  }                         │
         └──────────┬─────────────────┘
                    │
        ┌───────────┴────────────┐
        │                        │
        ▼                        ▼
   "active" class        "active" class
   REMOVED               ADDED
        │                        │
        ▼                        ▼
  CSS sees this:         CSS sees this:
                         
  .exp-card.active       .exp-card.active
  DOES NOT MATCH         MATCHES
        │                        │
        ▼                        ▼
  .exp-body {            .exp-body {
    max-height: 0          max-height: 700px
    opacity: 0             opacity: 1
    (CLOSES smoothly)      (OPENS smoothly)
  }                      }

RESULT: Card collapses ◄──────────► Card expands with animation
```

---

## 🎨 CSS Styling Layers

```
LAYER 1: Reset (Global)
┌────────────────────────────────────┐
│ * { box-sizing: border-box; }      │
│ body { margin: 0; }                │
│ Everything gets clean base         │
└────────────────────────────────────┘
                  │
                  ▼
LAYER 2: Base Styles (base.css)
┌────────────────────────────────────┐
│ body { font: Inter; }              │
│ .wrapper { max-width: 760px; }     │
│ h1, h2 { font-size... }            │
│ Sets typography & spacing          │
└────────────────────────────────────┘
                  │
                  ▼
LAYER 3: Components (components.css)
┌────────────────────────────────────┐
│ .card { background: #fafafa; }     │
│ .exp-card { cursor: pointer; }     │
│ nav { position: fixed; }           │
│ Styles specific elements           │
└────────────────────────────────────┘
                  │
                  ▼
LAYER 4: Specialized (portfolio.css)
┌────────────────────────────────────┐
│ .portfolio-grid { }                │
│ .portfolio-tile { }                │
│ Portfolio-specific styling         │
└────────────────────────────────────┘
                  │
                  ▼
LAYER 5: Responsive (responsive.css)
┌────────────────────────────────────┐
│ @media (max-width: 768px) { }      │
│ Changes for mobile/tablet          │
│ Overrides previous layers          │
└────────────────────────────────────┘
                  │
                  ▼
        FINAL STYLED PAGE
```

---

## 📊 Data Flow - Adding a Project

```
┌──────────────────────────────────────────────────────────────────┐
│  STEP 1: ADD PROJECT TO DATA                                     │
│  File: portfolio-data.js                                         │
│                                                                  │
│  portfolioProjects = [                                           │
│    { id: "holosuit", title: "HoloSuit", ... },                  │
│    { id: "ebike", title: "E-Bike", ... },                       │
│    ← ADD NEW PROJECT HERE                                        │
│  ]                                                               │
└──────────────────┬───────────────────────────────────────────────┘
                   │
                   ▼
┌──────────────────────────────────────────────────────────────────┐
│  STEP 2: PORTFOLIO-UI.JS READS DATA                              │
│                                                                  │
│  portfolioProjects.forEach(project => {                          │
│    - Read project ID                                            │
│    - Read project title                                         │
│    - Read project thumbnail                                     │
│    - Read project description                                   │
│    - Read project tags                                          │
│  })                                                              │
└──────────────────┬───────────────────────────────────────────────┘
                   │
                   ▼
┌──────────────────────────────────────────────────────────────────┐
│  STEP 3: CREATE HTML ELEMENTS                                    │
│                                                                  │
│  const card = document.createElement("div")                     │
│  card.className = "portfolio-card"                              │
│  card.innerHTML = `                                             │
│    <img src="${project.thumbnail}">                             │
│    <h3>${project.title}</h3>                                    │
│    <p>${project.description}</p>                                │
│  `                                                               │
└──────────────────┬───────────────────────────────────────────────┘
                   │
                   ▼
┌──────────────────────────────────────────────────────────────────┐
│  STEP 4: PLACE ON PAGE                                           │
│                                                                  │
│  if (project.featured) {                                        │
│    featuredGrid.appendChild(card)   ← Top section              │
│  } else {                                                        │
│    otherGrid.appendChild(card)      ← Hidden section            │
│  }                                                               │
└──────────────────┬───────────────────────────────────────────────┘
                   │
                   ▼
┌──────────────────────────────────────────────────────────────────┐
│  STEP 5: CSS STYLES THE CARD                                     │
│                                                                  │
│  .portfolio-card {                                              │
│    background: #fafafa;                                         │
│    border: 1px solid #e6e6e6;                                   │
│    border-radius: 16px;                                         │
│  }                                                               │
└──────────────────┬───────────────────────────────────────────────┘
                   │
                   ▼
          ✨ CARD APPEARS ON PAGE ✨
```

---

## 🎯 Event Handling Chain

```
┌─────────────────────────────────────────────────────────────────┐
│  USER ACTION                                                    │
└────────────┬────────────────────────────────────────────────────┘
             │
    ┌────────┴────────────────────────┐
    │                                 │
    ▼                                 ▼
Click on card                 Click on "Show more"
    │                                 │
    ▼                                 ▼
onclick="toggleCard(this)"   onclick="toggleBtn.click()"
    │                                 │
    ▼                                 ▼
JavaScript function             Event listener
toggleCard(element)          addEventListener("click", ...)
    │                                 │
    ▼                                 ▼
toggleCard() {                toggleBtn.addEventListener(()=>{
  - Find all .exp-cards       otherGrid.classList.toggle("hidden")
  - Remove "active" from all  })
  - Toggle "active" on this   │
}                             ▼
    │                        "hidden" class
    ▼                        added or removed
.exp-card.active             │
class added                   ▼
    │                      CSS sees new class
    ▼                      and applies styles:
CSS rule                   
.exp-card.active           @media and
.exp-body {                .hidden {
  max-height: 700px;       display: none;
  opacity: 1;              }
  transition: ...          │
}                          ▼
    │                    Items disappear
    ▼                    (display: none)
Smooth animation
opens details              OR shows items
                           (class removed)
```

---

## 💾 Form Submission Flow

```
┌─────────────────────────────────────────────────────────────────┐
│  USER FILLS PHONE REQUEST FORM                                  │
│  Name: John                                                     │
│  Email: john@example.com                                        │
│  Message: Hi, please call me                                    │
└────────────┬────────────────────────────────────────────────────┘
             │
             ▼
   USER CLICKS "SEND REQUEST"
             │
             ▼
   onsubmit="handlePhoneRequest(event)"
             │
             ▼
   JavaScript handlePhoneRequest() {
     1. event.preventDefault()     ← Don't reload page
     2. Get form values:
        - name = "John"
        - email = "john@example.com"
        - message = "Hi, please call me"
     3. Create emailData object
     4. SEND TO FORMSPREE ↓
   }
             │
             ▼
   ┌─────────────────────────────┐
   │    FORMSPREE.IO SERVICE     │
   │  (External email service)   │
   │                             │
   │  Receives:                  │
   │  { name, email, message }   │
   └────────────┬────────────────┘
                │
                ▼
   ┌─────────────────────────────┐
   │  RESPONSE BACK TO JS        │
   │                             │
   │  response.ok = true ?       │
   └────┬────────────┬───────────┘
        │            │
   YES │            │ NO
        ▼            ▼
   ┌──────────┐  ┌──────────────┐
   │ SUCCESS  │  │    ERROR     │
   │          │  │              │
   │✓ Request │  │✗ Error       │
   │  sent!   │  │  sending     │
   │          │  │              │
   │Auto-close│  │Keep form     │
   │ after    │  │open for      │
   │2 seconds │  │retry         │
   └──────────┘  └──────────────┘
```

---

## 🏪 Component Reusability

```
.cards (Skill cards)
├─ 6 cards in 2-column grid
├─ Each card: icon + content
├─ Hover effect: slight shadow
└─ Static (same every time)

.portfolio-grid (Project cards)
├─ 2-10+ cards created dynamically
├─ Each card: image + content
├─ Hover effect: lift up + shadow
├─ Clickable → opens modal
└─ Dynamic (created by JavaScript)

.exp-card (Job cards)
├─ 4 cards (can add more)
├─ Expandable → shows details
├─ Only one open at a time
├─ Smooth animations
└─ Interactive (toggle functionality)

.contact-link (Contact methods)
├─ 4 links (email, LinkedIn, website, phone)
├─ Icon + text layout
├─ Hover effect: change color
└─ Different behaviors (link vs button)
```

---

## 🌊 Information Hierarchy

```
VIEWPORT (what you see)
│
├─ Navigation Bar (Always visible)
│  ├─ Home
│  ├─ Portfolio
│  ├─ Experience
│  ├─ About
│  └─ Contact
│
├─ SECTION: Home (You start here)
│  ├─ Large heading: "Harishkumaar"
│  ├─ Subtitle: "Hardware Design Engineer"
│  └─ Body text: About Harish
│
├─ SECTION: What I'm Doing
│  ├─ 6 skills cards
│  └─ Each: Icon + Title + Description
│
├─ SECTION: Portfolio
│  ├─ Featured Projects (4)
│  │  └─ Click → Modal opens
│  ├─ "Show more" button
│  └─ Other Projects (2+, hidden)
│      └─ Click → Modal opens
│
├─ SECTION: Experience
│  ├─ Job 1 (Expandable)
│  ├─ Job 2 (Expandable)
│  ├─ Job 3 (Expandable)
│  └─ Job 4 (Expandable)
│
├─ SECTION: Patents (Like jobs, expandable)
│
├─ SECTION: Publications (Like jobs, expandable)
│
└─ SECTION: Contact
   ├─ Email link
   ├─ LinkedIn link
   ├─ Website link
   └─ Phone button → Modal form
```

---

## 📱 Responsive Behavior

```
DESKTOP (> 768px)
┌─────────────────────────────────────┐
│        Navigation (fixed top)       │
├─────────────────────────────────────┤
│                                     │
│      Content wrapped 760px max      │
│                                     │
│  [Card1] [Card2]  ← 2 columns      │
│  [Card3] [Card4]                   │
│                                     │
│  [Project1] [Project2]              │
│  [Project3] [Project4]              │
│                                     │
└─────────────────────────────────────┘

TABLET (480-768px)
┌─────────────────────────────────┐
│     Navigation (scrollable)      │
├─────────────────────────────────┤
│                                 │
│   Content wrapped 100%          │
│   with 16px padding             │
│                                 │
│     [Card1]                     │
│     [Card2]  ← 1 column         │
│     [Card3]                     │
│                                 │
│     [Project1]                  │
│     [Project2]                  │
│                                 │
└─────────────────────────────────┘

MOBILE (< 480px)
┌──────────────────────┐
│ Nav (hamburger menu) │
├──────────────────────┤
│                      │
│  Minimal padding     │
│  100% width content  │
│                      │
│   [Card1]            │
│   [Card2] ← Stack    │
│                      │
│  [Project1]          │
│  [Project2]          │
│                      │
└──────────────────────┘
```

---

## 🔐 File Dependencies

```
index.html
├─ Links to CSS files:
│  ├─ base.css (required first)
│  ├─ components.css (depends on base)
│  ├─ portfolio.css (depends on base)
│  ├─ project.css (depends on base)
│  └─ responsive.css (overrides others)
│
└─ Links to JS files (LOAD ORDER MATTERS):
   ├─ main.js (no dependencies)
   ├─ portfolio-data.js (no dependencies)
   └─ portfolio-ui.js (depends on portfolio-data.js)

If you change:
- base.css → affects everything
- components.css → affects cards, nav, forms
- portfolio-data.js → affects what projects show
- portfolio-ui.js → affects how projects display
- main.js → affects interactions
```

---

## ✨ Complete Interaction Map

```
NAVIGATION
  Link "Home" → Jump to #home
  Link "Portfolio" → Jump to #portfolio
  Link "Experience" → Jump to #experience
  Link "Contact" → Jump to #contact

SKILLS SECTION
  Hover card → Lift up + shadow (CSS)

PORTFOLIO SECTION
  Click project card → openPortfolio() → Modal appears
    → Modal shows images, description, bullets
    → Click outside modal → closePortfolio() → Modal closes
    → Press Escape → closePortfolio() → Modal closes
  Click "Show more" → Toggle hidden projects
  Click "Show fewer" → Hide extra projects

EXPERIENCE SECTION
  Click job card → toggleCard() → Expands
  Click other job → First job collapses, new one expands
  Details show with smooth animation

CONTACT SECTION
  Click email link → Opens email client
  Click LinkedIn link → Opens LinkedIn profile
  Click website link → Opens portfolio website
  Click phone button → openPhoneForm() → Form appears
    → Fill name, email, message
    → Click "Send" → handlePhoneRequest() 
      → Send to Formspree
      → Show success message
      → Auto-close after 2 seconds
    → Click X or Escape → closePhoneForm() → Form closes
```

---

**Now you can visualize exactly how your website works!** 🎉

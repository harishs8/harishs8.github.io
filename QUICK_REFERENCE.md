# Quick Reference Guide - Portfolio Website

## 🎯 Absolute Beginner Summary

**This website has 3 main languages:**

1. **HTML** (`index.html`) = Says WHAT to show
   - Defines all sections, text, forms, buttons
   - Like the skeleton of a body

2. **CSS** (`assets/css/`) = Says HOW to make it look
   - Colors, fonts, sizes, spacing
   - Animations (smooth expand/collapse effects)
   - Like paint and furniture in a house

3. **JavaScript** (`assets/js/`) = Says WHAT HAPPENS when you interact
   - Click a card → it expands
   - Click "Show more" → hidden projects appear
   - Fill form → sends email
   - Like lightbulbs that turn on when you flip a switch

---

## 🔍 Understanding "Classes" and "IDs"

Think of them as **stickers** on HTML elements.

### Class = Group label
```html
<div class="portfolio-card">
```
- Multiple elements can have same class (like stickers on many boxes)
- CSS applies to all: `.portfolio-card { color: blue; }`
- JavaScript selects multiple: `document.querySelectorAll(".portfolio-card")`

### ID = Unique name
```html
<div id="phoneModal">
```
- Only ONE element has this ID (like a person's ID number)
- CSS: `#phoneModal { display: none; }`
- JavaScript: `document.getElementById("phoneModal")`

---

## 📚 File Map

```
📄 index.html
   ├─ HEAD section → Metadata (charset, viewport, CSS links)
   └─ BODY section
      ├─ Navigation (fixed menu at top)
      ├─ Home (intro section)
      ├─ What I'm Doing (skill cards - 2 column grid)
      ├─ Portfolio (project gallery)
      ├─ Experience (job history - expandable cards)
      ├─ Patents (patent info - expandable cards)
      ├─ Publications (research papers - expandable cards)
      ├─ Contact (email, LinkedIn, phone button)
      └─ Phone Modal (hidden form popup)

📁 assets/css/
   ├─ base.css .............. Resets + fonts + core spacing
   ├─ components.css ........ Nav, cards, forms, modals
   ├─ portfolio.css ......... Gallery grid, tiles
   ├─ project.css ........... Individual project pages
   └─ responsive.css ........ Mobile/tablet adjustments

📁 assets/js/
   ├─ main.js ............... Card expand, form submission, modal
   ├─ portfolio-data.js ..... All project info (like a database)
   └─ portfolio-ui.js ....... Builds portfolio cards from data
```

---

## 🎨 Design System

### Colors Used
- **#111** = Dark gray (main text)
- **#555** = Medium gray (secondary text)
- **#777** = Light gray (tertiary text)
- **#fff** = White (backgrounds)
- **#fafafa** = Off-white (card backgrounds)
- **#eee** = Light gray (borders)
- **#e6e6e6** = Slightly darker borders

### Spacing System
- **8px** = Tiny gaps
- **12-16px** = Small gaps
- **18-20px** = Card padding
- **24px** = Section padding (mobile)
- **28px** = Navigation gaps
- **72px** = Major section gaps
- **96px** = Top margin (main content)
- **760px** = Max content width

### Fonts
- **Primary:** Inter (sans-serif)
- **Weights:** 300 (light), 400 (normal), 500 (medium)
- **Sizes:** 14-32px depending on element

---

## 🔗 How JavaScript Functions Are Used

### In HTML
```html
<button onclick="openPhoneForm()">Request Phone</button>
```
- Triggers function when clicked

```html
<div class="exp-card" onclick="toggleCard(this)">
```
- `this` = the card element that was clicked
- Function receives the clicked element

---

## 📊 Common Patterns

### Pattern 1: Toggle (Show/Hide)
```javascript
element.classList.toggle("hidden");  // Add class if not there, remove if there
```
Result: Something appears/disappears

### Pattern 2: Click Listener
```javascript
button.addEventListener("click", function() {
  console.log("Button clicked!");
});
```
Result: Code runs when button is clicked

### Pattern 3: Loop Through Elements
```javascript
document.querySelectorAll(".card").forEach(card => {
  card.style.color = "red";
});
```
Result: All cards turn red

### Pattern 4: Template Literal (Merge Data with HTML)
```javascript
const name = "John";
const html = `<h1>Hello ${name}</h1>`;
// Result: <h1>Hello John</h1>
```

---

## 🛠️ Common Things You Might Want to Change

### Change card colors
**File:** `assets/css/components.css`
**Search:** `.card {`
**Change:** `background: #fafafa;` → `background: #e3f2fd;`

### Change navigation style
**File:** `assets/css/components.css`
**Search:** `nav {`
**Change:** Colors, padding, border styling

### Add new project
**File:** `assets/js/portfolio-data.js`
**Do:** Add new object to `portfolioProjects` array

### Change form recipient email
**File:** `assets/js/main.js`
**Search:** `formspree.io`
**Update:** The form ID to your Formspree form

### Change max content width
**File:** `assets/css/base.css`
**Search:** `.wrapper {`
**Change:** `max-width: 760px;` → `max-width: 900px;`

### Change mobile breakpoint
**File:** `assets/css/responsive.css`
**Search:** `@media`
**Change:** `768px` to your preferred breakpoint

---

## 🐛 Debugging Tips

### "My change didn't work!"
1. **Hard refresh browser:** Ctrl+Shift+Delete (clear cache)
2. **Check file saved:** Click file tab in VS Code (no dot = saved)
3. **Check spelling:** Typos are most common issue
4. **Check selector:** Is the CSS/JavaScript targeting right element?

### "JavaScript error in console"
- Press F12 → Console tab
- Red errors show what's wrong
- Common: Wrong element ID, undefined function

### "Styles not applying"
- Check spelling of class/ID name
- Check if CSS file is linked in HTML
- More specific selector wins (`.card.featured` beats `.card`)

---

## ✨ Key Skills Demonstrated

### HTML
- Semantic structure (nav, section, article)
- Form creation (input, textarea, button)
- Modal/popup technique
- Linking (href, internal #links)

### CSS
- Grid layout (2-column on desktop, 1-column on mobile)
- Flexbox (nav, cards, contact)
- Transitions/animations (smooth expand)
- Positioning (fixed nav)
- Pseudo-classes (`:hover`, `:active`)

### JavaScript
- DOM manipulation (getElementById, querySelector)
- Event handling (click, keydown, submit)
- Array methods (forEach, find)
- Fetch API (send form data)
- Classes (add, remove, toggle)

---

## 🚀 Next Steps to Learn

### Beginner
1. Change colors in CSS and refresh page
2. Add new project to portfolio data
3. Change text in HTML sections
4. Modify padding/margin values

### Intermediate
1. Create new CSS component
2. Add animation (keyframes)
3. Make new JavaScript function
4. Create new HTML section with styling

### Advanced
1. Add database (instead of hardcoded data)
2. Add authentication (user login)
3. Add CMS (content management system)
4. Deploy to production

---

## 📞 Contact Form Explanation

**Process:**
1. User fills name, email, message in modal
2. Clicks "Send Request"
3. JavaScript collects form data
4. Sends to Formspree API (via fetch)
5. Formspree forwards to registered email
6. Shows "✓ Success" message
7. Form closes automatically

**To change email:**
1. Go to [formspree.io](https://formspree.io)
2. Create form, get form ID
3. Update in `main.js` line: `https://formspree.io/f/YOUR_FORM_ID`

---

## 📱 Responsive Breakpoints

- **Mobile:** < 480px (small phone)
- **Tablet:** 480-768px (tablet, large phone)
- **Desktop:** > 768px (laptop, desktop)

Each has custom CSS in `responsive.css`

---

## 🎓 Best Practices Used

✅ **Semantic HTML** - Using proper tags (nav, section, article)
✅ **CSS Grid** - Modern layout system
✅ **Comments** - Explaining what code does
✅ **Separation of Concerns** - HTML/CSS/JS in separate files
✅ **DRY Principle** - Don't Repeat Yourself (data in one place)
✅ **Accessibility** - Proper alt text, semantic structure
✅ **Performance** - Lazy loading images, minified assets

---

## 💾 Version Control (Git)

This site uses GitHub Pages. To update:

```bash
git add .
git commit -m "Updated portfolio with new project"
git push origin main
```

Site automatically deploys! (takes 1-2 minutes)

---

## ⚡ Performance Optimization Ideas

- [ ] Compress images (smaller file size)
- [ ] Minify CSS/JavaScript (remove spaces)
- [ ] Add loading spinner for slow connections
- [ ] Cache API responses
- [ ] Lazy load images (already done!)
- [ ] Use WebP image format

---

**That's it!** You now understand how this portfolio website works. 
Start with the CODE_EXPLANATION.md file for deeper details.

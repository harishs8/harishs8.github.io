# harishkumaar.in — portfolio

Personal portfolio of **Harishkumaar**, hardware design engineer. A static site (plain HTML, CSS and
JavaScript, no build step) hosted on GitHub Pages at [harishkumaar.in](https://harishkumaar.in).

Theme: matte black + gold printed circuit board, with an interactive background — signals run
along the copper traces, the cursor works like a probe, clicks and scrolling send current through the board.

## Pages

| Page | File |
|---|---|
| Home — hero, capabilities, featured projects, experience snapshot | `index.html` |
| Projects — every visible project, filter by category | `projects.html` |
| Experience — full timeline, patents & publications | `experience.html` |
| Contact — email, LinkedIn, phone-number request form | `contact.html` |
| Case studies | `projects/*.html` |

## Common edits

**Add or change a project card** → `assets/js/portfolio-data.js`.
Each entry has `title`, `shortDescription`, `tags`, `thumbnail`, `category` (used for the filter
buttons), `company`, `featured` (shown first, and on the home page) and `visible` (`false` hides it
everywhere). `modal.caseStudyLink` is the page the card opens.

`metrics` holds the project's key numbers, e.g. `{ value: "250 W", label: "Rated BLDC motor power" }`.
The first 3 lead each card; the first 4 appear as a large strip under the case-study title (plain
numbers like `250 W` or `<20 ms` count up; ranges like `36/48 V` stay static).

**Add a case study** → copy `projects/template.html`, rename it, fill in the sections, then point a
project's `modal.caseStudyLink` at it. Every `<section class="project-section">` with an `<h2>` is
numbered automatically and added to the "On this page" outline.

**Change the navigation or footer** → the `NAV` list and footer markup at the top of
`assets/js/site.js`. Every page picks it up.

**Change colours** → the variables at the top of `assets/css/site.css` (`--copper`, `--copper-hi`,
`--signal`, `--bg` …). The animated board reads the same variables.

**Edit experience** → the full version is `experience.html`; the short version is the
"Experience snapshot" section in `index.html`.

## Files

```
assets/css/site.css        theme + layout for every page
assets/css/project.css     extra styles for case-study pages
assets/js/site.js          header, footer, scroll progress, scroll animations
assets/js/board-bg.js      interactive circuit-board background
assets/js/portfolio-data.js  project data (cards, categories, links)
assets/js/projects.js      builds project cards + filters
assets/js/case.js          case-study sidebar, outline, previous / next
assets/js/main.js          phone-number request form (Formspree)
projects/Files/            project images and videos
stepfile/                  3D models (.glb)
_reference/                reference copy of all project content (not published)
```

`_reference/projects-content.md` is a readable copy of every project's text, tags, links and images —
handy for cross-checking. Folders starting with `_` are not published by GitHub Pages.

## Run locally

Paths start with `/`, so open the site through a local server rather than double-clicking a file:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

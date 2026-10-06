# Patricia Santaengracia — Portfolio

A static portfolio site: plain HTML, SCSS, and vanilla JS. No build tooling, no bundler, no `package.json` — SCSS is compiled to a single `styles/style.css` (checked into the repo) and every page links that file directly.

## Prerequisites

- A `sass` CLI (Dart Sass), to compile `styles/*.scss` → `styles/style.css`
- Any local static file server, to preview the site (opening `index.html` directly as a `file://` URL will break the `../` relative paths used by pages under `html/`)

Install Dart Sass if you don't have it:

```bash
brew install sass/sass/sass
```

## Compiling the styles

After editing any `.scss` file, recompile:

```bash
sass styles/style.scss styles/style.css
```

Or watch for changes while you work:

```bash
sass --watch styles/style.scss:styles/style.css
```

If you use VS Code's **Live Sass Compiler** extension instead, it will do this automatically on save — no extra config needed.

## Previewing locally

Pick whichever you have available:

**Option A — Python (no install needed on macOS):**

```bash
python3 -m http.server 5501
```

Then open [http://localhost:5501](http://localhost:5501).

**Option B — VS Code Live Server extension:**

Right-click `index.html` → "Open with Live Server". The port is pre-configured to `5501` in `.vscode/settings.json`.

**Option C — Node's `http-server` (if you have Node installed):**

```bash
npx http-server -p 5501
```

Then open [http://localhost:5501](http://localhost:5501).

> Use `index.html` as the entry point — pages under `html/` link back to it and to each other with relative paths, so they should be reached by clicking through the site rather than opened individually from a different working directory.

## Checking responsive behavior

Breakpoints are defined in [`styles/_variables.scss`](styles/_variables.scss):

- Tablet: `≤ 768px`
- Mobile: `≤ 480px`

In your browser's dev tools, toggle the device toolbar (`Cmd+Shift+M` in Chrome) and test at roughly:

- **375px** — small phone
- **768px** — tablet
- **1024px+** — desktop

## Adding work to the home page

Each project in "Latest work" (`index.html`) is a `.work-card`. Variants are modifier classes: `work-card--featured` (green band, pair with `btn--light`) and `work-card--reverse` (image on the left). The white card with border and shadow is the hover state. The button's `work-card__cta` class stretches its link over the whole card, so point that `href` at the case study. To replace a grey placeholder with a real image, put an `<img>` inside the media box:

```html
<div class="work-card__media reveal">
  <img src="./img/shelter/cover.png" alt="Shelter Scotland campaigns page" />
</div>
```

Images are cropped to 545×384 (≈1.42:1) on desktop and 2:1 on mobile.

## Updating the About page

`html/about.html` has a grey portrait placeholder. To use a real image, put an `<img>` inside it, the same as the home page cards:

```html
<div class="about__portrait">
  <img src="../img/about/portrait.png" alt="" />
</div>
```

Each role in "The journey so far" is a `<li class="journey__item">`. Add `journey__item--current` to the current role to give its ring the pink dot.

## Project structure

```
index.html              Home page
html/                    All other pages (about, case studies, illustrations, photography)
styles/
  style.scss             Entry point — resets, global type scale, font imports, loads partials
  _variables.scss         Design tokens (colours, fonts, radii, layout widths), breakpoints and mixins
  _components.scss        Buttons (.btn--dark/--light/--outline) and the .reveal scroll animation
  _home.scss              Nav + hamburger menu (every page), home hero
  _cards.scss             Home "Latest work" section and the .work-card component
  _projects.scss          Shared case-study page layout classes
  _about.scss             About page (intro, portrait, "The journey so far" timeline)
  _footer.scss            Footer (used on every page)
  style.css / .css.map    Compiled output — do not edit directly, edit the .scss instead
js/mainFunctions.js       Scroll-reveal animations, navbar scroll color
scripts/script.js         Hamburger menu toggle
img/                      Images, organized per project
```

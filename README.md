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

## Project structure

```
index.html              Home page
html/                    All other pages (about, case studies, illustrations, photography)
styles/
  style.scss             Entry point — resets, global type scale, loads partials
  _variables.scss         Shared breakpoints ($bp-tablet, $bp-mobile) and mixins
  _home.scss              Nav, hamburger menu, hero
  _projects.scss          Home project showcase + shared case-study layout classes
  _about.scss             About page
  _contact.scss           Contact section
  _footer.scss            Footer (used on every page)
  style.css / .css.map    Compiled output — do not edit directly, edit the .scss instead
js/mainFunctions.js       Scroll-reveal animations, navbar scroll color
scripts/script.js         Hamburger menu toggle
img/                      Images, organized per project
```

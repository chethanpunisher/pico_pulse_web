# PicoPulse — Embedded Systems Consulting Website

A modern React + Vite website for **PicoPulse**, an embedded systems consulting company.

## Tech Stack

- **React 19** — UI components
- **Vite 8** — build tool & dev server
- **Pure CSS** — no UI framework, custom dark-tech design system
- **GitHub Pages** — hosting via GitHub Actions CI/CD

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
```

## Production Build

```bash
npm run build      # outputs to /dist
npm run preview    # preview the built site locally
```

## Deploy to GitHub Pages

### Option A — GitHub Actions (recommended, fully automatic)

1. Push this repo to GitHub.
2. Go to **Settings → Pages → Source** and select **GitHub Actions**.
3. Every push to `main` automatically builds and deploys.

### Option B — Manual deploy via `gh-pages`

1. Update the `homepage` field in `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>"
   ```
2. Update `vite.config.js` base if needed:
   ```js
   base: '/<repo-name>/'
   ```
3. Run:
   ```bash
   npm run deploy
   ```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── About.jsx
│   ├── Process.jsx
│   ├── TechStack.jsx
│   ├── Industries.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── hooks/
│   └── useScrollReveal.js
├── App.jsx
└── index.css
```

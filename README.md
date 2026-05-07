# Portfolio — Sarthak Bankar

Next.js portfolio (static export) for **GitHub Pages** user site: [https://sarthakbank.github.io/](https://sarthakbank.github.io/).

Source of truth for content and design: `docs/portfolio-concept.md`, `docs/profile-facts.md`, `docs/design-palette.md`.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build (static export)

```bash
npm run build
```

Output is written to **`out/`** (Next.js static export). This folder is what GitHub Pages serves.

To preview the export locally (optional):

```bash
npx --yes serve@14 out
```

## Deployment (GitHub Actions + Pages)

- Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
- **Trigger:** every **push to `main`** rebuilds and redeploys the site.
- **Manual run:** Actions → *Deploy to GitHub Pages* → **Run workflow** (`workflow_dispatch`).
- Uses **official** actions: `actions/upload-pages-artifact` and `actions/deploy-pages`.

### One-time GitHub repository settings

1. **Pages source:** Settings → **Pages** → **Build and deployment** → Source: **GitHub Actions** (not “Deploy from a branch”).
2. **Workflow permissions:** Settings → **Actions** → **General** → *Workflow permissions* → allow **Read and write** if your org requires it for Pages deployment (often default for personal repos).
3. **First deploy:** merge or push to `main`; the workflow uploads the `out` artifact and publishes it.

### Notes

- **User site** repo (`username.github.io`): site is served from the **root** — no `basePath` or `assetPrefix` for a project subpath.
- **`public/.nojekyll`:** disables Jekyll so paths like `_next/` are not ignored on GitHub Pages.
- **`next/image`:** configured with **`unoptimized: true`** so images work with static export (no Next.js Image Optimization server).

## Scripts

| Script   | Description                    |
| -------- | ------------------------------ |
| `npm run dev`   | Development server             |
| `npm run build` | Static export → `out/`         |
| `npm run lint`  | ESLint                         |
| `npm run start` | Next.js server (not used for Pages export) |

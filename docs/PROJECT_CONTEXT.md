# Project Context — Sarthak Bankar Portfolio

## Overview

| Field | Value |
|-------|--------|
| **Project** | Personal portfolio for Sarthak Bankar (Level Designer / Game Designer / 3D Artist) |
| **Repo** | `https://github.com/Sarthakbank/sarthakbank.github.io.git` |
| **Live target** | GitHub Pages user site: `https://sarthakbank.github.io/` |
| **Stack** | Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, R3F + drei + three |
| **Deploy** | Static export (`output: "export"`) via `.github/workflows/deploy.yml` |

## Design source of truth

**Primary references (treat like Figma handoff):**

- `Group 8.pdf` (repo root; duplicate in `.github/workflows/`)
- `Group 10.pdf` (repo root; duplicate in `.github/workflows/`)

**Visual direction:**

- Light, Apple-like editorial UI
- White / soft grey canvas (`#fbfbfd`, `#fafafa`, white cards)
- Deep charcoal text (`#1d1d1f`, `#424245`, `#6e6e73`)
- Blue primary accent (`#0071e3`)
- Supporting accents: muted orange (`#ff9500`), teal in gradients
- Soft shadows, rounded cards, generous spacing
- Recruiter-friendly, premium, restrained motion

**Explicitly avoid:**

- Dark immersive / sci-fi UI as the default
- PS5, console, or random hardware hero models
- Heavy glow, particles, postprocessing, laggy scroll, noisy cursor effects
- Generic abstract stock imagery where PDF calls for level/blockout craft
- Overusing 3D beyond hero (and optional subtle lab ribbon)

## Routes & pages

| Route | Entry | Main component |
|-------|--------|----------------|
| `/` | `app/page.tsx` | `components/home/HomePage.tsx` |
| `/case-study` | `app/case-study/page.tsx` | `components/case-study/CaseStudyView.tsx` |
| `/about` | `app/about/page.tsx` | `components/about/AboutPage.tsx` |
| `/contact` | `app/contact/page.tsx` | `components/contact/ContactPage.tsx` |

**Global shell:** `app/layout.tsx` → `Header`, `main`, `Footer`, `ThemeProvider`, `ImmersiveLabProvider`.

## Home page structure (fixed order)

1. **Hero** — copy + 3 CTAs left; GLB right  
2. **Design Principles** — 3 gradient-top cards  
3. **Featured Project** — Escape Protocol card + image  
4. **About + Case Study** — two support cards  
5. **How I Think in Space** — 10-skill grid  
6. **Let’s Connect + inline footer** (Home embeds footer; global `Footer` returns `null` on `/`)

## Key content files

- `content/home.ts` — hero, principles, featured preview, about/case cards, skills, footer
- `content/caseStudy.ts` — case study sections, facts, gallery keys, process, outcome
- `content/about.ts`, `content/profile.ts`, `content/contact.ts`, `content/nav.ts`
- `content/tempImagery.ts` — temporary local/Unsplash plates for featured + gallery

## 3D hero asset

| Item | Path |
|------|------|
| **File** | `public/models/sarthak-level-blockout.glb` (~55 KB) |
| **Runtime URL** | `/models/sarthak-level-blockout.glb` |
| **Loader** | `components/experiment/r3f/HeroFloatContent.tsx` (`useGLTF` + preload) |
| **Stage** | `components/experiment/Hero3DStage.tsx` (dynamic import from `HomePage`) |

**Editorial preset:** `preset="editorial"` on home — transparent canvas, contact shadow **off** by default, softer float/pointer, camera tuned to avoid crop.

## Layout / chrome rules

- **Header** (`components/layout/Header.tsx`): On `/` and `/case-study`, uses **light editorial** sticky bar + mobile drawer. On About/Contact, uses token-based (`bg-canvas`) fixed header.
- **Footer** (`components/layout/Footer.tsx`): **Hidden** on `/` and `/case-study` (those pages have inline editorial footers). Shown on About/Contact.
- **Container:** `max-w-6xl`, `px-5 sm:px-8` (`components/layout/Container.tsx`).

## Feature flag: Immersive Lab

- `lib/immersiveLab.ts` → `IMMERSIVE_LAB_ENABLED` only when `NEXT_PUBLIC_IMMERSIVE_LAB === "true"`.
- **Production default:** flag unset/false → approved light editorial UI.
- Lab still toggles richer motion/cards on About/Contact and enables `CaseStudyHeroRibbon` (if wired); do not make production depend on lab.
- CI can set `vars.NEXT_PUBLIC_IMMERSIVE_LAB` in GitHub Actions (see `deploy.yml`).

## Tech constraints

- **No `basePath`** — user site at domain root.
- **`images.unoptimized: true`** — required for static export.
- **`out/.nojekyll`** ensured in deploy workflow.
- **Do not commit** `.env.local`.
- **Build:** `npm run build` (must pass before handoff/PR).

## Repo hygiene notes

- PDFs also live under `.github/workflows/` (likely accidental; consider moving to `docs/reference/` only).
- Root copies: `Group 8.pdf`, `Group 10.pdf`.
- Older docs: `docs/portfolio-concept.md`, `docs/design-palette.md`, `docs/profile-facts.md` — supplementary, PDFs override for layout.

## Removed / deprecated (do not reintroduce)

- PS5 Sketchfab model path (`/models/ps5-sketchfab-d788de37.glb`)
- `components/home/HomeImmersiveHeroColumn.tsx` (deleted)
- `components/home/IsometricBlockoutHeroVisual.tsx` (deleted)
- `content/editorialMedia.ts` (deleted)

## Orphan / lab-only code (may still exist)

- `components/case-study/CaseStudyHeroRibbon.tsx` — only when immersive lab on
- `components/experiment/HeroLabLayers.tsx`, `CursorGlow.tsx`, `Magnetic.tsx`, `AmbientFilm.tsx` — lab/dark-era utilities
- `components/motion/*` — used selectively; avoid wrapping entire pages

# Next Agent Handoff

**Read first:** `docs/PROJECT_CONTEXT.md` + `docs/FINAL_STAGE_BRD.md`  
**Do not** re-read full chat history; this file is the continuation brief.

---

## Where things stand (May 2026)

### Done

- Light editorial rebuild for **Home** (`HomePage.tsx`) and **Case Study** (`CaseStudyView.tsx`) aligned to PDF copy/section order.
- GLB at `public/models/sarthak-level-blockout.glb` (~55 KB); loaded via `HeroFloatContent` + dynamic `Hero3DStage` on home (`preset="editorial"`).
- PS5 path and deleted components removed (`HomeImmersiveHeroColumn`, `IsometricBlockoutHeroVisual`, `editorialMedia.ts`).
- Header: editorial chrome on `/` + `/case-study`; standard chrome on About/Contact.
- Footer: `null` on `/` + `/case-study` (inline footers on those pages).
- Recent polish pass: no contact shadow on editorial hero, camera/fit tuning, blue primary CTAs, softer card shadows, responsive grids, `overflow-x-hidden`, case study mobile dock padding.
- **`npm run build`** was passing after last polish (verify before shipping).

### Likely still rough (verify visually)

1. **3D “boxed” feel** — User may still perceive a panel; re-check wrapper divs in `HomePage.tsx` (aspect/min-height) and canvas parent `overflow`.
2. **Dark mode on editorial pages** — Shell forces light via `dark:bg-[#fbfbfd]`; theme toggle changes `html.dark` but 3D uses `useTheme()` for lights—confirm it looks intentional, not half-broken.
3. **About/Contact** — Default path is lighter but still uses design tokens + optional **Immersive Lab** branches (`useImmersiveLab()`); lab path can look darker/busier.
4. **Temp images** — Featured + gallery use `TempSceneImage` + `content/tempImagery.ts`; captions say temporary.
5. **PDFs in `.github/workflows/`** — Bloat/misplacement; consider moving to `docs/reference/` (not blocking deploy).
6. **GLB git status** — Confirm `public/models/sarthak-level-blockout.glb` is **committed** (was untracked in an earlier status).

---

## Files to touch for common tasks

| Task | Primary files |
|------|----------------|
| Home layout/copy | `components/home/HomePage.tsx`, `content/home.ts` |
| 3D behavior | `components/experiment/r3f/HeroFloatContent.tsx`, `components/experiment/Hero3DStage.tsx` |
| Case study | `components/case-study/CaseStudyView.tsx`, `content/caseStudy.ts`, `FloatingSectionNav.tsx` |
| About | `components/about/AboutPage.tsx`, `content/about.ts`, `content/profile.ts` |
| Contact | `components/contact/ContactPage.tsx`, `content/contact.ts` |
| Nav/footer | `components/layout/Header.tsx`, `Footer.tsx`, `content/nav.ts` |
| Theme | `components/theme/ThemeProvider.tsx`, `app/globals.css` |
| Deploy | `.github/workflows/deploy.yml`, `next.config.ts` |

---

## Workflow for next agent

1. **Read** handoff docs + skim target files (no broad refactors).
2. **State** planned file list in 2–3 sentences.
3. **Minimal diff** — PDF literalism over creativity.
4. Run `npm run build`.
5. Report: files modified, what changed, build result, assets still temporary.

**Do not:** amend deployment unless broken; force-push; enable immersive lab by default; re-add PS5.

---

## Priority queue (ordered)

### P0 — Visual QA + 3D integration

- [ ] Open Home at desktop/tablet/mobile; confirm GLB has **no** grey rounded loader box, no crop, no dark matte.
- [ ] If boxed: remove/neutralize parent `bg-*`, `rounded-*`, `shadow-*` on hero column; ensure `Hero3DStage` `preset="editorial"` uses `overflow-visible`.
- [ ] Tune `modelFit` (currently ~1.58) and `cameraPresets.editorial` only as needed.

### P1 — Cross-page consistency

- [ ] About + Contact: match Home card borders/shadows/spacing when `IMMERSIVE_LAB` is false.
- [ ] Remove or gate `HeroLabLayers` on default About/Contact if any mesh remains visible.
- [ ] Contact channel cards: ensure default (non-lab) uses white cards + `#0071e3` accents like Home.

### P2 — Case study

- [ ] Hero image crop (`object-cover object-center`).
- [ ] Mobile: `FloatingSectionNav` does not cover outcome buttons (shell already has `pb-[calc(...)]` on case study—verify).
- [ ] Optional: hide chapter nav on very small screens if still crowded.

### P3 — Assets & repo

- [ ] Commit GLB if missing.
- [ ] Replace `tempImagery.featuredCaseHero` when user supplies Escape Protocol stills.
- [ ] Move PDFs out of `.github/workflows/`.

### P4 — Live vs local

- [ ] Confirm GitHub Actions **does not** set `NEXT_PUBLIC_IMMERSIVE_LAB=true` for production unless intended.
- [ ] After deploy, spot-check live URL vs localhost.

---

## Copy quick reference (do not drift)

See `content/home.ts` and `FINAL_STAGE_BRD.md` for full strings. Hero tagline and Escape Protocol metadata are canonical.

---

## Build & deploy commands

```bash
npm run build    # must pass; outputs to out/
npm run dev      # local review
```

Deploy: push to `main`/`master` → GitHub Actions → Pages artifact.

---

## Uncertain / ask user

1. **Case study subject** — Content references Escape Protocol; older docs mention “Black Tidemark” demo label in footer legal—confirm which project name is public-facing.
2. **Dark mode intent** — Editorial pages force light surfaces; is dark toggle only for About/Contact, or should editorial routes also invert?
3. **Real assets timeline** — When will final Escape Protocol screenshots/video arrive?
4. **GLB revision** — Is current blockout final, or will user upload a new export (same path)?

---

## Grep sanity (run before PR)

```bash
rg -i "ps5|sketchfab|d788de" .
rg "IMMERSIVE_LAB" .
ls -la public/models/sarthak-level-blockout.glb
```

---

*Last updated from implementation session: editorial rebuild + GLB hero + polish pass. No code changes in the doc-only handoff pass.*

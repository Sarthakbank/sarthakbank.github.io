# AI-generated design reference assets

**Status:** Temporary design-reference only — not wired into the app. Do not use in production UI until reviewed and replaced with final exports.

**Last organized:** May 2026 (blockout scroll direction)

---

## Final asset list

| Asset | Purpose |
|-------|---------|
| `level-blockout-scroll-source.mp4` | **Primary source for frame extraction** — Google Flow 3D isometric level blockout animation (scroll-scrub hero) |
| `stitch-dark-ui-reference.png` | Full-page Stitch mock screenshot — dark cinematic UI layout reference |
| `stitch-dark-ui-reference/` | Stitch export bundle (`screen.png`, `code.html`, `DESIGN.md`) — same concept as root PNG |
| `README.md` | This inventory |

### `stitch-dark-ui-reference/` contents

| File | Purpose |
|------|---------|
| `screen.png` | Duplicate of root `stitch-dark-ui-reference.png` (kept inside folder with HTML/tokens) |
| `code.html` | Stitch-exported HTML prototype — structure reference only |
| `DESIGN.md` | Stitch design tokens (Obsidian Blueprint palette, typography) |

---

## Which asset for what

| Workflow | Use this |
|----------|----------|
| **Frame extraction (EasyGIF / similar)** | **`level-blockout-scroll-source.mp4`** → export into `public/media/hero-blockout-sequence/` |
| **Stitch / UI direction** (dark luxury, cards, typography) | **`stitch-dark-ui-reference.png`** + `stitch-dark-ui-reference/DESIGN.md` |
| **Still / poster (optional)** | Not supplied yet — add `level-blockout-reference.jpeg` here if a hero still is exported from Flow |

---

## Frame pipeline (not created yet)

- **Frames:** not exported — do not implement scroll-scrub until frames exist.
- **Target folder (next step):** `public/media/hero-blockout-sequence/` with numbered WebP/PNG frames + `manifest.json`.
- **`level-blockout-frames.zip`:** not present in repo at last cleanup — if added under `AI generated new/`, extract there without overwriting existing files.

---

## Archived (superseded)

Moved to `public/media/_archive-unused/`:

- `outdated-controller-refs/` — old console/controller JPEGs (previous cinematic direction)
- `outdated-stitch-portfolio-concept/` — earlier Stitch export
- `duplicate-stitch-ui-export/` — duplicate Stitch folder `(1)` variant

---

## Code-referenced assets (unchanged — do not delete)

| Path | Used by |
|------|---------|
| `public/models/sarthak-level-blockout.glb` | `HeroFloatContent.tsx` (current home 3D hero) |
| `public/media/demo/**` | `content/demoMediaManifest.ts`, `tempImagery.ts` |
| `public/media/profile/portrait.png` | `ProfilePortrait.tsx` |

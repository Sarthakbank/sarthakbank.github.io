# 3D models (`/public/models`)

## `sarthak-level-blockout.glb`

White / neutral **level blockout** mesh used in the **home hero** (and optionally in immersive-lab ribbons). The site loads it from:

`/models/sarthak-level-blockout.glb`

- Keep the file under `public/models/` so static export and GitHub Pages resolve the URL.
- If the file is missing, the hero canvas shows a lightweight procedural blockout placeholder while lights still render.

## Notes

- Prefer keeping this GLB **small** (low poly, compressed textures) for fast first paint on mobile.
- Attribution: portfolio-owned asset (Sarthak Bankar).

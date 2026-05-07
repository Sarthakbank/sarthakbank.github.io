# Demo media (Phase 3)

Local placeholders for the portfolio **until** Black Tidemark and profile shots replace them.

## Layout

| Folder | Role |
|--------|------|
| `home/` | Home hero ambient |
| `case-study/` | Case hero + world plate |
| `gallery/` | Case-study gallery grid |
| `beats/` | Beat row stills (copies or unique frames) |
| `process/` | Process + iteration before/after |
| `video-posters/` | Reference YouTube poster frames (curated stills) |

## Source of truth

Paths and credits: `content/demoMediaManifest.ts`  
Reference videos: `content/demoMedia.ts`

## Stills license

Still images were downloaded from **Pexels** (free use). Each file’s original page URL and download URL are listed in `demoImageSources` inside `content/demoMediaManifest.ts`.

## Videos

Embedded clips are **third-party reference** (Epic / Unreal–related). They are **not** presented as Sarthak’s project footage. Update `content/demoMedia.ts` when swapping to your own uploads.

## Replacing assets

1. Drop new JPG/WebP into the matching folder (keep filenames **or** update the manifest paths).
2. Re-run `npm run build` to verify static export.

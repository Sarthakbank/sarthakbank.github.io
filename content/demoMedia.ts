/**
 * TEMPORARY demo video embeds (YouTube) — not project-specific footage.
 * Replace `videoId` / titles with Black Tidemark captures when available.
 * Keys map to usage sites in CaseStudyView / HomePage.
 */

export const demoYouTube = {
  /** Home featured strip + case hero “atmosphere” slot */
  overviewReel: {
    videoId: "qC5Ktat73Ew",
    title: "Demo placeholder — Unreal Engine 5 reveal (replace with project reel)",
  },
  /** Case study — gameplay / tech atmosphere */
  gameplayAtmosphere: {
    videoId: "wB7dcD02IZQ",
    title: "Demo placeholder — Lumen in the Land of Nanite (Epic Games, replace)",
  },
  /** Case study — finale / technical showcase mood */
  finaleShowcase: {
    videoId: "FIsJfYU_BuQ",
    title: "Demo placeholder — The Matrix Awakens UE5 sample (replace)",
  },
} as const;

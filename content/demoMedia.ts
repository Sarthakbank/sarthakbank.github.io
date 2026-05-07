/**
 * Reference / mood demo videos (not Black Tidemark project footage).
 * IDs must stay embed-friendly; posters live under `public/media/demo/video-posters/`.
 * Update `watchUrl` if you change `videoId`.
 */

export const demoVideoCategory = {
  "reference-walkthrough": "Reference walkthrough",
  "reference-mood": "Reference mood",
} as const;

export type DemoVideoCategory = keyof typeof demoVideoCategory;

export const demoReferenceVideos = {
  overviewReel: {
    videoId: "qC5Ktat73Ew",
    watchUrl: "https://www.youtube.com/watch?v=qC5Ktat73Ew",
    posterSrc: "/media/demo/video-posters/reference-overview-poster.jpg",
    category: "reference-mood" as const,
    title: "Unreal Engine 5 reveal — Epic Games (reference)",
    caption: "Reference video — not Black Tidemark footage",
    disclaimer:
      "Third-party Epic/Unreal showcase for tone only. Replace with your reel when ready.",
  },
  gameplayAtmosphere: {
    videoId: "wB7dcD02IZQ",
    watchUrl: "https://www.youtube.com/watch?v=wB7dcD02IZQ",
    posterSrc: "/media/demo/video-posters/reference-gameplay-poster.jpg",
    category: "reference-walkthrough" as const,
    title: "Lumen in the Land of Nanite — Epic Games (reference)",
    caption: "Reference walkthrough — not project gameplay",
    disclaimer:
      "Official Epic tech demo for pacing reference. Swap for in-engine Black Tidemark capture.",
  },
  finaleShowcase: {
    videoId: "FIsJfYU_BuQ",
    watchUrl: "https://www.youtube.com/watch?v=FIsJfYU_BuQ",
    posterSrc: "/media/demo/video-posters/reference-finale-poster.jpg",
    category: "reference-mood" as const,
    title: "The Matrix Awakens — UE5 sample (reference)",
    caption: "Reference showcase — not project finale",
    disclaimer:
      "Epic/Unreal sample project trailer used as finale-tone placeholder only.",
  },
} as const;

/** @deprecated Use `demoReferenceVideos` — kept for incremental refactors */
export const demoYouTube = {
  overviewReel: {
    videoId: demoReferenceVideos.overviewReel.videoId,
    title: demoReferenceVideos.overviewReel.title,
  },
  gameplayAtmosphere: {
    videoId: demoReferenceVideos.gameplayAtmosphere.videoId,
    title: demoReferenceVideos.gameplayAtmosphere.title,
  },
  finaleShowcase: {
    videoId: demoReferenceVideos.finaleShowcase.videoId,
    title: demoReferenceVideos.finaleShowcase.title,
  },
} as const;

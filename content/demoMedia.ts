/**
 * Reference / mood / placeholder demo videos — not Black Tidemark footage.
 * Posters: `public/media/demo/video-posters/`. Embeds load on user action (see `YouTubeEmbed`).
 */

export const demoVideoCategory = {
  "reference-walkthrough": "Reference walkthrough",
  "mood-finale-reference": "Mood / finale reference",
  "demo-placeholder-footage": "Demo placeholder footage",
} as const;

export type DemoVideoCategory = keyof typeof demoVideoCategory;

export const demoReferenceVideos = {
  overviewReel: {
    videoId: "qC5Ktat73Ew",
    watchUrl: "https://www.youtube.com/watch?v=qC5Ktat73Ew",
    posterSrc: "/media/demo/video-posters/reference-overview-poster.jpg",
    category: "demo-placeholder-footage" as const,
    title: "Unreal Engine 5 reveal — Epic Games",
    caption: "Placeholder reel — not your shipped work",
    disclaimer:
      "Third-party Epic showcase for portfolio tone only. Replace with a Black Tidemark or personal reel.",
  },
  gameplayAtmosphere: {
    videoId: "wB7dcD02IZQ",
    watchUrl: "https://www.youtube.com/watch?v=wB7dcD02IZQ",
    posterSrc: "/media/demo/video-posters/reference-gameplay-poster.jpg",
    category: "reference-walkthrough" as const,
    title: "Lumen in the Land of Nanite — Epic Games",
    caption: "Reference walkthrough — not in-engine slice",
    disclaimer:
      "Official Epic tech demo for pacing and readability reference. Swap for Black Tidemark capture.",
  },
  finaleShowcase: {
    videoId: "TGoWRUWNUWw",
    watchUrl: "https://www.youtube.com/watch?v=TGoWRUWNUWw",
    posterSrc: "/media/demo/video-posters/reference-finale-poster.jpg",
    category: "mood-finale-reference" as const,
    title: "Nanite | Unreal Engine 5 — Epic Games",
    caption: "Mood / finale reference — not project outcome",
    disclaimer:
      "Third-party Epic tech overview for scale and finale tone. Not Sarthak’s original footage.",
  },
} as const;

/** @deprecated Use `demoReferenceVideos` */
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

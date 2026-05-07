/**
 * Phase 3 — local demo media manifest (single source of truth for paths).
 * All files live under `public/media/demo/`. Replace files in-place or
 * update paths here; keep `content/profile.ts` facts unchanged.
 *
 * Stills: downloaded from Pexels (free license) — see `public/media/demo/README.md`.
 */

export const demoLocalImagery = {
  homeHeroAmbient: "/media/demo/home/hero-ambient.jpg",
  featuredCaseHero: "/media/demo/case-study/hero-primary.jpg",
  /** Case-study “world” section plate (same storm asset as gallery; separate path for swaps). */
  worldSetting: "/media/demo/case-study/world-setting.jpg",
  galleryStormCoast: "/media/demo/gallery/storm-coast.jpg",
  galleryBrutalist: "/media/demo/gallery/brutalist-concrete.jpg",
  galleryUrbanDepth: "/media/demo/gallery/urban-depth.jpg",
  galleryFogPath: "/media/demo/gallery/fog-path.jpg",
  galleryPeaks: "/media/demo/gallery/peaks-scale.jpg",
  galleryInteriorRhythm: "/media/demo/gallery/interior-rhythm.jpg",
  /** Iteration plates (distinct from gallery keys for clearer swaps later) */
  iterationBefore: "/media/demo/process/iteration-before.jpg",
  iterationAfter: "/media/demo/process/iteration-after.jpg",
  processPlate: "/media/demo/process/process-plate.jpg",
} as const;

export type DemoImageryKey = keyof typeof demoLocalImagery;

/** Ordered beat stills — swap with `/public/media/demo/beats/beat-*.jpg` */
export const demoBeatImages = [
  "/media/demo/beats/beat-01.jpg",
  "/media/demo/beats/beat-02.jpg",
  "/media/demo/beats/beat-03.jpg",
  "/media/demo/beats/beat-04.jpg",
] as const;

/** Traceability for credits / re-download (not shown in UI by default). */
export const demoImageSources: Record<
  DemoImageryKey,
  { provider: "Pexels"; fileUrl: string; pagePath: string; subject: string }
> = {
  homeHeroAmbient: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=2400",
    pagePath: "https://www.pexels.com/photo/snow-covered-mountain-during-daytime-3408353/",
    subject: "Snow-covered mountain — scale / atmosphere",
  },
  worldSetting: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/5006551/pexels-photo-5006551.jpeg?auto=compress&cs=tinysrgb&w=2400",
    pagePath: "https://www.pexels.com/photo/ocean-waves-crashing-on-shore-during-daytime-5006551/",
    subject: "Ocean swell — world / pressure (case-study plate)",
  },
  featuredCaseHero: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/136419/pexels-photo-136419.jpeg?auto=compress&cs=tinysrgb&w=2400",
    pagePath: "https://www.pexels.com/photo/low-angle-photography-of-high-rise-building-136419/",
    subject: "Brutalist concrete — architectural read",
  },
  galleryStormCoast: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/5006551/pexels-photo-5006551.jpeg?auto=compress&cs=tinysrgb&w=2400",
    pagePath: "https://www.pexels.com/photo/ocean-waves-crashing-on-shore-during-daytime-5006551/",
    subject: "Ocean swell — coastal / pressure mood",
  },
  galleryBrutalist: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=2400",
    pagePath: "https://www.pexels.com/photo/photo-of-mountains-during-dawn-1624438/",
    subject: "Layered peaks & mist — pacing / vista",
  },
  galleryUrbanDepth: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/313691/pexels-photo-313691.jpeg?auto=compress&cs=tinysrgb&w=2400",
    pagePath: "https://www.pexels.com/photo/lighted-cityscape-at-night-313691/",
    subject: "Urban depth & lights — traversal / verticality tone",
  },
  galleryFogPath: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=2400",
    pagePath: "https://www.pexels.com/photo/road-between-trees-167684/",
    subject: "Fog path — exploration legibility",
  },
  galleryPeaks: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/3136752/pexels-photo-3136752.jpeg?auto=compress&cs=tinysrgb&w=2400",
    pagePath: "https://www.pexels.com/photo/snowy-mountain-3136752/",
    subject: "Alpine scale — finale / vertical promise",
  },
  galleryInteriorRhythm: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=2400",
    pagePath: "https://www.pexels.com/photo/empty-tunnel-373912/",
    subject: "Tunnel rhythm — interior flow / compression",
  },
  iterationBefore: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg?auto=compress&cs=tinysrgb&w=2400",
    pagePath: "https://www.pexels.com/photo/body-of-water-near-mountain-219998/",
    subject: "Muted coast — ‘before’ readability pass",
  },
  iterationAfter: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=2400",
    pagePath: "https://www.pexels.com/photo/snow-covered-mountain-during-daytime-3408353/",
    subject: "Clearer landmark read — ‘after’ pass (demo pairing)",
  },
  processPlate: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/2314984/pexels-photo-2314984.jpeg?auto=compress&cs=tinysrgb&w=2400",
    pagePath: "https://www.pexels.com/photo/body-of-water-near-mountain-2314984/",
    subject: "Atmospheric landscape — process / plate holder",
  },
};

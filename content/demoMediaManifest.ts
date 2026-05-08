/**
 * Phase 4 — local demo media manifest (single source of truth).
 * Cohesive world: cold coast, fog, industrial / brutalist / fortress reads, traversal scale.
 * All under `public/media/demo/`. Replace files in-place or edit paths here.
 *
 * Stills: Pexels (free license). `fileUrl` is the download used; `pagePath` is the photo page when known.
 */

export const demoLocalImagery = {
  homeHeroAmbient: "/media/demo/home/hero-ambient.jpg",
  featuredCaseHero: "/media/demo/case-study/hero-primary.jpg",
  worldSetting: "/media/demo/case-study/world-setting.jpg",
  galleryStormCoast: "/media/demo/gallery/storm-coast.jpg",
  galleryBrutalist: "/media/demo/gallery/brutalist-concrete.jpg",
  galleryUrbanDepth: "/media/demo/gallery/urban-depth.jpg",
  galleryFogPath: "/media/demo/gallery/fog-path.jpg",
  galleryPeaks: "/media/demo/gallery/peaks-scale.jpg",
  galleryInteriorRhythm: "/media/demo/gallery/interior-rhythm.jpg",
  iterationBefore: "/media/demo/iterations/before.jpg",
  iterationAfter: "/media/demo/iterations/after.jpg",
  processPlate: "/media/demo/process/process-plate.jpg",
} as const;

export type DemoImageryKey = keyof typeof demoLocalImagery;

export const demoBeatImages = [
  "/media/demo/beats/beat-01.jpg",
  "/media/demo/beats/beat-02.jpg",
  "/media/demo/beats/beat-03.jpg",
  "/media/demo/beats/beat-04.jpg",
] as const;

export const demoImageSources: Record<
  DemoImageryKey,
  { provider: "Pexels"; fileUrl: string; pagePath: string; subject: string }
> = {
  homeHeroAmbient: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/1622970/pexels-photo-1622970.jpeg?auto=compress&cs=tinysrgb&w=2560",
    pagePath: "https://www.pexels.com/photo/1622970/",
    subject: "Foggy pier / coast — cold slate atmosphere (home)",
  },
  featuredCaseHero: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/4484076/pexels-photo-4484076.jpeg?auto=compress&cs=tinysrgb&w=2560",
    pagePath: "https://www.pexels.com/photo/4484076/",
    subject: "Industrial / fortress concrete — case hero",
  },
  worldSetting: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/5006551/pexels-photo-5006551.jpeg?auto=compress&cs=tinysrgb&w=2560",
    pagePath: "https://www.pexels.com/photo/5006551/",
    subject: "Storm swell — relay coast / pressure",
  },
  galleryStormCoast: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=2560",
    pagePath: "https://www.pexels.com/photo/189349/",
    subject: "Sea state & horizon — coastal tension",
  },
  galleryBrutalist: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/3844792/pexels-photo-3844792.jpeg?auto=compress&cs=tinysrgb&w=2560",
    pagePath: "https://www.pexels.com/photo/3844792/",
    subject: "Brutalist massing — readability & silhouette",
  },
  galleryUrbanDepth: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg?auto=compress&cs=tinysrgb&w=2560",
    pagePath: "https://www.pexels.com/photo/2566581/",
    subject: "Industrial night depth — traversal / verticality",
  },
  galleryFogPath: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg?auto=compress&cs=tinysrgb&w=2560",
    pagePath: "https://www.pexels.com/photo/2670898/",
    subject: "Fog layer — approach pacing & sightlines",
  },
  galleryPeaks: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=2560",
    pagePath: "https://www.pexels.com/photo/1629236/",
    subject: "Cold ridgeline — vertical finale tone",
  },
  galleryInteriorRhythm: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/1631000/pexels-photo-1631000.jpeg?auto=compress&cs=tinysrgb&w=2560",
    pagePath: "https://www.pexels.com/photo/1631000/",
    subject: "Service corridor rhythm — interior flow",
  },
  iterationBefore: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/2381180/pexels-photo-2381180.jpeg?auto=compress&cs=tinysrgb&w=2560",
    pagePath: "https://www.pexels.com/photo/2381180/",
    subject: "Heavy overcast — ‘before’ legibility pass (demo)",
  },
  iterationAfter: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=2560",
    pagePath: "https://www.pexels.com/photo/4489749/",
    subject: "Structured concrete read — ‘after’ pass (demo)",
  },
  processPlate: {
    provider: "Pexels",
    fileUrl:
      "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=2560",
    pagePath: "https://www.pexels.com/photo/236705/",
    subject: "Industrial harbour mood — process plate",
  },
};

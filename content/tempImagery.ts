/**
 * TEMPORARY remote imagery (Unsplash) — premium placeholders only.
 * Replace with `/public/media/...` or update URLs in one place.
 * Keys referenced from `content/caseStudy.ts` gallery + beats.
 */

export const tempImagery = {
  /** Moody architectural interior — featured home + case-study hero */
  featuredCaseHero:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85",
  /** Atmospheric landscape — home hero ambient */
  homeHeroAmbient:
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2000&q=85",
  /** Storm coast — gallery / beat mood */
  galleryStormCoast:
    "https://images.unsplash.com/photo-1505110839557-c6714b9f64ac?auto=format&fit=crop&w=2400&q=85",
  /** Brutalist concrete — architectural / level readability */
  galleryBrutalist:
    "https://images.unsplash.com/photo-1487958449943-2429e8be8325?auto=format&fit=crop&w=2400&q=85",
  /** Night urban depth — traversal / verticality mood */
  galleryUrbanDepth:
    "https://images.unsplash.com/photo-1514565131-fce080587e59?auto=format&fit=crop&w=2400&q=85",
  /** Fog path — exploration pacing */
  galleryFogPath:
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=2400&q=85",
  /** Dramatic peaks — finale / scale */
  galleryPeaks:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=85",
  /** Corridor / interior rhythm */
  galleryInteriorRhythm:
    "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=2400&q=85",
} as const;

export type TempImageryKey = keyof typeof tempImagery;

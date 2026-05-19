/**
 * Home-only imagery (featured card, blockout section).
 * Licensed placeholder stills — not shipped-game marketing art.
 */

export const homeFeaturedMedia = {
  /** Primary featured card — wide industrial interior depth */
  hero: "/media/featured/industrial-depth-hero-alt.jpg",
  /** Alternate interior corridor (optional secondary / future use) */
  corridorDetail: "/media/featured/facility-corridor-hero.jpg",
  brutalistReference: "/media/featured/brutalist-massing-reference.jpg",
} as const;

export const homeFeaturedImageCredits = {
  hero: {
    provider: "Pexels" as const,
    pageUrl: "https://www.pexels.com/photo/2566581/",
    subject: "Industrial night depth — placeholder environment reference",
  },
  corridorDetail: {
    provider: "Pexels" as const,
    pageUrl: "https://www.pexels.com/photo/1631000/",
    subject: "Service corridor rhythm — interior flow reference",
  },
  brutalistReference: {
    provider: "Pexels" as const,
    pageUrl: "https://www.pexels.com/photo/3844792/",
    subject: "Brutalist massing — scale and silhouette reference",
  },
} as const;

/**
 * Temporary remote imagery (Unsplash) for premium presentation only.
 * Replace with real Black Tidemark / project media when available.
 * Do not treat these URLs as factual project references.
 */

export const tempImagery = {
  /** Moody architectural interior — featured home + case-study hero */
  featuredCaseHero:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85",
  /** Atmospheric landscape — supporting panel behind portrait in home hero */
  homeHeroAmbient:
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2000&q=85",
} as const;

export type TempImageryKey = keyof typeof tempImagery;

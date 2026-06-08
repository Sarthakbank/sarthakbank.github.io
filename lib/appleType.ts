/**
 * Apple Intelligence typography system.
 * One controlled heading language: a gradient lead phrase over a black main title
 * (see reference image.png). Gradient is restrained — lead phrase only, never the
 * whole heading — and limited to three families below.
 *
 * Consumed through <SectionHeading>; these tokens are the single source of truth
 * for hero/section heading sizing so pages stay consistent.
 */

import { cn } from "@/lib/cn";

/** The only three gradient families allowed for lead phrases. */
export type AppleGradient = "blue-purple" | "orange-pink" | "blue-cyan";

/**
 * Tailwind gradient stops per family (direction included). Endpoints are tuned so
 * the lightest stop stays readable on white — contrast ratios (vs #fff):
 *   blue-purple  4.7 → 5.7 → 5.4
 *   blue-cyan    4.7 → 4.1
 *   orange-pink  3.6 → 3.5 → 4.6  (orange caps ~3.6 on white, so this family is
 *                                   reserved for LARGE display lead phrases only)
 */
export const appleGradients: Record<AppleGradient, string> = {
  // Primary / brand — matches the Apple Intelligence reference.
  "blue-purple": "bg-gradient-to-r from-[#0071e3] via-[#5856d6] to-[#9d34d6]",
  // Creative / warm — reserved for large expressive lead phrases.
  "orange-pink": "bg-gradient-to-r from-[#e8590c] via-[#ff3b6b] to-[#e0244e]",
  // Cool / secondary — calmer brand variant.
  "blue-cyan": "bg-gradient-to-r from-[#0071e3] to-[#0a84c2]",
};

/**
 * Gradient text fill for a lead phrase. Pairs `bg-clip-text text-transparent`
 * with the chosen family — the same pattern already used by the design-principle
 * and philosophy titles. `inline-block` + small bottom padding keeps descenders
 * (g, y, p) from clipping.
 */
export const appleGradientText = (g: AppleGradient) =>
  cn(
    appleGradients[g],
    "inline-block bg-clip-text pb-[0.08em] text-transparent",
  );

/** Hero-scale black title (Home / About / Case Study heroes). */
export const appleHeroTitle =
  "font-display text-[clamp(2.5rem,5.5vw+0.5rem,4rem)] font-semibold leading-[1.03] tracking-[-0.035em]";

/** Section-scale black title (in-page section headings). */
export const appleSectionTitle =
  "font-display text-[clamp(2rem,3.2vw+0.5rem,3.5rem)] font-semibold leading-[1.06] tracking-[-0.035em]";

/** Gradient lead phrase shown as a kicker above a hero title. */
export const appleHeroLead =
  "font-display text-[clamp(1.0625rem,0.7vw+0.9rem,1.375rem)] font-semibold leading-[1.2] tracking-[-0.01em]";

/** Optional plain grey kicker above the lead/title (non-gradient signpost). */
export const appleHeadingEyebrow =
  "text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6e6e73]";

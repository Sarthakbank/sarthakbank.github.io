/**
 * Local experimental “immersive lab” — opt-in only.
 * Set `NEXT_PUBLIC_IMMERSIVE_LAB=true` in `.env.local` for review builds.
 * Omit or set to false for production / main-style builds.
 */
export const IMMERSIVE_LAB_ENABLED =
  process.env.NEXT_PUBLIC_IMMERSIVE_LAB === "true";

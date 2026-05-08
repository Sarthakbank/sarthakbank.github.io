"use client";

import { useReducedMotion } from "framer-motion";
import { useImmersiveLab } from "./ImmersiveLabProvider";

/**
 * Fixed film grain + slow light sweep — immersive lab only; pointer-events none.
 */
export function AmbientFilm() {
  const lab = useImmersiveLab();
  const reduce = useReducedMotion();

  if (!lab || reduce) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-[24] opacity-[0.04] mix-blend-overlay dark:opacity-[0.065]"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="immersive-light-sweep pointer-events-none fixed inset-0 z-[23]"
        aria-hidden
      />
    </>
  );
}

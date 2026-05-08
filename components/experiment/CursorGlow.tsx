"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Soft pointer-follow bloom + tighter highlight core — lab only; skips coarse pointers.
 */
export function CursorGlow() {
  const reduce = useReducedMotion();
  const [skip, setSkip] = useState(true);

  const x = useSpring(0, { stiffness: 140, damping: 40, mass: 0.38 });
  const y = useSpring(0, { stiffness: 140, damping: 40, mass: 0.38 });
  const o = useSpring(0, { stiffness: 160, damping: 36, mass: 0.3 });

  useEffect(() => {
    if (reduce) return;
    const coarse =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    setSkip(coarse);
    if (coarse) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      o.set(1);
    };
    const leave = () => o.set(0);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [reduce, x, y, o]);

  if (reduce || skip) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[35] overflow-hidden"
    >
      <motion.div
        className="absolute rounded-full bg-accent/[0.04] blur-[88px] dark:bg-accent/[0.065]"
        style={{
          width: "min(40vh, 360px)",
          height: "min(40vh, 360px)",
          left: x,
          top: y,
          translateX: "-50%",
          translateY: "-50%",
          opacity: o,
        }}
      />
      <motion.div
        className="absolute rounded-full border border-white/[0.08] bg-gradient-to-br from-white/22 to-transparent shadow-[0_0_20px_-6px_color-mix(in_srgb,var(--color-accent)_28%,transparent)] blur-[1px] dark:border-accent/20 dark:from-accent/28 dark:shadow-[0_0_22px_-6px_rgba(0,0,0,0.45)]"
        style={{
          width: "min(12vh, 96px)",
          height: "min(12vh, 96px)",
          left: x,
          top: y,
          translateX: "-50%",
          translateY: "-50%",
          opacity: o,
        }}
      />
    </div>
  );
}

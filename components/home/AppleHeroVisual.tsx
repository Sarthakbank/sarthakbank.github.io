"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

// Switch this between hero-blockout-clean.png, hero-blockout.png, hb2.png for visual testing.
// hero-blockout-clean.png has REAL transparency (no checkerboard, no white box).
const HERO_IMAGE = "/media/hero-blockout-clean.png";

/** Soft page surface for the hero. The clean PNG is transparent, so it sits on this directly. */
export const HERO_SURFACE = "#f8f8f7";

/**
 * Hero blockout visual — a transparent 3D render that floats directly on the page.
 * No card frame, no white panel, no hard mask: the object is grounded with soft
 * layered ambient shadows and stays fully visible (object-contain, never cropped).
 */
export function AppleHeroVisual() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto h-[300px] w-full max-w-[480px] sm:h-[360px] lg:mx-0 lg:h-[600px] lg:w-[60vw] lg:max-w-[1040px] xl:h-[640px]"
    >
      {/* Layered ambient ground shadows — gives the object weight on the page */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[15%] left-1/2 z-0 h-[14%] w-[min(58%,460px)] -translate-x-1/2 rounded-[50%] bg-black/[0.07] blur-[50px] sm:blur-[60px] lg:left-[52%]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[18%] left-1/2 z-0 h-[8%] w-[min(40%,300px)] -translate-x-1/2 rounded-[50%] bg-black/[0.05] blur-[30px] lg:left-[52%]"
      />

      <Image
        src={HERO_IMAGE}
        alt="Abstract 3D level design blockout"
        fill
        priority
        className="relative z-10 object-contain object-center scale-[1.08] lg:scale-[1.14] lg:object-[60%_center]"
        sizes="(max-width: 1023px) 480px, 60vw"
      />
    </motion.div>
  );
}

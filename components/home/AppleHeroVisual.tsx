"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const HERO_BLOCKOUT = "/media/hero-blockout.png";

/** Matches hero-blockout.png matte background for seamless blending. */
export const HERO_SURFACE = "#f8f8f7";

/** Softens PNG rectangle edges without cropping the blockout. */
const edgeFeatherMask =
  "radial-gradient(ellipse 98% 94% at 68% 50%, #000 68%, transparent 100%)";

/** Hero blockout — contained, edge-feathered, ambient shadow under the model only. */
export function AppleHeroVisual() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto h-[300px] w-full max-w-[420px] lg:mx-0 lg:h-[520px] lg:w-[58vw] lg:max-w-[900px]"
    >
      {/* Soft ground shadow — under the 3D object, not the image bounds */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[10%] right-[6%] z-0 h-[20%] w-[min(52%,380px)] rounded-[50%] bg-black/[0.07] blur-[44px] sm:blur-[52px] lg:bottom-[12%] lg:right-[10%] lg:h-[18%] lg:w-[min(48%,420px)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[14%] right-[14%] z-0 h-[10%] w-[min(36%,260px)] rounded-[50%] bg-black/[0.04] blur-[28px] lg:bottom-[16%] lg:right-[18%]"
      />

      <div
        className="relative z-10 h-full w-full"
        style={{
          backgroundColor: HERO_SURFACE,
          WebkitMaskImage: edgeFeatherMask,
          maskImage: edgeFeatherMask,
        }}
      >
        <Image
          src={HERO_BLOCKOUT}
          alt="Abstract 3D level design blockout"
          fill
          priority
          className="object-contain object-right scale-[1.08] lg:scale-[1.1]"
          sizes="(max-width: 1023px) 420px, 58vw"
        />
      </div>
    </motion.div>
  );
}

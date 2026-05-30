"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { AppleHeroVisual, HERO_SURFACE } from "@/components/home/AppleHeroVisual";
import { homeHero } from "@/content/home";
import {
  appleBtnGhost,
  appleBtnPrimary,
  appleBtnSecondary,
} from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

export function AppleHomeHero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[calc(100vh-64px)] flex-col justify-center overflow-x-clip pt-[5.25rem] pb-16 sm:pt-24 sm:pb-20 lg:overflow-visible lg:pt-[7rem] lg:pb-24"
      style={{ backgroundColor: HERO_SURFACE }}
      aria-label="Hero"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, #ffffff 0%, ${HERO_SURFACE} 38%, ${HERO_SURFACE} 100%)`,
        }}
        aria-hidden
      />

      <div
        className={cn(
          "relative mx-auto grid w-full max-w-[1440px] flex-1 items-center gap-12 px-5 sm:gap-16 sm:px-8",
          "lg:grid-cols-[minmax(0,41%)_minmax(0,59%)] lg:gap-6 lg:px-10 xl:gap-8 xl:px-12",
        )}
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          className="relative z-10 mx-auto w-full max-w-[520px] text-center lg:mx-0 lg:max-w-none lg:py-2 lg:text-left"
        >
          <h1 className="font-display text-[clamp(2.5rem,5.5vw+0.5rem,4rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-[#1d1d1f]">
            {homeHero.name}
          </h1>
          <p className="mt-3 text-[17px] font-medium text-[#6e6e73] sm:text-[18px]">
            {homeHero.role}
          </p>
          <div
            className="mx-auto mt-4 h-px w-12 bg-black/15 lg:mx-0"
            aria-hidden
          />
          <p className="mt-5 text-pretty text-[17px] leading-[1.55] text-[#6e6e73] sm:text-[18px] sm:leading-[1.5]">
            {homeHero.tagline}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
            <Link href="#featured-project" className={appleBtnPrimary}>
              View Featured Project
            </Link>
            <Link href="/about" className={appleBtnSecondary}>
              About My Approach
            </Link>
            <Link href="/contact" className={appleBtnGhost}>
              Contact
            </Link>
          </div>
        </motion.div>

        <div className="relative flex w-full items-center justify-center lg:items-center lg:justify-end">
          <AppleHeroVisual />
        </div>
      </div>
    </section>
  );
}

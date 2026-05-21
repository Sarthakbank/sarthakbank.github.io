"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AppleHeroVisual } from "@/components/home/AppleHeroVisual";
import { homeCtas, homeHero } from "@/content/home";
import { appleBtnPrimary, appleBtnSecondary, appleContainer } from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";

export function AppleHomeHero() {
  return (
    <section
      className="relative overflow-hidden bg-white pt-[5.25rem] pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24"
      aria-label="Hero"
    >
      <div className={cn(appleContainer, "grid items-center gap-10 lg:grid-cols-2 lg:gap-14")}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[15px] font-medium text-[#6e6e73]">{homeHero.role}</p>
          <h1 className="mt-2 font-display text-[clamp(2.25rem,5vw+1rem,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-[#1d1d1f]">
            {homeHero.name}
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-[18px] leading-[1.5] text-[#6e6e73] sm:text-[20px]">
            {homeHero.tagline}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={homeCtas.primary.href} className={appleBtnPrimary}>
              {homeCtas.primary.label}
            </Link>
            <Link href={homeCtas.contact.href} className={appleBtnSecondary}>
              {homeCtas.contact.label}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <AppleHeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ApplePrincipleDetailModal } from "@/components/home/ApplePrincipleDetailModal";
import { homeDesignPrinciples, type HomeDesignPrinciple } from "@/content/home";
import { appleContainer, appleSection, appleSectionMuted } from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";
import { PrincipleCard } from "@/components/home/ApplePrincipleCarouselCard";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-32px" },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
};

export function AppleDesignPrinciplesSection() {
  const [activePrinciple, setActivePrinciple] = useState<HomeDesignPrinciple | null>(null);

  return (
    <section id="principles" className={cn(appleSection, appleSectionMuted, "scroll-mt-24")}>
      <div className={appleContainer}>
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Intro / gradient card */}
          <motion.div {...fadeUp}>
            <div className="flex h-full min-h-[320px] flex-col justify-end rounded-2xl bg-gradient-to-br from-[#1d1d1f] via-[#2c2c30] to-[#3a3a3e] p-8 sm:min-h-[380px] sm:rounded-3xl sm:p-10 lg:min-h-[440px]">
              <h2 className="font-display text-[clamp(1.75rem,2.5vw+0.5rem,2.5rem)] font-bold uppercase leading-[1.05] tracking-[-0.02em] text-white">
                Design
                <br />
                Principles
              </h2>
            </div>
          </motion.div>

          {/* 3 principle cards */}
          {homeDesignPrinciples.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: (i + 1) * 0.06 }}
            >
              <PrincipleCard
                principle={p}
                onOpenDetail={() => setActivePrinciple(p)}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <ApplePrincipleDetailModal
        principle={activePrinciple}
        onClose={() => setActivePrinciple(null)}
      />
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { AppleCardCarousel } from "@/components/home/AppleCardCarousel";
import { AppleSkillCarouselCard } from "@/components/home/AppleSkillCarouselCard";
import { homeSkillGrid, homeThinkInSpace } from "@/content/home";
import {
  appleBody,
  appleContainer,
  appleHeadlineLg,
  appleSection,
  appleSectionWhite,
} from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-32px" },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
};

export function AppleSkillsSection() {
  return (
    <section className={cn(appleSection, appleSectionWhite)}>
      <div className={appleContainer}>
        <motion.div {...fadeUp} className="mx-auto mb-8 max-w-2xl text-center lg:mb-10">
          <h2 className={appleHeadlineLg}>{homeThinkInSpace.title}</h2>
          <p className={cn("mt-4 text-pretty", appleBody)}>{homeThinkInSpace.subtitle}</p>
        </motion.div>
        <AppleCardCarousel ariaLabel="Skills carousel">
          {homeSkillGrid.map((row) => (
            <AppleSkillCarouselCard
              key={row.skill}
              skill={row.skill}
              subtitle={row.subtitle}
              accent={row.accent}
            />
          ))}
        </AppleCardCarousel>
      </div>
    </section>
  );
}

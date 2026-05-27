"use client";

import { motion } from "framer-motion";
import { homeFeaturedPreview } from "@/content/home";
import { homeFeaturedMedia } from "@/content/homeMedia";
import { appleSection, appleSectionWhite } from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";
import { AppleFeaturedProjectCard, type FeaturedProject } from "@/components/home/AppleFeaturedProjectCard";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-32px" },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
};

export function AppleFeaturedProjectsSection() {
  const projects: readonly FeaturedProject[] = [
    {
      kind: "featured",
      chip: homeFeaturedPreview.chip,
      chipColor: homeFeaturedPreview.chipColor,
      title: homeFeaturedPreview.title,
      label: homeFeaturedPreview.subtitle,
      description: homeFeaturedPreview.description,
      imageSrc: homeFeaturedMedia.hero,
      href: homeFeaturedPreview.href,
      cta: homeFeaturedPreview.cta,
      meta: homeFeaturedPreview.metaLines,
    },
    {
      kind: "comingSoon",
      chip: "In progress",
      chipColor: "#5856d6",
      title: "Project Slot 02",
      label: "Coming Soon",
      description: "A new gameplay space currently in production. Details will be shared once the first playable beats are locked.",
      meta: [],
    },
    {
      kind: "comingSoon",
      chip: "In progress",
      chipColor: "#ff9500",
      title: "Project Slot 03",
      label: "Coming Soon",
      description: "The next portfolio case study — focused on clarity, pacing, and encounter rhythm. Shipping when it’s ready to show.",
      meta: [],
    },
  ];

  return (
    <section
      id="featured-project"
      className={cn(appleSection, appleSectionWhite, "scroll-mt-24")}
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <motion.h2
          {...fadeUp}
          className="pt-2 font-display text-[clamp(1.9rem,2.6vw+1rem,2.9rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#1d1d1f] lg:pt-4"
        >
          Featured Project
        </motion.h2>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.04 }}
          className="mt-3 max-w-3xl text-pretty text-[16px] leading-[1.6] text-[#6e6e73] sm:text-[17px]"
        >
          Selected level design work, built around clarity, tension, and player choice.
        </motion.p>

        <div className="mt-10">
          {/* Mobile: Apple-style horizontal card row */}
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [-webkit-overflow-scrolling:touch] md:hidden">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className="w-[86%] shrink-0 snap-start"
              >
                <AppleFeaturedProjectCard project={p} />
              </motion.div>
            ))}
          </div>

          {/* Desktop/tablet: 3-card grid */}
          <div className="hidden grid-cols-3 gap-6 md:grid">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className="flex"
              >
                <AppleFeaturedProjectCard project={p} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


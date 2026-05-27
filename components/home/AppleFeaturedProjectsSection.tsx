"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { homeFeaturedPreview } from "@/content/home";
import { homeFeaturedMedia } from "@/content/homeMedia";
import { cn } from "@/lib/cn";
import {
  AppleFeaturedProjectCard,
  type FeaturedProject,
} from "@/components/home/AppleFeaturedProjectCard";

const PROJECTS: readonly FeaturedProject[] = [
  {
    id: "escape-protocol",
    kind: "featured",
    chip: homeFeaturedPreview.chip,
    chipColor: homeFeaturedPreview.chipColor,
    title: homeFeaturedPreview.title,
    label: homeFeaturedPreview.subtitle,
    description: homeFeaturedPreview.description,
    imageSrc: homeFeaturedMedia.hero,
    href: homeFeaturedPreview.href,
    cta: "View Project",
  },
  {
    id: "slot-02",
    kind: "comingSoon",
    chip: "In development",
    chipColor: "#5856d6",
    title: "Project Slot 02",
    label: "Coming Soon",
    description:
      "A new stealth-forward space focused on readable routes, encounter rhythm, and player intent.",
    cta: "Coming Soon",
    gradient:
      "linear-gradient(135deg, #667eea 0%, #5856d6 45%, #af52de 80%, #ff2d55 100%)",
  },
  {
    id: "slot-03",
    kind: "comingSoon",
    chip: "In development",
    chipColor: "#ff9500",
    title: "Project Slot 03",
    label: "Coming Soon",
    description:
      "Environmental storytelling through light, cover, and vertical flow — documentation follows the next milestone.",
    cta: "Coming Soon",
    gradient:
      "linear-gradient(135deg, #ff9500 0%, #ff6b35 40%, #ff2d55 70%, #5856d6 100%)",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

/** Card width: ~82vw so the next card peeks on the right (Apple highlights pattern). */
const CARD_CLASS =
  "w-[min(90vw,340px)] shrink-0 snap-start sm:w-[min(82vw,720px)] lg:w-[min(78vw,980px)]";

export function AppleFeaturedProjectsSection() {
  const reduce = useReducedMotion();
  const railRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = PROJECTS.length;

  const scrollToIndex = useCallback(
    (index: number) => {
      const rail = railRef.current;
      if (!rail) return;
      const child = rail.children[index] as HTMLElement | undefined;
      if (!child) return;
      rail.scrollTo({
        left: child.offsetLeft - 20,
        behavior: reduce ? "auto" : "smooth",
      });
      setActiveIndex(index);
    },
    [reduce],
  );

  const goPrev = useCallback(() => {
    scrollToIndex(activeIndex <= 0 ? count - 1 : activeIndex - 1);
  }, [activeIndex, count, scrollToIndex]);

  const goNext = useCallback(() => {
    scrollToIndex(activeIndex >= count - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, count, scrollToIndex]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const onScroll = () => {
      const children = Array.from(rail.children) as HTMLElement[];
      if (!children.length) return;
      const scrollPos = rail.scrollLeft + 40;
      let closest = 0;
      let minDist = Infinity;
      children.forEach((el, i) => {
        const dist = Math.abs(el.offsetLeft - scrollPos);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    onScroll();
    rail.addEventListener("scroll", onScroll, { passive: true });
    return () => rail.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="featured-project"
      className="scroll-mt-24 overflow-hidden bg-white py-20 sm:py-28 lg:py-32"
      aria-label="Featured projects"
    >
      {/* Header — contained */}
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <motion.header
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.55, ease }}
        >
          <h2 className="font-display text-[clamp(2rem,3.2vw+0.5rem,3.5rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-[#1d1d1f]">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-[17px] leading-[1.58] text-[#6e6e73] sm:text-[18px]">
            Take a closer look at selected level design work.
          </p>
        </motion.header>
      </div>

      {/* Carousel rail — full-width horizontal showcase */}
      <motion.div
        className="relative mt-10 sm:mt-12 lg:mt-14"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{ duration: 0.6, delay: 0.08, ease }}
      >
        <div
          ref={railRef}
          className={cn(
            "flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 sm:gap-5",
            "pl-5 sm:pl-8 lg:pl-[max(2.5rem,calc((100vw-1440px)/2+2.5rem))]",
            "pr-[min(18vw,120px)]",
            "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          )}
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className={cn(
                CARD_CLASS,
                "transition-[transform,opacity] duration-500 ease-out",
                i === activeIndex ? "opacity-100" : "opacity-[0.88]",
              )}
            >
              <AppleFeaturedProjectCard project={project} isActive={i === activeIndex} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom controls — Apple-style */}
      <div className="mx-auto mt-10 flex max-w-[1440px] items-center justify-center gap-6 px-5 sm:mt-12">
        <button
          type="button"
          onClick={goPrev}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8e8ed] text-[#1d1d1f] transition hover:bg-[#d2d2d7] active:scale-95"
          aria-label="Previous project"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2.25} />
        </button>

        <div className="flex items-center gap-2.5" role="tablist" aria-label="Project slides">
          {PROJECTS.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to ${p.title}`}
              onClick={() => scrollToIndex(i)}
              className={cn(
                "rounded-full transition-all duration-300 ease-out",
                i === activeIndex
                  ? "h-2.5 w-8 bg-[#1d1d1f]"
                  : "h-2.5 w-2.5 bg-[#d2d2d7] hover:bg-[#86868b]",
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8e8ed] text-[#1d1d1f] transition hover:bg-[#d2d2d7] active:scale-95"
          aria-label="Next project"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2.25} />
        </button>
      </div>
    </section>
  );
}

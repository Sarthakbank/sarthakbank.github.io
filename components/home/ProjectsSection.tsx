"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { homeProjectsSection } from "@/content/home";
import {
  appleContainer,
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

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className={cn(appleSection, appleSectionWhite, "scroll-mt-24")}
    >
      <div className={appleContainer}>
        <div className="flex flex-col gap-5 sm:gap-6">
          {homeProjectsSection.items.map((item, i) => (
            <motion.div
              key={item.label}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.06 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "group relative flex min-h-[160px] flex-col justify-center overflow-hidden rounded-2xl border border-black/[0.05] px-8 py-10 transition-all duration-300 sm:min-h-[180px] sm:rounded-3xl sm:px-12 sm:py-12 md:min-h-[200px]",
                  i === 0
                    ? "bg-[#f5f5f7] hover:bg-[#ededf0]"
                    : "bg-white hover:bg-[#fafafa]",
                )}
              >
                {item.label && (
                  <span className="text-[13px] font-medium text-[#6e6e73] sm:text-[14px]">
                    {item.label}
                  </span>
                )}
                {item.title && (
                  <h3 className="mt-1 font-display text-[clamp(1.5rem,3vw+0.5rem,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-[#1d1d1f]">
                    {item.title}
                  </h3>
                )}
                {!item.title && (
                  <h3 className="font-display text-[clamp(1.5rem,3vw+0.5rem,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-[#1d1d1f]">
                    {item.label}
                  </h3>
                )}
                <ArrowUpRight
                  className="absolute right-6 top-6 h-5 w-5 text-[#8e8e93] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:right-8 sm:top-8"
                  aria-hidden
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

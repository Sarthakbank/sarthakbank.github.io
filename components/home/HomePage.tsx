"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AppleDesignPrinciplesSection } from "@/components/home/AppleDesignPrinciplesSection";
import { AppleFeaturedCard } from "@/components/home/AppleFeaturedCard";
import { AppleHomeHero } from "@/components/home/AppleHomeHero";
import { AppleSkillsSection } from "@/components/home/AppleSkillsSection";
import {
  homeAboutPreview,
  homeCaseStudyCard,
  homeConnectSection,
  homeFeaturedPreview,
  homeFooter,
} from "@/content/home";
import { contactChannels } from "@/content/contact";
import {
  appleBody,
  appleCardHover,
  appleContainer,
  applePreviewCard,
  appleEyebrow,
  appleHeadlineLg,
  appleHomePage,
  appleLink,
  appleSection,
  appleSectionMuted,
  appleSectionWhite,
  appleBtnGhost,
  appleBtnPrimary,
  appleBtnSecondary,
} from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-32px" },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
};

function PreviewCard({
  title,
  accent,
  summary,
  href,
  cta,
}: {
  title: string;
  accent: string;
  summary: string;
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        applePreviewCard,
        appleCardHover,
        "group relative flex min-h-[240px] flex-col overflow-hidden p-8 transition duration-300 md:min-h-[260px] md:p-10",
      )}
    >
      <div
        className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", accent)}
        aria-hidden
      />
      <h3
        className={cn(
          "text-pretty font-display text-[1.4rem] font-semibold leading-tight tracking-[-0.02em] md:text-[1.65rem]",
          "bg-gradient-to-r bg-clip-text text-transparent",
          accent,
        )}
      >
        {title}
      </h3>
      <p className={cn("mt-5 flex-1 text-pretty", appleBody)}>{summary}</p>
      <span className={cn(appleLink, "mt-8 shrink-0")}>
        {cta}
        <ArrowUpRight
          className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      </span>
    </Link>
  );
}

export function HomePage() {
  const year = new Date().getFullYear();

  return (
    <div
      className={cn(
        appleHomePage,
        "overflow-x-hidden [&_.text-muted]:text-[#6e6e73] [&_.text-ink]:text-[#1d1d1f]",
      )}
      data-theme="light"
    >
      <AppleHomeHero />

      <AppleDesignPrinciplesSection />

      <section id="featured" className={cn(appleSection, appleSectionWhite, "scroll-mt-24")}>
        <div className={appleContainer}>
          <motion.h2
            {...fadeUp}
            className={cn(appleHeadlineLg, "mb-8 pt-2 lg:mb-10 lg:pt-4")}
          >
            {homeFeaturedPreview.sectionLabel}
          </motion.h2>
          <AppleFeaturedCard />
        </div>
      </section>

      <section className={cn(appleSection, appleSectionMuted)}>
        <div className={appleContainer}>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:gap-7">
            <motion.div {...fadeUp}>
              <PreviewCard
                title={homeAboutPreview.title}
                accent={homeAboutPreview.accent}
                summary={homeAboutPreview.summary}
                href={homeAboutPreview.href}
                cta={homeAboutPreview.cta}
              />
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }}>
              <PreviewCard
                title={homeCaseStudyCard.title}
                accent={homeCaseStudyCard.accent}
                summary={homeCaseStudyCard.summary}
                href={homeCaseStudyCard.href}
                cta={homeCaseStudyCard.cta}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <AppleSkillsSection />

      <section className={cn(appleSection, appleSectionMuted)}>
        <div className={cn(appleContainer, "flex flex-col items-center py-4 text-center sm:py-6")}>
          <motion.h2 {...fadeUp} className={appleHeadlineLg}>
            {homeConnectSection.title}
          </motion.h2>
          <motion.div
            {...fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            {homeConnectSection.buttons.map((btn) => {
              const className =
                btn.variant === "primary"
                  ? appleBtnPrimary
                  : btn.variant === "secondary"
                    ? appleBtnSecondary
                    : appleBtnGhost;
              const external = "external" in btn && btn.external;
              return (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className={className}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {btn.label}
                </Link>
              );
            })}
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-black/[0.06] bg-white py-10 sm:py-12">
        <div
          className={cn(
            appleContainer,
            "flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between",
          )}
        >
          <p className="text-center text-[13px] leading-relaxed text-[#6e6e73] sm:text-left">
            © {year} {homeFooter.name}. {homeFooter.tagline}
          </p>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:justify-end"
            aria-label="Footer"
          >
            <Link
              href={contactChannels.email.href}
              className="text-[13px] font-medium text-[#6e6e73] transition hover:text-[#0071e3]"
            >
              Email
            </Link>
            <Link
              href={contactChannels.linkedIn.href}
              className="text-[13px] font-medium text-[#6e6e73] transition hover:text-[#0071e3]"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href={contactChannels.github.href}
              className="text-[13px] font-medium text-[#6e6e73] transition hover:text-[#0071e3]"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

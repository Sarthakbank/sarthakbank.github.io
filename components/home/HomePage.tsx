"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AppleDesignPrinciplesSection } from "@/components/home/AppleDesignPrinciplesSection";
import { AppleFeaturedProjectsSection } from "@/components/home/AppleFeaturedProjectsSection";
import { AppleHomeHero } from "@/components/home/AppleHomeHero";
import { AppleSkillsSection } from "@/components/home/AppleSkillsSection";
import { MotionReveal } from "@/components/home/MotionReveal";
import {
  homeAboutPreview,
  homeCaseStudyCard,
  homeConnectSection,
  homeFooter,
} from "@/content/home";
import { contactChannels } from "@/content/contact";
import {
  appleContainer,
  appleHeadlineLg,
  appleHomePage,
  appleSection,
  appleSectionMuted,
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

/* ── No PreviewCard — About + Case Study cards are inlined below ── */

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

      <div className="pt-6 sm:pt-8 lg:pt-10">
        <MotionReveal>
          <AppleDesignPrinciplesSection />
        </MotionReveal>
      </div>

      <div className="pt-6 sm:pt-8 lg:pt-10">
        <MotionReveal delay={0.02}>
          <AppleFeaturedProjectsSection />
        </MotionReveal>
      </div>

      {/* About + Case Study — Group 15.pdf */}
      <section
        className={cn(
          appleSection,
          "mt-6 py-20 sm:mt-8 sm:py-24 lg:mt-10 lg:py-28",
        )}
        style={{ background: "#f5f5f7" }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:gap-5">
            {/* ── About card (dark) ──────────────────────── */}
            <motion.div {...fadeUp} className="flex">
              <Link
                href={homeAboutPreview.href}
                className="group flex h-full w-full flex-col overflow-hidden rounded-[36px] transition-all duration-300 ease-out hover:-translate-y-[2px]"
                style={{
                  background: "#1d1d1f",
                  padding: "44px 40px 40px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08), 0 12px 40px rgba(0,0,0,0.16)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.12), 0 20px 56px rgba(0,0,0,0.22)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08), 0 12px 40px rgba(0,0,0,0.16)"; }}
              >
                <h3
                  className="font-display leading-[1.1] tracking-[-0.025em] text-white"
                  style={{ fontSize: "34px", fontWeight: 700 }}
                >
                  {homeAboutPreview.title}
                </h3>
                <p
                  className="mt-6 flex-1 text-pretty leading-[1.65]"
                  style={{ fontSize: "17px", color: "rgba(255,255,255,0.72)" }}
                >
                  {homeAboutPreview.summary}
                </p>
                <span className="mt-10 inline-flex shrink-0 items-center gap-1.5 text-[15px] font-semibold text-[#5ac8fa] transition-colors group-hover:text-[#7dd3fc]">
                  {homeAboutPreview.cta}
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            </motion.div>

            {/* ── Case Study card (white) ─────────────────── */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.06 }} className="flex">
              <Link
                href={homeCaseStudyCard.href}
                className="group flex h-full w-full flex-col overflow-hidden rounded-[36px] border border-black/[0.04] bg-white transition-all duration-300 ease-out hover:-translate-y-[2px]"
                style={{
                  padding: "44px 40px 40px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 12px 40px rgba(0,0,0,0.08)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.06), 0 20px 56px rgba(0,0,0,0.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04), 0 12px 40px rgba(0,0,0,0.08)"; }}
              >
                <h3
                  className="font-display leading-[1.1] tracking-[-0.025em] text-[#1d1d1f]"
                  style={{ fontSize: "34px", fontWeight: 700 }}
                >
                  {homeCaseStudyCard.title}
                </h3>
                <p
                  className="mt-6 flex-1 text-pretty leading-[1.65] text-[#6e6e73]"
                  style={{ fontSize: "17px" }}
                >
                  {homeCaseStudyCard.summary}
                </p>
                <span className="mt-10 inline-flex shrink-0 items-center gap-1.5 text-[15px] font-semibold text-[#0071e3] transition-colors group-hover:text-[#0077ed]">
                  {homeCaseStudyCard.cta}
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="pt-6 sm:pt-8 lg:pt-10">
        <MotionReveal delay={0.02}>
          <AppleSkillsSection />
        </MotionReveal>
      </div>

      <section
        className={cn(
          appleSection,
          appleSectionMuted,
          "mt-6 py-20 sm:mt-8 sm:py-24 lg:mt-10 lg:py-28",
        )}
      >
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 py-2 text-center sm:px-8 sm:py-4 lg:px-10 xl:px-12">
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
            "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12",
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

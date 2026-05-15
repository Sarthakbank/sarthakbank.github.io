"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { motion, useReducedMotion } from "framer-motion";
import { FloatingSectionNav } from "./FloatingSectionNav";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TempSceneImage } from "@/components/media/TempSceneImage";
import { tempImagery } from "@/content/tempImagery";
import {
  caseStudyDemoLabel,
  caseStudyEnvironmentFlow,
  caseStudyFactsLines,
  caseStudyGameBrief,
  caseStudyGallery,
  caseStudyMeta,
  caseStudyNav,
  caseStudyOutcome,
  caseStudyPillars,
  caseStudyProcess,
  caseStudyProjectContext,
  caseStudySummary,
  caseStudyTargetExperience,
} from "@/content/caseStudy";
import { homeContactCta, homeFooter } from "@/content/home";
import { contactChannels } from "@/content/contact";
import { Container } from "@/components/layout/Container";

const shell =
  "min-h-dvh overflow-x-hidden bg-[#fbfbfd] pb-[calc(5.25rem+env(safe-area-inset-bottom,0px))] text-[#1d1d1f] antialiased dark:bg-[#fbfbfd] dark:text-[#1d1d1f] lg:pb-0";

function FadeUp({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.12 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function CaseStudyView() {
  const year = new Date().getFullYear();

  return (
    <div className={shell}>
      <FloatingSectionNav items={caseStudyNav} editorial />

      {/* 1. Hero */}
      <section id="hero" className="scroll-mt-28 border-b border-black/[0.06] bg-white pb-14 pt-8 sm:pb-16 sm:pt-10">
        <Container>
          <FadeUp>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0071e3] transition hover:opacity-80"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Home
              </Link>
              <span className="rounded-full border border-black/[0.08] bg-[#f5f5f7] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#6e6e73]">
                {caseStudyDemoLabel}
              </span>
            </div>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6e6e73]">Featured Project</p>
            <h1 className="mt-3 max-w-3xl font-display text-[clamp(2rem,4vw+1rem,3.1rem)] font-semibold leading-[1.06] tracking-tight text-[#1d1d1f]">
              {caseStudyMeta.name}
            </h1>
            <p className="mt-3 text-lg font-semibold text-[#ff9500]">{caseStudyMeta.genre}</p>
            <p className="mt-5 max-w-2xl text-pretty text-[17px] leading-relaxed text-[#6e6e73]">{caseStudySummary}</p>
          </FadeUp>
          <FadeUp delay={0.06} className="mt-10">
            <div className="overflow-hidden rounded-xl border border-black/[0.06] bg-[#f5f5f7] shadow-[0_8px_28px_-16px_rgba(0,0,0,0.08)]">
              <TempSceneImage
                src={tempImagery.featuredCaseHero}
                alt="Escape Protocol — gameplay environment (temporary reference)"
                className="aspect-[21/9] w-full object-cover object-center sm:aspect-[2.35/1]"
                sizes="100vw"
                priority
                caption="Gameplay visual (temporary)"
              />
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* 2. Facts / metadata */}
      <section id="facts" className="scroll-mt-28 border-b border-black/[0.06] bg-[#fbfbfd] py-14 sm:py-16">
        <Container>
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6e6e73]">Facts</p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl">
              Project metadata
            </h2>
          </FadeUp>
          <dl className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudyFactsLines.map((row, i) => (
              <FadeUp key={row.label} delay={i * 0.04}>
                <div className="rounded-xl border border-black/[0.08] bg-white px-5 py-4 shadow-sm">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#86868b]">{row.label}</dt>
                  <dd className="mt-1.5 text-[15px] font-semibold text-[#1d1d1f]">{row.value}</dd>
                </div>
              </FadeUp>
            ))}
          </dl>
        </Container>
      </section>

      {/* 3. Overview / concept */}
      <section id="brief" className="scroll-mt-28 border-b border-black/[0.06] bg-white py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <FadeUp>
              <SectionLabel className="!text-[#6e6e73] !before:bg-[#0071e3]/40">{caseStudyGameBrief.title}</SectionLabel>
              <div className="mt-5 space-y-5 text-pretty text-[17px] leading-relaxed text-[#424245]">
                {caseStudyGameBrief.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.06}>
              <div className="rounded-2xl border border-black/[0.08] bg-[#fafafa] p-7 shadow-sm sm:p-8">
                <h3 className="font-display text-lg font-semibold text-[#1d1d1f]">Context</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#6e6e73]">{caseStudyProjectContext}</p>
                <div className="mt-8 border-t border-black/[0.06] pt-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#86868b]">Player read</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#424245]">{caseStudyTargetExperience}</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* 4. Pillars */}
      <section id="pillars" className="scroll-mt-28 border-b border-black/[0.06] bg-[#fbfbfd] py-14 sm:py-16">
        <Container>
          <FadeUp className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6e6e73]">Design principles</p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl">
              Pillars
            </h2>
          </FadeUp>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {caseStudyPillars.map((pillar, i) => (
              <FadeUp key={pillar} delay={i * 0.05}>
                <li className="h-full rounded-xl border border-black/[0.08] bg-white px-5 py-6 text-center text-[15px] font-semibold leading-snug text-[#1d1d1f] shadow-sm">
                  {pillar}
                </li>
              </FadeUp>
            ))}
          </ul>
        </Container>
      </section>

      {/* 5. Support visuals */}
      <section id="world" className="scroll-mt-28 border-b border-black/[0.06] bg-white py-14 sm:py-16">
        <Container>
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6e6e73]">Support visuals</p>
            <h2 className="mt-2 max-w-2xl font-display text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl">
              {caseStudyEnvironmentFlow.title}
            </h2>
            <div className="mt-5 max-w-3xl space-y-4 text-pretty text-[16px] leading-relaxed text-[#424245]">
              {caseStudyEnvironmentFlow.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </FadeUp>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudyGallery.map((g, i) => (
              <FadeUp key={g.key} delay={i * 0.04}>
                <div className="overflow-hidden rounded-xl border border-black/[0.06] bg-[#fafafa] shadow-sm">
                  <TempSceneImage
                    src={tempImagery[g.key]}
                    alt={g.caption}
                    className="aspect-[4/3] w-full"
                    sizes="(min-width: 1024px) 30vw, 90vw"
                    caption={g.caption}
                  />
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Process */}
      <section id="process" className="scroll-mt-28 border-b border-black/[0.06] bg-[#fbfbfd] py-14 sm:py-16">
        <Container>
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6e6e73]">Process</p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl">
              Design thinking
            </h2>
            <ol className="mt-10 max-w-3xl space-y-6">
              {caseStudyProcess.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-white text-[13px] font-bold text-[#0071e3] shadow-sm">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-[#1d1d1f]">{step.title}</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#6e6e73]">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </FadeUp>
        </Container>
      </section>

      {/* 7. Outcome / CTA */}
      <section id="outcome" className="scroll-mt-28 bg-white pb-[calc(6rem+env(safe-area-inset-bottom,0px))] pt-12 sm:pb-24 sm:pt-16 lg:pb-28">
        <Container>
          <FadeUp>
            <div className="rounded-2xl border border-black/[0.08] bg-[#fafafa] px-8 py-9 shadow-sm sm:px-10 sm:py-11">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6e6e73]">Outcome</p>
              <p className="mt-4 max-w-3xl text-pretty text-[17px] leading-relaxed text-[#424245]">{caseStudyOutcome}</p>
              <div className="mt-9 flex flex-wrap gap-3 border-t border-black/[0.06] pt-9">
                <ButtonLink
                  href={homeContactCta.href}
                  variant="primary"
                  icon={<Mail />}
                  className="!rounded-full !border-0 !bg-[#0071e3] !px-6 !py-2.5 !text-[14px] !text-white hover:!brightness-110"
                >
                  {homeContactCta.label}
                </ButtonLink>
                <ButtonLink
                  href="/"
                  variant="secondary"
                  icon={<ArrowUpRight />}
                  iconPosition="end"
                  className="!rounded-full !border-black/[0.1] !bg-white !px-6 !py-2.5 !text-[14px] !font-semibold !text-[#1d1d1f]"
                >
                  Back home
                </ButtonLink>
                <ButtonLink
                  href={contactChannels.github.href}
                  variant="secondary"
                  icon={<SiGithub />}
                  external
                  className="!rounded-full !border-black/[0.1] !bg-white !px-5 !py-2.5 !text-[14px]"
                >
                  GitHub
                </ButtonLink>
              </div>
            </div>
          </FadeUp>
        </Container>
      </section>

      <footer className="border-t border-black/[0.06] bg-[#fafafa] py-8 sm:py-9">
        <Container>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <p className="font-display text-lg font-semibold text-[#1d1d1f]">{homeFooter.name}</p>
              <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-[#6e6e73]">
                Level Designer / Game Designer / 3D Artist — explore work and connect.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Explore</p>
              <ul className="mt-4 space-y-2">
                {homeFooter.explore.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[14px] font-medium text-[#424245] transition hover:text-[#0071e3]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Connect</p>
              <ul className="mt-4 space-y-2">
                {homeFooter.connect.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[14px] font-medium text-[#424245] transition hover:text-[#0071e3]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={contactChannels.github.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] font-medium text-[#424245] transition hover:text-[#0071e3]"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-10 border-t border-black/[0.06] pt-6 text-center text-[12px] text-[#86868b]">
            {homeFooter.legal.replace("{year}", String(year))}
          </p>
        </Container>
      </footer>
    </div>
  );
}

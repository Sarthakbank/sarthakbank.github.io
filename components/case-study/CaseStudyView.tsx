"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FloatingSectionNav } from "./FloatingSectionNav";
import { heroBlockoutStill } from "@/content/heroBlockoutManifest";
import {
  caseStudyBeats,
  caseStudyDemoLabel,
  caseStudyFactsLines,
  caseStudyGoal,
  caseStudyMeta,
  caseStudyNav,
  caseStudyOutcome,
  caseStudyOverview,
  caseStudyProcess,
  caseStudyTechniques,
} from "@/content/caseStudy";
import { homeContactCta, homeFooter } from "@/content/home";
import { homeFeaturedMedia } from "@/content/homeMedia";
import { contactChannels } from "@/content/contact";
import {
  stitchBody,
  stitchBtnGhost,
  stitchBtnPrimary,
  stitchChip,
  stitchContainer,
  stitchGlass,
  stitchGlassPanel,
  stitchHeadlineLg,
  stitchHome,
  stitchLabel,
  stitchSection,
} from "@/lib/stitchTokens";
import { cn } from "@/lib/cn";

const sectionAlt = "border-t border-white/[0.06] bg-[#0b0d10]";
const sectionBase = "border-t border-white/[0.06] bg-[#050607]";

export function CaseStudyView() {
  const year = new Date().getFullYear();

  return (
    <div
      className={cn(
        stitchHome,
        "overflow-x-hidden pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0",
      )}
    >
      <FloatingSectionNav items={caseStudyNav} editorial dark />

      {/* 1. Hero */}
      <section id="hero" className="scroll-mt-28 bg-[#050607] pt-[5.5rem] sm:pt-20">
        <div className={stitchContainer}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[#00d1ff] transition hover:text-[#4cd6ff]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Home
            </Link>
            <span className="rounded border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#bbc9cf]">
              {caseStudyDemoLabel}
            </span>
          </div>

          <p className={cn(stitchLabel, "mt-8 text-[#859399]")}>Featured project</p>
          <h1 className="mt-3 font-display text-[clamp(2rem,4.5vw+1rem,3.5rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#e1e2e8]">
            {caseStudyMeta.title}
          </h1>
          <span className={cn(stitchChip, "mt-4 inline-flex")}>{caseStudyMeta.subtitle}</span>
          <p className={cn("mt-6 max-w-2xl text-pretty", stitchBody)}>{caseStudyMeta.summary}</p>

          <dl className="mt-8 grid min-w-0 gap-3 border-t border-white/[0.06] pt-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudyFactsLines.map((row) => (
              <div key={row.label} className="flex min-w-0 gap-2 font-mono text-[13px]">
                <dt className="shrink-0 text-[#859399]">{row.label}</dt>
                <dd className="min-w-0 break-words text-[#e1e2e8]">{row.value}</dd>
              </div>
            ))}
          </dl>

          <article className={cn(stitchGlass, "mt-10 overflow-hidden rounded-lg border-white/10 p-0")}>
            <div className="relative h-[min(52vw,280px)] min-h-[220px] sm:h-72 md:h-80">
              <span className="absolute left-3 top-3 z-20 rounded border border-white/15 bg-black/55 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#bbc9cf]">
                Environment reference
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={homeFeaturedMedia.hero}
                alt="Facility Breach — portfolio sample environment reference"
                className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
                decoding="async"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171a20] via-transparent to-transparent"
                aria-hidden
              />
            </div>
          </article>
        </div>
      </section>

      {/* 2. Goal */}
      <section id="goal" className={cn("scroll-mt-28", stitchSection, sectionAlt)}>
        <div className={stitchContainer}>
          <p className={cn(stitchLabel, "text-[#859399]")}>Goal</p>
          <h2 className={cn("mt-3", stitchHeadlineLg)}>Design intent</h2>
          <p className={cn("mt-5 max-w-3xl text-pretty", stitchBody)}>{caseStudyGoal.intent}</p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className={cn(stitchGlassPanel, "p-6 sm:p-8")}>
              <p className={cn(stitchLabel, "text-[#4cd6ff]")}>Player experience target</p>
              <p className={cn("mt-4 text-pretty", stitchBody)}>{caseStudyGoal.experienceTarget}</p>
            </div>
            <div className={cn(stitchGlassPanel, "p-6 sm:p-8")}>
              <p className={cn(stitchLabel, "text-[#4cd6ff]")}>Design goals</p>
              <ul className="mt-4 space-y-3">
                {caseStudyGoal.designGoals.map((goal, i) => (
                  <li key={goal} className="flex gap-3 text-[15px] leading-relaxed text-[#bbc9cf]">
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-[#00d1ff]/25 bg-[#00d1ff]/[0.06] font-mono text-[11px] font-semibold text-[#00d1ff]"
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Level overview */}
      <section id="overview" className={cn("scroll-mt-28", stitchSection, sectionBase)}>
        <div className={stitchContainer}>
          <p className={cn(stitchLabel, "text-[#859399]")}>Level overview</p>
          <h2 className={cn("mt-3", stitchHeadlineLg)}>Setting & flow</h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {(
              [
                { label: "Setting", body: caseStudyOverview.setting },
                { label: "Player objective", body: caseStudyOverview.playerObjective },
                { label: "Spatial flow", body: caseStudyOverview.spatialFlow },
              ] as const
            ).map((block) => (
              <div key={block.label} className={cn(stitchGlassPanel, "flex flex-col p-6 sm:p-7")}>
                <p className={cn(stitchLabel, "text-[#4cd6ff]")}>{block.label}</p>
                <p className={cn("mt-4 flex-1 text-pretty text-[15px] leading-relaxed text-[#bbc9cf]")}>
                  {block.body}
                </p>
              </div>
            ))}
          </div>

          <div className={cn(stitchGlass, "mt-8 overflow-hidden rounded-lg p-0")}>
            <div className="relative aspect-[21/9] min-h-[200px] sm:min-h-[240px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={homeFeaturedMedia.corridorDetail}
                alt="Service corridor — spatial flow reference (placeholder)"
                className="absolute inset-0 h-full w-full object-cover object-center"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050607]/80 via-transparent to-[#050607]/40" aria-hidden />
              <p className="absolute bottom-3 left-4 font-mono text-[11px] text-[#859399]">
                Placeholder · corridor rhythm reference
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technique highlights */}
      <section id="techniques" className={cn("scroll-mt-28", stitchSection, sectionAlt)}>
        <div className={stitchContainer}>
          <p className={cn(stitchLabel, "text-[#859399]")}>Technique highlights</p>
          <h2 className={cn("mt-3", stitchHeadlineLg)}>Level design craft</h2>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {caseStudyTechniques.map((t, i) => (
              <li
                key={t.title}
                className={cn(
                  stitchGlassPanel,
                  "border-l-2 p-6 sm:p-7",
                  i === 0 && "border-l-[#00d1ff]",
                  i === 1 && "border-l-[#3e90ff]",
                  i === 2 && "border-l-[#ffb051]",
                )}
              >
                <h3 className="font-display text-lg font-semibold tracking-tight text-[#e1e2e8]">{t.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#bbc9cf]">{t.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Walkthrough / beats */}
      <section id="beats" className={cn("scroll-mt-28", stitchSection, sectionBase)}>
        <div className={stitchContainer}>
          <p className={cn(stitchLabel, "text-[#859399]")}>Walkthrough</p>
          <h2 className={cn("mt-3", stitchHeadlineLg)}>Mission beats</h2>
          <p className={cn("mt-4 max-w-2xl text-pretty", stitchBody)}>
            Five authored beats showing objective, player action, and design purpose — imagery is portfolio reference
            until in-engine captures replace placeholders.
          </p>

          <ol className="mt-12 space-y-8">
            {caseStudyBeats.map((beat, i) => (
              <li
                key={beat.id}
                className={cn(
                  stitchGlass,
                  "overflow-hidden rounded-lg border-white/10",
                  i % 2 === 1 && "lg:flex-row-reverse",
                  "lg:flex lg:items-stretch",
                )}
              >
                <div className="relative min-h-[200px] lg:min-h-0 lg:w-[42%] lg:shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={beat.image}
                    alt={`${beat.title} — ${beat.imageNote}`}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171a20]/90 via-[#171a20]/20 to-transparent lg:bg-gradient-to-r" />
                  <span className="absolute left-3 top-3 font-mono text-[11px] font-semibold text-[#00d1ff]">
                    Beat {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-[#e1e2e8]">{beat.title}</h3>
                  <p className="mt-1 font-mono text-[11px] text-[#859399]">{beat.imageNote}</p>
                  <dl className="mt-6 space-y-4">
                    <div>
                      <dt className={cn(stitchLabel, "text-[#859399]")}>Objective</dt>
                      <dd className="mt-1.5 text-[15px] leading-relaxed text-[#bbc9cf]">{beat.objective}</dd>
                    </div>
                    <div>
                      <dt className={cn(stitchLabel, "text-[#859399]")}>Player action</dt>
                      <dd className="mt-1.5 text-[15px] leading-relaxed text-[#bbc9cf]">{beat.playerAction}</dd>
                    </div>
                    <div>
                      <dt className={cn(stitchLabel, "text-[#859399]")}>Design purpose</dt>
                      <dd className="mt-1.5 text-[15px] leading-relaxed text-[#e1e2e8]">{beat.designPurpose}</dd>
                    </div>
                  </dl>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. Process */}
      <section id="process" className={cn("scroll-mt-28", stitchSection, sectionAlt)}>
        <div className={stitchContainer}>
          <p className={cn(stitchLabel, "text-[#859399]")}>Process</p>
          <h2 className={cn("mt-3", stitchHeadlineLg)}>From research to polish</h2>

          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {caseStudyProcess.map((step, i) => (
              <li key={step.title} className={cn(stitchGlassPanel, "flex flex-col p-5 sm:p-6")}>
                <span className="font-mono text-[11px] font-semibold text-[#00d1ff]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-display text-base font-semibold text-[#e1e2e8]">{step.title}</p>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-[#859399]">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className={cn(stitchGlassPanel, "mt-10 overflow-hidden rounded-xl p-4 sm:p-5")}>
            <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] pb-3">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#859399]">
                Blockout pass
              </span>
              <span className="rounded border border-[#00d1ff]/25 bg-[#00d1ff]/[0.07] px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#4cd6ff]">
                Greybox
              </span>
            </div>
            <div className="relative mt-3 flex min-h-[240px] items-center justify-center rounded-lg border border-white/[0.06] bg-[#050607] sm:min-h-[320px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroBlockoutStill}
                alt="Facility Breach greybox blockout — portfolio work in progress"
                className="max-h-[min(60vh,420px)] w-full object-contain p-4"
                decoding="async"
              />
            </div>
            <p className="mt-3 font-mono text-[11px] text-[#859399]">
              Portfolio blockout still · replaces placeholder beats when in-engine captures are ready
            </p>
          </div>
        </div>
      </section>

      {/* 7. Outcome */}
      <section
        id="outcome"
        className={cn(
          "scroll-mt-28 border-t border-white/[0.06] bg-[#050607] pb-[calc(6rem+env(safe-area-inset-bottom,0px))] pt-16 sm:pb-24 sm:pt-20 lg:pb-28",
        )}
      >
        <div className={stitchContainer}>
          <p className={cn(stitchLabel, "text-[#859399]")}>Outcome</p>
          <h2 className={cn("mt-3", stitchHeadlineLg)}>What this demonstrates</h2>
          <p className={cn("mt-5 max-w-3xl text-pretty", stitchBody)}>{caseStudyOutcome.summary}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {caseStudyOutcome.demonstrates.map((item) => (
              <li
                key={item}
                className="flex gap-2 rounded-lg border border-white/[0.08] bg-[#111418] px-4 py-3 text-[15px] text-[#bbc9cf]"
              >
                <span className="text-[#00d1ff]" aria-hidden>
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3 border-t border-white/[0.06] pt-10">
            <Link href={homeContactCta.href} className={stitchBtnPrimary}>
              {homeContactCta.label}
            </Link>
            <Link href="/" className={stitchBtnGhost}>
              Back home
            </Link>
            <Link
              href={contactChannels.github.href}
              className={stitchBtnGhost}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.05] bg-[#0b0e12] py-12 md:py-16">
        <div
          className={cn(
            stitchContainer,
            "flex flex-col items-center justify-between gap-8 md:flex-row md:items-start",
          )}
        >
          <p className="max-w-md text-center font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[#e1e2e8] md:text-left">
            © {year} {homeFooter.name}. Level Design Portfolio.
          </p>
          <nav className="flex flex-wrap justify-center gap-6 md:justify-end" aria-label="Footer">
            <Link
              href={contactChannels.email.href}
              className="font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[#bbc9cf]/60 transition hover:border-b hover:border-[#00d1ff] hover:text-[#00d1ff] hover:pb-0.5"
            >
              Email
            </Link>
            <Link
              href="/"
              className="font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[#bbc9cf]/60 transition hover:border-b hover:border-[#00d1ff] hover:text-[#00d1ff] hover:pb-0.5"
            >
              Home
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

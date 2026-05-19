"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { DesignPrincipleCard } from "@/components/home/DesignPrincipleCard";
import {
  homeAboutPreview,
  homeCaseStudyCard,
  homeContactCta,
  homeDesignPrinciples,
  homeFeaturedPreview,
  homeFooter,
  homeSkillGrid,
  homeThinkInSpace,
} from "@/content/home";
import { contactChannels } from "@/content/contact";
import { homeFeaturedMedia } from "@/content/homeMedia";
import { SkillIcon } from "@/components/icons/SkillIcon";
import {
  stitchBtnGhost,
  stitchBtnPrimary,
  stitchChip,
  stitchContainer,
  stitchBody,
  stitchGlass,
  stitchHeadlineLg,
  stitchHome,
  stitchLabel,
  stitchSection,
} from "@/lib/stitchTokens";
import { cn } from "@/lib/cn";

const HomeHero = dynamic(
  () => import("@/components/home/HomeHero").then((m) => ({ default: m.HomeHero })),
  {
    ssr: false,
    loading: () => <div className="min-h-[88vh] bg-[#050607]" aria-hidden />,
  },
);

const COORDS = [
  { label: "X", value: "104.2" },
  { label: "Y", value: "-42.8" },
  { label: "Z", value: "12.0" },
] as const;

const skillAccent = [
  "border-l-[#00d1ff]",
  "border-l-[#3e90ff]",
  "border-l-[#ffb051]",
  "border-l-[#4cd6ff]",
  "border-l-[#aac7ff]",
  "border-l-[#ff9f0a]",
  "border-l-[#00d1ff]",
  "border-l-[#3e90ff]",
  "border-l-[#ffb051]",
  "border-l-[#4cd6ff]",
] as const;

export function HomePage() {
  const year = new Date().getFullYear();
  const [openPrinciple, setOpenPrinciple] = useState<number | null>(null);

  return (
    <div className={cn(stitchHome, "overflow-x-hidden")}>
      <HomeHero />

      {/* Design principles — Stitch glass row */}
      <section id="principles" className={cn(stitchSection, "scroll-mt-28")}>
        <div className={stitchContainer}>
          <p className={cn(stitchLabel, "mb-10 text-[#859399]")}>Design Principles</p>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {homeDesignPrinciples.map((p, i) => (
              <DesignPrincipleCard
                key={p.title}
                principle={p}
                expanded={openPrinciple === i}
                onToggle={() => setOpenPrinciple((prev) => (prev === i ? null : i))}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured project — cinematic Stitch card */}
      <section id="featured" className={cn(stitchSection, "scroll-mt-28 bg-[#0b0d10]")}>
        <div className={stitchContainer}>
          <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <h2 className={stitchHeadlineLg}>{homeFeaturedPreview.sectionLabel}</h2>
            <span className={cn(stitchChip, "w-fit shrink-0")}>{homeFeaturedPreview.subtitle}</span>
          </div>

          <article
            className={cn(
              stitchGlass,
              "overflow-hidden rounded-lg border-white/10 bg-[#171a20] p-0 hover:shadow-[0_0_24px_0_rgba(0,209,255,0.12)]",
            )}
          >
            <div className="relative h-[min(52vw,280px)] min-h-[240px] sm:h-[22rem] md:h-[26rem]">
              <div className="absolute left-3 top-3 z-20">
                <span className="rounded border border-white/15 bg-black/55 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#bbc9cf]">
                  {homeFeaturedPreview.sampleLabel}
                </span>
              </div>
              <div className="absolute right-3 top-3 z-20 flex max-w-[calc(100%-1.5rem)] flex-wrap justify-end gap-1.5 sm:gap-2">
                {COORDS.map((c) => (
                  <span
                    key={c.label}
                    className="rounded bg-black/55 px-2 py-0.5 font-mono text-[12px] text-[#00d1ff]/85 sm:text-[13px]"
                  >
                    {c.label}: {c.value}
                  </span>
                ))}
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={homeFeaturedMedia.hero}
                alt="Facility Breach — portfolio sample environment reference (placeholder still)"
                className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
                decoding="async"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171a20] via-[#171a20]/50 to-transparent"
                aria-hidden
              />
            </div>

            <div className="p-6 sm:p-8 md:p-12">
              <h3 className="font-display text-[clamp(1.5rem,2vw+0.75rem,2rem)] font-semibold leading-tight tracking-[-0.02em] text-[#e1e2e8]">
                {homeFeaturedPreview.title}
              </h3>
              <p className={cn("mt-4 max-w-3xl text-pretty", stitchBody)}>{homeFeaturedPreview.description}</p>
              <dl className="mt-8 grid gap-x-6 gap-y-3 border-t border-white/[0.06] pt-8 sm:grid-cols-2">
                {homeFeaturedPreview.metaLines.map((row) => (
                  <div key={row.label} className="flex gap-2 font-mono text-[13px]">
                    <dt className="text-[#859399]">{row.label}</dt>
                    <dd className="text-[#e1e2e8]">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <Link
                href={homeFeaturedPreview.href}
                className="mt-8 inline-flex items-center gap-2 font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#00d1ff] transition hover:text-[#4cd6ff]"
              >
                {homeFeaturedPreview.cta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* About + Case study */}
      <section className={cn(stitchSection, "border-t border-white/[0.06]")}>
        <div className={stitchContainer}>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            <Link
              href={homeAboutPreview.href}
              className={cn(stitchGlass, "group flex min-h-[240px] flex-col p-7 md:p-8")}
            >
              <p className={cn(stitchLabel, "text-[#859399]")}>About</p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-[#e1e2e8] md:text-2xl">
                {homeAboutPreview.title}
              </h3>
              <p className={cn("mt-4 flex-1", stitchBody)}>
                {homeAboutPreview.summary}
              </p>
              <span className="mt-8 inline-flex items-center gap-1 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[#00d1ff]">
                {homeAboutPreview.cta}
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
            <Link
              href={homeCaseStudyCard.href}
              className={cn(stitchGlass, "group flex min-h-[240px] flex-col border-[#3e90ff]/20 p-7 md:p-8")}
            >
              <p className={cn(stitchLabel, "text-[#859399]")}>Research</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-[#e1e2e8]">
                {homeCaseStudyCard.title}
              </h3>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[#bbc9cf]">
                {homeCaseStudyCard.summary}
              </p>
              <span className="mt-8 inline-flex items-center gap-1 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[#00d1ff]">
                {homeCaseStudyCard.cta}
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* How I think in space */}
      <section className={cn(stitchSection, "bg-[#0b0d10]")}>
        <div className={stitchContainer}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className={stitchHeadlineLg}>{homeThinkInSpace.title}</h2>
            <p className={cn("mt-4 text-pretty", stitchBody)}>{homeThinkInSpace.subtitle}</p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-3.5 md:grid-cols-4 lg:grid-cols-5">
            {homeSkillGrid.map((row, i) => (
              <div
                key={row.skill}
                className={cn(
                  "group flex flex-col rounded border border-white/[0.08] border-l-2 bg-[#111418] p-4 transition hover:border-white/[0.12] hover:bg-[#171a20] sm:p-5",
                  skillAccent[i % skillAccent.length],
                  i === 0 && "md:col-span-2 md:row-span-1",
                )}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded bg-[#1d2024] text-[#00d1ff] ring-1 ring-white/[0.06]">
                  <SkillIcon skill={row.skill} className="h-4 w-4" />
                </div>
                <p className="mt-4 text-[14px] font-semibold leading-snug text-[#e1e2e8]">{row.skill}</p>
                <p className="mt-2 text-[12px] leading-relaxed text-[#859399] group-hover:text-[#bbc9cf]">
                  {row.descriptor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect strip + Stitch footer */}
      <section className="border-t border-white/[0.06] bg-[#0b0e12] py-14 md:py-16">
        <div className={cn(stitchContainer, "text-center")}>
          <p className={cn(stitchLabel, "text-[#859399]")}>Let&apos;s connect</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link href={homeContactCta.href} className={stitchBtnPrimary}>
              {homeContactCta.label}
            </Link>
            <Link href={contactChannels.github.href} className={stitchBtnGhost} target="_blank" rel="noopener noreferrer">
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
              href={contactChannels.linkedIn.href}
              className="font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[#bbc9cf]/60 transition hover:border-b hover:border-[#00d1ff] hover:text-[#00d1ff] hover:pb-0.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href={contactChannels.github.href}
              className="font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[#bbc9cf]/60 transition hover:border-b hover:border-[#00d1ff] hover:text-[#00d1ff] hover:pb-0.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            {homeFooter.explore.slice(1).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[#bbc9cf]/60 transition hover:border-b hover:border-[#00d1ff] hover:text-[#00d1ff] hover:pb-0.5"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}

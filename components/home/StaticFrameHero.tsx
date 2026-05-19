"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { heroBlockoutStill } from "@/content/heroBlockoutManifest";
import { homeBlockout, homeCtas, homeHero } from "@/content/home";
import {
  stitchBody,
  stitchBtnGhost,
  stitchBtnPrimary,
  stitchChip,
  stitchContainer,
  stitchGlassPanel,
  stitchHeadlineLg,
  stitchLabel,
} from "@/lib/stitchTokens";
import { cn } from "@/lib/cn";

/** Stitch handoff hero — centered type + premium blockout process section. */
export function StaticFrameHero() {
  return (
    <>
      <section
        className="relative flex min-h-[min(88vh,900px)] flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-[5.5rem] sm:px-6 sm:pb-16 sm:pt-28 md:px-16 md:pb-20 md:pt-32"
        aria-label="Hero"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(0,209,255,0.06)_0%,transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[min(72vh,640px)] bg-gradient-to-b from-[#050607] via-[#050607]/92 via-30% to-transparent md:via-[#050607]/75 md:via-40%"
          aria-hidden
        />
        <div className={cn(stitchContainer, "relative z-10 max-w-4xl px-1 text-center sm:px-0")}>
          <p className={cn(stitchLabel, "text-[#4cd6ff]")}>{homeHero.role}</p>
          <h1 className="mt-5 font-display text-[clamp(2.25rem,5.5vw+1rem,4.25rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#e1e2e8]">
            {homeHero.name}
          </h1>
          <p className={cn("mx-auto mt-6 max-w-2xl text-pretty", stitchBody)}>{homeHero.tagline}</p>
          <div className="mt-12 flex w-full max-w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <Link href={homeCtas.primary.href} className={cn(stitchBtnPrimary, "w-full sm:w-auto sm:min-w-[200px]")}>
              {homeCtas.primary.label}
            </Link>
            <Link href={homeCtas.secondary.href} className={cn(stitchBtnGhost, "w-full sm:w-auto sm:min-w-[180px]")}>
              {homeCtas.secondary.label}
            </Link>
          </div>
        </div>
        <a
          href="#blockout"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#859399] transition hover:text-[#00d1ff] sm:bottom-10"
          aria-label="Scroll to blockout"
        >
          <ChevronDown className="h-6 w-6 opacity-60" strokeWidth={1.5} />
        </a>
      </section>

      <section
        id="blockout"
        className="scroll-mt-28 border-t border-white/[0.06] bg-[#0b0d10] py-20 md:py-24 lg:py-28"
      >
        <div className={stitchContainer}>
          <p className={cn(stitchLabel, "text-[#4cd6ff]/90")}>{homeBlockout.phaseLabel}</p>

          <div className="mt-10 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14 xl:gap-16">
            <div className="min-w-0 lg:max-w-xl">
              <h2 className={stitchHeadlineLg}>{homeBlockout.title}</h2>
              <p className={cn("mt-5 text-pretty", stitchBody)}>{homeBlockout.description}</p>

              <ul className="mt-8 space-y-4 border-t border-white/[0.06] pt-8">
                {homeBlockout.pillars.map((pillar, i) => (
                  <li key={pillar.title} className="flex gap-4">
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-[#00d1ff]/25 bg-[#00d1ff]/[0.06] font-mono text-[11px] font-semibold text-[#00d1ff]"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[#e1e2e8]">
                        {pillar.title}
                      </p>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-[#859399]">{pillar.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {homeBlockout.chips.map((chip) => (
                  <span key={chip} className={stitchChip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-w-0">
              <div
                className="pointer-events-none absolute -inset-4 rounded-2xl bg-[radial-gradient(circle_at_50%_60%,rgba(0,209,255,0.08)_0%,transparent_70%)]"
                aria-hidden
              />
              <div
                className={cn(
                  stitchGlassPanel,
                  "relative overflow-hidden rounded-xl border-white/[0.08] bg-[#0d1014]/90 p-3 sm:p-4",
                )}
              >
                <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] px-2 pb-3 sm:px-3">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#859399]">
                    Fig. 01
                  </span>
                  <span className="rounded border border-[#00d1ff]/25 bg-[#00d1ff]/[0.07] px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#4cd6ff]">
                    Greybox pass
                  </span>
                </div>

                <div className="relative mt-3 flex min-h-[220px] items-center justify-center overflow-hidden rounded-lg border border-white/[0.06] bg-[#050607] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[460px]">
                  <div
                    className="pointer-events-none absolute inset-3 rounded-md border border-dashed border-white/[0.08]"
                    aria-hidden
                  />
                  <span className="absolute left-3 top-3 z-20 font-mono text-[10px] text-[#859399]/80">NW</span>
                  <span className="absolute right-3 top-3 z-20 font-mono text-[10px] text-[#859399]/80">NE</span>
                  <span className="absolute bottom-3 left-3 z-20 font-mono text-[10px] text-[#859399]/80">SW</span>
                  <span className="absolute bottom-3 right-3 z-20 font-mono text-[10px] text-[#859399]/80">SE</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={heroBlockoutStill}
                    alt="Level blockout greybox — spatial layout and encounter flow"
                    className="relative z-10 h-full w-full max-h-[min(72vh,520px)] object-contain object-center p-4 brightness-[1.04] contrast-[1.05] drop-shadow-[0_24px_64px_rgba(0,0,0,0.65)]"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>

                <p className="mt-3 px-2 font-mono text-[11px] leading-relaxed text-[#859399] sm:px-3">
                  {homeBlockout.figureCaption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

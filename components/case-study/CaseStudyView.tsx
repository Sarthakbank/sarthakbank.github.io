"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
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
import { homeFeaturedMedia } from "@/content/homeMedia";
import { contactChannels } from "@/content/contact";
import { AppleInnerShell } from "@/components/shared/AppleInnerShell";
import { AppleReveal } from "@/components/shared/AppleReveal";
import { AppleCTASection } from "@/components/shared/AppleCTASection";
import {
  innerAccents,
  innerBody,
  innerCard,
  innerCardHover,
  innerContainer,
  innerEyebrow,
  innerHeadline,
  type InnerAccentKey,
} from "@/lib/appleInnerTokens";
import { cn } from "@/lib/cn";

/** Accent rotation so sections read colorful like Home, not all-blue. */
const accentCycle: InnerAccentKey[] = ["blue", "indigo", "orange", "green", "graphite"];
const accentAt = (i: number) => innerAccents[accentCycle[i % accentCycle.length]];

/** Thin gradient bar pinned to the top edge of a card. */
function TopAccentBar({ accentKey }: { accentKey: InnerAccentKey }) {
  return (
    <div
      className={cn(
        "absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r opacity-80",
        innerAccents[accentKey].bar,
      )}
      aria-hidden
    />
  );
}

export function CaseStudyView() {
  return (
    <AppleInnerShell className="pb-[5.5rem] lg:pb-0">
      <FloatingSectionNav items={caseStudyNav} editorial />

      {/* 1. Hero */}
      <section
        id="hero"
        className="relative scroll-mt-24 overflow-hidden bg-[#f5f5f7] pt-[6.5rem] pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white to-[#f5f5f7]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-24 left-[-10%] h-[420px] w-[420px] rounded-full bg-[#0071e3]/[0.09] blur-[120px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-10 right-[-12%] h-[360px] w-[360px] rounded-full bg-[#af52de]/[0.07] blur-[120px]"
          aria-hidden
        />
        <div className={cn(innerContainer, "relative")}>
          <AppleReveal>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-[#0071e3] transition hover:text-[#0077ed]"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Home
              </Link>
              <span className="rounded-full bg-[#1d1d1f]/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6e6e73]">
                {caseStudyDemoLabel}
              </span>
            </div>

            <p className={cn(innerEyebrow, "mt-8")}>Featured project</p>
            <h1 className="mt-3 font-display text-[clamp(2.5rem,5.5vw+0.5rem,4rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#1d1d1f]">
              {caseStudyMeta.title}
            </h1>
            <span className="mt-4 inline-flex rounded-full bg-[#0071e3]/10 px-3.5 py-1.5 text-[13px] font-semibold text-[#0071e3] ring-1 ring-[#0071e3]/15">
              {caseStudyMeta.subtitle}
            </span>
            <p className="mt-6 max-w-2xl text-pretty text-[18px] leading-[1.55] text-[#6e6e73] sm:text-[20px]">
              {caseStudyMeta.summary}
            </p>

            <dl className="mt-8 flex flex-wrap gap-2.5">
              {caseStudyFactsLines.map((row, i) => {
                const accent = accentAt(i);
                return (
                  <div
                    key={row.label}
                    className="group inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white px-3.5 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                  >
                    <span
                      className={cn("h-1.5 w-1.5 rounded-full", accent.text.replace("text-", "bg-"))}
                      aria-hidden
                    />
                    <dt className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#86868b]">
                      {row.label}
                    </dt>
                    <dd className="text-[13px] font-medium text-[#1d1d1f]">{row.value}</dd>
                  </div>
                );
              })}
            </dl>
          </AppleReveal>

          <AppleReveal delay={0.1}>
            <div className="group relative mt-12 overflow-hidden rounded-[32px] border border-black/[0.05] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.10)] transition-shadow duration-500 hover:shadow-[0_16px_56px_rgba(0,0,0,0.14)]">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={homeFeaturedMedia.hero}
                  alt={`${caseStudyMeta.title} — environment reference`}
                  fill
                  priority
                  className="object-cover object-[center_42%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 1100px) 100vw, 1040px"
                />
                <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-sm">
                  Environment reference
                </span>
              </div>
            </div>
          </AppleReveal>
        </div>
      </section>

      {/* 2. Goal */}
      <section id="goal" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <p className={innerEyebrow}>Goal</p>
            <h2 className={cn("mt-3", innerHeadline)}>Design intent</h2>
            <p className={cn("mt-5 max-w-3xl text-pretty", innerBody)}>{caseStudyGoal.intent}</p>
          </AppleReveal>

          <div className="mt-12 grid gap-5 sm:gap-6 lg:grid-cols-2">
            <AppleReveal className="h-full">
              <div className={cn(innerCard, innerCardHover, "relative h-full overflow-hidden p-7 sm:p-8")}>
                <TopAccentBar accentKey="blue" />
                <p className={cn("text-[12px] font-semibold uppercase tracking-[0.1em]", innerAccents.blue.text)}>
                  Player experience target
                </p>
                <p className={cn("mt-4 text-pretty", innerBody)}>{caseStudyGoal.experienceTarget}</p>
              </div>
            </AppleReveal>
            <AppleReveal delay={0.06} className="h-full">
              <div className={cn(innerCard, innerCardHover, "relative h-full overflow-hidden p-7 sm:p-8")}>
                <TopAccentBar accentKey="indigo" />
                <p className={cn("text-[12px] font-semibold uppercase tracking-[0.1em]", innerAccents.indigo.text)}>
                  Design goals
                </p>
                <ul className="mt-4 space-y-3">
                  {caseStudyGoal.designGoals.map((goal, i) => (
                    <li key={goal} className="flex gap-3 text-[15px] leading-relaxed text-[#6e6e73]">
                      <span
                        className={cn(
                          "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold",
                          innerAccents.indigo.badge,
                        )}
                        aria-hidden
                      >
                        {i + 1}
                      </span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            </AppleReveal>
          </div>
        </div>
      </section>

      {/* 3. Level overview */}
      <section id="overview" className="scroll-mt-24 bg-[#f5f5f7] py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <p className={innerEyebrow}>Level overview</p>
            <h2 className={cn("mt-3", innerHeadline)}>Setting &amp; flow</h2>
          </AppleReveal>

          <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-3">
            {(
              [
                { label: "Setting", body: caseStudyOverview.setting },
                { label: "Player objective", body: caseStudyOverview.playerObjective },
                { label: "Spatial flow", body: caseStudyOverview.spatialFlow },
              ] as const
            ).map((block, i) => {
              const accent = accentAt(i);
              return (
                <AppleReveal key={block.label} delay={i * 0.06} className="h-full">
                  <div
                    className={cn(
                      innerCard,
                      innerCardHover,
                      "relative flex h-full flex-col overflow-hidden p-7",
                    )}
                  >
                    <TopAccentBar accentKey={accentCycle[i % accentCycle.length]} />
                    <p className={cn("text-[12px] font-semibold uppercase tracking-[0.1em]", accent.text)}>
                      {block.label}
                    </p>
                    <p className="mt-4 flex-1 text-pretty text-[15px] leading-relaxed text-[#6e6e73]">
                      {block.body}
                    </p>
                  </div>
                </AppleReveal>
              );
            })}
          </div>

          <AppleReveal delay={0.1}>
            <div className="group mt-8 overflow-hidden rounded-[28px] border border-black/[0.05] bg-white shadow-[0_4px_28px_rgba(0,0,0,0.07)] transition-shadow duration-500 hover:shadow-[0_12px_44px_rgba(0,0,0,0.11)]">
              <div className="relative aspect-[21/9] w-full">
                <Image
                  src={homeFeaturedMedia.corridorDetail}
                  alt="Service corridor — spatial flow reference"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 1100px) 100vw, 1040px"
                />
                <span className="absolute bottom-3 left-4 rounded-full bg-black/50 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                  Placeholder · corridor rhythm reference
                </span>
              </div>
            </div>
          </AppleReveal>
        </div>
      </section>

      {/* 4. Technique highlights */}
      <section id="techniques" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <p className={innerEyebrow}>Technique highlights</p>
            <h2 className={cn("mt-3", innerHeadline)}>Level design craft</h2>
          </AppleReveal>
          <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-3">
            {caseStudyTechniques.map((t, i) => {
              const accent = accentAt(i);
              return (
                <AppleReveal key={t.title} delay={i * 0.06} className="h-full">
                  <div
                    className={cn(
                      innerCard,
                      innerCardHover,
                      "group relative flex h-full flex-col overflow-hidden p-7",
                    )}
                  >
                    <TopAccentBar accentKey={accentCycle[i % accentCycle.length]} />
                    <span
                      className={cn(
                        "mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl text-[15px] font-semibold transition-transform duration-300 group-hover:scale-105",
                        accent.badge,
                      )}
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-[19px] font-semibold tracking-tight text-[#1d1d1f]">
                      {t.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#6e6e73]">{t.body}</p>
                  </div>
                </AppleReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Walkthrough / beats */}
      <section id="beats" className="scroll-mt-24 bg-[#f5f5f7] py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <p className={innerEyebrow}>Walkthrough</p>
            <h2 className={cn("mt-3", innerHeadline)}>Mission beats</h2>
            <p className={cn("mt-4 max-w-2xl text-pretty", innerBody)}>
              Five authored beats showing objective, player action, and design purpose — imagery is
              portfolio reference until in-engine captures replace placeholders.
            </p>
          </AppleReveal>

          <ol className="mt-12 space-y-6">
            {caseStudyBeats.map((beat, i) => {
              const accent = accentAt(i);
              return (
                <AppleReveal key={beat.id} delay={Math.min(i * 0.04, 0.16)}>
                  <li
                    className={cn(
                      innerCard,
                      innerCardHover,
                      "group relative overflow-hidden",
                      "lg:flex lg:items-stretch",
                      i % 2 === 1 && "lg:flex-row-reverse",
                    )}
                  >
                    <TopAccentBar accentKey={accentCycle[i % accentCycle.length]} />
                    <div className="relative min-h-[220px] overflow-hidden lg:min-h-0 lg:w-[44%] lg:shrink-0">
                      <Image
                        src={beat.image}
                        alt={`${beat.title} — ${beat.imageNote}`}
                        fill
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 460px"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm">
                        Beat {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <h3 className="font-display text-[21px] font-semibold tracking-tight text-[#1d1d1f]">
                        {beat.title}
                      </h3>
                      <p className="mt-1 text-[12px] font-medium text-[#86868b]">{beat.imageNote}</p>
                      <dl className="mt-6 space-y-4">
                        <div>
                          <dt className={innerEyebrow}>Objective</dt>
                          <dd className="mt-1.5 text-[15px] leading-relaxed text-[#6e6e73]">
                            {beat.objective}
                          </dd>
                        </div>
                        <div>
                          <dt className={innerEyebrow}>Player action</dt>
                          <dd className="mt-1.5 text-[15px] leading-relaxed text-[#6e6e73]">
                            {beat.playerAction}
                          </dd>
                        </div>
                        <div>
                          <dt className={cn(innerEyebrow, accent.text)}>Design purpose</dt>
                          <dd className="mt-1.5 text-[15px] leading-relaxed text-[#1d1d1f]">
                            {beat.designPurpose}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                </AppleReveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 6. Process */}
      <section id="process" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <p className={innerEyebrow}>Process</p>
            <h2 className={cn("mt-3", innerHeadline)}>From research to polish</h2>
          </AppleReveal>

          <ol className="mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {caseStudyProcess.map((step, i) => {
              const accent = accentAt(i);
              return (
                <AppleReveal key={step.title} delay={Math.min(i * 0.05, 0.2)} className="h-full">
                  <li
                    className={cn(
                      innerCard,
                      innerCardHover,
                      "relative flex h-full flex-col overflow-hidden p-5 sm:p-6",
                    )}
                  >
                    <TopAccentBar accentKey={accentCycle[i % accentCycle.length]} />
                    <span
                      className={cn(
                        "inline-flex h-8 w-8 items-center justify-center rounded-xl text-[13px] font-semibold",
                        accent.badge,
                      )}
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 font-display text-[16px] font-semibold text-[#1d1d1f]">
                      {step.title}
                    </p>
                    <p className="mt-2 flex-1 text-[14px] leading-relaxed text-[#6e6e73]">
                      {step.body}
                    </p>
                  </li>
                </AppleReveal>
              );
            })}
          </ol>

          <AppleReveal delay={0.08}>
            <div className={cn(innerCard, "relative mt-10 overflow-hidden p-4 sm:p-5")}>
              <TopAccentBar accentKey="graphite" />
              <div className="flex items-center justify-between gap-3 border-b border-black/[0.06] pb-3">
                <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#6e6e73]">
                  Blockout pass
                </span>
                <span className="rounded-full bg-[#0071e3]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#0071e3]">
                  Greybox
                </span>
              </div>
              <div className="relative mt-3 flex min-h-[240px] items-center justify-center rounded-2xl bg-[#f5f5f7] sm:min-h-[340px]">
                <div className="relative h-[min(60vh,420px)] w-full">
                  <Image
                    src={heroBlockoutStill}
                    alt={`${caseStudyMeta.title} greybox blockout — work in progress`}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1100px) 100vw, 1040px"
                  />
                </div>
              </div>
              <p className="mt-3 text-[12px] text-[#86868b]">
                Portfolio blockout still · replaces placeholder beats when in-engine captures are
                ready
              </p>
            </div>
          </AppleReveal>
        </div>
      </section>

      {/* 7. Outcome */}
      <section id="outcome" className="scroll-mt-24 bg-[#f5f5f7] py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <p className={innerEyebrow}>Outcome</p>
            <h2 className={cn("mt-3", innerHeadline)}>What this demonstrates</h2>
            <p className={cn("mt-5 max-w-3xl text-pretty", innerBody)}>{caseStudyOutcome.summary}</p>
          </AppleReveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {caseStudyOutcome.demonstrates.map((item, i) => {
              const accent = accentAt(i);
              return (
                <AppleReveal key={item} delay={Math.min(i * 0.05, 0.2)}>
                  <div className={cn(innerCard, innerCardHover, "flex items-start gap-3 p-4 sm:p-5")}>
                    <span
                      className={cn(
                        "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                        accent.badge,
                      )}
                      aria-hidden
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-[15px] leading-relaxed text-[#1d1d1f]">{item}</span>
                  </div>
                </AppleReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <AppleCTASection
        eyebrow="Next step"
        title="Like the thinking? Let's talk level design."
        body="Reach out for level design conversations, or browse the rest of the portfolio."
        buttons={[
          { label: "Get in touch", href: "/contact", variant: "primary" },
          { label: "Email directly", href: contactChannels.email.href, variant: "secondary" },
          { label: "Back home", href: "/", variant: "ghost" },
        ]}
      />
    </AppleInnerShell>
  );
}

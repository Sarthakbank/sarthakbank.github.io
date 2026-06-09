"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, FileText, Play } from "lucide-react";
import { FloatingSectionNav } from "./FloatingSectionNav";
import { MetadataDock } from "./MetadataDock";
import { InspirationCarousel } from "./InspirationCarousel";
import { DesignGoalShowcase } from "./DesignGoalShowcase";
import { Walkthrough } from "./Walkthrough";
import { ProcessBreakdown } from "./ProcessBreakdown";
import { FullGameplay } from "./FullGameplay";
import { TechnicalChallenges } from "./TechnicalChallenges";
import { CaseStudyReflection } from "./CaseStudyReflection";
import { MediaVideo } from "@/components/media/MediaVideo";
import { ApplePlaceholder } from "@/components/media/ApplePlaceholder";
import { YouTubeFacade } from "@/components/media/YouTubeFacade";
import { escapeProtocol } from "@/content/projects";
import type { Project } from "@/content/projects/types";
import { contactChannels } from "@/content/contact";
import { AppleInnerShell } from "@/components/shared/AppleInnerShell";
import { AppleReveal } from "@/components/shared/AppleReveal";
import { AppleCTASection } from "@/components/shared/AppleCTASection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  innerAccents,
  innerCard,
  innerCardHover,
  innerContainer,
  type InnerAccentKey,
} from "@/lib/appleInnerTokens";
import { cn } from "@/lib/cn";

/* Headings use the site display font (Hanken Grotesk); body/eyebrows stay on Inter. */
const EYEBROW = "text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6e6e73]";
const HEADLINE =
  "font-display text-[clamp(1.875rem,2.6vw+1rem,2.875rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-[#1d1d1f]";
const BODY = "text-[16px] leading-[1.6] text-[#6e6e73] md:text-[17px]";

const accentCycle: InnerAccentKey[] = ["blue", "indigo", "graphite", "green", "graphite"];
const accentAt = (i: number) => innerAccents[accentCycle[i % accentCycle.length]];

export function CaseStudyView({ project = escapeProtocol }: { project?: Project }) {
  return (
    <AppleInnerShell className="font-sans pb-[5.5rem] lg:pb-0">
      <FloatingSectionNav items={[...project.nav]} />

      {/* 1. Featured Project Hero */}
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
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#0071e3] transition hover:text-[#0077ed]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Home
            </Link>

            <SectionHeading
              as="h1"
              variant="hero"
              lead={project.eyebrow}
              title={project.title}
              gradient="blue-purple"
              className="mt-8"
            />
          </AppleReveal>

          {/* Hero visual — YouTube thumbnail / placeholder */}
          <AppleReveal delay={0.1}>
            <div className="group relative mt-10 overflow-hidden rounded-[32px] border border-black/[0.05] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.10)]">
              {project.trailerYouTubeId ? (
                <div className="relative aspect-[16/9] w-full">
                  <YouTubeFacade
                    id={project.trailerYouTubeId}
                    poster={project.heroImage ?? ""}
                    title={`${project.title} — gameplay trailer`}
                    start={3}
                  />
                </div>
              ) : project.heroImage ? (
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={project.heroImage}
                    alt={project.heroImageAlt ?? project.title}
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 1100px) 100vw, 1100px"
                  />
                  {project.youtubeUrl ? (
                    <a
                      href={project.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center"
                      aria-label={`Play ${project.title} gameplay video`}
                    >
                      <span
                        className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
                        aria-hidden
                      />
                      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#1d1d1f] shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                        <Play className="h-6 w-6 translate-x-0.5" aria-hidden />
                      </span>
                    </a>
                  ) : null}
                </div>
              ) : (
                <div className="relative aspect-[16/9] w-full">
                  <ApplePlaceholder kind="video" title="YouTube thumbnail coming soon" />
                </div>
              )}
            </div>
          </AppleReveal>

          {/* Metadata pills with small icons */}
          <AppleReveal delay={0.16}>
            <div className="mt-8">
              <MetadataDock items={project.meta} />
            </div>
          </AppleReveal>
        </div>
      </section>

      {/* 2. Project Overview */}
      <section id="overview" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <p className={EYEBROW}>Overview</p>
            <h2 className={cn("mt-3", HEADLINE)}>Project overview</h2>
          </AppleReveal>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-10">
            <AppleReveal className="space-y-5">
              {project.overview.paragraphs.map((p) => (
                <p key={p} className={cn("text-pretty", BODY)}>
                  {p}
                </p>
              ))}
            </AppleReveal>
            <AppleReveal delay={0.06}>
              <div className={cn(innerCard, "h-full p-7 sm:p-8")}>
                <p className={cn(EYEBROW, "text-[#5856d6]")}>Credits &amp; original work</p>
                <p className="mt-4 text-pretty text-[15px] leading-relaxed text-[#6e6e73]">
                  {project.overview.credit}
                </p>
              </div>
            </AppleReveal>
          </div>
        </div>
      </section>

      {/* 3. Inspiration & References */}
      <section id="inspiration" className="scroll-mt-24 bg-[#f5f5f7] py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <p className={EYEBROW}>Inspiration &amp; references</p>
            <h2 className={cn("mt-3", HEADLINE)}>What shaped the level</h2>
          </AppleReveal>

          <AppleReveal className="mt-8">
            <InspirationCarousel groups={project.inspiration} />
          </AppleReveal>
        </div>
      </section>

      {/* 4. Design Goals */}
      <section id="goals" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <p className={EYEBROW}>Design goals</p>
            <h2 className={cn("mt-3", HEADLINE)}>Five goals that shaped every decision</h2>
            <p className={cn("mt-5 max-w-3xl text-pretty", BODY)}>{project.designGoalsIntro}</p>
          </AppleReveal>

          <div className="mt-8">
            <AppleReveal>
              <DesignGoalShowcase goals={project.designGoals} />
            </AppleReveal>
          </div>
        </div>
      </section>

      {/* 5. Level Design Document */}
      <section id="document" className="scroll-mt-24 bg-[#f5f5f7] py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <div className={cn(innerCard, "p-8 sm:p-10 lg:p-12")}>
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
                <div className="flex flex-col items-start">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0071e3]/10 text-[#0071e3]">
                    <FileText className="h-7 w-7" strokeWidth={1.6} aria-hidden />
                  </span>
                  <p className={cn(EYEBROW, "mt-6")}>Level design document</p>
                  <h2 className={cn("mt-3", HEADLINE)}>Level Design Document</h2>
                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.ldd.documentUrl ? (
                      <Link
                        href={project.ldd.documentUrl}
                        className="inline-flex items-center gap-2 rounded-full bg-[#0071e3] px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-[#0077ed]"
                      >
                        <FileText className="h-4 w-4" aria-hidden />
                        Read the document
                      </Link>
                    ) : null}
                    {project.ldd.pdfUrl ? (
                      <a
                        href={project.ldd.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] bg-white px-6 py-3 text-[15px] font-semibold text-[#1d1d1f] transition hover:border-black/20 hover:bg-[#f5f5f7]"
                      >
                        <FileText className="h-4 w-4" aria-hidden />
                        Download PDF
                      </a>
                    ) : null}
                  </div>
                </div>
                <p className="text-pretty text-[16px] leading-[1.65] text-[#6e6e73] md:text-[17px]">
                  {project.ldd.body}
                </p>
              </div>
            </div>
          </AppleReveal>
        </div>
      </section>

      {/* 6. Technique Highlights */}
      <section id="techniques" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <p className={EYEBROW}>Technique highlights</p>
            <h2 className={cn("mt-3", HEADLINE)}>How the level guides the player</h2>
          </AppleReveal>

          <div className="mt-10 space-y-6 sm:space-y-8">
            {project.techniques.map((tech, i) => {
              const accent = accentAt(i);
              const flip = i % 2 === 1;
              return (
                <AppleReveal key={tech.title} delay={Math.min(i * 0.04, 0.16)}>
                  <article
                    className={cn(
                      innerCard,
                      innerCardHover,
                      "group relative overflow-hidden",
                      "lg:flex lg:items-stretch",
                      flip && "lg:flex-row-reverse",
                    )}
                  >
                    {/* Media slot */}
                    <div className="p-5 sm:p-6 lg:w-[50%] lg:shrink-0">
                      {tech.video ? (
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px]">
                          <MediaVideo
                            src={tech.video}
                            webm={tech.videoWebm}
                            poster={tech.poster}
                            title={tech.title}
                          />
                        </div>
                      ) : tech.media ? (
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px]">
                          <Image
                            src={tech.media}
                            alt={tech.title}
                            fill
                            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                            sizes="(max-width: 1024px) 90vw, 560px"
                          />
                        </div>
                      ) : (
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px]">
                          <ApplePlaceholder kind="gif" title={tech.mediaPlaceholder ?? "GIF coming soon"} />
                        </div>
                      )}
                    </div>

                    {/* Text */}
                    <div className="flex flex-1 flex-col p-6 pt-1 sm:p-8 sm:pt-2 lg:pt-8">
                      <h3 className="font-display text-[21px] font-bold tracking-tight text-[#1d1d1f]">
                        {tech.title}
                      </h3>
                      <dl className="mt-5 space-y-4">
                        <div>
                          <dt className={cn(EYEBROW, accent.text)}>My method</dt>
                          <dd className="mt-1.5 text-[15px] leading-relaxed text-[#6e6e73]">
                            {tech.method}
                          </dd>
                        </div>
                        <div>
                          <dt className={EYEBROW}>How I executed it</dt>
                          <dd className="mt-1.5 text-[15px] leading-relaxed text-[#6e6e73]">
                            {tech.execution}
                          </dd>
                        </div>
                        <div>
                          <dt className={EYEBROW}>Level example</dt>
                          <dd className="mt-1.5 text-[15px] leading-relaxed text-[#1d1d1f]">
                            {tech.example}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </article>
                </AppleReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Walkthrough */}
      {project.walkthrough ? (
        <section
          id="walkthrough"
          className="scroll-mt-24 bg-[#f5f5f7] py-20 sm:py-24 lg:py-28"
        >
          <div className={innerContainer}>
            <Walkthrough data={project.walkthrough} />
          </div>
        </section>
      ) : null}

      {/* 8. Process Breakdown — playtest & iterations */}
      {project.process ? (
        <section id="process" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
          <div className={innerContainer}>
            <ProcessBreakdown data={project.process} />
          </div>
        </section>
      ) : null}

      {/* 9. Full Gameplay Walkthrough */}
      {project.fullGameplay ? (
        <section id="gameplay" className="scroll-mt-24 bg-[#f5f5f7] py-20 sm:py-24 lg:py-28">
          <div className={innerContainer}>
            <FullGameplay data={project.fullGameplay} />
          </div>
        </section>
      ) : null}

      {/* 10. Technical Challenges */}
      {project.technicalChallenges ? (
        <section id="challenges" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
          <div className={innerContainer}>
            <TechnicalChallenges data={project.technicalChallenges} />
          </div>
        </section>
      ) : null}

      {/* 11. Reflection / What I'd do differently */}
      {project.reflection ? (
        <section id="reflection" className="scroll-mt-24 bg-[#f5f5f7] py-20 sm:py-24 lg:py-28">
          <div className={innerContainer}>
            <CaseStudyReflection data={project.reflection} />
          </div>
        </section>
      ) : null}

      {/* 11. CTA */}
      <AppleCTASection
        eyebrow={project.cta.eyebrow}
        title={project.cta.title}
        body={project.cta.body}
        buttons={[
          { label: "Contact", href: "/contact", variant: "primary" },
          { label: "Email directly", href: contactChannels.email.href, variant: "secondary" },
          { label: "Back home", href: "/", variant: "ghost" },
        ]}
      />
    </AppleInnerShell>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Box,
  Briefcase,
  Compass,
  Cpu,
  FileText,
  Gamepad2,
  MousePointer2,
  Play,
  Sparkles,
  Swords,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { FloatingSectionNav } from "./FloatingSectionNav";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { escapeProtocol } from "@/content/projects";
import type { Project, ProjectMetaIcon } from "@/content/projects/types";
import { contactChannels } from "@/content/contact";
import { AppleInnerShell } from "@/components/shared/AppleInnerShell";
import { AppleReveal } from "@/components/shared/AppleReveal";
import { AppleCTASection } from "@/components/shared/AppleCTASection";
import {
  innerAccents,
  innerCard,
  innerCardHover,
  innerContainer,
  type InnerAccentKey,
} from "@/lib/appleInnerTokens";
import { cn } from "@/lib/cn";

/* Inter typography (this page uses Inter — not the site display font). */
const EYEBROW = "text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6e6e73]";
const HEADLINE =
  "font-sans text-[clamp(1.875rem,2.6vw+1rem,2.875rem)] font-bold leading-[1.1] tracking-[-0.022em] text-[#1d1d1f]";
const BODY = "text-[16px] leading-[1.6] text-[#6e6e73] md:text-[17px]";

const accentCycle: InnerAccentKey[] = ["blue", "indigo", "orange", "green", "graphite"];
const accentAt = (i: number) => innerAccents[accentCycle[i % accentCycle.length]];

const metaIcons: Record<ProjectMetaIcon, LucideIcon> = {
  genre: Gamepad2,
  type: Box,
  engine: Cpu,
  tools: Wrench,
  iterations: Workflow,
  playtests: MousePointer2,
  role: Briefcase,
};

const goalIcons: LucideIcon[] = [Swords, Sparkles, Compass, Workflow, Box];

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

export function CaseStudyView({ project = escapeProtocol }: { project?: Project }) {
  return (
    <AppleInnerShell className="font-sans pb-[5.5rem] lg:pb-0">
      <FloatingSectionNav items={[...project.nav]} editorial />

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

            <p className={cn(EYEBROW, "mt-8")}>{project.eyebrow}</p>
            <h1 className="mt-3 font-sans text-[clamp(2.5rem,5.5vw+0.5rem,4rem)] font-bold leading-[1.02] tracking-[-0.035em] text-[#1d1d1f]">
              {project.title}
            </h1>
          </AppleReveal>

          {/* Hero visual — YouTube thumbnail / placeholder */}
          <AppleReveal delay={0.1}>
            <div className="group relative mt-10 overflow-hidden rounded-[32px] border border-black/[0.05] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.10)]">
              {project.heroImage ? (
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={project.heroImage}
                    alt={project.heroImageAlt ?? project.title}
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 1100px) 100vw, 1100px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" aria-hidden />
                  <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1d1d1f] shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                    <Play className="h-6 w-6 translate-x-0.5" aria-hidden />
                  </span>
                  {project.videoComingSoonLabel && (
                    <span className="absolute bottom-4 left-4 rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-sm">
                      {project.videoComingSoonLabel}
                    </span>
                  )}
                </div>
              ) : (
                <MediaPlaceholder
                  kind="video"
                  label="YouTube thumbnail coming soon"
                  className="aspect-[16/9]"
                />
              )}
            </div>
          </AppleReveal>

          {/* Metadata pills with small icons */}
          <AppleReveal delay={0.16}>
            <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {project.meta.map((item, i) => {
                const accent = accentAt(i);
                const Icon = metaIcons[item.icon];
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl border border-black/[0.06] bg-white px-4 py-3 shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
                  >
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
                        accent.badge,
                      )}
                      aria-hidden
                    >
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#86868b]">
                        {item.label}
                      </dt>
                      <dd className="truncate text-[14px] font-semibold text-[#1d1d1f]">
                        {item.value}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
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
              <div className={cn(innerCard, "relative h-full overflow-hidden p-7 sm:p-8")}>
                <TopAccentBar accentKey="indigo" />
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

          <div className="mt-12 space-y-10">
            {project.inspiration.map((group, gi) => {
              const accent = accentAt(gi);
              return (
                <AppleReveal key={group.category} delay={gi * 0.06}>
                  <div>
                    <span
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em]",
                        accent.badge,
                      )}
                    >
                      {group.category}
                    </span>
                    <div className="mt-5 grid gap-5 sm:gap-6 md:grid-cols-2">
                      {group.items.map((item) => (
                        <div
                          key={item.title}
                          className={cn(
                            innerCard,
                            innerCardHover,
                            "relative flex h-full flex-col overflow-hidden p-7",
                          )}
                        >
                          <TopAccentBar accentKey={accentCycle[gi % accentCycle.length]} />
                          <h3 className="font-sans text-[18px] font-bold tracking-tight text-[#1d1d1f]">
                            {item.title}
                          </h3>
                          <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#6e6e73]">
                            {item.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AppleReveal>
              );
            })}
          </div>
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

          <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {project.designGoals.map((goal, i) => {
              const accent = accentAt(i);
              const Icon = goalIcons[i % goalIcons.length];
              return (
                <AppleReveal key={goal.title} delay={Math.min(i * 0.06, 0.24)} className="h-full">
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
                        "mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105",
                        accent.badge,
                      )}
                      aria-hidden
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-sans text-[18px] font-bold leading-snug tracking-tight text-[#1d1d1f]">
                      {goal.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#6e6e73]">
                      {goal.body}
                    </p>
                  </div>
                </AppleReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Level Design Document */}
      <section id="document" className="scroll-mt-24 bg-[#f5f5f7] py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <div className={cn(innerCard, "relative overflow-hidden p-8 sm:p-10 lg:p-12")}>
              <TopAccentBar accentKey="blue" />
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
                <div className="flex flex-col items-start">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0071e3]/10 text-[#0071e3]">
                    <FileText className="h-7 w-7" strokeWidth={1.6} aria-hidden />
                  </span>
                  <p className={cn(EYEBROW, "mt-6")}>Level design document</p>
                  <h2 className={cn("mt-3", HEADLINE)}>Level Design Document</h2>
                  <div className="mt-7">
                    {project.ldd.pdfUrl ? (
                      <a
                        href={project.ldd.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#0071e3] px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-[#0077ed]"
                      >
                        <FileText className="h-4 w-4" aria-hidden />
                        Download PDF
                      </a>
                    ) : (
                      <span
                        className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-[#e8e8ed] px-6 py-3 text-[15px] font-semibold text-[#86868b]"
                        aria-disabled
                      >
                        <FileText className="h-4 w-4" aria-hidden />
                        PDF coming soon
                      </span>
                    )}
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

          <div className="mt-12 space-y-6 sm:space-y-8">
            {project.techniques.map((tech, i) => {
              const accent = accentAt(i);
              const flip = i % 2 === 1;
              return (
                <AppleReveal key={tech.title} delay={Math.min(i * 0.04, 0.16)}>
                  <article
                    className={cn(
                      innerCard,
                      innerCardHover,
                      "relative overflow-hidden",
                      "lg:flex lg:items-stretch",
                      flip && "lg:flex-row-reverse",
                    )}
                  >
                    <TopAccentBar accentKey={accentCycle[i % accentCycle.length]} />
                    {/* Media slot */}
                    <div className="p-5 sm:p-6 lg:w-[42%] lg:shrink-0">
                      {tech.media ? (
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px]">
                          <Image
                            src={tech.media}
                            alt={tech.title}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 1024px) 90vw, 460px"
                          />
                        </div>
                      ) : (
                        <MediaPlaceholder
                          kind="gif"
                          label={tech.mediaPlaceholder ?? "GIF coming soon"}
                          className="aspect-[16/10]"
                        />
                      )}
                    </div>

                    {/* Text */}
                    <div className="flex flex-1 flex-col p-6 pt-1 sm:p-8 sm:pt-2 lg:pt-8">
                      <h3 className="font-sans text-[21px] font-bold tracking-tight text-[#1d1d1f]">
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

      {/* 7. CTA */}
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

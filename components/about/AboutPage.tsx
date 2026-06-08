"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Box,
  Briefcase,
  Code2,
  Compass,
  Cpu,
  GraduationCap,
  Layers,
  LayoutGrid,
  Map,
  MapPin,
  MousePointer2,
  Network,
  Paintbrush,
  Palette,
  Shapes,
  Sparkles,
  Swords,
  Workflow,
} from "lucide-react";
import { SiJira } from "react-icons/si";
import { ToolIcon } from "@/components/icons/ToolIcon";
import { aboutCurrently, aboutHero, aboutIntro, aboutPhilosophy } from "@/content/about";
import {
  profileEducation,
  profileExperience,
  profileIdentity,
  profileTools,
} from "@/content/profile";
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

const PORTRAIT_SRC = "/media/profile/sarthak-potrait.jpeg";

/** Accent rotation for the timeline/experience badges. */
const accentCycle: InnerAccentKey[] = ["blue", "indigo", "graphite", "green", "graphite"];
const accentAt = (i: number) => innerAccents[accentCycle[i % accentCycle.length]];

/** Bright gradient treatment for the design-philosophy cards (title, top bar, soft glow). */
const philosophyStyles: Record<string, { title: string; bar: string; glow: string }> = {
  // Readable Flow — orange → coral → pink
  warm: {
    title: "bg-gradient-to-r from-[#ff9500] via-[#ff5e3a] to-[#ff2d55]",
    bar: "from-[#ff9500] via-[#ff5e3a] to-[#ff2d55]",
    glow: "bg-[#ff5e3a]",
  },
  // Spatial Signals — teal → green → cyan
  teal: {
    title: "bg-gradient-to-r from-[#2ad0c0] via-[#34c759] to-[#5ac8fa]",
    bar: "from-[#2ad0c0] via-[#34c759] to-[#5ac8fa]",
    glow: "bg-[#30d158]",
  },
  // Iterative Craft — pink → purple → rose
  pink: {
    title: "bg-gradient-to-r from-[#ff2d92] via-[#bf5af2] to-[#ff375f]",
    bar: "from-[#ff2d92] via-[#bf5af2] to-[#ff375f]",
    glow: "bg-[#bf5af2]",
  },
};

type IconComponent = LucideIcon | typeof SiJira;

/** Skill cards — colorful icon + title grid (reference layout). */
const skillCards: { label: string; Icon: IconComponent; color: string }[] = [
  { label: "Level Design", Icon: Map, color: "#bf5af2" },
  { label: "Blockouts", Icon: LayoutGrid, color: "#30b0c7" },
  { label: "Encounter Design", Icon: Swords, color: "#ff6b5e" },
  { label: "Pacing & Sightlines", Icon: Compass, color: "#3a4f7a" },
  { label: "Gameplay / Systems", Icon: Network, color: "#5856d6" },
  { label: "Gameplay Scripting", Icon: Code2, color: "#0071e3" },
  { label: "Mechanic Prototyping", Icon: Cpu, color: "#3a3a3c" },
  { label: "Gameplay UX", Icon: MousePointer2, color: "#1d1d1f" },
  { label: "3D / Visual Craft", Icon: Shapes, color: "#ff9f0a" },
  { label: "Environment Art Basics", Icon: Palette, color: "#2da44e" },
  { label: "Sculpting", Icon: Box, color: "#ff9500" },
  { label: "Texturing", Icon: Paintbrush, color: "#0071e3" },
  { label: "Workflow", Icon: Workflow, color: "#5856d6" },
  { label: "Iterative Design", Icon: Sparkles, color: "#30b0c7" },
  { label: "Agile Workflow", Icon: Layers, color: "#af52de" },
  { label: "Jira", Icon: SiJira, color: "#1d1d1f" },
];

/** Per-tool accent colors for the production stack. */
const toolColors: Record<string, string> = {
  "Adobe Suite": "#ff3b30",
  Maya: "#37a5cc",
  Blender: "#ea7600",
  ZBrush: "#c2410c",
  "Unreal Engine": "#1d1d1f",
  Unity: "#3a3a3c",
  "Substance Painter": "#d35f3a",
  SpeedTree: "#34c759",
  "After Effects": "#5856d6",
  Figma: "#af52de",
  Miro: "#ff9500",
};
const toolColor = (tool: string) => toolColors[tool] ?? "#0071e3";

/** Soft tint background derived from an accent hex (~10% alpha). */
const tint = (hex: string) => `${hex}1a`;

/** Recruiter quick-facts — icon + accent per field (values live in content/about). */
const currentlyMeta: Record<string, { Icon: IconComponent; accent: InnerAccentKey }> = {
  role: { Icon: Compass, accent: "blue" },
  availability: { Icon: BadgeCheck, accent: "green" },
  experience: { Icon: Briefcase, accent: "graphite" },
  tools: { Icon: Layers, accent: "indigo" },
};

export function AboutPage() {
  return (
    <AppleInnerShell>
      {/* 1. Hero / About intro */}
      <section className="relative overflow-hidden bg-[#f5f5f7] pt-[6.5rem] pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white to-[#f5f5f7]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-24 left-[-10%] h-[420px] w-[420px] rounded-full bg-[#0071e3]/[0.09] blur-[120px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-8 right-[-12%] h-[380px] w-[380px] rounded-full bg-[#af52de]/[0.07] blur-[120px]"
          aria-hidden
        />
        <div className={cn(innerContainer, "relative")}>
          <AppleReveal>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
              <div className="min-w-0">
                <p className={innerEyebrow}>About</p>
                <h1 className="mt-4 font-display text-[clamp(2.5rem,5.5vw+0.5rem,4rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#1d1d1f]">
                  {profileIdentity.name}
                </h1>
                <p className="mt-3 text-[18px] font-semibold text-[#0071e3] sm:text-[20px]">
                  {aboutHero.primaryRole}
                </p>
                <p className="mt-6 max-w-xl text-pretty text-[17px] leading-[1.6] text-[#6e6e73] sm:text-[18px]">
                  {aboutHero.statement}
                </p>
                <p className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-[#86868b]">
                  <MapPin className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                  {aboutHero.location}
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[28px] shadow-[0_10px_44px_rgba(0,0,0,0.18)] lg:mx-0 lg:max-w-lg">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={PORTRAIT_SRC}
                    alt={profileIdentity.name}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 440px, 90vw"
                  />
                </div>
              </div>
            </div>
          </AppleReveal>

          {/* Currently — recruiter quick-facts */}
          <AppleReveal delay={0.1}>
            <div className={cn(innerCard, "relative mt-10 overflow-hidden p-6 sm:mt-12 sm:p-7")}>
              <div
                className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0071e3] to-[#5ac8fa] opacity-80"
                aria-hidden
              />
              <p className={innerEyebrow}>{aboutCurrently.eyebrow}</p>
              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 sm:gap-x-4">
                {aboutCurrently.items.map(({ key, label, value }) => {
                  const { Icon, accent } = currentlyMeta[key];
                  return (
                    <div key={key} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
                          innerAccents[accent].badge,
                        )}
                        aria-hidden
                      >
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                      </span>
                      <div className="min-w-0">
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#86868b]">
                          {label}
                        </dt>
                        <dd className="mt-0.5 text-[14px] font-semibold leading-snug text-[#1d1d1f] sm:text-[15px]">
                          {value}
                        </dd>
                      </div>
                    </div>
                  );
                })}
              </dl>
            </div>
          </AppleReveal>
        </div>
      </section>

      {/* 2. Intro — Background (white) + Approach (dark) */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <p className={innerEyebrow}>Intro</p>
            <h2 className={cn("mt-3", innerHeadline)}>Background &amp; approach</h2>
          </AppleReveal>

          <div className="mt-12 grid gap-5 sm:gap-6 lg:grid-cols-2">
            <AppleReveal className="h-full">
              <div className={cn(innerCard, innerCardHover, "flex h-full flex-col p-8 sm:p-10")}>
                <h3 className="font-display text-[22px] font-semibold tracking-tight text-[#1d1d1f]">
                  {aboutIntro.background.title}
                </h3>
                <div className="mt-5 space-y-4">
                  {aboutIntro.background.paragraphs.map((p) => (
                    <p key={p} className="text-pretty text-[16px] leading-[1.6] text-[#6e6e73] sm:text-[17px]">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </AppleReveal>

            <AppleReveal delay={0.06} className="h-full">
              <div className="flex h-full flex-col rounded-[28px] bg-[#1d1d1f] p-8 shadow-[0_10px_44px_rgba(0,0,0,0.22)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_56px_rgba(0,0,0,0.28)] sm:p-10">
                <h3 className="font-display text-[22px] font-semibold tracking-tight text-white">
                  {aboutIntro.approach.title}
                </h3>
                <div className="mt-5 space-y-4">
                  {aboutIntro.approach.paragraphs.map((p) => (
                    <p key={p} className="text-pretty text-[16px] leading-[1.6] text-white/70 sm:text-[17px]">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </AppleReveal>
          </div>
        </div>
      </section>

      {/* 3. Design philosophy */}
      <section className="bg-[#f5f5f7] py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <p className={innerEyebrow}>Design philosophy</p>
            <h2 className={cn("mt-3", innerHeadline)}>How I design spaces</h2>
          </AppleReveal>
          <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-3">
            {aboutPhilosophy.map((item, i) => {
              const style = philosophyStyles[item.gradient] ?? philosophyStyles.warm;
              return (
                <AppleReveal key={item.title} delay={i * 0.06} className="h-full">
                  <div
                    className={cn(
                      innerCard,
                      innerCardHover,
                      "group relative flex h-full flex-col overflow-hidden p-7 sm:p-8",
                    )}
                  >
                    {/* Thin top gradient accent bar */}
                    <div
                      className={cn("absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r", style.bar)}
                      aria-hidden
                    />
                    {/* Soft colored glow wash inside the card */}
                    <div
                      className={cn(
                        "pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-[0.14] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.22]",
                        style.glow,
                      )}
                      aria-hidden
                    />
                    <h3
                      className={cn(
                        "relative font-display text-[26px] font-bold leading-tight tracking-tight sm:text-[28px]",
                        style.title,
                        "bg-clip-text text-transparent",
                      )}
                    >
                      {item.title}
                    </h3>
                    <p className="relative mt-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#86868b]">
                      {item.subtitle}
                    </p>
                    <p className="relative mt-4 flex-1 text-[15px] leading-relaxed text-[#6e6e73]">
                      {item.body}
                    </p>
                  </div>
                </AppleReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Skills */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <p className={innerEyebrow}>Skills</p>
            <h2 className={cn("mt-3", innerHeadline)}>By discipline</h2>
          </AppleReveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {skillCards.map(({ label, Icon, color }, i) => (
              <AppleReveal key={label} delay={Math.min((i % 4) * 0.05, 0.2)} className="h-full">
                <div
                  className={cn(
                    innerCard,
                    innerCardHover,
                    "flex h-full flex-col items-center gap-4 p-6 text-center sm:p-7",
                  )}
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: tint(color), color }}
                    aria-hidden
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span className="text-[14px] font-semibold leading-snug text-[#1d1d1f] sm:text-[15px]">
                    {label}
                  </span>
                </div>
              </AppleReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Timeline (Education) */}
      <section className="bg-[#f5f5f7] py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <p className={innerEyebrow}>Education</p>
            <h2 className={cn("mt-3", innerHeadline)}>Timeline</h2>
          </AppleReveal>
          <ol className="mt-12 space-y-4 sm:space-y-5">
            {profileEducation.map((edu, i) => {
              const accent = accentAt(i);
              return (
                <AppleReveal key={edu.institution} delay={Math.min(i * 0.05, 0.2)}>
                  <li
                    className={cn(
                      innerCard,
                      innerCardHover,
                      "flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:p-7",
                    )}
                  >
                    <div className="flex gap-4">
                      <div
                        className={cn(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl",
                          accent.badge,
                        )}
                      >
                        <GraduationCap className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <p className="font-display text-[17px] font-semibold leading-snug text-[#1d1d1f] sm:text-[18px]">
                          {edu.institution}
                        </p>
                        <p className="mt-1 text-[14px] leading-relaxed text-[#6e6e73]">
                          {edu.credential}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 self-start rounded-full bg-white px-3 py-1 text-[12px] font-semibold tracking-[0.02em] text-[#6e6e73] ring-1 ring-black/[0.06] sm:self-center">
                      {edu.dates}
                    </span>
                  </li>
                </AppleReveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 6. Roles to date (Experience) */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <p className={innerEyebrow}>Experience</p>
            <h2 className={cn("mt-3", innerHeadline)}>Roles to date</h2>
          </AppleReveal>
          <ul className="mt-12 space-y-5">
            {profileExperience.map((job, i) => {
              const accent = accentAt(i);
              return (
                <AppleReveal key={`${job.company}-${job.duration}`} delay={i * 0.06}>
                  <li
                    className={cn(
                      innerCard,
                      innerCardHover,
                      "relative overflow-hidden p-6 sm:p-8",
                    )}
                  >
                    <div
                      className={cn(
                        "absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r opacity-80",
                        accent.bar,
                      )}
                      aria-hidden
                    />
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex gap-4">
                        <div
                          className={cn(
                            "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl",
                            accent.badge,
                          )}
                        >
                          <Briefcase className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                        </div>
                        <div>
                          <p className="font-display text-[20px] font-semibold text-[#1d1d1f]">
                            {job.company}
                          </p>
                          <p
                            className={cn(
                              "mt-1 text-[13px] font-semibold uppercase tracking-[0.1em]",
                              accent.text,
                            )}
                          >
                            {job.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-[13px] text-[#86868b] sm:text-right">
                        {job.duration}
                        <span className="mx-1.5 text-black/20">·</span>
                        {job.location}
                      </p>
                    </div>
                    <p className="mt-5 border-t border-black/[0.06] pt-5 text-[15px] leading-relaxed text-[#6e6e73]">
                      {job.summary}
                    </p>
                  </li>
                </AppleReveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 7. Production stack (Tools) */}
      <section className="bg-[#f5f5f7] py-20 sm:py-24 lg:py-28">
        <div className={innerContainer}>
          <AppleReveal>
            <p className={innerEyebrow}>Tools</p>
            <h2 className={cn("mt-3", innerHeadline)}>Production stack</h2>
            <p className={cn("mt-4 max-w-2xl text-pretty", innerBody)}>
              Engines, DCC, and collaboration tools used across level design, 3D art, and studio
              workflow.
            </p>
          </AppleReveal>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
            {profileTools.map((tool, i) => {
              const color = toolColor(tool);
              return (
                <AppleReveal key={tool} delay={Math.min((i % 6) * 0.04, 0.2)} className="h-full">
                  <li
                    className={cn(
                      innerCard,
                      innerCardHover,
                      "flex h-full flex-col items-center justify-center gap-3 px-3 py-6 text-center",
                    )}
                  >
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: tint(color), color }}
                      aria-hidden
                    >
                      <ToolIcon tool={tool} className="h-6 w-6" />
                    </span>
                    <span className="text-[12.5px] font-semibold leading-tight text-[#6e6e73]">
                      {tool}
                    </span>
                  </li>
                </AppleReveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 8. CTA */}
      <AppleCTASection
        eyebrow="Next step"
        title="Explore the featured project or get in touch."
        body="See how spatial flow, beats, and iteration show up in a vertical-slice case study — or reach out for level design conversations."
        buttons={[
          { label: "Featured project", href: "/case-study", variant: "primary" },
          { label: "Contact", href: "/contact", variant: "secondary" },
          { label: "Email directly", href: contactChannels.email.href, variant: "ghost" },
        ]}
      />
    </AppleInnerShell>
  );
}

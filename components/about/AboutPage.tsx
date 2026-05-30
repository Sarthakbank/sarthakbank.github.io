"use client";

import Image from "next/image";
import { Briefcase, GraduationCap } from "lucide-react";
import { SkillIcon } from "@/components/icons/SkillIcon";
import { ToolIcon } from "@/components/icons/ToolIcon";
import { aboutHero, aboutIntro, aboutPhilosophy } from "@/content/about";
import {
  profileEducation,
  profileExperience,
  profileIdentity,
  profileSummary,
  profileTools,
} from "@/content/profile";
import { skillGroups } from "@/content/skillGroups";
import { contactChannels } from "@/content/contact";
import { AppleInnerShell } from "@/components/shared/AppleInnerShell";
import { AppleReveal } from "@/components/shared/AppleReveal";
import { AppleCTASection } from "@/components/shared/AppleCTASection";
import { cn } from "@/lib/cn";

const PORTRAIT_SRC = "/media/profile/portrait.png";

const EYEBROW = "text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6e6e73]";
const HEADLINE =
  "font-display text-[clamp(1.75rem,2.5vw+1rem,2.75rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-[#1d1d1f]";
const BODY = "text-[16px] leading-[1.6] text-[#6e6e73] md:text-[17px]";
const CONTAINER = "mx-auto w-full max-w-[1100px] px-5 sm:px-8 lg:px-10";

const cardBase =
  "rounded-[28px] border border-black/[0.05] bg-white shadow-[0_2px_18px_rgba(0,0,0,0.05)]";
const cardHover =
  "transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(0,0,0,0.09)]";

const accentBadges = [
  "bg-[#0071e3]/10 text-[#0071e3] ring-1 ring-[#0071e3]/15",
  "bg-[#5856d6]/10 text-[#5856d6] ring-1 ring-[#5856d6]/15",
  "bg-[#ff9500]/12 text-[#c93400] ring-1 ring-[#ff9500]/20",
  "bg-[#34c759]/12 text-[#248a3d] ring-1 ring-[#34c759]/18",
] as const;

export function AboutPage() {
  return (
    <AppleInnerShell>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-[#f5f5f7] pt-[6.5rem] pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white to-[#f5f5f7]"
          aria-hidden
        />
        <div className={cn(CONTAINER, "relative")}>
          <AppleReveal>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
              <div className="min-w-0">
                <p className={EYEBROW}>{aboutHero.roles}</p>
                <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw+0.5rem,3.75rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-[#1d1d1f]">
                  About {profileIdentity.name}
                </h1>
                <p className="mt-5 max-w-xl text-pretty text-[18px] leading-[1.55] text-[#6e6e73] sm:text-[20px]">
                  {aboutHero.statement}
                </p>
                <p className="mt-5 text-[14px] font-medium text-[#86868b]">
                  {profileIdentity.location}
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[28px] border border-black/[0.06] bg-white shadow-[0_10px_44px_rgba(0,0,0,0.12)] lg:mx-0 lg:max-w-md">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={PORTRAIT_SRC}
                    alt={profileIdentity.name}
                    fill
                    priority
                    className="object-cover object-[50%_14%]"
                    sizes="(min-width: 1024px) 440px, 90vw"
                  />
                </div>
              </div>
            </div>
          </AppleReveal>
        </div>
      </section>

      {/* 2. Background */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className={CONTAINER}>
          <AppleReveal>
            <p className={EYEBROW}>Intro</p>
            <h2 className={cn("mt-3", HEADLINE)}>Background</h2>
          </AppleReveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <AppleReveal className="space-y-5">
              {aboutIntro.paragraphs.map((p) => (
                <p key={p} className={cn("text-pretty", BODY)}>
                  {p}
                </p>
              ))}
            </AppleReveal>
            <AppleReveal delay={0.06}>
              <div className={cn(cardBase, "h-full p-7 sm:p-8")}>
                <p className={EYEBROW}>Summary</p>
                <p className="mt-4 text-pretty text-[15px] leading-relaxed text-[#6e6e73]">
                  {profileSummary}
                </p>
              </div>
            </AppleReveal>
          </div>
        </div>
      </section>

      {/* 3. Design philosophy */}
      <section className="bg-[#f5f5f7] py-16 sm:py-20 lg:py-24">
        <div className={CONTAINER}>
          <AppleReveal>
            <p className={EYEBROW}>Design philosophy</p>
            <h2 className={cn("mt-3", HEADLINE)}>How I design spaces</h2>
          </AppleReveal>
          <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-3">
            {aboutPhilosophy.map((item, i) => (
              <AppleReveal key={item.title} delay={i * 0.06} className="h-full">
                <div className={cn(cardBase, cardHover, "flex h-full flex-col p-7")}>
                  <h3 className="font-display text-[19px] font-semibold tracking-tight text-[#1d1d1f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#6e6e73]">
                    {item.body}
                  </p>
                </div>
              </AppleReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Education */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className={CONTAINER}>
          <AppleReveal>
            <p className={EYEBROW}>Education</p>
            <h2 className={cn("mt-3", HEADLINE)}>Timeline</h2>
          </AppleReveal>
          <ol className="mt-12 space-y-4 sm:space-y-5">
            {profileEducation.map((edu, i) => (
              <AppleReveal key={edu.institution} delay={Math.min(i * 0.05, 0.2)}>
                <li
                  className={cn(
                    cardBase,
                    "flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:p-7",
                  )}
                >
                  <div className="flex gap-4">
                    <div
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl",
                        accentBadges[i % accentBadges.length],
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
                  <span className="shrink-0 self-start rounded-full bg-[#f5f5f7] px-3 py-1 text-[12px] font-semibold tracking-[0.02em] text-[#6e6e73] sm:self-center">
                    {edu.dates}
                  </span>
                </li>
              </AppleReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Experience */}
      <section className="bg-[#f5f5f7] py-16 sm:py-20 lg:py-24">
        <div className={CONTAINER}>
          <AppleReveal>
            <p className={EYEBROW}>Experience</p>
            <h2 className={cn("mt-3", HEADLINE)}>Roles to date</h2>
          </AppleReveal>
          <ul className="mt-12 space-y-5">
            {profileExperience.map((job, i) => (
              <AppleReveal key={`${job.company}-${job.duration}`} delay={i * 0.06}>
                <li className={cn(cardBase, cardHover, "p-6 sm:p-8")}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                      <div
                        className={cn(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl",
                          accentBadges[i % accentBadges.length],
                        )}
                      >
                        <Briefcase className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                      </div>
                      <div>
                        <p className="font-display text-[20px] font-semibold text-[#1d1d1f]">
                          {job.company}
                        </p>
                        <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#0071e3]">
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
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Skills by focus */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className={CONTAINER}>
          <AppleReveal>
            <p className={EYEBROW}>Skills</p>
            <h2 className={cn("mt-3", HEADLINE)}>By focus</h2>
          </AppleReveal>
          <div className="mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <AppleReveal key={group.title} delay={i * 0.06} className="h-full">
                <div className={cn(cardBase, cardHover, "flex h-full flex-col p-7")}>
                  <h3 className="font-display text-[19px] font-semibold text-[#1d1d1f]">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#86868b]">
                    {group.subtitle}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-[#f5f5f7] px-3.5 py-2 text-[14px] font-medium text-[#1d1d1f]"
                      >
                        <SkillIcon skill={skill} className="h-4 w-4 shrink-0 text-[#0071e3]" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </AppleReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Tools */}
      <section className="bg-[#f5f5f7] py-16 sm:py-20 lg:py-24">
        <div className={CONTAINER}>
          <AppleReveal>
            <p className={EYEBROW}>Tools</p>
            <h2 className={cn("mt-3", HEADLINE)}>Production stack</h2>
            <p className={cn("mt-4 max-w-2xl text-pretty", BODY)}>
              Engines, DCC, and collaboration tools used across level design, 3D art, and studio
              workflow.
            </p>
          </AppleReveal>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
            {profileTools.map((tool, i) => (
              <AppleReveal key={tool} delay={Math.min((i % 6) * 0.04, 0.2)} className="h-full">
                <li
                  className={cn(
                    cardBase,
                    cardHover,
                    "flex h-full flex-col items-center justify-center gap-2.5 px-3 py-6 text-center",
                  )}
                >
                  <ToolIcon tool={tool} className="h-7 w-7 text-[#1d1d1f]" />
                  <span className="text-[12.5px] font-semibold leading-tight text-[#6e6e73]">
                    {tool}
                  </span>
                </li>
              </AppleReveal>
            ))}
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

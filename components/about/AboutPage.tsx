"use client";

import Link from "next/link";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { ProfilePortrait } from "@/components/media/ProfilePortrait";
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
import { homeContactCta } from "@/content/home";
import {
  stitchBody,
  stitchBtnGhost,
  stitchBtnPrimary,
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

const skillAccent = [
  "border-l-[#00d1ff]",
  "border-l-[#3e90ff]",
  "border-l-[#ffb051]",
  "border-l-[#4cd6ff]",
] as const;

export function AboutPage() {
  return (
    <div className={cn(stitchHome, "overflow-x-hidden")}>
      {/* 1. Hero */}
      <section id="about-hero" className="scroll-mt-28 bg-[#050607] pt-[5.5rem] sm:pt-20">
        <div className={stitchContainer}>
          <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-14">
            <div className="min-w-0">
              <p className={cn(stitchLabel, "text-[#4cd6ff]")}>About</p>
              <h1 className="mt-4 font-display text-[clamp(2rem,4.5vw+1rem,3.25rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#e1e2e8]">
                {profileIdentity.name}
              </h1>
              <p className="mt-4 font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-[#bbc9cf]">
                {aboutHero.roles}
              </p>
              <p className={cn("mt-6 max-w-xl text-pretty", stitchBody)}>{aboutHero.statement}</p>
              <p className="mt-4 font-mono text-[12px] text-[#859399]">{profileIdentity.location}</p>
            </div>
            <ProfilePortrait className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-md" priority />
          </div>
        </div>
      </section>

      {/* 2. Intro */}
      <section className={cn(stitchSection, sectionAlt)}>
        <div className={stitchContainer}>
          <p className={cn(stitchLabel, "text-[#859399]")}>Intro</p>
          <h2 className={cn("mt-3", stitchHeadlineLg)}>Background</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div className="space-y-5">
              {aboutIntro.paragraphs.map((p) => (
                <p key={p} className={cn("text-pretty", stitchBody)}>
                  {p}
                </p>
              ))}
            </div>
            <div className={cn(stitchGlassPanel, "p-6 sm:p-7")}>
              <p className={cn(stitchLabel, "text-[#4cd6ff]")}>Summary</p>
              <p className={cn("mt-4 text-pretty text-[15px] leading-relaxed text-[#bbc9cf]")}>
                {profileSummary}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Design philosophy */}
      <section className={cn(stitchSection, sectionBase)}>
        <div className={stitchContainer}>
          <p className={cn(stitchLabel, "text-[#859399]")}>Design philosophy</p>
          <h2 className={cn("mt-3", stitchHeadlineLg)}>How I design spaces</h2>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {aboutPhilosophy.map((item, i) => (
              <li
                key={item.title}
                className={cn(
                  stitchGlassPanel,
                  "border-l-2 p-6 sm:p-7",
                  skillAccent[i % skillAccent.length],
                )}
              >
                <h3 className="font-display text-lg font-semibold tracking-tight text-[#e1e2e8]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#859399]">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Education */}
      <section className={cn(stitchSection, sectionAlt)}>
        <div className={stitchContainer}>
          <p className={cn(stitchLabel, "text-[#859399]")}>Education</p>
          <h2 className={cn("mt-3", stitchHeadlineLg)}>Timeline</h2>
          <ol className="relative mt-10 space-y-0 border-l border-white/[0.08] pl-6 sm:pl-8">
            {profileEducation.map((edu, i) => (
              <li
                key={edu.institution}
                className={cn(
                  "relative pb-8 last:pb-0",
                  i < profileEducation.length - 1 && "mb-0",
                )}
              >
                <span
                  className="absolute -left-[calc(1.5rem+1px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#050607] bg-[#00d1ff] sm:-left-[calc(2rem+1px)]"
                  aria-hidden
                />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div className="min-w-0">
                    <p className="font-display text-base font-semibold leading-snug text-[#e1e2e8] sm:text-lg">
                      {edu.institution}
                    </p>
                    <p className="mt-1 text-[14px] leading-relaxed text-[#bbc9cf]">{edu.credential}</p>
                  </div>
                  <p className="shrink-0 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#00d1ff]/90 sm:text-right">
                    {edu.dates}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Experience */}
      <section className={cn(stitchSection, sectionBase)}>
        <div className={stitchContainer}>
          <p className={cn(stitchLabel, "text-[#859399]")}>Experience</p>
          <h2 className={cn("mt-3", stitchHeadlineLg)}>Roles to date</h2>
          <ul className="mt-10 space-y-5">
            {profileExperience.map((job) => (
              <li key={`${job.company}-${job.duration}`} className={cn(stitchGlass, "p-6 sm:p-8")}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-[#111418] text-[#00d1ff]">
                      <Briefcase className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                    </div>
                    <div>
                      <p className="font-display text-xl font-semibold text-[#e1e2e8]">{job.company}</p>
                      <p className="mt-1 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4cd6ff]">
                        {job.role}
                      </p>
                    </div>
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#859399] sm:text-right">
                    {job.duration}
                    <span className="mx-1.5 text-white/20">·</span>
                    {job.location}
                  </p>
                </div>
                <p className="mt-5 border-t border-white/[0.06] pt-5 text-[15px] leading-relaxed text-[#bbc9cf]">
                  {job.summary}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Skills by focus */}
      <section className={cn(stitchSection, sectionAlt)}>
        <div className={stitchContainer}>
          <p className={cn(stitchLabel, "text-[#859399]")}>Skills</p>
          <h2 className={cn("mt-3", stitchHeadlineLg)}>By focus</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <div
                key={group.title}
                className={cn(
                  stitchGlassPanel,
                  "border-l-2 p-6 sm:p-7",
                  skillAccent[i % skillAccent.length],
                )}
              >
                <h3 className="font-display text-lg font-semibold text-[#e1e2e8]">{group.title}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[#859399]">
                  {group.subtitle}
                </p>
                <ul className="mt-5 space-y-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 rounded-md border border-white/[0.06] bg-[#111418]/80 px-3 py-2.5 text-[14px] font-medium text-[#e1e2e8]"
                    >
                      <SkillIcon skill={skill} className="h-4 w-4 shrink-0 text-[#00d1ff]" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Tools */}
      <section className={cn(stitchSection, sectionBase)}>
        <div className={stitchContainer}>
          <p className={cn(stitchLabel, "text-[#859399]")}>Tools</p>
          <h2 className={cn("mt-3", stitchHeadlineLg)}>Production stack</h2>
          <p className={cn("mt-4 max-w-2xl text-pretty", stitchBody)}>
            Engines, DCC, and collaboration tools used across level design, 3D art, and studio workflow.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {profileTools.map((tool) => (
              <li
                key={tool}
                className="flex flex-col items-center justify-center gap-2 rounded-lg border border-white/[0.08] bg-[#111418] px-3 py-5 text-center transition hover:border-[#00d1ff]/25 hover:bg-[#171a20]"
              >
                <ToolIcon tool={tool} className="h-7 w-7 text-[#00d1ff]" />
                <span className="text-[12px] font-semibold leading-tight text-[#bbc9cf]">{tool}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. CTA */}
      <section className={cn(stitchSection, sectionAlt, "pb-20 sm:pb-24")}>
        <div className={stitchContainer}>
          <div className={cn(stitchGlass, "px-6 py-10 text-center sm:px-10 sm:py-12 md:text-left")}>
            <p className={cn(stitchLabel, "text-[#859399]")}>Next step</p>
            <h2 className="mt-3 font-display text-[clamp(1.5rem,2vw+0.75rem,2rem)] font-semibold tracking-tight text-[#e1e2e8]">
              Explore the featured project or get in touch.
            </h2>
            <p className={cn("mx-auto mt-4 max-w-xl text-pretty md:mx-0", stitchBody)}>
              See how spatial flow, beats, and iteration show up in a vertical-slice case study — or reach out for
              level design conversations.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <Link href="/case-study" className={stitchBtnPrimary}>
                Featured project
              </Link>
              <Link href={homeContactCta.href} className={stitchBtnGhost}>
                {homeContactCta.label}
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-1 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[#00d1ff] transition hover:text-[#4cd6ff]"
              >
                Home
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

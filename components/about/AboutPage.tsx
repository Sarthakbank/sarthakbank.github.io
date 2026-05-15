"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Gamepad2,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/motion/FadeIn";
import { MotionSection } from "@/components/motion/MotionSection";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { LabFlowBridge } from "@/components/motion/LabFlowBridge";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ProfilePortrait } from "@/components/media/ProfilePortrait";
import { SkillIcon } from "@/components/icons/SkillIcon";
import { ToolIcon } from "@/components/icons/ToolIcon";
import { aboutIntro, aboutPhilosophy, aboutProcess } from "@/content/about";
import {
  profileEducation,
  profileExperience,
  profileIdentity,
  profileSummary,
} from "@/content/profile";
import { skillGroups } from "@/content/skillGroups";
import { profileToolGroups } from "@/content/toolGroups";
import { contactChannels } from "@/content/contact";
import { Magnetic } from "@/components/experiment/Magnetic";
import { useImmersiveLab } from "@/components/experiment/ImmersiveLabProvider";
import { cn } from "@/lib/cn";

function AboutScrollChapter({
  id,
  index,
  onActive,
  children,
}: {
  id: string;
  index: number;
  onActive: (i: number) => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-38% 0px -38% 0px", amount: 0.48 });
  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);
  return (
    <div
      id={id}
      ref={ref}
      className="scroll-mt-28 max-lg:scroll-mt-[calc(6.75rem+env(safe-area-inset-top,0px))]"
    >
      {children}
    </div>
  );
}

export function AboutPage() {
  const lab = useImmersiveLab();
  const reduceMotion = useReducedMotion();
  const [activeSkillIdx, setActiveSkillIdx] = useState(0);
  const [activeToolIdx, setActiveToolIdx] = useState(0);

  return (
    <div className="min-h-dvh bg-[#fbfbfd] text-[#1d1d1f] antialiased dark:bg-[#fbfbfd] dark:text-[#1d1d1f]">
      <Section className="relative overflow-hidden border-b border-black/[0.06] bg-[#fbfbfd] pt-24 sm:pt-28">
        <Container className="relative">
          <div className="grid gap-10 sm:gap-12 md:gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
            <FadeIn className="min-w-0">
              <SectionLabel>About</SectionLabel>
              <h1 className="mt-4 max-w-3xl text-balance font-display text-display-lg font-semibold lg:text-display-xl">
                {profileIdentity.name}
              </h1>
              <p className="mt-4 text-xl font-medium tracking-tight text-ink/90">
                {profileIdentity.primaryRole} · {profileIdentity.headline}
              </p>
              <p className="mt-3 max-w-2xl text-sm font-semibold uppercase tracking-wide text-muted">
                {profileIdentity.location}
              </p>
            </FadeIn>
            <FadeIn delay={0.06} className="min-w-0">
              <ProfilePortrait className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none" priority />
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section className="border-b border-black/[0.06] bg-white">
        <Container>
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Intro
            </h2>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted">
                {aboutIntro.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <Card className="border-accent/20">
                <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                  {profileSummary}
                </p>
              </Card>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {lab ? <LabFlowBridge /> : null}

      <Section>
        <Container>
          <FadeIn>
            <SectionLabel>Design philosophy</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Principles
            </h2>
            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {aboutPhilosophy.map((item) => (
                <li key={item}>
                  {lab && !reduceMotion ? (
                    <motion.div
                      initial={{ opacity: 0.85, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Card
                        interactive={lab}
                        className="h-full border-l-4 border-l-accent/55 transition duration-300 hover:shadow-lift"
                      >
                        <p className="font-display text-xl font-semibold leading-snug tracking-tight text-ink">
                          {item}
                        </p>
                      </Card>
                    </motion.div>
                  ) : (
                    <Card
                      interactive={lab}
                      className="h-full border-l-4 border-l-accent/55 transition duration-300 hover:-translate-y-0.5 hover:shadow-lift"
                    >
                      <p className="font-display text-xl font-semibold leading-snug tracking-tight text-ink">
                        {item}
                      </p>
                    </Card>
                  )}
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </Section>

      {lab ? <LabFlowBridge wash="strong" /> : null}

      <Section className="border-b border-black/[0.06] bg-white">
        <Container>
          <FadeIn>
            <SectionLabel>Education</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Timeline
            </h2>
            <ol className="mt-10 space-y-5">
              {profileEducation.map((edu, i) => (
                <li key={edu.institution}>
                  <Card className="border-hairline transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-lift">
                    <div className="flex gap-4 sm:gap-5">
                      <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-2xl border border-hairline bg-accent/10 text-xs font-bold text-accent sm:h-12 sm:w-12 sm:text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="flex min-w-0 flex-1 items-start gap-3">
                        <GraduationCap
                          className="mt-1 h-5 w-5 shrink-0 text-accent sm:h-6 sm:w-6"
                          aria-hidden
                          strokeWidth={1.75}
                        />
                        <div className="min-w-0">
                          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                            {edu.dates}
                          </p>
                          <p className="mt-2 font-display text-xl font-semibold leading-snug text-ink">
                            {edu.institution}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-muted">
                            {edu.credential}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </li>
              ))}
            </ol>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn>
            <SectionLabel>Experience</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Roles to date
            </h2>
            <div className="mt-10 space-y-6">
              {profileExperience.map((job) => (
                <Card key={job.company} className="border-hairline">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-hairline bg-surface/50 text-accent dark:bg-canvas/40">
                        <Briefcase className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="font-display text-xl font-semibold text-ink sm:text-2xl">
                          {job.company}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-accent">{job.role}</p>
                      </div>
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-wide text-muted sm:text-right">
                      {job.duration} · {job.location}
                    </p>
                  </div>
                  <p className="mt-5 border-t border-hairline pt-5 text-sm leading-relaxed text-muted sm:text-[15px]">
                    {job.summary}
                  </p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {lab ? <LabFlowBridge /> : null}

      <Section className="border-b border-black/[0.06] bg-white">
        <Container>
          {lab ? (
            <MotionSection>
              <SectionLabel>Skills</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                By focus
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                Scroll the stack — the rail tracks which cluster is in focus. Same content, clearer progression.
              </p>
              {lab && !reduceMotion ? (
                <div className="lg:hidden -mx-4 mb-10 rounded-2xl border border-hairline/80 bg-surface/65 px-4 py-4 shadow-panel backdrop-blur-md dark:bg-surface/45 sm:-mx-6 sm:px-6">
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.32em] text-muted">
                    Skills · chapter
                  </p>
                  <p className="mt-2 font-display text-base font-semibold tracking-tight text-ink">
                    {skillGroups[activeSkillIdx]?.title}
                  </p>
                  <div className="mt-4 flex gap-2" role="tablist" aria-label="Skill groups">
                    {skillGroups.map((g, i) => (
                      <button
                        key={g.title}
                        type="button"
                        role="tab"
                        aria-selected={i === activeSkillIdx}
                        className={cn(
                          "h-1 min-w-0 flex-1 rounded-full transition-colors",
                          i === activeSkillIdx ? "bg-accent" : "bg-border hover:bg-muted",
                        )}
                        onClick={() =>
                          document.getElementById(`about-skill-${i}`)?.scrollIntoView({
                            behavior: reduceMotion ? "auto" : "smooth",
                            block: "center",
                          })
                        }
                      />
                    ))}
                  </div>
                </div>
              ) : lab ? (
                <div className="lg:hidden -mx-4 mb-10 rounded-2xl border border-hairline/80 bg-surface/65 px-4 py-4 shadow-panel backdrop-blur-md dark:bg-surface/45 sm:-mx-6 sm:px-6">
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.32em] text-muted">
                    Skills · chapter
                  </p>
                  <p className="mt-2 font-display text-base font-semibold tracking-tight text-ink">
                    {skillGroups[activeSkillIdx]?.title}
                  </p>
                  <div className="mt-4 flex gap-2" role="tablist" aria-label="Skill groups">
                    {skillGroups.map((g, i) => (
                      <button
                        key={g.title}
                        type="button"
                        role="tab"
                        aria-selected={i === activeSkillIdx}
                        className={cn(
                          "h-1 min-w-0 flex-1 rounded-full transition-colors",
                          i === activeSkillIdx ? "bg-accent" : "bg-border hover:bg-muted",
                        )}
                        onClick={() =>
                          document.getElementById(`about-skill-${i}`)?.scrollIntoView({
                            behavior: "auto",
                            block: "center",
                          })
                        }
                      />
                    ))}
                  </div>
                </div>
              ) : null}
              <div className="mt-10 sm:mt-12 lg:grid lg:grid-cols-[minmax(11rem,14rem)_1fr] lg:items-start lg:gap-12 xl:gap-16">
                <aside className="hidden lg:sticky lg:top-[calc(4.25rem+0.85rem+env(safe-area-inset-top,0px))] lg:mb-0 lg:flex lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0">
                  {skillGroups.map((g, i) => (
                    <button
                      key={g.title}
                      type="button"
                      className={cn(
                        "min-w-[10.5rem] shrink-0 rounded-xl px-3 py-2.5 text-left transition-colors duration-200 lg:min-w-0",
                        i === activeSkillIdx
                          ? "bg-accent/[0.14] text-accent ring-1 ring-accent/30"
                          : "text-muted hover:bg-elevated/80 hover:text-ink",
                      )}
                      onClick={() =>
                        document
                          .getElementById(`about-skill-${i}`)
                          ?.scrollIntoView({
                            behavior: reduceMotion ? "auto" : "smooth",
                            block: "center",
                          })
                      }
                    >
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-1 font-display text-sm font-semibold tracking-tight sm:text-base">
                        {g.title}
                      </p>
                    </button>
                  ))}
                </aside>
                <div className="space-y-12 lg:space-y-16">
                  {skillGroups.map((group, i) => (
                    <AboutScrollChapter
                      key={group.title}
                      id={`about-skill-${i}`}
                      index={i}
                      onActive={setActiveSkillIdx}
                    >
                      <motion.div
                        initial={{ opacity: 0.92, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.22 }}
                        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Card interactive className="h-full border-hairline">
                          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                            {group.title}
                          </p>
                          <p className="mt-1 text-sm text-muted">{group.subtitle}</p>
                          <ul className="mt-5 space-y-2.5 sm:mt-6">
                            {group.skills.map((skill) => (
                              <li
                                key={skill}
                                className="flex items-center gap-3 rounded-xl border border-hairline bg-elevated/60 px-3 py-3 text-sm font-semibold text-ink shadow-panel ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur transition duration-300 hover:border-accent/40 sm:py-2.5"
                              >
                                <SkillIcon skill={skill} className="h-4 w-4 shrink-0 text-accent" />
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </Card>
                      </motion.div>
                    </AboutScrollChapter>
                  ))}
                </div>
              </div>
            </MotionSection>
          ) : (
            <FadeIn>
              <SectionLabel>Skills</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                By focus
              </h2>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {skillGroups.map((group) => (
                  <Card key={group.title} className="border-hairline">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                      {group.title}
                    </p>
                    <p className="mt-1 text-sm text-muted">{group.subtitle}</p>
                    <ul className="mt-5 space-y-2.5">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center gap-3 rounded-xl border border-hairline bg-elevated/60 px-3 py-2.5 text-sm font-semibold text-ink shadow-panel ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur transition hover:border-accent/35"
                        >
                          <SkillIcon skill={skill} className="h-4 w-4 shrink-0 text-accent" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </FadeIn>
          )}
        </Container>
      </Section>

      {lab ? <LabFlowBridge wash="strong" /> : null}

      <Section>
        <Container>
          {lab ? (
            <MotionSection>
              <SectionLabel>Tools</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Stack
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                Each band is a chapter — rail follows scroll so the page reads like a guided toolchain tour.
              </p>
              {lab && !reduceMotion ? (
                <div className="lg:hidden -mx-4 mb-10 rounded-2xl border border-hairline/80 bg-surface/65 px-4 py-4 shadow-panel backdrop-blur-md dark:bg-surface/45 sm:-mx-6 sm:px-6">
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.32em] text-muted">
                    Tools · chapter
                  </p>
                  <p className="mt-2 font-display text-base font-semibold tracking-tight text-ink">
                    {profileToolGroups[activeToolIdx]?.title}
                  </p>
                  <div className="mt-4 flex gap-2" role="tablist" aria-label="Tool groups">
                    {profileToolGroups.map((g, i) => (
                      <button
                        key={g.title}
                        type="button"
                        role="tab"
                        aria-selected={i === activeToolIdx}
                        className={cn(
                          "h-1 min-w-0 flex-1 rounded-full transition-colors",
                          i === activeToolIdx ? "bg-accent" : "bg-border hover:bg-muted",
                        )}
                        onClick={() =>
                          document.getElementById(`about-tool-${i}`)?.scrollIntoView({
                            behavior: reduceMotion ? "auto" : "smooth",
                            block: "start",
                          })
                        }
                      />
                    ))}
                  </div>
                </div>
              ) : lab ? (
                <div className="lg:hidden -mx-4 mb-10 rounded-2xl border border-hairline/80 bg-surface/65 px-4 py-4 shadow-panel backdrop-blur-md dark:bg-surface/45 sm:-mx-6 sm:px-6">
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.32em] text-muted">
                    Tools · chapter
                  </p>
                  <p className="mt-2 font-display text-base font-semibold tracking-tight text-ink">
                    {profileToolGroups[activeToolIdx]?.title}
                  </p>
                  <div className="mt-4 flex gap-2" role="tablist" aria-label="Tool groups">
                    {profileToolGroups.map((g, i) => (
                      <button
                        key={g.title}
                        type="button"
                        role="tab"
                        aria-selected={i === activeToolIdx}
                        className={cn(
                          "h-1 min-w-0 flex-1 rounded-full transition-colors",
                          i === activeToolIdx ? "bg-accent" : "bg-border hover:bg-muted",
                        )}
                        onClick={() =>
                          document.getElementById(`about-tool-${i}`)?.scrollIntoView({
                            behavior: "auto",
                            block: "start",
                          })
                        }
                      />
                    ))}
                  </div>
                </div>
              ) : null}
              <div className="mt-10 sm:mt-12 lg:grid lg:grid-cols-[minmax(11rem,14rem)_1fr] lg:items-start lg:gap-12 xl:gap-16">
                <aside className="hidden lg:sticky lg:top-[calc(4.25rem+0.85rem+env(safe-area-inset-top,0px))] lg:mb-0 lg:flex lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0">
                  {profileToolGroups.map((g, i) => (
                    <button
                      key={g.title}
                      type="button"
                      className={cn(
                        "min-w-[10.5rem] shrink-0 rounded-xl px-3 py-2.5 text-left transition-colors duration-200 lg:min-w-0",
                        i === activeToolIdx
                          ? "bg-accent/[0.14] text-accent ring-1 ring-accent/30"
                          : "text-muted hover:bg-elevated/80 hover:text-ink",
                      )}
                      onClick={() =>
                        document
                          .getElementById(`about-tool-${i}`)
                          ?.scrollIntoView({
                            behavior: reduceMotion ? "auto" : "smooth",
                            block: "start",
                          })
                      }
                    >
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-1 font-display text-sm font-semibold tracking-tight sm:text-base">
                        {g.title}
                      </p>
                    </button>
                  ))}
                </aside>
                <div className="space-y-12 lg:space-y-16">
                  {profileToolGroups.map((group, i) => (
                    <AboutScrollChapter
                      key={group.title}
                      id={`about-tool-${i}`}
                      index={i}
                      onActive={setActiveToolIdx}
                    >
                      <motion.div
                        initial={{ opacity: 0.92, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.18 }}
                        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
                          {group.title}
                        </p>
                        <p className="mt-1 text-sm text-muted">{group.subtitle}</p>
                        <StaggerGroup
                          className="mt-5 grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 md:[grid-auto-rows:1fr] lg:gap-4"
                          margin="-10% 0px -14% 0px"
                        >
                          {group.tools.map((tool) => (
                            <StaggerItem key={tool} className="min-h-0">
                              <div className="group flex h-full min-h-[5.5rem] flex-col items-center justify-center gap-2 rounded-2xl border border-hairline bg-gradient-to-b from-elevated/98 to-surface/45 px-2 py-4 text-center shadow-lift ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur-md transition duration-300 hover:border-accent/45 sm:min-h-[5.75rem] sm:gap-2.5 dark:from-elevated/90 dark:to-canvas/35">
                                <ToolIcon
                                  tool={tool}
                                  className="h-7 w-7 text-accent transition duration-300 group-hover:scale-[1.03] sm:h-8 sm:w-8"
                                />
                                <span className="text-xs font-semibold leading-tight tracking-tight text-ink sm:text-sm">
                                  {tool}
                                </span>
                              </div>
                            </StaggerItem>
                          ))}
                        </StaggerGroup>
                      </motion.div>
                    </AboutScrollChapter>
                  ))}
                </div>
              </div>
            </MotionSection>
          ) : (
            <FadeIn>
              <SectionLabel>Tools</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Stack
              </h2>
              <div className="mt-10 grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4">
                {profileToolGroups.flatMap((g) => g.tools).map((tool) => (
                  <Card
                    key={tool}
                    className="flex min-h-[5.75rem] flex-col items-center justify-center gap-2 border-hairline p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-lift"
                  >
                    <ToolIcon tool={tool} className="h-7 w-7 text-accent" />
                    <span className="text-xs font-semibold leading-tight text-ink sm:text-sm">
                      {tool}
                    </span>
                  </Card>
                ))}
              </div>
            </FadeIn>
          )}
        </Container>
      </Section>

      <Section className="border-b border-black/[0.06] bg-white">
        <Container>
          <FadeIn>
            <SectionLabel>Approach</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {aboutProcess.title}
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
              {aboutProcess.steps.map((step) => (
                <Card key={step.title} className="border-hairline">
                  <p className="font-display text-lg font-semibold text-ink">
                    {step.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                    {step.body}
                  </p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {lab ? <LabFlowBridge /> : null}

      <Section className="border-b border-black/[0.06] bg-[#fafafa] pb-20">
        <Container>
          <FadeIn>
            <motion.div
              initial={lab && !reduceMotion ? { opacity: 0.9, y: 20 } : undefined}
              whileInView={lab && !reduceMotion ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card
                interactive={lab}
                className="overflow-hidden border border-black/[0.08] bg-white shadow-sm"
              >
                <h2 className="max-w-3xl text-balance font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  Explore the demo case study or reach out directly.
                </h2>
                <div className="mt-10 flex flex-wrap gap-3">
                  {lab ? (
                    <>
                      <Magnetic strength={0.48}>
                        <ButtonLink href="/case-study" variant="primary" icon={<Gamepad2 />}>
                          View featured project
                        </ButtonLink>
                      </Magnetic>
                      <Magnetic strength={0.38}>
                        <ButtonLink href="/contact" variant="secondary" icon={<ArrowUpRight />} iconPosition="end">
                          Contact
                        </ButtonLink>
                      </Magnetic>
                      <Magnetic strength={0.36}>
                        <ButtonLink
                          href={contactChannels.github.href}
                          variant="secondary"
                          icon={<SiGithub />}
                          external
                        >
                          GitHub
                        </ButtonLink>
                      </Magnetic>
                    </>
                  ) : (
                    <>
                      <ButtonLink href="/case-study" variant="primary" icon={<Gamepad2 />}>
                        View featured project
                      </ButtonLink>
                      <ButtonLink href="/contact" variant="secondary" icon={<ArrowUpRight />} iconPosition="end">
                        Contact
                      </ButtonLink>
                      <ButtonLink href={contactChannels.github.href} variant="secondary" icon={<SiGithub />} external>
                        GitHub
                      </ButtonLink>
                    </>
                  )}
                </div>
              </Card>
            </motion.div>
          </FadeIn>
        </Container>
      </Section>
    </div>
  );
}

"use client";

import {
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Gamepad2,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/motion/FadeIn";
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
  profileTools,
} from "@/content/profile";
import { skillGroups } from "@/content/skillGroups";
import { contactChannels } from "@/content/contact";

export function AboutPage() {
  return (
    <>
      <Section className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-hero-mesh opacity-90" />
        <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-65" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)] lg:items-center lg:gap-14">
            <FadeIn>
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
            <FadeIn delay={0.06}>
              <ProfilePortrait className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none" priority />
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-hairline bg-surface/40 dark:bg-surface/25">
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
                  <Card className="h-full border-l-4 border-l-accent/55 transition duration-300 hover:-translate-y-0.5 hover:shadow-lift">
                    <p className="font-display text-xl font-semibold leading-snug tracking-tight text-ink">
                      {item}
                    </p>
                  </Card>
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </Section>

      <Section className="border-y border-hairline bg-surface/40 dark:bg-surface/25">
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

      <Section className="border-y border-hairline bg-surface/40 dark:bg-surface/25">
        <Container>
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
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn>
            <SectionLabel>Tools</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Stack
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4">
              {profileTools.map((tool) => (
                <Card
                  key={tool}
                  className="flex min-h-[5.5rem] flex-col items-center justify-center gap-2 border-hairline p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-lift"
                >
                  <ToolIcon tool={tool} className="h-7 w-7 text-accent" />
                  <span className="text-xs font-semibold leading-tight text-ink sm:text-sm">
                    {tool}
                  </span>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="border-y border-hairline bg-surface/40 dark:bg-surface/25">
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

      <Section>
        <Container>
          <FadeIn>
            <Card className="overflow-hidden border-accent/30 bg-gradient-to-br from-accent/[0.14] via-transparent to-success/[0.08]">
              <h2 className="max-w-3xl text-balance font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Explore the demo case study or reach out directly.
              </h2>
              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink href="/case-study" variant="primary" icon={<Gamepad2 />}>
                  View featured project
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary" icon={<ArrowUpRight />} iconPosition="end">
                  Contact
                </ButtonLink>
                <ButtonLink href={contactChannels.github.href} variant="secondary" icon={<SiGithub />} external>
                  GitHub
                </ButtonLink>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}

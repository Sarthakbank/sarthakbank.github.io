"use client";

import { FloatingSectionNav } from "./FloatingSectionNav";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";
import { TempSceneImage } from "@/components/media/TempSceneImage";
import { tempImagery } from "@/content/tempImagery";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import {
  caseStudyBeats,
  caseStudyChallenges,
  caseStudyDemoLabel,
  caseStudyGoal,
  caseStudyIterations,
  caseStudyLessons,
  caseStudyMechanics,
  caseStudyMeta,
  caseStudyNav,
  caseStudyOutcome,
  caseStudyPillars,
  caseStudyProcess,
  caseStudySummary,
  caseStudyTargetExperience,
  caseStudyTechniques,
} from "@/content/caseStudy";
import { homeContactCta } from "@/content/home";
import { contactChannels } from "@/content/contact";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";

function FactGrid() {
  const rows = [
    { label: "Project", value: caseStudyMeta.name },
    { label: "Type / genre", value: caseStudyMeta.genre },
    { label: "Engine / tools", value: caseStudyMeta.engine },
    { label: "Duration", value: caseStudyMeta.duration },
    { label: "Team", value: caseStudyMeta.team },
    { label: "Role", value: caseStudyMeta.role },
  ];
  return (
    <dl className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {rows.map((r, i) => (
        <div
          key={r.label}
          className="group relative overflow-hidden rounded-2xl border border-hairline bg-gradient-to-b from-elevated/95 to-surface/50 p-5 shadow-panel ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur-md dark:from-elevated/90 dark:to-canvas/30"
        >
          <span className="text-[10px] font-bold tabular-nums text-accent/80">
            {String(i + 1).padStart(2, "0")}
          </span>
          <dt className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
            {r.label}
          </dt>
          <dd className="mt-2 text-sm font-semibold leading-snug text-ink sm:text-[15px]">
            {r.value}
          </dd>
          <span className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/[0.06] blur-2xl transition group-hover:bg-accent/[0.1]" />
        </div>
      ))}
    </dl>
  );
}

export function CaseStudyView() {
  return (
    <>
      <FloatingSectionNav items={caseStudyNav} />

      <div className="pb-28 lg:pb-0">
        <Section
          id="hero"
          className="relative overflow-hidden pt-28 sm:pt-32"
        >
          <div className="pointer-events-none absolute inset-0 bg-hero-mesh opacity-90" />
          <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-70" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-canvas via-canvas/40 to-transparent dark:from-black dark:via-black/50" />

          <Container className="relative">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-warn/45 bg-warn/[0.12] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-warn shadow-panel backdrop-blur-md">
                {caseStudyDemoLabel}
              </div>

              <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-12">
                <div>
                  <h1 className="max-w-3xl text-balance font-display text-display-lg font-semibold lg:text-display-xl">
                    {caseStudyMeta.name}
                  </h1>
                  <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
                    {caseStudySummary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-muted">
                    <span className="rounded-full border border-hairline bg-elevated/80 px-3 py-1.5 backdrop-blur">
                      {caseStudyMeta.genre}
                    </span>
                    <span className="rounded-full border border-hairline bg-elevated/80 px-3 py-1.5 backdrop-blur">
                      {caseStudyMeta.duration}
                    </span>
                    <span className="rounded-full border border-hairline bg-elevated/80 px-3 py-1.5 backdrop-blur">
                      {caseStudyMeta.team}
                    </span>
                  </div>
                </div>
                <TempSceneImage
                  src={tempImagery.featuredCaseHero}
                  alt="Temporary atmospheric environment for case-study hero"
                  className="aspect-[16/10] w-full lg:aspect-[5/3]"
                  sizes="(min-width: 1024px) 520px, 100vw"
                  priority
                  caption="Temporary hero — replace with Black Tidemark shot"
                />
              </div>

              <div className="mt-10 sm:mt-12">
                <MediaPlaceholder
                  title="Case study — annotated hero / keyframe strip"
                  ratio="wide"
                  tone="accent"
                  spec="Optional second layer · storyboard or callout sheet"
                />
              </div>
            </FadeIn>
          </Container>
        </Section>

        <Section id="facts" className="relative border-y border-hairline bg-surface/35 py-14 dark:bg-surface/25">
          <div className="pointer-events-none absolute inset-0 bg-section-fade opacity-60" />
          <Container className="relative">
            <FadeIn>
              <SectionLabel>Project facts</SectionLabel>
              <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Metadata
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                Grounding details for scope, tools, and responsibilities on this
                vertical slice — the same metadata recruiters scan first.
              </p>
              <div className="mt-10">
                <FactGrid />
              </div>
            </FadeIn>
          </Container>
        </Section>

        <Section id="goal" className="py-14 sm:py-16">
          <Container>
            <FadeIn>
              <SectionLabel>Design intent</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Goal
              </h2>
              <Card className="mt-8 max-w-3xl border-accent/25 bg-gradient-to-br from-accent/[0.08] via-transparent to-transparent">
                <p className="text-pretty text-lg leading-relaxed text-ink sm:text-xl sm:leading-relaxed">
                  {caseStudyGoal}
                </p>
              </Card>
            </FadeIn>
          </Container>
        </Section>

        <Section
          id="overview"
          className="border-y border-hairline bg-surface/30 py-14 dark:bg-surface/20"
        >
          <Container>
            <FadeIn>
              <SectionLabel>Player read</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Project overview
              </h2>
              <Card className="mt-8 max-w-3xl">
                <p className="text-pretty text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
                  {caseStudyTargetExperience}
                </p>
              </Card>
              <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
                <MediaPlaceholder
                  title="Level flow — map / diagram"
                  ratio="video"
                  tone="neutral"
                  spec="16:9 · topology or flow"
                />
                <MediaPlaceholder
                  title="Annotated top-down"
                  ratio="video"
                  spec="16:9 · callouts & routes"
                />
              </div>
            </FadeIn>
          </Container>
        </Section>

        <Section id="pillars" className="py-14 sm:py-16">
          <Container>
            <FadeIn>
              <SectionLabel>Design pillars</SectionLabel>
              <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                What the level promises
              </h2>
              <ol className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
                {caseStudyPillars.map((pillar, i) => (
                  <li key={pillar}>
                    <Card className="h-full overflow-hidden border-border/80 pt-2">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/25 to-accent/5 text-sm font-bold text-accent ring-1 ring-inset ring-accent/25">
                          {i + 1}
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                            Pillar
                          </p>
                          <p className="mt-2 font-display text-xl font-semibold leading-snug tracking-tight text-ink">
                            {pillar}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </li>
                ))}
              </ol>
            </FadeIn>
          </Container>
        </Section>

        <div className="border-y border-hairline bg-surface/35 py-14 dark:bg-surface/25">
          <Container>
            <FadeIn>
              <SectionLabel>Mechanics</SectionLabel>
              <h2 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
                Core interactions
              </h2>
              <ul className="mt-6 flex flex-wrap gap-2">
                {caseStudyMechanics.map((m) => (
                  <li
                    key={m}
                    className="rounded-full border border-hairline bg-elevated/90 px-4 py-2 text-sm font-semibold text-ink shadow-panel ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </Container>
        </div>

        <Section id="walkthrough">
          <Container>
            <FadeIn>
              <SectionLabel>Gameplay walkthrough</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Beats
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-muted">
                Each beat pairs intent with a future capture — structure is ready
                for shot-for-shot replacement.
              </p>
              <div className="mt-10 space-y-8">
                {caseStudyBeats.map((beat, idx) => (
                  <Card
                    key={beat}
                    className="overflow-hidden border-hairline p-0 sm:p-0"
                  >
                    <div className="flex flex-col lg:flex-row">
                      <div className="relative border-b border-hairline bg-surface/40 px-6 py-6 sm:px-8 lg:w-[34%] lg:border-b-0 lg:border-r lg:py-8">
                        <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
                          Beat {idx + 1}
                        </span>
                        <p className="mt-4 font-display text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl">
                          {beat}
                        </p>
                      </div>
                      <div className="flex-1 p-4 sm:p-6 lg:p-8">
                        <MediaPlaceholder
                          title={`Beat ${idx + 1} — gameplay still`}
                          ratio="video"
                          tone="accent"
                          spec="16:9 · in-engine capture"
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="mt-10">
                <MediaPlaceholder
                  title="Gameplay clip — vertical slice"
                  ratio="video"
                  tone="warn"
                  spec="16:9 · 30–90s clip"
                />
              </div>
            </FadeIn>
          </Container>
        </Section>

        <Section
          id="techniques"
          className="border-y border-hairline bg-surface/35 py-14 dark:bg-surface/25"
        >
          <Container>
            <FadeIn>
              <SectionLabel>Technique highlights</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Craft focus
              </h2>
              <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
                {caseStudyTechniques.map((t, i) => (
                  <Card
                    key={t.title}
                    className="border-hairline transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-lift"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 font-display text-xl font-semibold leading-snug text-ink">
                      {t.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                      {t.body}
                    </p>
                  </Card>
                ))}
              </div>
            </FadeIn>
          </Container>
        </Section>

        <Section id="process">
          <Container>
            <FadeIn>
              <SectionLabel>Process breakdown</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                How the slice was built
              </h2>
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {caseStudyProcess.map((step, i) => (
                  <Card key={step.title} className="border-hairline">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                      Phase {i + 1}
                    </p>
                    <p className="mt-3 font-display text-xl font-semibold text-ink">
                      {step.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                      {step.body}
                    </p>
                  </Card>
                ))}
              </div>
              <div className="mt-12 space-y-6">
                <MediaPlaceholder
                  title="Process diagram — milestones"
                  ratio="wide"
                  tone="neutral"
                  spec="21:9 · Figma / Miro export"
                />
                <MediaPlaceholder
                  title="Greybox → set-dress progression"
                  ratio="video"
                  spec="16:9 · blockout vs near-final"
                />
              </div>
            </FadeIn>
          </Container>
        </Section>

        <Section
          id="iterations"
          className="border-y border-hairline bg-surface/35 py-14 dark:bg-surface/25"
        >
          <Container>
            <FadeIn>
              <SectionLabel>Iterations</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Evidence of iteration
              </h2>
              <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
                {caseStudyIterations.map((it) => (
                  <Card
                    key={it.title}
                    className="border-warn/30 bg-gradient-to-br from-warn/[0.08] via-transparent to-transparent"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-warn">
                      Iteration note
                    </p>
                    <p className="mt-3 font-display text-xl font-semibold text-ink">
                      {it.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                      {it.body}
                    </p>
                  </Card>
                ))}
              </div>
              <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6">
                <div className="space-y-2">
                  <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-warn">
                    Before
                  </p>
                  <MediaPlaceholder
                    title="Courtyard scale — earlier pass"
                    ratio="video"
                    tone="warn"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-success">
                    After
                  </p>
                  <MediaPlaceholder
                    title="Courtyard scale — tightened pass"
                    ratio="video"
                    tone="success"
                  />
                </div>
              </div>
            </FadeIn>
          </Container>
        </Section>

        <Section id="challenges">
          <Container>
            <FadeIn>
              <SectionLabel>Challenges & solutions</SectionLabel>
              <h2 className="mt-4 max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Problems encountered and responses
              </h2>
              <div className="mt-10 grid gap-5 lg:grid-cols-2">
                <div className="space-y-4">
                  {caseStudyChallenges.map((c) => (
                    <Card
                      key={c.title}
                      className="border-warn/35 bg-gradient-to-br from-warn/[0.09] via-transparent to-transparent"
                    >
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-warn">
                        Challenge
                      </p>
                      <p className="mt-3 font-display text-xl font-semibold text-ink">
                        {c.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[15px]">
                        {c.body}
                      </p>
                    </Card>
                  ))}
                </div>
                <Card className="flex flex-col justify-between border-success/35 bg-gradient-to-br from-success/[0.1] via-transparent to-accent/[0.06] lg:min-h-full">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-success">
                      Design response
                    </p>
                    <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
                      Addressed through courtyard compression, landmark
                      emphasis, and clearer framing for alternate routes —
                      aligned with the iteration notes above and playtest
                      feedback described in the concept brief.
                    </p>
                  </div>
                  <div className="mt-8 border-t border-hairline pt-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Outcome tie-in
                    </p>
                    <p className="mt-2 text-sm text-ink">
                      Stronger beacon read · faster mid-level cadence · clearer
                      optional routes.
                    </p>
                  </div>
                </Card>
              </div>
              <div className="mt-10">
                <MediaPlaceholder
                  title="Playtest notes / annotation overlay"
                  ratio="wide"
                  tone="warn"
                  spec="21:9 · heat sketch or markup"
                />
              </div>
            </FadeIn>
          </Container>
        </Section>

        <Section
          id="outcome"
          className="relative overflow-hidden border-y border-hairline bg-surface/40 py-16 dark:bg-surface/30"
        >
          <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-success/10 blur-3xl" />
          <Container className="relative">
            <FadeIn>
              <SectionLabel>Final outcome</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Ship-ready slice
              </h2>
              <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-stretch">
                <Card className="border-success/35 bg-gradient-to-br from-success/[0.12] via-transparent to-transparent">
                  <p className="text-pretty text-xl font-medium leading-relaxed text-ink sm:text-2xl sm:leading-relaxed">
                    {caseStudyOutcome}
                  </p>
                </Card>
                <MediaPlaceholder
                  title="Final beauty shot — vertical slice"
                  ratio="cinematic"
                  tone="success"
                  spec="2.35:1 · graded hero"
                />
              </div>
            </FadeIn>
          </Container>
        </Section>

        <Section id="lessons">
          <Container>
            <FadeIn>
              <SectionLabel>Lessons learned</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Takeaways
              </h2>
              <Card className="mt-8 max-w-3xl">
                <p className="text-pretty text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
                  {caseStudyLessons}
                </p>
              </Card>
            </FadeIn>
          </Container>
        </Section>

        <Section id="contact" className="pb-24 lg:pb-20">
          <Container>
            <FadeIn>
              <Card className="overflow-hidden border-accent/30 bg-gradient-to-br from-accent/[0.12] via-elevated/40 to-success/[0.1] dark:via-elevated/20">
                <SectionLabel>Next step</SectionLabel>
                <h2 className="mt-4 max-w-3xl text-balance font-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[2rem] lg:leading-snug">
                  {homeContactCta.body}
                </h2>
                <div className="mt-10 flex flex-wrap gap-3">
                  <ButtonLink href={homeContactCta.href} variant="primary" icon={<Mail />}>
                    {homeContactCta.label}
                  </ButtonLink>
                  <ButtonLink
                    href={contactChannels.github.href}
                    variant="secondary"
                    icon={<SiGithub />}
                    external
                  >
                    GitHub
                  </ButtonLink>
                  <ButtonLink href="/" variant="secondary">
                    Back home
                  </ButtonLink>
                </div>
              </Card>
            </FadeIn>
          </Container>
        </Section>
      </div>
    </>
  );
}

"use client";

import {
  ArrowUpRight,
  Gamepad2,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/motion/FadeIn";
import { ParallaxFloat } from "@/components/motion/ParallaxFloat";
import { TiltCard } from "@/components/motion/TiltCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionDivider } from "@/components/layout/SectionDivider";
import { ProfilePortrait } from "@/components/media/ProfilePortrait";
import { TempSceneImage } from "@/components/media/TempSceneImage";
import { ToolIcon } from "@/components/icons/ToolIcon";
import {
  homeAboutPreview,
  homeContactCta,
  homeCtas,
  homeFeaturedPreview,
  homeHero,
  homeHighlights,
} from "@/content/home";
import { homeHeroChips } from "@/content/homeHeroChips";
import { profileSkills, profileTools } from "@/content/profile";
import { contactChannels } from "@/content/contact";
import { tempImagery } from "@/content/tempImagery";
export function HomePage() {
  return (
    <>
      <Section className="relative overflow-hidden pt-28 sm:pt-32 lg:min-h-[min(92vh,880px)]">
        <div className="pointer-events-none absolute inset-0 bg-hero-mesh" />
        <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-85" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-canvas to-transparent dark:from-black" />

        <Container className="relative pb-16 pt-4 sm:pb-20 lg:pt-8">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-16">
            <FadeIn>
              <div className="flex flex-wrap gap-2">
                {homeHeroChips.map((chip, i) => (
                  <TiltCard key={chip.text} maxTilt={4} className="inline-block">
                    <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-elevated/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted shadow-panel ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur-md">
                      {i === 0 ? (
                        <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                      ) : (
                        <Sparkles className="h-3.5 w-3.5 shrink-0 text-accent/80" aria-hidden />
                      )}
                      {chip.text}
                    </span>
                  </TiltCard>
                ))}
              </div>

              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                Level design portfolio
              </p>

              <h1 className="mt-3 max-w-3xl text-balance font-display text-display-lg font-semibold lg:text-display-xl">
                {homeHero.name}
              </h1>
              <p className="mt-4 text-xl font-medium tracking-tight text-ink/90 sm:text-2xl">
                {homeHero.role}
              </p>
              <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
                {homeHero.tagline}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink
                  href={homeCtas.primary.href}
                  variant="primary"
                  icon={<Gamepad2 />}
                >
                  {homeCtas.primary.label}
                </ButtonLink>
                <ButtonLink
                  href={homeCtas.secondary.href}
                  variant="secondary"
                  icon={<ArrowUpRight />}
                  iconPosition="end"
                >
                  {homeCtas.secondary.label}
                </ButtonLink>
                <ButtonLink href="/contact" variant="ghost" icon={<Mail />}>
                  Contact
                </ButtonLink>
                <ButtonLink
                  href={contactChannels.github.href}
                  variant="ghost"
                  icon={<SiGithub />}
                  external
                >
                  GitHub
                </ButtonLink>
              </div>

              <div className="mt-10 border-t border-hairline pt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                  Focus areas
                </p>
                <div className="mt-4 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
                  {homeHighlights.map((h) => (
                    <TiltCard key={h} maxTilt={5} className="snap-start">
                      <span className="inline-block rounded-xl border border-hairline bg-surface/60 px-4 py-2.5 text-[13px] font-semibold leading-snug text-ink shadow-panel ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur-md transition hover:border-accent/30 dark:bg-surface/40">
                        {h}
                      </span>
                    </TiltCard>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
                <ParallaxFloat yRange={22}>
                  <TempSceneImage
                    src={tempImagery.homeHeroAmbient}
                    alt="Atmospheric environment reference (temporary)"
                    className="aspect-[16/11] min-h-[220px] w-full sm:min-h-[260px]"
                    sizes="(min-width: 1024px) 480px, 100vw"
                    priority
                    caption="Demo ambient — replace in public/media/demo/home/"
                  />
                </ParallaxFloat>
                <div className="relative z-10 -mt-[28%] flex justify-center px-4 sm:-mt-[26%] lg:px-6">
                  <ProfilePortrait className="w-[min(100%,320px)] shadow-lift sm:w-[min(100%,360px)]" priority />
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <div className="border-y border-hairline bg-section-fade">
        <Section className="py-14 sm:py-16">
          <Container>
            <FadeIn>
              <SectionLabel>About preview</SectionLabel>
              <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <h2 className="max-w-xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
                    Spatial clarity under pressure
                  </h2>
                  <Card interactive className="mt-8 border-hairline">
                    <div className="space-y-5 text-pretty text-base leading-relaxed text-muted sm:text-lg">
                      {homeAboutPreview.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                    <div className="mt-8 border-t border-hairline pt-8">
                      <ButtonLink href="/about" variant="secondary" icon={<ArrowUpRight />} iconPosition="end">
                        Read full about
                      </ButtonLink>
                    </div>
                  </Card>
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-accent/5 blur-3xl dark:bg-accent/10" />
                  <TiltCard maxTilt={6} className="relative">
                    <Card className="overflow-hidden border-hairline p-2 sm:p-3">
                      <ProfilePortrait embedded />
                    </Card>
                  </TiltCard>
                </div>
              </div>
            </FadeIn>
          </Container>
        </Section>
      </div>

      <Container>
        <SectionDivider label="Featured" />
      </Container>

      <Section className="relative border-y border-hairline bg-surface/40 pb-16 pt-4 dark:bg-surface/25">
        <div className="pointer-events-none absolute inset-0 bg-section-fade opacity-80" />
        <Container className="relative">
          <FadeIn>
            <SectionLabel>Featured project</SectionLabel>
            <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {homeFeaturedPreview.title}
              </h2>
              <p className="max-w-xl text-sm font-semibold uppercase tracking-[0.14em] leading-relaxed text-warn">
                {homeFeaturedPreview.eyebrow}
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
              <Card interactive className="flex flex-col border-accent/25 lg:justify-between">
                <div>
                  <p className="text-lg leading-relaxed text-muted">
                    {homeFeaturedPreview.description}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-muted/90">
                    {homeFeaturedPreview.meta}
                  </p>
                </div>
                <div className="mt-8 border-t border-hairline pt-8">
                  <ButtonLink
                    href={homeFeaturedPreview.href}
                    variant="primary"
                    icon={<Gamepad2 />}
                  >
                    Open case study
                  </ButtonLink>
                </div>
              </Card>
              <ParallaxFloat yRange={14} className="min-h-0">
                <TempSceneImage
                  src={tempImagery.featuredCaseHero}
                  alt="Architectural environment reference for featured project (temporary)"
                  className="aspect-[16/10] w-full lg:aspect-[5/3]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  caption="Demo key art — replace in public/media/demo/case-study/"
                />
              </ParallaxFloat>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="py-14 sm:py-16">
        <Container>
          <FadeIn>
            <SectionLabel>Skills</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              How I think in space
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              Demo presentation layer — copy stays aligned with your real profile; swap emphasis anytime in{" "}
              <code className="rounded-md bg-surface px-1.5 py-0.5 text-xs text-ink">content/profile.ts</code>.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
              {profileSkills.map((skill) => (
                <TiltCard key={skill} maxTilt={5}>
                  <Card interactive className="h-full border-hairline py-5 sm:p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Focus</p>
                    <p className="mt-2 font-display text-lg font-semibold tracking-tight text-ink">{skill}</p>
                  </Card>
                </TiltCard>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="border-t border-hairline bg-surface/30 dark:bg-surface/20">
        <Container>
          <FadeIn>
            <SectionLabel>Tool stack</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Tools I work with
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              Icons reflect the approved tool list — update assets or labels in content when your toolchain changes.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4">
              {profileTools.map((tool) => (
                <TiltCard key={tool} maxTilt={6}>
                  <div className="group flex min-h-[5.25rem] flex-col items-center justify-center gap-2 rounded-2xl border border-hairline bg-gradient-to-b from-elevated/98 to-surface/45 px-2 py-4 text-center shadow-lift ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-accent/40 dark:from-elevated/90 dark:to-canvas/35">
                    <ToolIcon
                      tool={tool}
                      className="h-7 w-7 text-accent transition group-hover:scale-105"
                    />
                    <span className="text-xs font-semibold leading-tight tracking-tight text-ink sm:text-sm">
                      {tool}
                    </span>
                  </div>
                </TiltCard>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="border-t border-hairline bg-surface/35 pb-6 dark:bg-surface/20">
        <Container>
          <FadeIn>
            <Card interactive className="overflow-hidden border-accent/30 bg-gradient-to-br from-accent/[0.14] via-elevated/50 to-success/[0.1] dark:via-elevated/20">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
                    Let&apos;s talk
                  </p>
                  <h2 className="mt-3 text-balance font-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[2rem] lg:leading-snug">
                    {homeContactCta.body}
                  </h2>
                </div>
                <div className="flex flex-shrink-0 flex-wrap gap-3">
                  <ButtonLink href={homeContactCta.href} variant="primary" icon={<Mail />}>
                    {homeContactCta.label}
                  </ButtonLink>
                  <ButtonLink
                    href="/case-study"
                    variant="secondary"
                    icon={<Gamepad2 />}
                  >
                    Featured project
                  </ButtonLink>
                  <ButtonLink
                    href={contactChannels.github.href}
                    variant="secondary"
                    icon={<SiGithub />}
                    external
                  >
                    GitHub
                  </ButtonLink>
                </div>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}

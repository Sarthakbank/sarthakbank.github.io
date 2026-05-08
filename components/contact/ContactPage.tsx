"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Gamepad2, Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/motion/FadeIn";
import { MotionSection } from "@/components/motion/MotionSection";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import {
  contactChannels,
  contactIntro,
  contactOpportunity,
} from "@/content/contact";
import { cn } from "@/lib/cn";
import { useImmersiveLab } from "@/components/experiment/ImmersiveLabProvider";
import { HeroLabLayers } from "@/components/experiment/HeroLabLayers";

function ContactChannelShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const lab = useImmersiveLab();
  const reduce = useReducedMotion();

  const shellClass = cn(
    "group relative flex h-full min-h-[290px] flex-col overflow-hidden rounded-2xl sm:min-h-[320px]",
    "border border-hairline bg-gradient-to-b from-elevated/95 via-elevated/80 to-surface/40",
    "shadow-[0_28px_80px_-40px_rgba(0,0,0,0.22)] ring-1 ring-inset ring-[var(--ring-inset)]",
    "transition-[border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
    "dark:from-elevated/85 dark:via-canvas/50 dark:to-black/40 dark:shadow-[0_36px_90px_-36px_rgba(0,0,0,0.65)]",
    lab &&
      "motion-safe:hover:border-accent/40 motion-safe:hover:shadow-[0_48px_110px_-34px_color-mix(in_srgb,var(--color-accent)_22%,transparent)] dark:motion-safe:hover:shadow-[0_56px_120px_-30px_rgba(0,0,0,0.72)]",
    "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,color-mix(in_srgb,var(--color-accent)_16%,transparent),transparent_55%)] before:opacity-70 before:transition-opacity before:duration-500 group-hover:before:opacity-100",
    className,
  );

  if (lab && !reduce) {
    return (
      <motion.div
        className={shellClass}
        whileHover={{
          y: -2,
          transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
        }}
        whileTap={{ scale: 0.995 }}
      >
        <div className="relative z-[1] flex h-full flex-col p-6 sm:p-8">{children}</div>
      </motion.div>
    );
  }

  return (
    <div
      className={cn(
        shellClass,
        lab &&
          "motion-safe:hover:-translate-y-1 motion-safe:hover:border-accent/35 motion-safe:hover:shadow-[0_44px_100px_-32px_color-mix(in_srgb,var(--color-accent)_25%,transparent)] dark:motion-safe:hover:shadow-[0_52px_110px_-28px_rgba(0,0,0,0.72)]",
      )}
    >
      <div className="relative z-[1] flex h-full flex-col p-6 sm:p-8">{children}</div>
    </div>
  );
}

export function ContactPage() {
  const lab = useImmersiveLab();
  const reduceMotion = useReducedMotion();

  const intro = (
    <div className="relative">
      <div className="pointer-events-none absolute -right-8 -top-24 h-72 w-72 rounded-full bg-accent/[0.07] blur-3xl dark:bg-accent/[0.11]" />
      <div className="pointer-events-none absolute -left-16 top-1/3 h-56 w-56 -translate-y-1/2 rounded-full bg-success/[0.05] blur-3xl dark:bg-success/[0.08]" />
      <SectionLabel>Contact</SectionLabel>
      <h1 className="relative mt-5 max-w-3xl text-balance font-display text-display-lg font-semibold tracking-tight sm:text-5xl lg:text-display-xl">
        Let&apos;s work together
      </h1>
      <p className="relative mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
        {contactIntro.subtitle}
      </p>
      <div className="relative mt-10 max-w-2xl rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/[0.08] via-transparent to-transparent px-5 py-4 backdrop-blur-sm sm:px-6 sm:py-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
          {contactOpportunity.eyebrow}
        </p>
        <p className="mt-2 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          {contactOpportunity.headline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
          {contactOpportunity.supporting}
        </p>
      </div>
      <p className="relative mt-8 max-w-2xl text-sm font-medium leading-relaxed text-muted">
        Hiring for level design or prototyping? Each card opens the channel directly — email,
        LinkedIn, or GitHub.
      </p>
    </div>
  );

  const cardEmail = (
    <ContactChannelShell>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/25 bg-accent/[0.1] text-accent shadow-[0_0_28px_-8px_color-mix(in_srgb,var(--color-accent)_45%,transparent)] transition duration-300 group-hover:translate-x-0.5 group-hover:border-accent/40">
            <Mail className="h-7 w-7" aria-hidden strokeWidth={1.65} />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
              {contactChannels.email.label}
            </p>
            <p className="mt-1 text-sm font-semibold text-ink/90">Fastest response</p>
          </div>
        </div>
        <span className="rounded-full border border-hairline bg-elevated/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted shadow-panel ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur">
          Primary
        </span>
      </div>
      <div className="mt-7 border-t border-hairline pt-7">
        <a
          href={contactChannels.email.href}
          className="break-all text-lg font-semibold leading-snug text-ink transition duration-300 group-hover:text-accent sm:text-xl"
        >
          {contactChannels.email.value}
        </a>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Best for opportunity details, timelines, and quick follow-ups.
        </p>
      </div>
      <div className="mt-auto pt-10">
        <ButtonLink href={contactChannels.email.href} variant="primary" icon={<Mail />} external>
          Email Sarthak
        </ButtonLink>
      </div>
    </ContactChannelShell>
  );

  const cardLinkedIn = (
    <ContactChannelShell>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/25 bg-accent/[0.1] text-accent shadow-[0_0_28px_-8px_color-mix(in_srgb,var(--color-accent)_45%,transparent)] transition duration-300 group-hover:-translate-y-0.5 group-hover:border-accent/40">
            <FaLinkedinIn className="h-7 w-7" aria-hidden />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
              {contactChannels.linkedIn.label}
            </p>
            <p className="mt-1 text-sm font-semibold text-ink/90">Professional profile</p>
          </div>
        </div>
        <span className="rounded-full border border-hairline bg-elevated/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted shadow-panel ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur">
          Social
        </span>
      </div>
      <div className="mt-7 border-t border-hairline pt-7">
        <p className="text-sm leading-relaxed text-muted">
          Profile, recommendations, and professional history.
        </p>
        <p className="mt-4 break-all text-sm font-semibold text-ink/90">{contactChannels.linkedIn.value}</p>
      </div>
      <div className="mt-auto pt-8">
        <ButtonLink
          href={contactChannels.linkedIn.href}
          variant="secondary"
          icon={<FaLinkedinIn />}
          external
        >
          View LinkedIn
        </ButtonLink>
      </div>
    </ContactChannelShell>
  );

  const cardGithub = (
    <ContactChannelShell>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/25 bg-accent/[0.1] text-accent shadow-[0_0_28px_-8px_color-mix(in_srgb,var(--color-accent)_45%,transparent)] transition duration-300 group-hover:translate-x-0.5 group-hover:border-accent/40">
            <SiGithub className="h-7 w-7" aria-hidden />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
              {contactChannels.github.label}
            </p>
            <p className="mt-1 text-sm font-semibold text-ink/90">Code & experiments</p>
          </div>
        </div>
        <span className="rounded-full border border-hairline bg-elevated/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted shadow-panel ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur">
          Work
        </span>
      </div>
      <div className="mt-7 border-t border-hairline pt-7">
        <p className="text-sm leading-relaxed text-muted">
          Code, experiments, and work-in-progress you can browse directly.
        </p>
        <a
          href={contactChannels.github.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block break-all text-lg font-semibold text-ink transition duration-300 group-hover:text-accent sm:text-xl"
        >
          {contactChannels.github.value}
        </a>
      </div>
      <div className="mt-auto pt-8">
        <ButtonLink href={contactChannels.github.href} variant="secondary" icon={<SiGithub />} external>
          Open GitHub
        </ButtonLink>
      </div>
    </ContactChannelShell>
  );

  const cardsGrid = lab ? (
    <StaggerGroup className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3 md:gap-5 lg:gap-6">
      <StaggerItem className="min-h-0">{cardEmail}</StaggerItem>
      <StaggerItem className="min-h-0">{cardLinkedIn}</StaggerItem>
      <StaggerItem className="min-h-0">{cardGithub}</StaggerItem>
    </StaggerGroup>
  ) : (
    <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3 md:gap-5 lg:gap-6">
      {cardEmail}
      {cardLinkedIn}
      {cardGithub}
    </div>
  );

  const continueRowInner = (
    <Card
      interactive
      className={cn(
        "relative overflow-hidden border-accent/25 bg-gradient-to-br from-accent/[0.12] via-elevated/50 to-success/[0.1] p-6 sm:p-10",
        "shadow-[0_32px_90px_-40px_rgba(0,0,0,0.28)] dark:via-elevated/25 dark:to-canvas/40 dark:shadow-[0_40px_100px_-36px_rgba(0,0,0,0.55)]",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(115deg,transparent_40%,color-mix(in_srgb,var(--color-accent)_10%,transparent)_50%,transparent_60%)] before:opacity-60 before:transition-opacity before:duration-700 hover:before:opacity-100",
        lab &&
          "ring-1 ring-inset ring-accent/15 after:pointer-events-none after:absolute after:inset-x-8 after:bottom-6 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/25 after:to-transparent dark:after:via-white/12",
      )}
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
        Next step
      </p>
      <h2 className="mt-4 max-w-2xl font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl lg:text-[1.75rem] lg:leading-snug">
        Want the fastest overview? Start with the featured case study — then reach out directly.
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">
        Built to be recruiter-readable: one flagship breakdown, clear metadata, and guided beats.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/case-study" variant="primary" icon={<Gamepad2 />}>
          View featured project
        </ButtonLink>
        <ButtonLink href={contactChannels.email.href} variant="secondary" icon={<Mail />} external>
          Email directly
        </ButtonLink>
        <ButtonLink href="/" variant="ghost" icon={<ArrowUpRight />} iconPosition="end">
          Back home
        </ButtonLink>
      </div>
    </Card>
  );

  const continueRow = <div className="mt-12">{continueRowInner}</div>;

  return (
    <Section className="relative overflow-hidden pt-28 sm:pt-32">
      <HeroLabLayers />
      <div className="pointer-events-none absolute inset-0 bg-hero-mesh opacity-85" />
      <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-canvas via-canvas/70 to-transparent dark:from-black dark:via-black/70" />

      <Container className="relative max-w-6xl pb-[max(5rem,calc(4.25rem+env(safe-area-inset-bottom)))] sm:pb-24">
        {lab ? (
          <>
            <MotionSection reveal="bold">
              <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-12">
                <div className="min-w-0">{intro}</div>
                <div className="relative min-w-0">
                  <div className="pointer-events-none absolute -inset-6 rounded-[2.25rem] bg-accent/[0.045] blur-3xl dark:bg-accent/[0.07]" />
                  <motion.div
                    className="relative rounded-[2.25rem] border border-white/[0.06] bg-gradient-to-b from-elevated/90 via-elevated/65 to-surface/35 p-6 shadow-[0_44px_120px_-60px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-white/[0.04] backdrop-blur-2xl dark:from-elevated/80 dark:via-canvas/55 dark:to-black/35 dark:shadow-[0_55px_140px_-58px_rgba(0,0,0,0.72)] sm:p-8"
                    initial={reduceMotion ? undefined : { opacity: 0.96, y: 8 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted">
                      Quick actions
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <ButtonLink
                        href={contactChannels.email.href}
                        variant="primary"
                        icon={<Mail />}
                        external
                      >
                        Email
                      </ButtonLink>
                      <ButtonLink
                        href={contactChannels.linkedIn.href}
                        variant="secondary"
                        icon={<FaLinkedinIn />}
                        external
                      >
                        LinkedIn
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
                    <p className="mt-6 text-sm leading-relaxed text-muted">
                      Fastest response: email. If you’re reviewing the work, the case study below is the best single scroll.
                    </p>
                  </motion.div>
                </div>
              </div>
            </MotionSection>
            {cardsGrid}
            <MotionSection>{continueRow}</MotionSection>
          </>
        ) : (
          <FadeIn>
            {intro}
            {cardsGrid}
            {continueRow}
          </FadeIn>
        )}
      </Container>
    </Section>
  );
}

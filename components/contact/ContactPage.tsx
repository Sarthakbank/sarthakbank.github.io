"use client";

import { ArrowUpRight, Gamepad2, Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { contactChannels, contactIntro } from "@/content/contact";
import { cn } from "@/lib/cn";

const cardChrome =
  "group flex h-full flex-col border-hairline p-6 transition duration-300 sm:p-8 " +
  "hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lift";

const iconWrap =
  "flex h-12 w-12 items-center justify-center rounded-2xl border border-hairline bg-accent/10 text-accent transition duration-300 group-hover:border-accent/35 group-hover:bg-accent/[0.14]";

export function ContactPage() {
  return (
    <Section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-hero-mesh opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-55" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-canvas/90 to-transparent dark:from-black/80" />

      <Container className="relative max-w-6xl pb-16">
        <FadeIn>
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-4 text-balance font-display text-display-lg font-semibold sm:text-5xl lg:text-display-xl">
            {contactIntro.title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
            {contactIntro.subtitle}
          </p>
          <p className="mt-6 max-w-2xl text-sm font-medium leading-relaxed text-muted">
            Hiring for level design or prototyping? Use the actions below — each
            button opens email, LinkedIn, or GitHub.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <FadeIn delay={0.05}>
            <Card className={cn(cardChrome)}>
              <div className={iconWrap}>
                <Mail className="h-6 w-6" aria-hidden strokeWidth={1.75} />
              </div>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                {contactChannels.email.label}
              </p>
              <a
                href={contactChannels.email.href}
                className="mt-2 break-all text-xl font-semibold text-ink transition group-hover:text-accent sm:text-2xl"
              >
                {contactChannels.email.value}
              </a>
              <div className="mt-8 mt-auto flex flex-wrap gap-2">
                <ButtonLink href={contactChannels.email.href} variant="primary" icon={<Mail />} external>
                  Email Sarthak
                </ButtonLink>
              </div>
            </Card>
          </FadeIn>
          <FadeIn delay={0.08}>
            <Card className={cn(cardChrome)}>
              <div className={iconWrap}>
                <FaLinkedinIn className="h-6 w-6" aria-hidden />
              </div>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                {contactChannels.linkedIn.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Profile, recommendations, and professional history.
              </p>
              <div className="mt-8 mt-auto flex flex-wrap gap-2">
                <ButtonLink
                  href={contactChannels.linkedIn.href}
                  variant="secondary"
                  icon={<FaLinkedinIn />}
                  external
                >
                  View LinkedIn
                </ButtonLink>
              </div>
            </Card>
          </FadeIn>
          <FadeIn delay={0.11}>
            <Card className={cn(cardChrome)}>
              <div className={iconWrap}>
                <SiGithub className="h-6 w-6" aria-hidden />
              </div>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                {contactChannels.github.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Code, experiments, and work-in-progress you can browse directly.
              </p>
              <a
                href={contactChannels.github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 break-all text-lg font-semibold text-ink transition group-hover:text-accent sm:text-xl"
              >
                {contactChannels.github.value}
              </a>
              <div className="mt-8 mt-auto flex flex-wrap gap-2">
                <ButtonLink
                  href={contactChannels.github.href}
                  variant="secondary"
                  icon={<SiGithub />}
                  external
                >
                  Open GitHub
                </ButtonLink>
              </div>
            </Card>
          </FadeIn>
        </div>

        <FadeIn delay={0.14} className="mt-10">
          <Card className="border-accent/25 bg-gradient-to-br from-accent/[0.1] via-transparent to-success/[0.08] p-6 transition duration-300 hover:border-accent/35 hover:shadow-lift sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              Continue exploring
            </p>
            <h2 className="mt-3 font-display text-xl font-semibold text-ink sm:text-2xl">
              Review the Black Tidemark demo case study
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/case-study" variant="primary" icon={<Gamepad2 />}>
                View featured project
              </ButtonLink>
              <ButtonLink href="/" variant="ghost" icon={<ArrowUpRight />} iconPosition="end">
                Back home
              </ButtonLink>
            </div>
          </Card>
        </FadeIn>
      </Container>
    </Section>
  );
}

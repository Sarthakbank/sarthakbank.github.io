"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight, Eye, Mail, Plus, RefreshCw, Users } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/layout/Container";
import {
  homeAboutPreview,
  homeCaseStudyCard,
  homeConnectSection,
  homeContactCta,
  homeCtas,
  homeDesignPrinciples,
  homeFeaturedPreview,
  homeFooter,
  homeHero,
  homeSkillGrid,
  homeThinkInSpace,
} from "@/content/home";
import { contactChannels } from "@/content/contact";
import { TempSceneImage } from "@/components/media/TempSceneImage";
import { tempImagery } from "@/content/tempImagery";
import { SkillIcon } from "@/components/icons/SkillIcon";
import { cn } from "@/lib/cn";

const HomeHero3D = dynamic(
  () =>
    import("@/components/experiment/Hero3DStage").then((m) => ({
      default: m.Hero3DStage,
    })),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex min-h-[min(240px,50vw)] w-full items-center justify-center bg-transparent sm:min-h-[280px]"
        aria-hidden
      />
    ),
  },
);

const ease = [0.22, 1, 0.36, 1] as const;

const principleIcon = {
  users: Users,
  eye: Eye,
  refresh: RefreshCw,
} as const;

function FadeUp({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px", amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

const shell =
  "bg-[#fbfbfd] text-[#1d1d1f] antialiased selection:bg-[#0071e3]/18 selection:text-[#1d1d1f] dark:bg-[#fbfbfd] dark:text-[#1d1d1f]";

export function HomePage() {
  const reduce = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <div className={cn(shell, "pb-0 overflow-x-hidden")}>
      {/* 1. Hero */}
      <section className="border-b border-black/[0.06] bg-[#fbfbfd] pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
            <FadeUp>
              <h1 className="max-w-xl font-display text-[clamp(2.25rem,4vw+1rem,3.35rem)] font-semibold leading-[1.04] tracking-tight text-[#1d1d1f]">
                {homeHero.name}
              </h1>
              <p className="mt-3 text-xl font-medium tracking-tight text-[#424245] sm:text-2xl">{homeHero.role}</p>
              <p className="mt-5 max-w-md text-pretty text-[17px] leading-relaxed text-[#6e6e73] sm:text-lg">
                {homeHero.tagline}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink
                  href={homeCtas.primary.href}
                  variant="primary"
                  className="!rounded-full !border-0 !bg-[#0071e3] !px-6 !py-3 !text-[15px] !font-semibold !text-white !shadow-[0_1px_2px_rgba(0,0,0,0.06)] hover:!brightness-110"
                >
                  {homeCtas.primary.label}
                </ButtonLink>
                <ButtonLink
                  href={homeCtas.secondary.href}
                  variant="secondary"
                  icon={<ArrowUpRight />}
                  iconPosition="end"
                  className="!rounded-full !border-black/[0.1] !bg-white !px-6 !py-3 !text-[15px] !font-semibold !text-[#1d1d1f] !shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:!border-black/[0.16]"
                >
                  {homeCtas.secondary.label}
                </ButtonLink>
                <ButtonLink
                  href={homeCtas.tertiary.href}
                  variant="secondary"
                  icon={<Mail />}
                  className="!rounded-full !border-black/[0.1] !bg-white !px-6 !py-3 !text-[15px] !font-semibold !text-[#1d1d1f] !shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                >
                  {homeCtas.tertiary.label}
                </ButtonLink>
              </div>
            </FadeUp>

            <FadeUp delay={0.06} className="relative w-full min-w-0 lg:self-center">
              <div className="relative mx-auto flex w-full max-w-[520px] justify-center lg:mx-0 lg:max-w-none lg:justify-end">
                <div className="relative aspect-[1/1] w-full max-h-[min(420px,52vh)] min-h-[min(260px,62vw)] sm:min-h-[min(300px,56vw)] sm:max-h-[min(440px,54vh)] lg:aspect-[5/4] lg:min-h-[min(340px,48vh)] lg:max-h-[min(480px,56vh)]">
                  <HomeHero3D
                    preset="editorial"
                    className="absolute inset-0 h-full w-full"
                    modelFit={1.58}
                    interactive
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* 2. Design principles */}
      <section className="border-b border-black/[0.06] bg-white py-14 sm:py-16 lg:py-20">
        <Container>
          <FadeUp className="text-center">
            <h2 className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6e6e73] sm:text-xs">
              Design Principles
            </h2>
          </FadeUp>
          <div className="mt-10 grid items-stretch gap-5 sm:grid-cols-3 sm:gap-6">
            {homeDesignPrinciples.map((p, i) => {
              const Icon = principleIcon[p.icon];
              return (
                <FadeUp key={p.title} delay={reduce ? 0 : i * 0.06}>
                  <div
                    className={cn(
                      "flex min-h-[268px] h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-[0_2px_20px_-6px_rgba(0,0,0,0.07)] sm:min-h-[280px]",
                      p.border,
                    )}
                  >
                    <div className={cn("h-[5.25rem] shrink-0 bg-gradient-to-r sm:h-[5.5rem]", p.topGradient)} />
                    <div className="flex flex-1 flex-col items-center bg-white px-5 pb-7 pt-8 text-center sm:px-6 sm:pb-8 sm:pt-9">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/[0.06] bg-[#fafafa] text-[#0071e3] shadow-sm">
                        <Icon className="h-6 w-6" strokeWidth={1.65} aria-hidden />
                      </div>
                      <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-[#1d1d1f] sm:text-xl">
                        {p.title}
                      </h3>
                      <div className="mt-8 flex justify-center">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.1] bg-white text-[#6e6e73] shadow-sm">
                          <Plus className="h-4 w-4" strokeWidth={2} aria-hidden />
                        </span>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Featured project */}
      <section className="border-b border-black/[0.06] bg-[#fbfbfd] py-14 sm:py-16 lg:py-20">
        <Container>
          <FadeUp>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6e6e73]">
              {homeFeaturedPreview.sectionLabel}
            </p>
          </FadeUp>
          <div className="mt-6 rounded-[1.25rem] border border-black/[0.06] bg-white p-6 shadow-[0_4px_32px_-14px_rgba(0,0,0,0.08)] sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
              <FadeUp>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
                  {homeFeaturedPreview.title}
                </h2>
                <p className="mt-2 text-[15px] font-semibold uppercase tracking-wide text-[#ff9500]">
                  {homeFeaturedPreview.subtitle}
                </p>
                <p className="mt-5 max-w-lg text-pretty text-[17px] leading-relaxed text-[#424245]">
                  {homeFeaturedPreview.description}
                </p>
                <dl className="mt-8 space-y-3 border-t border-black/[0.08] pt-8">
                  {homeFeaturedPreview.metaLines.map((row) => (
                    <div key={row.label} className="flex flex-wrap gap-x-2 gap-y-0.5 text-[15px]">
                      <dt className="font-semibold text-[#1d1d1f]">{row.label}:</dt>
                      <dd className="text-[#424245]">{row.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-8">
                  <ButtonLink
                    href={homeFeaturedPreview.href}
                    variant="primary"
                    icon={<ArrowUpRight />}
                    iconPosition="end"
                    className="!rounded-full !border-0 !bg-[#0071e3] !px-6 !py-2.5 !text-[14px] !font-semibold !text-white hover:!brightness-110"
                  >
                    {homeFeaturedPreview.cta}
                  </ButtonLink>
                </div>
              </FadeUp>
              <FadeUp delay={0.06}>
                <div className="overflow-hidden rounded-xl border border-black/[0.06] bg-[#f5f5f7] shadow-[0_8px_28px_-16px_rgba(0,0,0,0.08)]">
                  {/*
                    Local demo plate — replace with Escape Protocol in-engine frame (Group PDFs).
                  */}
                  <TempSceneImage
                    src={tempImagery.featuredCaseHero}
                    alt="Escape Protocol — gameplay environment reference (temporary)"
                    className="aspect-[16/10] w-full object-cover object-center lg:aspect-[5/3]"
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    caption="Gameplay reference (temporary)"
                  />
                </div>
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. About + Case study */}
      <section className="border-b border-black/[0.06] bg-white py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid items-stretch gap-5 md:grid-cols-2 md:gap-6">
            <FadeUp>
              <a
                href={homeAboutPreview.href}
                className="group flex h-full min-h-[280px] flex-col rounded-2xl border border-black/[0.08] bg-[#fafafa] p-8 shadow-[0_2px_16px_-6px_rgba(0,0,0,0.06)] transition-[border-color,box-shadow] duration-300 hover:border-black/[0.12] hover:shadow-[0_6px_24px_-10px_rgba(0,0,0,0.08)]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6e6e73]">About</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-[#1d1d1f]">{homeAboutPreview.title}</h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[#424245]">{homeAboutPreview.summary}</p>
                <span className="mt-8 inline-flex items-center gap-1 text-[15px] font-semibold text-[#0071e3]">
                  {homeAboutPreview.cta}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </FadeUp>
            <FadeUp delay={0.05}>
              <a
                href={homeCaseStudyCard.href}
                className="group flex h-full min-h-[280px] flex-col rounded-2xl border border-black/[0.08] bg-[#fafafa] p-8 shadow-[0_2px_16px_-6px_rgba(0,0,0,0.06)] transition-[border-color,box-shadow] duration-300 hover:border-black/[0.12] hover:shadow-[0_6px_24px_-10px_rgba(0,0,0,0.08)]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6e6e73]">Case Study</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-[#1d1d1f]">{homeCaseStudyCard.title}</h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[#424245]">{homeCaseStudyCard.summary}</p>
                <span className="mt-8 inline-flex items-center gap-1 text-[15px] font-semibold text-[#0071e3]">
                  {homeCaseStudyCard.cta}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* 5. How I think in space */}
      <section className="border-b border-black/[0.06] bg-[#fbfbfd] py-14 sm:py-16 lg:py-20">
        <Container>
          <FadeUp className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
              {homeThinkInSpace.title}
            </h2>
            <p className="mt-4 text-pretty text-[15px] leading-relaxed text-[#6e6e73] sm:text-[16px]">
              {homeThinkInSpace.subtitle}
            </p>
          </FadeUp>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
            {homeSkillGrid.map((row, i) => (
              <FadeUp key={row.skill} delay={reduce ? 0 : i * 0.03}>
                <div className="flex h-full flex-col rounded-xl border border-black/[0.08] bg-white px-4 py-5 text-left shadow-[0_1px_12px_-4px_rgba(0,0,0,0.05)] transition-[border-color,box-shadow] duration-300 hover:border-[#0071e3]/22 hover:shadow-[0_4px_18px_-8px_rgba(0,0,0,0.07)] sm:px-4 sm:py-5">
                  <SkillIcon skill={row.skill} className="h-5 w-5 shrink-0 text-[#0071e3]" />
                  <p className="mt-3 text-[14px] font-semibold leading-snug text-[#1d1d1f]">{row.skill}</p>
                  <p className="mt-2 text-[12px] leading-relaxed text-[#6e6e73]">{row.descriptor}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Let’s connect + footer */}
      <section className="bg-white">
        <Container className="py-10 sm:py-12">
          <FadeUp>
            <h2 className="text-center font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6e6e73] sm:text-xs">
              {homeConnectSection.title}
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink
                href={homeContactCta.href}
                variant="primary"
                icon={<Mail />}
                className="!rounded-full !border-0 !bg-[#0071e3] !px-6 !py-2.5 !text-[14px] !font-semibold !text-white hover:!brightness-110"
              >
                {homeContactCta.label}
              </ButtonLink>
              <ButtonLink
                href="/case-study"
                variant="secondary"
                icon={<ArrowUpRight />}
                iconPosition="end"
                className="!rounded-full !border-black/[0.1] !bg-[#f5f5f7] !px-6 !py-2.5 !text-[14px] !font-semibold !text-[#1d1d1f]"
              >
                Featured Project
              </ButtonLink>
              <ButtonLink
                href={contactChannels.github.href}
                variant="secondary"
                icon={<SiGithub />}
                external
                className="!rounded-full !border-black/[0.1] !bg-white !px-6 !py-2.5 !text-[14px] !shadow-sm"
              >
                GitHub
              </ButtonLink>
            </div>
          </FadeUp>
        </Container>

        <footer className="border-t border-black/[0.06] bg-[#fafafa] py-8 sm:py-9">
          <Container>
            <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
              <div>
                <p className="font-display text-lg font-semibold text-[#1d1d1f]">{homeFooter.name}</p>
                <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-[#6e6e73]">
                  Level Designer / Game Designer / 3D Artist — spatial craft, process, and featured work.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Explore</p>
                <ul className="mt-4 space-y-2">
                  {homeFooter.explore.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[14px] font-medium text-[#424245] transition hover:text-[#0071e3]">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Connect</p>
                <ul className="mt-4 space-y-2">
                  {homeFooter.connect.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[14px] font-medium text-[#424245] transition hover:text-[#0071e3]">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <a
                      href={contactChannels.github.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] font-medium text-[#424245] transition hover:text-[#0071e3]"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-10 border-t border-black/[0.06] pt-6 text-center text-[12px] text-[#86868b]">
              {homeFooter.legal.replace("{year}", String(year))}
            </p>
          </Container>
        </footer>
      </section>
    </div>
  );
}

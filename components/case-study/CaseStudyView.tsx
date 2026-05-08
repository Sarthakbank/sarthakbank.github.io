"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { FloatingSectionNav } from "./FloatingSectionNav";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";
import { TempSceneImage } from "@/components/media/TempSceneImage";
import { YouTubeEmbed } from "@/components/media/YouTubeEmbed";
import { tempImagery } from "@/content/tempImagery";
import { demoReferenceVideos } from "@/content/demoMedia";
import { demoBeatImages } from "@/content/demoMediaManifest";
import { FadeIn } from "@/components/motion/FadeIn";
import { ParallaxFloat } from "@/components/motion/ParallaxFloat";
import { TiltCard } from "@/components/motion/TiltCard";
import { HeroLabLayers } from "@/components/experiment/HeroLabLayers";
import { Magnetic } from "@/components/experiment/Magnetic";
import { DepthFrame } from "@/components/experiment/DepthFrame";
import { useImmersiveLab } from "@/components/experiment/ImmersiveLabProvider";
import { MotionSection } from "@/components/motion/MotionSection";
import {
  staggerContainerOpening,
  staggerItemOpening,
} from "@/components/motion/motionPresets";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionDivider } from "@/components/layout/SectionDivider";
import {
  caseStudyBeats,
  caseStudyChallenges,
  caseStudyDemoLabel,
  caseStudyEnvironmentFlow,
  caseStudyExperienceGoals,
  caseStudyGallery,
  caseStudyGameBrief,
  caseStudyGameplayLoop,
  caseStudyGoal,
  caseStudyIterations,
  caseStudyLessons,
  caseStudyMechanics,
  caseStudyMeta,
  caseStudyNav,
  caseStudyOutcome,
  caseStudyPillars,
  caseStudyPlayerObjective,
  caseStudyProcess,
  caseStudyProjectContext,
  caseStudySummary,
  caseStudyTargetExperience,
  caseStudyTechniques,
  caseStudyWorldSetting,
} from "@/content/caseStudy";
import { homeContactCta } from "@/content/home";
import { contactChannels } from "@/content/contact";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { cn } from "@/lib/cn";

const Hero3DStage = dynamic(
  () =>
    import("@/components/experiment/Hero3DStage").then((m) => ({
      default: m.Hero3DStage,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="h-full min-h-[420px] w-full animate-pulse bg-surface/10 dark:bg-elevated/10" />
    ),
  },
);

/** Sticky scroll-driven PS5 angles — same asset as homepage hero (Sketchfab CC BY). */
function CaseStudyFeaturedPs5Scroll() {
  const lab = useImmersiveLab();
  const reduce = useReducedMotion();
  const pinRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0);
  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    scrollRef.current = v;
  });
  if (!lab || reduce) return null;
  return (
    <div
      ref={pinRef}
      className="relative mt-10 h-[min(260vh,2600px)] w-full max-w-[min(100%,72rem)] lg:mx-auto"
    >
      <div className="sticky top-[calc(env(safe-area-inset-top,0px)+5rem)] flex min-h-[calc(100dvh-6rem)] flex-col justify-center gap-5 pb-10 pt-4">
        <div className="h-[min(78dvh,840px)] min-h-[460px] w-full">
          <Hero3DStage
            preset="showcase"
            className="h-full w-full"
            scrollProgressRef={scrollRef}
            scale={1.14}
            modelFit={2.32}
          />
        </div>
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
          Scroll — hardware angles
        </p>
      </div>
    </div>
  );
}

const CASE_STUDY_FACT_ROWS = [
  { label: "Project", value: caseStudyMeta.name },
  { label: "Type / genre", value: caseStudyMeta.genre },
  { label: "Engine / tools", value: caseStudyMeta.engine },
  { label: "Duration", value: caseStudyMeta.duration },
  { label: "Team", value: caseStudyMeta.team },
  { label: "Role", value: caseStudyMeta.role },
] as const;

function LabChapter({ kicker }: { kicker: string }) {
  const lab = useImmersiveLab();
  if (!lab) return null;
  return (
    <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.38em] text-accent/80">
      {kicker}
    </p>
  );
}

/** Soft horizontal bridge between major chapters (lab only). */
function LabStoryBridge() {
  const lab = useImmersiveLab();
  const reduce = useReducedMotion();
  if (!lab) return null;
  if (reduce) {
    return (
      <div
        className="mx-auto my-8 h-px max-w-2xl bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        aria-hidden
      />
    );
  }
  return (
    <motion.div
      className="mx-auto my-8 h-px max-w-2xl origin-left bg-gradient-to-r from-accent/40 via-accent/14 to-transparent"
      aria-hidden
      initial={{ scaleX: 0.12, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -14% 0px", amount: 0.2 }}
      transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

/** Full-width chapter beat — lab only, no extra scroll listeners. */
function LabChapterStripe({
  chapter,
  title,
  blurb,
}: {
  chapter: string;
  title: string;
  blurb?: string;
}) {
  const lab = useImmersiveLab();
  if (!lab) return null;
  return (
    <div
      className="border-y border-hairline/75 bg-gradient-to-b from-canvas via-surface/45 to-canvas py-5 dark:from-black dark:via-black/42 dark:to-black"
      aria-hidden
    >
      <Container>
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.42em] text-accent/90">
          {chapter}
        </p>
        <p className="mt-2 max-w-2xl font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
          {title}
        </p>
        {blurb ? (
          <p className="mt-1.5 max-w-2xl text-pretty text-sm leading-relaxed text-muted sm:text-base">
            {blurb}
          </p>
        ) : null}
      </Container>
    </div>
  );
}

function CaseStudyReveal({
  lab,
  children,
}: {
  lab: boolean;
  children: React.ReactNode;
}) {
  if (lab) {
    return <MotionSection reveal="bold">{children}</MotionSection>;
  }
  return <FadeIn>{children}</FadeIn>;
}

function FactGrid() {
  const lab = useImmersiveLab();
  return (
    <dl className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {CASE_STUDY_FACT_ROWS.map((r, i) => (
        <div
          key={r.label}
          className={cn(
            "group relative overflow-hidden rounded-2xl border border-hairline bg-gradient-to-b from-elevated/95 to-surface/50 p-5 shadow-panel ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur-md transition duration-300 hover:border-accent/30 dark:from-elevated/90 dark:to-canvas/30",
            lab &&
              "hover:border-accent/45 hover:shadow-[0_24px_60px_-32px_rgba(0,0,0,0.18)] dark:hover:shadow-[0_28px_72px_-28px_rgba(0,0,0,0.45)]",
          )}
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

function LabWalkthroughBeats() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const rafRef = useRef<number>(0);

  const measureActiveFromScroll = useCallback(() => {
    const els = caseStudyBeats
      .map((_, i) => document.getElementById(`case-study-beat-${i}`))
      .filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const band = window.innerHeight * 0.4;
    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    els.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const focus = r.top + Math.min(r.height * 0.32, 140);
      const d = Math.abs(focus - band);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive((prev) => (prev !== best ? best : prev));
  }, []);

  useEffect(() => {
    if (reduce) {
      const ids = caseStudyBeats.map((_, idx) => `case-study-beat-${idx}`);
      const els = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];
      if (!els.length) return;
      const observer = new IntersectionObserver(
        (entries) => {
          let bestIdx = -1;
          let bestRatio = 0;
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            const id = (e.target as HTMLElement).id;
            const m = /^case-study-beat-(\d+)$/.exec(id);
            if (!m) continue;
            const idx = Number.parseInt(m[1], 10);
            const r = e.intersectionRatio;
            if (r > bestRatio) {
              bestRatio = r;
              bestIdx = idx;
            }
          }
          if (bestIdx >= 0) setActive(bestIdx);
        },
        {
          root: null,
          rootMargin: "-34% 0px -38% 0px",
          threshold: [0, 0.1, 0.2, 0.35, 0.5],
        },
      );
      els.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(measureActiveFromScroll);
    };
    measureActiveFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reduce, measureActiveFromScroll]);

  const previewSrc =
    demoBeatImages[active % demoBeatImages.length] ?? demoBeatImages[0];

  return (
      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
      <div className="space-y-5 lg:sticky lg:top-[calc(4.25rem+1rem+env(safe-area-inset-top,0px))] lg:z-0 lg:max-h-[calc(100dvh-6rem)] lg:self-start lg:overflow-y-auto lg:overscroll-y-contain xl:top-[calc(4.25rem+1.35rem+env(safe-area-inset-top,0px))]">
        <YouTubeEmbed
          {...demoReferenceVideos.gameplayAtmosphere}
          cinematic
        />
        <div className="relative overflow-hidden rounded-2xl border border-hairline bg-elevated/85 shadow-panel ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur-xl dark:bg-elevated/55">
          <div className="relative aspect-video w-full overflow-hidden bg-black/20">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={previewSrc}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={previewSrc}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 360px, 90vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/90 via-transparent to-canvas/20 dark:from-black/85 dark:to-black/25" />
              </motion.div>
            </AnimatePresence>
            <p className="pointer-events-none absolute bottom-2 left-3 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-white/80">
              Active beat plate
            </p>
          </div>
          <div className="p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted">
              Scroll chapter
            </p>
            <p className="mt-3 font-mono text-[11px] font-semibold tabular-nums text-accent">
              {String(active + 1).padStart(2, "0")}
              <span className="text-muted"> / </span>
              {String(caseStudyBeats.length).padStart(2, "0")}
            </p>
            <div className="relative mt-3 min-h-[3.25rem]">
              <AnimatePresence initial={false} mode="wait">
                <motion.p
                  key={active}
                  className="font-display text-lg font-semibold leading-snug text-ink"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  {caseStudyBeats[active]}
                </motion.p>
              </AnimatePresence>
            </div>
            <div
              className="mt-5 flex gap-1.5"
              role="presentation"
              aria-hidden
            >
              {caseStudyBeats.map((_, i) => (
                <span
                  key={String(i)}
                  className={cn(
                    "h-1 flex-1 rounded-full transition-[background-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    i === active
                      ? "bg-accent shadow-glow"
                      : "bg-border/60",
                  )}
                />
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              Reel and plate echo the beat in view — scroll locks the narrative
              band to the center of the viewport.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 sm:gap-12">
        {caseStudyBeats.map((beat, idx) => {
          const src = demoBeatImages[idx % demoBeatImages.length];
          const isActive = active === idx;
          return (
            <div key={`${beat}-${idx}`}>
              {idx > 0 ? (
                <div className="mb-8 flex justify-center sm:mb-10" aria-hidden>
                  <div className="h-px w-[min(100%,14rem)] bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>
              ) : null}
              <div
                id={`case-study-beat-${idx}`}
                className={cn(
                  "scroll-mt-28 rounded-3xl p-[1px] transition-[background-color,box-shadow,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isActive
                    ? "bg-gradient-to-br from-accent/45 via-accent/14 to-transparent shadow-[0_44px_120px_-52px_rgba(0,0,0,0.34)] dark:shadow-[0_52px_130px_-46px_rgba(0,0,0,0.58)]"
                    : "bg-transparent opacity-[0.88]",
                )}
              >
                <Card
                  interactive={false}
                  className="overflow-hidden border-hairline bg-canvas/95 p-0 sm:p-0 dark:bg-canvas/80"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="relative border-b border-hairline bg-surface/40 px-5 py-5 sm:px-8 lg:w-[34%] lg:border-b-0 lg:border-r lg:py-8">
                      <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full bg-accent shadow-glow transition duration-500",
                            isActive ? "scale-110 opacity-100" : "scale-100 opacity-50",
                          )}
                        />
                        Beat {idx + 1}
                      </span>
                      <p className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight text-ink sm:mt-4 sm:text-xl sm:text-2xl">
                        {beat}
                      </p>
                    </div>
                    <div className="flex-1 p-4 sm:p-6 lg:p-8">
                      <DepthFrame intensity={0.52} className="rounded-2xl">
                        <TempSceneImage
                          src={src}
                          alt={`Demo beat ${idx + 1} plate`}
                          className="aspect-video w-full"
                          sizes="(min-width: 1024px) 56vw, 100vw"
                          caption={`Demo · beat ${idx + 1}`}
                          cinematic
                        />
                      </DepthFrame>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function CaseStudyView() {
  const lab = useImmersiveLab();
  const reduce = useReducedMotion();
  const heroScrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroExit } = useScroll({
    target: heroScrollRef,
    offset: ["start start", "end start"],
  });
  const heroVeilOpacity = useTransform(heroExit, [0.4, 0.88], [0, 0.72]);

  return (
    <>
      <FloatingSectionNav items={caseStudyNav} />

      <div
        id="case-study-root"
        className="pb-[max(7.5rem,calc(5.75rem+env(safe-area-inset-bottom,0px)))] lg:pb-0"
      >
        <Section
          id="hero"
          className="relative overflow-hidden scroll-mt-28 pt-[6.75rem] sm:scroll-mt-32 sm:pt-32"
        >
          <div className="pointer-events-none absolute inset-0 bg-hero-mesh opacity-90" />
          <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-70" />
          <HeroLabLayers />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-canvas via-canvas/40 to-transparent dark:from-black dark:via-black/50" />

          <Container className="relative">
            <div ref={heroScrollRef} className="relative">
              {lab && !reduce ? (
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-[6] h-[min(48vh,460px)] bg-gradient-to-t from-canvas via-canvas/70 to-transparent dark:from-black dark:via-black/65"
                  style={{ opacity: heroVeilOpacity }}
                />
              ) : null}
            {lab ? (
              reduce ? (
                <StaggerGroup margin="-10% 0px -18% 0px">
                  <StaggerItem>
                    <div className="inline-flex items-center gap-2 rounded-full border border-warn/45 bg-warn/[0.12] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-warn shadow-panel backdrop-blur-md">
                      {caseStudyDemoLabel}
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="mt-10 lg:[perspective:1680px] lg:[transform-style:preserve-3d]">
                      <div className="lg:[transform:translateZ(8px)]">
                        <h1 className="max-w-3xl text-balance font-display text-display-lg font-semibold tracking-tight max-sm:leading-[1.07] lg:text-display-xl">
                          {caseStudyMeta.name}
                        </h1>
                        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
                          {caseStudySummary}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-1.5 text-[10px] font-semibold uppercase leading-snug tracking-wide text-muted sm:mt-6 sm:gap-2 sm:text-xs">
                          <span className="rounded-full border border-hairline bg-elevated/80 px-2.5 py-1.5 backdrop-blur sm:px-3">
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
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="mt-8 max-w-5xl">
                      <FactGrid />
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="mt-8 max-w-[min(100%,56rem)] lg:mx-auto">
                      <TempSceneImage
                        src={tempImagery.featuredCaseHero}
                        alt="Temporary atmospheric environment for case-study hero"
                        className={cn(
                          "aspect-[16/10] w-full lg:aspect-[5/3]",
                          "shadow-[0_44px_120px_-48px_rgba(0,0,0,0.38)] ring-1 ring-white/[0.08] dark:shadow-[0_52px_130px_-40px_rgba(0,0,0,0.72)] dark:ring-white/[0.06]",
                        )}
                        sizes="(min-width: 1024px) 520px, 100vw"
                        priority
                        caption="Demo · case hero"
                      />
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <CaseStudyFeaturedPs5Scroll />
                  </StaggerItem>
                  <StaggerItem>
                    <div className="mt-10 sm:mt-12">
                      <YouTubeEmbed {...demoReferenceVideos.overviewReel} />
                    </div>
                  </StaggerItem>
                </StaggerGroup>
              ) : (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-14% 0px -20% 0px", amount: 0.06 }}
                  variants={staggerContainerOpening}
                >
                  <motion.div variants={staggerItemOpening}>
                    <div className="inline-flex items-center gap-2 rounded-full border border-warn/45 bg-warn/[0.12] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-warn shadow-panel backdrop-blur-md">
                      {caseStudyDemoLabel}
                    </div>
                  </motion.div>
                  <motion.div variants={staggerItemOpening}>
                    <div className="mt-10 lg:[perspective:1680px] lg:[transform-style:preserve-3d]">
                      <div className="lg:[transform:translateZ(8px)]">
                        <h1 className="max-w-3xl text-balance font-display text-display-lg font-semibold tracking-tight max-sm:leading-[1.07] lg:text-display-xl">
                          {caseStudyMeta.name}
                        </h1>
                        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
                          {caseStudySummary}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-1.5 text-[10px] font-semibold uppercase leading-snug tracking-wide text-muted sm:mt-6 sm:gap-2 sm:text-xs">
                          <span className="rounded-full border border-hairline bg-elevated/80 px-2.5 py-1.5 backdrop-blur sm:px-3">
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
                    </div>
                  </motion.div>
                  <motion.div variants={staggerItemOpening}>
                    <div className="mt-8 max-w-5xl">
                      <FactGrid />
                    </div>
                  </motion.div>
                  <motion.div variants={staggerItemOpening}>
                    <div className="mt-8 max-w-[min(100%,56rem)] lg:mx-auto">
                      <TempSceneImage
                        src={tempImagery.featuredCaseHero}
                        alt="Temporary atmospheric environment for case-study hero"
                        className={cn(
                          "aspect-[16/10] w-full lg:aspect-[5/3]",
                          "shadow-[0_44px_120px_-48px_rgba(0,0,0,0.38)] ring-1 ring-white/[0.08] dark:shadow-[0_52px_130px_-40px_rgba(0,0,0,0.72)] dark:ring-white/[0.06]",
                        )}
                        sizes="(min-width: 1024px) 520px, 100vw"
                        priority
                        caption="Demo · case hero"
                        cinematic
                      />
                    </div>
                  </motion.div>
                  <motion.div variants={staggerItemOpening}>
                    <CaseStudyFeaturedPs5Scroll />
                  </motion.div>
                  <motion.div variants={staggerItemOpening}>
                    <div className="mt-10 sm:mt-12">
                      <YouTubeEmbed
                        {...demoReferenceVideos.overviewReel}
                        cinematic
                      />
                    </div>
                  </motion.div>
                </motion.div>
              )
            ) : (
              <FadeIn>
                <div className="inline-flex items-center gap-2 rounded-full border border-warn/45 bg-warn/[0.12] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-warn shadow-panel backdrop-blur-md">
                  {caseStudyDemoLabel}
                </div>

                <div
                  className={cn(
                    "mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-12",
                  )}
                >
                  <div>
                    <h1 className="max-w-3xl text-balance font-display text-display-lg font-semibold tracking-tight max-sm:leading-[1.07] lg:text-display-xl">
                      {caseStudyMeta.name}
                    </h1>
                    <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
                      {caseStudySummary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5 text-[10px] font-semibold uppercase leading-snug tracking-wide text-muted sm:mt-6 sm:gap-2 sm:text-xs">
                      <span className="rounded-full border border-hairline bg-elevated/80 px-2.5 py-1.5 backdrop-blur sm:px-3">
                        {caseStudyMeta.genre}
                      </span>
                      <span className="rounded-full border border-hairline bg-elevated/80 px-2.5 py-1.5 backdrop-blur sm:px-3">
                        {caseStudyMeta.duration}
                      </span>
                      <span className="rounded-full border border-hairline bg-elevated/80 px-2.5 py-1.5 backdrop-blur sm:px-3">
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
                    caption="Demo · case hero"
                  />
                </div>

                <div className="mt-10 sm:mt-12">
                  <YouTubeEmbed {...demoReferenceVideos.overviewReel} />
                </div>
              </FadeIn>
            )}
            </div>
          </Container>
        </Section>

        <LabChapterStripe
          chapter="Chapter I"
          title="Hook & facts"
          blurb="Position the slice, land metadata, then descend into the brief."
        />

        <Container>
          <SectionDivider label="Brief" />
        </Container>

        <Section
          id="brief"
          className={cn(
            "relative scroll-mt-28 pb-4 pt-2 sm:pb-6 md:scroll-mt-32",
            lab && "border-t border-accent/[0.07]",
          )}
        >
          <motion.div
            className="relative"
            {...(lab && !reduce
              ? {
                  initial: { opacity: 0.93, y: 12 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: "-6% 0px -10% 0px", amount: 0.14 },
                  transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
                }
              : {})}
          >
            <Container className="relative">
              <CaseStudyReveal lab={lab}>
              <LabChapter kicker="I · Foundation" />
              <SectionLabel>Game brief</SectionLabel>
              <div
                className={cn(
                  "relative z-[1] mt-6 grid gap-6 lg:grid-cols-2 lg:gap-8",
                  lab && "lg:[perspective:1500px] lg:items-start",
                )}
              >
                {lab ? (
                  <>
                    <div className="lg:sticky lg:top-[calc(4.25rem+0.75rem+env(safe-area-inset-top,0px))] lg:z-[1] lg:self-start xl:top-[calc(4.25rem+1rem+env(safe-area-inset-top,0px))]">
                      <Card interactive className="h-full border-hairline shadow-[0_28px_80px_-40px_rgba(0,0,0,0.35)] dark:shadow-[0_36px_90px_-36px_rgba(0,0,0,0.55)]">
                        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                          {caseStudyGameBrief.title}
                        </h2>
                        <div className="mt-5 space-y-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
                          {caseStudyGameBrief.paragraphs.map((p) => (
                            <p key={p}>{p}</p>
                          ))}
                        </div>
                      </Card>
                    </div>
                    <Card
                      interactive
                      className="h-full min-h-0 border-accent/20 bg-gradient-to-br from-accent/[0.06] via-transparent to-transparent"
                    >
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                        Project context
                      </p>
                      <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
                        {caseStudyProjectContext}
                      </p>
                    </Card>
                  </>
                ) : (
                  <>
                    <Card interactive className="border-hairline">
                      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                        {caseStudyGameBrief.title}
                      </h2>
                      <div className="mt-5 space-y-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
                        {caseStudyGameBrief.paragraphs.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </div>
                    </Card>
                    <Card interactive className="border-accent/20 bg-gradient-to-br from-accent/[0.06] via-transparent to-transparent">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                        Project context
                      </p>
                      <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
                        {caseStudyProjectContext}
                      </p>
                    </Card>
                  </>
                )}
              </div>
              </CaseStudyReveal>
            </Container>
          </motion.div>
        </Section>

        <Section
          id="facts"
          className="relative border-y border-hairline bg-surface/35 py-12 sm:py-14 dark:bg-surface/25"
        >
          <div className="pointer-events-none absolute inset-0 bg-section-fade opacity-60" />
          <Container className="relative">
            <CaseStudyReveal lab={lab}>
              <LabChapter kicker="II · Scope" />
              <SectionLabel>Project facts</SectionLabel>
              <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Metadata
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                Grounding details for scope, tools, and responsibilities on this
                vertical slice — the same metadata recruiters scan first.
              </p>
              {lab ? (
                <div className="mt-8 flex flex-wrap gap-2 border-y border-hairline/80 py-7 dark:border-white/[0.06] sm:mt-10 sm:py-8">
                  {CASE_STUDY_FACT_ROWS.map((r) => (
                    <span
                      key={r.label}
                      className="inline-flex max-w-full items-center gap-2 rounded-full border border-hairline bg-elevated/80 px-3 py-2 text-left text-[11px] font-medium leading-snug text-ink shadow-panel ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur-md dark:bg-elevated/55"
                    >
                      <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                        {r.label}
                      </span>
                      <span className="text-muted/40">·</span>
                      <span className="text-[11px] text-ink/95">{r.value}</span>
                    </span>
                  ))}
                </div>
              ) : (
                <div className="mt-10">
                  <FactGrid />
                </div>
              )}
            </CaseStudyReveal>
          </Container>
        </Section>

        <LabChapterStripe
          chapter="Chapter II"
          title="World & player read"
          blurb="Setting, intent, and systems — the design argument in depth."
        />

        <Container>
          <SectionDivider label="World" />
        </Container>

        <Section id="world" className={cn("py-6 sm:py-10", lab && "relative border-t border-black/[0.06] dark:border-white/[0.04]")}>
          <Container>
            <CaseStudyReveal lab={lab}>
              <LabChapter kicker="III · World" />
              <LabStoryBridge />
              <SectionLabel>Setting</SectionLabel>
              <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {caseStudyWorldSetting.title}
              </h2>
              <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-start">
                {lab ? (
                  <>
                    <div className="order-2 lg:sticky lg:top-[calc(4.25rem+1rem+env(safe-area-inset-top,0px))] lg:z-[1] lg:order-1 lg:max-h-[calc(100dvh-6rem)] lg:self-start lg:overflow-y-auto lg:overscroll-y-contain xl:top-[calc(4.25rem+1.35rem+env(safe-area-inset-top,0px))]">
                      <DepthFrame intensity={0.55} className="rounded-3xl">
                        <TempSceneImage
                          src={tempImagery.worldSetting}
                          alt="Demo coastal atmosphere plate"
                          className="aspect-[16/10] w-full"
                          sizes="(min-width: 1024px) 42vw, 100vw"
                          caption="Setting plate · coastal pressure"
                          cinematic
                        />
                      </DepthFrame>
                    </div>
                    <div className="order-1 space-y-5 text-pretty text-base leading-relaxed text-muted sm:text-lg lg:order-2">
                      {caseStudyWorldSetting.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-5 text-pretty text-base leading-relaxed text-muted sm:text-lg">
                      {caseStudyWorldSetting.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                    <TempSceneImage
                      src={tempImagery.worldSetting}
                      alt="Demo coastal atmosphere plate"
                      className="aspect-[16/10] w-full"
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      caption="Demo · world coast"
                    />
                  </>
                )}
              </div>
            </CaseStudyReveal>
          </Container>
        </Section>

        <Section
          id="loop"
          className="border-y border-hairline bg-surface/30 py-14 dark:bg-surface/20"
        >
          <Container>
            <CaseStudyReveal lab={lab}>
              <LabChapter kicker="IV · Loop" />
              <SectionLabel>Gameplay loop</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Loop & cadence
              </h2>
              {lab ? (
                <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                      Experience goals (timeboxed)
                    </p>
                    <StaggerGroup className="mt-4 grid gap-3 sm:grid-cols-2">
                      {caseStudyExperienceGoals.map((g) => (
                        <StaggerItem key={g} className="h-full">
                          <Card interactive className="h-full border-hairline py-5 sm:p-6">
                            <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                              {g}
                            </p>
                          </Card>
                        </StaggerItem>
                      ))}
                    </StaggerGroup>
                  </div>
                  <div className="lg:sticky lg:top-[calc(4.25rem+1rem+env(safe-area-inset-top,0px))] lg:max-h-[calc(100dvh-6rem)] lg:self-start lg:overflow-y-auto lg:overscroll-y-contain xl:top-[calc(4.25rem+1.35rem+env(safe-area-inset-top,0px))]">
                    <Card interactive className="border-hairline shadow-[0_28px_80px_-40px_rgba(0,0,0,0.32)] dark:shadow-[0_36px_90px_-36px_rgba(0,0,0,0.52)]">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                        Loop summary
                      </p>
                      <p className="mt-4 text-pretty text-lg leading-relaxed text-ink sm:text-xl sm:leading-relaxed">
                        {caseStudyGameplayLoop}
                      </p>
                      <div className="mt-8 border-t border-hairline pt-6">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                          Core mechanics
                        </p>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {caseStudyMechanics.map((m) => (
                            <li
                              key={m}
                              className="rounded-full border border-hairline bg-elevated/90 px-4 py-2 text-sm font-semibold text-ink shadow-panel ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur transition hover:border-accent/35"
                            >
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </div>
                </div>
              ) : (
                <>
                  <Card className="mt-8 max-w-3xl border-hairline">
                    <p className="text-pretty text-lg leading-relaxed text-ink sm:text-xl sm:leading-relaxed">
                      {caseStudyGameplayLoop}
                    </p>
                  </Card>
                  <div className="mt-10">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                      Experience goals (timeboxed)
                    </p>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {caseStudyExperienceGoals.map((g) => (
                        <li key={g}>
                          <Card interactive className="border-hairline py-5 sm:p-6">
                            <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                              {g}
                            </p>
                          </Card>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                      Core mechanics
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {caseStudyMechanics.map((m) => (
                        <li
                          key={m}
                          className="rounded-full border border-hairline bg-elevated/90 px-4 py-2 text-sm font-semibold text-ink shadow-panel ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur transition hover:border-accent/35"
                        >
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </CaseStudyReveal>
          </Container>
        </Section>

        <Section id="intent" className="py-14 sm:py-16">
          <Container>
            <CaseStudyReveal lab={lab}>
              <LabChapter kicker="V · Intent" />
              <SectionLabel>Design intent</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Goal
              </h2>
              <Card interactive className="mt-8 max-w-3xl border-accent/25 bg-gradient-to-br from-accent/[0.08] via-transparent to-transparent">
                <p className="text-pretty text-lg leading-relaxed text-ink sm:text-xl sm:leading-relaxed">
                  {caseStudyGoal}
                </p>
              </Card>
            </CaseStudyReveal>
          </Container>
        </Section>

        <Section
          id="overview"
          className="border-y border-hairline bg-surface/30 py-14 dark:bg-surface/20"
        >
          <Container>
            <CaseStudyReveal lab={lab}>
              <LabChapter kicker="VI · Read" />
              <LabStoryBridge />
              <SectionLabel>Player read</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Objective & flow
              </h2>
              {lab ? (
                <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start">
                  <div className="min-w-0 space-y-8">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                        {caseStudyEnvironmentFlow.title}
                      </h3>
                      <div className="mt-4 max-w-3xl space-y-6 text-pretty text-base leading-relaxed text-muted sm:text-lg">
                        {caseStudyEnvironmentFlow.paragraphs.map((p, i) =>
                          reduce ? (
                            <p key={p}>{p}</p>
                          ) : (
                            <motion.p
                              key={p}
                              initial={{ opacity: 0, y: 18 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-10% 0px", amount: 0.25 }}
                              transition={{
                                duration: 0.72,
                                delay: i * 0.06,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                            >
                              {p}
                            </motion.p>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 space-y-6 lg:sticky lg:top-[calc(4.25rem+1rem+env(safe-area-inset-top,0px))] lg:max-h-[calc(100dvh-6rem)] lg:self-start lg:overflow-y-auto lg:overscroll-y-contain xl:top-[calc(4.25rem+1.35rem+env(safe-area-inset-top,0px))]">
                    <Card interactive className="border-hairline shadow-[0_26px_72px_-36px_rgba(0,0,0,0.3)] dark:shadow-[0_32px_88px_-32px_rgba(0,0,0,0.5)]">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                        Player objective
                      </p>
                      <p className="mt-4 text-pretty text-base leading-relaxed text-ink sm:text-lg">
                        {caseStudyPlayerObjective}
                      </p>
                      <div className="mt-8 border-t border-hairline pt-6">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                          Target experience
                        </p>
                        <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
                          {caseStudyTargetExperience}
                        </p>
                      </div>
                    </Card>
                    <ParallaxFloat yRange={14} className="block">
                      <DepthFrame intensity={0.52} className="rounded-3xl">
                        <TempSceneImage
                          src={tempImagery.galleryBrutalist}
                          alt="Temporary architectural readability reference"
                          className="aspect-video w-full"
                          sizes="(min-width: 1024px) 40vw, 100vw"
                          caption="Topology plate · readability"
                          cinematic
                        />
                      </DepthFrame>
                    </ParallaxFloat>
                    <ParallaxFloat yRange={18} className="block">
                      <DepthFrame intensity={0.52} className="rounded-3xl">
                        <TempSceneImage
                          src={tempImagery.galleryUrbanDepth}
                          alt="Temporary urban depth mood"
                          className="aspect-video w-full"
                          sizes="(min-width: 1024px) 40vw, 100vw"
                          caption="Routing plate · depth"
                          cinematic
                        />
                      </DepthFrame>
                    </ParallaxFloat>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
                    <Card interactive className="border-hairline">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                        Player objective
                      </p>
                      <p className="mt-4 text-pretty text-base leading-relaxed text-ink sm:text-lg">
                        {caseStudyPlayerObjective}
                      </p>
                    </Card>
                    <Card interactive className="border-hairline">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                        Target experience
                      </p>
                      <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
                        {caseStudyTargetExperience}
                      </p>
                    </Card>
                  </div>
                  <div className="mt-10">
                    <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                      {caseStudyEnvironmentFlow.title}
                    </h3>
                    <div className="mt-4 max-w-3xl space-y-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
                      {caseStudyEnvironmentFlow.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </div>
                  <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
                    <TempSceneImage
                      src={tempImagery.galleryBrutalist}
                      alt="Temporary architectural readability reference"
                      className="aspect-video w-full"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      caption="Demo · topology plate"
                    />
                    <TempSceneImage
                      src={tempImagery.galleryUrbanDepth}
                      alt="Temporary urban depth mood"
                      className="aspect-video w-full"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      caption="Demo · routing plate"
                    />
                  </div>
                </>
              )}
            </CaseStudyReveal>
          </Container>
        </Section>

        <Section id="pillars" className="py-14 sm:py-16">
          <Container>
            <CaseStudyReveal lab={lab}>
              <LabChapter kicker="VII · Frame" />
              <SectionLabel>Design pillars</SectionLabel>
              <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                What the level promises
              </h2>
              <ol className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
                {caseStudyPillars.map((pillar, i) => (
                  <li key={pillar}>
                    <Card
                      interactive
                      className="h-full overflow-hidden border-border/80 pt-2"
                    >
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
            </CaseStudyReveal>
          </Container>
        </Section>

        <LabChapterStripe
          chapter="Chapter III"
          title="Walkthrough & proof"
          blurb="Beats, craft, and outcome — how it plays and what shipped."
        />

        <Container>
          <SectionDivider label="Walkthrough" />
        </Container>

        <Section
          id="walkthrough"
          className={cn(
            "pb-8 pt-3 sm:pb-10 sm:pt-4",
            lab &&
              "relative border-t border-accent/10 bg-gradient-to-b from-accent/[0.035] via-transparent to-transparent dark:from-accent/[0.05] dark:via-transparent",
          )}
        >
          <Container>
            <CaseStudyReveal lab={lab}>
              <LabChapter kicker="VIII · Beats" />
              <LabStoryBridge />
              <SectionLabel>Gameplay walkthrough</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Beats & atmosphere
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-muted">
                Reference clips only — swap IDs in{" "}
                <code className="rounded-md bg-surface px-1.5 py-0.5 text-xs text-ink">
                  content/demoMedia.ts
                </code>
                ; posters in{" "}
                <code className="rounded-md bg-surface px-1.5 py-0.5 text-xs text-ink">
                  public/media/demo/video-posters/
                </code>
                . Use “Watch reference video” if embed fails in your region.
              </p>
              {lab ? (
                <LabWalkthroughBeats />
              ) : (
                <>
                  <div className="mt-10">
                    <YouTubeEmbed {...demoReferenceVideos.gameplayAtmosphere} />
                  </div>
                  <div className="mt-12 space-y-8">
                    {caseStudyBeats.map((beat, idx) => {
                      const src = demoBeatImages[idx % demoBeatImages.length];
                      return (
                        <Card
                          key={beat}
                          interactive
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
                              <TempSceneImage
                                src={src}
                                alt={`Demo beat ${idx + 1} plate`}
                                className="aspect-video w-full"
                                sizes="(min-width: 1024px) 56vw, 100vw"
                                caption={`Demo · beat ${idx + 1}`}
                              />
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </>
              )}
            </CaseStudyReveal>
          </Container>
        </Section>

        <Section
          id="techniques"
          className="border-y border-hairline bg-surface/35 py-14 dark:bg-surface/25"
        >
          <Container>
            <CaseStudyReveal lab={lab}>
              <LabChapter kicker="IX · Craft" />
              <SectionLabel>Technique highlights</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Craft focus
              </h2>
              <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-3 md:gap-7">
                {caseStudyTechniques.map((t, i) => (
                  <Card
                    key={t.title}
                    interactive
                    className="border-hairline transition duration-300 hover:border-accent/35"
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
            </CaseStudyReveal>
          </Container>
        </Section>

        <Section id="process">
          <Container>
            <CaseStudyReveal lab={lab}>
              <LabChapter kicker="X · Build" />
              <LabStoryBridge />
              <SectionLabel>Process breakdown</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                How the slice was built
              </h2>
              {lab ? (
                <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] lg:items-start">
                  <div className="space-y-5 lg:sticky lg:top-[calc(4.25rem+1rem+env(safe-area-inset-top,0px))] lg:max-h-[calc(100dvh-6rem)] lg:self-start lg:overflow-y-auto lg:overscroll-y-contain xl:top-[calc(4.25rem+1.35rem+env(safe-area-inset-top,0px))]">
                    <div className="rounded-2xl border border-hairline bg-elevated/80 p-5 shadow-panel ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur-xl dark:bg-elevated/50">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted">
                        Build arc
                      </p>
                      <ol className="mt-4 space-y-3">
                        {caseStudyProcess.map((step, i) => (
                          <li
                            key={step.title}
                            className="flex gap-3 border-l border-accent/25 pl-3"
                          >
                            <span className="font-mono text-[11px] font-semibold tabular-nums text-accent">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-sm font-medium leading-snug text-ink">
                              {step.title}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <MediaPlaceholder
                      title="Process diagram — milestones"
                      ratio="wide"
                      tone="neutral"
                      spec="TEMP: Replace — Figma / Miro export → /public/media/..."
                    />
                  </div>
                  <div>
                    <StaggerGroup className="flex flex-col gap-5">
                      {caseStudyProcess.map((step, i) => (
                        <StaggerItem key={step.title}>
                          <Card interactive className="border-hairline">
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
                        </StaggerItem>
                      ))}
                    </StaggerGroup>
                    <div className="mt-10">
                      <TempSceneImage
                        src={tempImagery.processPlate}
                        alt="Demo process atmosphere plate"
                        className="aspect-[21/9] min-h-[200px] w-full"
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        caption="Demo · process plate"
                        cinematic
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mt-10 grid gap-6 lg:grid-cols-3">
                    {caseStudyProcess.map((step, i) => (
                      <Card key={step.title} interactive className="border-hairline">
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
                  <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    <MediaPlaceholder
                      title="Process diagram — milestones"
                      ratio="wide"
                      tone="neutral"
                      spec="TEMP: Replace — Figma / Miro export → /public/media/..."
                    />
                    <TempSceneImage
                      src={tempImagery.processPlate}
                      alt="Demo process atmosphere plate"
                      className="aspect-[21/9] min-h-[200px] w-full"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      caption="Demo · process plate"
                    />
                  </div>
                </>
              )}
            </CaseStudyReveal>
          </Container>
        </Section>

        <Section
          id="gallery"
          className="border-y border-hairline bg-surface/35 py-14 dark:bg-surface/25"
        >
          <Container>
            <CaseStudyReveal lab={lab}>
              <LabChapter kicker="XI · Gallery" />
              <SectionLabel>Visual gallery</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Mood & reference plates
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted sm:text-base">
                Local plates — swap files in{" "}
                <code className="rounded-md bg-elevated px-1.5 py-0.5 text-xs text-ink">
                  public/media/demo/gallery/
                </code>{" "}
                or paths in{" "}
                <code className="rounded-md bg-elevated px-1.5 py-0.5 text-xs text-ink">
                  content/demoMediaManifest.ts
                </code>
                .
              </p>
              {lab ? (
                <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                  {caseStudyGallery.map((item) => (
                    <StaggerItem key={item.key}>
                      <DepthFrame intensity={0.52} className="rounded-3xl">
                        <TempSceneImage
                          src={tempImagery[item.key]}
                          alt={item.caption}
                          className="aspect-[4/3] w-full sm:aspect-[3/2]"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          caption={item.caption}
                        />
                      </DepthFrame>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              ) : (
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                  {caseStudyGallery.map((item) => (
                    <TempSceneImage
                      key={item.key}
                      src={tempImagery[item.key]}
                      alt={item.caption}
                      className="aspect-[4/3] w-full sm:aspect-[3/2]"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      caption={item.caption}
                    />
                  ))}
                </div>
              )}
            </CaseStudyReveal>
          </Container>
        </Section>

        <Section id="iterations" className="py-14 sm:py-16">
          <Container>
            <CaseStudyReveal lab={lab}>
              <LabChapter kicker="XII · Evolve" />
              <SectionLabel>Iterations</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Evidence of iteration
              </h2>
              <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
                {caseStudyIterations.map((it) => (
                  <Card
                    key={it.title}
                    interactive
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
                  <TempSceneImage
                    src={tempImagery.iterationBefore}
                    alt="Demo iteration before plate"
                    className="aspect-video w-full"
                    sizes="50vw"
                    caption="Demo · iteration before"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-success">
                    After
                  </p>
                  <TempSceneImage
                    src={tempImagery.iterationAfter}
                    alt="Demo iteration after plate"
                    className="aspect-video w-full"
                    sizes="50vw"
                    caption="Demo · iteration after"
                  />
                </div>
              </div>
            </CaseStudyReveal>
          </Container>
        </Section>

        <Section
          id="challenges"
          className="border-y border-hairline bg-surface/35 py-14 dark:bg-surface/25"
        >
          <Container>
            <CaseStudyReveal lab={lab}>
              <LabChapter kicker="XIII · Tests" />
              <SectionLabel>Challenges & solutions</SectionLabel>
              <h2 className="mt-4 max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Problems encountered and responses
              </h2>
              <div className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-2">
                <div className="space-y-4">
                  {caseStudyChallenges.map((c) => (
                    <Card
                      key={c.title}
                      interactive
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
                <Card
                  interactive
                  className="flex flex-col justify-between border-success/35 bg-gradient-to-br from-success/[0.1] via-transparent to-accent/[0.06] lg:min-h-full"
                >
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
                  spec="TEMP: Replace — heat sketch or markup export"
                />
              </div>
            </CaseStudyReveal>
          </Container>
        </Section>

        <Section
          id="outcome"
          className={cn(
            "relative overflow-hidden border-y border-hairline py-16 sm:py-20",
            lab
              ? "bg-gradient-to-b from-surface/55 via-surface/38 to-canvas dark:from-surface/40 dark:via-surface/22 dark:to-black/90"
              : "bg-surface/40 py-16 dark:bg-surface/30",
          )}
        >
          <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-success/10 blur-3xl" />
          {lab ? (
            <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-success/[0.09] to-transparent" />
          ) : null}
          <Container className="relative">
            <CaseStudyReveal lab={lab}>
              <LabChapter kicker="XIV · Ship" />
              <LabStoryBridge />
              <SectionLabel>Final outcome</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Ship-ready slice
              </h2>
              {lab ? (
                <div className="mt-12 space-y-12">
                  <div className="grid gap-10 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:items-start">
                    <div className="min-w-0 space-y-4 xl:sticky xl:top-[calc(4.25rem+1rem+env(safe-area-inset-top,0px))] xl:max-h-[calc(100dvh-6rem)] xl:self-start xl:overflow-y-auto xl:overscroll-y-contain 2xl:top-[calc(4.25rem+1.35rem+env(safe-area-inset-top,0px))]">
                      <YouTubeEmbed
                        {...demoReferenceVideos.finaleShowcase}
                        cinematic
                        featuredClosing
                      />
                      <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-muted xl:text-left">
                        Finale reference — pacing & clarity pass
                      </p>
                    </div>
                    {reduce ? (
                      <Card
                        interactive
                        className="flex min-h-0 flex-col justify-between border-success/40 bg-gradient-to-br from-success/[0.14] via-transparent to-accent/[0.06] shadow-[0_32px_90px_-48px_rgba(0,0,0,0.28)] dark:shadow-[0_40px_100px_-40px_rgba(0,0,0,0.55)] xl:min-h-[min(100%,26rem)]"
                      >
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-success">
                          Ship read
                        </p>
                        <p className="mt-5 text-pretty text-xl font-medium leading-relaxed text-ink sm:text-2xl sm:leading-relaxed">
                          {caseStudyOutcome}
                        </p>
                      </Card>
                    ) : (
                      <Card
                        interactive
                        className="flex min-h-0 flex-col justify-between border-success/40 bg-gradient-to-br from-success/[0.14] via-transparent to-accent/[0.06] shadow-[0_32px_90px_-48px_rgba(0,0,0,0.28)] dark:shadow-[0_40px_100px_-40px_rgba(0,0,0,0.55)] xl:min-h-[min(100%,26rem)]"
                      >
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-success">
                          Ship read
                        </p>
                        <p className="mt-5 text-pretty text-xl font-medium leading-relaxed text-ink sm:text-2xl sm:leading-relaxed">
                          {caseStudyOutcome}
                        </p>
                      </Card>
                    )}
                  </div>
                  {!reduce ? (
                    <motion.div
                      className="mx-auto h-px max-w-2xl origin-center bg-gradient-to-r from-transparent via-accent/35 to-transparent"
                      initial={{ scaleX: 0.15, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                      aria-hidden
                    />
                  ) : (
                    <div className="mx-auto h-px max-w-2xl bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
                  )}
                  <p className="text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-muted xl:text-left">
                    Closing beat → lessons & contact
                  </p>
                </div>
              ) : (
                <div className="mt-8 grid gap-8 lg:grid-cols-1 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:items-stretch xl:gap-10">
                  <YouTubeEmbed {...demoReferenceVideos.finaleShowcase} />
                  <Card interactive className="border-success/35 bg-gradient-to-br from-success/[0.12] via-transparent to-transparent">
                    <p className="text-pretty text-xl font-medium leading-relaxed text-ink sm:text-2xl sm:leading-relaxed">
                      {caseStudyOutcome}
                    </p>
                  </Card>
                </div>
              )}
            </CaseStudyReveal>
          </Container>
        </Section>

        <Section id="lessons">
          <Container>
            <CaseStudyReveal lab={lab}>
              <LabChapter kicker="XV · Learn" />
              <SectionLabel>Lessons learned</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Takeaways
              </h2>
              <Card className="mt-8 max-w-3xl">
                <p className="text-pretty text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
                  {caseStudyLessons}
                </p>
              </Card>
            </CaseStudyReveal>
          </Container>
        </Section>

        <Section
          id="contact"
          className="pb-[max(6rem,calc(4.5rem+env(safe-area-inset-bottom,0px)))] lg:pb-20"
        >
          <Container>
            <CaseStudyReveal lab={lab}>
              <LabChapter kicker="XVI · Next" />
              {lab && !reduce ? (
                <motion.div
                  initial={{ opacity: 0.88, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Card
                    interactive
                    className="overflow-hidden border-accent/30 bg-gradient-to-br from-accent/[0.12] via-elevated/40 to-success/[0.1] dark:via-elevated/20"
                  >
                    <SectionLabel>Next step</SectionLabel>
                    <h2 className="mt-4 max-w-3xl text-balance font-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[2rem] lg:leading-snug">
                      {homeContactCta.body}
                    </h2>
                    <div className="mt-10 flex flex-wrap gap-3">
                      <Magnetic strength={0.52}>
                        <ButtonLink href={homeContactCta.href} variant="primary" icon={<Mail />}>
                          {homeContactCta.label}
                        </ButtonLink>
                      </Magnetic>
                      <Magnetic strength={0.38}>
                        <ButtonLink
                          href={contactChannels.github.href}
                          variant="secondary"
                          icon={<SiGithub />}
                          external
                        >
                          GitHub
                        </ButtonLink>
                      </Magnetic>
                      <Magnetic strength={0.34}>
                        <ButtonLink href="/" variant="secondary">
                          Back home
                        </ButtonLink>
                      </Magnetic>
                    </div>
                  </Card>
                </motion.div>
              ) : (
                <Card
                  interactive
                  className="overflow-hidden border-accent/30 bg-gradient-to-br from-accent/[0.12] via-elevated/40 to-success/[0.1] dark:via-elevated/20"
                >
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
              )}
            </CaseStudyReveal>
          </Container>
        </Section>
      </div>
    </>
  );
}

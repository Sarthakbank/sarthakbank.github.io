"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { useImmersiveLab } from "@/components/experiment/ImmersiveLabProvider";

const Hero3DStage = dynamic(
  () =>
    import("@/components/experiment/Hero3DStage").then((m) => ({
      default: m.Hero3DStage,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="h-full min-h-[200px] w-full animate-pulse rounded-2xl bg-surface/50 dark:bg-elevated/30" />
    ),
  },
);

/**
 * Cinematic ribbon under case-study hero copy — second WebGL instance, smaller scale.
 */
export function CaseStudyHeroRibbon() {
  const lab = useImmersiveLab();
  const reduce = useReducedMotion();
  if (!lab) return null;

  return (
    <motion.div
      className="relative mt-10 overflow-hidden rounded-3xl border border-hairline bg-gradient-to-b from-surface/60 to-canvas/80 shadow-[0_50px_120px_-56px_rgba(0,0,0,0.38)] ring-1 ring-inset ring-white/[0.05] dark:from-elevated/40 dark:to-black/60 dark:shadow-[0_60px_140px_-48px_rgba(0,0,0,0.7)]"
      initial={reduce ? false : { opacity: 0.88, y: 28, scale: 0.99 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-12% 0px -18% 0px", amount: 0.12 }}
      transition={{ duration: 0.88, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-canvas/80 via-transparent to-canvas/80 dark:from-black/50 dark:to-black/50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_12%,color-mix(in_srgb,var(--color-accent)_14%,transparent),transparent_60%)] opacity-70" />
      <div className="h-[min(28vh,220px)] w-full sm:h-[min(32vh,260px)]">
        <Hero3DStage className="h-full w-full" preset="ribbon" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-canvas dark:from-black" />
      <motion.div
        className="pointer-events-none absolute left-6 top-5 hidden items-center gap-2 rounded-full border border-white/10 bg-elevated/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted shadow-panel ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur-md sm:inline-flex"
        initial={reduce ? false : { opacity: 0, x: -8 }}
        whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.72, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        Interstitial scene
      </motion.div>
    </motion.div>
  );
}

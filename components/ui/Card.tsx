"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useImmersiveLab } from "@/components/experiment/ImmersiveLabProvider";
import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
  interactive,
}: {
  className?: string;
  children: React.ReactNode;
  /** Stronger hover depth / border read — for index cards and CTAs */
  interactive?: boolean;
}) {
  const lab = useImmersiveLab();
  const reduce = useReducedMotion();
  const motionInteractive = Boolean(lab && interactive && !reduce);

  const base = cn(
    "relative overflow-hidden rounded-2xl border border-hairline",
    "bg-gradient-to-b from-elevated/98 to-surface/50 shadow-lift",
    "ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur-md",
    "dark:from-elevated/95 dark:to-canvas/35",
    "p-6 sm:p-8",
    "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-card-shine before:opacity-40 before:content-[''] dark:before:opacity-25",
    interactive &&
      "transition-[border-color,box-shadow,ring-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent/35",
    interactive &&
      "hover:shadow-[0_24px_70px_color-mix(in_srgb,var(--color-ink)_12%,transparent)] dark:hover:shadow-[0_28px_90px_rgba(0,0,0,0.55)]",
    lab &&
      interactive &&
      "hover:shadow-[0_36px_100px_-28px_color-mix(in_srgb,var(--color-ink)_20%,transparent)] hover:ring-accent/25 dark:hover:shadow-[0_44px_110px_-28px_rgba(0,0,0,0.68)]",
    lab &&
      interactive &&
      "after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:opacity-0 after:shadow-[inset_0_1px_0_0_color-mix(in_srgb,var(--color-ink)_8%,transparent)] after:transition-opacity after:duration-300 hover:after:opacity-100 dark:after:shadow-[inset_0_1px_0_0_color-mix(in_srgb,#fff_10%,transparent)]",
    className,
  );

  const staticLift = cn(
    base,
    interactive &&
      !motionInteractive &&
      "hover:-translate-y-0.5 max-sm:motion-safe:hover:translate-y-0 max-sm:motion-safe:hover:scale-100 motion-safe:hover:scale-[1.006] sm:motion-safe:hover:-translate-y-1",
  );

  if (motionInteractive) {
    return (
      <motion.div
        className={base}
        whileHover={{
          y: -2,
          scale: 1.003,
          transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
        }}
        whileTap={{ scale: 0.994, transition: { duration: 0.2 } }}
      >
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }

  return (
    <div className={staticLift}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useImmersiveLab } from "@/components/experiment/ImmersiveLabProvider";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Lab-only section handoff: horizontal line + soft wash. Reduced motion: static hairline.
 */
export function LabFlowBridge({
  className,
  wash = "default",
}: {
  className?: string;
  /** Slightly stronger accent wash for major chapter breaks */
  wash?: "default" | "strong";
}) {
  const lab = useImmersiveLab();
  const reduce = useReducedMotion();

  if (!lab) return null;

  if (reduce) {
    return (
      <div
        className={cn(
          "mx-auto my-10 h-px max-w-3xl bg-gradient-to-r from-transparent via-border to-transparent",
          className,
        )}
        aria-hidden
      />
    );
  }

  return (
    <div className={cn("relative overflow-hidden py-5 sm:py-7", className)} aria-hidden>
      <motion.div
        className="mx-auto h-px max-w-4xl origin-center bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        initial={{ scaleX: 0.08, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 0.95, ease }}
      />
      <div
        className={cn(
          "pointer-events-none mx-auto mt-3 h-20 max-w-5xl bg-gradient-to-b to-transparent sm:h-24 sm:mt-4",
          wash === "strong"
            ? "from-accent/[0.1] via-accent/[0.04] dark:from-accent/[0.14] dark:via-accent/[0.06]"
            : "from-accent/[0.07] via-transparent dark:from-accent/[0.1]",
        )}
      />
    </div>
  );
}

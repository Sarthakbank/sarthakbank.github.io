"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Perspective + hover lift for media and cards — tactile, not toy-like.
 */
export function DepthFrame({
  children,
  className,
  intensity = 1,
}: {
  children: ReactNode;
  className?: string;
  /** Scale hover depth */
  intensity?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(
        "group relative [transform-style:preserve-3d]",
        "[perspective:1400px]",
        className,
      )}
      whileHover={{
        rotateX: 1.2 * intensity,
        rotateY: -1 * intensity,
        scale: 1.012,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--color-accent)_22%,transparent),0_40px_100px_-50px_color-mix(in_srgb,var(--color-ink)_18%,transparent)] transition-opacity duration-300 group-hover:opacity-100 dark:shadow-[inset_0_0_0_1px_color-mix(in_srgb,#fff_12%,transparent),0_48px_120px_-40px_rgba(0,0,0,0.55)]"
        aria-hidden
      />
      {children}
    </motion.div>
  );
}

"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useImmersiveLab } from "@/components/experiment/ImmersiveLabProvider";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-lift hover:brightness-110 active:brightness-95 border border-white/10",
  secondary:
    "border border-hairline bg-elevated/85 text-ink shadow-panel hover:border-accent/45 hover:text-accent hover:shadow-lift backdrop-blur-md dark:bg-elevated/70",
  ghost:
    "text-muted hover:text-accent underline-offset-4 hover:underline decoration-accent/40",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
  icon,
  iconPosition = "start",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
}) {
  const lab = useImmersiveLab();
  const reduce = useReducedMotion();
  const [coarsePointer, setCoarsePointer] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: coarse)");
    const sync = () => setCoarsePointer(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const ghostMotion = lab && variant === "ghost" && !reduce;
  const labPressMotion = lab && !reduce && !coarsePointer && variant !== "ghost";

  const inner = (
    <>
      {icon && iconPosition === "start" ? (
        <span className="relative z-[1] [&>svg]:h-4 [&>svg]:w-4">{icon}</span>
      ) : null}
      <span className="relative z-[1] inline-flex flex-col items-start gap-0.5">
        <span>{children}</span>
        {ghostMotion ? (
          <motion.span
            aria-hidden
            className="h-px w-full origin-left rounded-full bg-accent/55"
            initial={{ scaleX: 0.12, opacity: 0.35 }}
            whileHover={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          />
        ) : null}
      </span>
      {icon && iconPosition === "end" ? (
        <span className="relative z-[1] [&>svg]:h-4 [&>svg]:w-4">{icon}</span>
      ) : null}
    </>
  );

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-tight transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    ghostMotion ? "hover:no-underline" : null,
    variants[variant],
    lab &&
      !coarsePointer &&
      variant === "primary" &&
      "group relative overflow-hidden shadow-[0_12px_40px_-16px_color-mix(in_srgb,var(--color-accent)_45%,transparent)] before:pointer-events-none before:absolute before:inset-y-0 before:-left-full before:w-1/2 before:skew-x-[-16deg] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:opacity-0 before:transition-all before:duration-700 hover:before:translate-x-[220%] hover:before:opacity-100",
    lab &&
      variant === "secondary" &&
      "relative transition-shadow duration-300 hover:shadow-[0_22px_56px_-28px_color-mix(in_srgb,var(--color-accent)_18%,transparent)] dark:hover:shadow-[0_26px_64px_-24px_rgba(0,0,0,0.45)]",
    className,
  );

  const core = external ? (
    <a
      href={href}
      className={classes}
      target="_blank"
      rel="noopener noreferrer"
    >
      {inner}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );

  if (labPressMotion) {
    return (
      <motion.span
        className="inline-flex"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
        }}
        whileTap={{ scale: 0.965, transition: { duration: 0.14 } }}
      >
        {core}
      </motion.span>
    );
  }

  return core;
}

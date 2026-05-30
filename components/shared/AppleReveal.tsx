"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Subtle fade/slide-in reveal for inner pages — mirrors the Home page motion
 * language while staying fully self-contained (no imports from components/home).
 * Respects reduced-motion.
 */
export function AppleReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

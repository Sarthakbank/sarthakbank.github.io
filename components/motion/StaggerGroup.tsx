"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainer, staggerItem } from "./motionPresets";
import { cn } from "@/lib/cn";

export function StaggerGroup({
  children,
  className,
  /** Looser viewport trigger for lab storytelling */
  margin = "-8% 0px -12% 0px",
}: {
  children: ReactNode;
  className?: string;
  margin?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin, amount: 0.15 }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={cn(className)} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

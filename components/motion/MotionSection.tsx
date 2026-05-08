"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeLift, fadeLiftBold } from "./motionPresets";
import { cn } from "@/lib/cn";

/**
 * Full-width section reveal — use inside pages for cinematic rhythm when lab is on.
 */
export function MotionSection({
  children,
  className,
  id,
  reveal = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  reveal?: "default" | "bold";
}) {
  const reduce = useReducedMotion();
  const variants = reveal === "bold" ? fadeLiftBold : fadeLift;

  if (reduce) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px -12% 0px", amount: 0.1 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

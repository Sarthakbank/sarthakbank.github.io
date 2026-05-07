"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/cn";

/** Subtle vertical drift tied to scroll — keeps motion light for performance. */
export function ParallaxFloat({
  children,
  className,
  yRange = 20,
}: {
  children: React.ReactNode;
  className?: string;
  yRange?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduce ? [0, 0, 0] : [yRange * 0.4, 0, -yRange * 0.4],
  );

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div style={{ y }} className="relative will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

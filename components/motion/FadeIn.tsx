"use client";

import { useImmersiveLab } from "@/components/experiment/ImmersiveLabProvider";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const lab = useImmersiveLab();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const y = lab ? 22 : 10;
  const duration = lab ? 0.62 : 0.45;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: lab ? "-6% 0px -12% 0px" : "-10% 0px",
      }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

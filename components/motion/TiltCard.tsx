"use client";

import { useImmersiveLab } from "@/components/experiment/ImmersiveLabProvider";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import { useCallback, useMemo } from "react";
import { cn } from "@/lib/cn";

const spring = { stiffness: 260, damping: 22, mass: 0.45 };

/**
 * Subtle 3D tilt on pointer move — disabled when reduced motion is on.
 */
export function TiltCard({
  children,
  className,
  maxTilt = 5,
}: {
  children: ReactNode;
  className?: string;
  /** Max degrees on each axis */
  maxTilt?: number;
}) {
  const reduce = useReducedMotion();
  const lab = useImmersiveLab();
  const tilt = useMemo(() => maxTilt * (lab ? 1.22 : 1), [lab, maxTilt]);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, spring);
  const sry = useSpring(ry, spring);
  const transform = useMotionTemplate`perspective(${lab ? 1100 : 900}px) rotateX(${srx}deg) rotateY(${sry}deg)`;

  const onMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (reduce) return;
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      ry.set(px * 2 * tilt);
      rx.set(-py * 2 * tilt);
    },
    [tilt, reduce, rx, ry],
  );

  const onLeave = useCallback(() => {
    rx.set(0);
    ry.set(0);
  }, [rx, ry]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      style={{ transform }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

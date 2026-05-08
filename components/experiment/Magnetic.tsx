"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const spring = { stiffness: 150, damping: 38, mass: 0.42 };

/**
 * Subtle pointer attraction — keeps motion in a tight radius (premium, not bouncy).
 */
export function Magnetic({
  children,
  className,
  strength = 0.28,
}: {
  children: ReactNode;
  className?: string;
  /** 0–1 — how far the child shifts toward the cursor */
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const [coarsePointer, setCoarsePointer] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: coarse)");
    const sync = () => setCoarsePointer(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  const move = useCallback(
    (e: React.PointerEvent) => {
      if (!ref.current || reduce) return;
      const r = ref.current.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) * strength * 0.17;
      const dy = (e.clientY - cy) * strength * 0.17;
      const cap = 10;
      x.set(Math.max(-cap, Math.min(cap, dx)));
      y.set(Math.max(-cap, Math.min(cap, dy)));
    },
    [reduce, strength, x, y],
  );

  const leave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  if (reduce || coarsePointer) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn("inline-block", className)}
      style={{ x: sx, y: sy }}
      onPointerMove={move}
      onPointerLeave={leave}
    >
      {children}
    </motion.div>
  );
}

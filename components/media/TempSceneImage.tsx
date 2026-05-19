"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useImmersiveLab } from "@/components/experiment/ImmersiveLabProvider";
import { imageReveal, imageRevealCinematic } from "@/components/motion/motionPresets";
import { cn } from "@/lib/cn";

const tiltSpring = { stiffness: 200, damping: 42, mass: 0.42 };

type Props = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Stronger lab-only reveal choreography */
  cinematic?: boolean;
};

/**
 * Scene frame for local `/media/demo/...` plates. Base fill + error fallback
 * avoids empty black boxes; overlays stay light for a crisp dark mode read.
 */
export function TempSceneImage({
  src,
  alt,
  caption = "Demo plate",
  className,
  priority,
  sizes = "100vw",
  cinematic = false,
}: Props) {
  const [broken, setBroken] = useState(false);
  const [coarsePointer, setCoarsePointer] = useState(false);
  const lab = useImmersiveLab();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: coarse)");
    const sync = () => setCoarsePointer(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  const tiltMul = cinematic ? 0.95 : 1.05;
  const tiltDeg = cinematic ? 3.5 : 4;

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(
    useTransform(py, [-0.5, 0.5], [tiltDeg, -tiltDeg]),
    tiltSpring,
  );
  const rotateY = useSpring(
    useTransform(px, [-0.5, 0.5], [-tiltDeg * 1.15, tiltDeg * 1.15]),
    tiltSpring,
  );

  const resetTilt = useCallback(() => {
    px.set(0);
    py.set(0);
  }, [px, py]);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!lab || reduce || coarsePointer) return;
      const r = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      px.set(Math.max(-0.5, Math.min(0.5, x * tiltMul)));
      py.set(Math.max(-0.5, Math.min(0.5, y * tiltMul)));
    },
    [lab, reduce, coarsePointer, px, py, tiltMul],
  );

  const chrome = useMemo(
    () => (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-surface via-elevated/90 to-surface dark:via-elevated/70"
        aria-hidden
      />
      {!broken ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(
            "object-cover object-center transition duration-[1.05s] ease-[cubic-bezier(0.22,1,0.36,1)]",
            lab && !coarsePointer && "group-hover:scale-[1.015]",
          )}
          onError={() => setBroken(true)}
        />
      ) : (
        <div className="relative z-[1] flex min-h-[12rem] w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-surface to-muted/20 px-6 py-16 text-center">
          <p className="text-xs font-semibold text-muted">Image missing</p>
          <p className="break-all font-mono text-[10px] text-muted/90">{src}</p>
        </div>
      )}
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-canvas/55 via-transparent to-canvas/10 dark:from-black/60 dark:to-black/15"
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-[2] opacity-0 transition duration-500 group-hover:opacity-100",
          lab &&
            "bg-[linear-gradient(105deg,transparent_38%,color-mix(in_srgb,var(--color-accent)_14%,transparent)_50%,transparent_62%)]",
        )}
        aria-hidden
      />
      {caption ? (
        <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 z-[3] flex justify-center px-4 pb-3 pt-6 sm:pb-3.5">
          <span className="max-w-[min(100%,42rem)] rounded-full border border-hairline/80 bg-elevated/95 px-3 py-1.5 text-center text-[10px] font-medium uppercase leading-snug tracking-[0.12em] text-muted shadow-panel backdrop-blur-md dark:bg-elevated/88">
            {caption}
          </span>
        </figcaption>
      ) : null}
    </>
    ),
    [alt, broken, caption, coarsePointer, lab, priority, sizes, src],
  );

  if (lab && !reduce) {
    const variants = cinematic ? imageRevealCinematic : imageReveal;
    const tiltShell = coarsePointer ? (
      <div className="absolute inset-0">{chrome}</div>
    ) : (
      <motion.div
        className="absolute inset-0 cursor-default"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onPointerMove={onPointerMove}
        onPointerLeave={resetTilt}
        onPointerCancel={resetTilt}
      >
        {chrome}
      </motion.div>
    );
    return (
      <motion.figure
        className={cn(
          "group relative isolate overflow-hidden rounded-3xl border border-hairline shadow-lift ring-1 ring-inset ring-[var(--ring-inset)]",
          !coarsePointer && "[perspective:1200px]",
          className,
        )}
        initial="hidden"
        whileInView="visible"
        viewport={
          cinematic
            ? { once: true, margin: "-16% 0px -22% 0px", amount: 0.12 }
            : { once: true, margin: "-12% 0px -16% 0px", amount: 0.14 }
        }
        variants={variants}
      >
        {tiltShell}
      </motion.figure>
    );
  }

  return (
    <figure
      className={cn(
        "relative isolate overflow-hidden rounded-3xl border border-hairline shadow-lift ring-1 ring-inset ring-[var(--ring-inset)]",
        className,
      )}
    >
      {chrome}
    </figure>
  );
}

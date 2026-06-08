"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Muted, looping clip (gameplay reel / short loop). Fills its ratio-locked parent.
 * - Lazy: plays only while in view (IntersectionObserver), pauses off-screen.
 * - Poster paints instantly; mp4 + optional webm sources.
 * - Reduced-motion → static poster only (video never loads).
 *
 * For the lightbox set `controls` (and optionally `autoPlay={false}`) to give a
 * full, user-driven player instead of an ambient loop.
 */
export function MediaVideo({
  src,
  webm,
  poster,
  title,
  controls = false,
  autoPlay = true,
  className,
}: {
  src: string;
  webm?: string;
  poster?: string;
  title: string;
  controls?: boolean;
  autoPlay?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!autoPlay) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [autoPlay]);

  // Reduced-motion ambient loop → poster only (a controllable player still renders).
  if (reduce && !controls) {
    return poster ? (
      <Image
        src={poster}
        alt={title}
        fill
        className={cn("object-cover object-center", className)}
        sizes="(max-width: 1024px) 90vw, 640px"
      />
    ) : null;
  }

  return (
    <video
      ref={ref}
      className={cn("absolute inset-0 h-full w-full object-cover object-center", className)}
      muted={!controls}
      loop={!controls}
      controls={controls}
      autoPlay={autoPlay && !reduce}
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={title}
    >
      {webm ? <source src={webm} type="video/webm" /> : null}
      <source src={src} type="video/mp4" />
    </video>
  );
}

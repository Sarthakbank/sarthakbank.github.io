"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

/**
 * Autoplay looping muted gameplay clip for a technique card.
 * - Lazy: only plays while in view (IntersectionObserver), pauses off-screen.
 * - Poster paints instantly; mp4 + optional webm sources.
 * - Reduced-motion → static poster only (no video loaded).
 * Fills its (relative, aspect) parent.
 */
export function TechniqueVideo({
  src,
  webm,
  poster,
  title,
}: {
  src: string;
  webm?: string;
  poster?: string;
  title: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (reduce) {
    return poster ? (
      <Image
        src={poster}
        alt={title}
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 90vw, 640px"
      />
    ) : null;
  }

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover object-center"
      muted
      loop
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

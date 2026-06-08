"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";
import type { ProjectWalkthroughBeat } from "@/content/projects/types";
import { innerCard } from "@/lib/appleInnerTokens";
import { cn } from "@/lib/cn";

const FLIP_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const AUTO_FLIP_MS = 5000;

/**
 * Apple-style 3D flip card for a single walkthrough beat.
 * Front = beat content + "Watch Gameplay"; back = lazy YouTube embed + "Back".
 * Auto-flips once, ~4.5s after it first becomes visible (unless the user acts
 * first, or reduced-motion is set). The iframe mounts only while flipped.
 *
 * Height is defined by the front (in normal flow); the back overlays it, so each
 * beat sizes to its own content with no fixed-height clipping.
 */
export function BeatFlipCard({ beat }: { beat: ProjectWalkthroughBeat }) {
  const reduce = useReducedMotion();
  const [flipped, setFlipped] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const watchRef = useRef<HTMLButtonElement>(null);
  const backRef = useRef<HTMLButtonElement>(null);
  const interactedRef = useRef(false);
  const autoFlipped = useRef(false);

  const mark = () => {
    interactedRef.current = true;
    setInteracted(true);
  };
  const toBack = () => {
    mark();
    setFlipped(true);
    requestAnimationFrame(() => backRef.current?.focus());
  };
  const toFront = () => {
    mark();
    setFlipped(false);
    requestAnimationFrame(() => watchRef.current?.focus());
  };

  // Auto-flip once, after the card has been visible for AUTO_FLIP_MS.
  useEffect(() => {
    if (reduce) return;
    const el = rootRef.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!autoFlipped.current && !interactedRef.current && !timer) {
            timer = setTimeout(() => {
              timer = null;
              if (!interactedRef.current) {
                autoFlipped.current = true;
                setFlipped(true);
              }
            }, AUTO_FLIP_MS);
          }
        } else if (timer) {
          clearTimeout(timer);
          timer = null;
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [reduce]);

  const pulse = !reduce && !flipped && !interacted;
  const src = `https://www.youtube-nocookie.com/embed/${beat.youtubeId}?rel=0&modestbranding=1&autoplay=1`;

  return (
    <div ref={rootRef} className="mx-auto max-w-3xl [perspective:1600px]">
      <div
        className="relative [transform-style:preserve-3d]"
        style={{
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: `transform ${reduce ? 0 : 820}ms ${FLIP_EASE}`,
        }}
      >
        {/* FRONT — defines the card height; content vertically centered for balance */}
        <div
          className={cn(
            innerCard,
            "relative flex min-h-[26rem] flex-col justify-center p-7 [backface-visibility:hidden] sm:min-h-[23rem] sm:p-9",
          )}
          aria-hidden={flipped}
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0a84c2]">
            {beat.summary}
          </p>
          <h3 className="mt-3 font-display text-[24px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[28px]">
            {beat.title}
          </h3>
          <p className="mt-4 text-pretty text-[15px] leading-relaxed text-[#6e6e73] sm:text-[16px]">
            {beat.body}
          </p>
          <motion.button
            ref={watchRef}
            type="button"
            onClick={toBack}
            tabIndex={flipped ? -1 : 0}
            animate={pulse ? { scale: [1, 1.045, 1] } : { scale: 1 }}
            transition={
              pulse
                ? { duration: 1.7, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.2 }
            }
            className="mt-7 inline-flex items-center gap-2 self-start rounded-full bg-[#0071e3] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_2px_12px_rgba(0,113,227,0.25)] outline-none transition-colors hover:bg-[#0077ed] focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2"
          >
            <Play className="h-4 w-4 fill-current" strokeWidth={0} aria-hidden />
            Watch Gameplay
          </motion.button>
        </div>

        {/* BACK — overlays the front; a true 16:9 video fits within (no stretch).
            The iframe mounts only while flipped. */}
        <div
          className="absolute inset-0 flex flex-col overflow-hidden rounded-[28px] bg-[#0b0b0c] shadow-[0_10px_40px_rgba(0,0,0,0.18)] [backface-visibility:hidden] [transform:rotateY(180deg)]"
          aria-hidden={!flipped}
        >
          <div className="flex flex-1 items-center justify-center overflow-hidden p-3 sm:p-4">
            <div className="relative mx-auto aspect-video h-full w-auto max-w-full overflow-hidden rounded-[14px] bg-black">
              {flipped ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={src}
                  title={`${beat.title} — gameplay`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : null}
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 border-t border-white/10 px-5 py-3">
            <span className="min-w-0 truncate text-[13px] font-semibold text-white/80">
              {beat.title}
            </span>
            <button
              ref={backRef}
              type="button"
              onClick={toFront}
              tabIndex={flipped ? 0 : -1}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[13px] font-semibold text-white outline-none ring-1 ring-inset ring-white/20 transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

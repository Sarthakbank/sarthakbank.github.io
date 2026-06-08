"use client";

import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Horizontal snap rail with peek + dot indicators + prev/next controls.
 * Same interaction grammar as the Home Featured Projects rail.
 * Optional autoplay (opt-in via autoPlayMs) pauses on hover / drag / touch /
 * wheel / keyboard focus / off-screen, and instantly jumps on wrap-around.
 */
export function CaseStudyRail({
  ariaLabel,
  cardClass,
  autoPlayMs,
  children,
}: {
  ariaLabel: string;
  cardClass?: string;
  /** When set (e.g. 4500), the rail auto-advances; omit for manual rails. */
  autoPlayMs?: number;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const items = Children.toArray(children);
  const count = items.length;

  const scrollToIndex = useCallback(
    (index: number, instant = false) => {
      const rail = railRef.current;
      if (!rail) return;
      const child = rail.children[index] as HTMLElement | undefined;
      if (!child) return;
      const padL = parseFloat(getComputedStyle(rail).paddingLeft) || 0;
      rail.scrollTo({
        left: child.offsetLeft - padL,
        behavior: reduce || instant ? "auto" : "smooth",
      });
      setActiveIndex(index);
    },
    [reduce],
  );

  const goPrev = useCallback(
    () => scrollToIndex(activeIndex <= 0 ? count - 1 : activeIndex - 1),
    [activeIndex, count, scrollToIndex],
  );
  const goNext = useCallback(
    () => scrollToIndex(activeIndex >= count - 1 ? 0 : activeIndex + 1),
    [activeIndex, count, scrollToIndex],
  );

  // Track which card is centered (drives dots).
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const onScroll = () => {
      const kids = Array.from(rail.children) as HTMLElement[];
      if (!kids.length) return;
      const padL = parseFloat(getComputedStyle(rail).paddingLeft) || 0;
      const pos = rail.scrollLeft + padL;
      let closest = 0;
      let min = Infinity;
      kids.forEach((el, i) => {
        const d = Math.abs(el.offsetLeft - pos);
        if (d < min) {
          min = d;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };
    onScroll();
    rail.addEventListener("scroll", onScroll, { passive: true });
    return () => rail.removeEventListener("scroll", onScroll);
  }, []);

  // ── Autoplay ──────────────────────────────────────────────
  const autoplayOn = !!autoPlayMs && !reduce && count > 1;
  const activeRef = useRef(0);
  const hover = useRef(false);
  const focused = useRef(false);
  const offscreen = useRef(false);
  const cooling = useRef(false);
  const coolTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    activeRef.current = activeIndex;
  }, [activeIndex]);

  const bumpInteraction = useCallback(() => {
    cooling.current = true;
    if (coolTimer.current) clearTimeout(coolTimer.current);
    coolTimer.current = setTimeout(() => {
      cooling.current = false;
    }, 4000);
  }, []);

  useEffect(() => () => {
    if (coolTimer.current) clearTimeout(coolTimer.current);
  }, []);

  // Pause when the rail is off-screen.
  useEffect(() => {
    if (!autoplayOn) return;
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        offscreen.current = !entry.isIntersecting;
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [autoplayOn]);

  useEffect(() => {
    if (!autoplayOn) return;
    const id = setInterval(() => {
      if (hover.current || focused.current || offscreen.current || cooling.current) return;
      const next = (activeRef.current + 1) % count;
      scrollToIndex(next, next === 0); // instant jump on wrap (no long sweep)
    }, autoPlayMs);
    return () => clearInterval(id);
  }, [autoplayOn, autoPlayMs, count, scrollToIndex]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => {
        hover.current = true;
      }}
      onMouseLeave={() => {
        hover.current = false;
      }}
      onPointerDown={autoplayOn ? bumpInteraction : undefined}
      onTouchStart={autoplayOn ? bumpInteraction : undefined}
      onWheel={autoplayOn ? bumpInteraction : undefined}
      onFocusCapture={() => {
        focused.current = true;
      }}
      onBlurCapture={() => {
        focused.current = false;
      }}
    >
      <div
        ref={railRef}
        className={cn(
          "flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 pt-1 sm:gap-6",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
        style={{ WebkitOverflowScrolling: "touch" }}
        aria-label={ariaLabel}
      >
        {items.map((child, i) => (
          <div key={i} className={cn("shrink-0 snap-start", cardClass)}>
            {child}
          </div>
        ))}
      </div>

      {count > 1 ? (
        <div className="mt-4 flex items-center justify-center gap-4 sm:justify-end">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8e8ed] text-[#1d1d1f] transition hover:bg-[#d2d2d7] active:scale-95"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.25} />
          </button>

          <div className="flex items-center gap-2.5" role="tablist" aria-label={ariaLabel}>
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Go to item ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={cn(
                  "rounded-full transition-all duration-300 ease-out",
                  i === activeIndex
                    ? "h-2.5 w-8 bg-[#1d1d1f]"
                    : "h-2.5 w-2.5 bg-[#d2d2d7] hover:bg-[#86868b]",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8e8ed] text-[#1d1d1f] transition hover:bg-[#d2d2d7] active:scale-95"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.25} />
          </button>
        </div>
      ) : null}
    </div>
  );
}

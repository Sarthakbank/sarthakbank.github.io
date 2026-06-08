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
 * Same interaction grammar as the Home Featured Projects rail; styled with the
 * existing Apple tokens. Reduced-motion → instant (non-smooth) scroll.
 */
export function CaseStudyRail({
  ariaLabel,
  cardClass,
  children,
}: {
  ariaLabel: string;
  /** Per-card width/snap class (controls how many peek into view). */
  cardClass?: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const railRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const items = Children.toArray(children);
  const count = items.length;

  const scrollToIndex = useCallback(
    (index: number) => {
      const rail = railRef.current;
      if (!rail) return;
      const child = rail.children[index] as HTMLElement | undefined;
      if (!child) return;
      const padL = parseFloat(getComputedStyle(rail).paddingLeft) || 0;
      rail.scrollTo({ left: child.offsetLeft - padL, behavior: reduce ? "auto" : "smooth" });
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

  return (
    <div className="relative">
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

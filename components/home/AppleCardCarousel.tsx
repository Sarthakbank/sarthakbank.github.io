"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { appleCarouselArrow } from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  /** Accessible name for the scroll region */
  ariaLabel: string;
  className?: string;
};

export function AppleCardCarousel({ children, ariaLabel, className }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, children]);

  const scroll = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-card]");
    const gap = 20;
    const step = card ? card.offsetWidth + gap : el.clientWidth * 0.85;
    el.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <div className={cn("relative", className)}>
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory py-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label={ariaLabel}
        role="region"
      >
        {children}
      </div>
      <div className="mt-5 flex items-center justify-end gap-2">
        <button
          type="button"
          className={appleCarouselArrow}
          aria-label="Scroll cards left"
          disabled={!canScrollLeft}
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden />
        </button>
        <button
          type="button"
          className={appleCarouselArrow}
          aria-label="Scroll cards right"
          disabled={!canScrollRight}
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} aria-hidden />
        </button>
      </div>
    </div>
  );
}

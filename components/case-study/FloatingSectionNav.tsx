"use client";

import { useEffect, useRef, useState } from "react";
import type { CaseStudyNavItem } from "@/content/types";
import { cn } from "@/lib/cn";

/**
 * Apple-style glass section nav for the case study.
 * Desktop: right-side translucent rail. Mobile: bottom glass bar + "Jump" sheet.
 * Single light design language — matches Home/About/Contact (no legacy/dark chrome).
 */
export function FloatingSectionNav({ items }: { items: CaseStudyNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    let raf = 0;
    // Position-based scroll spy: active = the last section whose top has crossed a
    // reference line ~33% down the viewport. Height-agnostic, so tall sections
    // (e.g. Techniques) activate correctly — no intersectionRatio bias.
    const compute = () => {
      raf = 0;
      const line = window.innerHeight * 0.33;
      let current = items[0]?.id ?? "";
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= line) current = item.id;
        else break; // sections are in document order
      }
      // Bottom-of-page guard — pin the last section when fully scrolled.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = items[items.length - 1]?.id ?? current;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [items]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  const activeLabel = items.find((i) => i.id === active)?.label ?? "";

  return (
    <>
      {/* Desktop — right-side glass rail */}
      <aside
        className="pointer-events-none fixed right-6 top-1/2 z-40 hidden w-[11.25rem] -translate-y-1/2 lg:block xl:right-10 xl:w-52 2xl:right-20"
        aria-label="Case study sections"
      >
        <nav className="pointer-events-auto flex max-h-[min(70dvh,26rem)] flex-col overflow-hidden rounded-[20px] border border-black/[0.04] bg-white/70 text-[#1d1d1f] shadow-[0_4px_24px_rgba(0,0,0,0.07),0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-inset ring-white/50 backdrop-blur-2xl backdrop-saturate-150">
          <div className="border-b border-black/[0.05] px-3.5 py-2.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#86868b]">
              Chapters
            </p>
          </div>
          <ul className="flex flex-col gap-0.5 overflow-y-auto overscroll-contain p-2">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "relative w-full rounded-lg py-2 pl-3.5 pr-2.5 text-left text-[12px] tracking-tight transition duration-200",
                    active === item.id
                      ? "bg-[#0071e3]/[0.10] font-semibold text-[#0071e3]"
                      : "font-medium text-[#6e6e73] hover:bg-black/[0.04] hover:text-[#1d1d1f]",
                  )}
                >
                  {active === item.id ? (
                    <span
                      className="absolute left-1 top-1/2 h-4 w-[3px] -translate-y-1/2 rounded-full bg-[#0071e3]"
                      aria-hidden
                    />
                  ) : null}
                  <span className="relative pl-2">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile — bottom glass bar */}
      <nav
        className={cn(
          "fixed left-1/2 z-40 flex w-[min(100vw-1.25rem,21.5rem)] -translate-x-1/2 items-center gap-2.5 rounded-[20px] border border-black/[0.04] bg-white/70 px-3.5 py-3 text-[#1d1d1f] shadow-[0_4px_24px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-inset ring-white/50 backdrop-blur-2xl backdrop-saturate-150 sm:w-[min(100vw-1.5rem,22rem)] lg:hidden",
          "bottom-[max(0.65rem,env(safe-area-inset-bottom,0px))]",
        )}
        aria-label="Case study sections"
      >
        <p className="min-w-0 flex-1 truncate text-left text-[14px] font-semibold leading-snug tracking-tight text-[#1d1d1f]">
          {activeLabel}
        </p>
        <details
          ref={detailsRef}
          className="relative shrink-0 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex min-h-[2.5rem] cursor-pointer list-none items-center justify-center rounded-full border border-black/[0.1] bg-[#f5f5f7] px-4 py-2 text-center text-[12px] font-semibold tracking-tight text-[#424245] transition hover:border-black/[0.18]">
            Jump
          </summary>
          <div className="absolute bottom-[calc(100%+0.5rem)] right-0 z-50 max-h-[min(46vh,18rem)] w-[min(calc(100vw-1.5rem),16rem)] overflow-y-auto overscroll-contain rounded-[20px] border border-black/[0.04] bg-white/80 p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.14)] ring-1 ring-inset ring-white/50 backdrop-blur-2xl backdrop-saturate-150">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "flex w-full rounded-lg px-3 py-2.5 text-left text-[13px] transition",
                  active === item.id
                    ? "bg-[#0071e3]/[0.10] font-semibold text-[#0071e3]"
                    : "font-medium text-[#1d1d1f] hover:bg-black/[0.04]",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </details>
      </nav>
    </>
  );
}

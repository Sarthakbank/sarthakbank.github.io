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
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-32% 0px -42% 0px",
        threshold: [0.1, 0.2, 0.35],
      },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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
        className="pointer-events-none fixed right-4 top-1/2 z-40 hidden w-[11.25rem] -translate-y-1/2 lg:block xl:right-8 xl:w-52 2xl:right-12"
        aria-label="Case study sections"
      >
        <nav className="pointer-events-auto flex max-h-[min(70dvh,26rem)] flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white/70 text-[#1d1d1f] shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-inset ring-white/40 backdrop-blur-xl">
          <div className="border-b border-black/[0.06] px-3.5 py-2.5">
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
                    "relative w-full rounded-lg py-2 pl-3.5 pr-2.5 text-left text-[12px] font-medium tracking-tight transition duration-200",
                    active === item.id
                      ? "bg-[#0071e3]/10 text-[#0071e3]"
                      : "text-[#6e6e73] hover:bg-black/[0.04] hover:text-[#1d1d1f]",
                  )}
                >
                  {active === item.id ? (
                    <span
                      className="absolute left-0 top-1/2 h-7 w-0.5 -translate-y-1/2 rounded-full bg-[#0071e3]"
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
          "fixed left-1/2 z-40 flex w-[min(100vw-1.25rem,21.5rem)] -translate-x-1/2 items-center gap-2.5 rounded-2xl border border-black/[0.06] bg-white/80 px-3.5 py-3 text-[#1d1d1f] shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:w-[min(100vw-1.5rem,22rem)] lg:hidden",
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
          <div className="absolute bottom-[calc(100%+0.5rem)] right-0 z-50 max-h-[min(46vh,18rem)] w-[min(calc(100vw-1.5rem),16rem)] overflow-y-auto overscroll-contain rounded-2xl border border-black/[0.06] bg-white/90 p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "flex w-full rounded-lg px-3 py-2.5 text-left text-[13px] font-medium transition",
                  active === item.id
                    ? "bg-[#0071e3]/10 text-[#0071e3]"
                    : "text-[#1d1d1f] hover:bg-black/[0.04]",
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

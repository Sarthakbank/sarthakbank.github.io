"use client";

import { useEffect, useRef, useState } from "react";
import type { CaseStudyNavItem } from "@/content/types";
import { cn } from "@/lib/cn";

export function FloatingSectionNav({
  items,
  editorial,
}: {
  items: CaseStudyNavItem[];
  /** Light editorial chrome (matches case study page tone) */
  editorial?: boolean;
}) {
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
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  const activeLabel = items.find((i) => i.id === active)?.label ?? "";

  return (
    <>
      <aside
        className="pointer-events-none fixed right-4 top-1/2 z-40 hidden w-[11.25rem] -translate-y-1/2 lg:block xl:right-8 xl:w-52 2xl:right-12"
        aria-label="Case study sections"
      >
        <nav
          className={cn(
            "pointer-events-auto flex max-h-[min(70dvh,26rem)] flex-col overflow-hidden rounded-2xl border shadow-md backdrop-blur-xl",
            editorial
              ? "border-black/[0.08] bg-white/95 text-[#1d1d1f] ring-0"
              : "border-hairline bg-elevated/92 shadow-lift ring-1 ring-inset ring-[var(--ring-inset)] dark:bg-elevated/78",
          )}
        >
          <div
            className={cn(
              "border-b px-3 py-2",
              editorial ? "border-black/[0.06]" : "border-hairline",
            )}
          >
            <p
              className={cn(
                "text-[10px] font-semibold uppercase tracking-[0.2em]",
                editorial ? "text-[#86868b]" : "text-muted",
              )}
            >
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
                    "relative w-full rounded-xl py-2 pl-3 pr-2 text-left text-[11px] font-semibold uppercase tracking-wide transition duration-200",
                    editorial
                      ? active === item.id
                        ? "bg-[#0071e3]/10 text-[#0071e3]"
                        : "text-[#6e6e73] hover:bg-black/[0.04] hover:text-[#1d1d1f]"
                      : active === item.id
                        ? "bg-accent/10 text-accent"
                        : "text-muted hover:bg-surface/80 hover:text-ink",
                  )}
                >
                  {active === item.id ? (
                    <span
                      className={cn(
                        "absolute left-0 top-1/2 h-7 w-0.5 -translate-y-1/2 rounded-full",
                        editorial ? "bg-[#0071e3]" : "bg-accent",
                      )}
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

      <nav
        className={cn(
          "fixed left-1/2 z-40 flex w-[min(100vw-1.25rem,21.5rem)] -translate-x-1/2 items-center gap-2.5 rounded-2xl border px-3.5 py-3 shadow-md backdrop-blur-xl sm:w-[min(100vw-1.5rem,22rem)] lg:hidden",
          "bottom-[max(0.65rem,env(safe-area-inset-bottom,0px))]",
          editorial
            ? "border-black/[0.08] bg-white/95 text-[#1d1d1f]"
            : "border-hairline bg-elevated/95 shadow-lift ring-1 ring-inset ring-[var(--ring-inset)] dark:bg-elevated/88",
        )}
        aria-label="Case study sections"
      >
        <p
          className={cn(
            "min-w-0 flex-1 truncate text-left text-[14px] font-semibold leading-snug tracking-tight",
            editorial ? "text-[#1d1d1f]" : "text-ink",
          )}
        >
          {activeLabel}
        </p>
        <details ref={detailsRef} className="relative shrink-0 [&_summary::-webkit-details-marker]:hidden">
          <summary
            className={cn(
              "flex min-h-[2.5rem] cursor-pointer list-none items-center justify-center rounded-full border px-3.5 py-2 text-center text-[11px] font-semibold uppercase tracking-wide transition active:bg-surface/80",
              editorial
                ? "border-black/[0.1] bg-[#f5f5f7] text-[#424245] hover:border-black/[0.18]"
                : "border-hairline bg-canvas/70 text-muted hover:border-accent/35 hover:text-ink dark:bg-canvas/50",
            )}
          >
            Jump
          </summary>
          <div
            className={cn(
              "absolute bottom-[calc(100%+0.5rem)] right-0 z-50 max-h-[min(46vh,18rem)] w-[min(calc(100vw-1.5rem),16rem)] overflow-y-auto overscroll-contain rounded-2xl border p-1.5 shadow-xl",
              editorial ? "border-black/[0.08] bg-white" : "border-hairline bg-canvas dark:bg-elevated",
            )}
          >
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "flex w-full rounded-xl px-3 py-2.5 text-left text-[13px] font-medium transition",
                  editorial
                    ? active === item.id
                      ? "bg-[#0071e3]/10 text-[#0071e3]"
                      : "text-[#1d1d1f] hover:bg-black/[0.04]"
                    : active === item.id
                      ? "bg-accent/12 text-accent"
                      : "text-ink hover:bg-surface/80",
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

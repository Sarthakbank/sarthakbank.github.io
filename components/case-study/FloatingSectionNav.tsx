"use client";

import { useEffect, useState } from "react";
import type { CaseStudyNavItem } from "@/content/types";
import { cn } from "@/lib/cn";

export function FloatingSectionNav({ items }: { items: CaseStudyNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

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
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.08, 0.15, 0.25, 0.35, 0.5],
      },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <aside
        className="pointer-events-none fixed right-4 top-1/2 z-40 hidden w-[11.5rem] -translate-y-1/2 lg:block xl:right-8 xl:w-52 2xl:right-12"
        aria-label="Case study sections"
      >
        <nav className="pointer-events-auto flex max-h-[72vh] flex-col overflow-hidden rounded-2xl border border-hairline bg-elevated/90 shadow-lift ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur-2xl dark:bg-elevated/75">
          <div className="border-b border-hairline px-3 py-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
              On this page
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
                    active === item.id
                      ? "bg-accent/12 text-accent"
                      : "text-muted hover:bg-surface/80 hover:text-ink",
                  )}
                >
                  {active === item.id ? (
                    <span
                      className="absolute left-0 top-1/2 h-8 w-0.5 -translate-y-1/2 rounded-full bg-accent shadow-glow"
                      aria-hidden
                    />
                  ) : null}
                  <span className="relative">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <nav
        className="fixed bottom-4 left-1/2 z-40 flex max-w-[min(100vw-1.5rem,36rem)] -translate-x-1/2 gap-1 overflow-x-auto rounded-2xl border border-hairline bg-elevated/95 px-2 py-2 shadow-lift ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur-2xl lg:hidden"
        aria-label="Case study sections"
      >
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollTo(item.id)}
            className={cn(
              "shrink-0 rounded-xl px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide transition duration-200",
              active === item.id
                ? "bg-accent text-white shadow-panel"
                : "text-muted hover:bg-surface/90 hover:text-ink",
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </>
  );
}

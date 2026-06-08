"use client";

import { useState } from "react";
import type { ProjectWalkthroughBeat } from "@/content/projects/types";
import { cn } from "@/lib/cn";
import { BeatFlipCard } from "./BeatFlipCard";

/**
 * Horizontal beat selector + the active beat's flip card.
 * One active beat at a time; centered on desktop, horizontally scrollable on
 * mobile. Re-keying the card by active index gives each selection a fresh flip
 * state, so the "auto-flip once" timer restarts per selection.
 */
export function BeatRail({ beats }: { beats: readonly ProjectWalkthroughBeat[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Beats"
        className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {beats.map((b, i) => {
          const short = b.title.split(" — ")[0];
          const name = b.title.split(" — ")[1] ?? "";
          const isActive = i === active;
          return (
            <button
              key={b.title}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={cn(
                "shrink-0 snap-start rounded-full px-4 py-2 text-[13px] font-semibold outline-none transition focus-visible:ring-2 focus-visible:ring-[#0071e3]",
                isActive
                  ? "bg-[#0071e3] text-white shadow-[0_2px_12px_rgba(0,113,227,0.25)]"
                  : "bg-white text-[#6e6e73] ring-1 ring-inset ring-black/[0.08] hover:text-[#1d1d1f]",
              )}
            >
              <span className="lg:hidden">{short}</span>
              <span className="hidden lg:inline">
                {short}
                {name ? ` · ${name}` : ""}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        <BeatFlipCard key={active} beat={beats[active]} />
      </div>
    </div>
  );
}

"use client";

import { ChevronDown } from "lucide-react";
import type { HomeDesignPrinciple } from "@/content/home";
import { stitchGlassPanel } from "@/lib/stitchTokens";
import { cn } from "@/lib/cn";

type Props = {
  principle: HomeDesignPrinciple;
  expanded: boolean;
  onToggle: () => void;
};

/** Stitch glass principle card — header chevron expands detail. */
export function DesignPrincipleCard({ principle, expanded, onToggle }: Props) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        stitchGlassPanel,
        "flex min-h-[220px] w-full flex-col p-6 text-left transition-[box-shadow,border-color] duration-300 md:min-h-[240px] md:p-8",
        "hover:shadow-[0_0_20px_0_rgba(0,209,255,0.12)]",
        expanded && "border-[#00d1ff]/30 shadow-[0_0_24px_0_rgba(0,209,255,0.14)]",
      )}
      aria-expanded={expanded}
    >
      <div
        className={cn("mb-5 h-1 w-full rounded-full bg-gradient-to-r", principle.topGradient)}
        aria-hidden
      />
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-[clamp(1.25rem,2vw+0.5rem,1.75rem)] font-semibold leading-snug tracking-[-0.01em] text-[#e1e2e8]">
          {principle.title.replace(" Design", "")}
        </h3>
        <ChevronDown
          className={cn(
            "mt-0.5 h-5 w-5 shrink-0 text-[#00d1ff] transition-transform duration-300",
            expanded && "rotate-180",
          )}
          strokeWidth={2}
          aria-hidden
        />
      </div>
      <p className="mt-4 text-[15px] leading-[1.6] text-[#bbc9cf] md:text-base">{principle.summary}</p>
      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
          expanded ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/[0.06] pt-5">
            <p className="text-pretty text-[15px] leading-[1.65] text-[#bbc9cf]/90">
              {principle.detail}
            </p>
            {principle.bullets?.length ? (
              <ul className="mt-4 space-y-2.5 font-mono text-[12px] leading-relaxed text-[#859399]">
                {principle.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#00d1ff]" aria-hidden>
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </button>
  );
}

"use client";

import { useId } from "react";
import { ChevronDown } from "lucide-react";
import type { HomeDesignPrinciple } from "@/content/home";
import { stitchGlassPanel } from "@/lib/stitchTokens";
import { cn } from "@/lib/cn";

type Props = {
  principle: HomeDesignPrinciple;
  expanded: boolean;
  onToggle: () => void;
};

/** Stitch glass principle card — fixed height; detail reveals in reserved slot. */
export function DesignPrincipleCard({ principle, expanded, onToggle }: Props) {
  const panelId = useId();
  const titleId = useId();

  return (
    <button
      type="button"
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      aria-expanded={expanded}
      aria-labelledby={titleId}
      aria-controls={panelId}
      className={cn(
        stitchGlassPanel,
        "flex h-[336px] w-full flex-col overflow-hidden p-6 text-left transition-[box-shadow,border-color] duration-300 md:h-[356px] md:p-8",
        "hover:shadow-[0_0_20px_0_rgba(0,209,255,0.12)]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00d1ff]",
        expanded && "border-[#00d1ff]/30 shadow-[0_0_24px_0_rgba(0,209,255,0.14)]",
      )}
    >
      <div
        className={cn("mb-5 h-1 w-full shrink-0 rounded-full bg-gradient-to-r", principle.topGradient)}
        aria-hidden
      />
      <div className="flex shrink-0 items-start justify-between gap-4">
        <h3
          id={titleId}
          className="font-display text-[clamp(1.25rem,2vw+0.5rem,1.75rem)] font-semibold leading-snug tracking-[-0.01em] text-[#e1e2e8]"
        >
          {principle.title.replace(" Design", "")}
        </h3>
        <ChevronDown
          className={cn(
            "mt-0.5 h-5 w-5 shrink-0 text-[#00d1ff] transition-transform duration-300 ease-out",
            expanded && "rotate-180",
          )}
          strokeWidth={2}
          aria-hidden
        />
      </div>
      <p className="mt-4 line-clamp-4 shrink-0 text-[15px] leading-[1.6] text-[#bbc9cf] md:text-base">
        {principle.summary}
      </p>

      <div
        id={panelId}
        role="region"
        aria-labelledby={titleId}
        className="relative mt-5 h-[148px] shrink-0"
      >
        <div
          className={cn(
            "absolute inset-0 overflow-y-auto overscroll-contain rounded-sm transition-opacity duration-300 ease-out",
            expanded ? "opacity-100" : "pointer-events-none opacity-0",
          )}
          aria-hidden={!expanded}
        >
          <div className="border-t border-white/[0.06] pt-5">
            <p className="text-pretty text-[15px] leading-[1.65] text-[#bbc9cf]/90">{principle.detail}</p>
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

      <span className="sr-only">
        {expanded ? "Collapse" : "Expand"} {principle.title}
      </span>
    </button>
  );
}

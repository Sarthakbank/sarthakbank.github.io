"use client";

import { useId, useState } from "react";
import { Eye, Plus, RefreshCw, Users, type LucideIcon } from "lucide-react";
import type { HomeDesignPrinciple } from "@/content/home";
import { cn } from "@/lib/cn";

const principleIcon = {
  users: Users,
  eye: Eye,
  refresh: RefreshCw,
} as const satisfies Record<HomeDesignPrinciple["icon"], LucideIcon>;

type Props = {
  principle: HomeDesignPrinciple;
  expanded: boolean;
  onToggle: () => void;
};

export function DesignPrincipleCard({ principle, expanded, onToggle }: Props) {
  const panelId = useId();
  const Icon = principleIcon[principle.icon];

  return (
    <div
      className={cn(
        "flex min-h-[268px] h-full flex-col overflow-hidden rounded-2xl border bg-[#141416] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.55)] transition-[border-color,box-shadow] duration-300 sm:min-h-[280px]",
        principle.border,
        expanded && "border-white/20 shadow-[0_12px_40px_-10px_rgba(10,132,255,0.15)]",
      )}
    >
      <div className={cn("h-[5.25rem] shrink-0 bg-gradient-to-r sm:h-[5.5rem]", principle.topGradient)} />
      <div className="flex flex-1 flex-col items-center px-5 pb-7 pt-8 text-center sm:px-6 sm:pb-8 sm:pt-9">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#1c1c1e] text-[#0a84ff] shadow-sm">
          <Icon className="h-6 w-6" strokeWidth={1.65} aria-hidden />
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
          {principle.title}
        </h3>

        <div
          className={cn(
            "grid w-full transition-[grid-template-rows,opacity,margin] duration-300 ease-out",
            expanded ? "mt-5 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <p className="text-pretty text-[14px] leading-relaxed text-[#a1a1a6]">{principle.detail}</p>
            {principle.bullets?.length ? (
              <ul className="mt-4 space-y-2 text-left text-[13px] text-[#86868b]">
                {principle.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#0a84ff]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <button
          type="button"
          className="mt-8 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#1c1c1e] text-[#a1a1a6] shadow-sm transition hover:border-white/25 hover:text-white"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <Plus
            className={cn("h-4 w-4 transition-transform duration-300", expanded && "rotate-45")}
            strokeWidth={2}
            aria-hidden
          />
          <span className="sr-only">{expanded ? "Collapse" : "Expand"} {principle.title}</span>
        </button>
        <span id={panelId} className="sr-only">
          {principle.detail}
        </span>
      </div>
    </div>
  );
}

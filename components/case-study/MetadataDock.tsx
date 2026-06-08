"use client";

import {
  Box,
  Briefcase,
  Cpu,
  Gamepad2,
  MousePointer2,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { ProjectMetaIcon, ProjectMetaItem } from "@/content/projects/types";
import { AppleDock } from "@/components/shared/AppleDock";
import { innerAccents, type InnerAccentKey } from "@/lib/appleInnerTokens";
import { cn } from "@/lib/cn";

const metaIcons: Record<ProjectMetaIcon, LucideIcon> = {
  genre: Gamepad2,
  type: Box,
  engine: Cpu,
  tools: Wrench,
  iterations: Workflow,
  playtests: MousePointer2,
  role: Briefcase,
};

const accentCycle: InnerAccentKey[] = ["blue", "indigo", "graphite", "green", "graphite"];
const accentAt = (i: number) => innerAccents[accentCycle[i % accentCycle.length]];

export function MetadataDock({ items }: { items: readonly ProjectMetaItem[] }) {
  // Mobile / touch / reduced-motion → simple horizontal scroll row (no hover dependency).
  const fallback = (
    <ul
      className={cn(
        "flex gap-3 overflow-x-auto pb-2",
        "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
      )}
      aria-label="Project metadata"
    >
      {items.map((item, i) => {
        const Icon = metaIcons[item.icon];
        const accent = accentAt(i);
        return (
          <li
            key={item.label}
            className="flex shrink-0 items-center gap-3 rounded-2xl border border-black/[0.05] bg-white px-4 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.07)]"
          >
            <span
              className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-xl", accent.badge)}
              aria-hidden
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-[#86868b]">
                {item.label}
              </span>
              <span className="block whitespace-nowrap text-[14px] font-semibold text-[#1d1d1f]">
                {item.value}
              </span>
            </span>
          </li>
        );
      })}
    </ul>
  );

  // Desktop → macOS-style floating dock: icon-primary, proximity magnification, tooltip on hover/focus.
  return (
    <div className="flex justify-center">
      <AppleDock
        items={items}
        getKey={(item) => item.label}
        getLabel={(item) => item.label}
        getValue={(item) => item.value}
        renderIcon={(item, i) => {
          const Icon = metaIcons[item.icon];
          const accent = accentAt(i);
          return (
            <span
              className={cn(
                "flex h-full w-full items-center justify-center rounded-2xl ring-1",
                accent.badge,
              )}
            >
              <Icon className="h-[42%] w-[42%]" strokeWidth={1.75} aria-hidden />
            </span>
          );
        }}
        ariaLabel="Project metadata"
        className="h-[104px] gap-3 rounded-[28px] border border-black/[0.06] bg-white/60 px-4 pb-3 ring-1 ring-inset ring-white/40 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
        fallback={fallback}
      />
    </div>
  );
}

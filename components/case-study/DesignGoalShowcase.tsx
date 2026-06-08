"use client";

import Image from "next/image";
import { Box, Compass, Sparkles, Swords, Workflow, type LucideIcon } from "lucide-react";
import type { ProjectDesignGoal } from "@/content/projects/types";
import { innerAccents, innerCard, innerCardHover, type InnerAccentKey } from "@/lib/appleInnerTokens";
import { cn } from "@/lib/cn";
import { CaseStudyRail } from "./CaseStudyRail";

const goalIcons: LucideIcon[] = [Swords, Sparkles, Compass, Workflow, Box];
const accentCycle: InnerAccentKey[] = ["blue", "indigo", "graphite", "green", "graphite"];

/**
 * Larger, more premium than Inspiration cards — these represent Sarthak's own
 * work: bigger surface, image-led (when available), heavier title.
 */
function GoalCard({ goal, index }: { goal: ProjectDesignGoal; index: number }) {
  const accent = innerAccents[accentCycle[index % accentCycle.length]];
  const Icon = goalIcons[index % goalIcons.length];
  return (
    <article className={cn(innerCard, innerCardHover, "group flex h-full flex-col overflow-hidden")}>
      {goal.image ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={goal.image}
            alt={goal.imageAlt ?? goal.title}
            fill
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 88vw, 640px"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-8 sm:p-9">
        <span
          className={cn(
            "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105",
            accent.badge,
          )}
          aria-hidden
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <h3 className="font-sans text-[20px] font-bold leading-snug tracking-tight text-[#1d1d1f] sm:text-[22px]">
          {goal.title}
        </h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#6e6e73] sm:text-[16px]">
          {goal.body}
        </p>
      </div>
    </article>
  );
}

export function DesignGoalShowcase({ goals }: { goals: readonly ProjectDesignGoal[] }) {
  return (
    <CaseStudyRail ariaLabel="Design goals" cardClass="w-[88%] sm:w-[66%] lg:w-[48%]">
      {goals.map((goal, i) => (
        <GoalCard key={goal.title} goal={goal} index={i} />
      ))}
    </CaseStudyRail>
  );
}

"use client";

import { Plus } from "lucide-react";
import type { HomeDesignPrinciple } from "@/content/home";
import { applePlusButton, principleAccents } from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";

type Props = {
  principle: HomeDesignPrinciple;
  onOpenDetail: () => void;
};

export function PrincipleCard({ principle, onOpenDetail }: Props) {
  const accent = principleAccents[principle.accent];

  return (
    <article className="relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-7 shadow-[0_2px_20px_rgba(0,0,0,0.06)] sm:min-h-[380px] sm:rounded-3xl sm:p-8 lg:min-h-[440px]">
      <h3
        className={cn(
          "font-display text-[clamp(1.15rem,1.6vw+0.3rem,1.45rem)] font-bold uppercase leading-[1.18] tracking-[-0.01em]",
          "bg-gradient-to-br bg-clip-text text-transparent",
          accent.titleGradient,
        )}
      >
        {principle.title}
      </h3>

      <p className="mt-5 flex-1 text-[14px] leading-[1.6] text-[#6e6e73] sm:text-[15px] sm:leading-[1.65]">
        {principle.body}
      </p>

      <button
        type="button"
        onClick={onOpenDetail}
        className={cn(applePlusButton, "absolute bottom-6 right-6 sm:bottom-7 sm:right-7")}
        aria-label={`More about ${principle.title}`}
      >
        <Plus className="h-4 w-4" strokeWidth={2.5} aria-hidden />
      </button>
    </article>
  );
}

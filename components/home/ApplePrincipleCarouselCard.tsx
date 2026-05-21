"use client";

import { Eye, Plus, RefreshCw, Users } from "lucide-react";
import type { HeadlineHighlight, HomeDesignPrinciple } from "@/content/home";
import {
  appleCarouselShell,
  applePlusButton,
  carouselPrincipleSlide,
  principleAccents,
} from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";

const icons = {
  users: Users,
  eye: Eye,
  refresh: RefreshCw,
} as const;

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function HeadlineWithHighlights({
  headline,
  highlights,
}: {
  headline: string;
  highlights: readonly HeadlineHighlight[];
}) {
  if (!highlights.length) {
    return (
      <p className="font-display text-[clamp(1.2rem,1.75vw+0.35rem,1.6rem)] font-semibold leading-[1.22] tracking-[-0.02em] text-[#1d1d1f]">
        {headline}
      </p>
    );
  }

  const sorted = [...highlights].sort((a, b) => b.text.length - a.text.length);
  const pattern = sorted.map((h) => escapeRegex(h.text)).join("|");
  const parts = headline.split(new RegExp(`(${pattern})`, "gi"));

  return (
    <p className="text-pretty break-words font-display text-[clamp(1.2rem,1.75vw+0.35rem,1.6rem)] font-semibold leading-[1.22] tracking-[-0.02em] text-[#1d1d1f]">
      {parts.map((part, i) => {
        if (!part) return null;
        const match = sorted.find((h) => h.text.toLowerCase() === part.toLowerCase());
        if (match) {
          return (
            <span key={`${part}-${i}`} className={match.colorClass}>
              {part}
            </span>
          );
        }
        return <span key={`${part}-${i}`}>{part}</span>;
      })}
    </p>
  );
}

type Props = {
  principle: HomeDesignPrinciple;
  onOpenDetail: () => void;
};

export function ApplePrincipleCarouselCard({ principle, onOpenDetail }: Props) {
  const Icon = icons[principle.icon];
  const accent = principleAccents[principle.accent];

  return (
    <article data-carousel-card className={cn(carouselPrincipleSlide, "shrink-0")}>
      <div className={cn(appleCarouselShell, "h-[320px] sm:h-[340px]", "overflow-hidden")}>
        <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6e6e73]">
          {principle.title}
        </p>
        <div
          className={cn(
            "mt-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
            accent.iconBadge,
          )}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
        </div>
        <div className="mt-5 min-h-0 min-w-0 flex-1 pr-12">
          <HeadlineWithHighlights headline={principle.headline} highlights={principle.headlineHighlights} />
        </div>
        <button
          type="button"
          onClick={onOpenDetail}
          className={cn(applePlusButton, "absolute bottom-7 right-7 sm:bottom-8 sm:right-8")}
          aria-label={`More about ${principle.title}`}
        >
          <Plus className="h-4 w-4" strokeWidth={2.5} aria-hidden />
        </button>
      </div>
    </article>
  );
}

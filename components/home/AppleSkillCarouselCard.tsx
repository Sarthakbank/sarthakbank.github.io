"use client";

import { SkillIcon } from "@/components/icons/SkillIcon";
import type { SkillAccentKey } from "@/lib/appleHomeTokens";
import {
  appleCarouselShell,
  carouselSkillSlide,
  skillAccents,
} from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";

type Props = {
  skill: string;
  subtitle: string;
  accent: SkillAccentKey;
};

export function AppleSkillCarouselCard({ skill, subtitle, accent }: Props) {
  const colors = skillAccents[accent];

  return (
    <article data-carousel-card className={cn(carouselSkillSlide, "shrink-0")}>
      <div
        className={cn(
          appleCarouselShell,
          "h-[300px] items-center justify-center px-6 text-center sm:h-[320px] sm:px-8",
        )}
      >
        <div className={cn("mx-auto h-1 w-10 rounded-full bg-gradient-to-r", colors.bar)} aria-hidden />
        <div
          className={cn(
            "mx-auto mt-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
            colors.badge,
          )}
        >
          <SkillIcon skill={skill} className={cn("h-5 w-5", colors.icon)} />
        </div>
        <h3 className="mt-5 w-full max-w-[220px] text-pretty break-words font-display text-[clamp(0.95rem,1.4vw+0.3rem,1.125rem)] font-semibold leading-snug tracking-[-0.02em] text-[#1d1d1f]">
          {skill}
        </h3>
        <p className={cn("mt-2 w-full max-w-[220px] text-pretty text-[13px] leading-relaxed", colors.subtitle)}>
          {subtitle}
        </p>
      </div>
    </article>
  );
}

"use client";

import Image from "next/image";
import type { ProjectInspirationItem } from "@/content/projects/types";
import { innerCard, innerCardHover } from "@/lib/appleInnerTokens";
import { cn } from "@/lib/cn";
import { CaseStudyRail } from "./CaseStudyRail";

/** Image-first reference card with overlaid title/body (Apple-TV grammar). */
function InspirationCard({ item }: { item: ProjectInspirationItem }) {
  if (item.image) {
    return (
      <article
        className={cn(
          innerCard,
          innerCardHover,
          "group relative isolate flex h-full min-h-[300px] flex-col justify-end overflow-hidden sm:min-h-[330px]",
        )}
      >
        <Image
          src={item.image}
          alt={item.imageAlt ?? item.title}
          fill
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 80vw, 440px"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
          aria-hidden
        />
        <div className="relative z-10 p-6 sm:p-7">
          <h3 className="font-sans text-[18px] font-bold tracking-tight text-white sm:text-[19px]">
            {item.title}
          </h3>
          <p className="mt-2 text-[14px] leading-relaxed text-white/85 sm:text-[15px]">
            {item.body}
          </p>
        </div>
      </article>
    );
  }

  // Fallback while imagery is pending — clean text card (no broken state).
  return (
    <article
      className={cn(
        innerCard,
        innerCardHover,
        "flex h-full min-h-[300px] flex-col p-7 sm:min-h-[330px]",
      )}
    >
      <h3 className="font-sans text-[18px] font-bold tracking-tight text-[#1d1d1f]">
        {item.title}
      </h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#6e6e73]">{item.body}</p>
    </article>
  );
}

export function InspirationLane({
  category,
  items,
  accentBadge,
}: {
  category: string;
  items: readonly ProjectInspirationItem[];
  /** Existing accent badge classes (keeps Games/Film colors consistent). */
  accentBadge: string;
}) {
  return (
    <div>
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em]",
          accentBadge,
        )}
      >
        {category}
      </span>
      <div className="mt-5">
        <CaseStudyRail ariaLabel={`${category} references`} cardClass="w-[80%] sm:w-[56%] lg:w-[40%]">
          {items.map((item) => (
            <InspirationCard key={item.title} item={item} />
          ))}
        </CaseStudyRail>
      </div>
    </div>
  );
}

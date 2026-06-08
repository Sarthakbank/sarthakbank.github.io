"use client";

import Image from "next/image";
import type {
  ProjectInspirationGroup,
  ProjectInspirationItem,
} from "@/content/projects/types";
import { innerAccents, innerCard, innerCardHover } from "@/lib/appleInnerTokens";
import { cn } from "@/lib/cn";
import { CaseStudyRail } from "./CaseStudyRail";

const categoryBadge: Record<string, string> = {
  Games: innerAccents.blue.badge,
  Film: innerAccents.indigo.badge,
};

const CHIP =
  "inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em]";

/** Large cinematic, image-first reference card — artwork dominates, text is a slim band. */
function InspirationCard({
  item,
  category,
}: {
  item: ProjectInspirationItem;
  category: string;
}) {
  if (item.image) {
    return (
      <article
        className={cn(
          innerCard,
          innerCardHover,
          "group relative isolate aspect-[16/10] w-full overflow-hidden",
        )}
      >
        <Image
          src={item.image}
          alt={item.imageAlt ?? item.title}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 86vw, (max-width: 1024px) 62vw, 640px"
        />
        {/* Slim bottom scrim — keeps most of the artwork visible */}
        <div
          className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-black/80 via-black/30 to-transparent"
          aria-hidden
        />
        <span
          className={cn(
            CHIP,
            "absolute left-5 top-5 z-10 bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm",
          )}
        >
          {category}
        </span>
        <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
          <h3 className="font-display text-[19px] font-bold tracking-tight text-white sm:text-[21px]">
            {item.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-[13.5px] leading-relaxed text-white/85 sm:text-[14.5px]">
            {item.body}
          </p>
        </div>
      </article>
    );
  }

  // Fallback — text card (no broken state if an image is ever missing).
  return (
    <article
      className={cn(
        innerCard,
        innerCardHover,
        "flex aspect-[16/10] w-full flex-col justify-end p-6 sm:p-7",
      )}
    >
      <span className={cn(CHIP, categoryBadge[category] ?? innerAccents.graphite.badge)}>
        {category}
      </span>
      <h3 className="mt-4 font-display text-[19px] font-bold tracking-tight text-[#1d1d1f]">
        {item.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-[#6e6e73]">{item.body}</p>
    </article>
  );
}

/**
 * Inspiration as a large image-first carousel (Apple-TV / Home Featured grammar):
 * autoplay every 4.5s, pause on interaction, instant wrap.
 */
export function InspirationCarousel({
  groups,
}: {
  groups: readonly ProjectInspirationGroup[];
}) {
  const cards = groups.flatMap((group) =>
    group.items.map((item) => ({ item, category: group.category })),
  );

  return (
    <CaseStudyRail
      ariaLabel="Inspiration references"
      cardClass="w-[86%] sm:w-[62%] lg:w-[46%]"
      autoPlayMs={4500}
    >
      {cards.map(({ item, category }) => (
        <InspirationCard key={item.title} item={item} category={category} />
      ))}
    </CaseStudyRail>
  );
}

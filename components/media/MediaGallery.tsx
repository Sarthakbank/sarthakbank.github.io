"use client";

import { useState } from "react";
import { CaseStudyRail } from "@/components/case-study/CaseStudyRail";
import { AppleReveal } from "@/components/shared/AppleReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { AppleGradient } from "@/lib/appleType";
import { innerBody } from "@/lib/appleInnerTokens";
import { cn } from "@/lib/cn";
import { isOpenable, mediaKey, type MediaGroup } from "@/content/media/types";
import { MediaSlot } from "./MediaSlot";
import { MediaLightbox } from "./MediaLightbox";

/**
 * Content-driven media section: SectionHeading + a responsive grid (landscape
 * screens / clips) or a reel rail (portrait 9:16 loops), with an accessible
 * lightbox. Placeholders render but aren't openable. Layout-agnostic — swap
 * placeholders for real media later with no structural change.
 */
export function MediaGallery({
  group,
  gradient = "blue-cyan",
}: {
  group: MediaGroup;
  gradient?: AppleGradient;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // The lightbox navigates only openable items; map a thumbnail to its position there.
  const openable = group.items.filter(isOpenable);
  const openAt = (itemIndex: number) => {
    const item = group.items[itemIndex];
    const pos = openable.indexOf(item);
    if (pos >= 0) setOpenIndex(pos);
  };

  const isReel = group.layout === "reel";

  return (
    <>
      <AppleReveal>
        <SectionHeading
          as="h2"
          variant="section"
          eyebrow={group.eyebrow}
          lead={group.lead}
          title={group.title}
          gradient={gradient}
        />
        {group.body ? <p className={cn("mt-4 max-w-2xl text-pretty", innerBody)}>{group.body}</p> : null}
      </AppleReveal>

      {isReel ? (
        <div className="mt-10">
          <CaseStudyRail ariaLabel={group.title} cardClass="w-[64%] sm:w-[38%] lg:w-[26%]">
            {group.items.map((item, i) => (
              <MediaSlot
                key={mediaKey(item, i)}
                item={item}
                ratio="9/16"
                onOpen={isOpenable(item) ? () => openAt(i) : undefined}
                sizes="(max-width: 768px) 64vw, 320px"
              />
            ))}
          </CaseStudyRail>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {group.items.map((item, i) => (
            <AppleReveal key={mediaKey(item, i)} delay={Math.min((i % 3) * 0.06, 0.18)}>
              <MediaSlot
                item={item}
                ratio="16/9"
                onOpen={isOpenable(item) ? () => openAt(i) : undefined}
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 33vw"
              />
            </AppleReveal>
          ))}
        </div>
      )}

      <MediaLightbox
        items={openable}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </>
  );
}

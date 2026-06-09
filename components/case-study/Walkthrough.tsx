import Image from "next/image";
import type { ProjectWalkthrough } from "@/content/projects/types";
import { AppleReveal } from "@/components/shared/AppleReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { innerBody, innerCard, innerEyebrow } from "@/lib/appleInnerTokens";
import { cn } from "@/lib/cn";
import { BeatRail } from "./BeatRail";

const SUB_TITLE =
  "mt-2 font-display text-[24px] font-semibold tracking-tight text-[#1d1d1f] sm:text-[26px]";

/**
 * Walkthrough section: intro + two stacked, equally-weighted blocks (pacing graph,
 * level map) + the interactive beat rail. Reuses the case-study design system.
 */
export function Walkthrough({ data }: { data: ProjectWalkthrough }) {
  return (
    <>
      <AppleReveal>
        <SectionHeading
          as="h2"
          variant="section"
          eyebrow="Walkthrough"
          lead="Beat by beat"
          title="How the level plays"
          gradient="blue-cyan"
        />
        <p className={cn("mt-4 max-w-3xl text-pretty", innerBody)}>{data.intro}</p>
      </AppleReveal>

      <div className="mt-12 space-y-14 sm:space-y-16">
        {/* Block A — Pacing Graph */}
        <AppleReveal>
          <div>
            <p className={innerEyebrow}>Intensity curve</p>
            <h3 className={SUB_TITLE}>Pacing Graph</h3>
            {data.pacing.caption ? (
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#6e6e73] sm:text-[16px]">
                {data.pacing.caption}
              </p>
            ) : null}
            <figure className="mx-auto mt-6 max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b0c] shadow-[0_12px_48px_rgba(0,0,0,0.2)]">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={data.pacing.image}
                  alt={data.pacing.imageAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 896px) 92vw, 896px"
                />
              </div>
            </figure>
          </div>
        </AppleReveal>

        {/* Block B — Level Map */}
        <AppleReveal>
          <div>
            <p className={innerEyebrow}>Routes &amp; flow</p>
            <h3 className={SUB_TITLE}>Level Map</h3>
            {data.levelMap.caption ? (
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#6e6e73] sm:text-[16px]">
                {data.levelMap.caption}
              </p>
            ) : null}
            <figure className={cn(innerCard, "mx-auto mt-6 max-w-4xl overflow-hidden")}>
              <div className="relative aspect-[3/2] w-full bg-white">
                <Image
                  src={data.levelMap.image}
                  alt={data.levelMap.imageAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 896px) 92vw, 896px"
                />
              </div>
              {data.levelMap.legend ? (
                <figcaption className="flex flex-wrap gap-x-5 gap-y-1.5 border-t border-black/[0.06] px-6 py-4">
                  {data.levelMap.legend.map((l) => (
                    <span
                      key={l.label}
                      className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#6e6e73]"
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: l.color }}
                        aria-hidden
                      />
                      {l.label}
                    </span>
                  ))}
                </figcaption>
              ) : null}
            </figure>
          </div>
        </AppleReveal>
      </div>

      <div className="mt-14 sm:mt-16">
        <AppleReveal>
          <BeatRail beats={data.beats} />
        </AppleReveal>
      </div>
    </>
  );
}

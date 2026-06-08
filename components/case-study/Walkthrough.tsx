import Image from "next/image";
import type { ProjectWalkthrough } from "@/content/projects/types";
import { AppleReveal } from "@/components/shared/AppleReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { innerBody, innerCard } from "@/lib/appleInnerTokens";
import { cn } from "@/lib/cn";
import { BeatRail } from "./BeatRail";

/**
 * Walkthrough section: intro + pacing graph (dark) + level map (light) + the
 * interactive beat rail. Reuses the case-study design system; no new primitives.
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

      <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-7">
        {/* Pacing graph — dark asset, dark frame */}
        <AppleReveal>
          <figure className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0b0b0c] shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={data.pacing.image}
                alt={data.pacing.imageAlt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 560px"
              />
            </div>
            {data.pacing.caption ? (
              <figcaption className="border-t border-white/10 px-5 py-3 text-[13px] leading-relaxed text-white/70">
                {data.pacing.caption}
              </figcaption>
            ) : null}
          </figure>
        </AppleReveal>

        {/* Level map — light asset, light card */}
        <AppleReveal delay={0.06}>
          <figure className={cn(innerCard, "overflow-hidden")}>
            <div className="relative aspect-[3/2] w-full bg-white">
              <Image
                src={data.levelMap.image}
                alt={data.levelMap.imageAlt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 560px"
              />
            </div>
            <figcaption className="px-5 py-4">
              {data.levelMap.legend ? (
                <div className="mb-2 flex flex-wrap gap-x-4 gap-y-1.5">
                  {data.levelMap.legend.map((l) => (
                    <span
                      key={l.label}
                      className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#6e6e73]"
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: l.color }}
                        aria-hidden
                      />
                      {l.label}
                    </span>
                  ))}
                </div>
              ) : null}
              {data.levelMap.caption ? (
                <p className="text-[13px] leading-relaxed text-[#6e6e73]">{data.levelMap.caption}</p>
              ) : null}
            </figcaption>
          </figure>
        </AppleReveal>
      </div>

      <div className="mt-12">
        <AppleReveal>
          <BeatRail beats={data.beats} />
        </AppleReveal>
      </div>
    </>
  );
}

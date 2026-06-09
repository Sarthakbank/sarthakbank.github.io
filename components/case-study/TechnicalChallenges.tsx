import { Lightbulb } from "lucide-react";
import type { ProjectTechnicalChallenges } from "@/content/projects/types";
import { AppleReveal } from "@/components/shared/AppleReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { innerBody, innerCard } from "@/lib/appleInnerTokens";
import { cn } from "@/lib/cn";

export function TechnicalChallenges({ data }: { data: ProjectTechnicalChallenges }) {
  return (
    <>
      <AppleReveal>
        <SectionHeading
          as="h2"
          variant="section"
          eyebrow="Technical challenges"
          lead="Constraints"
          title="that shaped the design"
          gradient="blue-cyan"
        />
        <p className={cn("mt-4 max-w-3xl text-pretty", innerBody)}>{data.intro}</p>
      </AppleReveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
        {data.challenges.map((c, i) => (
          <AppleReveal key={c.title} delay={i * 0.06} className="h-full">
            <div className={cn(innerCard, "flex h-full flex-col p-7 sm:p-8")}>
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1d1d1f]/[0.06] text-[15px] font-semibold text-[#1d1d1f] ring-1 ring-black/10">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-[19px] font-semibold tracking-tight text-[#1d1d1f] sm:text-[20px]">
                {c.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#6e6e73] sm:text-[16px]">{c.body}</p>
            </div>
          </AppleReveal>
        ))}
      </div>

      <AppleReveal delay={0.1}>
        <div className="mt-6 rounded-[24px] border border-[#0071e3]/15 bg-[#0071e3]/[0.04] p-7 sm:p-8">
          <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0071e3]">
            <Lightbulb className="h-4 w-4" strokeWidth={2} aria-hidden />
            Design decision
          </p>
          <p className="mt-3 text-pretty text-[15px] leading-relaxed text-[#424245] sm:text-[16px]">
            {data.resolution}
          </p>
        </div>
      </AppleReveal>
    </>
  );
}

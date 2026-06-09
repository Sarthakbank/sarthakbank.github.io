import type { ProjectReflection } from "@/content/projects/types";
import { AppleReveal } from "@/components/shared/AppleReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/cn";

function Column({ label, paragraphs }: { label: string; paragraphs: readonly string[] }) {
  return (
    <div>
      <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6e6e73]">{label}</h3>
      <div className="mt-4 space-y-4">
        {paragraphs.map((p) => (
          <p key={p} className="text-[15px] leading-relaxed text-[#424245] sm:text-[16px]">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

export function CaseStudyReflection({ data }: { data: ProjectReflection }) {
  return (
    <>
      <AppleReveal>
        <SectionHeading
          as="h2"
          variant="section"
          eyebrow="Reflection"
          lead="What the level"
          title="taught me"
          gradient="blue-purple"
        />
      </AppleReveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <AppleReveal>
          <Column label="Reflection" paragraphs={data.reflection} />
        </AppleReveal>
        <AppleReveal delay={0.06}>
          <Column label="What I would do differently" paragraphs={data.differently} />
        </AppleReveal>
      </div>

      {data.closingQuote ? (
        <AppleReveal delay={0.12}>
          <blockquote
            className={cn(
              "mt-12 rounded-[28px] border border-black/[0.05] bg-white p-8 sm:p-10",
              "shadow-[0_1px_3px_rgba(0,0,0,0.05),0_12px_32px_rgba(0,0,0,0.08)]",
            )}
          >
            <p className="text-pretty font-display text-[20px] font-semibold leading-snug tracking-tight text-[#1d1d1f] sm:text-[24px]">
              “{data.closingQuote}”
            </p>
          </blockquote>
        </AppleReveal>
      ) : null}
    </>
  );
}

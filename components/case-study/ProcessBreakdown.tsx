import { Fragment } from "react";
import { ArrowRight, Gamepad2, Hammer, RefreshCw, Wrench } from "lucide-react";
import type {
  ProjectProcess,
  ProjectProcessIteration,
} from "@/content/projects/types";
import { MediaSlot } from "@/components/media/MediaSlot";
import { AppleReveal } from "@/components/shared/AppleReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { innerAccents, innerBody, innerCard, type InnerAccentKey } from "@/lib/appleInnerTokens";
import { cn } from "@/lib/cn";

/** The build → test → improve → retest loop shown above Beat 1. */
const WORKFLOW = [
  { label: "Build", Icon: Hammer },
  { label: "Playtest", Icon: Gamepad2 },
  { label: "Improve", Icon: Wrench },
  { label: "Retest", Icon: RefreshCw },
] as const;

/** Problem → Iteration → Solution → Outcome, each with its own accent. */
const STAGES: { key: keyof ProjectProcessIteration; label: string; accent: InnerAccentKey }[] = [
  { key: "problem", label: "Problem", accent: "red" },
  { key: "iteration", label: "Iteration", accent: "orange" },
  { key: "solution", label: "Solution", accent: "blue" },
  { key: "outcome", label: "Outcome", accent: "green" },
];

function Workflow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 rounded-[24px] border border-black/[0.05] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_30px_rgba(0,0,0,0.06)] sm:gap-x-3 sm:p-5">
      {WORKFLOW.map((w, i) => (
        <Fragment key={w.label}>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f7] px-3.5 py-2 text-[13px] font-semibold text-[#1d1d1f] sm:px-4">
            <w.Icon className="h-4 w-4 text-[#0071e3]" strokeWidth={2} aria-hidden />
            {w.label}
          </span>
          {i < WORKFLOW.length - 1 ? (
            <ArrowRight className="h-4 w-4 shrink-0 text-[#86868b]" strokeWidth={2.25} aria-hidden />
          ) : (
            <span
              className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#86868b]"
              title="…and repeat"
            >
              <RefreshCw className="h-4 w-4 text-[#86868b]" strokeWidth={2} aria-hidden />
              repeat
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}

function Iteration({ it }: { it: ProjectProcessIteration }) {
  return (
    <div className="space-y-3 border-l-2 border-black/[0.06] pl-5">
      {STAGES.map(({ key, label, accent }) => {
        const text = it[key];
        if (!text) return null;
        return (
          <div key={key} className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
            <span
              className={cn(
                "inline-flex h-fit shrink-0 items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] sm:w-[88px] sm:justify-center",
                innerAccents[accent].badge,
              )}
            >
              {label}
            </span>
            <p className="text-[14.5px] leading-relaxed text-[#424245] sm:text-[15px]">{text}</p>
          </div>
        );
      })}
    </div>
  );
}

export function ProcessBreakdown({ data }: { data: ProjectProcess }) {
  return (
    <>
      <AppleReveal>
        <SectionHeading
          as="h2"
          variant="section"
          eyebrow="Process breakdown · Playtest & iterations"
          lead="Built through"
          title="playtesting"
          gradient="blue-cyan"
        />
        <p className={cn("mt-4 max-w-3xl text-pretty", innerBody)}>{data.intro}</p>
      </AppleReveal>

      <AppleReveal delay={0.06} className="mt-8">
        <Workflow />
      </AppleReveal>

      {/* Timeline — every beat fully visible (no accordion) */}
      <div className="relative mt-12">
        {/* vertical rail (desktop) */}
        <div
          className="absolute left-[19px] top-3 bottom-3 hidden w-px bg-black/[0.08] sm:block"
          aria-hidden
        />
        <div className="space-y-6 sm:space-y-8">
          {data.beats.map((beat, bi) => (
            <AppleReveal key={beat.title} delay={Math.min(bi * 0.03, 0.15)}>
              <div className="relative sm:pl-[60px]">
                {/* rail node */}
                <span
                  className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full bg-[#0071e3] text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(0,113,227,0.35)] sm:flex"
                  aria-hidden
                >
                  {bi + 1}
                </span>

                <article className={cn(innerCard, "overflow-hidden lg:flex lg:items-stretch")}>
                  {/* GIF-ready media slot */}
                  {beat.media ? (
                    <div className="p-5 sm:p-6 lg:w-[42%] lg:shrink-0">
                      <MediaSlot
                        item={beat.media}
                        ratio="16/9"
                        sizes="(max-width: 1024px) 90vw, 460px"
                      />
                    </div>
                  ) : null}

                  {/* content */}
                  <div className="flex flex-1 flex-col p-6 pt-1 sm:p-8 sm:pt-2 lg:pt-8">
                    <h3 className="font-display text-[20px] font-semibold tracking-tight text-[#1d1d1f] sm:text-[22px]">
                      {beat.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] font-medium text-[#86868b]">{beat.summary}</p>
                    <div className="mt-6 space-y-6">
                      {beat.iterations.map((it, ii) => (
                        <Iteration key={ii} it={it} />
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            </AppleReveal>
          ))}
        </div>
      </div>
    </>
  );
}

import type { ProjectFullGameplay } from "@/content/projects/types";
import { AppleReveal } from "@/components/shared/AppleReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { YouTubeFacade } from "@/components/media/YouTubeFacade";
import { innerBody } from "@/lib/appleInnerTokens";
import { cn } from "@/lib/cn";

/**
 * Full Gameplay Walkthrough — the complete playthrough, framed like the hero
 * trailer (lazy YouTube facade, poster-first). Premium and intentional.
 */
export function FullGameplay({ data }: { data: ProjectFullGameplay }) {
  return (
    <>
      <AppleReveal>
        <SectionHeading
          as="h2"
          variant="section"
          eyebrow={data.eyebrow}
          lead="Full gameplay"
          title="walkthrough"
          gradient="blue-purple"
        />
        <p className={cn("mt-4 max-w-3xl text-pretty", innerBody)}>{data.description}</p>
      </AppleReveal>

      <AppleReveal delay={0.1}>
        <div className="group relative mt-8 overflow-hidden rounded-[32px] border border-black/[0.05] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.10)]">
          <div className="relative aspect-[16/9] w-full">
            <YouTubeFacade
              id={data.youtubeId}
              poster={data.poster}
              title={`${data.title} — full playthrough`}
            />
          </div>
        </div>
      </AppleReveal>
    </>
  );
}

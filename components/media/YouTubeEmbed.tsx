"use client";

import { cn } from "@/lib/cn";

type Props = {
  videoId: string;
  title: string;
  /** Shown above iframe — mark as TEMP / replace */
  caption?: string;
  className?: string;
};

/**
 * Static-export friendly iframe embed (no server).
 * TEMP: swap `videoId` / titles in `content/demoMedia.ts` for project footage.
 */
export function YouTubeEmbed({
  videoId,
  title,
  caption = "Temporary embed — replace with project footage",
  className,
}: Props) {
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;

  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-3xl border border-hairline shadow-lift ring-1 ring-inset ring-[var(--ring-inset)]",
        className,
      )}
    >
      <div className="relative aspect-video w-full bg-surface/80">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <figcaption className="border-t border-hairline bg-elevated/90 px-4 py-3 backdrop-blur-md dark:bg-elevated/70">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
          {caption}
        </p>
        <p className="mt-1 text-center text-xs leading-snug text-ink/90">{title}</p>
      </figcaption>
    </figure>
  );
}

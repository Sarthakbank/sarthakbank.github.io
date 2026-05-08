"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import { cn } from "@/lib/cn";
import { demoVideoCategory, type DemoVideoCategory } from "@/content/demoMedia";

type Props = {
  videoId: string;
  watchUrl: string;
  posterSrc: string;
  title: string;
  caption: string;
  disclaimer: string;
  category: DemoVideoCategory;
  className?: string;
};

/**
 * Reference / mood / placeholder video: poster-first, optional embed on demand.
 * Static-export friendly; never implies third-party footage is the author’s project work.
 */
export function YouTubeEmbed({
  videoId,
  watchUrl,
  posterSrc,
  title,
  caption,
  disclaimer,
  category,
  className,
}: Props) {
  const [embedActive, setEmbedActive] = useState(false);
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;

  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-3xl border border-hairline shadow-lift ring-1 ring-inset ring-[var(--ring-inset)]",
        className,
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-surface via-elevated/90 to-surface">
        {!embedActive ? (
          <>
            <Image
              src={posterSrc}
              alt=""
              role="presentation"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1280px) 960px, 100vw"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/80 via-transparent to-canvas/15 dark:from-black/80 dark:to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-end gap-3 px-4 pb-6 pt-12 sm:flex-row sm:justify-center sm:pb-7">
              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-xl border border-hairline bg-elevated/95 px-4 py-3 text-xs font-semibold text-ink shadow-panel backdrop-blur-md transition hover:border-accent/40 sm:w-auto"
              >
                <ExternalLink className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                Watch reference video
              </a>
              <button
                type="button"
                onClick={() => setEmbedActive(true)}
                className="pointer-events-auto inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-xl border border-accent/35 bg-accent/10 px-4 py-3 text-xs font-semibold text-ink shadow-panel backdrop-blur-md transition hover:bg-accent/15 sm:w-auto"
              >
                <Play className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                Play embedded preview
              </button>
            </div>
          </>
        ) : (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
      </div>

      <div className="flex flex-col gap-2 border-t border-hairline bg-elevated/95 px-4 py-2.5 backdrop-blur-md dark:bg-elevated/85 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <span className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-muted sm:text-left">
          {demoVideoCategory[category]}
        </span>
        {embedActive ? (
          <button
            type="button"
            onClick={() => setEmbedActive(false)}
            className="text-center text-[11px] font-semibold text-accent underline-offset-2 hover:underline sm:text-right"
          >
            Close preview
          </button>
        ) : null}
      </div>

      <figcaption className="space-y-1 border-t border-hairline px-4 py-3 text-center sm:px-5 sm:py-3.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">{caption}</p>
        <p className="text-sm font-medium leading-snug text-ink">{title}</p>
        <p className="text-[11px] leading-relaxed text-muted">{disclaimer}</p>
      </figcaption>
    </figure>
  );
}

"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
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
 * Reference / mood YouTube embed with local poster, load reveal, and external fallback.
 * Static-export friendly. Does not claim third-party footage as project work.
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
  const [frameReady, setFrameReady] = useState(false);
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;

  const onFrameLoad = useCallback(() => {
    setFrameReady(true);
  }, []);

  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-3xl border border-hairline shadow-lift ring-1 ring-inset ring-[var(--ring-inset)]",
        className,
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-surface via-elevated/80 to-surface">
        <Image
          src={posterSrc}
          alt=""
          role="presentation"
          fill
          className={cn(
            "object-cover transition-opacity duration-500 ease-out",
            frameReady ? "opacity-0" : "opacity-100",
          )}
          sizes="(min-width: 1280px) 960px, 100vw"
          priority={false}
        />
        <iframe
          className={cn(
            "absolute inset-0 h-full w-full transition-opacity duration-500 ease-out",
            frameReady ? "opacity-100" : "opacity-0",
          )}
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={onFrameLoad}
        />
        {!frameReady ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-t from-canvas/90 via-canvas/25 to-transparent dark:from-black/85 dark:via-transparent">
            <span className="flex items-center gap-2 rounded-full border border-hairline bg-elevated/95 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-muted shadow-panel backdrop-blur-md">
              <Play className="h-3.5 w-3.5 text-accent" aria-hidden />
              Loading preview…
            </span>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 border-t border-hairline bg-elevated/95 px-4 py-3 backdrop-blur-md dark:bg-elevated/80 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-hairline bg-surface/60 px-4 py-2.5 text-xs font-semibold text-ink shadow-panel transition hover:border-accent/40 hover:bg-elevated"
        >
          <ExternalLink className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
          Watch on YouTube
        </a>
        <span className="text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-muted sm:text-right">
          {demoVideoCategory[category]}
        </span>
      </div>

      <figcaption className="space-y-1.5 border-t border-hairline px-4 py-3 text-center sm:px-5 sm:py-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">{caption}</p>
        <p className="text-sm font-medium leading-snug text-ink">{title}</p>
        <p className="text-[11px] leading-relaxed text-muted">{disclaimer}</p>
      </figcaption>
    </figure>
  );
}

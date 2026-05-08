"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Scene frame for local `/media/demo/...` plates. Base fill + error fallback
 * avoids empty black boxes; overlays stay light for a crisp dark mode read.
 */
export function TempSceneImage({
  src,
  alt,
  caption = "Demo plate",
  className,
  priority,
  sizes = "100vw",
}: Props) {
  const [broken, setBroken] = useState(false);

  return (
    <figure
      className={cn(
        "relative isolate overflow-hidden rounded-3xl border border-hairline shadow-lift ring-1 ring-inset ring-[var(--ring-inset)]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-surface via-elevated/90 to-surface dark:via-elevated/70"
        aria-hidden
      />
      {!broken ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-center"
          onError={() => setBroken(true)}
        />
      ) : (
        <div className="relative z-[1] flex min-h-[12rem] w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-surface to-muted/20 px-6 py-16 text-center">
          <p className="text-xs font-semibold text-muted">Image missing</p>
          <p className="break-all font-mono text-[10px] text-muted/90">{src}</p>
        </div>
      )}
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-canvas/55 via-transparent to-canvas/10 dark:from-black/60 dark:to-black/15"
        aria-hidden
      />
      <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 z-[3] flex justify-center px-4 pb-3 pt-6 sm:pb-3.5">
        <span className="max-w-[min(100%,42rem)] rounded-full border border-hairline/80 bg-elevated/95 px-3 py-1.5 text-center text-[10px] font-medium uppercase leading-snug tracking-[0.12em] text-muted shadow-panel backdrop-blur-md dark:bg-elevated/88">
          {caption}
        </span>
      </figcaption>
    </figure>
  );
}

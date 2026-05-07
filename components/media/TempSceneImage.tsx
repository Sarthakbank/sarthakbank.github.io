"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  /** Short label — prefer “Demo plate” / replace hints */
  caption?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Portfolio scene frame — local `/media/demo/...` or future `/media/...` shots.
 * Base gradient + load fallback avoids empty black boxes on missing files.
 */
export function TempSceneImage({
  src,
  alt,
  caption = "Demo visual — replace with project media",
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
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-surface via-elevated/80 to-surface"
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
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-canvas/65 via-transparent to-canvas/15 dark:from-black/70 dark:via-transparent dark:to-black/20"
        aria-hidden
      />
      <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 z-[3] flex justify-center px-4 pb-3.5 pt-8 sm:pb-4">
        <span className="max-w-[95%] rounded-full border border-hairline/90 bg-elevated/95 px-3 py-1.5 text-center text-[10px] font-semibold uppercase leading-snug tracking-[0.14em] text-muted shadow-panel backdrop-blur-md dark:bg-elevated/90">
          {caption}
        </span>
      </figcaption>
    </figure>
  );
}

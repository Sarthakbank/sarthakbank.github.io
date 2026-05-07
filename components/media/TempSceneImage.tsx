"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  /** Shown as a small ribbon — clarifies temporary sourcing */
  caption?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Remote placeholder for atmospheric portfolio visuals.
 * Swap `src` to local `/public/...` when real project media exists.
 */
export function TempSceneImage({
  src,
  alt,
  caption = "Temporary mood visual — replace with project media",
  className,
  priority,
  sizes = "100vw",
}: Props) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-3xl border border-hairline shadow-lift ring-1 ring-inset ring-[var(--ring-inset)]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/85 via-canvas/10 to-transparent dark:from-black/80 dark:via-transparent" />
      <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 flex justify-center px-4 pb-4 pt-10">
        <span className="rounded-full border border-hairline bg-elevated/90 px-3 py-1 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-muted shadow-panel backdrop-blur-md">
          {caption}
        </span>
      </figcaption>
    </figure>
  );
}

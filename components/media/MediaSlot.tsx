"use client";

import Image from "next/image";
import { Maximize2, Play } from "lucide-react";
import { ratioClass, type MediaItem, type MediaRatio } from "@/content/media/types";
import { cn } from "@/lib/cn";
import { ApplePlaceholder } from "./ApplePlaceholder";
import { MediaVideo } from "./MediaVideo";
import { YouTubeFacade } from "./YouTubeFacade";

/**
 * Renders a single MediaItem inside a ratio-locked box (no layout shift).
 *
 * Two contexts:
 *  - thumbnail (default): compact, lazy. If `onOpen` is provided, openable items
 *    (image / youtube / video) become a button that opens the lightbox.
 *  - lightbox (`variant="lightbox"`): full-size, video gets controls, YouTube
 *    auto-activates its iframe.
 */
export function MediaSlot({
  item,
  ratio,
  variant = "thumb",
  onOpen,
  sizes,
  className,
}: {
  item: MediaItem;
  /** Overrides the item's own ratio (e.g. uniform grid cells). */
  ratio?: MediaRatio;
  variant?: "thumb" | "lightbox";
  onOpen?: () => void;
  sizes?: string;
  className?: string;
}) {
  const isLightbox = variant === "lightbox";
  const r = ratio ?? item.ratio ?? "16/9";
  const box = cn(
    "relative w-full overflow-hidden",
    isLightbox ? "rounded-[20px]" : "rounded-[20px] border border-black/[0.06] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_30px_rgba(0,0,0,0.08)]",
    ratioClass[r],
    className,
  );

  const inner = (() => {
    switch (item.kind) {
      case "image":
        return (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            priority={false}
            className="object-cover object-center"
            sizes={sizes ?? (isLightbox ? "(max-width: 1024px) 92vw, 1100px" : "(max-width: 768px) 90vw, 33vw")}
          />
        );
      case "video":
        return (
          <MediaVideo
            src={item.src}
            webm={item.webm}
            poster={item.poster}
            title={item.alt}
            controls={isLightbox}
            autoPlay={!isLightbox}
          />
        );
      case "youtube":
        return <YouTubeFacade id={item.id} poster={item.poster} title={item.title} autoPlayOnActivate={isLightbox} />;
      case "placeholder":
        return <ApplePlaceholder title={item.title} kind={item.placeholderKind ?? "image"} />;
    }
  })();

  // Lightbox / non-openable / no handler → plain ratio box.
  // (YouTube manages its own activation, so it is never wrapped in the open-button.)
  if (isLightbox || !onOpen || item.kind === "placeholder" || item.kind === "youtube") {
    return <div className={box}>{inner}</div>;
  }

  // Openable thumbnail → button overlay (image / video).
  const OpenIcon = item.kind === "video" ? Play : Maximize2;
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${item.kind === "video" ? "clip" : "image"}: ${item.alt}`}
      className={cn(box, "group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]")}
    >
      {inner}
      <span
        className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-[#1d1d1f] opacity-0 shadow-[0_4px_14px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 group-hover:opacity-100"
        aria-hidden
      >
        <OpenIcon className={cn("h-4 w-4", item.kind === "video" && "ml-0.5 fill-current")} strokeWidth={item.kind === "video" ? 0 : 2} />
      </span>
    </button>
  );
}

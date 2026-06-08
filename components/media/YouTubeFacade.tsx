"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Lazy YouTube facade — Apple light style. Paints only the poster + a play badge
 * until the user clicks, then mounts a single youtube-nocookie iframe. Never loads
 * an iframe on mount (static-export safe, no third-party JS until requested).
 * Fills its ratio-locked parent.
 */
export function YouTubeFacade({
  id,
  poster,
  title,
  autoPlayOnActivate = true,
  start,
  className,
}: {
  id: string;
  poster: string;
  title: string;
  /** Append autoplay=1 once the user activates (they initiated playback). */
  autoPlayOnActivate?: boolean;
  /** Start playback at this many seconds in. */
  start?: number;
  className?: string;
}) {
  const [active, setActive] = useState(false);
  const src = `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1${
    autoPlayOnActivate ? "&autoplay=1" : ""
  }${start ? `&start=${start}` : ""}`;

  if (active) {
    return (
      <iframe
        className={cn("absolute inset-0 h-full w-full", className)}
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Play video: ${title}`}
      className={cn(
        "group absolute inset-0 h-full w-full overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]",
        className,
      )}
    >
      <Image
        src={poster}
        alt=""
        role="presentation"
        fill
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        sizes="(max-width: 1024px) 90vw, 960px"
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden />
      <span
        className="pointer-events-none absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1d1d1f] shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition duration-300 group-hover:scale-105 group-hover:bg-white"
        aria-hidden
      >
        <Play className="ml-0.5 h-6 w-6 fill-current" strokeWidth={0} />
      </span>
    </button>
  );
}

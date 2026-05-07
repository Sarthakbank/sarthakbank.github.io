"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { MediaPlaceholder } from "./MediaPlaceholder";

const PROFILE_SRC = "/media/profile/portrait.png";

/**
 * Approved local portrait. Object position crops bottom-right to reduce
 * distraction from edge marks (e.g. sparkle) while keeping face centered.
 */
export function ProfilePortrait({
  className,
  priority,
  /** Lighter chrome when nested inside another card */
  embedded,
}: {
  className?: string;
  priority?: boolean;
  embedded?: boolean;
}) {
  const [broken, setBroken] = useState(false);
  const r = embedded ? "rounded-2xl" : "rounded-3xl";

  if (broken) {
    return (
      <MediaPlaceholder
        title="Profile portrait"
        ratio="portrait"
        tone="accent"
        spec="Add public/media/profile/portrait.png"
      />
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden border border-hairline bg-surface/40 shadow-lift ring-1 ring-inset ring-[var(--ring-inset)]",
        "dark:bg-canvas/50",
        r,
        embedded && "shadow-panel ring-0",
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/30 via-transparent to-transparent dark:from-black/40",
          r,
        )}
      />
      {!embedded ? (
        <div
          className={cn(
            "pointer-events-none absolute -inset-px shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--color-accent)_22%,transparent)]",
            r,
          )}
        />
      ) : null}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-warn/5 opacity-80",
          r,
        )}
      />
      <div
        className={cn(
          "relative aspect-[3/4] w-full max-h-[min(72vh,560px)] sm:max-h-[620px]",
          embedded && "max-h-[min(56vh,480px)] sm:max-h-[520px]",
        )}
      >
        <Image
          src={PROFILE_SRC}
          alt="Sarthak Bankar"
          fill
          priority={priority}
          className="object-cover object-[50%_14%] scale-[1.08] sm:object-[50%_12%] sm:scale-[1.06]"
          sizes="(min-width: 1024px) 420px, 90vw"
          onError={() => setBroken(true)}
        />
      </div>
    </div>
  );
}

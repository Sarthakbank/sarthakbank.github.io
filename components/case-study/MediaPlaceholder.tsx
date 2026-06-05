"use client";

import { Clapperboard, ImageIcon, Play } from "lucide-react";
import { cn } from "@/lib/cn";

type MediaPlaceholderKind = "video" | "gif" | "image";

const iconFor: Record<MediaPlaceholderKind, typeof ImageIcon> = {
  video: Play,
  gif: Clapperboard,
  image: ImageIcon,
};

/**
 * Premium "coming soon" media slot — used wherever real screenshots / GIFs /
 * video thumbnails aren't available yet. Renders a soft gradient card with an
 * icon + label instead of an empty box.
 */
export function MediaPlaceholder({
  label,
  kind = "image",
  className,
}: {
  label: string;
  kind?: MediaPlaceholderKind;
  className?: string;
}) {
  const Icon = iconFor[kind];

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-[24px] border border-black/[0.06]",
        "bg-[linear-gradient(135deg,#f5f5f7_0%,#ececf0_45%,#e7e9f2_100%)]",
        className,
      )}
      aria-label={label}
    >
      {/* Soft accent glows */}
      <div
        className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#0071e3]/[0.10] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-12 -right-8 h-44 w-44 rounded-full bg-[#af52de]/[0.08] blur-3xl"
        aria-hidden
      />
      <div className="relative flex flex-col items-center gap-3 px-6 py-10 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#6e6e73] shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
        </span>
        <span className="text-[13px] font-semibold tracking-[0.01em] text-[#6e6e73]">
          {label}
        </span>
      </div>
    </div>
  );
}

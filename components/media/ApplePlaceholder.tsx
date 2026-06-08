import { Clapperboard, ImageIcon, Play } from "lucide-react";
import { cn } from "@/lib/cn";

type PlaceholderKind = "image" | "video" | "gif";

const iconFor: Record<PlaceholderKind, typeof ImageIcon> = {
  image: ImageIcon,
  video: Play,
  gif: Clapperboard,
};

/**
 * Apple light-style "coming soon" media slot — soft gradient + blue/purple glows
 * + icon + label. Fills its ratio-locked parent (absolute inset-0). Used wherever
 * a real image/clip/video isn't available yet, so empty slots still look intentional.
 */
export function ApplePlaceholder({
  title,
  kind = "image",
  className,
}: {
  title: string;
  kind?: PlaceholderKind;
  className?: string;
}) {
  const Icon = iconFor[kind];

  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center overflow-hidden",
        "bg-[linear-gradient(135deg,#f5f5f7_0%,#ececf0_45%,#e7e9f2_100%)]",
        className,
      )}
      role="img"
      aria-label={title}
    >
      <div
        className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#0071e3]/[0.10] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-12 -right-8 h-44 w-44 rounded-full bg-[#af52de]/[0.08] blur-3xl"
        aria-hidden
      />
      <div className="relative flex flex-col items-center gap-3 px-6 py-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#6e6e73] shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
        </span>
        <span className="text-[13px] font-semibold tracking-[0.01em] text-[#6e6e73]">{title}</span>
      </div>
    </div>
  );
}

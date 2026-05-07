import { cn } from "@/lib/cn";

type Ratio = "video" | "wide" | "cinematic" | "square" | "portrait";

const ratioClass: Record<Ratio, string> = {
  video: "aspect-video min-h-[168px] sm:min-h-[200px]",
  wide: "aspect-[21/9] min-h-[180px] sm:min-h-[220px]",
  cinematic:
    "aspect-[2.35/1] w-full min-h-[200px] sm:min-h-[280px] lg:min-h-[320px]",
  square: "aspect-square min-h-[200px]",
  portrait: "aspect-[3/4] min-h-[260px] sm:min-h-[320px]",
};

type PlaceholderTone = "neutral" | "accent" | "warn" | "success";

const toneRing: Record<PlaceholderTone, string> = {
  neutral: "ring-accent/20",
  accent: "ring-accent/35",
  warn: "ring-warn/30",
  success: "ring-success/30",
};

const toneGlow: Record<PlaceholderTone, string> = {
  neutral: "from-accent/[0.07] via-transparent to-warn/[0.06]",
  accent: "from-accent/[0.12] via-transparent to-accent/[0.04]",
  warn: "from-warn/[0.1] via-transparent to-warn/[0.03]",
  success: "from-success/[0.1] via-transparent to-success/[0.04]",
};

export function MediaPlaceholder({
  title,
  ratio = "video",
  tone = "neutral",
  spec,
  className,
  /** @deprecated use `title` — kept for backward compatibility */
  label,
}: {
  /** Short human-readable name for the slot, e.g. "Hero frame" */
  title?: string;
  ratio?: Ratio;
  tone?: PlaceholderTone;
  /** Optional technical hint, e.g. "21:9 · 2400px+ recommended" */
  spec?: string;
  className?: string;
  label?: string;
}) {
  const displayTitle = title ?? label ?? "Media";
  return (
    <div
      className={cn(
        "group relative flex w-full flex-col overflow-hidden rounded-3xl",
        "border border-hairline bg-gradient-to-b from-elevated/95 to-surface/80",
        "shadow-lift ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur-sm",
        "dark:from-elevated/90 dark:to-canvas/40",
        ratioClass[ratio],
        toneRing[tone],
        className,
      )}
      role="img"
      aria-label={displayTitle}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-90",
          toneGlow[tone],
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-card-shine opacity-60 dark:opacity-40" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055] dark:opacity-[0.09]"
        style={{
          backgroundImage: `linear-gradient(to right, var(--color-border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute inset-3 rounded-2xl border border-dashed border-border/70 opacity-80 sm:inset-4" />

      <span className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-accent/50 sm:left-5 sm:top-5" />
      <span className="pointer-events-none absolute right-4 top-4 h-5 w-5 border-r-2 border-t-2 border-accent/50 sm:right-5 sm:top-5" />
      <span className="pointer-events-none absolute bottom-4 left-4 h-5 w-5 border-b-2 border-l-2 border-accent/40 sm:bottom-5 sm:left-5" />
      <span className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b-2 border-r-2 border-accent/40 sm:bottom-5 sm:right-5" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-10 text-center sm:px-10 sm:py-12">
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent/90">
          Media slot
        </span>
        <span className="mt-4 max-w-md text-balance font-display text-lg font-semibold leading-snug tracking-tight text-ink sm:text-xl">
          {displayTitle}
        </span>
        <span className="mt-3 max-w-sm text-xs leading-relaxed text-muted sm:text-sm">
          Intentional placeholder — swap for final render, capture, or diagram.
        </span>
        {spec ? (
          <span className="mt-4 rounded-full border border-border/80 bg-canvas/50 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-muted dark:bg-surface/40">
            {spec}
          </span>
        ) : null}
      </div>
    </div>
  );
}

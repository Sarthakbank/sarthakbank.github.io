import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
  interactive,
}: {
  className?: string;
  children: React.ReactNode;
  /** Stronger hover depth / border read — for index cards and CTAs */
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-hairline",
        "bg-gradient-to-b from-elevated/98 to-surface/50 shadow-lift",
        "ring-1 ring-inset ring-[var(--ring-inset)] backdrop-blur-md",
        "dark:from-elevated/95 dark:to-canvas/35",
        "p-6 sm:p-8",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-card-shine before:opacity-40 before:content-[''] dark:before:opacity-25",
        interactive &&
          "transition duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_24px_70px_color-mix(in_srgb,var(--color-ink)_12%,transparent)] dark:hover:shadow-[0_28px_90px_rgba(0,0,0,0.55)]",
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}

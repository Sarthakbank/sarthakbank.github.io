import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
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
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}

import { cn } from "@/lib/cn";

export function SectionDivider({
  label,
  className,
}: {
  /** Optional short rhythm label between major sections */
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn("flex items-center gap-4 py-10 sm:py-12", className)}
      aria-hidden={label ? undefined : true}
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/60 to-transparent dark:via-border/40" />
      {label ? (
        <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.28em] text-muted">
          {label}
        </span>
      ) : null}
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border/60 to-transparent dark:via-border/40" />
    </div>
  );
}

import { cn } from "@/lib/cn";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent",
        "before:h-px before:w-6 before:bg-accent/50 before:content-['']",
        className,
      )}
    >
      {children}
    </p>
  );
}

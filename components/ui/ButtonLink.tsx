import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-lift hover:brightness-110 active:brightness-95 border border-white/10",
  secondary:
    "border border-hairline bg-elevated/85 text-ink shadow-panel hover:border-accent/45 hover:text-accent hover:shadow-lift backdrop-blur-md dark:bg-elevated/70",
  ghost:
    "text-muted hover:text-accent underline-offset-4 hover:underline decoration-accent/40",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
  icon,
  iconPosition = "start",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
}) {
  const inner = (
    <>
      {icon && iconPosition === "start" ? (
        <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>
      ) : null}
      <span>{children}</span>
      {icon && iconPosition === "end" ? (
        <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>
      ) : null}
    </>
  );

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-tight transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }

  return <Link href={href} className={classes}>{inner}</Link>;
}

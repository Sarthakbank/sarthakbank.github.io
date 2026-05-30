import { appleHomePage } from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";

/**
 * Light Apple-style page shell for inner pages (About, Contact, Case Study).
 * Forces the light theme so it overrides the document's dark default, and
 * applies the same soft `#f5f5f7` surface used on the approved Home page.
 */
export function AppleInnerShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      data-theme="light"
      className={cn(appleHomePage, "min-h-dvh overflow-x-hidden", className)}
    >
      {children}
    </div>
  );
}

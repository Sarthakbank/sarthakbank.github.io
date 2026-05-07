import { cn } from "@/lib/cn";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-28 py-20 sm:py-24 lg:scroll-mt-32 lg:py-28",
        className,
      )}
    >
      {children}
    </section>
  );
}

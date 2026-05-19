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
        "scroll-mt-28 py-14 sm:py-16 lg:scroll-mt-32 lg:py-20",
        className,
      )}
    >
      {children}
    </section>
  );
}

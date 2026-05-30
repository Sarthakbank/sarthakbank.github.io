import Link from "next/link";
import { AppleReveal } from "@/components/shared/AppleReveal";
import { appleBtnGhost, appleBtnPrimary, appleBtnSecondary } from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";

type CTAButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

/**
 * Reusable closing CTA band for inner pages — a white rounded card on the
 * `#f5f5f7` surface with pill buttons, matching the Home design language.
 */
export function AppleCTASection({
  eyebrow,
  title,
  body,
  buttons,
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  buttons: readonly CTAButton[];
  className?: string;
}) {
  return (
    <section className={cn("bg-[#f5f5f7] py-16 sm:py-20 lg:py-24", className)}>
      <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8 lg:px-10">
        <AppleReveal>
          <div className="rounded-[36px] border border-black/[0.05] bg-white px-7 py-12 text-center shadow-[0_2px_24px_rgba(0,0,0,0.06)] sm:px-12 sm:py-14">
            {eyebrow ? (
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6e6e73]">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-[clamp(1.75rem,2.5vw+1rem,2.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#1d1d1f]">
              {title}
            </h2>
            {body ? (
              <p className="mx-auto mt-4 max-w-xl text-pretty text-[17px] leading-[1.55] text-[#6e6e73]">
                {body}
              </p>
            ) : null}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              {buttons.map((btn) => {
                const className =
                  btn.variant === "secondary"
                    ? appleBtnSecondary
                    : btn.variant === "ghost"
                      ? appleBtnGhost
                      : appleBtnPrimary;
                return (
                  <Link
                    key={btn.label}
                    href={btn.href}
                    className={className}
                    {...(btn.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {btn.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </AppleReveal>
      </div>
    </section>
  );
}

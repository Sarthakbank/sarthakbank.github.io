import type { ElementType, ReactNode } from "react";
import {
  appleGradientText,
  appleHeadingEyebrow,
  appleHeroLead,
  appleHeroTitle,
  appleSectionTitle,
  type AppleGradient,
} from "@/lib/appleType";
import { cn } from "@/lib/cn";

/**
 * Apple Intelligence heading — a gradient lead phrase paired with a black main
 * title (reference: image.png). Gradient is confined to the lead phrase; the
 * title always stays #1d1d1f.
 *
 * Modes:
 *  - stacked (default): the gradient lead is a separate kicker rendered ABOVE the
 *    heading, so the <h1>/<h2> keeps a clean accessible name (just the title) for
 *    SEO and screen-reader heading navigation.
 *  - inline: the lead phrase is the first word of the title and lives inside the
 *    heading (e.g. "Featured" gradient + "Projects" black) — here the lead is part
 *    of the title, not a kicker.
 */
export function SectionHeading({
  lead,
  title,
  eyebrow,
  gradient = "blue-purple",
  variant = "section",
  inline = false,
  as,
  className,
  titleClassName,
  leadClassName,
}: {
  /** Gradient lead phrase. Omit for a plain black heading. */
  lead?: string;
  /** Black main title. */
  title: ReactNode;
  /** Optional plain grey uppercase kicker above everything. */
  eyebrow?: string;
  gradient?: AppleGradient;
  variant?: "hero" | "section";
  /** Render lead + title on one line instead of stacked. */
  inline?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
  titleClassName?: string;
  leadClassName?: string;
}) {
  const Tag: ElementType = as ?? (variant === "hero" ? "h1" : "h2");
  const titleSize = variant === "hero" ? appleHeroTitle : appleSectionTitle;
  const gradientText = appleGradientText(gradient);

  return (
    <div className={className}>
      {eyebrow ? (
        <p className={cn(appleHeadingEyebrow, "mb-3")}>{eyebrow}</p>
      ) : null}

      {inline ? (
        <Tag className={cn(titleSize, "text-[#1d1d1f]", titleClassName)}>
          {lead ? (
            <>
              <span className={cn(gradientText, leadClassName)}>{lead}</span>{" "}
            </>
          ) : null}
          {title}
        </Tag>
      ) : (
        <>
          {lead ? (
            <p className={cn("mb-2", appleHeroLead, gradientText, leadClassName)}>
              {lead}
            </p>
          ) : null}
          <Tag className={cn(titleSize, "text-[#1d1d1f]", titleClassName)}>{title}</Tag>
        </>
      )}
    </div>
  );
}

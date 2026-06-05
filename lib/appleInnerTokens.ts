/**
 * Shared light Apple-style polish tokens for inner pages (Contact, About, Case Study).
 * Home page is the source of truth — these mirror its premium card/shadow/heading
 * language without importing or mutating anything under components/home.
 *
 * Color is used only as accents (icons, thin bars, chips), never heavy backgrounds.
 */

/** Standard centered container for inner page content. */
export const innerContainer = "mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10";

/** Section eyebrow / headline / body — consistent typographic hierarchy. */
export const innerEyebrow =
  "text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6e6e73]";
export const innerHeadline =
  "font-display text-[clamp(1.75rem,2.5vw+1rem,2.75rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-[#1d1d1f]";
export const innerBody = "text-[16px] leading-[1.6] text-[#6e6e73] md:text-[17px]";

/** Premium white card with layered Apple-style shadow (matches Home depth). */
export const innerCard =
  "rounded-[28px] border border-black/[0.05] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.04),0_8px_30px_rgba(0,0,0,0.06)]";

/** Hover lift + deeper layered shadow. */
export const innerCardHover =
  "transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(0,0,0,0.05),0_16px_44px_rgba(0,0,0,0.10)]";

export type InnerAccentKey =
  | "blue"
  | "indigo"
  | "graphite"
  | "orange"
  | "green"
  | "cyan"
  | "red"
  | "violet";

/**
 * Accent palette for inner-page cards — badge (flat icon chip), bar (thin top
 * accent), text (solid accent color), gradient (for filled gradient icon badges),
 * and glow (raw hex for soft colored glows/shadows). Tuned to read on white.
 */
export const innerAccents: Record<
  InnerAccentKey,
  { badge: string; bar: string; text: string; gradient: string; glow: string }
> = {
  blue: {
    badge: "bg-[#0071e3]/10 text-[#0071e3] ring-1 ring-[#0071e3]/15",
    bar: "from-[#0071e3] to-[#5ac8fa]",
    text: "text-[#0071e3]",
    gradient: "from-[#0071e3] to-[#5ac8fa]",
    glow: "#0071e3",
  },
  indigo: {
    badge: "bg-[#5856d6]/10 text-[#5856d6] ring-1 ring-[#5856d6]/15",
    bar: "from-[#5856d6] to-[#af52de]",
    text: "text-[#5856d6]",
    gradient: "from-[#4f6bff] to-[#5856d6]",
    glow: "#5856d6",
  },
  graphite: {
    badge: "bg-[#1d1d1f]/[0.06] text-[#1d1d1f] ring-1 ring-black/10",
    bar: "from-[#3a3a3c] to-[#8e8e93]",
    text: "text-[#1d1d1f]",
    gradient: "from-[#3a3a3c] to-[#1d1d1f]",
    glow: "#3a3a3c",
  },
  orange: {
    badge: "bg-[#ff9500]/12 text-[#c93400] ring-1 ring-[#ff9500]/20",
    bar: "from-[#ff9500] to-[#ff2d55]",
    text: "text-[#c93400]",
    gradient: "from-[#ff9500] to-[#ff2d55]",
    glow: "#ff7a00",
  },
  green: {
    badge: "bg-[#34c759]/12 text-[#248a3d] ring-1 ring-[#34c759]/18",
    bar: "from-[#34c759] to-[#5ac8fa]",
    text: "text-[#248a3d]",
    gradient: "from-[#34c759] to-[#30b06e]",
    glow: "#34c759",
  },
  cyan: {
    badge: "bg-[#32ade6]/12 text-[#0a84c2] ring-1 ring-[#32ade6]/20",
    bar: "from-[#32ade6] to-[#5ac8fa]",
    text: "text-[#0a84c2]",
    gradient: "from-[#0a84c2] to-[#32ade6]",
    glow: "#32ade6",
  },
  red: {
    badge: "bg-[#ff3b30]/10 text-[#d70015] ring-1 ring-[#ff3b30]/18",
    bar: "from-[#ff3b30] to-[#ff6b5e]",
    text: "text-[#d70015]",
    gradient: "from-[#ff3b30] to-[#ff6b5e]",
    glow: "#ff3b30",
  },
  violet: {
    badge: "bg-[#af52de]/12 text-[#8944ab] ring-1 ring-[#af52de]/20",
    bar: "from-[#af52de] to-[#5856d6]",
    text: "text-[#8944ab]",
    gradient: "from-[#af52de] to-[#5856d6]",
    glow: "#af52de",
  },
};

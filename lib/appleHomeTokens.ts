/** Light UI tokens — Home page only (reference-aligned). */

export const apple = {
  bg: "#f5f5f7",
  card: "#ffffff",
  ink: "#1d1d1f",
  muted: "#6e6e73",
  blue: "#0071e3",
  orange: "#ff9500",
  purple: "#af52de",
  green: "#34c759",
  pink: "#ff2d55",
} as const;

export const appleHomePage =
  "bg-[#f5f5f7] text-[#1d1d1f] antialiased [--color-ink:#1d1d1f] [--color-muted:#6e6e73]";

export const appleContainer = "mx-auto w-full max-w-6xl px-5 sm:px-8";

export const appleSection = "py-16 sm:py-20 lg:py-24";

export const appleSectionMuted = "bg-[#f5f5f7]";

export const appleSectionWhite = "bg-white";

export const appleEyebrow =
  "text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6e6e73]";

export const appleHeadlineLg =
  "font-display text-[clamp(1.75rem,2.5vw+1rem,2.75rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-[#1d1d1f]";

export const appleBody =
  "text-[16px] leading-[1.58] text-[#6e6e73] md:text-[17px] md:leading-[1.6]";

export const appleCard =
  "rounded-[32px] border border-black/[0.06] bg-white shadow-[0_2px_24px_rgba(0,0,0,0.07)] transition-[transform,box-shadow] duration-300 ease-out";

export const appleCardHover =
  "hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,0,0,0.1)]";

export const applePreviewCard =
  "rounded-[32px] border border-black/[0.06] bg-white shadow-[0_4px_28px_rgba(0,0,0,0.08)]";

export const appleProductCard =
  "overflow-hidden rounded-[32px] border border-black/[0.06] bg-white shadow-[0_4px_32px_rgba(0,0,0,0.09)] transition-[transform,box-shadow] duration-300 ease-out hover:shadow-[0_16px_48px_rgba(0,0,0,0.11)]";

export const appleNavLink =
  "text-[15px] font-medium text-[#1d1d1f] transition hover:text-[#0071e3]";

export const appleBtnPrimary =
  "inline-flex items-center justify-center rounded-full bg-[#0071e3] px-6 py-3 text-[15px] font-medium text-white shadow-[0_2px_12px_rgba(0,113,227,0.25)] transition hover:bg-[#0077ed] hover:shadow-[0_4px_16px_rgba(0,113,227,0.35)] active:scale-[0.98]";

export const appleBtnSecondary =
  "inline-flex items-center justify-center rounded-full border border-black/[0.12] bg-white px-6 py-3 text-[15px] font-medium text-[#1d1d1f] transition hover:border-black/20 hover:bg-[#f5f5f7] active:scale-[0.98]";

export const appleBtnGhost =
  "inline-flex items-center justify-center rounded-full bg-[#e8e8ed] px-6 py-3 text-[15px] font-medium text-[#1d1d1f] transition hover:bg-[#d2d2d7] active:scale-[0.98]";

export const appleLink =
  "inline-flex items-center gap-1.5 text-[15px] font-medium text-[#0071e3] transition hover:underline";

export const appleMetaLabel = "text-[13px] font-medium text-[#6e6e73]";

export const appleMetaValue = "text-[13px] font-semibold text-[#1d1d1f]";

/** Title gradient + icon badge — used by Design Principles cards. */
export const principleAccents = {
  playerCentric: {
    titleGradient: "from-[#0071e3] via-[#5ac8fa] to-[#34c759]",
    iconBadge: "bg-[#0071e3]/10 text-[#0071e3] ring-1 ring-[#0071e3]/15",
    highlightBlue: "text-[#0071e3]",
    highlightTeal: "text-[#5ac8fa]",
    topAccent: "from-[#0071e3]/60 to-[#34c759]/40",
  },
  readableSpaces: {
    titleGradient: "from-[#5856d6] via-[#af52de] to-[#5ac8fa]",
    iconBadge: "bg-[#af52de]/10 text-[#8944ab] ring-1 ring-[#af52de]/20",
    highlightPurple: "text-[#8944ab]",
    highlightBlue: "text-[#5856d6]",
    topAccent: "from-[#5856d6]/50 to-[#5ac8fa]/40",
  },
  iterativeCraft: {
    titleGradient: "from-[#ff9500] via-[#ff6b35] to-[#ff2d55]",
    iconBadge: "bg-[#ff9500]/12 text-[#c93400] ring-1 ring-[#ff9500]/20",
    highlightOrange: "text-[#c93400]",
    highlightPink: "text-[#ff2d55]",
    topAccent: "from-[#ff9500]/55 to-[#ff2d55]/40",
  },
} as const;

/** Legacy carousel tokens — kept so unused files still compile. */
export const carouselPrincipleSlide =
  "flex-none snap-start w-[min(91%,360px)] sm:w-[min(48%,360px)] lg:w-[min(36%,360px)]";
export const carouselSkillSlide =
  "flex-none snap-start w-[min(91%,280px)] sm:w-[min(48%,280px)] lg:w-[min(27.5%,280px)]";
export const appleCarouselShell =
  "relative flex min-h-[300px] flex-col overflow-visible rounded-[32px] border border-black/[0.06] bg-[#f5f5f7] p-7 shadow-[0_4px_28px_rgba(0,0,0,0.07)] sm:min-h-[320px] sm:p-8";
export const appleCarouselArrow =
  "inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8e8ed] text-[#1d1d1f] shadow-sm transition hover:bg-[#d2d2d7] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-[#e8e8ed]";

/** Dark circular plus — principle card detail trigger */
export const applePlusButton =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1d1d1f] text-white shadow-[0_4px_14px_rgba(0,0,0,0.18)] transition hover:scale-105 hover:bg-[#333336] active:scale-95";

export type SkillAccentKey =
  | "blue"
  | "indigo"
  | "green"
  | "orange"
  | "purple"
  | "cyan"
  | "pink"
  | "teal"
  | "violet"
  | "amber"
  | "rose"
  | "slate";

export const skillAccents: Record<
  SkillAccentKey,
  { badge: string; subtitle: string; bar: string; icon: string }
> = {
  blue: {
    badge: "bg-[#0071e3]/14 text-[#0071e3] ring-1 ring-[#0071e3]/18",
    subtitle: "text-[#0071e3]",
    bar: "from-[#0071e3]/70 to-[#5ac8fa]/50",
    icon: "text-[#0071e3]",
  },
  indigo: {
    badge: "bg-[#5856d6]/14 text-[#5856d6] ring-1 ring-[#5856d6]/18",
    subtitle: "text-[#5856d6]",
    bar: "from-[#5856d6]/70 to-[#af52de]/45",
    icon: "text-[#5856d6]",
  },
  green: {
    badge: "bg-[#34c759]/14 text-[#248a3d] ring-1 ring-[#34c759]/18",
    subtitle: "text-[#248a3d]",
    bar: "from-[#34c759]/70 to-[#5ac8fa]/45",
    icon: "text-[#248a3d]",
  },
  orange: {
    badge: "bg-[#ff9500]/14 text-[#c93400] ring-1 ring-[#ff9500]/20",
    subtitle: "text-[#c93400]",
    bar: "from-[#ff9500]/75 to-[#ff6b35]/50",
    icon: "text-[#c93400]",
  },
  purple: {
    badge: "bg-[#af52de]/14 text-[#8944ab] ring-1 ring-[#af52de]/20",
    subtitle: "text-[#8944ab]",
    bar: "from-[#af52de]/70 to-[#5856d6]/45",
    icon: "text-[#8944ab]",
  },
  cyan: {
    badge: "bg-[#5ac8fa]/14 text-[#0071e3] ring-1 ring-[#5ac8fa]/22",
    subtitle: "text-[#0071e3]",
    bar: "from-[#5ac8fa]/75 to-[#0071e3]/45",
    icon: "text-[#0071e3]",
  },
  pink: {
    badge: "bg-[#ff2d55]/14 text-[#d70015] ring-1 ring-[#ff2d55]/18",
    subtitle: "text-[#d70015]",
    bar: "from-[#ff2d55]/70 to-[#ff9500]/45",
    icon: "text-[#d70015]",
  },
  teal: {
    badge: "bg-[#30b0c7]/14 text-[#248a9e] ring-1 ring-[#30b0c7]/18",
    subtitle: "text-[#248a9e]",
    bar: "from-[#30b0c7]/70 to-[#34c759]/45",
    icon: "text-[#248a9e]",
  },
  violet: {
    badge: "bg-[#7c3aed]/14 text-[#6d28d9] ring-1 ring-[#7c3aed]/18",
    subtitle: "text-[#6d28d9]",
    bar: "from-[#7c3aed]/70 to-[#af52de]/45",
    icon: "text-[#6d28d9]",
  },
  amber: {
    badge: "bg-[#ffcc00]/20 text-[#a67c00] ring-1 ring-[#ffcc00]/25",
    subtitle: "text-[#a67c00]",
    bar: "from-[#ffcc00]/80 to-[#ff9500]/50",
    icon: "text-[#a67c00]",
  },
  rose: {
    badge: "bg-[#ff375f]/14 text-[#d70015] ring-1 ring-[#ff375f]/18",
    subtitle: "text-[#d70015]",
    bar: "from-[#ff375f]/70 to-[#ff2d55]/45",
    icon: "text-[#d70015]",
  },
  slate: {
    badge: "bg-[#8e8e93]/14 text-[#636366] ring-1 ring-[#8e8e93]/18",
    subtitle: "text-[#636366]",
    bar: "from-[#8e8e93]/60 to-[#aeaeb2]/45",
    icon: "text-[#636366]",
  },
};

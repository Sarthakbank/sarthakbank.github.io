/** Shared layout / surface classes for the dark Stitch portfolio shell. */

export const pageShell = "min-h-dvh overflow-x-hidden bg-canvas text-ink antialiased";

export const sectionPad = "py-12 sm:py-14 lg:py-16";

export const sectionBorder = "border-white/[0.06]";

export const labelCaps =
  "font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted";

export const glassCard =
  "rounded-2xl border border-white/[0.08] bg-white/[0.04] shadow-panel backdrop-blur-xl ring-1 ring-inset ring-white/[0.06]";

export const glassCardHover =
  "transition-[border-color,box-shadow] duration-300 hover:border-accent/30 hover:shadow-glow";

export const glassCardInteractive = `${glassCard} ${glassCardHover}`;

export const surfaceSection = "bg-surface/40";

export const elevatedSection = "bg-elevated/20";

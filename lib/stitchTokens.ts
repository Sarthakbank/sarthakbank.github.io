/** Stitch dark-ui-reference design tokens (from DESIGN.md + code.html). */

export const stitch = {
  void: "#050607",
  base: "#0B0D10",
  surface: "#111418",
  card: "#171A20",
  onSurface: "#e1e2e8",
  onSurfaceVariant: "#bbc9cf",
  cyan: "#00d1ff",
  cyanDim: "#4cd6ff",
  orange: "#ff9f0a",
} as const;

export const stitchHome =
  "bg-[#050607] text-[#e1e2e8] antialiased subpixel-antialiased";

export const stitchContainer = "mx-auto w-full max-w-[90rem] px-4 sm:px-6 md:px-16";

/** DESIGN.md xxl rhythm — 80–112px between major bands */
export const stitchSection = "py-20 md:py-24 lg:py-28";

export const stitchLabel =
  "font-mono text-[12px] font-semibold uppercase tracking-[0.15em] leading-none";

export const stitchHeadlineLg =
  "font-display text-[clamp(1.75rem,2.5vw+1rem,3rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[#e1e2e8]";

export const stitchBody =
  "text-base leading-[1.6] text-[#bbc9cf] md:text-[17px] md:leading-[1.65]";

/** Stitch glass-panel (code.html) — restrained blur */
export const stitchGlass =
  "rounded-lg border border-white/10 bg-[rgba(23,26,32,0.88)] shadow-sm transition-[box-shadow,border-color] duration-300 hover:border-[#00d1ff]/25 hover:shadow-[0_0_20px_0_rgba(0,209,255,0.12)]";

export const stitchGlassPanel =
  "rounded-lg border border-white/10 bg-[rgba(23,26,32,0.88)] backdrop-blur-sm";

export const stitchChip =
  "inline-flex items-center rounded border border-[#ff9f0a]/20 bg-[#ff9f0a]/10 px-2 py-0.5 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[#ff9f0a]";

export const stitchBtnPrimary =
  "inline-flex items-center justify-center rounded bg-[#00d1ff] px-8 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-[#4cd6ff] hover:shadow-[0_0_20px_0_rgba(0,209,255,0.2)]";

export const stitchBtnGhost =
  "inline-flex items-center justify-center rounded border border-[#00d1ff]/40 bg-transparent px-6 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#e1e2e8] transition hover:border-[#00d1ff] hover:bg-[#00d1ff]/5";

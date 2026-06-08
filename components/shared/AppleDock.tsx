"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * AppleDock — a content-agnostic macOS-style dock.
 *
 * Owns magnification, pointer tracking, keyboard focus, accessibility, tooltip,
 * and layout. Consumers supply data + an icon renderer; all visuals (tile
 * background, colors) live in `renderIcon`, so the primitive stays reusable.
 *
 * Magnification modes:
 *  - "size":  each tile's width/height animate base→peak, so tiles grow and push
 *             their neighbors (the classic dock — used by the case-study metadata dock).
 *  - "scale": tiles sit in fixed-width cells and magnify via transform: scale, so the
 *             row never reflows — labels stay put and the dock can't cause horizontal
 *             scroll (used by the About production-stack dock with labels under icons).
 *
 * On coarse pointers or reduced-motion, `fallback` is rendered instead.
 */

const DEFAULT_GEOMETRY = { base: 50, peak: 80, range: 130 };
const SPRING = { mass: 0.1, stiffness: 170, damping: 14 };

type DockMode = "size" | "scale";

export type AppleDockGeometry = { base?: number; peak?: number; range?: number };

export function AppleDock<T>({
  items,
  getKey,
  renderIcon,
  getLabel,
  getValue,
  geometry,
  mode = "size",
  showLabels = false,
  className,
  cellClassName,
  labelClassName,
  ariaLabel,
  fallback,
}: {
  items: readonly T[];
  getKey: (item: T) => string;
  /** Returns the full tile visual (background + icon), sized to fill the tile. */
  renderIcon: (item: T, index: number) => ReactNode;
  /** Tooltip primary line (and persistent under-icon label when showLabels). */
  getLabel: (item: T) => string;
  /** Optional tooltip second line. When omitted the tooltip is single-line. */
  getValue?: (item: T) => string | undefined;
  geometry?: AppleDockGeometry;
  mode?: DockMode;
  showLabels?: boolean;
  /** Full visual container classes (height, gap, padding, radius, glass). */
  className?: string;
  /** Per-cell wrapper — e.g. a fixed width in scale mode. */
  cellClassName?: string;
  labelClassName?: string;
  ariaLabel: string;
  fallback?: ReactNode;
}) {
  const reduce = useReducedMotion();
  const [coarse, setCoarse] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);
  const geo = { ...DEFAULT_GEOMETRY, ...geometry };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: coarse)");
    const sync = () => setCoarse(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Touch / reduced-motion → consumer-supplied fallback (no hover dependency).
  if (reduce || coarse) {
    return <>{fallback ?? null}</>;
  }

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => {
        mouseX.set(Number.POSITIVE_INFINITY);
        setActive(null);
      }}
      className={cn("flex items-end", className)}
    >
      {items.map((item, i) => (
        <DockTile
          key={getKey(item)}
          itemKey={getKey(item)}
          label={getLabel(item)}
          value={getValue?.(item)}
          icon={renderIcon(item, i)}
          mode={mode}
          geo={geo}
          showLabels={showLabels}
          mouseX={mouseX}
          active={active}
          setActive={setActive}
          cellClassName={cellClassName}
          labelClassName={labelClassName}
        />
      ))}
    </div>
  );
}

function DockTile({
  itemKey,
  label,
  value,
  icon,
  mode,
  geo,
  showLabels,
  mouseX,
  active,
  setActive,
  cellClassName,
  labelClassName,
}: {
  itemKey: string;
  label: string;
  value?: string;
  icon: ReactNode;
  mode: DockMode;
  geo: { base: number; peak: number; range: number };
  showLabels: boolean;
  mouseX: MotionValue<number>;
  active: string | null;
  setActive: (key: string | null) => void;
  cellClassName?: string;
  labelClassName?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const { base, peak, range } = geo;
  const isActive = active === itemKey;

  // Horizontal distance from cursor to this tile's center → magnified size (px).
  const distance = useTransform(mouseX, (x: number) => {
    const b = ref.current?.getBoundingClientRect();
    if (!b) return range + 1;
    return x - (b.x + b.width / 2);
  });
  const sizePx = useSpring(
    useTransform(distance, [-range, 0, range], [base, peak, base]),
    SPRING,
  );
  const scale = useTransform(sizePx, (s) => s / base);

  const buttonStyle =
    mode === "size"
      ? { width: sizePx, height: sizePx }
      : { width: base, height: base, scale, transformOrigin: "bottom center" };

  return (
    <div className={cn("relative flex shrink-0 flex-col items-center", cellClassName)}>
      <AnimatePresence>
        {isActive ? (
          <motion.span
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 420, damping: 30 }}
            className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-3 -translate-x-1/2 whitespace-nowrap rounded-xl border border-black/[0.06] bg-white/90 px-3 py-1.5 text-center shadow-[0_8px_24px_rgba(0,0,0,0.14)] backdrop-blur-xl"
            aria-hidden
          >
            {value ? (
              <>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.1em] text-[#86868b]">
                  {label}
                </span>
                <span className="block text-[13px] font-semibold text-[#1d1d1f]">{value}</span>
              </>
            ) : (
              <span className="block text-[13px] font-semibold text-[#1d1d1f]">{label}</span>
            )}
          </motion.span>
        ) : null}
      </AnimatePresence>

      <motion.button
        ref={ref}
        type="button"
        style={buttonStyle}
        onMouseEnter={() => setActive(itemKey)}
        onMouseLeave={() => setActive(null)}
        onFocus={() => {
          const b = ref.current?.getBoundingClientRect();
          if (b) mouseX.set(b.x + b.width / 2);
          setActive(itemKey);
        }}
        onBlur={() => {
          mouseX.set(Number.POSITIVE_INFINITY);
          setActive(null);
        }}
        aria-label={value ? `${label}: ${value}` : label}
        className={cn(
          "relative shrink-0 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]",
          isActive && "z-10",
        )}
      >
        {icon}
      </motion.button>

      {showLabels ? (
        <span
          className={cn(
            "mt-2 max-w-full text-center text-[11px] font-semibold leading-tight text-[#6e6e73]",
            labelClassName,
          )}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}

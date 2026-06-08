"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  Box,
  Briefcase,
  Cpu,
  Gamepad2,
  MousePointer2,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { ProjectMetaIcon, ProjectMetaItem } from "@/content/projects/types";
import { innerAccents, type InnerAccentKey } from "@/lib/appleInnerTokens";
import { cn } from "@/lib/cn";

const metaIcons: Record<ProjectMetaIcon, LucideIcon> = {
  genre: Gamepad2,
  type: Box,
  engine: Cpu,
  tools: Wrench,
  iterations: Workflow,
  playtests: MousePointer2,
  role: Briefcase,
};

const accentCycle: InnerAccentKey[] = ["blue", "indigo", "graphite", "green", "graphite"];
const accentAt = (i: number) => innerAccents[accentCycle[i % accentCycle.length]];

/** Static pill chrome — identical resting/hover to the prior metadata cards. */
const PILL =
  "flex items-center gap-3 rounded-2xl border border-black/[0.05] bg-white px-4 py-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_12px_32px_rgba(0,0,0,0.09)] transition-shadow duration-300 ease-out hover:shadow-[0_2px_8px_rgba(0,0,0,0.06),0_20px_48px_rgba(0,0,0,0.13)]";

const GRID = "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4";

/** Tight magnification — premium dock, not a bouncy Mac dock. */
const SPRING = { stiffness: 200, damping: 26, mass: 0.5 };
const RADIUS = 120;
const PEAK = 1.07;

function PillBody({ item, badge }: { item: ProjectMetaItem; badge: string }) {
  const Icon = metaIcons[item.icon];
  return (
    <>
      <span
        className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-xl", badge)}
        aria-hidden
      >
        <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#86868b]">
          {item.label}
        </dt>
        <dd className="truncate text-[14px] font-semibold text-[#1d1d1f]">{item.value}</dd>
      </div>
    </>
  );
}

function DockPill({
  item,
  index,
  mx,
  my,
}: {
  item: ProjectMetaItem;
  index: number;
  mx: MotionValue<number>;
  my: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // 2-D distance from cursor to this pill's center → scale (hovered peaks, neighbors taper).
  const distance = useTransform([mx, my], (latest: number[]) => {
    const el = ref.current;
    if (!el) return RADIUS * 2;
    const r = el.getBoundingClientRect();
    return Math.hypot(latest[0] - (r.left + r.width / 2), latest[1] - (r.top + r.height / 2));
  });
  const scale = useSpring(useTransform(distance, [0, RADIUS], [PEAK, 1]), SPRING);

  return (
    <motion.div ref={ref} style={{ scale }} className={PILL}>
      <PillBody item={item} badge={accentAt(index).badge} />
    </motion.div>
  );
}

export function MetadataDock({ items }: { items: readonly ProjectMetaItem[] }) {
  const reduce = useReducedMotion();
  const [coarse, setCoarse] = useState(false);
  const mx = useMotionValue(Number.POSITIVE_INFINITY);
  const my = useMotionValue(Number.POSITIVE_INFINITY);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: coarse)");
    const sync = () => setCoarse(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Mobile/touch or reduced-motion → identical static pills, no magnification.
  if (reduce || coarse) {
    return (
      <dl className={GRID}>
        {items.map((item, i) => (
          <div key={item.label} className={PILL}>
            <PillBody item={item} badge={accentAt(i).badge} />
          </div>
        ))}
      </dl>
    );
  }

  return (
    <dl
      className={GRID}
      onMouseMove={(e) => {
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
      onMouseLeave={() => {
        mx.set(Number.POSITIVE_INFINITY);
        my.set(Number.POSITIVE_INFINITY);
      }}
    >
      {items.map((item, i) => (
        <DockPill key={item.label} item={item} index={i} mx={mx} my={my} />
      ))}
    </dl>
  );
}

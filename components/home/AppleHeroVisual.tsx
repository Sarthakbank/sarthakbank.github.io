"use client";

import { motion } from "framer-motion";
import { homeHeroChips } from "@/content/home";
import { cn } from "@/lib/cn";

const chipPositions = [
  "left-[8%] top-[12%]",
  "right-[6%] top-[38%]",
  "left-[14%] bottom-[18%]",
] as const;

const chipColors = [
  "bg-[#0071e3] text-white shadow-[0_4px_14px_rgba(0,113,227,0.35)]",
  "bg-white/95 text-[#1d1d1f] shadow-[0_4px_16px_rgba(0,0,0,0.08)]",
  "bg-[#ff9500] text-white shadow-[0_4px_14px_rgba(255,149,0,0.35)]",
] as const;

/** Abstract level-design preview — no project thumbnail. */
export function AppleHeroVisual() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[#0071e3]/20 via-[#af52de]/10 to-[#ff9500]/15 blur-3xl"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-[32px] border border-black/[0.06] bg-white p-6 shadow-[0_16px_48px_rgba(0,0,0,0.08)] sm:p-8">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-gradient-to-br from-[#f5f5f7] via-[#eef0f5] to-[#e8eaef]">
          {/* Grid floor */}
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(#c5c9d3 1px, transparent 1px), linear-gradient(90deg, #c5c9d3 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              transform: "perspective(400px) rotateX(58deg) scale(1.4)",
              transformOrigin: "50% 80%",
            }}
            aria-hidden
          />

          {/* Blockout masses */}
          <div className="absolute bottom-[18%] left-[10%] h-[28%] w-[32%] rounded-lg bg-gradient-to-br from-[#d1d5db] to-[#9ca3af] shadow-[0_8px_24px_rgba(0,0,0,0.12)]" />
          <div className="absolute bottom-[22%] left-[38%] h-[36%] w-[24%] rounded-lg bg-gradient-to-br from-[#e5e7eb] to-[#b8bcc4] shadow-[0_10px_28px_rgba(0,0,0,0.1)]" />
          <div className="absolute bottom-[20%] right-[12%] h-[32%] w-[28%] rounded-lg bg-gradient-to-br from-[#c7ccd4] to-[#8b92a0] shadow-[0_8px_24px_rgba(0,0,0,0.12)]" />

          {/* Route path */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M 40 220 Q 120 180 200 200 T 360 140"
              fill="none"
              stroke="#0071e3"
              strokeWidth="3"
              strokeDasharray="8 6"
              opacity="0.7"
            />
            <circle cx="40" cy="220" r="6" fill="#34c759" />
            <circle cx="360" cy="140" r="6" fill="#ff9500" />
          </svg>

          {/* Sightline cone */}
          <div
            className="absolute left-[42%] top-[22%] h-[40%] w-[22%] origin-bottom bg-gradient-to-t from-[#0071e3]/25 to-transparent"
            style={{ clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)" }}
            aria-hidden
          />

          {/* Floating chips */}
          {homeHeroChips.map((label, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.12, duration: 0.4 }}
              className={cn(
                "absolute z-10 rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wide sm:text-[12px]",
                chipPositions[i],
                chipColors[i],
              )}
            >
              {label}
            </motion.span>
          ))}
        </div>

        <p className="mt-4 text-center text-[12px] font-medium text-[#6e6e73]">
          Spatial blockout · flow · encounter rhythm
        </p>
      </div>
    </div>
  );
}

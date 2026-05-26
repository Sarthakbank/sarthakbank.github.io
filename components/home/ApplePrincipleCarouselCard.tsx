"use client";

import { Plus, X } from "lucide-react";
import type { HomeDesignPrinciple } from "@/content/home";

const titleGradients: Record<string, string> = {
  playerCentric: "linear-gradient(135deg, #E8874B 0%, #D4A04A 100%)",
  readableSpaces: "linear-gradient(135deg, #4A9BD9 0%, #5BAE6A 100%)",
  iterativeCraft: "linear-gradient(135deg, #E07098 0%, #C090D0 100%)",
};

type Props = {
  principle: HomeDesignPrinciple;
  isActive: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export function PrincipleCard({ principle, isActive, onOpen, onClose }: Props) {
  const gradient = titleGradients[principle.accent] ?? titleGradients.playerCentric;

  return (
    <div
      className="h-full"
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative h-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          transformStyle: "preserve-3d",
          transform: isActive ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── Front face ────────────────────────────────── */}
        <article
          className="absolute inset-0 flex flex-col overflow-hidden rounded-[24px] border border-black/[0.04] bg-white"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            padding: "32px 28px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.07)",
          }}
        >
          <h3
            className="font-display uppercase leading-[1.1] tracking-[-0.01em]"
            style={{
              fontSize: "clamp(26px, 2.2vw, 34px)",
              fontWeight: 900,
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {principle.title}
          </h3>

          <div className="mt-auto flex items-end justify-end pt-6">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onOpen(); }}
              className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#1d1d1f] text-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-transform duration-200 hover:scale-110 active:scale-95"
              aria-label={`Read more about ${principle.title}`}
            >
              <Plus className="h-3.5 w-3.5" strokeWidth={2.8} />
            </button>
          </div>
        </article>

        {/* ── Back face ─────────────────────────────────── */}
        <article
          className="absolute inset-0 flex flex-col overflow-hidden rounded-[24px] border border-black/[0.04] bg-white"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            padding: "32px 28px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.07)",
          }}
        >
          <p
            className="flex-1 text-pretty leading-[1.65] text-[#1d1d1f]"
            style={{ fontSize: "15px" }}
          >
            {principle.body}
          </p>

          <div className="mt-auto flex items-end justify-end pt-4">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#e8e8ed] text-[#1d1d1f] shadow-sm transition-transform duration-200 hover:scale-110 active:scale-95"
              aria-label="Close"
            >
              <X className="h-3.5 w-3.5" strokeWidth={2.8} />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

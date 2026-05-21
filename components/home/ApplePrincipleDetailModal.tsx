"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { HomeDesignPrinciple } from "@/content/home";
import { principleAccents } from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";

type Props = {
  principle: HomeDesignPrinciple | null;
  onClose: () => void;
};

export function ApplePrincipleDetailModal({ principle, onClose }: Props) {
  const open = principle !== null;
  const accent = principle ? principleAccents[principle.accent] : null;

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {principle && accent ? (
        <motion.div
          key={principle.title}
          className="fixed inset-0 z-[100] flex items-center justify-center p-5 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="principle-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#1d1d1f]/40 backdrop-blur-md"
            aria-label="Close dialog"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[min(85vh,640px)] w-full max-w-lg overflow-y-auto rounded-[32px] border border-black/[0.06] bg-white p-8 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-10"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f7] text-[#1d1d1f] transition hover:bg-[#e8e8ed] sm:right-6 sm:top-6"
              aria-label="Close"
            >
              <X className="h-5 w-5" strokeWidth={2} aria-hidden />
            </button>
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#6e6e73]">
              {principle.title}
            </p>
            <h2
              id="principle-modal-title"
              className={cn(
                "mt-3 pr-10 font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight tracking-[-0.02em]",
                "bg-gradient-to-r bg-clip-text text-transparent",
                accent.titleGradient,
              )}
            >
              {principle.headline}
            </h2>
            <p className="mt-6 text-pretty text-[16px] leading-[1.65] text-[#6e6e73] md:text-[17px]">
              {principle.body}
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

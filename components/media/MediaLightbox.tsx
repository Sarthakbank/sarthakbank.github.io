"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { mediaLabel, type MediaItem } from "@/content/media/types";
import { cn } from "@/lib/cn";
import { MediaSlot } from "./MediaSlot";

/**
 * Accessible media lightbox (portal). Open when `index !== null`.
 * - role="dialog" aria-modal, labelled by the active item.
 * - Esc closes; ← / → navigate; focus is trapped and restored to the trigger.
 * - Body scroll locked while open. Heavy media mounts only while open.
 * - Reduced-motion → no transition.
 */
export function MediaLightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: MediaItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (next: number) => void;
}) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef<Element | null>(null);
  const open = index !== null;
  const count = items.length;

  useEffect(() => setMounted(true), []);

  const goPrev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + count) % count);
  }, [index, count, onIndexChange]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % count);
  }, [index, count, onIndexChange]);

  // Open lifecycle: remember trigger, lock scroll, focus dialog; restore on close.
  useEffect(() => {
    if (!open) return;
    restoreFocusRef.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // focus the dialog after paint
    const t = window.setTimeout(() => dialogRef.current?.focus(), 0);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prevOverflow;
      (restoreFocusRef.current as HTMLElement | null)?.focus?.();
    };
  }, [open]);

  // Keyboard: Esc / arrows / focus trap.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft" && count > 1) {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight" && count > 1) {
        e.preventDefault();
        goNext();
      } else if (e.key === "Tab") {
        const root = dialogRef.current;
        if (!root) return;
        const focusable = root.querySelectorAll<HTMLElement>(
          'button, a[href], iframe, video, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, count, goPrev, goNext, onClose]);

  if (!mounted) return null;

  const active = index !== null ? items[index] : null;

  return createPortal(
    <AnimatePresence>
      {open && active ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
            aria-hidden
          />

          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={mediaLabel(active)}
            tabIndex={-1}
            className="relative z-10 flex w-full max-w-5xl flex-col items-center outline-none"
          >
            {/* Close */}
            <div className="mb-3 flex w-full items-center justify-between">
              <span className="text-[13px] font-medium text-white/70">
                {count > 1 ? `${(index ?? 0) + 1} / ${count}` : " "}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white outline-none ring-1 ring-inset ring-white/20 backdrop-blur-md transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>

            {/* Media — capped to viewport, ratio preserved */}
            <div className="w-full max-h-[78vh] overflow-hidden">
              <MediaSlot
                key={(index ?? 0).toString()}
                item={active}
                variant="lightbox"
                className="max-h-[78vh]"
              />
            </div>

            {active.caption ? (
              <p className="mt-4 max-w-2xl text-center text-[14px] leading-relaxed text-white/80">
                {active.caption}
              </p>
            ) : null}

            {/* Prev / Next */}
            {count > 1 ? (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous"
                  className="absolute left-0 top-1/2 flex h-11 w-11 -translate-x-1 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white outline-none ring-1 ring-inset ring-white/20 backdrop-blur-md transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white sm:-translate-x-14"
                >
                  <ChevronLeft className="h-6 w-6" strokeWidth={2} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next"
                  className="absolute right-0 top-1/2 flex h-11 w-11 translate-x-1 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white outline-none ring-1 ring-inset ring-white/20 backdrop-blur-md transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white sm:translate-x-14"
                >
                  <ChevronRight className="h-6 w-6" strokeWidth={2} />
                </button>
              </>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}

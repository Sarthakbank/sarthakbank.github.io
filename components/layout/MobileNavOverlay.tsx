"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { X } from "lucide-react";
import type { NavItem } from "@/content/types";
import { cn } from "@/lib/cn";

/**
 * Mobile navigation drawer.
 *
 * Rendered through a portal to <body> so it escapes the header's containing
 * block — the header uses `backdrop-filter`, which (in current Chrome + iOS
 * Safari) makes it a containing block for `position: fixed` descendants. Without
 * the portal, `fixed inset-0` would size to the header (~56px) instead of the
 * viewport, collapsing the drawer and overlapping page content.
 */
export function MobileNavOverlay({
  open,
  onClose,
  items,
  activeHref,
  id,
}: {
  open: boolean;
  onClose: () => void;
  items: readonly NavItem[];
  activeHref: string | null;
  id: string;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Close on Escape while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      id={id}
      className="fixed inset-0 z-[100] lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <button
        type="button"
        className="absolute inset-0 h-full w-full bg-black/40 backdrop-blur-[2px]"
        aria-label="Close menu"
        onClick={onClose}
      />
      <div className="absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col border-l border-black/[0.06] bg-white shadow-[0_0_40px_rgba(0,0,0,0.18)]">
        <div className="flex items-center justify-between border-b border-black/[0.06] px-5 py-4 pt-[max(1rem,env(safe-area-inset-top))]">
          <span className="text-[13px] font-medium text-[#6e6e73]">Menu</span>
          <button
            type="button"
            className="-mr-1 rounded-full p-2 text-[#6e6e73] transition hover:bg-[#f5f5f7]"
            aria-label="Close menu"
            onClick={onClose}
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <nav
          className="flex flex-1 flex-col gap-1.5 overflow-y-auto px-3 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
          aria-label="Primary mobile"
        >
          {items.map((item) => {
            const active =
              item.href === "/" ? activeHref === "/" : activeHref === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-xl px-4 py-3.5 text-[16px] font-semibold tracking-tight transition",
                  active
                    ? "bg-[#f5f5f7] text-[#0071e3]"
                    : "text-[#1d1d1f] hover:bg-[#f5f5f7] active:bg-[#ececf0]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>,
    document.body,
  );
}

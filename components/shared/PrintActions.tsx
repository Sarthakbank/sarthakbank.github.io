"use client";

import { Download, Printer } from "lucide-react";

/**
 * Download-PDF + Print actions with a keyboard-shortcut helper line.
 * The whole block is hidden in print output (`print:hidden`).
 */
export function PrintActions({
  pdfHref,
  downloadName,
}: {
  pdfHref: string;
  downloadName?: string;
}) {
  return (
    <div className="flex flex-col gap-3 print:hidden sm:flex-row sm:items-center sm:gap-5">
      <div className="flex flex-wrap gap-3">
        <a
          href={pdfHref}
          download={downloadName}
          className="inline-flex items-center gap-2 rounded-full bg-[#0071e3] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_2px_12px_rgba(0,113,227,0.25)] transition hover:bg-[#0077ed] active:scale-[0.98]"
        >
          <Download className="h-4 w-4" strokeWidth={2} aria-hidden />
          Download PDF
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] bg-white px-5 py-2.5 text-[14px] font-semibold text-[#1d1d1f] transition hover:border-black/20 hover:bg-[#f5f5f7] active:scale-[0.98]"
        >
          <Printer className="h-4 w-4" strokeWidth={2} aria-hidden />
          Print
        </button>
      </div>
      <p className="text-[12px] text-[#86868b]">Mac: ⌘ + P • Windows/Linux: Ctrl + P</p>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ldd, type LddBlock } from "@/content/ldd";
import { AppleInnerShell } from "@/components/shared/AppleInnerShell";
import { PrintActions } from "@/components/shared/PrintActions";
import { innerContainer } from "@/lib/appleInnerTokens";
import { cn } from "@/lib/cn";

function Block({ block }: { block: LddBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="mt-4 text-[15px] leading-relaxed text-[#424245] sm:text-[16px]">
          {block.text}
        </p>
      );
    case "subheading":
      return (
        <h3 className="mt-7 font-display text-[16px] font-semibold tracking-tight text-[#1d1d1f]">
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((it) => (
            <li key={it} className="flex gap-2.5 text-[14.5px] leading-relaxed text-[#424245]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0071e3]" aria-hidden />
              {it}
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="mt-5 overflow-x-auto">
          <table className="w-full border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-b border-black/[0.1]">
                {block.headers.map((h) => (
                  <th
                    key={h}
                    className="px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#86868b]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-b border-black/[0.06] align-top">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={cn(
                        "px-3 py-2.5 text-[#424245]",
                        j === 0 && "font-semibold text-[#1d1d1f]",
                      )}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function DesignDocument() {
  const [active, setActive] = useState(ldd.sections[0]?.id ?? "");
  const raf = useRef(0);

  // Position-based scroll spy (height-agnostic) — matches FloatingSectionNav.
  useEffect(() => {
    const compute = () => {
      raf.current = 0;
      const line = window.innerHeight * 0.3;
      let current = ldd.sections[0]?.id ?? "";
      for (const s of ldd.sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= line) current = s.id;
        else break;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = ldd.sections[ldd.sections.length - 1]?.id ?? current;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!raf.current) raf.current = window.requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf.current) window.cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <AppleInnerShell className="print-doc">
      <div className={cn(innerContainer, "pt-[6.5rem] pb-24 sm:pt-28 lg:pt-32")}>
        {/* Header */}
        <header className="print-avoid-break">
          <Link
            href={ldd.caseStudyHref}
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#0071e3] transition hover:text-[#0077ed] print:hidden"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Escape Protocol case study
          </Link>
          <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6e6e73]">
            {ldd.title}
          </p>
          <h1 className="mt-2 font-display text-[clamp(2.25rem,4vw+1rem,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#1d1d1f]">
            {ldd.subtitle}
          </h1>

          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
            {ldd.meta.map((m) => (
              <div key={m.label}>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#86868b]">
                  {m.label}
                </dt>
                <dd className="mt-0.5 text-[14px] font-semibold text-[#1d1d1f]">{m.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-7">
            <PrintActions pdfHref={ldd.pdf.href} downloadName={ldd.pdf.downloadName} />
          </div>
        </header>

        <hr className="my-10 border-black/[0.08]" />

        <div className="lg:grid lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-12">
          {/* Sticky TOC */}
          <nav
            aria-label="Document contents"
            className="mb-10 lg:sticky lg:top-24 lg:mb-0 lg:self-start print:hidden"
          >
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#86868b]">
              Contents
            </p>
            <ul className="flex flex-col gap-0.5">
              {ldd.sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={cn(
                      "block rounded-lg px-3 py-1.5 text-[13px] tracking-tight transition",
                      active === s.id
                        ? "bg-[#0071e3]/[0.10] font-semibold text-[#0071e3]"
                        : "font-medium text-[#6e6e73] hover:bg-black/[0.04] hover:text-[#1d1d1f]",
                    )}
                  >
                    <span className="text-[#86868b]">{i + 1}.</span> {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Article */}
          <article className="min-w-0">
            {ldd.sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-24 pb-10 print-avoid-break">
                <h2 className="font-display text-[22px] font-semibold tracking-tight text-[#1d1d1f] sm:text-[24px]">
                  <span className="text-[#0071e3]">{i + 1}.</span> {s.title}
                </h2>
                {s.blocks.map((b, j) => (
                  <Block key={j} block={b} />
                ))}
              </section>
            ))}
          </article>
        </div>
      </div>
    </AppleInnerShell>
  );
}

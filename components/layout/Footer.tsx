"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/content/nav";
import { homeFooter } from "@/content/home";
import { contactChannels } from "@/content/contact";
import { stitchContainer } from "@/lib/stitchTokens";
import { cn } from "@/lib/cn";

/** Home & case study render inline Stitch footers — avoid duplicate chrome. */
export function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  if (pathname === "/" || pathname === "/case-study") {
    return null;
  }

  return (
    <footer className="border-t border-white/[0.05] bg-[#0b0e12] py-12 md:py-16">
      <div
        className={cn(
          stitchContainer,
          "flex flex-col items-center justify-between gap-8 md:flex-row md:items-start",
        )}
      >
        <p className="max-w-md text-center font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[#e1e2e8] md:text-left">
          © {year} {homeFooter.name}. Level Design Portfolio.
        </p>
        <nav className="flex flex-wrap justify-center gap-6 md:justify-end" aria-label="Footer">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[#bbc9cf]/60 transition hover:border-b hover:border-[#00d1ff] hover:text-[#00d1ff] hover:pb-0.5"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={contactChannels.email.href}
            className="font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[#bbc9cf]/60 transition hover:border-b hover:border-[#00d1ff] hover:text-[#00d1ff] hover:pb-0.5"
          >
            Email
          </Link>
        </nav>
      </div>
    </footer>
  );
}

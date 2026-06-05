"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/content/nav";
import { homeFooter } from "@/content/home";
import { contactChannels } from "@/content/contact";
import { stitchContainer, stitchFooterInner, stitchFooterLink, stitchFooterShell } from "@/lib/stitchTokens";
import { cn } from "@/lib/cn";

/** Home & case study render inline footers — avoid duplicate chrome. */
export function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  if (pathname === "/") {
    return null;
  }

  // Inner pages migrated to the light Apple style.
  if (
    pathname === "/contact" ||
    pathname === "/about" ||
    pathname === "/case-study" ||
    pathname?.startsWith("/case-study/") ||
    pathname?.startsWith("/projects/")
  ) {
    return (
      <footer className="border-t border-black/[0.06] bg-white py-10 sm:py-12">
        <div
          className={cn(
            "mx-auto w-full max-w-6xl px-5 sm:px-8",
            "flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between",
          )}
        >
          <p className="text-center text-[13px] leading-relaxed text-[#6e6e73] sm:text-left">
            © {year} {homeFooter.name}. Level Design Portfolio.
          </p>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:justify-end"
            aria-label="Footer"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] font-medium text-[#6e6e73] transition hover:text-[#0071e3]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={contactChannels.email.href}
              className="text-[13px] font-medium text-[#6e6e73] transition hover:text-[#0071e3]"
            >
              Email
            </Link>
          </nav>
        </div>
      </footer>
    );
  }

  return (
    <footer className={stitchFooterShell}>
      <div className={cn(stitchContainer, stitchFooterInner)}>
        <p className="max-w-md text-center font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[#e1e2e8] md:text-left">
          © {year} {homeFooter.name}. Level Design Portfolio.
        </p>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2.5 md:justify-end" aria-label="Footer">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className={stitchFooterLink}>
              {item.label}
            </Link>
          ))}
          <Link href={contactChannels.email.href} className={stitchFooterLink}>
            Email
          </Link>
        </nav>
      </div>
    </footer>
  );
}

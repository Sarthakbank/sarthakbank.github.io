"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/content/nav";
import { profileIdentity } from "@/content/profile";
import { homeHero } from "@/content/home";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

function isEditorialPath(pathname: string | null) {
  return pathname === "/" || pathname === "/case-study" || pathname?.startsWith("/case-study/");
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const editorial = isEditorialPath(pathname);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  if (editorial) {
    return (
      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/90 backdrop-blur-xl dark:border-black/[0.06] dark:bg-white/90">
        <Container className="flex min-h-[3.75rem] items-center justify-between gap-3 py-3 sm:min-h-[4rem] sm:py-4">
          <Link
            href="/"
            className="min-w-0 shrink font-display text-[15px] font-semibold tracking-tight text-[#1d1d1f] sm:text-base"
          >
            {homeHero.name.split(" ")[0]}{" "}
            <span className="font-normal text-[#6e6e73]">Portfolio</span>
          </Link>
          <nav className="hidden min-w-0 items-center gap-0.5 sm:flex" aria-label="Primary">
            {mainNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname?.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "whitespace-nowrap rounded-full px-2.5 py-1.5 text-[12px] font-medium text-[#424245] transition sm:px-3 sm:text-[13px]",
                    active ? "bg-black/[0.06] text-[#1d1d1f]" : "hover:bg-black/[0.04] hover:text-[#1d1d1f]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <span className="[&>button]:h-9 [&>button]:w-9 [&>button]:rounded-full [&>button]:border-black/[0.1] [&>button]:bg-white">
              <ThemeToggle />
            </span>
            <button
              type="button"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/[0.1] bg-white text-[#1d1d1f] shadow-sm transition hover:bg-black/[0.04] sm:hidden"
              aria-expanded={menuOpen}
              aria-controls="editorial-mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </button>
          </div>
        </Container>

        {menuOpen ? (
          <div
            id="editorial-mobile-nav"
            className="fixed inset-0 z-[60] sm:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/35 backdrop-blur-[2px]"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            />
            <div className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-black/[0.08] bg-white shadow-xl supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]">
              <div className="flex items-center justify-between border-b border-black/[0.06] px-4 py-3.5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6e6e73]">
                  Menu
                </span>
                <button
                  type="button"
                  className="rounded-full p-2 text-[#6e6e73] transition hover:bg-black/[0.05]"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-0.5 p-3" aria-label="Primary mobile">
                {mainNav.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href || pathname?.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "rounded-xl px-4 py-3.5 text-[15px] font-semibold tracking-tight transition",
                        active ? "bg-[#0071e3] text-white" : "text-[#1d1d1f] hover:bg-[#f5f5f7]",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        ) : null}
      </header>
    );
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-canvas/85 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-2xl dark:bg-canvas/72 dark:shadow-[0_1px_0_rgba(255,255,255,0.06)] supports-[padding:max(0px)]:pt-[max(0.35rem,env(safe-area-inset-top))]">
      <Container className="flex min-h-[3.5rem] items-center justify-between gap-2 py-2 sm:min-h-0 sm:h-[4.25rem] sm:gap-4 sm:py-0">
        <Link
          href="/"
          className="group flex min-w-0 max-w-[calc(100vw-6.75rem)] flex-1 flex-col justify-center leading-tight transition hover:text-accent sm:max-w-[calc(100vw-7.5rem)] md:flex-none md:max-w-[min(100%,22rem)]"
        >
          <span className="line-clamp-2 break-words font-display text-[14px] font-semibold tracking-tight min-[400px]:text-[15px] sm:text-lg md:line-clamp-1 md:text-xl">
            {profileIdentity.name}
          </span>
          <span className="mt-0.5 line-clamp-1 text-[9px] font-medium uppercase tracking-[0.12em] text-muted min-[400px]:text-[10px] sm:mt-0 sm:text-[11px] sm:tracking-[0.16em]">
            {profileIdentity.primaryRole}
          </span>
        </Link>

        <nav className="hidden shrink-0 items-center gap-1 md:flex" aria-label="Primary">
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-sm font-medium transition duration-200",
                  active
                    ? "bg-surface text-ink shadow-panel ring-1 ring-border/80"
                    : "text-muted hover:bg-surface/70 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <span className="inline-flex shrink-0 [&>button]:h-9 [&>button]:w-9 sm:[&>button]:h-10 sm:[&>button]:w-10">
            <ThemeToggle />
          </span>
          <button
            type="button"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline bg-elevated/80 text-ink shadow-panel ring-1 ring-inset ring-[var(--ring-inset)] transition hover:border-accent/30 hover:bg-elevated sm:h-10 sm:w-10 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="site-mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <div
          id="site-mobile-nav"
          className="fixed inset-0 z-[60] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-[min(100%,21rem)] flex-col border-l border-hairline bg-canvas shadow-[0_0_0_1px_rgba(0,0,0,0.04)] supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)] dark:bg-canvas">
            <div className="flex items-center justify-between border-b border-hairline px-4 py-3.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Navigate
              </span>
              <button
                type="button"
                className="rounded-full p-2 text-muted transition hover:bg-surface hover:text-ink"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-0.5 p-3" aria-label="Primary mobile">
              {mainNav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3.5 text-[15px] font-semibold tracking-tight transition",
                      active
                        ? "bg-accent text-white"
                        : "text-ink hover:bg-surface/90",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}

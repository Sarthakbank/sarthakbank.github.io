"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/content/nav";
import { homeNav } from "@/content/homeNav";
import { profileIdentity } from "@/content/profile";
import { homeHero } from "@/content/home";
import { appleNavLink } from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
function isStitchEditorialPath(pathname: string | null) {
  return (
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/contact" ||
    pathname === "/case-study" ||
    pathname?.startsWith("/case-study/") ||
    pathname?.startsWith("/projects/")
  );
}

/** Inner pages already migrated to the light Apple style. */
function isLightInnerPath(pathname: string | null) {
  return (
    pathname === "/contact" ||
    pathname === "/about" ||
    pathname === "/case-study" ||
    pathname?.startsWith("/case-study/") === true ||
    pathname?.startsWith("/projects/") === true
  );
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const editorial = isStitchEditorialPath(pathname);

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

  const isHome = pathname === "/";
  const lightInner = isLightInnerPath(pathname);

  if (lightInner) {
    return (
      <header className="sticky top-0 z-[80] border-b border-black/[0.06] bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/72">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-5 py-3.5 sm:px-8 sm:py-4">
          <Link
            href="/"
            className="min-w-0 shrink font-display text-base font-semibold tracking-tight text-[#1d1d1f] md:text-lg"
          >
            {homeHero.name}
          </Link>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    appleNavLink,
                    active && "text-[#0071e3]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex shrink-0 items-center">
            <button
              type="button"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-[#f5f5f7] text-[#1d1d1f] transition hover:bg-[#e8e8ed] lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="light-inner-mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div
            id="light-inner-mobile-nav"
            className="fixed inset-0 z-[60] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            />
            <div className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-black/[0.06] bg-white shadow-xl supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]">
              <div className="flex items-center justify-between border-b border-black/[0.06] px-4 py-3.5">
                <span className="text-[13px] font-medium text-[#6e6e73]">Menu</span>
                <button
                  type="button"
                  className="rounded-full p-2 text-[#6e6e73] transition hover:bg-[#f5f5f7]"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 p-3" aria-label="Primary mobile">
                {mainNav.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-[15px] font-semibold transition",
                        active
                          ? "bg-[#f5f5f7] text-[#0071e3]"
                          : "text-[#1d1d1f] hover:bg-[#f5f5f7]",
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

  if (isHome) {
    return (
      <header className="sticky top-0 z-[80] border-b border-black/[0.06] bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/72">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-5 py-3.5 sm:px-8 sm:py-4">
          <Link
            href="/"
            className="min-w-0 shrink font-display text-base font-semibold tracking-tight text-[#1d1d1f] md:text-lg"
          >
            {homeHero.name}
          </Link>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {homeNav.map((item) => (
              <Link key={item.href} href={item.href} className={appleNavLink}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center">
            <button
              type="button"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-[#f5f5f7] text-[#1d1d1f] transition hover:bg-[#e8e8ed] lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="home-mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div
            id="home-mobile-nav"
            className="fixed inset-0 z-[60] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            />
            <div className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-black/[0.06] bg-white shadow-xl supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]">
              <div className="flex items-center justify-between border-b border-black/[0.06] px-4 py-3.5">
                <span className="text-[13px] font-medium text-[#6e6e73]">Menu</span>
                <button
                  type="button"
                  className="rounded-full p-2 text-[#6e6e73] transition hover:bg-[#f5f5f7]"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 p-3" aria-label="Primary mobile">
                {homeNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-[15px] font-semibold text-[#1d1d1f] transition hover:bg-[#f5f5f7]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        ) : null}
      </header>
    );
  }

  if (editorial) {
    return (
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-white/[0.05] backdrop-blur-md",
          "bg-[#0b0d10]/85 supports-[backdrop-filter]:bg-[#0b0d10]/75",
        )}
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-[90rem] items-center justify-between gap-3 px-4 py-3.5 sm:px-6 md:px-16 md:py-4",
          )}
        >
          <Link
            href="/"
            className="min-w-0 shrink font-display text-base font-bold tracking-tight text-[#e1e2e8] md:text-lg"
          >
            {homeHero.name}
          </Link>
          <nav className="hidden min-w-0 items-center gap-5 lg:flex" aria-label="Primary">
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
                    "whitespace-nowrap text-base tracking-tight transition-colors",
                    active
                      ? "border-b border-[#00d1ff] pb-0.5 font-bold text-[#4cd6ff] [text-shadow:0_0_10px_rgba(0,209,255,0.35)]"
                      : "text-[#bbc9cf]/70 hover:bg-[#00d1ff]/5 hover:text-[#e1e2e8] px-1 py-0.5 rounded",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex shrink-0 items-center">
            <button
              type="button"
              className={cn(
                "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border shadow-sm transition lg:hidden",
                "border-white/[0.08] bg-[#111418]/80 text-[#e1e2e8] hover:border-white/15 hover:bg-[#171a20]",
              )}
              aria-expanded={menuOpen}
              aria-controls="editorial-mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div
            id="editorial-mobile-nav"
            className="fixed inset-0 z-[60] lg:hidden"
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
            <div className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-white/[0.08] bg-[#0b0d10] shadow-xl supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3.5">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#859399]">
                  Menu
                </span>
                <button
                  type="button"
                  className="rounded-full p-2 text-[#bbc9cf] transition hover:bg-white/[0.06]"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 p-3" aria-label="Primary mobile">
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
                        "rounded-lg px-4 py-3 text-[15px] font-semibold tracking-tight transition",
                        active
                          ? "bg-[#00d1ff]/15 text-[#4cd6ff]"
                          : "text-[#bbc9cf] hover:bg-white/[0.06] hover:text-[#e1e2e8]",
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

        <div className="flex shrink-0 items-center">
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

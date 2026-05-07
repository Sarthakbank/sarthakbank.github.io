"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/content/nav";
import { profileIdentity } from "@/content/profile";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-canvas/80 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-2xl dark:bg-canvas/70 dark:shadow-[0_1px_0_rgba(255,255,255,0.06)]">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <Link
          href="/"
          className="group flex min-w-0 flex-col leading-tight transition hover:text-accent"
        >
          <span className="truncate font-display text-lg font-semibold tracking-tight sm:text-xl">
            {profileIdentity.name}
          </span>
          <span className="truncate text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
            {profileIdentity.primaryRole}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
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

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav pathname={pathname} />
        </div>
      </Container>
    </header>
  );
}

function MobileNav({ pathname }: { pathname: string | null }) {
  return (
    <nav
      className="flex max-w-[45vw] flex-wrap justify-end gap-1 md:hidden"
      aria-label="Primary mobile"
    >
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
              "rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide transition",
              active
                ? "bg-accent text-white shadow-lift"
                : "border border-hairline bg-elevated/80 text-muted shadow-panel backdrop-blur",
            )}
          >
            {item.label === "Featured project" ? "Project" : item.label}
          </Link>
        );
      })}
    </nav>
  );
}

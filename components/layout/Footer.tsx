"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiGithub } from "react-icons/si";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { mainNav } from "@/content/nav";
import { profileIdentity } from "@/content/profile";
import { contactChannels } from "@/content/contact";
import { Container } from "./Container";

export function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  if (pathname === "/" || pathname === "/case-study") {
    return null;
  }

  return (
    <footer className="border-t border-border bg-surface/50 py-14">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md space-y-3">
          <p className="font-display text-xl font-semibold text-ink">
            {profileIdentity.name}
          </p>
          <p className="text-sm text-muted">
            {profileIdentity.primaryRole} · {profileIdentity.headline} ·{" "}
            {profileIdentity.location}
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Explore
            </p>
            <ul className="space-y-2 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink transition hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Connect
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={contactChannels.email.href}
                  className="inline-flex items-center gap-2.5 text-ink transition hover:text-accent"
                >
                  <FaEnvelope className="h-4 w-4 shrink-0 text-accent/90" aria-hidden />
                  {contactChannels.email.value}
                </a>
              </li>
              <li>
                <a
                  href={contactChannels.linkedIn.href}
                  className="inline-flex items-center gap-2.5 text-ink transition hover:text-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="h-4 w-4 shrink-0 text-accent/90" aria-hidden />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={contactChannels.github.href}
                  className="inline-flex items-center gap-2.5 text-ink transition hover:text-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub className="h-4 w-4 shrink-0 text-accent/90" aria-hidden />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="mt-12 border-t border-border/60 pt-8">
        <p className="text-xs text-muted">
          © {year} {profileIdentity.name}. Portfolio content reflects approved
          facts; Black Tidemark is a labeled demo case study.
        </p>
      </Container>
    </footer>
  );
}

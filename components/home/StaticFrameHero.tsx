"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { heroBlockoutStill } from "@/content/heroBlockoutManifest";
import { homeCtas, homeHero } from "@/content/home";

/** Stable single-viewport hero — poster still, no scroll/canvas. */
export function StaticFrameHero() {
  return (
    <section
      className="relative min-h-[100dvh] w-full overflow-hidden bg-[#0a0a0c]"
      aria-label="Hero"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/75 via-40% to-transparent"
        style={{ width: "55%" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0c] to-transparent"
        aria-hidden
      />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={heroBlockoutStill}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-contain object-center"
        decoding="async"
        fetchPriority="high"
      />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-center px-5 pb-10 pt-20 sm:px-8 sm:pt-24 lg:px-12">
        <h1 className="max-w-xl font-display text-[clamp(2.1rem,4vw+0.75rem,3.25rem)] font-semibold leading-[1.05] tracking-tight text-white">
          {homeHero.name}
        </h1>
        <p className="mt-3 text-xl font-medium tracking-tight text-[#d1d1d6] sm:text-2xl">
          {homeHero.role}
        </p>
        <p className="mt-5 max-w-md text-pretty text-[17px] leading-relaxed text-[#a1a1a6] sm:text-lg">
          {homeHero.tagline}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink
            href={homeCtas.primary.href}
            variant="primary"
            className="!rounded-full !border-0 !bg-[#0a84ff] !px-6 !py-3 !text-[15px] !font-semibold !text-white hover:!brightness-110"
          >
            {homeCtas.primary.label}
          </ButtonLink>
          <ButtonLink
            href={homeCtas.secondary.href}
            variant="secondary"
            icon={<ArrowUpRight />}
            iconPosition="end"
            className="!rounded-full !border-white/15 !bg-white/10 !px-6 !py-3 !text-[15px] !font-semibold !text-white backdrop-blur-sm hover:!bg-white/15"
          >
            {homeCtas.secondary.label}
          </ButtonLink>
          <ButtonLink
            href={homeCtas.tertiary.href}
            variant="secondary"
            icon={<Mail />}
            className="!rounded-full !border-white/15 !bg-transparent !px-6 !py-3 !text-[15px] !font-semibold !text-[#e5e5ea] hover:!bg-white/10"
          >
            {homeCtas.tertiary.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

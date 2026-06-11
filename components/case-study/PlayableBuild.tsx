"use client";

import {
  Download,
  ExternalLink,
  FileArchive,
  HardDrive,
  MonitorPlay,
  Package,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type {
  ProjectBuildCard,
  ProjectPlayableBuild,
} from "@/content/projects/types";
import { AppleReveal } from "@/components/shared/AppleReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { innerBody } from "@/lib/appleInnerTokens";
import { cn } from "@/lib/cn";

const CARD_ICONS: Record<ProjectBuildCard["icon"], LucideIcon> = {
  format: FileArchive,
  size: HardDrive,
  platform: MonitorPlay,
  version: Package,
};

/**
 * Playable Build — a premium "game-release" download area. The visual peak of
 * the case study: a spotlight card with floating glow, a strong download CTA,
 * a secondary "view files" link, and a four-card spec grid (format / size /
 * platform / version).
 *
 * The ~616 MB packaged build is hosted on Google Drive (off-repo), so the
 * actions open externally. All motion is gated by `useReducedMotion`.
 */
export function PlayableBuild({ data }: { data: ProjectPlayableBuild }) {
  const reduce = useReducedMotion();

  return (
    <AppleReveal>
      <div className="relative">
        {/* Floating spotlight glow — bookends the hero; subtle motion-safe drift. */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[480px] w-[900px] max-w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(0,113,227,0.18),rgba(88,86,214,0.11)_45%,transparent_75%)] blur-[48px]"
          animate={reduce ? undefined : { opacity: [0.6, 0.95, 0.6], scale: [1, 1.05, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="group relative overflow-hidden rounded-[32px] border border-black/[0.06] bg-gradient-to-b from-white to-[#f6f7fb] px-6 py-12 shadow-[0_2px_8px_rgba(0,0,0,0.05),0_36px_80px_-24px_rgba(20,30,80,0.26)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* faint top sheen */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent"
            aria-hidden
          />
          {/* corner gradient accent */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[conic-gradient(from_120deg,rgba(0,113,227,0.10),rgba(157,52,214,0.10),transparent_70%)] blur-2xl"
            aria-hidden
          />

          <div className="relative mx-auto max-w-2xl text-center">
            {/* Download badge */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0071e3] to-[#5856d6] text-white shadow-[0_10px_28px_-8px_rgba(0,113,227,0.6)]">
              <Download className="h-8 w-8" strokeWidth={1.8} aria-hidden />
            </div>

            <SectionHeading
              as="h2"
              variant="section"
              inline
              eyebrow={data.eyebrow}
              lead={data.lead}
              title={data.title}
              gradient="blue-purple"
              className="mt-7 text-center"
            />

            <p className={cn("mx-auto mt-5 max-w-xl text-pretty", innerBody)}>
              {data.description}
            </p>

            {/* Strong CTA hierarchy: primary download + secondary view-files */}
            <div className="mt-9 flex flex-col items-center gap-4">
              <a
                href={data.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#0071e3] px-8 py-4 text-[16px] font-semibold text-white shadow-[0_12px_32px_-8px_rgba(0,113,227,0.6)] transition duration-300 hover:bg-[#0077ed] hover:shadow-[0_18px_44px_-8px_rgba(0,113,227,0.72)] sm:w-auto"
              >
                <span className="motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover/btn:translate-y-0.5">
                  <Download className="h-5 w-5" aria-hidden />
                </span>
                {data.downloadLabel}
              </a>
              <a
                href={data.secondaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/sec inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0071e3] transition hover:text-[#0077ed]"
              >
                {data.secondaryLabel}
                <ExternalLink
                  className="h-4 w-4 transition-transform duration-300 motion-safe:group-hover/sec:translate-x-0.5 motion-safe:group-hover/sec:-translate-y-0.5"
                  aria-hidden
                />
              </a>
            </div>
          </div>

          {/* Spec cards — format / size / platform / version */}
          <div className="relative mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {data.cards.map((card) => {
              const Icon = CARD_ICONS[card.icon];
              return (
                <div
                  key={card.label}
                  className="group/card relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white/80 p-5 text-left shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 hover:border-[#0071e3]/25 hover:shadow-[0_16px_36px_-16px_rgba(0,113,227,0.4)]"
                >
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0071e3]/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
                    aria-hidden
                  />
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#0071e3]/10 text-[#0071e3] ring-1 ring-[#0071e3]/15">
                    <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                  </span>
                  <p className="relative mt-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#86868b]">
                    {card.label}
                  </p>
                  <p className="relative mt-1 text-[16px] font-semibold tracking-tight text-[#1d1d1f]">
                    {card.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AppleReveal>
  );
}

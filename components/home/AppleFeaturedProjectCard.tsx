"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type FeaturedProject = {
  id: string;
  kind: "featured" | "comingSoon";
  chip: string;
  chipColor: string;
  title: string;
  label: string;
  description: string;
  imageSrc?: string;
  gradient?: string;
  href?: string;
  cta: string;
  meta?: readonly { label: string; value: string }[];
};

type Props = {
  project: FeaturedProject;
  isActive?: boolean;
};

export function AppleFeaturedProjectCard({ project, isActive = false }: Props) {
  const comingSoon = project.kind === "comingSoon";

  return (
    <article
      className={cn(
        "group relative isolate min-h-[440px] w-full overflow-hidden rounded-[32px] sm:min-h-[520px] lg:min-h-[580px]",
        "transition-all duration-500 ease-out",
        "hover:shadow-[0_14px_42px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.06)]",
        isActive
          ? "shadow-[0_14px_42px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.06)]"
          : "shadow-[0_8px_28px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)]",
        !isActive && "brightness-[0.99]",
      )}
    >
      {/* ── Full-bleed visual (entire card) ───────────────── */}
      <div className="absolute inset-0 bg-[#1d1d1f]">
        {comingSoon ? (
          <div
            className="absolute inset-0"
            style={{
              background:
                project.gradient ??
                "linear-gradient(135deg, #5ac8fa 0%, #0071e3 40%, #5856d6 75%, #af52de 100%)",
            }}
            aria-hidden
          />
        ) : (
          <Image
            src={project.imageSrc!}
            alt=""
            fill
            className="object-cover object-center transition duration-700 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 82vw, 1000px"
            priority
          />
        )}
        {/* Scrim for readable overlay text — heavier toward bottom-left */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent"
          aria-hidden
        />
        {comingSoon && (
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
            aria-hidden
          />
        )}
      </div>

      {/* ── Overlay content ───────────────────────────────── */}
      <div className="relative z-10 flex min-h-[440px] flex-col justify-end p-7 sm:min-h-[520px] sm:p-10 lg:min-h-[580px] lg:p-12">
        <span
          className="mb-5 inline-flex w-fit rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white"
          style={{
            backgroundColor: project.chipColor,
            boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
          }}
        >
          {project.chip}
        </span>

        <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-white/65">
          {project.label}
        </p>

        <h3 className="mt-2.5 max-w-[14ch] font-display text-[clamp(1.75rem,3.5vw+0.5rem,2.85rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-white">
          {project.title}
        </h3>

        <p className="mt-4 max-w-xl text-pretty text-[16px] leading-[1.6] text-white/85 sm:text-[17px]">
          {project.description}
        </p>

        <div className="mt-9">
          {comingSoon ? (
            <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-white/55">
              {project.cta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </span>
          ) : (
            <Link
              href={project.href!}
              className="inline-flex items-center gap-1.5 text-[17px] font-semibold text-[#2997ff] transition hover:text-[#5ac8fa]"
            >
              {project.cta}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

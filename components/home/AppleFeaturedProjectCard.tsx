"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  appleBody,
  appleLink,
  appleMetaLabel,
  appleMetaValue,
  appleProductCard,
} from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";

export type FeaturedProject = {
  kind?: "featured" | "comingSoon";
  chip: string;
  chipColor: string;
  title: string;
  label: string;
  description: string;
  imageSrc?: string;
  href?: string;
  cta?: string;
  meta: readonly { label: string; value: string }[];
};

export function AppleFeaturedProjectCard({ project }: { project: FeaturedProject }) {
  const comingSoon = project.kind === "comingSoon";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        appleProductCard,
        "group flex h-full flex-col",
        comingSoon && "hover:shadow-[0_16px_48px_rgba(0,0,0,0.10)]",
      )}
    >
      <div className="relative w-full overflow-hidden rounded-t-[32px] bg-[#f5f5f7]">
        {comingSoon ? (
          <div
            className="h-[190px] sm:h-[210px]"
            style={{
              background:
                project.title.includes("02")
                  ? "linear-gradient(135deg, rgba(90,200,250,0.55) 0%, rgba(0,113,227,0.25) 40%, rgba(175,82,222,0.22) 100%)"
                  : "linear-gradient(135deg, rgba(255,149,0,0.35) 0%, rgba(255,45,85,0.22) 45%, rgba(88,86,214,0.25) 100%)",
            }}
            aria-hidden
          />
        ) : (
          // Keep the approved image-based header for the real featured card.
          <Image
            src={project.imageSrc!}
            alt={`${project.title} — thumbnail`}
            fill
            className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 86vw, (max-width: 1200px) 33vw, 520px"
            priority
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" aria-hidden />
        <span
          className="absolute left-5 top-5 z-10 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white shadow-[0_4px_14px_rgba(0,113,227,0.4)] sm:left-6 sm:top-6"
          style={{ backgroundColor: project.chipColor }}
        >
          {project.chip}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#6e6e73]">
          {project.label}
        </p>
        <h3 className="mt-1.5 font-display text-[clamp(1.55rem,1.6vw+0.6rem,2.05rem)] font-semibold tracking-[-0.02em] text-[#1d1d1f]">
          {project.title}
        </h3>
        <p className={cn("mt-3 text-pretty", appleBody)}>{project.description}</p>

        {project.meta.length ? (
          <dl className="mt-7 grid gap-x-10 gap-y-4 border-t border-black/[0.06] pt-7 sm:grid-cols-2">
            {project.meta.map((row) => (
              <div key={row.label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
                <dt className={appleMetaLabel}>{row.label}</dt>
                <dd className={appleMetaValue}>{row.value}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <div className="mt-6 flex-1 border-t border-black/[0.06]" aria-hidden />
        )}

        {comingSoon ? (
          <span className={cn(appleLink, "mt-7 inline-flex opacity-60")} aria-hidden>
            Coming soon
            <ArrowRight className="h-4 w-4" aria-hidden />
          </span>
        ) : (
          <Link href={project.href!} className={cn(appleLink, "mt-7 inline-flex")}>
            {project.cta}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        )}
      </div>
    </motion.article>
  );
}


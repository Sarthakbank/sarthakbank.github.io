"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { homeFeaturedPreview } from "@/content/home";
import { homeFeaturedMedia } from "@/content/homeMedia";
import {
  appleBody,
  appleLink,
  appleMetaLabel,
  appleMetaValue,
  appleProductCard,
} from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";

export function AppleFeaturedCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(appleProductCard, "group")}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-[32px] bg-[#f5f5f7] sm:aspect-[21/9]">
        <Image
          src={homeFeaturedMedia.hero}
          alt={`${homeFeaturedPreview.title} — level thumbnail`}
          fill
          className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 1152px) 100vw, 1152px"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent"
          aria-hidden
        />
        <span
          className="absolute left-5 top-5 z-10 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white shadow-[0_4px_14px_rgba(0,113,227,0.4)] sm:left-6 sm:top-6"
          style={{ backgroundColor: homeFeaturedPreview.chipColor }}
        >
          {homeFeaturedPreview.chip}
        </span>
      </div>

      <div className="p-7 sm:p-9 lg:p-10">
        <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#6e6e73]">
          {homeFeaturedPreview.subtitle}
        </p>
        <h3 className="mt-1.5 font-display text-[clamp(1.65rem,2vw+0.5rem,2.35rem)] font-semibold tracking-[-0.02em] text-[#1d1d1f]">
          {homeFeaturedPreview.title}
        </h3>
        <p className={cn("mt-3 max-w-2xl text-pretty", appleBody)}>{homeFeaturedPreview.description}</p>

        <dl className="mt-7 grid gap-x-10 gap-y-4 border-t border-black/[0.06] pt-7 sm:grid-cols-2">
          {homeFeaturedPreview.metaLines.map((row) => (
            <div key={row.label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
              <dt className={appleMetaLabel}>{row.label}</dt>
              <dd className={appleMetaValue}>{row.value}</dd>
            </div>
          ))}
        </dl>

        <Link href={homeFeaturedPreview.href} className={cn(appleLink, "mt-7 inline-flex")}>
          {homeFeaturedPreview.cta}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </motion.article>
  );
}

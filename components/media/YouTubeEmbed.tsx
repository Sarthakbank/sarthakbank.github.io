"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ExternalLink, Play } from "lucide-react";
import { cn } from "@/lib/cn";
import { useImmersiveLab } from "@/components/experiment/ImmersiveLabProvider";
import { DepthFrame } from "@/components/experiment/DepthFrame";
import { imageReveal, imageRevealCinematic } from "@/components/motion/motionPresets";
import { demoVideoCategory, type DemoVideoCategory } from "@/content/demoMedia";

const tiltSpring = { stiffness: 240, damping: 36, mass: 0.42 };

function LabYoutubePosterTilt({ children }: { children: ReactNode }) {
  const [coarsePointer, setCoarsePointer] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: coarse)");
    const sync = () => setCoarsePointer(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(
    useTransform(py, [-0.5, 0.5], [3.8, -3.8]),
    tiltSpring,
  );
  const rotateY = useSpring(
    useTransform(px, [-0.5, 0.5], [-4.8, 4.8]),
    tiltSpring,
  );

  const reset = useCallback(() => {
    px.set(0);
    py.set(0);
  }, [px, py]);

  const move = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const r = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      px.set(Math.max(-0.5, Math.min(0.5, x * 1.05)));
      py.set(Math.max(-0.5, Math.min(0.5, y * 1.05)));
    },
    [px, py],
  );

  if (coarsePointer) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-black/10">{children}</div>
    );
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-default overflow-hidden [perspective:1400px]"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onPointerMove={move}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      {children}
    </motion.div>
  );
}

type Props = {
  videoId: string;
  watchUrl: string;
  posterSrc: string;
  title: string;
  caption: string;
  disclaimer: string;
  category: DemoVideoCategory;
  className?: string;
  cinematic?: boolean;
  /** Stronger depth + shadow for closing / finale moments */
  featuredClosing?: boolean;
};

/**
 * Reference / mood / placeholder video: poster-first, optional embed on demand.
 * Static-export friendly; never implies third-party footage is the author’s project work.
 */
export function YouTubeEmbed({
  videoId,
  watchUrl,
  posterSrc,
  title,
  caption,
  disclaimer,
  category,
  className,
  cinematic = false,
  featuredClosing = false,
}: Props) {
  const [embedActive, setEmbedActive] = useState(false);
  const lab = useImmersiveLab();
  const reduce = useReducedMotion();
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;

  const posterInner = (
    <>
      <Image
        src={posterSrc}
        alt=""
        role="presentation"
        fill
        className={cn(
          "object-cover object-center transition duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)]",
          lab ? "group-hover:scale-[1.045]" : "group-hover:scale-[1.04]",
        )}
        sizes="(min-width: 1280px) 960px, 100vw"
        priority={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/80 via-transparent to-canvas/15 dark:from-black/80 dark:to-transparent" />
      {lab ? (
        <div
          className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen immersive-light-sweep dark:opacity-40"
          aria-hidden
        />
      ) : null}
      <div className="pointer-events-none absolute inset-0 opacity-0 ring-1 ring-inset ring-white/15 transition duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 flex flex-col items-center justify-end gap-3 px-4 pb-6 pt-12 sm:flex-row sm:justify-center sm:pb-7">
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-xl border border-hairline bg-elevated/95 px-4 py-3 text-xs font-semibold text-ink shadow-panel backdrop-blur-md transition hover:border-accent/45 hover:shadow-[0_18px_44px_-24px_rgba(0,0,0,0.35)] sm:w-auto"
        >
          <ExternalLink className="h-4 w-4 shrink-0 text-accent" aria-hidden />
          Watch reference video
        </a>
        <button
          type="button"
          onClick={() => setEmbedActive(true)}
          className="pointer-events-auto inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-xl border border-accent/40 bg-accent/12 px-4 py-3 text-xs font-semibold text-ink shadow-panel backdrop-blur-md transition hover:bg-accent/20 hover:shadow-[0_20px_50px_-22px_color-mix(in_srgb,var(--color-accent)_28%,transparent)] sm:w-auto"
        >
          <Play className="h-4 w-4 shrink-0 text-accent" aria-hidden />
          Play embedded preview
        </button>
      </div>
    </>
  );

  const figure = (
    <figure
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-hairline shadow-lift ring-1 ring-inset ring-[var(--ring-inset)]",
        lab &&
          "shadow-[0_36px_100px_-50px_rgba(0,0,0,0.28)] ring-white/[0.04] dark:shadow-[0_44px_110px_-40px_rgba(0,0,0,0.65)] dark:ring-white/[0.05]",
        lab &&
          featuredClosing &&
          "shadow-[0_48px_120px_-48px_rgba(0,0,0,0.35)] ring-success/15 dark:shadow-[0_56px_130px_-42px_rgba(0,0,0,0.72)] dark:ring-success/10",
        className,
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-surface via-elevated/90 to-surface">
        {!embedActive ? (
          lab && !reduce ? (
            <LabYoutubePosterTilt>{posterInner}</LabYoutubePosterTilt>
          ) : (
            posterInner
          )
        ) : (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
      </div>

      <div className="flex flex-col gap-2 border-t border-hairline bg-elevated/95 px-4 py-2.5 backdrop-blur-md dark:bg-elevated/85 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <span className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-muted sm:text-left">
          {demoVideoCategory[category]}
        </span>
        {embedActive ? (
          <button
            type="button"
            onClick={() => setEmbedActive(false)}
            className="text-center text-[11px] font-semibold text-accent underline-offset-2 hover:underline sm:text-right"
          >
            Close preview
          </button>
        ) : null}
      </div>

      <figcaption className="space-y-1 border-t border-hairline px-4 py-3 text-center sm:px-5 sm:py-3.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">{caption}</p>
        <p className="text-sm font-medium leading-snug text-ink">{title}</p>
        <p className="text-[11px] leading-relaxed text-muted">{disclaimer}</p>
      </figcaption>
    </figure>
  );

  const wrapped =
    lab && !reduce ? (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={
          featuredClosing
            ? { once: true, margin: "-18% 0px -24% 0px", amount: 0.1 }
            : cinematic
              ? { once: true, margin: "-14% 0px -20% 0px", amount: 0.14 }
              : { once: true, margin: "-10% 0px -14% 0px", amount: 0.18 }
        }
        variants={
          featuredClosing || cinematic ? imageRevealCinematic : imageReveal
        }
        className="w-full"
      >
        {figure}
      </motion.div>
    ) : (
      figure
    );

  if (lab) {
    return (
      <DepthFrame
        intensity={featuredClosing ? 0.64 : 0.52}
        className="group rounded-3xl"
      >
        {wrapped}
      </DepthFrame>
    );
  }

  return figure;
}

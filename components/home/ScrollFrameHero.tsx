"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { heroBlockoutManifest } from "@/content/heroBlockoutManifest";
import { homeCtas, homeHero } from "@/content/home";
import { useScrollFrameIndex } from "@/hooks/useScrollFrameIndex";
import { loadHeroFrame, preloadHeroFrames } from "@/lib/heroFramePreload";
import { cn } from "@/lib/cn";

const DEBUG_HERO = process.env.NEXT_PUBLIC_DEBUG_HERO === "true";
const INITIAL_PRELOAD = 6;
const NEIGHBOR_PRELOAD = 4;

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

function useReducedMotionPreference() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduce(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduce;
}

function drawFrame(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  width: number,
  height: number,
) {
  if (!img.naturalWidth || !img.naturalHeight || width < 1 || height < 1) return;
  const scale = Math.min(width / img.naturalWidth, height / img.naturalHeight);
  const w = img.naturalWidth * scale;
  const h = img.naturalHeight * scale;
  const x = (width - w) / 2;
  const y = (height - h) / 2;
  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(img, x, y, w, h);
}

export function ScrollFrameHero() {
  const { frames, poster, frameCount, arc, scrollVh } = heroBlockoutManifest;
  const scrollRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const mounted = useMounted();
  const reduceMotion = useReducedMotionPreference();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const staticMode = reduceMotion;
  const frameStep = isMobile && !reduceMotion ? 2 : 1;

  const { frameIndex, progress, segment } = useScrollFrameIndex(scrollRef, {
    frameCount,
    arc,
    frameStep,
    disabled: !mounted || staticMode,
  });

  const displayIndex = staticMode ? arc.holdEnd : frameIndex;
  const displaySegment = staticMode ? "hold" : segment;
  const [ready, setReady] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const renderFrame = useCallback(
    async (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas || loadError) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const src = frames[index] ?? poster;
      try {
        let img = imagesRef.current.get(index);
        if (!img) {
          img = await loadHeroFrame(src);
          imagesRef.current.set(index, img);
        }
        if (!img.naturalWidth) return;

        const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
        const rect = canvas.getBoundingClientRect();
        const w = Math.max(1, Math.floor(rect.width * dpr));
        const h = Math.max(1, Math.floor(rect.height * dpr));
        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
        }
        drawFrame(ctx, img, w, h);
      } catch {
        setLoadError(true);
      }
    },
    [isMobile, frames, poster, loadError],
  );

  useEffect(() => {
    if (!mounted) return;
    preloadHeroFrames([poster, ...frames.slice(0, INITIAL_PRELOAD)]);
    void loadHeroFrame(poster)
      .then(() => setReady(true))
      .catch(() => setLoadError(true));
  }, [mounted, poster, frames]);

  useEffect(() => {
    if (!ready || loadError) return;
    const start = Math.max(0, displayIndex - NEIGHBOR_PRELOAD);
    const end = Math.min(frameCount - 1, displayIndex + NEIGHBOR_PRELOAD);
    preloadHeroFrames(frames.slice(start, end + 1));
    void renderFrame(displayIndex);
  }, [displayIndex, ready, loadError, renderFrame, frames, frameCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !ready || loadError) return;
    const ro = new ResizeObserver(() => void renderFrame(displayIndex));
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [displayIndex, ready, loadError, renderFrame]);

  if (loadError) {
    throw new Error("Hero frame load failed");
  }

  const scrollHeightVh = isMobile ? scrollVh.mobile : scrollVh.desktop;
  const hideObject = displaySegment === "intro" || displayIndex <= arc.introHold;
  const objectDominant = displaySegment === "hold" || displaySegment === "rotate";
  const showCtas = displayIndex >= arc.enterEnd || staticMode;
  const showScrollHint = !staticMode && displaySegment === "intro";

  return (
    <section
      ref={scrollRef}
      className="relative w-full overflow-x-hidden bg-[#0a0a0c]"
      style={{ minHeight: `${scrollHeightVh}vh` }}
      aria-label="Hero"
    >
      <div className="sticky top-0 z-0 h-[100dvh] min-h-[520px] w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className={cn(
            "absolute inset-0 h-full w-full transition-opacity duration-300",
            hideObject || !ready ? "opacity-0" : "opacity-100",
          )}
          aria-hidden
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={poster}
          alt=""
          className={cn(
            "absolute inset-0 h-full w-full object-contain transition-opacity duration-300",
            ready && !hideObject ? "opacity-0" : "opacity-100",
          )}
          decoding="async"
          aria-hidden
        />

        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/88 to-transparent",
            objectDominant ? "via-[45%]" : "via-[38%]",
          )}
          style={{ width: objectDominant ? "58%" : "52%" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a0a0c] to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 max-md:bg-gradient-to-b max-md:from-[#0a0a0c] max-md:from-0% max-md:via-[#0a0a0c]/95 max-md:via-35% max-md:to-transparent max-md:to-65%"
          aria-hidden
        />

        <div
          className={cn(
            "relative z-10 flex h-full flex-col justify-center px-5 pb-8 pt-20 sm:px-8 sm:pb-6 sm:pt-24 lg:px-12",
            objectDominant ? "max-w-[min(100%,19rem)]" : "max-w-xl",
          )}
        >
          <h1 className="font-display text-[clamp(2.1rem,4vw+0.75rem,3.25rem)] font-semibold leading-[1.05] tracking-tight text-white">
            {homeHero.name}
          </h1>
          <p className="mt-3 text-xl font-medium tracking-tight text-[#d1d1d6] sm:text-2xl">
            {homeHero.role}
          </p>
          <p className="mt-5 max-w-md text-pretty text-[17px] leading-relaxed text-[#a1a1a6] sm:text-lg">
            {homeHero.tagline}
          </p>
          <div
            className={cn(
              "mt-9 flex flex-wrap gap-3 transition-opacity duration-500",
              showCtas ? "opacity-100" : "pointer-events-none opacity-0",
            )}
          >
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
          {staticMode ? (
            <p className="mt-6 text-[12px] text-[#636366]">Reduced motion — showing hero still.</p>
          ) : showScrollHint ? (
            <p className="mt-6 text-[12px] text-[#636366]">Scroll to reveal the level blockout</p>
          ) : null}
        </div>

        {DEBUG_HERO ? (
          <div className="absolute bottom-4 right-4 z-20 rounded-lg border border-cyan-500/30 bg-black/80 px-3 py-2 font-mono text-[11px] text-cyan-300">
            <p>
              frame {displayIndex + 1} / {frameCount}
            </p>
            <p>segment: {displaySegment}</p>
            <p>progress: {(progress * 100).toFixed(1)}%</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

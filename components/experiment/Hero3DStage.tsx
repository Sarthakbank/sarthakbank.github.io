"use client";

import type { MutableRefObject } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { HeroFloatContent } from "./r3f/HeroFloatContent";

function StaticFallback({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full min-h-[240px] w-full items-center justify-center bg-gradient-to-br from-accent/[0.12] via-transparent to-success/[0.06] dark:from-accent/[0.18]",
        className,
      )}
      aria-hidden
    >
      <div className="h-36 w-48 rounded-[1.75rem] border border-white/[0.07] bg-gradient-to-b from-[#0a0c10] via-[#121820] to-[#06080c] opacity-80 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.65)] ring-1 ring-inset ring-white/[0.04] dark:from-[#050608] dark:via-[#0e1218] dark:to-black" />
    </div>
  );
}

const cameraPresets = {
  ribbon: { position: [0, 0.08, 5.35] as const, fov: 40 },
  /** Homepage PS5 — pulled back, wider FOV, full silhouette, not cropped. */
  showcase: { position: [0.22, 0.1, 3.45] as const, fov: 24.5 },
} as const;

const scalePresets = {
  ribbon: 0.72,
  showcase: 1.05,
} as const;

/**
 * Interactive WebGL — client-only Canvas; respects reduced motion.
 * Optional `scrollProgressRef` (0–1) drives curated product angles (featured scroll).
 */
export function Hero3DStage({
  className,
  scale,
  preset = "ribbon",
  scrollProgressRef,
  interactive,
  modelFit,
}: {
  className?: string;
  scale?: number;
  preset?: "ribbon" | "showcase";
  /** When set, camera / model angles follow scroll; pair with a tall pinned section. */
  scrollProgressRef?: MutableRefObject<number>;
  /** Pointer response; defaults false when `scrollProgressRef` is set. */
  interactive?: boolean;
  /** Passed to scene fitter — higher = larger silhouette in frame. */
  modelFit?: number;
}) {
  const reduce = useReducedMotion();
  const mouseRef = useRef({ x: 0, y: 0 });
  const pointerRaf = useRef<number | null>(null);
  const pendingPointer = useRef({ x: 0, y: 0 });

  const resolvedScale = scale ?? scalePresets[preset];
  const cam = cameraPresets[preset];
  const pointerOn = interactive ?? scrollProgressRef == null;

  if (reduce) {
    return <StaticFallback className={className} />;
  }

  const flushPointer = () => {
    pointerRaf.current = null;
    mouseRef.current = pendingPointer.current;
  };

  const syncPointer = (e: {
    currentTarget: HTMLDivElement;
    clientX: number;
    clientY: number;
  }) => {
    if (!pointerOn) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    pendingPointer.current = {
      x: ((e.clientX - r.left) / r.width - 0.5) * 2,
      y: ((e.clientY - r.top) / r.height - 0.5) * 2,
    };
    if (pointerRaf.current == null) {
      pointerRaf.current = requestAnimationFrame(flushPointer);
    }
  };

  const clearPointer = () => {
    if (pointerRaf.current != null) {
      cancelAnimationFrame(pointerRaf.current);
      pointerRaf.current = null;
    }
    mouseRef.current = { x: 0, y: 0 };
  };

  return (
    <div
      className={cn("relative min-h-[240px] w-full overflow-hidden touch-pan-y", className)}
      onPointerMove={syncPointer}
      onPointerDown={syncPointer}
      onPointerLeave={clearPointer}
      onPointerCancel={clearPointer}
    >
      <Canvas
        className="h-full min-h-[inherit] w-full"
        camera={{ position: [...cam.position], fov: cam.fov }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <HeroFloatContent
            mouseRef={mouseRef}
            scale={resolvedScale}
            scrollProgressRef={scrollProgressRef}
            interactive={pointerOn}
            modelFit={modelFit}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

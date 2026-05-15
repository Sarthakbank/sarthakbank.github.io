"use client";

import type { MutableRefObject } from "react";
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { BlockoutLoadFallback, HeroFloatContent } from "./r3f/HeroFloatContent";

function CanvasSuspenseFallback() {
  return (
    <>
      <ambientLight intensity={0.18} />
      <hemisphereLight color="#ffffff" groundColor="#d8dce6" intensity={0.55} />
      <Center>
        <BlockoutLoadFallback />
      </Center>
    </>
  );
}

const cameraPresets = {
  ribbon: { position: [0, 0.08, 5.35] as const, fov: 40 },
  /** Case study ribbon — pulled back for scroll-driven angles. */
  showcase: { position: [0.22, 0.1, 3.45] as const, fov: 24.5 },
  /** Home hero — isometric framing; pulled back slightly so the blockout is not cropped. */
  editorial: { position: [0.74, 0.46, 1.38] as const, fov: 31 },
} as const;

const scalePresets = {
  ribbon: 0.72,
  showcase: 1.05,
  editorial: 1,
} as const;

/**
 * Interactive WebGL — client-only Canvas; respects reduced motion (static model, no float).
 * Optional `scrollProgressRef` (0–1) drives curated angles (featured scroll / ribbon).
 */
export function Hero3DStage({
  className,
  scale,
  preset = "ribbon",
  scrollProgressRef,
  interactive,
  modelFit,
  contactShadow,
}: {
  className?: string;
  scale?: number;
  preset?: "ribbon" | "showcase" | "editorial";
  scrollProgressRef?: MutableRefObject<number>;
  interactive?: boolean;
  modelFit?: number;
  /** When omitted, contact shadow is off for `editorial` (home hero) and on for ribbon/showcase. */
  contactShadow?: boolean;
}) {
  const reduce = useReducedMotion();
  const mouseRef = useRef({ x: 0, y: 0 });
  const pointerRaf = useRef<number | null>(null);
  const pendingPointer = useRef({ x: 0, y: 0 });

  const resolvedScale = scale ?? scalePresets[preset];
  const cam = cameraPresets[preset];
  const pointerOn = interactive ?? scrollProgressRef == null;
  const resolvedContactShadow = contactShadow ?? preset !== "editorial";

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
      className={cn(
        "relative w-full touch-pan-y",
        preset === "editorial" ? "min-h-0 overflow-visible" : "min-h-[240px] overflow-hidden",
        className,
      )}
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
        <Suspense fallback={<CanvasSuspenseFallback />}>
          <HeroFloatContent
            mouseRef={mouseRef}
            scale={resolvedScale}
            scrollProgressRef={scrollProgressRef}
            interactive={pointerOn}
            modelFit={modelFit}
            respectReducedMotion={!!reduce}
            contactShadow={resolvedContactShadow}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

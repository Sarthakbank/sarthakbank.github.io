"use client";

import dynamic from "next/dynamic";
import { Component, type ErrorInfo, type ReactNode } from "react";
import { StaticFrameHero } from "@/components/home/StaticFrameHero";

const SCROLL_HERO_ENABLED = process.env.NEXT_PUBLIC_HERO_SCROLL_ENABLED === "true";

const ScrollFrameHero = dynamic(
  () =>
    import("@/components/home/ScrollFrameHero").then((m) => ({
      default: m.ScrollFrameHero,
    })),
  { ssr: false },
);

type BoundaryState = { failed: boolean };

class HeroErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  BoundaryState
> {
  state: BoundaryState = { failed: false };

  static getDerivedStateFromError(): BoundaryState {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[HomeHero]", error, info.componentStack);
    }
  }

  render() {
    if (this.state.failed) return this.props.fallback;
    return this.props.children;
  }
}

/** Home hero — static by default; scroll-scrub when NEXT_PUBLIC_HERO_SCROLL_ENABLED=true. */
export function HomeHero() {
  const fallback = <StaticFrameHero />;

  if (!SCROLL_HERO_ENABLED) {
    return fallback;
  }

  return (
    <HeroErrorBoundary fallback={fallback}>
      <ScrollFrameHero />
    </HeroErrorBoundary>
  );
}

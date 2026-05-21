"use client";

import { useState } from "react";
import { AppleCardCarousel } from "@/components/home/AppleCardCarousel";
import { ApplePrincipleCarouselCard } from "@/components/home/ApplePrincipleCarouselCard";
import { ApplePrincipleDetailModal } from "@/components/home/ApplePrincipleDetailModal";
import { homeDesignPrinciples, type HomeDesignPrinciple } from "@/content/home";
import { appleContainer, appleEyebrow, appleSection, appleSectionMuted } from "@/lib/appleHomeTokens";
import { cn } from "@/lib/cn";

export function AppleDesignPrinciplesSection() {
  const [activePrinciple, setActivePrinciple] = useState<HomeDesignPrinciple | null>(null);

  return (
    <section id="principles" className={cn(appleSection, appleSectionMuted, "scroll-mt-24")}>
      <div className={appleContainer}>
        <p className={cn(appleEyebrow, "mb-8 lg:mb-10")}>Design Principles</p>
        <AppleCardCarousel ariaLabel="Design principles carousel">
          {homeDesignPrinciples.map((p) => (
            <ApplePrincipleCarouselCard
              key={p.title}
              principle={p}
              onOpenDetail={() => setActivePrinciple(p)}
            />
          ))}
        </AppleCardCarousel>
      </div>
      <ApplePrincipleDetailModal
        principle={activePrinciple}
        onClose={() => setActivePrinciple(null)}
      />
    </section>
  );
}

"use client";

import { useCallback, useState } from "react";

import { SectionShell } from "@/components/layout/section-shell";
import { FeatureCard } from "@/components/features/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { featureItems } from "@/constants/features";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  /**
   * useSyncExternalStore returns `false` on the server and during SSR hydration.
   * For the grid layout, we use CSS-only responsive classes on the grid container
   * and only use `isDesktop` for the JS-driven accordion vs. bento behaviour.
   */
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.08 });

  const handleActivate = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleToggle = useCallback(
    (nextIndex: number) => {
      setActiveIndex((prev) => (prev === nextIndex ? -1 : nextIndex));
    },
    []
  );

  return (
    <SectionShell id="features" className="section-anchor">
      <div
        ref={sectionRef}
        className={cn(
          "space-y-10 anim-fade-up",
          isVisible && "is-visible"
        )}
      >
        <SectionHeading
          badge="Feature bento"
          title="A premium operating layer for teams that need automation without black-box tradeoffs."
          description="One shared data model powers a responsive bento-to-accordion system, preserving context across viewport changes while keeping interactions fluid and accessible."
        />
        {/*
         * The grid always uses CSS-driven responsive classes.
         * The lg:grid-cols-3 and lg:auto-rows-[16rem] classes are always present
         * so the grid lays out correctly even before JS hydration.
         * The active/inactive span classes are data attributes so CSS can read them.
         */}
        <div
          className="grid grid-cols-1 gap-5 lg:grid-cols-2"
          role="list"
          aria-label="Platform features"
        >
          {featureItems.map((feature, index) => {
            const isActive = activeIndex === index;
            // The 3rd card (index 2) always spans 2 columns on desktop
            const isFullWidth = index === 2;
            
            return (
              <div
                key={feature.id}
                role="listitem"
                className={cn(
                  "min-w-0",
                  isFullWidth ? "lg:col-span-2" : "lg:col-span-1"
                )}
              >
                <FeatureCard
                  feature={feature}
                  index={index}
                  active={isActive}
                  mobile={!isDesktop}
                  isFullWidth={isFullWidth}
                  onActivate={handleActivate}
                  onToggle={handleToggle}
                />
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

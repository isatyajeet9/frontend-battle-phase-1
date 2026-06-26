"use client";

import { memo } from "react";

import { Icon } from "@/components/ui/icon";
import type { FeatureItem } from "@/types/feature";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  feature: FeatureItem;
  index: number;
  active: boolean;
  mobile: boolean;
  isFullWidth?: boolean;
  onActivate: (index: number) => void;
  onToggle: (index: number) => void;
};

function FeatureCardComponent({
  feature,
  index,
  active,
  mobile,
  isFullWidth,
  onActivate,
  onToggle
}: FeatureCardProps) {
  // Use beige background for the full width bottom card, white for others
  const bgClass = isFullWidth
    ? "bg-[rgba(252,246,233,1)]"
    : "bg-white";

  const header = (
    <div className="flex items-start justify-between gap-4">
      <div className="space-y-3">
        <p className="font-[var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
          {feature.eyebrow}
        </p>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            {feature.title}
          </h3>
          <p className="max-w-xl text-sm leading-7 text-ink-muted sm:text-base">
            {feature.description}
          </p>
        </div>
      </div>
      <div
        className="grid size-10 shrink-0 place-items-center rounded-xl border border-line-strong bg-white transition-transform duration-300 sm:size-12"
        aria-hidden="true"
      >
        <Icon
          name={feature.icon}
          alt=""
          className={cn("size-4 sm:size-5 transition-all duration-300", active ? "lg:scale-110 text-brand" : "group-hover:scale-110 group-hover:text-brand")}
        />
      </div>
    </div>
  );

  const statsAndCta = (
    <div id={`feature-panel-${feature.id}`} className="mt-6 flex flex-col gap-4">
      {/* Stats pills are always visible on desktop, or based on active on mobile */}
      <div
        className={cn(
          "grid gap-3 transition-[grid-template-rows,opacity,margin-top] duration-300 sm:flex sm:flex-wrap",
          !mobile || active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 overflow-hidden"
        )}
      >
        <div className={cn("flex flex-wrap gap-3", (!mobile || active) ? "visible" : "invisible")}>
          {feature.stats.map((item) => (
            <div
              key={item}
              className="rounded-full border border-line-strong bg-white px-4 py-2 text-xs font-medium text-ink shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA link is only visible when the card is active */}
      <div
        className={cn(
          "transition-all duration-300 ease-out overflow-hidden",
          active ? "max-h-10 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
        )}
      >
        <p className="text-sm font-semibold tracking-tight text-ink">
          {feature.cta} <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
        </p>
      </div>
    </div>
  );

  return (
    <article
      className={cn(
        "group h-full overflow-hidden rounded-[24px] border p-6 transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out sm:p-8 lg:hover:-translate-y-2 lg:hover:shadow-lift lg:hover:border-line",
        bgClass,
        active ? "lg:ring-1 lg:ring-[var(--color-brand)]/10 shadow-sm border-line-strong" : "border-line-strong/60"
      )}
      onMouseEnter={() => {
        onActivate(index);
      }}
      onFocusCapture={() => {
        onActivate(index);
      }}
    >
      <button
        type="button"
        aria-expanded={active}
        aria-controls={`feature-panel-${feature.id}`}
        className="focus-ring w-full cursor-pointer rounded-[20px] text-left outline-none"
        onClick={() => onToggle(index)}
      >
        {header}
      </button>
      {statsAndCta}
    </article>
  );
}

export const FeatureCard = memo(FeatureCardComponent);

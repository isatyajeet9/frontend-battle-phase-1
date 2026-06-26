"use client";

import { memo } from "react";

import { usePricingSnapshot } from "@/components/pricing/pricing-store";
import { getDisplayPrice, formatCurrency } from "@/lib/pricing-engine";
import type { PlanId } from "@/types/pricing";

type PriceValueProps = {
  planId: PlanId;
};

function PriceValueComponent({ planId }: PriceValueProps) {
  const { currency, billing } = usePricingSnapshot();
  const value = getDisplayPrice(currency, planId, billing);

  return (
    <span 
      key={`${billing}-${currency}`} 
      className="inline-block anim-fade-in is-visible text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
    >
      {formatCurrency(currency, value)}
    </span>
  );
}

export const PriceValue = memo(PriceValueComponent);

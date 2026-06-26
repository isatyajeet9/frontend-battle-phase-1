"use client";

import { memo } from "react";

import { usePricingSnapshot } from "@/components/pricing/pricing-store";

function BillingLabelComponent() {
  const { billing } = usePricingSnapshot();

  if (billing === "annual") {
    return <span className="text-sm text-ink-muted">per year, billed annually with 20% savings</span>;
  }

  return <span className="text-sm text-ink-muted">per month, cancel anytime</span>;
}

export const BillingLabel = memo(BillingLabelComponent);

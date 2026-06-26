"use client";

import { usePricingActions, usePricingSnapshot } from "@/components/pricing/pricing-store";
import type { BillingPeriod } from "@/types/pricing";
import { cn } from "@/lib/utils";

const options: { value: BillingPeriod; label: string; badge?: string }[] = [
  { value: "monthly", label: "Monthly" },
  { value: "annual", label: "Annual", badge: "Save 20%" }
];

export function BillingToggle() {
  const { billing } = usePricingSnapshot();
  const { setBilling } = usePricingActions();

  return (
    <div
      className="inline-flex rounded-full border border-line bg-surface p-1"
      role="group"
      aria-label="Billing period selection"
    >
      {options.map((option) => {
        const active = option.value === billing;

        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            className={cn(
              "focus-ring relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-[color,background-color,box-shadow] duration-200",
              active
                ? "bg-[#172b36] text-[#f1f6f4] shadow-soft"
                : "text-[#44616b] hover:text-[#172b36]"
            )}
            onClick={() => setBilling(option.value)}
          >
            {option.label}
            {option.badge && (
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200",
                  active
                    ? "bg-[#ffc801] text-[#172b36]"
                    : "bg-[#d9e8e2] text-[#114c5a]"
                )}
              >
                {option.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { currencyOptions } from "@/constants/pricing";
import { usePricingActions, usePricingSnapshot } from "@/components/pricing/pricing-store";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const currencyLabels: Record<string, string> = {
  INR: "₹ INR",
  USD: "$ USD",
  EUR: "€ EUR"
};

export function CurrencySelect() {
  const { currency } = usePricingSnapshot();
  const { setCurrency } = usePricingActions();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-3 text-sm font-medium text-ink-muted">
      <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em]">
        Currency
      </span>
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="focus-ring flex items-center gap-2 rounded-full border border-line bg-white/90 px-4 py-2.5 text-sm font-semibold text-[#172b36] transition-all duration-150 hover:border-[#114c5a]/40 hover:bg-white active:scale-[0.98]"
        >
          {currencyLabels[currency] ?? currency}
          <svg className={cn("size-4 text-ink-muted transition-transform duration-200", isOpen && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div
          className={cn(
            "absolute right-0 top-full z-50 mt-2 w-32 origin-top-right rounded-[16px] border border-line bg-white p-1.5 shadow-lift transition-all duration-200",
            isOpen ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
          )}
          role="listbox"
        >
          {currencyOptions.map((option) => (
            <button
              key={option}
              type="button"
              role="option"
              aria-selected={currency === option}
              onClick={() => {
                setCurrency(option);
                setIsOpen(false);
              }}
              className={cn(
                "w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors",
                currency === option 
                  ? "bg-[var(--color-surface)] text-[#114c5a]" 
                  : "text-ink-muted hover:bg-black/5 hover:text-[#172b36]"
              )}
            >
              {currencyLabels[option] ?? option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

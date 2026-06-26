import { pricingMatrix } from "@/constants/pricing";
import type { BillingPeriod, CurrencyCode, PlanId } from "@/types/pricing";

export function calculatePrice(currency: CurrencyCode, planId: PlanId) {
  const plan = pricingMatrix[currency].plans[planId];
  return plan.monthlyBasePrice * plan.regionalMultiplier;
}

export function calculateAnnualPrice(currency: CurrencyCode, planId: PlanId) {
  return Math.round(calculatePrice(currency, planId) * 12 * 0.8);
}

export function formatCurrency(currency: CurrencyCode, value: number) {
  return new Intl.NumberFormat(pricingMatrix[currency].locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(value);
}

export function getDisplayPrice(currency: CurrencyCode, planId: PlanId, billing: BillingPeriod) {
  return billing === "annual" ? calculateAnnualPrice(currency, planId) : calculatePrice(currency, planId);
}

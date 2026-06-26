export type CurrencyCode = "INR" | "USD" | "EUR";
export type BillingPeriod = "monthly" | "annual";
export type PlanId = "starter" | "growth" | "enterprise";

export type PlanPricingConfig = {
  monthlyBasePrice: number;
  regionalMultiplier: number;
};

export type CurrencyPricingConfig = {
  locale: string;
  symbol: string;
  plans: Record<PlanId, PlanPricingConfig>;
};

export type PricingMatrix = Record<CurrencyCode, CurrencyPricingConfig>;

export type PlanDefinition = {
  id: PlanId;
  name: string;
  summary: string;
  badge: string;
  seats: string;
  features: string[];
  highlighted?: boolean;
};

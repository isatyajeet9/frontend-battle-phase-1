import type { CurrencyCode, PlanDefinition, PricingMatrix } from "@/types/pricing";

export const planDefinitions: PlanDefinition[] = [
  {
    id: "starter",
    name: "Starter",
    summary: "For lean teams operationalizing their first AI automations.",
    badge: "Fastest launch",
    seats: "Up to 10 operators",
    features: ["3 live workflows", "Basic observability", "Email support", "1 environment"]
  },
  {
    id: "growth",
    name: "Growth",
    summary: "For scaling teams coordinating multiple data systems and approvals.",
    badge: "Scale operations",
    seats: "Up to 50 operators",
    features: ["Unlimited workflows", "Advanced policies", "Priority support", "3 environments"],
    highlighted: true
  },
  {
    id: "enterprise",
    name: "Enterprise",
    summary: "For global organizations that need secure orchestration at scale.",
    badge: "Custom controls",
    seats: "Unlimited operators",
    features: ["Dedicated tenancy", "SSO and audit trails", "Success architect", "Custom governance"]
  }
];

export const pricingMatrix: PricingMatrix = {
  INR: {
    locale: "en-IN",
    symbol: "₹",
    plans: {
      starter: { monthlyBasePrice: 8407, regionalMultiplier: 1 },
      growth: { monthlyBasePrice: 19743, regionalMultiplier: 1 },
      enterprise: { monthlyBasePrice: 41469, regionalMultiplier: 1 }
    }
  },
  USD: {
    locale: "en-US",
    symbol: "$",
    plans: {
      starter: { monthlyBasePrice: 89, regionalMultiplier: 1 },
      growth: { monthlyBasePrice: 209, regionalMultiplier: 1 },
      enterprise: { monthlyBasePrice: 439, regionalMultiplier: 1 }
    }
  },
  EUR: {
    locale: "en-IE",
    symbol: "€",
    plans: {
      starter: { monthlyBasePrice: 78, regionalMultiplier: 1 },
      growth: { monthlyBasePrice: 184, regionalMultiplier: 1 },
      enterprise: { monthlyBasePrice: 386, regionalMultiplier: 1 }
    }
  }
};

export const currencyOptions: CurrencyCode[] = ["INR", "USD", "EUR"];

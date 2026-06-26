import { SectionShell } from "@/components/layout/section-shell";
import { BillingToggle } from "@/components/pricing/billing-toggle";
import { CurrencySelect } from "@/components/pricing/currency-select";
import { PricingCard } from "@/components/pricing/pricing-card";
import { PricingProvider } from "@/components/pricing/pricing-store";
import { SectionHeading } from "@/components/ui/section-heading";
import { planDefinitions } from "@/constants/pricing";

export function PricingSection() {
  return (
    <SectionShell id="pricing" className="section-anchor">
      <div className="space-y-10">
        <SectionHeading
          badge="Matrix pricing"
          title="Pricing built to scale from a lean launch team to enterprise-grade automation governance."
          description="Monthly and annual billing run on a single pricing engine with computed discounts, regional currency support, and localized updates that stay confined to pricing surfaces."
        />

        <PricingProvider>
          {/* Controls bar */}
          <div
            className="flex flex-col gap-4 rounded-[24px] border border-line bg-white/80 p-4 shadow-soft backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:p-5"
            aria-label="Pricing controls"
          >
            <BillingToggle />
            <CurrencySelect />
          </div>

          {/* Cards grid — extra top padding for the "Most Popular" badge overflow */}
          <div className="grid gap-5 pt-5 lg:grid-cols-3" aria-label="Pricing plans">
            {planDefinitions.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>

          {/* Savings note */}
          <p className="text-center text-sm text-ink-muted">
            Annual billing saves up to <strong className="text-brand">20%</strong>.
            All plans include a 14-day free trial. No credit card required.
          </p>
        </PricingProvider>
      </div>
    </SectionShell>
  );
}

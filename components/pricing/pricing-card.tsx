import { Button } from "@/components/ui/button";
import { BillingLabel } from "@/components/pricing/billing-label";
import { PriceValue } from "@/components/pricing/price-value";
import type { PlanDefinition } from "@/types/pricing";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  plan: PlanDefinition;
};

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <article
      className={cn(
        "relative isolate flex flex-col rounded-[var(--radius-pricing)] border p-6 transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-2 hover:shadow-lift sm:p-7",
        plan.highlighted
          ? "border-[#114c5a] bg-white shadow-lift pricing-popular"
          : "border-line bg-[color-mix(in_srgb,white_78%,var(--color-surface)_22%)] shadow-soft"
      )}
    >
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span 
            className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] shadow-soft"
            style={{ backgroundColor: '#114c5a', color: '#ffc801' }}
          >
            Most Popular
          </span>
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div 
            className="inline-flex rounded-full border border-line bg-surface px-3 py-1 text-[11px] font-[var(--font-mono)] uppercase tracking-[0.22em]"
            style={{ color: '#114c5a' }}
          >
            {plan.badge}
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              {plan.name}
            </h3>
            <p className="mt-1.5 min-h-[72px] text-sm leading-6 text-ink-muted">
              {plan.summary}
            </p>
          </div>
        </div>
        <p className="shrink-0 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink-muted">
          {plan.seats}
        </p>
      </div>

      <div className="mt-8 space-y-2">
        <PriceValue planId={plan.id} />
        <BillingLabel />
      </div>

      <ul className="mt-8 flex-1 space-y-2.5" aria-label={`${plan.name} features`}>
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 rounded-2xl border border-line bg-white/70 px-4 py-3 text-sm text-ink-muted"
          >
            <span
              className="grid size-4 shrink-0 place-items-center rounded-full bg-[#114c5a]"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 12 12"
                width="8"
                height="8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6l3 3 5-5"
                  stroke="#F1F6F4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <Button
        href="#contact"
        className="mt-8 w-full justify-center"
        variant={plan.highlighted ? "brand" : "primary"}
        aria-label={`Start with ${plan.name} plan`}
      >
        Start with {plan.name}
      </Button>
    </article>
  );
}

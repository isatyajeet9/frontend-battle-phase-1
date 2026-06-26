import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";

const TRUST_MARKS = [
  "SOC 2 Type II",
  "GDPR Ready",
  "99.9% SLA",
  "Enterprise SSO"
] as const;

export function CtaSection() {
  return (
    <SectionShell className="pb-16 sm:pb-20 lg:pb-24">
      <div className="surface-dark relative overflow-hidden rounded-[36px] px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        {/* Decorative blobs inside dark card */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full opacity-20 blur-3xl animate-[pulse_4s_ease-in-out_infinite]"
          style={{ background: "radial-gradient(circle, rgba(255,200,1,0.6), transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-8 left-10 h-48 w-48 rounded-full opacity-15 blur-3xl animate-[pulse_6s_ease-in-out_infinite]"
          style={{ background: "radial-gradient(circle, rgba(255,153,50,0.5), transparent 70%)", animationDelay: "2s" }}
          aria-hidden="true"
        />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="space-y-6">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-accent">
              Launch premium automation
            </p>
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Give your team an AI automation layer that looks polished, moves
              quickly, and holds up under technical scrutiny.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
              Book a guided walkthrough to see how MotiveX AI handles workflow
              governance, pricing flexibility, and operator-grade clarity from
              the first release.
            </p>

            {/* Trust marks */}
            <ul className="flex flex-wrap gap-3" aria-label="Enterprise trust marks">
              {TRUST_MARKS.map((mark) => (
                <li
                  key={mark}
                  className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-medium text-white/72"
                >
                  {mark}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:min-w-[200px]">
            <Button
              href="#pricing"
              className="justify-center bg-accent text-ink hover:bg-accent-strong hover:shadow-[0_0_24px_rgba(255,200,1,0.4)] transition-[background-color,box-shadow] duration-300"
              aria-label="Start your free evaluation of MotiveX AI"
            >
              Start free evaluation
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              className="justify-center border-white/14 bg-white/8 text-white hover:bg-white/14 hover:text-white"
              aria-label="Contact the MotiveX AI product team"
            >
              Contact the product team
            </Button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

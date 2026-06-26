import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

export function HeroSection() {
  return (
    <section
      className="page-shell overflow-hidden pt-[140px] sm:pt-[160px] lg:pt-[180px] pb-16 sm:pb-20 lg:pb-24"
    >
      <Container className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
      {/* ── Left column ─────────────────────────────────── */}
      <div className="space-y-8 min-w-0 stagger-children">
        <Badge className="anim-fade-up is-visible">AI DATA AUTOMATION PLATFORM</Badge>

        <div className="space-y-6 anim-fade-up is-visible">
          <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl leading-[1.1]">
            Enterprise data automation, without the black box.
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-8 text-ink-muted sm:text-xl">
            MotiveX AI handles messy data ingestion and complex workflows for you. Get the speed of AI with the security and visibility your team demands.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row pt-4 anim-fade-up is-visible">
          <Button href="#pricing" variant="primary" className="rounded-full px-8 py-4">Start free evaluation</Button>
          <Button href="#features" variant="secondary" className="rounded-full px-8 py-4 bg-transparent border-line-strong">
            Explore the platform
          </Button>
        </div>
      </div>

      {/* ── Right column — product mockup ──────────────── */}
      <div className="relative min-w-0 animate-[float_6s_ease-in-out_infinite]">
        <div className="relative overflow-hidden rounded-[36px] border border-line-strong bg-white p-4 sm:p-5 shadow-sm">
          {/* Top status bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-[26px] border border-line-strong bg-[#F8F9FA] px-5 py-4">
            <div>
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-accent">
                Unified workspace
              </p>
              <p className="mt-1.5 text-sm leading-6 text-ink">
                Operational timeline, automation health, and approval-ready
                context.
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-line-strong bg-white px-4 py-2 font-[var(--font-mono)] text-xs font-medium text-ink shadow-sm">
              18 active automations
            </span>
          </div>

          {/* Demo video */}
          <div className="mt-4 overflow-hidden rounded-[22px] border border-line-strong bg-black">
            <video
              className="aspect-[16/10] w-full object-cover opacity-90"
              src="/assets/video/demo.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="MotiveX AI product demonstration — workflow orchestration and automation dashboard"
            />
          </div>

          {/* Bottom tabs styling (from screenshot) */}
          <div className="mt-4 flex flex-wrap gap-2 px-2">
             <div className="px-6 py-3 border-b-2 border-transparent text-[10px] font-semibold uppercase tracking-widest text-ink-muted">
               EXCEPTION RECOVERY
             </div>
             <div className="px-6 py-3 border-b-2 border-[var(--color-accent)] text-[10px] font-semibold uppercase tracking-widest text-accent">
               DECISION CONFIDENCE
             </div>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}

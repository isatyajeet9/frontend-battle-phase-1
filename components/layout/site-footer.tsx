import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { LogoMark } from "@/components/ui/logo-mark";
import { navigationItems } from "@/constants/navigation";

const resourceLinks = [
  { label: "Documentation", href: "#features" },
  { label: "Security & Compliance", href: "#pricing" },
  { label: "Contact Sales", href: "#contact" },
  { label: "System Status", href: "#contact" }
] as const;

const socialLinks = [
  { label: "LinkedIn", href: "#contact", icon: "link-solid" as const },
  { label: "GitHub", href: "#contact", icon: "cube-16-solid" as const },
  { label: "Twitter / X", href: "#contact", icon: "link" as const }
] as const;

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-line bg-white/40 py-12">
      <Container className="space-y-12">
        {/* Top row */}
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* Brand column */}
          <div className="max-w-sm space-y-5">
            <LogoMark />
            <p className="text-sm leading-7 text-ink-muted">
              MotiveX AI helps operations, finance, and analytics teams
              orchestrate clean data flows with enterprise-grade confidence and
              full observability.
            </p>
            <Button href="#pricing" className="w-fit">
              Book a platform walkthrough
            </Button>

            {/* Social icons */}
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={`Follow MotiveX AI on ${social.label}`}
                  className="focus-ring grid size-9 place-items-center rounded-full border border-line bg-white/70 transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[var(--color-brand)]/40 hover:bg-white hover:shadow-soft"
                >
                  <Icon
                    name={social.icon}
                    alt=""
                    className="size-4 opacity-60"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">
                Navigation
              </h2>
              <ul className="space-y-2.5">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="focus-ring text-sm text-ink-muted transition-colors duration-150 hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">
                Resources
              </h2>
              <ul className="space-y-2.5">
                {resourceLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="focus-ring text-sm text-ink-muted transition-colors duration-150 hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">
                Legal
              </h2>
              <ul className="space-y-2.5">
                {(["Privacy Policy", "Terms of Service", "Cookie Policy"] as const).map(
                  (label) => (
                    <li key={label}>
                      <a
                        href="#contact"
                        className="focus-ring text-sm text-ink-muted transition-colors duration-150 hover:text-ink"
                      >
                        {label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 MotiveX AI, Inc. Built for reliable, explainable automation.</p>
          <p>Responsive · Accessible · Production-ready by design.</p>
        </div>
      </Container>
    </footer>
  );
}

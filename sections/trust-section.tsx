import { SectionShell } from "@/components/layout/section-shell";
import { Icon } from "@/components/ui/icon";
import { trustItems } from "@/constants/trust";

const trustIcons = [
  "arrow-path",
  "cog-8-tooth",
  "chart-pie",
  "arrow-trending-up",
  "link"
] as const;

export function TrustSection() {
  return (
    <SectionShell className="pt-0">
      <div className="surface-card rounded-[28px] px-6 py-10 sm:px-8 sm:py-12">
        <p className="mb-8 text-center font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-ink-muted">
          Purpose-built for teams keeping complex systems moving
        </p>
        <ul
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          aria-label="Trusted team workflows"
        >
          {trustItems.map((item, idx) => (
            <li key={item}>
              <div className="group flex flex-col items-center gap-3 rounded-[20px] border border-line bg-[var(--color-panel)] px-4 py-5 text-center transition-[transform,box-shadow,border-color,background-color] duration-200 hover:-translate-y-1 hover:border-[var(--color-brand)]/40 hover:bg-white hover:shadow-soft">
                <span
                  className="grid size-9 place-items-center rounded-xl border border-line bg-surface transition-transform duration-200 group-hover:scale-110 group-hover:border-[var(--color-brand)]/30 group-hover:bg-white"
                  aria-hidden="true"
                >
                  <Icon
                    name={trustIcons[idx % trustIcons.length]}
                    alt=""
                    className="size-4 opacity-60 group-hover:opacity-90"
                  />
                </span>
                <span className="text-xs font-semibold tracking-[0.18em] text-ink-muted uppercase transition-colors duration-200 group-hover:text-ink">
                  {item}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

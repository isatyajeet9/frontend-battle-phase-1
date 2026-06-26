import { cn } from "@/lib/utils";

type LogoMarkProps = {
  compact?: boolean;
  inverse?: boolean;
};

export function LogoMark({ compact = false, inverse = false }: LogoMarkProps) {
  return (
    <span className="inline-flex items-center gap-3">
      <span
        className={cn(
          "grid place-items-center rounded-2xl border px-3 py-2 shadow-soft",
          inverse ? "border-white/10 bg-white/10" : "border-line bg-white/80"
        )}
        aria-hidden="true"
      >
        <span
          className={cn(
            "font-[var(--font-mono)] text-sm font-semibold uppercase tracking-[0.22em]",
            inverse ? "text-[var(--color-surface)]" : "text-brand"
          )}
        >
          MX
        </span>
      </span>
      {!compact ? (
        <span className="flex flex-col">
          <span className={cn("text-base font-semibold tracking-tight", inverse ? "text-white" : "text-ink")}>
            MotiveX AI
          </span>
          <span className={cn("text-xs font-medium", inverse ? "text-white/70" : "text-ink-muted")}>
            Data Automation Platform
          </span>
        </span>
      ) : (
        <span className={cn("text-sm font-semibold tracking-tight", inverse ? "text-white" : "text-ink")}>
          MotiveX AI
        </span>
      )}
    </span>
  );
}

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[var(--color-brand)]/20 bg-[color-mix(in_srgb,var(--color-brand)_6%,white)] px-4 py-1.5 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.26em] text-brand",
        className
      )}
    >
      <span
        className="size-1.5 rounded-full bg-accent"
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

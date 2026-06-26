import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  badge?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  actions?: ReactNode;
};

export function SectionHeading({ badge, title, description, align = "left", actions }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-5", align === "center" ? "items-center text-center" : "items-start text-left")}>
      {badge ? <Badge>{badge}</Badge> : null}
      <div className="max-w-3xl space-y-4">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-pretty text-base leading-7 text-ink-muted sm:text-lg">{description}</p>
      </div>
      {actions}
    </div>
  );
}

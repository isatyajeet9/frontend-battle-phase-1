import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type SectionShellProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
  containerClassName?: string;
};

export function SectionShell({ children, className, containerClassName, ...props }: SectionShellProps) {
  return (
    <section className={cn("section-frame", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

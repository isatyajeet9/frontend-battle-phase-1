import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "brand";

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonAsLinkProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#172b36] text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#1a313e] hover:shadow-lift",
  secondary:
    "border border-line-strong bg-white text-[#172b36] shadow-sm hover:-translate-y-0.5 hover:bg-surface hover:border-line hover:shadow-soft",
  ghost: "text-[#172b36] hover:bg-black/5 hover:text-black",
  brand:
    "bg-[#114c5a] text-[#f1f6f4] shadow-sm hover:-translate-y-0.5 hover:bg-[#0d3a45] hover:shadow-lift"
};

const baseClassName =
  "focus-ring inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 ease-out active:scale-[0.98]";

export function Button(props: ButtonProps) {
  const { children, className, variant = "primary" } = props;
  const classes = cn(baseClassName, variantClasses[variant], className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButtonProps;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

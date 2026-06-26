"use client";

import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { LogoMark } from "@/components/ui/logo-mark";
import { navigationItems } from "@/constants/navigation";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  /* Lock scroll + Escape key */
  useEffect(() => {
    if (!open) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      /* Focus trap */
      if (event.key !== "Tab") return;
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);

    /* Move focus into panel */
    firstFocusableRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
      aria-hidden={!open}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[rgba(23,43,54,0.38)] backdrop-blur-sm" />

      {/* Panel */}
      <div
        ref={panelRef}
        className={cn(
          "absolute inset-y-0 right-0 flex w-[min(88vw,24rem)] flex-col gap-6 border-l border-white/10 bg-ink px-6 py-6 shadow-dark transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <LogoMark compact inverse />
          <button
            ref={firstFocusableRef}
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="focus-ring rounded-full border border-white/10 bg-white/5 p-3 transition-colors duration-150 hover:bg-white/12"
          >
            <Icon name="x-mark" alt="" className="size-5 invert" />
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Mobile primary navigation">
          <ul className="space-y-1" role="list">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="focus-ring block rounded-2xl px-4 py-3.5 text-lg font-medium text-white/80 transition-colors duration-150 hover:bg-white/6 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className="mt-auto space-y-3">
          <Button
            href="#pricing"
            className="w-full justify-center bg-accent text-ink hover:bg-accent-strong"
            onClick={onClose}
          >
            Start free evaluation
          </Button>
          <Button
            href="#features"
            variant="secondary"
            className="w-full justify-center border-white/14 bg-white/8 text-white hover:bg-white/14 hover:text-white"
            onClick={onClose}
          >
            Explore platform
          </Button>
        </div>
      </div>
    </div>
  );
}

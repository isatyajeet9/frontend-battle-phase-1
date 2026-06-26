"use client";

import { useState } from "react";

import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { LogoMark } from "@/components/ui/logo-mark";
import { navigationItems } from "@/constants/navigation";
import { useHeaderShadow } from "@/hooks/use-header-shadow";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const isScrolled = useHeaderShadow();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[padding] duration-300",
          isScrolled ? "py-2.5" : "py-4"
        )}
      >
        <Container>
          <div
            className={cn(
              "flex items-center justify-between rounded-full border px-4 py-2.5 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 lg:px-5",
              isScrolled
                ? "border-line bg-white/82 shadow-soft backdrop-blur-xl"
                : "border-transparent bg-transparent"
            )}
          >
            {/* Logo */}
            <a
              href="#main-content"
              className="focus-ring rounded-full"
              aria-label="MotiveX AI — go to top"
            >
              <span className="lg:hidden">
                <LogoMark compact />
              </span>
              <span className="hidden lg:inline-flex">
                <LogoMark compact={false} />
              </span>
            </a>

            {/* Desktop nav */}
            <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition-colors duration-150 hover:bg-white/80 hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden items-center gap-3 lg:flex">
              <Button href="#features" variant="ghost">
                Explore platform
              </Button>
              <Button href="#pricing">Start free evaluation</Button>
            </div>

            {/* Mobile menu trigger */}
            <button
              type="button"
              className="focus-ring flex items-center justify-center rounded-full border border-line bg-white/80 p-3 lg:hidden"
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="mobile-nav-panel"
              onClick={() => setOpen(true)}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-ink"
              >
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="10" y1="18" x2="20" y2="18"></line>
              </svg>
            </button>
          </div>
        </Container>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  );
}

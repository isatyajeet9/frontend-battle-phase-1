import { CtaSection } from "@/sections/cta-section";
import { FeaturesSection } from "@/sections/features-section";
import { HeroSection } from "@/sections/hero-section";
import { PricingSection } from "@/sections/pricing-section";
import { TestimonialsSection } from "@/sections/testimonials-section";
import { TrustSection } from "@/sections/trust-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <TrustSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}

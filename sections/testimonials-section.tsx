import { SectionShell } from "@/components/layout/section-shell";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/constants/testimonials";

export function TestimonialsSection() {
  return (
    <SectionShell id="testimonials" className="section-anchor">
      <div className="space-y-10">
        <SectionHeading
          badge="Proof from operators"
          title="Teams choose MotiveX AI when they need automation to feel reliable, inspectable, and premium."
          description="These teams rely on MotiveX AI to reduce brittle processes, bring confidence to workflow changes, and turn noisy systems into durable operating leverage."
        />
        <div className="grid gap-5 lg:grid-cols-3" aria-label="Customer testimonials">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

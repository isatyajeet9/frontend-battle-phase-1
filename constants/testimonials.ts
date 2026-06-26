import type { Testimonial } from "@/types/testimonial";

export const testimonials: Testimonial[] = [
  {
    id: "ops",
    name: "Aarav Menon",
    role: "Head of Revenue Operations",
    company: "Northstar Cloud",
    quote:
      "MotiveX AI gave our team one place to monitor automation quality, route exceptions, and explain every trigger to leadership.",
    initials: "AM"
  },
  {
    id: "finance",
    name: "Meera Sethi",
    role: "Director of Finance Systems",
    company: "LatticeForge",
    quote:
      "We replaced brittle spreadsheets and late-night reconciliation with workflows that recover gracefully and keep stakeholders aligned.",
    initials: "MS"
  },
  {
    id: "support",
    name: "Rohan Iyer",
    role: "VP of Customer Experience",
    company: "CircuitScale",
    quote:
      "The product feels like an operating system for cross-functional execution. Fast, legible, and trustworthy even under load.",
    initials: "RI"
  }
];

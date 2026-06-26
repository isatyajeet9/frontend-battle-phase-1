import type { Testimonial } from "@/types/testimonial";

type TestimonialCardProps = {
  testimonial: Testimonial;
  index?: number;
};

const STAR_COUNT = 5;

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  const delay = `${index * 100}ms`;

  return (
    <article
      className="surface-card group flex flex-col rounded-[28px] p-6 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-2 hover:shadow-dark hover:ring-1 hover:ring-[var(--color-brand)]/20 sm:p-7"
      style={{ transitionDelay: delay }}
    >
      {/* Stars */}
      <div className="flex gap-0.5" aria-label="5 out of 5 stars" role="img">
        {Array.from({ length: STAR_COUNT }, (_, i) => (
          <svg
            key={i}
            viewBox="0 0 20 20"
            width="16"
            height="16"
            fill="var(--color-accent)"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="mt-5 flex-1">
        <p className="text-base leading-8 text-ink">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      {/* Author */}
      <div className="mt-7 flex items-center gap-4 border-t border-line pt-5">
        <div
          className="grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-strong)] font-[var(--font-mono)] text-sm font-semibold text-[var(--color-surface)] shadow-soft"
          aria-hidden="true"
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
          <p className="mt-0.5 text-xs text-ink-muted">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  );
}

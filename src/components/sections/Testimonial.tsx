import { stats, testimonial } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function Testimonial() {
  return (
    <section aria-label="What learners say" className="section-y bg-white">
      <Container className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <figure>
          <svg
            aria-hidden="true"
            width="28"
            height="22"
            viewBox="0 0 28 22"
            fill="none"
            className="mb-5 text-brand"
          >
            <path
              d="M6.4 0H11.6L8.2 11.4H11.6V22H0.8V11.4L6.4 0ZM22.2 0H27.4L24 11.4H27.4V22H16.6V11.4L22.2 0Z"
              fill="currentColor"
            />
          </svg>

          <blockquote>
            <p className="max-w-xl text-2xl font-semibold leading-snug tracking-tight text-ink md:text-[28px]">
              {testimonial.quote}
            </p>
          </blockquote>

          <figcaption className="mt-7 flex items-center gap-3.5">
            <img
              src={testimonial.avatar}
              alt={`Portrait of ${testimonial.name}`}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
              <p className="text-xs text-ink-muted">{testimonial.role}</p>
            </div>
          </figcaption>
        </figure>

        <dl className="grid gap-6 border-t border-line pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="text-xs text-ink-muted">{stat.label}</dt>
              <dd className="text-4xl font-extrabold tracking-tight text-brand md:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

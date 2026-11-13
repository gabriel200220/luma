import Image from "next/image";
import { featuredCourse as course } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "@/components/ui/Icons";

export function FeaturedCourse() {
  return (
    <section
      id="featured"
      aria-labelledby="featured-title"
      className="scroll-mt-16 bg-brand py-14 text-white md:py-16"
    >
      <Container className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className="relative aspect-[7/5] overflow-hidden rounded-xl">
          <Image
            src={course.image}
            alt={course.imageAlt}
            width={course.imageWidth}
            height={course.imageHeight}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-full w-full object-cover"
          />
          <span className="absolute left-0 top-0 bg-sun px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-ink">
            Featured course
          </span>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
            {course.eyebrow}
          </p>
          <h2
            id="featured-title"
            className="mt-3 text-[32px] font-extrabold leading-[1.05] tracking-tight md:text-[40px]"
          >
            {course.title}
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/85">
            {course.description}
          </p>
          <p className="mt-5 text-xs text-white/90">{course.instructor}</p>

          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Course details">
            {course.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-white/40 px-3 py-1.5 text-[11px] font-medium"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <Button href="#" variant="accent" size="lg" fullWidthOnMobile>
              View course
            </Button>
            <a
              href="#courses"
              className="inline-flex items-center justify-center gap-2 py-2 text-xs font-semibold text-white hover:underline"
            >
              Browse all courses <ArrowRight width={14} height={14} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { hero, heroAvatars } from "@/data/content";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StarIcon } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-cream pb-16 pt-8 md:pb-24 md:pt-16">
      <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-8">
        <div className="order-2 animate-fade-up md:order-1">
          <Eyebrow className="mb-4">{hero.eyebrow}</Eyebrow>
          <h1
            id="hero-title"
            className="max-w-[11ch] text-[44px] font-extrabold leading-[0.98] tracking-tight text-ink md:text-[56px]"
          >
            {hero.title}
          </h1>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-muted">
            {hero.description}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="#courses" size="lg" fullWidthOnMobile>
              Explore courses
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg" fullWidthOnMobile>
              See how it works
            </Button>
          </div>

          <div className="mt-7 flex items-center gap-3">
            <AvatarStack avatars={heroAvatars} />
            <p className="text-xs text-ink-muted">
              <span className="font-semibold text-ink">Trusted by 24,000+</span> learners
            </p>
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-md md:order-2 md:max-w-none">
          {/* Decorative shapes */}
          <div
            aria-hidden="true"
            className="absolute -right-3 top-6 hidden h-[88%] w-[88%] rounded-3xl bg-peach md:block"
          />
          <div
            aria-hidden="true"
            className="absolute -left-8 bottom-4 hidden h-24 w-24 rounded-full bg-brand-soft md:block"
          />

          <div className="relative aspect-[900/1100] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              width={hero.imageWidth}
              height={hero.imageHeight}
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute left-3 top-5 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs shadow-lg md:-left-6">
            <span className="rounded-md bg-brand-soft px-1.5 py-0.5 font-bold text-brand">120+</span>
            <span className="text-ink-muted">expert-led courses</span>
          </div>

          <div className="absolute bottom-6 right-3 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs shadow-lg md:-right-4">
            <span className="flex gap-0.5 text-sun" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </span>
            <span className="text-ink-muted">
              <span className="sr-only">Rated </span>4.9 avg rating
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

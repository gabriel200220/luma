import { ctaAvatars } from "@/data/content";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBanner() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative overflow-hidden bg-sun-soft py-20 md:py-28"
    >
      {/* Decorative shapes (hidden from assistive tech) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute -left-8 top-6 h-28 w-28 rounded-full border border-ink/10 md:h-36 md:w-36" />
        <span className="absolute -bottom-8 left-8 h-24 w-24 rounded-full bg-peach md:left-24 md:h-28 md:w-28" />
        <span className="absolute -right-6 top-4 h-20 w-24 rotate-12 rounded-xl bg-peach md:right-16 md:h-24 md:w-28" />
        <span className="absolute left-[18%] top-[45%] hidden h-4 w-4 rounded-full bg-coral md:block" />
        <span className="absolute bottom-6 right-[20%] hidden h-14 w-10 rounded-md bg-peach md:block" />
        <span className="absolute right-[10%] top-[22%] hidden h-10 w-10 rounded-lg border border-ink/10 md:block" />
        <span className="absolute bottom-10 right-6 h-8 w-8 rounded-full border border-ink/10 md:right-24" />
      </div>

      <Container className="relative flex flex-col items-center text-center">
        <AvatarStack avatars={ctaAvatars} size={32} />
        <h2
          id="cta-title"
          className="mt-6 max-w-[12ch] text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:max-w-none md:text-5xl"
        >
          What will you learn next?
        </h2>
        <p className="mt-3 text-sm text-ink-muted">
          Start with one course. Build from there.
        </p>
        <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button href="#courses" size="lg" fullWidthOnMobile>
            Explore all courses
          </Button>
          <Button href="#" variant="outline" size="lg" fullWidthOnMobile>
            Join Luma
          </Button>
        </div>
      </Container>
    </section>
  );
}

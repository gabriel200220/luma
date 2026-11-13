import { steps } from "@/data/content";
import type { Step } from "@/types";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const toneStyles: Record<Step["tone"], { wrapper: string; dot: string }> = {
  brand: { wrapper: "bg-brand-soft rounded-full", dot: "bg-brand rounded-md" },
  coral: { wrapper: "bg-peach rounded-xl rotate-12", dot: "bg-coral rounded-full" },
  sun: { wrapper: "bg-sun-soft rounded-full", dot: "bg-sun rounded-full" },
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="section-y scroll-mt-16 bg-cream"
    >
      <Container>
        <div className="text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
            How Luma works
          </p>
          <h2
            id="how-title"
            className="text-[32px] font-extrabold leading-[1.05] tracking-tight md:text-[40px]"
          >
            Less browsing. More learning.
          </h2>
        </div>

        <ol className="relative mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {/* Connector line on desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[8%] right-[8%] top-6 hidden h-px bg-line md:block"
          />
          {steps.map((item) => {
            const tone = toneStyles[item.tone];
            return (
              <li key={item.id} className="relative">
                <div
                  aria-hidden="true"
                  className={cn("relative flex h-12 w-12 items-center justify-center", tone.wrapper)}
                >
                  <span className={cn("block h-4 w-4", tone.dot)} />
                </div>
                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  {item.step}
                </p>
                <h3 className="mt-2 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 max-w-[18rem] text-[13px] leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

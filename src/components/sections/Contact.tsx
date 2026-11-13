import { contactInfo } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { ClockIcon, MailIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "./ContactForm";

const icons = { mail: MailIcon, clock: ClockIcon } as const;

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y scroll-mt-16 bg-white">
      <Container className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title="Get in touch"
            description="Have a question? We're here to help. Whether you're looking for the right course, learning with your team or interested in teaching with Luma, we'd love to hear from you."
          />

          <ul className="mt-8 space-y-3">
            {contactInfo.map((item) => {
              const Icon = icons[item.icon];
              return (
                <li
                  key={item.id}
                  className="flex items-center gap-4 rounded-xl bg-cream px-4 py-3.5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Icon width={18} height={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-ink">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-xs text-brand hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-xs text-ink-muted">{item.value}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}

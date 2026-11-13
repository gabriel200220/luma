"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface FormValues {
  name: string;
  email: string;
  question: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!emailPattern.test(values.email)) errors.email = "Please enter a valid email.";
  if (values.question.trim().length < 10) errors.question = "Tell us a little more (10+ characters).";
  return errors;
}

const fieldClass =
  "w-full rounded-md border border-line bg-cream px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted/60";

export function ContactForm() {
  const [values, setValues] = useState<FormValues>({ name: "", email: "", question: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update = (field: keyof FormValues) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setValues((prev) => ({ ...prev, [field]: event.target.value }));

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Mock submit — no backend required
    setStatus("sending");
    window.setTimeout(() => {
      setStatus("sent");
      setValues({ name: "", email: "", question: "" });
    }, 700);
  };

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-line bg-white p-6 shadow-sm md:p-8"
      aria-labelledby="contact-form-title"
    >
      <h3 id="contact-form-title" className="text-base font-bold text-ink">
        Contact us
      </h3>
      <p className="mt-1 text-xs text-ink-muted">Fill out the fields and we will get in touch.</p>

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-ink">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={values.name}
            onChange={update("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(fieldClass, errors.name && "border-coral")}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1 text-xs text-coral">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="youremail@example.com"
            value={values.email}
            onChange={update("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(fieldClass, errors.email && "border-coral")}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1 text-xs text-coral">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="question" className="mb-1.5 block text-xs font-semibold text-ink">
            Your question
          </label>
          <textarea
            id="question"
            name="question"
            rows={5}
            placeholder="Tell us how we can help..."
            value={values.question}
            onChange={update("question")}
            aria-invalid={Boolean(errors.question)}
            aria-describedby={errors.question ? "question-error" : undefined}
            className={cn(fieldClass, "resize-none", errors.question && "border-coral")}
          />
          {errors.question && (
            <p id="question-error" role="alert" className="mt-1 text-xs text-coral">
              {errors.question}
            </p>
          )}
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send message"}
      </Button>

      <p role="status" aria-live="polite" className="mt-3 min-h-5 text-center text-xs text-brand">
        {status === "sent" ? "Thanks! We'll reply within 24 hours." : ""}
      </p>
    </form>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className="text-[32px] font-extrabold leading-[1.05] tracking-tight text-ink md:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-muted">{description}</p>
      )}
    </div>
  );
}

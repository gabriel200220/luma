import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p className={cn("text-[11px] font-semibold uppercase tracking-[0.14em] text-brand", className)}>
      {children}
    </p>
  );
}

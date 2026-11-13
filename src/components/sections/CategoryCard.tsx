import Link from "next/link";
import type { Category } from "@/types";
import { ArrowRight } from "@/components/ui/Icons";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-line bg-white p-5 transition-shadow duration-200 hover:shadow-lg focus-within:shadow-lg">
      <span className="mb-5 inline-flex w-fit rounded-md bg-brand-soft px-2 py-1 text-[10px] font-bold text-brand">
        {category.number}
      </span>
      <h3 className="text-base font-bold text-ink">{category.title}</h3>
      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink-muted">
        {category.description}
      </p>
      <Link
        href={category.href}
        className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-ink"
      >
        Explore
        <ArrowRight
          width={14}
          height={14}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
        <span className="sr-only">{category.title} courses</span>
      </Link>
    </article>
  );
}

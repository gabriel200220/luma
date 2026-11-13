import { categories } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryCard } from "./CategoryCard";

export function Categories() {
  return (
    <section id="courses" aria-labelledby="categories-title" className="section-y scroll-mt-16 bg-white">
      <Container>
        <SectionHeading
          id="categories-title"
          eyebrow="Find your next skill"
          title={
            <>
              Learn something
              <br className="hidden md:block" /> worth knowing.
            </>
          }
          description="Short, practical courses designed around skills you can put to work immediately."
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <li key={category.id}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

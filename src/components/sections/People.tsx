import Image from "next/image";
import { collageImages, people } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

interface CollageSlot {
  index: number;
  aspectClass: string;
}

interface CollageColumn {
  offsetClass: string;
  items: CollageSlot[];
}

const columns: CollageColumn[] = [
  {
    // Coluna 1 (esquerda): começa bem abaixo
    offsetClass: "pt-14 md:pt-20",
    items: [
      { index: 8, aspectClass: "aspect-[3/4]" },
      { index: 9, aspectClass: "aspect-[3/4]" },
    ],
  },
  {
    // Coluna 2 (centro-esquerda): começa bem no topo
    offsetClass: "pt-2 md:pt-3",
    items: [
      { index: 5, aspectClass: "aspect-[3/4]" },
      { index: 6, aspectClass: "aspect-[3/4]" },
      { index: 7, aspectClass: "aspect-[1/1]" },
    ],
  },
  {
    // Coluna 3 (centro-direita): começa um pouco abaixo da coluna 2
    offsetClass: "pt-6 md:pt-9",
    items: [
      { index: 2, aspectClass: "aspect-[3/4]" },
      { index: 3, aspectClass: "aspect-[3/4]" },
      { index: 4, aspectClass: "aspect-[1/1]" },
    ],
  },
  {
    // Coluna 4 (direita): mais alta que a coluna 1 e com a 1ª foto mais comprida
    offsetClass: "pt-9 md:pt-14",
    items: [
      { index: 0, aspectClass: "aspect-[2/3]" },
      { index: 1, aspectClass: "aspect-[3/4]" },
    ],
  },
];

export function People() {
  return (
    <section
      id="people"
      aria-labelledby="people-title"
      className="section-y scroll-mt-16 overflow-hidden bg-cream"
    >
      <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <SectionHeading
            id="people-title"
            eyebrow={people.eyebrow}
            title={people.title}
            description={people.description}
          />
          <Button href="#" variant="outline" size="lg" fullWidthOnMobile className="mt-7">
            {people.cta}
          </Button>
        </div>

        <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center py-4">
          {/* Círculo azul-claro grande e redondo por trás das fotos */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 aspect-square h-[102%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-soft"
          />

          <ul className="relative grid w-full grid-cols-4 items-start gap-2.5 md:gap-3">
            {columns.map((column, colIndex) => (
              <li key={colIndex}>
                <ul className={cn("flex flex-col gap-2.5 md:gap-3", column.offsetClass)}>
                  {column.items.map(({ index, aspectClass }) => {
                    const image = collageImages[index];
                    return (
                      <li
                        key={image.src}
                        className={cn(
                          "relative w-full overflow-hidden rounded-[4px] bg-white shadow-sm",
                          aspectClass
                        )}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(min-width: 768px) 12vw, 22vw"
                          className="object-cover"
                        />
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

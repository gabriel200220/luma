import Link from "next/link";
import { footerColumns } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-night text-white">
      <Container className="pt-14 md:pt-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-xl font-extrabold tracking-tight">
              luma<span className="text-brand">.</span>
            </Link>
            <p className="mt-3 max-w-[16rem] text-xs leading-relaxed text-white/60">
              Practical learning for curious people.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="col-span-full grid grid-cols-2 gap-10 md:col-span-3 md:col-start-2 md:row-start-1 md:grid-cols-3"
          >
            {footerColumns.map((column) => (
              <div key={column.title} className="[&:last-child]:col-span-2 md:[&:last-child]:col-span-1">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="text-xs text-white/60 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 py-6 text-center text-[11px] text-white/50 md:mt-16">
          © 2026 Luma Learning
        </div>
      </Container>
    </footer>
  );
}

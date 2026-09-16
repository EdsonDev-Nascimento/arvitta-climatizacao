import { Quote, Star } from "lucide-react";
import { reviews } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

/**
 * ATENÇÃO: depoimentos demonstrativos. Textos fictícios criados apenas para
 * este projeto de portfólio — não representam clientes reais.
 */
export function Reviews() {
  return (
    <section id="avaliacoes" className="surface-muted px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Avaliações"
          title="Quem contrata, recomenda."
          subtitle="Depoimentos demonstrativos deste projeto de portfólio."
        />

        <ul className="mt-16 grid gap-6 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal as="li" key={r.text} delay={i * 80} className="h-full">
              <figure className="card-elevated flex h-full flex-col p-8">
                <Quote className="size-7 text-accent" aria-hidden="true" />
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <span className="block text-sm font-semibold text-foreground">{r.author}</span>
                  <span className="mt-2 flex items-center gap-0.5" aria-label="5 de 5 estrelas">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-accent text-accent" aria-hidden="true" />
                    ))}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

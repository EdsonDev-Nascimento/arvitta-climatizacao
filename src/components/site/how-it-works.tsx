import { steps } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Como funciona"
          title="Do primeiro contato ao atendimento agendado"
          subtitle="Um processo simples e transparente em quatro etapas."
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute top-6 right-0 left-0 hidden h-px bg-border lg:block"
          />
          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 90} className="relative lg:pr-4">
                <span className="font-display relative z-10 grid size-12 place-items-center rounded-full border border-border bg-card text-base font-bold text-primary shadow-[var(--shadow-card)]">
                  {i + 1}
                </span>
                <h3 className="mt-6 text-base font-semibold tracking-tight uppercase text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

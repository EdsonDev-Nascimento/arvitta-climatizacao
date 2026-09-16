import {
  ArrowUpRight,
  Building2,
  Gauge,
  Settings,
  ShieldCheck,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { services, whatsappLink } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const icons: Record<string, LucideIcon> = {
  wrench: Wrench,
  sparkles: Sparkles,
  shield: ShieldCheck,
  settings: Settings,
  gauge: Gauge,
  building: Building2,
};

export function Services() {
  return (
    <section id="servicos" className="surface-muted px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Serviços"
          title="Soluções completas em climatização"
          subtitle="Do primeiro equipamento à manutenção preventiva, cuidamos de todo o processo."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon] ?? Wrench;
            return (
              <Reveal as="li" key={s.title} delay={i * 70} className="h-full">
                <article className="card-elevated flex h-full flex-col p-7">
                  <span className="grid size-12 place-items-center rounded-xl bg-accent-soft text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                  <a
                    href={whatsappLink(
                      `Olá! Gostaria de solicitar um orçamento para ${s.title.toLowerCase()}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    Solicitar orçamento
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

import {
  Award,
  ClipboardCheck,
  Eye,
  Headset,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { differentials } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const icons: Record<string, LucideIcon> = {
  headset: Headset,
  zap: Zap,
  clipboard: ClipboardCheck,
  award: Award,
  eye: Eye,
};

export function Differentials() {
  return (
    <section id="diferenciais" className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que escolher a ArVitta?"
          subtitle="Um serviço técnico organizado, transparente e feito para durar."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((d, i) => {
            const Icon = icons[d.icon] ?? Award;
            return (
              <Reveal as="li" key={d.title} delay={i * 70} className="h-full">
                <div className="flex h-full gap-5 rounded-2xl border border-border/70 bg-card p-7 transition-colors hover:border-accent/50">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-foreground">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

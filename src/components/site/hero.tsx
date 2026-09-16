import { ArrowRight, Check } from "lucide-react";
import heroImg from "@/assets/hero-tecnico.jpg";
import { WhatsappIcon } from "./whatsapp-icon";
import { whatsappLink } from "@/lib/site-config";
import { Reveal } from "./reveal";

const trust = [
  "Atendimento residencial e comercial",
  "Técnicos especializados",
  "Atendimento rápido e organizado",
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(90%_70%_at_15%_0%,var(--accent-soft),transparent_65%)]"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Climatização residencial e comercial</p>
          <h1 className="mt-5 text-4xl leading-[1.05] font-bold text-foreground sm:text-5xl lg:text-6xl">
            Conforto na <span className="text-primary">temperatura certa.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Instalação, manutenção e higienização de ar-condicionado com atendimento profissional
            para residências e empresas.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:bg-primary-deep motion-reduce:hover:translate-y-0"
            >
              <WhatsappIcon className="size-5" />
              Solicitar orçamento
            </a>
            <a
              href="#servicos"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-input bg-card px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Conhecer serviços
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-7">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="size-4 shrink-0 text-accent" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-muted shadow-[var(--shadow-lift)]">
            <img
              src={heroImg}
              width={1280}
              height={1600}
              alt="Técnico realizando manutenção em um ar-condicionado split em uma sala moderna"
              className="h-[26rem] w-full object-cover object-center sm:h-[32rem] lg:h-[36rem]"
            />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-border bg-card/95 p-5 shadow-[var(--shadow-float)] backdrop-blur sm:left-8 sm:right-auto sm:max-w-xs">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-primary">
              Atendimento rápido
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Solicite seu orçamento pelo WhatsApp.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { WhatsappIcon } from "./whatsapp-icon";
import { whatsappLink } from "@/lib/site-config";
import { Reveal } from "./reveal";

export function CtaBand() {
  return (
    <section className="px-5 sm:px-8">
      <Reveal className="surface-deep mx-auto max-w-7xl rounded-[2rem] px-7 py-16 text-center sm:px-14 lg:py-20">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold text-primary-foreground sm:text-4xl">
          Precisa instalar ou fazer manutenção no seu ar-condicionado?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-primary-foreground/80">
          Fale conosco pelo WhatsApp e solicite uma avaliação.
        </p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-whatsapp px-8 py-4.5 text-sm font-semibold text-whatsapp-foreground shadow-[var(--shadow-float)] transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 sm:text-base"
        >
          <WhatsappIcon className="size-5" />
          Solicitar orçamento pelo WhatsApp
        </a>
      </Reveal>
    </section>
  );
}

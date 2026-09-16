import { Clock, Mail, Phone } from "lucide-react";
import { Logo } from "./logo";
import { site } from "@/lib/site-config";

/** Dados de contato fictícios — projeto demonstrativo de portfólio. */
const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#diferenciais" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#orcamento" },
];

export function Footer() {
  return (
    <footer className="surface-deep mt-24 px-5 pt-16 pb-10 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-xs text-sm text-primary-foreground/75">{site.tagline}</p>
          </div>

          <nav aria-label="Links do rodapé">
            <h2 className="text-sm font-semibold tracking-[0.16em] uppercase text-accent">
              Navegação
            </h2>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold tracking-[0.16em] uppercase text-accent">
              Contato
            </h2>
            <ul className="mt-5 space-y-3.5 text-sm text-primary-foreground/75">
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-accent" aria-hidden="true" />
                {site.phoneDisplay}
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
                {site.email}
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  {site.hours[0]}
                  <br />
                  {site.hours[1]}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/15 pt-7 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ArVitta Climatização. Todos os direitos reservados.</p>
          <p>Projeto demonstrativo de portfólio — empresa e dados fictícios.</p>
        </div>
      </div>
    </footer>
  );
}

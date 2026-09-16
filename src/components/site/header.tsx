import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { WhatsappIcon } from "./whatsapp-icon";
import { navLinks, whatsappLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur-md shadow-[0_8px_30px_-24px_oklch(0.24_0.04_240/0.5)]"
          : "border-b border-transparent bg-background/80 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8 lg:py-4">
        <a href="#inicio" aria-label="ArVitta Climatização — início" className="min-w-0">
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:bg-primary-deep motion-reduce:hover:translate-y-0"
          >
            <WhatsappIcon className="size-4" />
            Solicitar orçamento
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar orçamento pelo WhatsApp"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-whatsapp-foreground"
          >
            <WhatsappIcon className="size-4" />
            <span className="hidden sm:inline">Orçamento</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-11 place-items-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-secondary"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden"
      >
        <nav aria-label="Navegação mobile" className="flex flex-col">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#orcamento"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Solicitar orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}

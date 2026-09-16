import { WhatsappIcon } from "./whatsapp-icon";
import { whatsappLink } from "@/lib/site-config";

export function FloatingWhatsapp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="group fixed right-4 bottom-4 z-50 inline-flex items-center gap-0 rounded-full bg-whatsapp py-3.5 pr-3.5 pl-3.5 text-whatsapp-foreground shadow-[var(--shadow-float)] transition-all hover:pr-5 sm:right-6 sm:bottom-6"
    >
      <WhatsappIcon className="size-6 shrink-0" />
      <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap transition-all duration-300 group-hover:ml-2.5 group-hover:max-w-[8rem]">
        Fale conosco
      </span>
    </a>
  );
}

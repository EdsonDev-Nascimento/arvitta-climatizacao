import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function FaqSection() {
  return (
    <section id="faq" className="surface-muted px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas frequentes" />

        <Reveal className="mt-14">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faq.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-6 last:border-b"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

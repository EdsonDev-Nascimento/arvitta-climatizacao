import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { TrustBar } from "@/components/site/trust-bar";
import { Services } from "@/components/site/services";
import { Differentials } from "@/components/site/differentials";
import { BeforeAfter } from "@/components/site/before-after";
import { HowItWorks } from "@/components/site/how-it-works";
import { CtaBand } from "@/components/site/cta-band";
import { Reviews } from "@/components/site/reviews";
import { Coverage } from "@/components/site/coverage";
import { FaqSection } from "@/components/site/faq-section";
import { QuoteForm } from "@/components/site/quote-form";
import { Footer } from "@/components/site/footer";
import { FloatingWhatsapp } from "@/components/site/floating-whatsapp";

const title = "ArVitta Climatização — Instalação, manutenção e higienização de ar-condicionado";
const description =
  "Instalação, manutenção e higienização de ar-condicionado para residências e empresas. Atendimento profissional e orçamento rápido pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HVACBusiness",
          name: "ArVitta Climatização",
          description,
          telephone: "+55 11 99999-9999",
          email: "contato@arvitta.com.br",
          openingHours: "Mo-Sa 08:00-18:00",
          areaServed: [
            "Suzano",
            "Mogi das Cruzes",
            "Poá",
            "Itaquaquecetuba",
            "Ferraz de Vasconcelos",
            "Zona Leste de São Paulo",
          ],
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Differentials />
        <BeforeAfter />
        <HowItWorks />
        <CtaBand />
        <Reviews />
        <Coverage />
        <FaqSection />
        <QuoteForm />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}

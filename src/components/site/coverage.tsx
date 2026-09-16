import { MapPin } from "lucide-react";
import { cities } from "@/lib/site-config";
import { Reveal } from "./reveal";

export function Coverage() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">Área de atendimento</p>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Atendimento em toda a região
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Atendimento residencial e comercial em toda a região.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {cities.map((c) => (
              <li
                key={c}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground"
              >
                <MapPin className="size-4 shrink-0 text-accent" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-border bg-muted">
            <svg
              viewBox="0 0 400 300"
              role="img"
              aria-label="Ilustração de mapa representando a região atendida"
              className="size-full"
            >
              <defs>
                <pattern id="grid" width="26" height="26" patternUnits="userSpaceOnUse">
                  <path d="M26 0H0V26" fill="none" stroke="var(--border)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="400" height="300" fill="var(--card)" />
              <rect width="400" height="300" fill="url(#grid)" />
              <path
                d="M-10 210 C 80 180, 130 250, 220 215 S 350 170, 420 200"
                fill="none"
                stroke="var(--accent)"
                strokeOpacity="0.45"
                strokeWidth="6"
              />
              <path
                d="M60 -10 C 90 80, 40 140, 120 190 S 200 260, 190 320"
                fill="none"
                stroke="var(--primary)"
                strokeOpacity="0.18"
                strokeWidth="5"
              />
              <circle cx="200" cy="150" r="46" fill="var(--accent)" fillOpacity="0.1" />
              <circle cx="200" cy="150" r="26" fill="var(--accent)" fillOpacity="0.16" />
              <circle cx="200" cy="150" r="8" fill="var(--primary)" />
              {[
                [110, 96],
                [292, 108],
                [138, 214],
                [286, 208],
                [206, 62],
              ].map(([cx, cy]) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill="var(--primary)" fillOpacity="0.4" />
              ))}
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

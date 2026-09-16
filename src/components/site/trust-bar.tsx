import { stats } from "@/lib/site-config";
import { Reveal } from "./reveal";

/** Indicadores demonstrativos — valores de exemplo (editáveis em site-config.ts). */
export function TrustBar() {
  return (
    <section aria-label="Indicadores da empresa" className="px-5 pt-20 sm:px-8 lg:pt-24">
      <Reveal className="mx-auto max-w-7xl">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card px-6 py-8 text-center sm:px-8 sm:py-10">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="font-display block text-3xl font-bold text-primary sm:text-4xl">
                  {s.value}
                </span>
                <span className="mt-2 block text-sm text-muted-foreground">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}

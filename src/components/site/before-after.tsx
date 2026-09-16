import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import antes from "@/assets/antes-higienizacao.jpg";
import depois from "@/assets/depois-higienizacao.jpg";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const areaRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const moveTo = useCallback((clientX: number) => {
    const el = areaRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <section className="surface-muted px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Antes e depois"
          title="A diferença de um serviço bem feito"
          subtitle="Manutenção e higienização periódicas ajudam a manter o equipamento limpo, eficiente e em boas condições de funcionamento."
        />

        <Reveal className="mt-14">
          <div
            ref={areaRef}
            onPointerDown={(e) => {
              dragging.current = true;
              e.currentTarget.setPointerCapture(e.pointerId);
              moveTo(e.clientX);
            }}
            onPointerMove={(e) => dragging.current && moveTo(e.clientX)}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
            className="relative aspect-[3/2] w-full touch-none overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-lift)] select-none"
          >
            <img
              src={depois}
              width={1200}
              height={800}
              loading="lazy"
              alt="Unidade interna de ar-condicionado limpa após higienização profissional"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
              <img
                src={antes}
                width={1200}
                height={800}
                loading="lazy"
                alt="Unidade interna de ar-condicionado com filtros sujos antes da higienização"
                className="absolute inset-0 h-full w-[100vw] max-w-none object-cover"
                style={{ width: areaRef.current ? `${areaRef.current.clientWidth}px` : "100%" }}
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-primary-deep/85 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary-foreground">
                Antes
              </span>
            </div>
            <span className="absolute bottom-4 right-4 rounded-full bg-accent/90 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase text-accent-foreground">
              Depois
            </span>

            <div
              className="pointer-events-none absolute inset-y-0 w-0.5 bg-background/90"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute top-1/2 left-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-background text-primary shadow-[var(--shadow-float)]">
                <MoveHorizontal className="size-5" aria-hidden="true" />
              </span>
            </div>
          </div>

          <label className="mt-6 block text-center text-sm text-muted-foreground">
            <span className="mb-3 block">Arraste para comparar antes e depois</span>
            <input
              type="range"
              min={0}
              max={100}
              value={Math.round(pos)}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Comparar imagem de antes e depois da higienização"
              className="mx-auto block w-full max-w-md accent-[var(--accent)]"
            />
          </label>
        </Reveal>
      </div>
    </section>
  );
}

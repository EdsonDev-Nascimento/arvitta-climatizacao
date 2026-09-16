import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { WhatsappIcon } from "./whatsapp-icon";
import { whatsappLink } from "@/lib/site-config";
import { Reveal } from "./reveal";

const serviceOptions = [
  "Instalação",
  "Higienização",
  "Manutenção",
  "Carga de gás",
  "Climatização comercial",
  "Outro",
];

const fieldClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-ring/30";
const labelClass = "mb-2 block text-sm font-medium text-foreground";

export function QuoteForm() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    cidade: "",
    servico: "Instalação",
    mensagem: "",
  });

  const update = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = [
      `Olá! Meu nome é ${form.nome.trim()}.`,
      `Gostaria de solicitar um orçamento para ${form.servico.toLowerCase()}.`,
      `Minha cidade é ${form.cidade.trim()}.`,
      `Telefone/WhatsApp: ${form.telefone.trim()}.`,
      `Informações adicionais: ${form.mensagem.trim() || "—"}`,
    ].join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="orcamento" className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Orçamento</p>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Solicite seu orçamento
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Preencha os campos e sua mensagem será montada automaticamente no WhatsApp. Nossa equipe
            responde com as orientações e o valor do serviço.
          </p>
          <p className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-muted p-5 text-sm text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
            Sem cadastro e sem compromisso. Você só envia os dados necessários para o atendimento.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="nome">
                  Nome
                </label>
                <input
                  id="nome"
                  required
                  autoComplete="name"
                  value={form.nome}
                  onChange={(e) => update("nome")(e.target.value)}
                  placeholder="Seu nome"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="telefone">
                  Telefone / WhatsApp
                </label>
                <input
                  id="telefone"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  value={form.telefone}
                  onChange={(e) => update("telefone")(e.target.value)}
                  placeholder="(11) 90000-0000"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="cidade">
                  Cidade
                </label>
                <input
                  id="cidade"
                  required
                  value={form.cidade}
                  onChange={(e) => update("cidade")(e.target.value)}
                  placeholder="Sua cidade"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="servico">
                  Tipo de serviço
                </label>
                <select
                  id="servico"
                  value={form.servico}
                  onChange={(e) => update("servico")(e.target.value)}
                  className={fieldClass}
                >
                  {serviceOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className={labelClass} htmlFor="mensagem">
                Conte rapidamente o que você precisa
              </label>
              <textarea
                id="mensagem"
                rows={4}
                value={form.mensagem}
                onChange={(e) => update("mensagem")(e.target.value)}
                placeholder="Modelo do equipamento, quantidade de aparelhos, local da instalação…"
                className={`${fieldClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-deep motion-reduce:hover:translate-y-0"
            >
              <WhatsappIcon className="size-5" />
              Solicitar orçamento
            </button>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              O envio abre o WhatsApp com a mensagem pronta.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

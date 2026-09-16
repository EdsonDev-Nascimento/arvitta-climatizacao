/**
 * DADOS DEMONSTRATIVOS — PROJETO FICTÍCIO DE PORTFÓLIO.
 * Empresa, telefone, e-mail, números e depoimentos abaixo são exemplos
 * ilustrativos e podem ser editados livremente neste único arquivo.
 */

export const site = {
  brand: "ArVitta",
  brandSuffix: "Climatização",
  tagline: "Conforto, eficiência e atendimento profissional.",
  // Número fictício (formato internacional, apenas dígitos) — edite aqui.
  whatsapp: "5511999999999",
  phoneDisplay: "(11) 99999-9999",
  email: "contato@arvitta.com.br",
  hours: ["Segunda a sábado", "08h às 18h"],
};

/** Monta o link do WhatsApp com mensagem pré-preenchida. */
export function whatsappLink(message = "Olá! Gostaria de solicitar um orçamento.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Indicadores demonstrativos (valores de exemplo para portfólio). */
export const stats = [
  { value: "+500", label: "Atendimentos realizados" },
  { value: "4.9", label: "Avaliação dos clientes" },
  { value: "5+", label: "Anos de experiência" },
  { value: "100%", label: "Foco na satisfação" },
];

export const services = [
  {
    icon: "wrench",
    title: "Instalação de ar-condicionado",
    text: "Instalação de aparelhos split residenciais e comerciais com acabamento profissional.",
  },
  {
    icon: "sparkles",
    title: "Limpeza e higienização",
    text: "Limpeza completa para melhorar a qualidade do ar e o desempenho do equipamento.",
  },
  {
    icon: "shield",
    title: "Manutenção preventiva",
    text: "Revisões periódicas para evitar problemas e prolongar a vida útil do aparelho.",
  },
  {
    icon: "settings",
    title: "Manutenção corretiva",
    text: "Diagnóstico e reparo de falhas, ruídos, vazamentos e problemas de funcionamento.",
  },
  {
    icon: "gauge",
    title: "Carga de gás",
    text: "Diagnóstico do sistema e manutenção adequada quando necessária.",
  },
  {
    icon: "building",
    title: "Climatização comercial",
    text: "Soluções para escritórios, lojas e pequenos estabelecimentos.",
  },
] as const;

export const differentials = [
  {
    icon: "headset",
    title: "Atendimento profissional",
    text: "Comunicação clara do início ao fim.",
  },
  { icon: "zap", title: "Agilidade", text: "Facilidade para solicitar orçamento e agendar atendimento." },
  { icon: "clipboard", title: "Organização", text: "Serviço realizado com cuidado e atenção ao ambiente." },
  { icon: "award", title: "Qualidade", text: "Procedimentos técnicos focados em segurança e durabilidade." },
  { icon: "eye", title: "Transparência", text: "O cliente entende o serviço antes da execução." },
] as const;

export const steps = [
  { title: "Entre em contato", text: "Envie uma mensagem pelo WhatsApp." },
  { title: "Conte o que precisa", text: "Informe o modelo do equipamento e o serviço desejado." },
  { title: "Receba o orçamento", text: "Nossa equipe analisa as informações e orienta você." },
  { title: "Agende o serviço", text: "Escolha o melhor dia e horário para atendimento." },
];

/** Depoimentos demonstrativos — textos fictícios para projeto de portfólio. */
export const reviews = [
  {
    author: "Cliente residencial",
    text: "Atendimento organizado, serviço muito bem executado e ótima comunicação.",
  },
  {
    author: "Cliente comercial",
    text: "Precisávamos de manutenção nos equipamentos da empresa e fomos muito bem atendidos.",
  },
  {
    author: "Cliente residencial",
    text: "Processo simples desde o primeiro contato até a conclusão do serviço.",
  },
];

export const cities = [
  "Suzano",
  "Mogi das Cruzes",
  "Poá",
  "Itaquaquecetuba",
  "Ferraz de Vasconcelos",
  "Zona Leste de São Paulo",
];

export const faq = [
  {
    q: "Quanto custa uma instalação de ar-condicionado?",
    a: "O valor depende do equipamento, local da instalação e estrutura necessária. Entre em contato para solicitar orçamento.",
  },
  {
    q: "Vocês atendem empresas?",
    a: "Sim. Atendemos residências, escritórios, lojas e pequenos estabelecimentos.",
  },
  {
    q: "Quanto tempo leva uma instalação?",
    a: "O tempo varia de acordo com o local e o tipo de equipamento.",
  },
  {
    q: "Quando devo higienizar meu ar-condicionado?",
    a: "A frequência depende da utilização e das condições do ambiente.",
  },
  {
    q: "Vocês realizam manutenção preventiva?",
    a: "Sim. Trabalhamos com manutenção preventiva e corretiva.",
  },
];

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Por que escolher", href: "#diferenciais" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "FAQ", href: "#faq" },
];

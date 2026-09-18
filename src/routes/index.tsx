import { createFileRoute } from "@tanstack/react-router";

import capa from "@/assets/capa-ebook.png.asset.json";
import { Accordion, type AccordionItem } from "@/components/Accordion";
import { BuyButton } from "@/components/BuyButton";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { BONUSES, CHAPTERS, IDENTIFY, LEARNINGS } from "@/content/ebook";
import { PRICE_LABEL, PRODUCT_NAME, REFUND_POLICY, SUPPORT_EMAIL } from "@/config/site";

const TITLE = "Domine Suas Dívidas — Guia Prático de Gestão Financeira";
const DESCRIPTION =
  "E-book em PDF com 10 capítulos e 6 ferramentas para organizar seu orçamento, mapear suas dívidas e planejar seus próximos passos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CHAPTER_ITEMS: AccordionItem[] = CHAPTERS.map((c) => ({
  id: `cap-${c.number}`,
  label: `CAP ${c.number}`,
  title: c.title,
  content: c.description,
}));

const FAQ_ITEMS: AccordionItem[] = [
  {
    id: "faq-1",
    label: "01",
    title: "O produto é físico ou digital?",
    content:
      "É um produto 100% digital: um e-book em PDF. Nada é enviado pelos correios.",
  },
  {
    id: "faq-2",
    label: "02",
    title: "Como receberei meu e-book?",
    content:
      "Após a confirmação do pagamento, o acesso é liberado conforme as instruções enviadas pela Kiwify, plataforma responsável pela entrega do material.",
  },
  {
    id: "faq-3",
    label: "03",
    title: "Posso ler pelo celular?",
    content:
      "Sim. O arquivo está em PDF e pode ser lido no celular, tablet ou computador, em qualquer leitor de PDF.",
  },
  {
    id: "faq-4",
    label: "04",
    title: "O material é indicado para iniciantes?",
    content:
      "Sim. O guia parte dos fundamentos (renda, despesa e patrimônio) e avança passo a passo até o plano de ação de 30 dias.",
  },
  {
    id: "faq-5",
    label: "05",
    title: "Os bônus estão incluídos?",
    content:
      "Sim. Os seis materiais complementares fazem parte do mesmo arquivo: diagnóstico financeiro, orçamento mensal, organizador de dívidas, planejador de metas, plano de 30 dias e glossário.",
  },
  {
    id: "faq-6",
    label: "06",
    title: "Como funciona o suporte?",
    content: SUPPORT_EMAIL
      ? `O suporte é feito pelo e-mail ${SUPPORT_EMAIL}. Questões relacionadas ao pagamento também podem ser tratadas com a Kiwify.`
      : "O e-mail de suporte ainda precisa ser configurado pelo produtor. Questões relacionadas ao pagamento podem ser tratadas com a Kiwify.",
  },
  {
    id: "faq-7",
    label: "07",
    title: "Quais são as condições de reembolso?",
    content: REFUND_POLICY,
  },
];

function SectionTitle({ children, kicker }: { children: string; kicker?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {kicker && (
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
          {kicker}
        </p>
      )}
      <h2 className="mt-3 text-balance text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
        {children}
      </h2>
    </div>
  );
}

function Index() {
  return (
    <div id="topo" className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="hero-bg px-5 pb-16 pt-12 sm:pt-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <p className="inline-flex rounded-full border border-border px-3 py-1 text-xs tracking-wide text-accent">
                E-BOOK DIGITAL • PDF
              </p>
              <h1 className="mt-5 text-balance text-3xl font-extrabold leading-[1.1] sm:text-4xl md:text-5xl">
                Organize suas finanças. Entenda suas dívidas.{" "}
                <span className="text-gradient-accent">Planeje seus próximos passos.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Um guia prático de educação financeira para ajudar você a compreender seu orçamento,
                analisar suas dívidas e desenvolver hábitos financeiros mais conscientes.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <BuyButton location="hero" className="w-full text-sm sm:w-auto">
                  QUERO CONHECER O E-BOOK
                </BuyButton>
                <p className="text-sm text-muted-foreground">
                  <span className="font-display text-xl font-bold text-foreground">
                    {PRICE_LABEL}
                  </span>{" "}
                  • pagamento único
                </p>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Produto digital. O acesso é liberado após a confirmação do pagamento, conforme a
                entrega configurada na Kiwify.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <img
                src={capa.url}
                alt="Capa do e-book Domine Suas Dívidas"
                width={1254}
                height={1254}
                loading="eager"
                className="mx-auto w-full max-w-md rounded-2xl border border-border shadow-[var(--shadow-card)]"
              />
            </div>
          </div>
        </section>

        {/* Você se identifica? */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <SectionTitle kicker="Você se identifica?">
              Organizar suas finanças começa por entender sua situação atual.
            </SectionTitle>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {IDENTIFY.map((item) => (
                <li key={item} className="surface-card flex gap-3 p-5">
                  <span aria-hidden="true" className="mt-1 text-accent">
                    ◆
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solução */}
        <section id="o-ebook" className="px-5 py-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
            <img
              src={capa.url}
              alt="Capa do e-book Domine Suas Dívidas"
              width={1254}
              height={1254}
              loading="lazy"
              className="mx-auto w-full max-w-sm rounded-2xl border border-border shadow-[var(--shadow-card)]"
            />
            <div>
              <h2 className="text-balance text-2xl font-bold sm:text-3xl md:text-4xl">
                Conheça o <span className="text-gradient-accent">Domine Suas Dívidas</span>.
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                O guia reúne conceitos, exercícios e ferramentas de organização financeira em uma
                sequência estruturada: primeiro o entendimento da sua situação, depois o orçamento,
                o mapa das dívidas, as estratégias de priorização e, por fim, um plano de ação.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                São 10 capítulos e 6 materiais complementares para preencher e usar no dia a dia.
              </p>
              <div className="mt-7">
                <BuyButton location="solucao" className="text-sm">
                  QUERO CONHECER O E-BOOK
                </BuyButton>
              </div>
            </div>
          </div>
        </section>

        {/* O que você vai aprender */}
        <section id="aprender" className="bg-surface/40 px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <SectionTitle kicker="Conteúdo prático">O que você vai aprender</SectionTitle>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {LEARNINGS.map((item, i) => (
                <div key={item.title} className="surface-card p-5">
                  <span className="font-display text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capítulos */}
        <section id="capitulos" className="px-5 py-16">
          <div className="mx-auto max-w-3xl">
            <SectionTitle kicker="Sumário">Conteúdo do e-book</SectionTitle>
            <div className="mt-10">
              <Accordion items={CHAPTER_ITEMS} />
            </div>
          </div>
        </section>

        {/* Bônus */}
        <section id="bonus" className="bg-surface/40 px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <SectionTitle kicker="6 bônus incluídos">
              Ferramentas complementares para colocar o aprendizado em prática.
            </SectionTitle>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {BONUSES.map((b) => (
                <div key={b.number} className="surface-card p-6">
                  <span className="inline-flex rounded-full bg-primary/20 px-3 py-1 font-display text-xs font-bold text-accent">
                    BÔNUS {b.number}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-5xl">
            <SectionTitle kicker="Simples e rápido">Como funciona</SectionTitle>
            <ol className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  t: "Acesse o checkout",
                  d: "Clique em um dos botões e você será levado ao checkout oficial da Kiwify.",
                },
                {
                  t: "Finalize o pagamento",
                  d: "O pagamento é processado com segurança pela própria plataforma.",
                },
                {
                  t: "Receba o acesso",
                  d: "O material digital é liberado conforme as instruções enviadas pela plataforma.",
                },
              ].map((s, i) => (
                <li key={s.t} className="surface-card p-6">
                  <span className="font-display text-3xl font-extrabold text-gradient-accent">
                    {i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-base font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Oferta */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-5xl surface-card overflow-hidden">
            <div className="grid gap-8 p-7 sm:p-10 md:grid-cols-2 md:items-center">
              <img
                src={capa.url}
                alt="Capa do e-book Domine Suas Dívidas"
                width={1254}
                height={1254}
                loading="lazy"
                className="mx-auto w-full max-w-xs rounded-2xl border border-border"
              />
              <div>
                <h2 className="text-balance text-2xl font-bold sm:text-3xl">{PRODUCT_NAME}</h2>
                <ul className="mt-5 flex flex-col gap-2 text-sm text-muted-foreground">
                  {[
                    "Formato PDF, para celular, tablet ou computador",
                    "10 capítulos em sequência estruturada",
                    "6 bônus práticos incluídos",
                    "Acesso digital após a confirmação do pagamento",
                  ].map((li) => (
                    <li key={li} className="flex gap-2">
                      <span aria-hidden="true" className="text-accent">
                        ✓
                      </span>
                      {li}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-display text-4xl font-extrabold">{PRICE_LABEL}</p>
                <p className="text-sm text-muted-foreground">pagamento único</p>
                <div className="mt-6">
                  <BuyButton location="oferta" className="w-full text-sm sm:w-auto">
                    ADQUIRIR MEU E-BOOK
                  </BuyButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-surface/40 px-5 py-16">
          <div className="mx-auto max-w-3xl">
            <SectionTitle kicker="Dúvidas">Perguntas frequentes</SectionTitle>
            <div className="mt-10">
              <Accordion items={FAQ_ITEMS} />
            </div>
          </div>
        </section>

        {/* Chamada final */}
        <section className="hero-bg px-5 py-20 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-balance text-2xl font-bold sm:text-3xl md:text-4xl">
              Seu próximo passo pode começar com um planejamento mais claro.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Conheça o guia e utilize as ferramentas para organizar suas informações financeiras.
            </p>
            <div className="mt-8">
              <BuyButton location="cta_final" className="w-full text-sm sm:w-auto">
                QUERO ACESSAR O E-BOOK
              </BuyButton>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

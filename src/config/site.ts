// Configuração central da página de vendas.
// Edite estes valores para atualizar toda a página.

export const PRODUCT_NAME =
  "Domine Suas Dívidas — Guia Prático de Gestão Financeira";
export const PRODUCT_SHORT_NAME = "Domine Suas Dívidas";
export const PRODUCT_PRICE = 19.9;
export const CHECKOUT_URL = "https://pay.kiwify.com.br/YuhYpjO";
export const SUPPORT_EMAIL = ""; // preencher com o e-mail real de suporte
export const PRODUCER_NAME = ""; // preencher com o nome do produtor responsável
export const REFUND_POLICY =
  "As condições de reembolso seguem a política do produtor e da plataforma Kiwify. Confirme os prazos no checkout antes da compra.";

export const PRIVACY_URL = "";
export const TERMS_URL = "";
export const REFUND_URL = "";

export const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const PRICE_LABEL = formatPrice(PRODUCT_PRICE);

export const isCheckoutConfigured = Boolean(CHECKOUT_URL);

/** Evento de clique nos botões de compra (GA4 / Meta Pixel, se configurados). */
export function trackCheckoutClick(location: string) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  };
  w.gtag?.("event", "begin_checkout", {
    item_name: PRODUCT_NAME,
    value: PRODUCT_PRICE,
    currency: "BRL",
    location,
  });
  w.fbq?.("track", "InitiateCheckout", {
    content_name: PRODUCT_NAME,
    value: PRODUCT_PRICE,
    currency: "BRL",
  });
}

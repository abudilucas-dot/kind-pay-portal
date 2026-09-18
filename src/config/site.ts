// Configuração central da página de vendas.
// Edite estes valores para atualizar toda a página.

export const PRODUCT_NAME =
  "Domine Suas Dívidas — Guia Prático de Gestão Financeira";
export const PRODUCT_SHORT_NAME = "Domine Suas Dívidas";
export const PRODUCT_PRICE = 19.9;
export const CHECKOUT_URL = "https://pay.kiwify.com.br/YuhYpjO";
export const SUPPORT_EMAIL = "abudilucas@gmail.com";
export const PRODUCER_NAME = "Lucas Alexandria Abudi";
export const REFUND_POLICY =
  "Garantia de 7 dias: se o conteúdo não atender às suas expectativas, solicite o reembolso pelo e-mail de suporte dentro do prazo. O valor integral será devolvido conforme as regras da Kiwify.";

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

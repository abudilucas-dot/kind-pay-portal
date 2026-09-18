import {
  PRIVACY_URL,
  PRODUCER_NAME,
  PRODUCT_NAME,
  REFUND_POLICY,
  REFUND_URL,
  SUPPORT_EMAIL,
  TERMS_URL,
} from "@/config/site";

function Item({ label, url }: { label: string; url: string }) {
  if (!url) {
    return <li className="text-muted-foreground/70">{label} (a configurar)</li>;
  }
  return (
    <li>
      <a href={url} className="text-muted-foreground transition-colors hover:text-accent">
        {label}
      </a>
    </li>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-base font-bold">{PRODUCT_NAME}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Produtor responsável:{" "}
            {PRODUCER_NAME || <span className="text-muted-foreground/70">a configurar</span>}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Suporte:{" "}
            {SUPPORT_EMAIL ? (
              <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-accent">
                {SUPPORT_EMAIL}
              </a>
            ) : (
              <span className="text-muted-foreground/70">e-mail a configurar</span>
            )}
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
            Informações
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <Item label="Política de privacidade" url={PRIVACY_URL} />
            <Item label="Termos de uso" url={TERMS_URL} />
            <Item label="Política de reembolso" url={REFUND_URL} />
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
            Aviso
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Este material possui finalidade educativa e não substitui orientação financeira
            individualizada. Os resultados dependem das circunstâncias e decisões de cada pessoa.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground/80">{REFUND_POLICY}</p>
        </div>
      </div>
    </footer>
  );
}

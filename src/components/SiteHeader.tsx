import { useState } from "react";
import { PRODUCT_SHORT_NAME } from "@/config/site";
import { BuyButton } from "./BuyButton";

const LINKS = [
  { href: "#o-ebook", label: "O e-book" },
  { href: "#aprender", label: "O que você aprende" },
  { href: "#capitulos", label: "Capítulos" },
  { href: "#bonus", label: "Bônus" },
  { href: "#faq", label: "Dúvidas" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#topo" className="font-display text-sm font-bold tracking-tight">
          {PRODUCT_SHORT_NAME}
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BuyButton location="header" className="px-5 py-2 text-xs">
            QUERO O E-BOOK
          </BuyButton>
        </div>

        <button
          type="button"
          className="rounded-md border border-border px-3 py-2 text-xs lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      <div id="menu-mobile" hidden={!open} className="border-t border-border lg:hidden">
        <nav aria-label="Navegação mobile" className="mx-auto flex max-w-6xl flex-col px-5 py-3">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3 text-sm text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-4">
            <BuyButton location="header_mobile" className="w-full py-3 text-sm">
              QUERO O E-BOOK
            </BuyButton>
          </div>
        </nav>
      </div>
    </header>
  );
}

import { useState } from "react";

export type AccordionItem = {
  id: string;
  label: string;
  title: string;
  content: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id} className="surface-card overflow-hidden">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`panel-${item.id}`}
                onClick={() => setOpen(isOpen ? null : item.id)}
                className="flex w-full items-center gap-4 px-5 py-4 text-left"
              >
                <span className="shrink-0 rounded-full bg-primary/20 px-3 py-1 font-display text-xs font-bold tracking-wide text-accent">
                  {item.label}
                </span>
                <span className="flex-1 font-display text-base font-semibold text-foreground">
                  {item.title}
                </span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-accent transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={`panel-${item.id}`}
              hidden={!isOpen}
              className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground"
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}

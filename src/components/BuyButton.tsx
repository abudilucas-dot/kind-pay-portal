import {
  CHECKOUT_URL,
  isCheckoutConfigured,
  trackCheckoutClick,
} from "@/config/site";

type Props = {
  children: React.ReactNode;
  location: string;
  className?: string;
};

export function BuyButton({ children, location, className = "" }: Props) {
  if (!isCheckoutConfigured) {
    return (
      <span className="inline-flex flex-col gap-1">
        <button
          type="button"
          disabled
          className={`btn-buy opacity-60 ${className}`}
        >
          {children}
        </button>
        <span className="text-xs text-muted-foreground">
          Configure CHECKOUT_URL em src/config/site.ts
        </span>
      </span>
    );
  }

  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCheckoutClick(location)}
      className={`btn-buy ${className}`}
    >
      {children}
    </a>
  );
}

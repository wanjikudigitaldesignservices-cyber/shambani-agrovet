import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type SaleClass = "OTC" | "VET_APPROVAL" | "AGRO_RESTRICTED" | "SERVICE_ONLY";

export type SaleClassBadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  saleClass: SaleClass;
};

export const SaleClassBadge: React.FC<SaleClassBadgeProps> = ({
  saleClass,
  className,
  ...props
}) => {
  const styles: Record<SaleClass, { bg: string; text: string; label: string }> = {
    OTC: {
      bg: "bg-[var(--color-sale-otc)]/10 border-[var(--color-sale-otc)]/20",
      text: "text-[var(--color-sale-otc)]",
      label: "OTC",
    },
    VET_APPROVAL: {
      bg: "bg-[var(--color-sale-vet)]/10 border-[var(--color-sale-vet)]/20",
      text: "text-[var(--color-sale-vet)]",
      label: "Vet Approval",
    },
    AGRO_RESTRICTED: {
      bg: "bg-[var(--color-sale-agro)]/10 border-[var(--color-sale-agro)]/20",
      text: "text-[var(--color-sale-agro)]",
      label: "Restricted Use",
    },
    SERVICE_ONLY: {
      bg: "bg-[var(--color-sale-svc)]/10 border-[var(--color-sale-svc)]/20",
      text: "text-[var(--color-sale-svc)]",
      label: "Vet Service Only",
    },
  };

  const current = styles[saleClass];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
        current.bg,
        current.text,
        className
      )}
      {...props}
    >
      {current.label}
    </span>
  );
};

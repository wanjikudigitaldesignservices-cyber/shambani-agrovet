// src/config/brand.config.ts — SINGLE SOURCE OF TRUTH
// Never hardcode these values anywhere else. Import from here.

export const brand = {
  name: "Shambani Agrovet",
  short: "Shambani",
  tagline: "Everything your farm needs. Advice you can trust.",
  domain: "",
  currency: "KES" as const,
  currencyLocale: "en-KE",
  timezone: "Africa/Nairobi" as const,
  phone: "",
  whatsapp: "",
  email: "",
  address: "",
  geo: { lat: null as number | null, lng: null as number | null },
  hours: [] as { days: string; open: string; close: string }[],
  branches: [] as {
    name: string;
    address: string;
    phone: string;
    lat: number;
    lng: number;
  }[],
  licences: {
    kvbPremisesReg: "",
    pcpbDealerReg: "",
    businessPermit: "",
    kraPin: "",
    odpcReg: "",
  },
  social: {
    facebook: "",
    instagram: "",
    tiktok: "",
    youtube: "",
    x: "",
  },
  builtBy: {
    label: "Built by LQD Creatives",
    url: "",
  },
};

// ---------- Derived helpers ----------

/** Check if a config value is populated (non-empty string, non-null, non-empty array) */
export function isConfigured(value: unknown): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return true;
}

/** Format price in KES */
export function formatPrice(amountInKes: number): string {
  return `KES ${amountInKes.toLocaleString("en-KE")}`;
}

/** WhatsApp link helper */
export function whatsappLink(message?: string): string {
  if (!brand.whatsapp) return "#";
  const base = `https://wa.me/${brand.whatsapp.replace(/[^0-9]/g, "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Generate WhatsApp order message for a product */
export function whatsappOrderMessage(
  productName: string,
  pack: string,
  url: string
): string {
  return `Hi ${brand.short}, I'd like to order:\n\n${productName} (${pack})\n\n${url}`;
}

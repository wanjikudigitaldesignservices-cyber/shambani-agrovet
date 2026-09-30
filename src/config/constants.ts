// src/config/constants.ts — App-wide constants

/** Sale class definitions for products */
export const SALE_CLASSES = {
  OTC: {
    key: "OTC",
    label: "Over the counter",
    labelSw: "Dawa za kawaida",
    color: "green",
    description: "Available without prescription",
  },
  VET: {
    key: "VET",
    label: "Vet approval needed",
    labelSw: "Idhini ya daktari inahitajika",
    color: "blue",
    description: "Requires veterinary prescription or approval",
  },
  AGRO: {
    key: "AGRO",
    label: "Restricted use",
    labelSw: "Matumizi yaliyozuiliwa",
    color: "amber",
    description: "Requires safety acknowledgement before purchase",
  },
  SVC: {
    key: "SVC",
    label: "Vet-service only",
    labelSw: "Huduma ya daktari pekee",
    color: "purple",
    description: "Available only through veterinary service booking",
  },
} as const;

export type SaleClass = keyof typeof SALE_CLASSES;

/** Order status flow */
export const ORDER_STATUSES = [
  "pending_payment",
  "paid",
  "awaiting_vet_approval",
  "packed",
  "out_for_delivery",
  "ready_for_pickup",
  "delivered",
  "cancelled",
  "refunded",
  "payment_failed",
] as const;

export type OrderStatus = (typeof ORDER_STATUSES)[number];

/** User roles */
export const USER_ROLES = [
  "customer",
  "staff",
  "vet",
  "admin",
  "super_admin",
] as const;

export type UserRole = (typeof USER_ROLES)[number];

/** Minimum shelf-life days for sale */
export const MIN_SHELF_LIFE_DAYS = 60;

/** Stock reservation timeout (ms) */
export const STOCK_RESERVATION_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes

/** JWT access token expiry */
export const ACCESS_TOKEN_EXPIRY = "15m";

/** Max upload file size (bytes) */
export const MAX_UPLOAD_SIZE = 5 * 1024 * 1024; // 5 MB

/** Allowed upload MIME types */
export const ALLOWED_UPLOAD_MIMES = [
  "image/jpeg",
  "image/png",
  "image/webp",
] as const;

/** Rate limit presets */
export const RATE_LIMITS = {
  login: { max: 5, window: "15m" },
  register: { max: 5, window: "1h" },
  resetPassword: { max: 3, window: "1h" },
  checkout: { max: 10, window: "10m" },
  search: { max: 60, window: "1m" },
  contact: { max: 5, window: "1h" },
  upload: { max: 10, window: "1h" },
} as const;

/** Supported locales */
export const LOCALES = ["en", "sw"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

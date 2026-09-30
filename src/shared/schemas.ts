// src/shared/schemas.ts — Zod schemas shared between frontend and API
// These types are the contract between client and server.
import { z } from "zod";

// ---------- Common ----------

export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(24),
});

export const idParamSchema = z.object({
  id: z.string().uuid(),
});

export const slugParamSchema = z.object({
  slug: z.string().min(1).max(200),
});

// ---------- Auth ----------

export const loginSchema = z.object({
  email: z.string().email().max(255).toLowerCase(),
  password: z.string().min(10).max(128),
});

export const registerSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  email: z.string().email().max(255).toLowerCase(),
  phone: z
    .string()
    .regex(/^\+?[0-9]{10,15}$/, "Invalid phone number")
    .optional(),
  password: z.string().min(10).max(128),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email().max(255).toLowerCase(),
});

export const resetPasswordSchema = z.object({
  token: z.string().min(1),
  password: z.string().min(10).max(128),
});

// ---------- Products ----------

export const saleClassEnum = z.enum(["OTC", "VET", "AGRO", "SVC"]);

export const productFilterSchema = z.object({
  category: z.string().optional(),
  subcategory: z.string().optional(),
  species: z.string().optional(),
  crop: z.string().optional(),
  minPrice: z.coerce.number().int().min(0).optional(),
  maxPrice: z.coerce.number().int().min(0).optional(),
  inStock: z.coerce.boolean().optional(),
  saleClass: saleClassEnum.optional(),
  sort: z
    .enum(["relevance", "price_asc", "price_desc", "newest", "best_selling"])
    .default("relevance"),
  q: z.string().max(200).optional(), // search query
  ...paginationSchema.shape,
});

// ---------- Cart ----------

export const addToCartSchema = z.object({
  variantId: z.string().uuid(),
  quantity: z.number().int().min(1).max(100),
});

// ---------- Checkout ----------

export const checkoutSchema = z.object({
  contact: z.object({
    name: z.string().min(2).max(100).trim(),
    email: z.string().email().max(255),
    phone: z.string().regex(/^\+?[0-9]{10,15}$/),
  }),
  delivery: z.discriminatedUnion("method", [
    z.object({
      method: z.literal("delivery"),
      zoneId: z.string().uuid(),
      addressLine: z.string().min(5).max(500),
      notes: z.string().max(500).optional(),
    }),
    z.object({
      method: z.literal("pickup"),
      branchIndex: z.number().int().min(0).optional(),
    }),
  ]),
  couponCode: z.string().max(50).optional(),
  paymentMethod: z.enum(["mpesa", "card", "cod", "pickup"]),
  // Safety acknowledgements
  ageConfirmed: z.boolean().optional(), // Required for AGRO items
  safetyAcknowledged: z.boolean().optional(), // Required for AGRO items
});

// ---------- Contact ----------

export const contactSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  email: z.string().email().max(255),
  phone: z.string().max(20).optional(),
  subject: z.string().min(2).max(200).trim(),
  message: z.string().min(10).max(2000).trim(),
  turnstileToken: z.string().min(1).optional(),
});

// ---------- Review ----------

export const reviewSchema = z.object({
  productId: z.string().uuid(),
  rating: z.number().int().min(1).max(5),
  title: z.string().min(2).max(100).trim(),
  body: z.string().min(10).max(1000).trim(),
});

// ---------- Newsletter ----------

export const newsletterSchema = z.object({
  email: z.string().email().max(255).toLowerCase(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consent is required" }),
  }),
});

// Type exports
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ProductFilters = z.infer<typeof productFilterSchema>;
export type CheckoutInput = z.infer<typeof checkoutSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type ReviewInput = z.infer<typeof reviewSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;

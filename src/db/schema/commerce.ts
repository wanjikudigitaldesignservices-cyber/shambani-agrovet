import { pgTable, uuid, text, timestamp, boolean, integer, jsonb } from "drizzle-orm/pg-core";
import { users } from "./auth";
import { productVariants, products } from "./catalog";

export const deliveryZones = pgTable("delivery_zones", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(), // e.g., "Nairobi Central", "Kiambu"
  feeKes: integer("fee_kes").notNull(),
  eta: text("eta").notNull(), // e.g., "Same day", "2-3 days"
  codOk: boolean("cod_ok").default(false).notNull(),
  coldChainOk: boolean("cold_chain_ok").default(false).notNull(),
  pickupPoints: jsonb("pickup_points").$type<{ name: string; address: string }[]>(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const coupons = pgTable("coupons", {
  id: uuid("id").primaryKey().defaultRandom(),
  code: text("code").unique().notNull(),
  discountType: text("discount_type").notNull(), // 'percent', 'fixed'
  discountValue: integer("discount_value").notNull(),
  minOrderValue: integer("min_order_value"),
  maxUses: integer("max_uses"),
  usesCount: integer("uses_count").default(0).notNull(),
  expiresAt: timestamp("expires_at", { withTimezone: true, mode: "string" }),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const carts = pgTable("carts", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }), // nullable for guest carts
  sessionId: text("session_id"), // for guest carts
  couponId: uuid("coupon_id").references(() => coupons.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const cartItems = pgTable("cart_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  cartId: uuid("cart_id").references(() => carts.id, { onDelete: "cascade" }).notNull(),
  variantId: uuid("variant_id").references(() => productVariants.id, { onDelete: "cascade" }).notNull(),
  quantity: integer("quantity").default(1).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const orders = pgTable("orders", {
  id: uuid("id").primaryKey().defaultRandom(),
  number: text("number").unique().notNull(), // e.g. SHB-260930-4821
  userId: uuid("user_id").references(() => users.id, { onDelete: "restrict" }), // nullable for guest checkouts
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  deliveryZoneId: uuid("delivery_zone_id").references(() => deliveryZones.id, { onDelete: "restrict" }).notNull(),
  shippingAddress: jsonb("shipping_address").notNull(), // snapshot of address
  subtotalKes: integer("subtotal_kes").notNull(),
  shippingFeeKes: integer("shipping_fee_kes").notNull(),
  discountKes: integer("discount_kes").default(0).notNull(),
  totalKes: integer("total_kes").notNull(),
  status: text("status").default("pending_payment").notNull(), // pending_payment, paid, awaiting_vet_approval, packed, out_for_delivery, delivered, cancelled, refunded, payment_failed
  paymentMethod: text("payment_method").notNull(), // mpesa, card, cod
  notes: text("notes"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const orderItems = pgTable("order_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  orderId: uuid("order_id").references(() => orders.id, { onDelete: "cascade" }).notNull(),
  variantId: uuid("variant_id").references(() => productVariants.id, { onDelete: "restrict" }).notNull(),
  priceKes: integer("price_kes").notNull(), // snapshot
  quantity: integer("quantity").notNull(),
  subtotalKes: integer("subtotal_kes").notNull(),
});

export const orderEvents = pgTable("order_events", {
  id: uuid("id").primaryKey().defaultRandom(),
  orderId: uuid("order_id").references(() => orders.id, { onDelete: "cascade" }).notNull(),
  status: text("status").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const payments = pgTable("payments", {
  id: uuid("id").primaryKey().defaultRandom(),
  orderId: uuid("order_id").references(() => orders.id, { onDelete: "restrict" }).notNull(),
  provider: text("provider").notNull(), // "intasend"
  providerRef: text("provider_ref").unique().notNull(),
  amountKes: integer("amount_kes").notNull(),
  status: text("status").notNull(), // pending, completed, failed
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const webhookEvents = pgTable("webhook_events", {
  id: uuid("id").primaryKey().defaultRandom(),
  provider: text("provider").notNull(),
  eventId: text("event_id").unique().notNull(),
  payload: jsonb("payload").notNull(),
  processed: boolean("processed").default(false).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const couponRedemptions = pgTable("coupon_redemptions", {
  id: uuid("id").primaryKey().defaultRandom(),
  couponId: uuid("coupon_id").references(() => coupons.id, { onDelete: "restrict" }).notNull(),
  orderId: uuid("order_id").references(() => orders.id, { onDelete: "restrict" }).notNull(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "restrict" }),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const vetApprovals = pgTable("vet_approvals", {
  id: uuid("id").primaryKey().defaultRandom(),
  orderId: uuid("order_id").references(() => orders.id, { onDelete: "cascade" }).notNull(),
  productId: uuid("product_id").references(() => products.id, { onDelete: "restrict" }).notNull(),
  vetId: uuid("vet_id").references(() => users.id, { onDelete: "set null" }), // which vet handled it
  status: text("status").default("pending").notNull(), // pending, approved, rejected
  reason: text("reason"),
  prescriptionUrl: text("prescription_url"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const prescriptions = pgTable("prescriptions", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  fileUrl: text("file_url").notNull(),
  status: text("status").default("pending").notNull(), // pending, approved, rejected
  vetId: uuid("vet_id").references(() => users.id, { onDelete: "set null" }),
  notes: text("notes"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const wishlistItems = pgTable("wishlist_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  productId: uuid("product_id").references(() => products.id, { onDelete: "cascade" }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

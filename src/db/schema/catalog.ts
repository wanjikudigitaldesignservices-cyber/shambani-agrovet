import { pgTable, uuid, text, timestamp, boolean, integer, pgEnum, jsonb } from "drizzle-orm/pg-core";

export const saleClassEnum = pgEnum("sale_class", ["OTC", "VET_APPROVAL", "AGRO_RESTRICTED", "SERVICE_ONLY"]);

export const categories = pgTable("categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").unique().notNull(),
  name: text("name").notNull(),
  description: text("description"),
  parentId: uuid("parent_id"), // self-reference for subcategories (Drizzle handles this via relations later or explicit foreign key below)
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const brands = pgTable("brands", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").unique().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const products = pgTable("products", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").unique().notNull(),
  categoryId: uuid("category_id").references(() => categories.id, { onDelete: "restrict" }).notNull(),
  brandId: uuid("brand_id").references(() => brands.id, { onDelete: "restrict" }),
  name: text("name").notNull(),
  nameSw: text("name_sw"),
  shortDesc: text("short_desc").notNull(),
  shortDescSw: text("short_desc_sw"),
  descriptionMd: text("description_md").notNull(),
  keyFacts: jsonb("key_facts").notNull(), // { activeIngredient, formulation, pack, targetSpecies, class }
  directions: text("directions"),
  safety: text("safety"),
  storage: text("storage"),
  faqs: jsonb("faqs").$type<{ q: string; a: string }[]>(),
  species: jsonb("species").$type<string[]>(),
  crops: jsonb("crops").$type<string[]>(),
  seoTitle: text("seo_title"),
  seoDescription: text("seo_description"),
  saleClass: saleClassEnum("sale_class").default("OTC").notNull(),
  coldChain: boolean("cold_chain").default(false).notNull(),
  minShelfLifeDays: integer("min_shelf_life_days").default(60).notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const productVariants = pgTable("product_variants", {
  id: uuid("id").primaryKey().defaultRandom(),
  productId: uuid("product_id").references(() => products.id, { onDelete: "cascade" }).notNull(),
  sku: text("sku").unique().notNull(),
  packSize: text("pack_size").notNull(),
  priceKes: integer("price_kes").notNull(), // Integer KES
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const productImages = pgTable("product_images", {
  id: uuid("id").primaryKey().defaultRandom(),
  productId: uuid("product_id").references(() => products.id, { onDelete: "cascade" }).notNull(),
  url: text("url").unique().notNull(),
  alt: text("alt").notNull(),
  sha256: text("sha256").unique().notNull(),
  isPrimary: boolean("is_primary").default(false).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const inventoryBatches = pgTable("inventory_batches", {
  id: uuid("id").primaryKey().defaultRandom(),
  variantId: uuid("variant_id").references(() => productVariants.id, { onDelete: "restrict" }).notNull(),
  batchNumber: text("batch_number").notNull(),
  expiryDate: timestamp("expiry_date", { withTimezone: true, mode: "string" }),
  qtyOnHand: integer("qty_on_hand").default(0).notNull(),
  qtyReserved: integer("qty_reserved").default(0).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const stockMovements = pgTable("stock_movements", {
  id: uuid("id").primaryKey().defaultRandom(),
  batchId: uuid("batch_id").references(() => inventoryBatches.id, { onDelete: "restrict" }).notNull(),
  type: text("type").notNull(), // 'receipt', 'sale', 'adjustment', 'expired'
  qtyChange: integer("qty_change").notNull(),
  reason: text("reason"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const bundles = pgTable("bundles", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").unique().notNull(),
  name: text("name").notNull(),
  description: text("description"),
  discountPercent: integer("discount_percent").default(0).notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const bundleItems = pgTable("bundle_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  bundleId: uuid("bundle_id").references(() => bundles.id, { onDelete: "cascade" }).notNull(),
  variantId: uuid("variant_id").references(() => productVariants.id, { onDelete: "restrict" }).notNull(),
  quantity: integer("quantity").default(1).notNull(),
});

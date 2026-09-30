import { pgTable, uuid, text, timestamp, boolean, integer, jsonb } from "drizzle-orm/pg-core";
import { users } from "./auth";

export const appointments = pgTable("appointments", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  service: text("service").notNull(), // "farm_visit", "clinic_consult", etc
  animalType: text("animal_type").notNull(),
  animalCount: integer("animal_count"),
  location: text("location").notNull(),
  preferredDate: timestamp("preferred_date", { withTimezone: true, mode: "string" }).notNull(),
  notes: text("notes"),
  status: text("status").default("pending").notNull(), // pending, confirmed, completed, cancelled
  vetId: uuid("vet_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const questions = pgTable("questions", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }), // nullable if guest
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  species: text("species").notNull(),
  age: text("age"),
  symptoms: jsonb("symptoms").$type<string[]>(),
  duration: text("duration"),
  photos: jsonb("photos").$type<string[]>(), // urls
  status: text("status").default("open").notNull(), // open, answered, closed
  vetId: uuid("vet_id").references(() => users.id, { onDelete: "set null" }),
  answer: text("answer"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const bulkQuotes = pgTable("bulk_quotes", {
  id: uuid("id").primaryKey().defaultRandom(),
  organization: text("organization").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  items: jsonb("items").$type<{ sku: string; quantity: number }[]>(),
  deliveryLocation: text("delivery_location").notNull(),
  frequency: text("frequency"),
  status: text("status").default("new").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const resellerApplications = pgTable("reseller_applications", {
  id: uuid("id").primaryKey().defaultRandom(),
  businessName: text("business_name").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  location: text("location").notNull(),
  yearsInBusiness: integer("years_in_business"),
  status: text("status").default("pending").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  status: text("status").default("unread").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  email: text("email").primaryKey(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const staffProfiles = pgTable("staff_profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  bio: text("bio"),
  qualifications: text("qualifications"),
  photoUrl: text("photo_url"),
  isActive: boolean("is_active").default(true).notNull(),
});

export const regulators = pgTable("regulators", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  logoUrl: text("logo_url").notNull(),
  link: text("link"),
  isActive: boolean("is_active").default(true).notNull(),
});

export const assets = pgTable("assets", {
  id: uuid("id").primaryKey().defaultRandom(),
  path: text("path").unique().notNull(),
  kind: text("kind").notNull(),
  alt: text("alt"),
  sha256: text("sha256"),
  status: text("status").default("active").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const siteSettings = pgTable("site_settings", {
  key: text("key").primaryKey(),
  value: jsonb("value").notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

export const auditLogs = pgTable("audit_logs", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "set null" }), // actor
  action: text("action").notNull(),
  entityType: text("entity_type").notNull(),
  entityId: text("entity_id").notNull(),
  beforeState: jsonb("before_state"),
  afterState: jsonb("after_state"),
  ipAddress: text("ip_address"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
});

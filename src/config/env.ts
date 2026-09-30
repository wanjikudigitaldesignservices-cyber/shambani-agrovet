// src/config/env.ts — Environment variable validation (fail-fast)
import { z } from "zod";

const envSchema = z.object({
  // Database
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
  DATABASE_URL_UNPOOLED: z.string().optional(),

  // Auth
  JWT_ACCESS_SECRET: z.string().min(16, "JWT_ACCESS_SECRET must be ≥ 16 chars"),
  JWT_REFRESH_SECRET: z
    .string()
    .min(16, "JWT_REFRESH_SECRET must be ≥ 16 chars"),
  COOKIE_SECRET: z.string().min(16, "COOKIE_SECRET must be ≥ 16 chars"),

  // Payments
  INTASEND_PUBLISHABLE_KEY: z.string().optional(),
  INTASEND_SECRET_KEY: z.string().optional(),
  INTASEND_WEBHOOK_SECRET: z.string().optional(),
  INTASEND_ENV: z.enum(["sandbox", "live"]).default("sandbox"),

  // Email
  RESEND_API_KEY: z.string().optional(),

  // Rate limiting
  UPSTASH_REDIS_REST_URL: z.string().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().optional(),

  // Bot protection
  TURNSTILE_SITE_KEY: z.string().optional(),
  TURNSTILE_SECRET_KEY: z.string().optional(),

  // Storage
  STORAGE_PROVIDER: z.enum(["r2", "vercel-blob"]).optional(),
  STORAGE_BUCKET: z.string().optional(),
  STORAGE_ACCESS_KEY: z.string().optional(),
  STORAGE_SECRET_KEY: z.string().optional(),
  STORAGE_ENDPOINT: z.string().optional(),

  // Observability
  SENTRY_DSN: z.string().optional(),

  // Site
  PUBLIC_SITE_URL: z
    .string()
    .url()
    .default("http://localhost:5173"),
});

export type Env = z.infer<typeof envSchema>;

let _env: Env | null = null;

/**
 * Parse and validate environment variables.
 * Throws on missing required vars — fail fast.
 */
export function getEnv(): Env {
  if (_env) return _env;

  const result = envSchema.safeParse(process.env);
  if (!result.success) {
    const formatted = result.error.issues
      .map((i) => `  • ${i.path.join(".")}: ${i.message}`)
      .join("\n");
    throw new Error(
      `❌ Environment validation failed:\n${formatted}\n\nCheck .env.example for required variables.`
    );
  }

  _env = result.data;
  return _env;
}

// src/lib/db.ts — Neon serverless database client
import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

// Configure Neon for serverless environments
neonConfig.fetchConnectionCache = true;

/**
 * Create a Drizzle database instance.
 * Uses the HTTP driver for single queries (serverless-friendly).
 * For multi-statement transactions, use the WebSocket Pool driver (added in P2).
 */
export function createDb(connectionString: string) {
  const sql = neon(connectionString);
  return drizzle(sql);
}

// Re-export types
export type Database = ReturnType<typeof createDb>;

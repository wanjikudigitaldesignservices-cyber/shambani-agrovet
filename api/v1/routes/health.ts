// api/v1/routes/health.ts — Health check endpoint
import { Hono } from "hono";

export const health = new Hono();

health.get("/", (c) => {
  return c.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    version: "0.1.0",
  });
});

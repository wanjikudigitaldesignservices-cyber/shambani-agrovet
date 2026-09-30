// api/index.ts — Hono API entry point for Vercel Functions
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { secureHeaders } from "hono/secure-headers";
import { health } from "./v1/routes/health";

const app = new Hono().basePath("/api/v1");

// --- Global middleware ---
app.use("*", logger());
app.use("*", cors());
app.use("*", secureHeaders());

// --- Central error handler ---
app.onError((err, c) => {
  // Operational errors: return safe message
  if (err instanceof AppError) {
    return c.json(
      { error: { message: err.message, code: err.code } },
      err.status as 400
    );
  }

  // Programmer errors: log fully, return generic
  console.error("Unhandled error:", {
    message: err.message,
    // Never leak stack traces or raw DB errors to client
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });

  return c.json(
    { error: { message: "Something went wrong", code: "INTERNAL_ERROR" } },
    500
  );
});

// --- 404 handler ---
app.notFound((c) => {
  return c.json(
    { error: { message: "Not found", code: "NOT_FOUND" } },
    404
  );
});

import { auth } from "./v1/routes/auth";
import { catalog } from "./v1/routes/catalog";

// --- Routes ---
app.route("/health", health);
app.route("/auth", auth);
app.route("/catalog", catalog);

// Future route groups (wired in P2/3/4):
// app.route("/cart", cart);
// app.route("/checkout", checkout);
// app.route("/orders", orders);
// app.route("/payments", payments);
// app.route("/webhooks", webhooks);
// app.route("/me", me);
// app.route("/blog", blog);
// app.route("/admin", admin);

import { handle } from "hono/vercel";

export default handle(app);

// --- Error classes ---
export class AppError extends Error {
  constructor(
    message: string,
    public status: number = 400,
    public code: string = "BAD_REQUEST"
  ) {
    super(message);
    this.name = "AppError";
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found`, 404, "NOT_FOUND");
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Authentication required") {
    super(message, 401, "UNAUTHORIZED");
  }
}

export class ForbiddenError extends AppError {
  constructor(message = "Access denied") {
    super(message, 403, "FORBIDDEN");
  }
}

export class ConflictError extends AppError {
  constructor(message: string) {
    super(message, 409, "CONFLICT");
  }
}

export class RateLimitError extends AppError {
  constructor() {
    super("Too many requests. Please try again later.", 429, "RATE_LIMITED");
  }
}

export class ValidationError extends AppError {
  constructor(
    message: string,
    public details?: Record<string, string[]>
  ) {
    super(message, 422, "VALIDATION_ERROR");
  }
}

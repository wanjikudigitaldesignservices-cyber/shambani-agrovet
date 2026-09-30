import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { rateLimit } from "../middleware/rate-limit";
import { authenticate } from "../middleware/auth";

export const auth = new Hono();

// Schemas for validation at the route boundary
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10),
});

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phone: z.string().optional(),
});

// --- Routes ---

auth.post(
  "/register",
  rateLimit({ limit: 5, window: "1 h" }, "register"), // 5 per hour
  zValidator("json", registerSchema),
  async (c) => {
    const _data = c.req.valid("json");
    // TODO: Create user, hash password, send verification email
    return c.json({ message: "Registration successful. Please verify your email." }, 201);
  }
);

auth.post(
  "/login",
  rateLimit({ limit: 5, window: "15 m" }, "login"), // 5 per 15 min
  zValidator("json", loginSchema),
  async (c) => {
    const _data = c.req.valid("json");
    // TODO: Verify password, issue JWT and Refresh Token cookie
    return c.json({ token: "mock-customer-token", role: "customer" });
  }
);

auth.post(
  "/refresh",
  async (c) => {
    // TODO: Read refresh token from secure cookie, rotate it, issue new JWT
    return c.json({ token: "new-mock-token" });
  }
);

auth.post(
  "/logout",
  authenticate,
  async (c) => {
    // TODO: Revoke refresh token family, clear cookie
    return c.json({ message: "Logged out successfully" });
  }
);

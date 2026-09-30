import { Context, Next } from "hono";
import { UnauthorizedError, ForbiddenError } from "../../index";
import { type Role } from "../../../src/db/schema"; // type derived from schema (will need to define it)

// Define role enum explicitly here for middleware if it's not exported cleanly
export type Role = "customer" | "staff" | "vet" | "admin" | "super_admin";

/**
 * Middleware: Verify identity (Access token)
 */
export async function authenticate(c: Context, next: Next) {
  // 1. Get access token from Authorization header (Bearer token)
  const authHeader = c.req.header("Authorization");
  const token = authHeader?.startsWith("Bearer ") ? authHeader.substring(7) : null;

  if (!token) {
    throw new UnauthorizedError("Missing or invalid authorization token");
  }

  try {
    // Note: In P2 implementation, we will verify the JWT here using jsonwebtoken or similar
    // For the skeleton, we mock successful verification if token is "mock-token"
    
    // const payload = await verifyJwt(token, process.env.JWT_ACCESS_SECRET);
    // c.set("user", payload);
    
    // Skeleton placeholder:
    if (token === "mock-admin-token") {
      c.set("user", { id: "123", role: "admin", email: "admin@shambani.local" });
    } else if (token === "mock-customer-token") {
      c.set("user", { id: "456", role: "customer", email: "user@shambani.local" });
    } else {
      throw new Error("Invalid token");
    }
  } catch (_error) {
    throw new UnauthorizedError("Invalid or expired token");
  }

  await next();
}

/**
 * Middleware: Verify permission (RBAC)
 * Requires authenticate middleware to run first.
 */
export function authorize(...allowedRoles: Role[]) {
  return async (c: Context, next: Next) => {
    const user = c.get("user");
    
    if (!user || !user.role) {
      throw new UnauthorizedError("Authentication required before authorization");
    }

    if (!allowedRoles.includes(user.role as Role)) {
      // Additional check: Does the user have a strictly higher role? (Optional)
      // Usually it's better to explicitly list allowed roles for clarity, 
      // but super_admin can do anything.
      if (user.role !== "super_admin") {
         throw new ForbiddenError(`Access denied. Requires one of: ${allowedRoles.join(", ")}`);
      }
    }

    await next();
  };
}

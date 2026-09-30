import { Hono } from "hono";
import { rateLimit } from "../middleware/rate-limit";
import { authenticate, authorize } from "../middleware/auth";
// import { db } from "../../../src/db"; // DB import for actual implementation

export const catalog = new Hono();

// Public routes (Read-only)

catalog.get(
  "/products",
  rateLimit({ limit: 100, window: "1 m" }, "catalog_read"),
  async (c) => {
    // const category = c.req.query("category");
    // TODO: Query DB for active products
    return c.json({ data: [] });
  }
);

catalog.get(
  "/products/:slug",
  rateLimit({ limit: 100, window: "1 m" }, "catalog_read"),
  async (c) => {
    const slug = c.req.param("slug");
    // TODO: Query DB for single product with variants and images
    return c.json({ data: { slug } });
  }
);

catalog.get(
  "/categories",
  rateLimit({ limit: 100, window: "1 m" }, "catalog_read"),
  async (c) => {
    // TODO: Get active categories
    return c.json({ data: [] });
  }
);

// Protected Admin Routes (Write)

catalog.post(
  "/products",
  authenticate,
  authorize("admin", "super_admin", "staff"),
  async (c) => {
    // TODO: Validate body and insert product
    return c.json({ message: "Product created" }, 201);
  }
);

catalog.put(
  "/products/:id",
  authenticate,
  authorize("admin", "super_admin", "staff"),
  async (c) => {
    const id = c.req.param("id");
    // TODO: Update product
    return c.json({ message: "Product updated", id });
  }
);

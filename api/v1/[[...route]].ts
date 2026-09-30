// api/v1/[[...route]].ts — Vercel Functions catch-all handler
// This file is the entry point for all API requests on Vercel.
// It delegates to the Hono app defined in ../index.ts.

import { handle } from "hono/vercel";
import app from "../index";

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
export const OPTIONS = handle(app);

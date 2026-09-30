// src/routes/NotFound.tsx — 404 page
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { brand } from "../config/brand.config";

export function Component() {
  return (
    <>
      <Helmet>
        <title>Page not found — {brand.name}</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="container-page flex min-h-[60dvh] flex-col items-center justify-center text-center py-16">
        <h1 className="font-heading text-6xl font-bold text-forest mb-4">
          404
        </h1>
        <p className="text-xl text-ink/80 mb-2">
          Page not found
        </p>
        <p className="text-gray-500 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest/90"
          >
            Go home
          </Link>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-md border border-forest px-6 py-3 text-sm font-semibold text-forest transition hover:bg-forest/5"
          >
            Browse shop
          </Link>
        </div>
      </div>
    </>
  );
}

Component.displayName = "NotFound";

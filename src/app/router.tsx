// src/app/router.tsx — React Router configuration with lazy-loaded routes
import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { RootLayout } from "./RootLayout";


// Lazy-loaded route components (code-split per route)
// We use the route-level lazy function instead of React.lazy()

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        lazy: () => import("../routes/Home"),
      },
      // ---- Shop ----
      { path: "shop", lazy: () => import("../routes/shop/Shop") },
      { path: "shop/:category", lazy: () => import("../routes/shop/Shop") },
      { path: "shop/:category/:subcategory", lazy: () => import("../routes/shop/Shop") },
      { path: "product/:slug", lazy: () => import("../routes/shop/Product") },
      // { path: "search", lazy: () => import("../routes/shop/Search") },
      // { path: "deals", lazy: () => import("../routes/shop/Deals") },
      // { path: "kits", lazy: () => import("../routes/shop/Kits") },
      { path: "cart", lazy: () => import("../routes/shop/Cart") },
      { path: "wishlist", lazy: () => import("../routes/shop/Cart") },

      // ---- Checkout ----
      { path: "checkout", lazy: () => import("../routes/checkout/Checkout") },
      { path: "checkout/pay/:orderId", lazy: () => import("../routes/checkout/Pay") },
      { path: "order/confirmed/:number", lazy: () => import("../routes/checkout/Confirmed") },
      { path: "track-order", lazy: () => import("../routes/checkout/TrackOrder") },

      // ---- Services ----
      { path: "vet-services", lazy: () => import("../routes/services/VetServices") },
      { path: "vet-services/book", lazy: () => import("../routes/services/BookVet") },
      { path: "vet-services/ask-a-vet", lazy: () => import("../routes/services/AskAVet") },
      { path: "vet-services/vaccination-schedules", lazy: () => import("../routes/services/VaccinationSchedules") },
      { path: "vet-services/animal-health-guidance", lazy: () => import("../routes/services/AnimalHealthGuidance") },
      { path: "vet-services/vaccination-control", lazy: () => import("../routes/services/VaccinationControl") },
      { path: "vet-services/parasite-management", lazy: () => import("../routes/services/ParasiteManagement") },
      { path: "vet-services/breeding-support", lazy: () => import("../routes/services/BreedingSupport") },
      { path: "agronomy", lazy: () => import("../routes/services/Agronomy") },
      { path: "agronomy/soil-testing", lazy: () => import("../routes/services/SoilTesting") },
      { path: "agronomy/crop-calendar", lazy: () => import("../routes/services/CropCalendar") },

      // ---- Tools ----
      { path: "tools", lazy: () => import("../routes/tools/Tools") },
      { path: "tools/fertilizer-calculator", lazy: () => import("../routes/tools/FertilizerCalculator") },
      { path: "tools/dosage-calculator", lazy: () => import("../routes/tools/DosageCalculator") },
      { path: "tools/feed-budget-calculator", lazy: () => import("../routes/tools/FeedBudgetCalculator") },

      // ---- Knowledge ----
      { path: "blog", lazy: () => import("../routes/knowledge/Blog") },
      { path: "blog/:slug", lazy: () => import("../routes/knowledge/BlogPost") },
      { path: "blog/category/:slug", lazy: () => import("../routes/knowledge/BlogCategory") },
      { path: "blog/tag/:slug", lazy: () => import("../routes/knowledge/BlogTag") },
      { path: "disease-library", lazy: () => import("../routes/knowledge/DiseaseLibrary") },
      { path: "disease-library/:slug", lazy: () => import("../routes/knowledge/DiseaseEntry") },
      { path: "safety", lazy: () => import("../routes/knowledge/Safety") },

      // ---- Business ----
      { path: "bulk-orders", lazy: () => import("../routes/business/BulkOrders") },
      { path: "become-a-reseller", lazy: () => import("../routes/business/Reseller") },
      { path: "delivery", lazy: () => import("../routes/business/Delivery") },
      { path: "branches", lazy: () => import("../routes/business/Branches") },
      { path: "about", lazy: () => import("../routes/business/About") },
      { path: "compliance", lazy: () => import("../routes/business/Compliance") },
      { path: "contact", lazy: () => import("../routes/business/Contact") },
      { path: "faqs", lazy: () => import("../routes/knowledge/FAQs") },
      { path: "reviews", lazy: () => import("../routes/business/Reviews") },

      // ---- Legal ----
      { path: "privacy", lazy: () => import("../routes/legal/Privacy") },
      { path: "terms", lazy: () => import("../routes/legal/Terms") },
      { path: "returns", lazy: () => import("../routes/legal/Returns") },
      { path: "cookies", lazy: () => import("../routes/legal/Cookies") },
      { path: "disclaimer", lazy: () => import("../routes/legal/Disclaimer") },
      { path: "sitemap", lazy: () => import("../routes/legal/Sitemap") },

      // ---- Auth ----
      { path: "login", lazy: () => import("../routes/auth/Login") },
      { path: "register", lazy: () => import("../routes/auth/Register") },
      { path: "forgot-password", lazy: () => import("../routes/auth/ForgotPassword") },
      { path: "reset-password", lazy: () => import("../routes/auth/ResetPassword") },
      { path: "verify-email", lazy: () => import("../routes/auth/VerifyEmail") },

      // ---- Account ----
      { path: "account", lazy: () => import("../routes/account/Dashboard") },
      { path: "account/orders", lazy: () => import("../routes/account/Orders") },
      { path: "account/orders/:number", lazy: () => import("../routes/account/Orders") }, // Added order details mapping
      { path: "account/reminders", lazy: () => import("../routes/account/Dashboard") },
      { path: "account/prescriptions", lazy: () => import("../routes/account/Dashboard") },
      { path: "account/farm-profile", lazy: () => import("../routes/account/Dashboard") },
      { path: "account/wishlist", lazy: () => import("../routes/account/Dashboard") },

      // ---- Admin ----
      { 
        path: "admin", 
        lazy: () => import("../routes/admin/AdminLayout"),
        children: [
          { index: true, lazy: () => import("../routes/admin/AdminDashboard") },
          { path: "products", lazy: () => import("../routes/admin/AdminProducts") },
          { path: "orders", lazy: () => import("../routes/admin/AdminOrders") }
        ]
      },

      // ---- System ----
      {
        path: "*",
        lazy: () => import("../routes/NotFound"),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

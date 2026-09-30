# Shambani Agrovet

> Everything your farm needs. Advice you can trust.

A production agrovet e-commerce and advisory platform built with React, Hono, and Neon Postgres.

## Tech Stack

- **Frontend:** React 19 + TypeScript + Vite + React Router
- **Styling:** Tailwind CSS v4
- **API:** Hono (Vercel Functions)
- **Database:** Neon Postgres + Drizzle ORM
- **Payments:** IntaSend (M-Pesa STK Push)
- **Email:** Resend
- **Auth:** Custom JWT + refresh token rotation
- **i18n:** English + Swahili

## Getting Started

```bash
# Install dependencies
npm install --legacy-peer-deps

# Copy environment template
cp .env.example .env

# Fill in .env with your values (see docs/LAUNCH_CHECKLIST.md)

# Start development server
npm run dev

# Run all checks
npm run verify
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | TypeScript check + production build |
| `npm run verify` | Lint + typecheck + build |
| `npm run verify:assets` | Check image manifest integrity |
| `npm run verify:links` | Check for dead links in build |
| `npm run db:generate` | Generate Drizzle migrations |
| `npm run db:migrate` | Run migrations |
| `npm run db:seed` | Seed database (idempotent) |

## Project Structure

```
src/
├── app/           # App shell, providers, router
├── routes/        # Route components (lazy loaded)
├── components/    # Shared UI components
├── features/      # Feature modules with co-located API hooks
├── lib/           # Utilities, API client, DB
├── hooks/         # Custom React hooks
├── config/        # brand.config.ts, constants, env validation
├── i18n/          # EN/SW translations
├── styles/        # Global CSS, design tokens
├── shared/        # Zod schemas shared with API
└── db/            # Drizzle schema and migrations
api/
├── v1/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   └── repositories/
└── index.ts       # Hono app entry
```

## Documentation

- [Architecture](docs/ARCHITECTURE.md) _(P2)_
- [Launch Checklist](docs/LAUNCH_CHECKLIST.md)
- [Content Review](docs/CONTENT_REVIEW.md)
- [Runbook](docs/RUNBOOK.md) _(P8)_
- [Incident Response](docs/INCIDENT_RESPONSE.md) _(P8)_
- [Admin Guide](docs/ADMIN_GUIDE.md) _(P7)_

## Deployment

Deployed on Vercel with GitHub integration. See [LAUNCH_CHECKLIST.md](docs/LAUNCH_CHECKLIST.md) for production setup.

## License

Private. All rights reserved.

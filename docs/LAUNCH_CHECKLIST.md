# Shambani Agrovet — Launch Checklist

> Fill in every empty field before going live. Each item maps to `brand.config.ts` or an environment variable.

## Brand Config (brand.config.ts)

| Field | Status | Value |
|-------|--------|-------|
| `name` | ✅ Set | Shambani Agrovet |
| `short` | ✅ Set | Shambani |
| `tagline` | ✅ Set | Everything your farm needs. Advice you can trust. |
| `domain` | ⬜ Empty | _Your domain name_ |
| `phone` | ⬜ Empty | _Business phone number_ |
| `whatsapp` | ⬜ Empty | _WhatsApp number (with country code)_ |
| `email` | ⬜ Empty | _Business email_ |
| `address` | ⬜ Empty | _Physical address_ |
| `geo.lat` | ⬜ Empty | _Latitude_ |
| `geo.lng` | ⬜ Empty | _Longitude_ |
| `hours` | ⬜ Empty | _Business hours array_ |
| `branches` | ⬜ Empty | _Branch locations_ |
| `licences.kvbPremisesReg` | ⬜ Empty | _KVB premises registration number_ |
| `licences.pcpbDealerReg` | ⬜ Empty | _PCPB dealer registration number_ |
| `licences.businessPermit` | ⬜ Empty | _County business permit number_ |
| `licences.kraPin` | ⬜ Empty | _KRA PIN for invoices_ |
| `licences.odpcReg` | ⬜ Empty | _ODPC registration number_ |
| `social.facebook` | ⬜ Empty | _Facebook page URL_ |
| `social.instagram` | ⬜ Empty | _Instagram profile URL_ |
| `social.tiktok` | ⬜ Empty | _TikTok profile URL_ |
| `social.youtube` | ⬜ Empty | _YouTube channel URL_ |
| `social.x` | ⬜ Empty | _X (Twitter) profile URL_ |
| `builtBy.url` | ⬜ Empty | _Builder website URL_ |

## Environment Variables

| Variable | Status | Notes |
|----------|--------|-------|
| `DATABASE_URL` | ⬜ | Neon pooled connection string |
| `DATABASE_URL_UNPOOLED` | ⬜ | Neon direct connection (migrations) |
| `JWT_ACCESS_SECRET` | ⬜ | Generate: `openssl rand -base64 32` |
| `JWT_REFRESH_SECRET` | ⬜ | Generate: `openssl rand -base64 32` |
| `COOKIE_SECRET` | ⬜ | Generate: `openssl rand -base64 32` |
| `INTASEND_PUBLISHABLE_KEY` | ⬜ | IntaSend dashboard |
| `INTASEND_SECRET_KEY` | ⬜ | IntaSend dashboard |
| `INTASEND_WEBHOOK_SECRET` | ⬜ | IntaSend webhook settings |
| `INTASEND_ENV` | ⬜ | `sandbox` → `live` |
| `RESEND_API_KEY` | ⬜ | Resend dashboard |
| `UPSTASH_REDIS_REST_URL` | ⬜ | Upstash console |
| `UPSTASH_REDIS_REST_TOKEN` | ⬜ | Upstash console |
| `TURNSTILE_SITE_KEY` | ⬜ | Cloudflare dashboard |
| `TURNSTILE_SECRET_KEY` | ⬜ | Cloudflare dashboard |
| `STORAGE_*` | ⬜ | R2 or Vercel Blob credentials |
| `SENTRY_DSN` | ⬜ | Sentry project settings |
| `PUBLIC_SITE_URL` | ⬜ | Production domain URL |

## Pre-Launch Tasks

- [ ] Confirm all 100 product prices with client
- [ ] All VET/AGRO products reviewed by licensed professional (see `CONTENT_REVIEW.md`)
- [ ] Legal pages reviewed by lawyer
- [ ] Blog posts reviewed by licensed vet/agronomist
- [ ] Disease library reviewed by licensed vet
- [ ] IntaSend switched from sandbox to live
- [ ] DNS configured for production domain
- [ ] SSL certificate active
- [ ] Neon production branch protected
- [ ] Vercel environment variables set for production
- [ ] Test M-Pesa payment with real small amount
- [ ] Verify webhook delivery in production
- [ ] Confirm email delivery (Resend)
- [ ] Upload real team photos (if showing team section)
- [ ] Fill in all branch locations
- [ ] Set delivery zones and fees
- [ ] Cookie banner configured for analytics
- [ ] ODPC registration referenced
- [ ] Google Search Console verified
- [ ] Uptime monitoring configured

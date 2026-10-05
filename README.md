# JAPAN FINDS WHOLESALE Website

Production-oriented Next.js base for the JAPAN FINDS ToC catalog website.

## Current implemented scope

- Mobile-first white / light-blue / black design
- Actual JAPAN FINDS logo and warehouse hero image
- Home page with 4 public groups:
  - Baby Items (Area B)
  - Furniture Items (Areas C + D)
  - Wholesale Small Items (Area E)
  - Wholesale Display Items (Area A)
- 5 products per group on Home
- Available Items page with Products Data-style category filters
- Product detail pages
- Service-charge-inclusive prices
- Order List with multiple products, notes, and total
- Messenger order text generation
- About Us / How to Order / Location placeholder pages
- 3-day website publishing rule implemented as a catalog filter

## Product data architecture

`lib/catalog.ts` currently contains mock products. This is intentionally isolated so it can be replaced with a Products Data adapter without rebuilding the UI.

Rule:
- Product enters Products Data
- 72 hours after `createdAt`, it becomes web-visible
- When a sold product disappears from Products Data / is marked sold by the future adapter, it disappears from the website

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Then open http://localhost:3000

## Environment variables

Set real URLs in `.env.local`:

```env
NEXT_PUBLIC_MESSENGER_URL=https://m.me/YOUR_PAGE_USERNAME
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/YOUR_PAGE
```

## Messenger note

Standard Messenger links do not reliably support pre-filling arbitrary order text. The website therefore copies the generated order text to the clipboard and opens Messenger. The customer pastes the message, then staff confirms availability and sends payment information.

## Next implementation phase

1. Connect live Products Data
2. Map actual product image URLs
3. Confirm exact Products Data column names
4. Detect sold/removed items
5. Deploy (Vercel is the simplest fit for this codebase)
6. Add domain
7. Fill About Us / How to Order / Location content

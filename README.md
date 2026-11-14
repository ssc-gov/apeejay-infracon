# Apeejay Infracon website

React + TypeScript + Vite + Tailwind CSS v4 + Motion + React Hook Form + Zod. Enquiries are sent by a Vercel serverless function (`api/enquiry.ts`) through Resend.

## Run locally
```bash
npm install
npm run build        # type-check + production build
npm run dev          # UI only; /api/enquiry needs `vercel dev`
npx vercel dev       # UI + serverless endpoint (needs .env, see below)
npm run audit:deps   # dependency vulnerability audit
```

## Environment variables
Copy `.env.example` to `.env` locally; in Vercel set them under Project Settings > Environment Variables.

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key (server-side only) |
| `ENQUIRY_TO_EMAIL` | Inbox that receives enquiries |
| `ENQUIRY_FROM_EMAIL` | Sender on a Resend-verified domain |
| `SITE_URL` | Optional; restricts the endpoint to your origin |

## Deploy
Push to Git and import into Vercel (framework preset: Vite). `vercel.json` sets security headers and CSP. Do not deploy until you are ready.

## Notes
- `original-assets/` holds untouched copies of every uploaded file; `public/images/` holds WebP versions.
- The supplied hero video was a 118-byte placeholder, so the hero uses a photograph. Add a real MP4 later if wanted.
- Before launch, confirm the sitemap/canonical domain, add a Search Console property, and run Lighthouse against the preview URL.
- If you change fonts or add third-party embeds, update the CSP in `vercel.json`.

# Paul Cody and The Erie Riders — Website

Multi-page React site for country/folk/southern-rock artist Paul Cody and The Erie Riders (Northeast Ohio). Built with Vite, React 19, TypeScript, Tailwind v4, wouter, and Framer Motion. Deployed on Netlify with push-to-main auto-deploy.

Rebuilt from the original Duda site — same content and structure, on our tech stack, with all media brought local and optimized.

## Routes

Home, /band, /live, /music, /gallery, /video, /merch, /contact, plus /privacy, /terms, /accessibility.

## Local development

```bash
npm install        # if sharp's prebuilt binary is skipped: npm install --include=optional --os=darwin --cpu=<arch> sharp
npm run dev        # dev server (port 5188)
npm run check      # type check
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Media

Raw originals live in `assets-raw/` (gitignored). The optimize step compresses them into `public/`:

```bash
npm run optimize-media   # photos → public/images (WebP via sharp), videos → public/videos (720p H.264 via ffmpeg)
```

Requires `ffmpeg` on PATH for video compression.

## Forms

The contact/booking form uses **Netlify Forms** (form name `contact`). A hidden detection form in `index.html` lets Netlify's build bot discover it; the React form on `/contact` POSTs to `/`. Set the notification email on the Netlify site.

## Deploy

Auto-deploys on push to `main` (GitHub → Netlify). Manual:

```bash
netlify deploy --build --prod
```

## Notes

- Contact email: paulcodymusic@gmail.com
- Album: *New Beginning* (Bandcamp, Amazon, iTunes; signed CD via email).
- Social: facebook.com/paulcodymusic, instagram.com/paulcodymusic, youtube.com/@paulcodymusic, tiktok.com/@paulcodymusic1.
- Two past 2026 show dates from the old site were dropped; see `src/data/shows.ts`.

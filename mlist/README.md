# Merchants List — Landing Page

Single-file HTML landing page for **Merchants List**, a verified database of 2,238 U.S. dropshipping and Amazon FBA suppliers.

No build step, no dependencies — one `landing_page.html` file with inline CSS and vanilla JS.

## Run locally

Just open `landing_page.html` in a browser. Or serve it:

```bash
python3 -m http.server 8000
```

## Deploy

Works as static hosting on any of these — no config needed:

- **Vercel** — `vercel deploy` or connect the repo in the dashboard
- **Netlify** — drag-and-drop the file, or connect the repo
- **GitHub Pages** — Settings → Pages → deploy from branch, rename `landing_page.html` to `index.html` first

## Before going live

Replace these placeholders:

- [ ] All `href="#"` buy buttons (7 total) → real Gumroad checkout URLs
- [ ] `hello@merchantslist.example` in the footer → real contact email
- [ ] Confirm the verification date ("July 2026") still matches the current data file if you update `merchants_enriched.csv` later

## Stack

Plain HTML/CSS/JS. Fonts: Big Shoulders Display, IBM Plex Mono, IBM Plex Sans (Google Fonts).

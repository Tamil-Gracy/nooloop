# Nooloop — Give Clothes a Second Life

A responsive Nooloop textile-waste collection, sorting and resale website built with React, Vite and Tailwind CSS.

## Included
- Responsive landing page and mobile navigation
- Nooloop logo from the supplied image
- Brand-colour styling: navy, pink, orange, purple and leaf green
- Textile material cards with category filters
- Collection-to-resale process section
- Business partner section for garment manufacturers, recyclers and manufacturers
- Contact enquiry form UI with client-side validation and demo confirmation
- Responsive footer and SEO metadata

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Before publishing
1. Replace the sample email `hello@nooloop.in` with your real business email.
2. Connect the contact form in `src/App.jsx` to your backend/API or an email service. The current form only validates and displays a demo success message; it does not send or store enquiries.
3. Replace the sample social links in `src/components/Footer.jsx` with your official profiles.
4. The textile photos are remote Unsplash image URLs, so an internet connection is required to load them. Replace them with licensed business photos when available.
5. Confirm your actual collection area, accepted textile categories, quality grades, buyer terms and business claims before launch.

## Main files
- `src/App.jsx` — page sections, filters and contact form
- `src/components/Navbar.jsx` — navigation
- `src/components/Footer.jsx` — footer
- `src/data/content.js` — material cards and process steps
- `src/index.css` — Tailwind and global styles
- `public/nooloop-logo.png` — supplied Nooloop logo

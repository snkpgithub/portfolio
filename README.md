# Shashank Pandey — Portfolio
Click Here:
https://shashank-pandey-portfolio.vercel.app/(https://shashank-pandey-portfolio.vercel.app)

AI/Data software mindset style portfolio: dark theme, grid background, terminal accents, and scroll animations.

## Optional assets

- **Resume:** Add **`public/resume.pdf`** so the “Download resume” links in Hero and Contact work.
- **Share preview:** Add **`public/og.png`** (1200×630 px) for link previews when sharing the site (Open Graph / Twitter). If omitted, shares still show title and description.
- **Profile photo:** Add **`public/profile.jpg`** (or update `src/components/Hero.tsx` to use another path, e.g. `profile.png`). The Hero section shows it as a circular image with an accent ring.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy (free)

### Vercel (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New** → **Project** → Import your repo.
3. Leave build settings as default (Next.js). Click **Deploy**.
4. Your site will be live at `your-project.vercel.app`. You can add a custom domain in Project Settings.
   

### Netlify

1. Push to GitHub.
2. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git** → choose repo.
3. Build command: `npm run build`. Publish directory: `.next` (or use the Netlify Next.js runtime; they detect it).
4. Deploy.

### GitHub Pages (static export)

To use GitHub Pages, you’d need to switch to static export (`output: 'export'` in `next.config.mjs`) and build; then publish the `out` folder. Vercel is simpler for Next.js.

---

**Tech:** Next.js 14, Tailwind CSS, TypeScript.

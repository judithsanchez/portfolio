# Judith Sánchez portfolio

My professional website, built with Vue 3 and Vite. It introduces my software engineering work at Booking.com and Toptal, the teaching story that got me into coding, and two earlier personal projects.

## Develop locally

```bash
npm ci
npm run dev -- --host 127.0.0.1
```

## Build and preview

```bash
npm run build
npm run preview -- --host 127.0.0.1
```

The repository has no configured test or lint script. A production build checks bundling; keyboard, layout and content checks remain separate.

## Content and assets

- `src/components/ProfilePortfolio.vue`: profile text, work history, project details and contact links.
- `src/assets/revamp.css`: responsive styles, focus states and reduced-motion support.
- `public/judith-sanchez-cv.pdf`: downloadable CV.
- `public/social-preview.png`: sharing image.
- `index.html`: page title, description, canonical URL and social metadata.

Earlier components and project data remain in source as history, but are no longer mounted by the application. The previous in-memory admin interface is not part of the public page.

Bocaditos and Scoutly are past, unmaintained projects. Their links point to source, not promised working demos. Personal apps hosted on my Raspberry Pi are not exposed here.

## Deployment

The GitHub Pages workflow deploys pushes to `master` to https://www.judithsanchez.com/.

Before release, verify the built site, its CV and social image, the source links, and desktop/mobile keyboard navigation. After release, verify the live URL and file links. Reverting a release also requires a deliberate commit and deployment.

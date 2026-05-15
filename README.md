# Nazir Hussain Portfolio

Professional personal portfolio for Nazir Hussain, built to present software engineering experience, selected projects, services, and contact options in a polished single-page experience.

## Overview

This project is a React and Vite portfolio application with:

- Section-based single-page navigation
- Lazy-loaded content sections for improved initial loading
- A deferred lightweight canvas hero background
- Contact form delivery through EmailJS
- Resume preview and download support
- Dark mode support
- Vercel-ready SPA routing, sitemap, robots file, and social metadata

## Tech Stack

- React 19
- Vite 8
- React Router
- Framer Motion
- Lucide React
- Tailwind CSS with PostCSS build output
- EmailJS
- ESLint
- Prettier

## Project Structure

```text
.
|-- App.jsx
|-- components/
|-- constants.js
|-- index.html
|-- index.css
|-- index.jsx
|-- public/
|   |-- Nazir-Resume.pdf
|   |-- og-image.svg
|   |-- robots.txt
|   `-- sitemap.xml
|-- tailwind.config.js
|-- postcss.config.js
|-- eslint.config.js
|-- vercel.json
`-- .env.example
```

## Prerequisites

- Node.js `^20.19.0 || >=22.12.0`
- npm

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a local `.env` file by copying `.env.example`

3. Add your EmailJS credentials to `.env`:

```env
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_SITE_URL=https://your-vercel-domain.vercel.app
```

4. Start the development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` starts the local development server
- `npm run build` creates the production build in `dist/`
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint checks
- `npm run format` formats the project with Prettier
- `npm run format:check` verifies formatting without writing files

## Deployment

This repository is prepared for Vercel deployment.

- `vercel.json` rewrites client-side routes to `index.html`
- This keeps direct visits to routes such as `/services` working correctly
- Add the same EmailJS environment variables in the Vercel project settings before deploying
- Set `VITE_SITE_URL` to the real Vercel domain and update `public/robots.txt`, `public/sitemap.xml`, and social meta URLs if the domain is different from the default
- Keep `public/Nazir-Resume.pdf` available so the resume preview/download CTA works in production

## Performance Notes

- Below-the-fold sections are loaded on demand
- The hero canvas is deferred until the browser has idle time and is disabled for reduced-motion users
- EmailJS is loaded only when the contact form is submitted
- Tailwind CSS is compiled at build time instead of loaded from the CDN

## Maintenance Notes

- Update project content in `constants.js`
- Replace `public/Nazir-Resume.pdf` when the resume changes
- Keep SEO metadata, `robots.txt`, and `sitemap.xml` aligned with the deployed domain
- Keep environment secrets out of version control by using `.env`

## Repository Standards

- Run `npm run lint`, `npm run format:check`, and `npm run build` before deployment
- The dependency tree was cleaned and the npm audit is currently clear
- Local-only directories such as `.venv/`, `dist/`, and `.vercel/` are ignored

## License

This project is private and maintained as a personal portfolio.

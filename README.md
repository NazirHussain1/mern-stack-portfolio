# Nazir Hussain Portfolio

Professional personal portfolio for Nazir Hussain, built to present software engineering experience, selected projects, services, and contact options in a polished single-page experience.

## Overview

This project is a React and Vite portfolio application with:

- Section-based single-page navigation
- Lazy-loaded content sections for improved initial loading
- A deferred 3D hero background using React Three Fiber
- Contact form delivery through EmailJS
- Resume preview and download support
- Dark mode support
- Vercel-ready SPA routing

## Tech Stack

- React 19
- Vite 8
- React Router
- Framer Motion
- Three.js
- React Three Fiber
- React Three Drei
- Lucide React
- Tailwind CSS via CDN configuration in `index.html`
- EmailJS

## Project Structure

```text
.
|-- App.jsx
|-- components/
|-- constants.js
|-- public/
|   `-- Nazir-Resume.pdf
|-- index.html
|-- index.css
|-- index.jsx
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
```

4. Start the development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` starts the local development server
- `npm run build` creates the production build in `dist/`
- `npm run preview` serves the production build locally

## Deployment

This repository is prepared for Vercel deployment.

- `vercel.json` rewrites client-side routes to `index.html`
- This keeps direct visits to routes such as `/services` working correctly
- Add the same EmailJS environment variables in the Vercel project settings before deploying

## Performance Notes

- Below-the-fold sections are loaded on demand
- The 3D hero scene is deferred until the browser has idle time
- EmailJS is loaded only when the contact form is submitted

## Maintenance Notes

- Update project content in `constants.js`
- Replace `public/Nazir-Resume.pdf` when the resume changes
- Keep environment secrets out of version control by using `.env`

## Repository Standards

- Unused source files and outdated integration experiments were removed
- The dependency tree was cleaned and the npm audit is currently clear
- Local-only directories such as `.venv/`, `dist/`, and `.vercel/` are ignored

## License

This project is private and maintained as a personal portfolio.

# EMTSCHOOL (ProMedix EMS)

A Vite + React + TypeScript single-page app with Tailwind CSS.

Quick start
- cd client
- npm install
- npm run dev

Build
- cd client
- npm run build

Preview (serves the built app locally)
- cd client
- npm run preview

Vercel deployment
- Connect this repo in Vercel
- Root Directory: client
- Build Command: npm run build
- Output Directory: dist
- Or keep repo root and use the provided vercel.json (builds client and serves SPA routes)

Notes
- This repo no longer uses Replit-specific configs. Removed: .replit, keep-alive-server.js, replit.md.
- Deployment: any static host (Netlify, Vercel, GitHub Pages). Serve `client/dist`.
- Node >= 18 recommended.

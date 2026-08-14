# Roscoe Website

Marketing website for Roscoe. This is a standalone Vite/React app kept inside the main local Roscoe workspace, but it has its own GitHub repo and Vercel project.

## Local Development

```bash
git clone https://github.com/jamesh487-ui/roscoe-website.git
cd roscoe-website
npm install
npm run dev
```

Vite will show a local URL, usually `http://localhost:5173`.

## Build Check

```bash
cd roscoe-website
npm run build
```

The production output is generated in `dist/`. Do not commit `dist/`.

## Environment Variables

Create a local `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Set these same variables in Vercel under Project Settings -> Environment Variables.

## GitHub

This website is already configured as a separate Git repo:

```bash
cd roscoe-website
git status
git add .
git commit -m "Update Roscoe website"
git push origin main
```

Do not commit `.env`, `node_modules`, `dist`, or `.vercel`.

## Vercel

Use these settings when importing the GitHub repo into Vercel:

- Framework Preset: `Vite`
- Root Directory: leave blank if the Vercel project uses the website repo directly
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

If Vercel asks for environment variables, add the values from your local `.env`.

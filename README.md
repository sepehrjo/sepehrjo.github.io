# Sepehr Jokanian - Portfolio

This is the personal portfolio website for Sepehr Jokanian.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Carousel:** [Embla Carousel](https://www.embla-carousel.com/)
- **Language:** TypeScript

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: Main application pages and layout.
- `src/components`: Reusable UI components (Hero, About, Projects, etc.).
- `src/lib/data.ts`: Centralized data file for easy content updates.
- `public`: Static assets (images, CV).

## Customization

To update the content (text, projects, experience), edit `src/lib/data.ts`. This file contains all the dynamic data used across the website.

## Deployment

This project is optimized for deployment on Vercel or GitHub Pages.

### Build for Production

```bash
npm run build
```

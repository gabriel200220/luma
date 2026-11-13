# Luma — Front-End Engineering Challenge (Buzzvel)

Responsive landing page built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, replicating the provided Figma design across desktop, tablet, and mobile viewports.

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Assets:** Next.js Image optimization & semantic HTML5

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Technical Decisions & Highlights
- **Component Architecture:** Modularized into reusable UI primitives (`Button`, `Container`, `SectionHeading`) and dedicated page sections (`Hero`, `Categories`, `FeaturedCourse`, `HowItWorks`, `Testimonial`, `People`, `CtaBanner`, `Contact`).
- **Centralized Mock Data:** All copy, navigation links, stats, and local image paths are typed and stored in `src/data/content.ts`.
- **Accessibility & Motion:** Semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), keyboard-accessible controls, descriptive `alt` attributes, and support for `prefers-reduced-motion`.
- **Approximate Time Spent:** ~5 hours.

## AI Tools Usage
- **Tools Used:** Claude (via Claude Code / Chat) was used to scaffold the initial component structure and Tailwind CSS layout from the Figma design specifications.
- **Verification & Manual Adjustments:** All generated components, TypeScript types, image placements, asset mapping, responsive breakpoints, and production build checks were manually reviewed, adjusted, and tested locally.

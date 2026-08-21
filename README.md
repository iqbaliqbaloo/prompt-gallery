# Prompt Gallery

Prompt Gallery is a colorful, frontend-only library of production-ready AI video prompts. It organizes **150 video prompt categories**, seven exact source prompt files, searchable prompt cards, category detail pages, and local creator tools in a premium Candy Editorial Studio interface.

> **Positioning:** Find the scene before the words.

## Features

- 150 statically generated, shareable category pages.
- Ready-made prompts for stories, animation, lessons, training, vlogs, documentaries, advertisements, and more.
- Seven original Markdown source files preserved byte-for-byte and available from the complete shelf.
- Search and category filtering across the prompt library.
- Copy-to-clipboard actions for prompts, category prompts, and complete source files.
- Frontend-only favorites and creator notes stored in the visitor’s browser.
- Branded not-found experience and resilient image fallbacks.
- Responsive editorial layout with keyboard-friendly dialogs and reduced-motion support.
- Per-page metadata, canonical URLs, Open Graph data, WebSite structured data, Article structured data, generated sitemap, and robots routes.

## Technology

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 App Router |
| Language | TypeScript |
| UI | React 19, Tailwind CSS 4, shadcn/ui primitives |
| Routing | Next.js App Router with statically generated category routes |
| Icons | Lucide React |
| Notifications | Sonner |
| Persistence | Browser `localStorage` only |
| Deployment | Static Next.js export through the managed web host |

## Local development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

The development server runs on port `3000` by default.

Run the typecheck:

```bash
pnpm run check
```

Create a production static export:

```bash
NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 pnpm run build
```

The export is written to `dist/`. The production preview can be started with:

```bash
pnpm start
```

## Project structure

```text
app/
  layout.tsx                 Global metadata, fonts, analytics, and WebSite schema
  page.tsx                   Interactive Prompt Gallery homepage
  not-found.tsx              Static branded 404 page
  category/[slug]/page.tsx   Static category pages with per-page metadata and Article schema
  robots.ts                  Generated robots route
  sitemap.ts                 Generated sitemap route
client/src/
  pages/Home.tsx             Interactive homepage implementation
  content/categoryCards.ts  150 category records and prompt-generation logic
  content/categoryAssetUrls.ts
                            Unique category artwork manifest
  content/promptManifest.ts Seven source-file metadata records
  content/prompts/           Exact Markdown source files
  index.css                  Candy Editorial Studio design tokens and global styles
public/
  prompts/                   Public copies of the seven exact Markdown files
  manifest.json              Browser manifest
  robots.txt                 Static fallback crawl file
  sitemap.xml                Static fallback sitemap
next.config.mjs              Static export configuration
postcss.config.mjs           Tailwind CSS 4 PostCSS configuration
```

## Content model

Category slugs are generated from titles using lowercase, hyphen-separated text. For example:

```text
3D Cartoon Stories → /category/3d-cartoon-stories
Baby Bedtime Stories → /category/baby-bedtime-stories
```

The seven complete prompt files are loaded from `public/prompts/` when a visitor opens a source-file card. The original copies remain in `client/src/content/prompts/` for source comparison and maintenance. Do not edit these files unless the change is intentionally required, because their exact wording is part of the product promise.

## SEO implementation

The application includes technical SEO foundations under the `app/` directory:

- `app/layout.tsx` provides the default title, description, canonical URL, Open Graph metadata, robots directives, and WebSite JSON-LD.
- `app/category/[slug]/page.tsx` creates unique static metadata and Article JSON-LD for every category.
- `app/sitemap.ts` emits the homepage and all 150 category URLs.
- `app/robots.ts` points crawlers to the generated sitemap.
- Category pages are statically generated through `generateStaticParams()`.
- Images include descriptive alternative text and fallback handling in the interactive homepage.

SEO cannot guarantee a top ranking. After connecting the production domain, submit the sitemap in Google Search Console, verify ownership, monitor indexing, and improve content authority through original supporting articles and legitimate editorial links.

## Frontend-only behavior

Prompt Gallery does not use a database or server API. Favorites and creator notes are saved in `localStorage` on the current device and browser. Clearing browser storage removes those local preferences. Clipboard actions require browser permission and fall back to manual selection guidance if the Clipboard API is unavailable.

## Design direction

The interface follows the **Candy Editorial Studio** system: warm paper backgrounds, coral actions, candy accent blocks, tactile card shadows, Fraunces display typography, DM Sans interface typography, and Space Mono metadata. New components should preserve the asymmetric editorial composition and avoid generic gradients, excessive centered layouts, or interchangeable card styling.

## Deployment and custom domain

The project is configured for static Next.js export with `output: "export"`, `trailingSlash: true`, and an output directory named `dist` for the managed host. The canonical domain is configured as `https://promptgallery.sbs` in the SEO routes. The domain must be connected to the deployed project and its DNS/HTTPS configuration must be active before crawlers can see those canonical signals.

## GitHub

The repository is:

```text
https://github.com/iqbaliqbaloo/prompt-gallery
```

The primary branch is `main`. Before pushing changes, run `pnpm run check` and `pnpm run build`. Keep generated build output, local environment files, and credentials out of commits.

## License and content note

The codebase is maintained for the Prompt Gallery project. Prompt source files and visual assets should be reviewed for ownership and redistribution rights before publishing them outside the project.

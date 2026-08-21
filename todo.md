# Exact Prompt Library Implementation Checklist

## Remove Manus Branding

- [x] Scan source, prompts, documentation, metadata, and configuration for Manus references.
- [x] Remove or replace every removable Manus word while preserving required asset paths and hosting configuration.
- [x] Validate that no removable Manus text remains and run typecheck/build checks.
- [ ] Push the cleaned project to GitHub.

## Domain SEO Completion Pass

- [x] Audit https://promptgallery.sbs availability, redirects, HTTPS, canonical domain, robots, and sitemap.
- [x] Align all Next.js metadata, canonical URLs, Open Graph URLs, sitemap, robots, and structured data to promptgallery.sbs.
- [x] Add or improve indexable source-file routes and internal links where useful.
- [x] Validate 150 category routes, metadata, structured data, crawl files, and production build.
- [ ] Save and publish the SEO completion checkpoint.

## Next.js Migration

- [x] Audit the current Vite configuration and identify the Next.js replacement surface.
- [x] Add Next.js package scripts and configuration while preserving frontend-only hosting.
- [x] Create the Next.js App Router structure and migrate the existing homepage and 404 page.
- [x] Migrate prompt content, generated assets, styles, icons, and client-only interactions.
- [x] Add static category routes, metadata, sitemap, robots, and accessible navigation.
- [x] Run Next.js typecheck, production build, route checks, and responsive screenshots.
- [ ] Save a new Next.js checkpoint after regression validation.

## Fresh QA Pass

- [x] Audit project structure, routes, content, images, metadata, and runtime logs.
- [x] Test search, filters, card clicks, prompt modals, copy, favorites, comments, and navigation.
- [x] Test desktop, tablet, mobile, keyboard focus, empty states, image failures, and overflow.
- [x] Fix discovered bugs, accessibility gaps, broken assets, content deficiencies, and UX issues.
- [x] Run TypeScript, production build, and regression checks.
- [x] Capture final screenshots; checkpoint remains next.

## SEO Optimization Pass

- [x] Audit current titles, descriptions, headings, routes, images, and indexability.
- [x] Define keyword, page, schema, and internal-link strategy.
- [x] Implement semantic metadata, structured data, accessible image text, and clean crawl files.
- [x] Add performance safeguards and frontend-only SEO documentation.
- [x] Validate build, routes, metadata, sitemap, robots, and responsive behavior.
- [x] Capture final screenshots; checkpoint remains next.

## Continue Dedicated Category Artwork

- [x] Audit categories 006–150 for empty or broken image mappings.
- [x] Prepare one-to-one generated asset slots and prompts for categories 006–150.
- [x] Preserve the five completed generated images and card mappings.
- [ ] Verify no empty image mappings and confirm card click behavior.
- [ ] Run build checks and save the next checkpoint after artwork generation continues.

## One Generated Image Per Category Card

- [ ] Inventory all 150 category titles and asset slots.
- [ ] Generate one dedicated prompt-matched image per category.
- [ ] Wire each generated asset to the exact category card and detail view.
- [ ] Verify 150 visible images, 150 unique assignments, and working click actions.
- [ ] Run build checks, capture screenshots, and save a new checkpoint.

## Generated AI-Animation Card Artwork

- [x] Define the colorful AI-animation visual direction from the reference image.
- [x] Generate representative prompt-matched animation artwork.
- [x] Replace plain or unrelated card visuals with animation artwork.
- [x] Preserve unique images, card clickability, and prompt-detail matching.
- [x] Verify the main shelf and category atlas visually on desktop and mobile.
- [x] Run build checks; checkpoint remains next.

## Fresh End-to-End Audit and Refresh

- [x] Audit routes, content wiring, image assets, runtime console, and network behavior.
- [x] Test search, filters, copy, favorites, comments, modals, navigation, and mobile layout.
- [x] Document bugs, missing features, content gaps, accessibility issues, and performance risks.
- [x] Refresh the frontend architecture and visual presentation in one coherent pass.
- [x] Re-test key flows, responsive behavior, accessibility, and production build.
- [x] Capture final screenshots; checkpoint remains next.

## Fix Blank Card Images

- [x] Trace the actual rendered card image paths and onError behavior.
- [x] Replace broken bindings with verified generated asset URLs.
- [x] Ensure image containers have visible dimensions and no overlay hides artwork.
- [x] Verify main and subcategory cards display images and remain clickable.
- [x] Run build checks and capture screenshots; checkpoint remains next.

## Generated Prompt-Specific Artwork

- [x] Define the generated visual system and map every category to its own artwork prompt.
- [x] Generate category-specific artwork without fetching external images.
- [x] Save generated assets through the project web-asset workflow.
- [x] Wire generated artwork into main and all 150 subcategory cards.
- [x] Verify coverage, uniqueness, rendering, and clickability.
- [x] Run build checks and capture screenshots; checkpoint remains next.

## Title-Matched Visual Assets

- [x] Audit title-to-image mismatches in the current card gallery.
- [x] Define a deterministic visual subject for every category title.
- [x] Create or assign clearly title-matched images for all main and subcategory cards.
- [x] Wire matched assets into card and modal views without breaking click behavior.
- [x] Verify title-image alignment and run final build checks.

## Restore Visible Real Card Images

- [x] Audit the uploaded image paths and identify why card images are blank.
- [x] Prepare reliable real prompt-matched image assets for main and subcategory cards.
- [x] Wire visible images into both card layers and preserve click actions.
- [x] Verify card image rendering and click behavior at desktop and mobile sizes.
- [x] Run build checks; checkpoint remains next.

## Visible Unique Category Imagery

- [x] Audit visible duplicates caused by the remote image endpoint.
- [x] Create physically distinct local visual assets for all 150 categories.
- [x] Replace remote image URLs in cards and detail views with local assets.
- [x] Verify visible image fingerprints contain no duplicates.
- [x] Run build checks and capture screenshots; checkpoint remains next.

## Unique Prompt-Matched Imagery

- [x] Audit current repeated image sources and seeds.
- [x] Assign 150 unique image sources with category-specific query terms.
- [x] Update main category and individual category cards to use only unique images.
- [x] Add image fallback seeds that remain unique by category ID.
- [x] Verify zero duplicate image URLs or seeds and review responsive rendering.
- [x] Run build checks and capture screenshots; checkpoint remains next.

## Fully Populated Category Cards

- [x] Audit all 150 category titles against the source category library.
- [x] Generate one distinct full prompt record for every category.
- [x] Assign one distinct category-matched image URL to every category.
- [x] Add prompt text, copy action, metadata, and comments to every category detail flow.
- [x] Verify exactly 150 cards, prompts, and image assignments with no empty fields.
- [x] Run build checks and capture screenshots; checkpoint remains next.

## 150-Category Visual Gallery

- [x] Define 150 category records with titles, descriptions, metadata, colors, and image treatments.
- [x] Add category-matched image sources for all 150 category cards.
- [x] Add searchable and filterable 150-card category browsing.
- [x] Add category card click behavior to open the corresponding prompt collection or category detail.
- [x] Verify exactly 150 category cards render and remain responsive.
- [x] Run build checks and capture screenshots; checkpoint remains next.

- [x] Inventory the seven source prompt files and record line counts and checksums.
- [x] Copy each source file byte-for-byte into the frontend content library.
- [x] Add a frontend file browser for all seven complete prompt files.
- [x] Add exact-content reading and one-click copy actions.
- [x] Add category and file metadata without modifying source text.
- [x] Verify copied files against source files using checksums and byte comparison.
- [x] Run TypeScript and production build checks.
- [x] Capture a final responsive screenshot; checkpoint update remains next.

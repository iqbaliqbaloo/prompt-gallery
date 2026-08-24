# Exact Prompt Library Implementation Checklist

## Fresh AI Artwork Assets

- [ ] Audit current artwork and confirm which cards need fresh AI images.
- [ ] Generate title-matched AI artwork within the available quota.
- [ ] Save and upload generated assets, then map them to matching cards.
- [ ] Validate asset URLs, card rendering, routes, and production build without pushing.

## Parent Category Organization

- [x] Define parent categories and audit all existing card labels.
- [x] Map every card to its relevant parent category without deleting prompts.
- [x] Add parent-category navigation and relevant-only filtered sections.
- [x] Validate category counts, search, routes, and production build without pushing.

## Search and Categories Navigation Fix

- [x] Audit search input filtering, category button handlers, anchors, and route links.
- [x] Fix confirmed search and category navigation failures without changing prompt content.
- [x] Validate search results, categories scrolling/navigation, category routes, and production build.

## SEO-Only Audit and Improvement

- [x] Audit metadata, canonical URLs, robots, sitemap, structured data, and internal links.
- [x] Compare the search-result presentation against the provided PromptGallery example.
- [x] Apply only confirmed SEO improvements without changing prompt or app features.
- [x] Validate SEO routes, production build, and live indexability signals.

## Fresh AI Artwork for Every Card

- [ ] Freeze a 165-title image-to-asset map with unique filenames.
- [ ] Generate one fresh AI image per card title in controlled batches.
- [ ] Upload every generated image and create a persistent asset manifest.
- [ ] Replace card mappings with the fresh uploaded assets only after the batch is complete.
- [ ] Validate all 165 assets, routes, preview rendering, and production build without pushing.

## Complete Title-Matched Artwork Coverage

- [x] Audit all 165 cards for image assignment, uniqueness, and HTTP resolution.
- [x] Create title-specific artwork only for cards that lack valid matching visuals.
- [x] Wire and validate complete card artwork coverage without replacing valid images.
- [x] Run the final build and preview checks without pushing to GitHub.

## Title-Matched AI Artwork for Missing Cards

- [x] Audit every card for missing or unresolved image assets.
- [x] Generate unique AI artwork only for cards that need it.
- [x] Wire the new assets without replacing valid existing artwork.
- [x] Validate image URLs, routes, preview rendering, and production build without pushing.

## Client-Side Exception Recovery

- [x] Inspect browser console, runtime logs, and the latest pushed changes.
- [x] Trace and fix the client-side exception without changing exact prompt content.
- [x] Rebuild, restart, verify homepage and key category routes, then save the repair.

## Fresh QA Audit — Today’s Features

- [ ] Audit changed source files, routes, runtime logs, and storage safety.
- [ ] Test Viral Baby workflow, note add/update/delete, notification count, and read clearing.
- [ ] Fix confirmed bugs, inconsistencies, and UX deficiencies without changing exact prompts.
- [ ] Run typecheck, production build, responsive screenshots, and final route checks.
- [ ] Keep QA fixes preview-only and do not push to GitHub.

## English-Only Note Interface

- [x] Replace all Urdu note labels, helper text, and placeholders with English.
- [x] Scan user-facing note UI for remaining Urdu text and validate the production build.

## Per-Card Notes and Notification Center

- [x] Audit existing card notes, LocalStorage, and header controls.
- [x] Support multiple notes per card with add, update, delete, and persistence.
- [x] Show the total unread note count on the notification icon, including counts above 99.
- [x] Add a notification panel to view notes and clear the unread badge when viewed.
- [x] Validate the frontend-only flow and production build without pushing to GitHub.

## Per-Card Feedback and Prompt Review

- [ ] Audit the existing per-card Notes from creators state and LocalStorage behavior.
- [ ] Add per-card fault question, saved feedback notes, edit, delete, and review/improve actions.
- [ ] Validate persistence, responsive modal behavior, and production build without pushing to GitHub.

## Viral Baby Story Conversion Flow Fix

- [x] Replace the fixed 10-second one-scene conversion with user-selected total duration and scene count.
- [x] Require a complete character, prop, environment, image-generation, and continuity output before scene prompts.
- [x] Generate connected scene-by-scene video prompts with exact original dialogue and scene handoffs.
- [x] Validate the revised workflow and production build without pushing to GitHub.

- [x] Inspect how the Viral Baby master prompt is presented and how story context is preserved.
- [x] Add a separate improved exact-story handoff so Story 1–15 can be converted without invented dialogue.
- [x] Validate the corrected flow, routes, and production build without pushing to GitHub.
- [x] Add an automatic Prompt 1 generation fallback when Stories 1–15 are absent before asking for a story number.
- [x] Validate the repeated-error correction and production build without pushing to GitHub.

## Exact Watermelon Sculpture Video Prompt Card

- [x] Add the provided Watermelon Sculpture Video Prompt as a separate exact-copy card.
- [x] Add unique artwork, detail route, search entry, and updated category count.
- [x] Verify exact text fidelity and preview build while preserving all existing cards.
- [x] Keep the new card unpushed until user approval.

## Exact Cute Baby Talking Videos Card

- [x] Add the attached Cute Baby Talking Videos Master Prompt as a separate card without changing its wording.
- [x] Add unique artwork, detail route, search entry, and updated category count.
- [x] Verify byte-for-byte fidelity and preview build while preserving all existing cards.
- [x] Keep the new card unpushed until user approval.

## Separate Adaptive Master Prompt Card

- [x] Add the adaptive duration-and-scene-count Master Prompt as a new separate card.
- [x] Add unique artwork, detail route, search entry, and updated category count.
- [x] Verify Viral Baby and Ulti Dunya prompts remain unchanged and validate the preview build.
- [x] Keep the new card unpushed until user approval.

## Adaptive Duration and Scene Count Master Prompt

- [ ] Replace fixed 10-second assumptions with user-selected duration and scene count.
- [ ] Define dynamic scene timing, scene handoffs, and continuity rules for short and long videos.
- [ ] Present the corrected adaptive Master Prompt in chat only without changing the project.

## Standalone Human Museum Video Prompt

- [ ] Remove image-upload/reference wording from the prompt.
- [ ] Define all characters, environment, continuity, camera, timing, dialogue, audio, and negative rules for video generation.
- [ ] Present the corrected one-scene video prompt in chat only without changing the project or GitHub.

## Ultra Human Museum Prompt Draft

- [ ] Resolve contradictions in the source prompt while preserving the story intent.
- [ ] Write the complete production-ready master prompt to a separate Markdown draft.
- [ ] Deliver the draft for review without adding a card or pushing to GitHub.

## Preview Loading Recovery

- [ ] Inspect the failing route, server status, and browser/runtime errors.
- [ ] Fix the blocking runtime or build issue without reverting approved preview changes.
- [ ] Rebuild, restart, and verify the homepage and affected category route.
- [ ] Keep the recovery unpushed until user approval.

## Exact Viral Baby Attachment Replacement

- [x] Replace the Viral Baby Videos card with the complete latest attachment.
- [ ] Compare the embedded card prompt against the attachment and run the preview build.
- [x] Keep the update unpushed until user approval; approval received for GitHub synchronization.

## Full Category Prompt Audit

- [x] Audit all 162 category prompts for production-ready requirements and category-specific coverage.
- [x] Identify missing consistency, scene, camera, sound, output, negative-prompt, and quality-control instructions.
- [x] Upgrade the shared category prompt architecture without changing category intent or exact master prompt content.
- [x] Validate all card prompts, counts, routes, assets, and production build in preview only.

## Master Prompt Audit and Missing Cards

- [x] Audit Viral Baby Videos and Ulti Dunya against their own stated requirements without unnecessary rewriting.
- [x] Record verified gaps and strengthen only those sections.
- [x] Identify requested image/design prompt types missing from the current cards.
- [x] Add missing prompt cards with production-ready modular instructions and unique artwork for preview.
- [x] Validate exact-preservation requirements, routes, counts, and production build without pushing.

## Exact Viral Baby Videos Prompt

- [ ] Replace the Viral Baby Videos card text with the complete latest attachment.
- [x] Compare the card prompt against the attachment and validate the preview build.
- [x] Keep the correction unpushed until user approval.

## Exact Reverse Animal World Prompt

- [x] Replace the Reverse Animal World card text with the complete latest attachment.
- [x] Compare the card prompt against the attachment and validate the preview build.
- [x] Keep the correction unpushed until user approval.

## Preview Card Ordering

- [ ] Move Viral Baby Videos and Ulti Dunya cards to the top of the category atlas.
- [ ] Preserve card content, artwork, routes, and existing category behavior.
- [ ] Validate preview ordering and production build without pushing to GitHub.

## Focused SEO Topic Expansion

- [x] Audit current homepage metadata and identify focused topic landing pages.
- [x] Update homepage title, description, and site-level structured data with natural AI video prompt keywords.
- [x] Add indexable topic landing pages for major prompt themes with metadata, internal links, and useful content.
- [x] Include topic routes in the sitemap and validate Next.js static export.
- [ ] Push the SEO topic expansion to GitHub.

## Remove Manus Branding

- [x] Scan source, prompts, documentation, metadata, and configuration for Manus references.
- [x] Remove or replace every removable Manus word while preserving required asset paths and hosting configuration.
- [x] Validate that no removable Manus text remains and run typecheck/build checks.
- [x] Push the cleaned project to GitHub.

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

# Exact Prompt Library Implementation Checklist

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

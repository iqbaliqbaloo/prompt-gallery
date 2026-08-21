# Prompt Gallery Design Brainstorm

## Approach 1: Candy Editorial Studio

**Theme Name:** Candy Editorial Studio  
**Very Brief Intro:** A playful but polished prompt gallery inspired by fashion magazines, sticker books, and creative studios. Soft candy color blocks, tactile cards, expressive imagery, and confident typography make discovery feel collectible and premium.  
**Probability:** 0.07

## Approach 2: Electric Creator Lab

**Theme Name:** Electric Creator Lab  
**Very Brief Intro:** A dark, high-contrast creator workspace with electric accent colors, cinematic imagery, and control-room energy. It makes the product feel powerful and technical without becoming a generic dashboard.  
**Probability:** 0.04

## Approach 3: Botanical Archive

**Theme Name:** Botanical Archive  
**Very Brief Intro:** A warm, refined library aesthetic combining paper textures, botanical colors, editorial serif typography, and quiet archival details. It makes the prompt collection feel thoughtful, curated, and timeless.  
**Probability:** 0.08

# Chosen Direction: Candy Editorial Studio

## Design Movement

Contemporary editorial maximalism with soft-play design and boutique creative-studio cues. The interface should feel like a stylish prompt magazine: tactile, bright, curated, and easy to scan.

## Core Principles

1. **Discovery should feel collectible.** Prompt cards are visual objects with clear category badges, expressive thumbnails, and small editorial metadata.
2. **Color should guide, not overwhelm.** A creamy paper base gives the interface room to breathe while coral, lilac, butter yellow, aqua, and cherry accents signal categories and actions.
3. **Editorial hierarchy beats generic dashboard density.** Large headlines, asymmetric hero composition, short explanations, and deliberate whitespace make the library approachable.
4. **Every interaction should feel like opening a creative tool.** Copy, save, filter, and comment states should be immediate, tactile, and friendly.

## Color Philosophy

The palette uses a warm cream canvas as the calm studio surface, then introduces ownable coral as the primary action color. Lilac and aqua support creative/video categories, butter yellow adds optimism, and cherry red marks high-energy or trending content. The colors are intentionally soft rather than neon: energetic enough to invite clicks, gentle enough to feel broadly welcoming.

## Layout Paradigm

A left-anchored editorial rail and offset card gallery rather than a centered SaaS dashboard. The hero uses an asymmetric split: a text-led left column and a collage of floating prompt visuals on the right. The library follows with a wide category ribbon, filter controls, and a staggered card grid. Detail views become an immersive reading canvas with a sticky copy panel.

## Signature Elements

- **Prompt passport cards:** rounded editorial cards with a color tab, format chip, matching image, and a small “copy prompt” action.
- **Studio tape labels:** tiny uppercase labels and handwritten-style metadata moments that suggest a curated creative archive.
- **Soft sticker motifs:** small stars, dots, sparkle marks, and underlines used sparingly to direct attention without clutter.

## Interaction Philosophy

Actions should feel direct and rewarding. Copy buttons confirm with a small label change and toast. Favorites use a heart toggle with a subtle scale response. Filters update instantly. Comment drafts are saved locally so the frontend-only experience feels dependable. Hover states lift cards slightly and reveal the prompt’s practical metadata.

## Animation

Use short, tactile transitions under 260ms. Cards lift 4px on hover and settle quickly. Hero collage pieces float subtly only when reduced motion is not enabled. Filter chips use color and border transitions. Modal/detail panels enter with opacity plus a small translate, never a large zoom. Stagger card entrances by 40ms. Respect `prefers-reduced-motion`.

## Typography System

Use **Fraunces** for editorial display headlines and **DM Sans** for interface text, metadata, buttons, and prompt content. Fraunces should appear in expressive large titles and selected category labels. DM Sans should carry all functional reading. Use tight, confident headings and generous line-height for prompt bodies.

## Brand Essence

**Prompt Gallery is a visual playground for creators who want better AI video ideas faster—curated, copy-ready, and easier to turn into finished scenes.**  
Personality: **playful, curated, generous**.

## Brand Voice

Headlines are punchy and specific. CTAs are active and friendly. Microcopy is concise, useful, and never corporate filler.

Example lines:

- “Find the scene before you find the words.”
- “Copy the spark. Build the whole story.”

## Wordmark & Logo

The mark is a rounded coral “P” formed from two offset speech-bubble loops, suggesting both prompts and a gallery pin. It should be used as a simple symbol in the header and favicon, paired with the wordmark “Prompt Gallery” in Fraunces rather than a default system font.

## Signature Brand Color

**Coral Pop — #FF6B6B.** It is warm, memorable, energetic, and ownable without becoming aggressive.

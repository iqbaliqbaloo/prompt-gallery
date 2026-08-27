# Prompt Gallery SEO
## A Beginner-to-Professional Step-by-Step Guide

**Website:** https://promptgallery.sbs  
**Purpose:** Help Prompt Gallery become easier for Google to crawl, understand, trust, and show to the right users.

> SEO improves a website's ability to appear in relevant searches. It does not guarantee a number-one ranking. Google evaluates many signals, including relevance, content quality, links, technical accessibility, competition, and user behavior.

---

## 1. What Is SEO?

**SEO means Search Engine Optimization.** In simple words, SEO helps Google:

1. Find your website.
2. Understand what every page is about.
3. Decide whether the page is useful and trustworthy.
4. Match the page with the right search query.
5. Show a useful title and description so the right person wants to click.

SEO is not one button, one keyword, or one plugin. It is a continuing process of improving the website, publishing useful content, earning trust, and measuring results.

Google's own guidance says there is no secret method that automatically puts a website first. Changes can take from hours to several months to appear in search, so results should be evaluated over time.

---

## 2. The Four Parts of Professional SEO

| Part | Easy meaning | Prompt Gallery example |
|---|---|---|
| **Technical SEO** | Google can access, load, crawl, and index the website. | HTTPS, mobile layout, fast pages, sitemap, robots, valid routes |
| **On-page SEO** | Each page clearly explains its own topic. | Title, H1, description, headings, prompt text, image alt text |
| **Content SEO** | The page gives a useful and original answer. | Prompt explanations, tutorials, examples, how-to guides |
| **Off-page SEO** | Other trustworthy places mention and link to the website. | YouTube tutorials, creator communities, legitimate editorial links |

Professional SEO uses all four parts. Adding keywords alone is not professional SEO.

---

## 3. The Main SEO Rule: One Page, One Clear Purpose

Do not try to make one page rank for every possible keyword. Give each important page one main search purpose.

| Page type | Main search purpose |
|---|---|
| Homepage | Free ready-made AI video prompts |
| Stories topic page | AI story video prompts |
| Cinematic topic page | Cinematic AI video prompts |
| YouTube topic page | YouTube video prompts |
| One category page | One specific prompt, such as Cinematic Drama |
| Tutorial article | How to solve one specific video-prompt problem |

This is called **search intent**: what the searcher really wants.

A visitor searching for `AI story video prompt` wants a different page from someone searching for `how to keep AI characters consistent across scenes`. One should be a prompt library page; the other should be a tutorial.

---

## 4. Step One: Find Keywords and Search Intent

Start with phrases your audience might actually type:

- AI video prompts
- ready-made AI video prompts
- AI story video prompt
- cinematic AI video prompt
- AI prompt for YouTube video
- AI advertisement prompt
- AI animation prompt
- multi-scene AI video prompt
- character consistency AI video prompt

Expand these ideas using Google autocomplete, related searches, Search Console queries, and keyword-research tools. Do not choose a keyword only because it has a large search number. Choose a topic where Prompt Gallery can provide a genuinely better answer.

### Make a keyword map

| Keyword or topic | Search intent | Target page | Status |
|---|---|---|---|
| AI story video prompt | Wants a ready prompt | Stories topic page | Published |
| cinematic AI video prompt | Wants cinematic instructions | Cinematic topic page | Published |
| character consistency AI video | Wants a continuity solution | Tutorial article | Planned |
| AI prompts for YouTube Shorts | Wants a short-form video workflow | YouTube topic page | Planned |

A professional SEO person maps one primary topic to one primary page. This prevents several pages on your own website from competing with each other.

---

## 5. Step Two: Optimize Every Important Page

Each important page should contain these signals:

| Page element | What it should do |
|---|---|
| **URL** | Be short, readable, lowercase, and descriptive, such as `/category/cinematic-drama`. |
| **Title tag** | Describe the exact page topic in a concise way. |
| **Meta description** | Summarize the benefit and encourage a qualified click. |
| **H1** | Clearly state the page's main visible topic. Use one primary H1. |
| **Opening paragraph** | Answer the searcher's need quickly. |
| **H2 headings** | Organize instructions, benefits, examples, and FAQs. |
| **Main content** | Explain the topic and provide the useful prompt or solution. |
| **Image alt text** | Describe the image accurately for accessibility and understanding. |
| **Internal links** | Connect this page to related topics and prompt categories. |

### Example: a Cinematic Drama page

**Weak title:**

`Prompt, AI Prompt, Video Prompt, Cinematic Prompt, Best Prompt`

This is repetitive keyword stuffing.

**Better title:**

`Cinematic Drama AI Video Prompt | Prompt Gallery`

**Better description:**

`Use this ready-made cinematic drama prompt to plan emotional scenes, camera movement, lighting, character direction, and connected AI video shots.`

**Better H1:**

`Cinematic Drama AI Video Prompt`

The title, URL, H1, opening text, and actual prompt should all describe the same subject.

Google recommends concise, descriptive, unique titles. It also warns against keyword stuffing and repeated boilerplate titles.

---

## 6. Step Three: Make Each Page Genuinely Useful

A page containing only a copied prompt may not answer every question a visitor has. Add original helpful sections around each important prompt:

1. What the prompt creates.
2. Who should use it.
3. Which AI video tools it may work with.
4. Which variables the user should replace.
5. How to choose the video duration and scene count.
6. How to maintain character consistency.
7. How to connect the end of one scene to the beginning of the next.
8. Common mistakes and solutions.
9. A final copy-ready prompt.

For Prompt Gallery, strong original guides could include:

- How to create a 60-second AI story video.
- How to maintain character consistency across scenes.
- Best cinematic camera instructions for AI video.
- AI prompts for YouTube Shorts.
- AI video prompts for education and training.
- How to turn one image into a multi-scene video.

Google emphasizes useful, readable, original, current, people-first content. Do not copy competitor articles or add filler paragraphs only to make a page longer.

---

## 7. Step Four: Build Internal Links

An internal link connects one page on your website to another page on your website.

For example:

> In our guide to **multi-scene AI video prompts**, see the related **Kids Adventure Stories**, **Cinematic Drama**, and **Character Continuity** prompts.

Use meaningful anchor text. Avoid links that only say “click here.” Internal links help visitors move through the library and help crawlers understand how pages relate to one another.

For each new article, link to:

- One parent topic page.
- Three to five relevant prompt categories.
- One related guide.
- The homepage or main library.

---

## 8. Where SEO Lives in the Next.js Project

| Project location | SEO job |
|---|---|
| `app/layout.tsx` | Global title, description, canonical domain, social metadata, WebSite JSON-LD, language, and indexing defaults |
| `app/page.tsx` | Server-rendered homepage content that crawlers can read |
| `app/category/[slug]/page.tsx` | Unique SEO page for every prompt category |
| `app/topics/[slug]/page.tsx` | Search-focused topic landing pages |
| `app/sitemap.ts` | Generates the XML sitemap of indexable URLs |
| `app/robots.ts` | Provides crawler rules and sitemap location |
| `public/robots.txt` | Static crawler-instruction fallback |
| `app/icon.svg` | Site icon |
| `public/manifest.json` | Web-app identity and icon metadata |
| `client/src/pages/Home.tsx` | Visible headings, card text, links, search, and image alt text |

Prompt Gallery already has the main technical foundation: static Next.js pages, category routes, metadata, canonical URLs, sitemap generation, robots directives, social metadata, structured data, and a server-rendered homepage.

---

## 9. Step Five: Understand Sitemap and Robots

A **sitemap** is a list of important URLs. It helps Google discover pages, especially when a site has many pages.

A **robots.txt** file tells crawlers which areas they may access. It is not a ranking booster. Do not accidentally block the homepage, category pages, CSS, JavaScript, or images.

Check these URLs:

- `https://promptgallery.sbs/robots.txt`
- `https://promptgallery.sbs/sitemap.xml`

They should load without errors and use the correct custom domain.

Google says a sitemap submission is only a hint. It does not guarantee that every URL will be crawled or indexed. The sitemap should contain absolute canonical URLs that you actually want in Google results.

---

## 10. Step Six: Use Structured Data Correctly

Structured data is machine-readable information, usually JSON-LD, that helps Google understand visible page content. Prompt Gallery uses WebSite and Article-style structured data.

Important rules:

- Describe only information that is visible and accurate on the page.
- Do not add fake ratings, fake reviews, fake authors, or fake testimonials.
- Do not create empty pages only to hold schema.
- Keep the schema consistent with the visible content.
- Test it with the Google Rich Results Test.

Structured data may make a page eligible for richer search appearances, but it does not guarantee a rich result.

---

## 11. Step Seven: Set Up Google Search Console

Search Console shows what Google knows about the website.

### Initial setup

1. Open [Google Search Console](https://search.google.com/search-console/about).
2. Add and verify `promptgallery.sbs`.
3. Open **Sitemaps**.
4. Submit `sitemap.xml`.
5. Open **URL Inspection**.
6. Inspect the homepage and important category pages.
7. Select **Request indexing** for priority pages.

### Reports to monitor

| Report | What to check |
|---|---|
| **Pages** | Indexed, excluded, duplicate, or blocked URLs |
| **Sitemaps** | Whether Google read the sitemap without processing errors |
| **Performance** | Impressions, clicks, CTR, average position, and queries |
| **URL Inspection** | Whether Google can crawl and render a specific page |
| **Enhancements** | Structured-data problems and opportunities |

### How to read the numbers

- **Impressions:** Your result appeared in search.
- **Clicks:** Someone visited your page.
- **CTR:** The percentage of impressions that became clicks.
- **Average position:** The approximate position of your result for measured queries.

If a page has many impressions but few clicks, improve its title, description, opening text, and alignment with the search intent.

---

## 12. Step Eight: Improve Click-Through Rate

If a page receives impressions but few clicks:

1. Make the title more specific.
2. Put the main topic near the beginning.
3. Explain the benefit in the description.
4. Make sure the visible H1 matches the search intent.
5. Improve the first paragraph.
6. Avoid exaggerated promises such as “guaranteed number one.”

Google may rewrite a search-result title using the page heading, visible text, links, or structured data. You provide strong signals, but Google makes the final title-link decision.

---

## 13. Step Nine: Build Authority Outside the Website

Technical SEO helps the site qualify. Useful content helps it compete. **Authority helps Google trust it.**

Legitimate ways to build authority:

- Publish original tutorials.
- Create downloadable prompt checklists.
- Make YouTube demonstrations using your own prompts.
- Share useful examples in relevant creator communities.
- Contact websites that genuinely cover AI video creation.
- Earn links by publishing original research or templates.

Avoid:

- Buying hundreds of cheap backlinks.
- Copying competitor articles.
- Creating fake reviews or testimonials.
- Publishing dozens of thin pages with nearly identical text.
- Hiding keywords in the page.
- Promising guaranteed Google rankings.

A real mention from a relevant creator or website is more valuable than a large number of unrelated spam links.

---

## 14. The Professional SEO Workflow

A professional SEO process is repeatable and measurable:

### Research

Understand the audience, search intent, competitor pages, and unanswered questions.

### Plan

Map each topic to one page. Decide the page title, URL, H1, content sections, internal links, and success metric before writing.

### Build

Publish technically accessible pages with useful content, accurate metadata, clean URLs, and descriptive links.

### Validate

Check status codes, canonical URLs, robots, sitemap entries, mobile layout, performance, structured data, and visible content.

### Measure

Use Search Console to compare impressions, clicks, CTR, queries, and indexing status.

### Improve

Change one or more clear elements, record the date, wait for enough data, and compare the result. Professional SEO is based on experiments and evidence rather than guesses.

---

## 15. A Simple Weekly SEO Routine

| Day | Activity |
|---|---|
| Monday | Check Search Console queries and indexing errors. |
| Tuesday | Improve one page with impressions but low CTR. |
| Wednesday | Publish or update one helpful guide. |
| Thursday | Add internal links between related pages. |
| Friday | Check speed, mobile layout, broken links, and metadata. |
| Monthly | Review top pages, new queries, excluded URLs, and content opportunities. |

Keep a record of every change and its date. This helps you understand which improvements actually help.

---

## 16. A Practical 30-Day Plan

### Week 1: Foundation

Verify Search Console, submit the sitemap, inspect the homepage, check robots, and inspect 10 important category pages.

### Week 2: Page optimization

Review titles, descriptions, H1 headings, opening paragraphs, image alt text, and internal links for the top 20 categories.

### Week 3: Helpful content

Publish three original guides: one about AI story videos, one about cinematic prompts, and one about character consistency. Link each guide to relevant prompt pages.

### Week 4: Authority and measurement

Create tutorial videos or social posts, share useful examples, review Search Console queries, and improve pages that get impressions but few clicks.

---

## 17. The Professional SEO Mindset

A beginner asks:

> Which keyword should I add?

A professional asks:

- What does the user actually want?
- Is this the best page for that intent?
- Does the page answer the question quickly?
- Is the content original and accurate?
- Can Google crawl and understand it?
- Can the user trust it?
- What do Search Console results show after the change?

For Prompt Gallery, the strongest path is:

> **Excellent individual prompt pages + helpful original tutorials + clear internal linking + Search Console measurement + real authority from creators and websites.**

That approach improves ranking potential over time. It cannot guarantee a top position because Google controls ranking and evaluates many changing signals.

---

## Quick Checklist

### Technical

- [ ] HTTPS works.
- [ ] Homepage and category pages return status 200.
- [ ] Important JavaScript and CSS resources are not blocked.
- [ ] Canonical URLs use `https://promptgallery.sbs`.
- [ ] Sitemap loads and contains preferred URLs.
- [ ] Robots allows important pages and resources.
- [ ] Pages work on mobile.
- [ ] Images have useful alt text.

### On-page

- [ ] Every important page has a unique title.
- [ ] Every important page has a useful description.
- [ ] Each page has one clear H1.
- [ ] The opening paragraph answers the search intent.
- [ ] Headings organize the content.
- [ ] Related pages are linked with descriptive anchor text.
- [ ] Content is original, accurate, and useful.

### Off-page

- [ ] Publish original tutorials.
- [ ] Create useful downloadable resources.
- [ ] Demonstrate prompts publicly.
- [ ] Earn relevant mentions and links.
- [ ] Avoid spam, copied content, and fake testimonials.

### Measurement

- [ ] Search Console is verified.
- [ ] Sitemap is submitted.
- [ ] Priority pages are inspected.
- [ ] Indexing errors are reviewed.
- [ ] Impressions, clicks, CTR, and queries are monitored.
- [ ] Changes are recorded and reviewed after enough time.

---

## Official Google References

1. [Google Search Engine Optimization Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
2. [Google: Influencing Title Links in Search Results](https://developers.google.com/search/docs/appearance/title-link)
3. [Google: Build and Submit a Sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
4. [Google: Introduction to Structured Data Markup](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
5. [Google Search Console](https://search.google.com/search-console/about)

*Prepared for Prompt Gallery. SEO recommendations should be reviewed regularly as the website, audience, and search ecosystem change.*

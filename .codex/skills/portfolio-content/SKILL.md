---
name: portfolio-content
description: Convert supplied PDF, Word, or draft article content into MDX posts or analysis pages that match the Iris Analytics Intelligence website structure, visual language, tables, quotes, embedded visuals, and citation style.
---

# Portfolio Content Publishing

Use this skill when turning a PDF, Word document, outline, or long-form draft into a website-ready MDX article for the Iris Analytics Intelligence portfolio.

## Core Workflow

1. Extract the source document text.
2. Preserve the author's argument, section order, terminology, and intended meaning.
3. Create or update the appropriate MDX file under:
   - `content/analysis` for analytical, BI, data, AI, RevOps, KPI, governance, and technical thought leadership.
   - `content/posts` for personal updates, learning notes, career reflections, and lighter blog posts.
4. Add complete frontmatter:
   - `title`
   - `slug`
   - `date`
   - `category`
   - `topic` for analysis pages
   - `tags`
   - `summary`
   - `thumbnail`
   - `featured`
   - `difficulty` for analysis pages
5. If the source includes a visual concept, create or update a lightweight SVG under `public/images/analysis` or `public/images/posts`.
6. Run `npm run lint` and, if the dev server is running, verify the route returns `200`.

Do not run `npm run build` while `npm run dev` is running in this project because the `.next` cache has previously become corrupted when both run at the same time.

## Voice and Positioning

Write for a professional data analytics, BI, RevOps, and AI-enabled analytics portfolio.

The tone should be:
- Business-first.
- Clear and practical.
- Credible for medium-sized companies, recruiters, analytics leaders, and technical stakeholders.
- Thoughtful without sounding academic.
- Helpful without becoming an aggressive sales page.

Avoid:
- Marketing fluff.
- Overclaiming.
- Dense textbook explanations.
- Unnecessary jargon where plain business language works.

## Layout Logic

Use a strong article structure:
- Short opening hook.
- Clear section headings.
- Practical framing before technical detail.
- Tables for comparison, definitions, readiness checks, and metric portfolios.
- Visual blocks for frameworks, pipelines, matrices, review flows, and operating models.
- Pull quotes only for key ideas.
- Formal source section at the bottom.

Prefer one idea per paragraph. Do not create large uninterrupted text walls.

For analysis pages, the site can apply the `prose-spacious` class for more generous spacing. If a specific article feels dense, apply that class via the analysis detail route rather than changing all pages globally.

## Color Theme

Stay consistent with the existing website:
- Primary ink: dark navy / slate (`text-ink`, `#071a3d`, `#14213d`).
- Signal blue: `text-signal`, `bg-signal`, `#2563eb`.
- Supporting teal/mint: `#14b8a6`, `#ccfbf1`, `#ecfeff`, `#f0fdfa`.
- Supporting blue: `#dbeafe`, `#eff6ff`, `#eef2ff`.
- Neutral surfaces: white, slate-50, slate-100.

Use light backgrounds by default. Use dark navy blocks sparingly for important governance, control, or final takeaway moments.

Avoid:
- Bright solid blue bars unless the element is truly the main destination.
- Heavy gradients on text-heavy blocks.
- Decorative elements that crowd the content.
- One-off color palettes that differ from the rest of the website.

## Tables

Use HTML tables in MDX when the table needs polished styling or reliable layout:

```mdx
<div className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
  <table className="w-full min-w-[760px] text-left text-sm">
    <thead className="bg-slate-50 text-xs uppercase tracking-[0.14em] text-slate-500">
      <tr>
        <th className="px-5 py-4">Column</th>
        <th className="px-5 py-4">Column</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-slate-100">
      <tr>
        <td className="px-5 py-4 font-bold text-slate-950">Item</td>
        <td className="px-5 py-4 text-slate-700">Explanation</td>
      </tr>
    </tbody>
  </table>
</div>
```

Use tables for:
- Concept comparisons.
- Governance concerns and controls.
- Pipeline layers.
- Readiness checklists.
- Risk levels and recommended controls.
- Metric portfolios.

Keep tables horizontally safe on smaller screens by using `overflow-hidden` and `min-w-[...]` only where the page container can support it. For very wide content, use card grids instead.

## Quotes

Use quotes for memorable thesis statements only. Keep the quote styling subtle:
- Thin left accent.
- Light background.
- Medium or semibold text.
- No oversized card treatment unless the user explicitly asks for a strong highlight.

Preferred quote pattern:

```mdx
> Standardised BI gives the numbers. RAG gives the context. AI writes the first draft. Governance keeps the system trustworthy. Human review protects business judgement.
```

Avoid using quote blocks for ordinary paragraphs.

## Embedded Visuals

Use embedded MDX visual blocks for in-article frameworks and process flows.

Good use cases:
- Reporting pipelines.
- Governance layers.
- RAG ingestion/retrieval flows.
- DAG workflows.
- Review loops.
- Readiness checklists.
- 2x2 frameworks.

Preferred styling:
- Rounded `2rem` or `1.75rem`.
- Soft blue/teal background.
- White internal cards.
- Slate/navy text.
- Subtle shadow only when helpful.

Example process block:

```mdx
<div className="my-8 rounded-[2rem] bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 p-6 shadow-soft">
  <div className="grid gap-3 md:grid-cols-6">
    <div className="rounded-2xl bg-white p-4 text-center font-bold text-slate-950 shadow-sm">Source systems</div>
    <div className="rounded-2xl bg-white p-4 text-center font-bold text-slate-950 shadow-sm">Ingestion</div>
    <div className="rounded-2xl bg-white p-4 text-center font-bold text-slate-950 shadow-sm">Raw layer</div>
    <div className="rounded-2xl bg-white p-4 text-center font-bold text-slate-950 shadow-sm">ETL / ELT</div>
    <div className="rounded-2xl bg-white p-4 text-center font-bold text-slate-950 shadow-sm">Curated data</div>
    <div className="rounded-2xl bg-white p-4 text-center font-bold text-slate-950 shadow-sm">Semantic model</div>
  </div>
  <div className="mt-3 rounded-2xl border border-blue-200 bg-blue-100/80 p-4 text-center font-bold text-blue-800 shadow-sm">BI + AI</div>
</div>
```

If creating thumbnail SVGs:
- Store them in `public/images/analysis` or `public/images/posts`.
- Keep SVGs lightweight and readable.
- Use the existing blue/teal palette.
- Keep margins generous.
- Avoid unnecessary decorative dots, icons, or extra wording.
- The banner should usually contain the article title and one clear visual metaphor or simplified framework.

## Citation and Source Style

Always add a final source section when the article references external material.

Use the same formal style as the existing PS metrics article:

```mdx
## References

1. Organisation. (n.d.). *Title of Source*. Retrieved Month Day, Year, from https://example.com

2. Organisation. (Year). *Title of Source*. Retrieved Month Day, Year, from https://example.com
```

If the user asks for a singular heading, use:

```mdx
## Source
```

Use the current project date for retrieved dates unless the source document provides a specific access date.

Do not invent sources. If sources are listed in the supplied PDF or Word document, preserve them and convert them into the formal format. If source details are incomplete, keep the available organisation/title/link and avoid fabricating publication dates.

## SEO and Frontmatter

Use clear slugs:
- Lowercase.
- Hyphen-separated.
- No punctuation.
- Correct spelling unless preserving an existing URL is necessary.

For analysis pages:

```mdx
---
title: "Article Title"
slug: "article-title"
date: "2026-05-03"
category: "AI Governance"
topic: "AI Governance"
tags: ["AI Reporting", "Governance", "RAG", "ETL", "Semantic Models"]
summary: "A concise one-sentence summary with the business value and topic."
thumbnail: "/images/analysis/article-title.svg"
featured: true
difficulty: "Advanced"
---
```

Summary should be specific, recruiter/client friendly, and under roughly 160 characters when possible.

Good topics include:
- Business Intelligence
- AI Analytics
- AI Governance
- RevOps
- Data Storytelling
- Automation
- Key Metrics Design

If a new topic is needed, add it to `data/tags.ts`.

## Quality Checks

Before finishing:
- Confirm the MDX file compiles.
- Check for unclosed JSX tags.
- Escape special JSX text when needed, especially `&` as `&amp;` inside JSX.
- Avoid raw `<` or `>` in JSX text unless escaped.
- Verify article route returns `200` if the dev server is running.
- Run `npm run lint`.

Common MDX failure causes:
- Dangling `</div>`.
- Unescaped `&` inside JSX text.
- Raw URLs with angle brackets.
- Markdown blockquote placed inside an unclosed JSX block.
- JSX maps or complex JavaScript in MDX where static HTML would be clearer.

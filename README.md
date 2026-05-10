# Iris Analytics Intelligence

A modern personal portfolio web app for a data analytics, BI, RevOps, and AI-enabled business intelligence professional. It is built to be GitHub-first in Phase 1 and easy to migrate later to Supabase, Firebase, Sanity, Contentful, or another CMS/database.

## Tech Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- MDX content with frontmatter
- Recharts for native charts
- shadcn/ui-inspired custom components
- Giscus comments and GitHub Discussions reactions
- Vercel and Netlify deployment friendly

## Folder Structure

```text
app/                    Routes, layouts, metadata, loading and not-found pages
components/             Reusable layout, content, media, section, and UI components
content/
  projects/             Portfolio case studies in MDX
  analysis/             Long-form analysis articles in MDX
  posts/                Blog posts and learning notes in MDX
data/                   Shared tags, skills, and static metadata helpers
lib/                    Content loading, frontmatter parsing, and utilities
public/
  images/               Small and medium static assets
  resume/resume.pdf     Resume placeholder to replace
```

## Install Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

Production checks:

```bash
npm run lint
npm run build
npm run start
```

## Add a Portfolio Project

Create a file in `content/projects`, for example `sales-kpi-dashboard.mdx`.

```mdx
---
title: "Revenue Operations Dashboard"
slug: "revenue-operations-dashboard"
date: "2026-04-27"
category: "BI Dashboard"
tools: ["Power BI", "SQL", "DAX", "Redshift"]
businessFunction: ["Sales", "Marketing", "Finance"]
summary: "A Power BI dashboard designed to track RevOps performance and improve reporting visibility."
thumbnail: "/images/projects/revops-dashboard.svg"
featured: true
status: "Recent"
impact: "Improved reporting visibility and reduced manual reporting effort."
---

## Executive summary

Write the case study here.
```

The detail route is generated automatically at `/portfolio/revenue-operations-dashboard`.

## Add a Blog Post

Create a file in `content/posts`, for example `my-learning-note.mdx`.

Required frontmatter:

- `title`
- `slug`
- `date`
- `category`
- `tags`
- `summary`
- `thumbnail`

The route is generated at `/posts/[slug]`.

## Add an Analysis Article

Create a file in `content/analysis`. Analysis articles support `topic`, `difficulty`, `tags`, and reading time calculation.

## Add Images

Put small and medium image files in:

- `public/images/projects`
- `public/images/analysis`
- `public/images/posts`

Use paths like `/images/projects/example.svg` in MDX frontmatter. Avoid storing large raw files, videos, or very large exports in GitHub. Use Cloudinary, Supabase Storage, or S3 for larger media.

## Embed a Power BI or Dashboard Visual

Option 1: add an `embedUrl` field to project frontmatter.

```yaml
embedUrl: "https://app.powerbi.com/reportEmbed?..."
```

Option 2: use the MDX component inside a project:

```mdx
<PowerBIEmbed src="https://app.powerbi.com/reportEmbed?..." title="Revenue dashboard" />
```

The same component can hold Tableau, Plotly, Observable, or other iframe links when the provider allows embedding.

## Add Chart Components

Use the native Recharts demo component in MDX:

```mdx
<ChartEmbed title="Reporting effort reduction" />
```

For real charts, extend `components/media/ChartEmbed.tsx` or create additional chart components and expose them through `MDXContentRenderer`.

## Update Services Content

The Services page content is centralized in `data/services.ts`.

Use this file to update:

- Service pillars shown on the home page and `/services`.
- Tools and capabilities.
- Package tiers.
- Optional add-ons and post-launch support.
- Budget range and timeline dropdown options.
- Trust and credibility cards.

The full page route is `app/services/page.tsx`. The home preview reads from the same `servicePillars` data so titles and descriptions stay consistent.

## Configure Calendly

Set this public environment variable in `.env.local`, Vercel, or Netlify:

```bash
NEXT_PUBLIC_CALENDLY_URL="https://calendly.com/your-name/analytics-discovery-call"
```

If this variable is not configured, the app uses the placeholder fallback in `data/services.ts`. Replace that fallback or configure the environment variable before publishing the Services page publicly.

## Update Service Packages

Edit `servicePackages` in `data/services.ts`. Each package includes:

- `title`
- `positioning`
- `bestFor`
- `includes`
- `pricing`

Keep public pricing as scope-based wording such as `Custom quote after discovery` unless you intentionally want to publish fixed prices.

## Update Add-ons

Edit `serviceAddOns` in `data/services.ts`. Each add-on includes:

- `title`
- `includes`
- `pricing`
- `icon`

The current pricing display is `Available as monthly support or custom add-on`.

## Connect the Services Inquiry Form

The services inquiry form is implemented in `components/content/InquiryForm.tsx`. Phase 1 uses client-side validation and a placeholder submit handler.

Future backend options:

- Netlify Forms: keep the `data-netlify="true"` form attributes and allow Netlify to capture submissions after deployment.
- Formspree: replace the submit handler with a `fetch` or form `action` pointed at your Formspree endpoint.
- Supabase: insert validated inquiry data into a protected table through an API route or server action.
- Custom API route: post the form payload to an `app/api/.../route.ts` endpoint and send notifications or store records there.

Do not commit private API keys or service credentials.

## Enable Comments and Reactions

Comments and reactions are powered by Giscus, which stores visitor comments and GitHub reactions in GitHub Discussions.

1. Enable Discussions on your public GitHub repository.
2. Install the Giscus GitHub app for that repository.
3. Create or choose a discussion category, such as `Comments`.
4. Use https://giscus.app to generate the repo and category IDs.
5. Add these public environment variables in `.env.local`, Vercel, or Netlify:

```bash
NEXT_PUBLIC_GISCUS_REPO="username/repository"
NEXT_PUBLIC_GISCUS_REPO_ID="your_repo_id"
NEXT_PUBLIC_GISCUS_CATEGORY="Comments"
NEXT_PUBLIC_GISCUS_CATEGORY_ID="your_category_id"
```

Optional settings:

```bash
NEXT_PUBLIC_GISCUS_MAPPING="pathname"
NEXT_PUBLIC_GISCUS_REACTIONS_ENABLED="1"
NEXT_PUBLIC_GISCUS_THEME="preferred_color_scheme"
NEXT_PUBLIC_GISCUS_LANG="en"
```

The previous local browser-only `Like / Useful / Insightful` reaction buttons have been removed so Giscus is the single source of truth for comments and reactions. No private credentials should be committed.

## Deploy to Vercel

1. Push the repo to GitHub.
2. Import the repo in Vercel.
3. Use the default Next.js settings.
4. Add any public environment variables for comments or forms.
5. Deploy.

## Deploy to Netlify

1. Push the repo to GitHub.
2. Create a new Netlify site from Git.
3. Build command: `npm run build`.
4. Publish directory: `.next`.
5. Use the official Netlify Next.js runtime/plugin if prompted.
6. The contact form includes Netlify form attributes and can be connected after deployment.

## Future Upgrade Roadmap

- Supabase database for comments, reactions, contact submissions, and analytics events.
- CMS integration with Sanity, Contentful, or another editor-friendly content layer.
- Auth for private admin workflows.
- Newsletter signup.
- Product analytics with privacy-conscious tracking.
- Admin dashboard for content status, comment moderation, and portfolio metrics.

## Personalization Checklist

- Replace placeholder profile text in `app/about/page.tsx`.
- Replace `hello@example.com`, LinkedIn, and GitHub links in `Footer` and `Contact`.
- Replace `public/resume/resume.pdf`.
- Add real dashboard screenshots and project details.
- Update metadata in `app/layout.tsx`.

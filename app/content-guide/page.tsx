import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Content Guide",
  description: "Private-style guide for adding projects, posts, analysis articles, images, charts, and dashboard embeds."
};

const code = `---
title: "Revenue Operations Dashboard"
slug: "revenue-operations-dashboard"
date: "2026-04-27"
category: "BI Dashboard"
tools: ["Power BI", "SQL", "DAX", "Redshift"]
businessFunction: ["Sales", "Marketing", "Finance"]
summary: "A dashboard designed to track RevOps performance."
thumbnail: "/images/projects/revops-dashboard.svg"
featured: true
status: "Recent"
impact: "Reduced manual reporting effort."
---`;

export default function ContentGuidePage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Content Guide" }]} />
      <h1 className="text-4xl font-semibold tracking-tight text-ink dark:text-white">Content guide</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
        This page documents how to keep the portfolio GitHub-first while leaving room for Supabase, Firebase, Sanity, Contentful, or another CMS later.
      </p>
      <div className="prose-portfolio mt-8">
        <h2>Add a portfolio project</h2>
        <p>Create a new file in <code>content/projects</code> using a slug filename such as <code>sales-kpi-dashboard.mdx</code>. Add frontmatter like this:</p>
        <pre className="overflow-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-100"><code>{code}</code></pre>
        <h2>Add analysis or posts</h2>
        <p>Use <code>content/analysis</code> for deeper BI, AI, and analytics write-ups. Use <code>content/posts</code> for learning notes, career reflections, and shorter updates.</p>
        <h2>Add images</h2>
        <p>Place small and medium assets under <code>public/images/projects</code>, <code>public/images/analysis</code>, or <code>public/images/posts</code>. Store large videos or raw files in Cloudinary, Supabase Storage, or S3.</p>
        <h2>Embed dashboards</h2>
        <p>Add an <code>embedUrl</code> to project frontmatter, or place <code>{'<PowerBIEmbed src="https://..." />'}</code> inside MDX. Use public or securely shared iframe links only.</p>
        <h2>Add chart components</h2>
        <p>Use <code>{'<ChartEmbed title="Automation impact" />'}</code> inside MDX for native Recharts visuals. Extend <code>components/media/ChartEmbed.tsx</code> for real datasets.</p>
      </div>
    </article>
  );
}

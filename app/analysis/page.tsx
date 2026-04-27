import type { Metadata } from "next";
import { ArticleLibrary } from "@/components/content/ArticleLibrary";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { analysisTopics } from "@/data/tags";
import { ArticleMeta, getAllContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Analysis",
  description: "Deep-dive analysis articles on BI, AI analytics, RevOps, automation, and data storytelling."
};

export default function AnalysisPage() {
  const articles = getAllContent<ArticleMeta>("analysis").map((item) => item.meta);
  const tags = Array.from(new Set(articles.flatMap((article) => article.tags)));
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Analysis" }]} />
      <div className="mb-8">
        <h1 className="text-4xl font-semibold tracking-tight text-ink dark:text-white">Analysis library</h1>
        <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">Long-form thinking on dashboards, metrics, data workflows, and AI-enabled analytics.</p>
      </div>
      <ArticleLibrary articles={articles} basePath="/analysis" filters={{ topics: analysisTopics, tags, difficulties: ["Beginner", "Intermediate", "Advanced"] }} />
    </section>
  );
}

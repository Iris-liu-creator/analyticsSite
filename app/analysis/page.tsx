import type { Metadata } from "next";
import Link from "next/link";
import { Bot, BriefcaseBusiness, ChartNoAxesCombined } from "lucide-react";
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
  const startHereCards = [
    {
      icon: BriefcaseBusiness,
      title: "For Analytics Leaders",
      body: "Build trusted reporting foundations, align KPI definitions, and scale governance across dashboards, semantic models, and AI-enabled reporting.",
      tags: ["Governance", "KPI alignment", "Reporting trust"]
    },
    {
      icon: ChartNoAxesCombined,
      title: "For Data Professionals",
      body: "Strengthen data workflows, design reusable semantic layers, and automate reporting processes without compromising quality, consistency, or control.",
      tags: ["Semantic layers", "Automation", "Data quality"]
    },
    {
      icon: Bot,
      title: "For Business Teams",
      body: "Turn fragmented data into clear, decision-ready insights through self-service analytics, guided reporting, and practical AI-assisted workflows.",
      tags: ["Self-service", "Decision support", "AI workflows"]
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Analysis" }]} />
      <div className="mb-8">
        <h1 className="text-4xl font-semibold tracking-tight text-ink dark:text-white">Analysis library</h1>
        <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">Long-form thinking on dashboards, metrics, data workflows, and AI-enabled analytics.</p>
      </div>
      <section className="mb-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-signal">Start Here</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink dark:text-white">Choose your starting point</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            Practical thinking on BI, reporting governance, KPI design, data workflows, and AI-enabled analytics, written by business-facing data professional.
          </p>
        </div>
        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          {startHereCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="flex h-full flex-col rounded-lg border border-slate-200 bg-slate-50/60 p-5 dark:border-slate-800 dark:bg-slate-950/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-white text-signal shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink dark:text-white">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{card.body}</p>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Best for:</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="#analysis-library"
                  className="mt-5 inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                >
                  Browse articles
                </Link>
              </article>
            );
          })}
        </div>
      </section>
      <div id="analysis-library">
        <ArticleLibrary articles={articles} basePath="/analysis" filters={{ topics: analysisTopics, tags, difficulties: ["Beginner", "Intermediate", "Advanced"] }} />
      </div>
    </section>
  );
}

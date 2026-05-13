"use client";

import { useEffect, useState } from "react";
import { Bot, BriefcaseBusiness, ChartNoAxesCombined } from "lucide-react";
import { ArticleLibrary } from "@/components/content/ArticleLibrary";
import { ArticleMeta } from "@/lib/content";
import { cn } from "@/lib/utils";

const audienceLabels = {
  "analytics-leaders": "Analytics Leaders",
  "data-professionals": "Data Professionals",
  "business-teams": "Business Teams"
};

type AudienceKey = keyof typeof audienceLabels;

const startHereCards = [
  {
    audience: "analytics-leaders",
    icon: BriefcaseBusiness,
    title: "For Analytics Leaders",
    body: "Build trusted reporting foundations, align KPI definitions, and scale governance across dashboards, semantic models, and AI-enabled reporting.",
    tags: ["Governance", "KPI alignment", "Reporting trust"],
    cta: "Show leader articles"
  },
  {
    audience: "data-professionals",
    icon: ChartNoAxesCombined,
    title: "For Data Professionals",
    body: "Strengthen data workflows, design reusable semantic layers, and automate reporting processes without compromising quality, consistency, or control.",
    tags: ["Semantic layers", "Automation", "Data quality"],
    cta: "Show data articles"
  },
  {
    audience: "business-teams",
    icon: Bot,
    title: "For Business Teams",
    body: "Turn fragmented data into clear, decision-ready insights through self-service analytics, guided reporting, and practical AI-assisted workflows.",
    tags: ["Self-service", "Decision support", "AI workflows"],
    cta: "Show business articles"
  }
] as const;

export function AnalysisHub({
  articles,
  tags,
  topics
}: {
  articles: ArticleMeta[];
  tags: string[];
  topics: string[];
}) {
  const [audienceFilter, setAudienceFilter] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const audience = params.get("audience");
    if (audience && audience in audienceLabels) {
      setAudienceFilter(audience);
    }
  }, []);

  function selectAudience(audience: string) {
    setAudienceFilter(audience);
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("audience", audience);
    nextUrl.hash = "analysis-library";
    window.history.replaceState(null, "", nextUrl);
    setTimeout(() => {
      document.getElementById("analysis-library")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }

  function clearAudienceFilter() {
    setAudienceFilter("");
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.delete("audience");
    nextUrl.hash = "analysis-library";
    window.history.replaceState(null, "", nextUrl);
  }

  return (
    <>
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
            const isActive = audienceFilter === card.audience;
            return (
              <article
                key={card.title}
                className={cn(
                  "flex h-full flex-col rounded-lg border bg-slate-50/60 p-5 transition dark:bg-slate-950/40",
                  isActive ? "border-signal shadow-soft dark:border-blue-400" : "border-slate-200 shadow-sm dark:border-slate-800"
                )}
              >
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
                <button
                  type="button"
                  onClick={() => selectAudience(card.audience)}
                  className={cn(
                    "mt-5 inline-flex items-center justify-center rounded-lg border px-4 py-2.5 text-sm font-semibold transition",
                    isActive
                      ? "border-signal bg-signal text-white"
                      : "border-slate-200 bg-white text-ink hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                  )}
                >
                  {isActive ? `Showing ${audienceLabels[card.audience as AudienceKey]}` : card.cta}
                </button>
              </article>
            );
          })}
        </div>
      </section>
      <div id="analysis-library">
        <ArticleLibrary
          articles={articles}
          basePath="/analysis"
          filters={{ topics, tags, difficulties: ["Beginner", "Intermediate", "Advanced"] }}
          audienceFilter={audienceFilter}
          audienceLabels={audienceLabels}
          onAudienceFilterChange={(value) => {
            if (value) {
              selectAudience(value);
            } else {
              clearAudienceFilter();
            }
          }}
        />
      </div>
    </>
  );
}

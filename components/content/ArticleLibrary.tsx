"use client";

import { useMemo, useState } from "react";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { ArticleMeta } from "@/lib/content";
import { SearchInput } from "@/components/ui/SearchInput";
import { EmptyState } from "@/components/ui/EmptyState";
import { FilterSelect } from "@/components/content/FilterBar";
import { PostCard } from "@/components/content/PostCard";
import { cn } from "@/lib/utils";

export function ArticleLibrary({
  articles,
  basePath,
  filters,
  audienceFilter = "",
  audienceLabels,
  onAudienceFilterChange
}: {
  articles: ArticleMeta[];
  basePath: "/analysis";
  filters: { topics?: string[]; categories?: string[]; tags: string[]; difficulties?: string[] };
  audienceFilter?: string;
  audienceLabels?: Record<string, string>;
  onAudienceFilterChange?: (value: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [primary, setPrimary] = useState("");
  const [tag, setTag] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    return articles
      .filter((article) => {
        const haystack = [article.title, article.summary, article.category, article.topic, ...article.tags, ...(article.audiences ?? [])].join(" ").toLowerCase();
        const primaryMatch = !primary || article.topic === primary || article.category === primary;
        const audienceMatch = !audienceFilter || article.audiences?.includes(audienceFilter as NonNullable<ArticleMeta["audiences"]>[number]);
        return haystack.includes(query.toLowerCase()) && primaryMatch && (!tag || article.tags.includes(tag)) && (!difficulty || article.difficulty === difficulty) && audienceMatch;
      })
      .sort((a, b) => {
        if (!audienceFilter) return 0;
        const aPriority = a.audiencePriority?.[audienceFilter as keyof NonNullable<ArticleMeta["audiencePriority"]>] ?? 999;
        const bPriority = b.audiencePriority?.[audienceFilter as keyof NonNullable<ArticleMeta["audiencePriority"]>] ?? 999;
        if (aPriority !== bPriority) return aPriority - bPriority;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  }, [articles, query, primary, tag, difficulty, audienceFilter]);

  const primaryOptions = filters.topics ?? filters.categories ?? [];
  const activeFilterCount = [query, primary, tag, difficulty, audienceFilter].filter(Boolean).length;
  const panelId = `${basePath.replace("/", "")}-filter-panel`;
  const audienceLabel = audienceFilter ? (audienceLabels?.[audienceFilter] ?? audienceFilter) : "";

  function clearFilters() {
    setQuery("");
    setPrimary("");
    setTag("");
    setDifficulty("");
    onAudienceFilterChange?.("");
  }

  return (
    <div>
      {audienceFilter ? (
        <div className="mb-4 rounded-lg border border-blue-100 bg-blue-50/70 px-4 py-3 text-sm text-blue-900 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-100">
          Showing articles for <span className="font-semibold">{audienceLabel}</span>. Use “Show all” or “Clear” to return to the full library.
        </div>
      ) : null}
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            aria-expanded={filtersOpen}
            aria-controls={panelId}
            onClick={() => setFiltersOpen((open) => !open)}
            className="inline-flex items-center gap-3 text-left"
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-slate-50 text-signal ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800">
              <SlidersHorizontal className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-ink dark:text-white">Search and filters</span>
              <span className="block text-xs text-slate-500 dark:text-slate-400">
                {filtered.length} {filtered.length === 1 ? "result" : "results"}
                {activeFilterCount ? ` | ${activeFilterCount} active` : ""}
              </span>
            </span>
            <ChevronDown className={cn("h-4 w-4 text-slate-400 transition sm:hidden", filtersOpen && "rotate-180")} />
          </button>
          <div className="flex items-center gap-2">
            {activeFilterCount ? (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <X className="h-4 w-4" />
                Clear
              </button>
            ) : null}
            <button
              type="button"
              aria-expanded={filtersOpen}
              aria-controls={panelId}
              onClick={() => setFiltersOpen((open) => !open)}
              className="hidden items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-ink transition hover:bg-slate-50 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800 sm:inline-flex"
            >
              {filtersOpen ? "Hide filters" : "Show filters"}
              <ChevronDown className={cn("h-4 w-4 text-slate-400 transition", filtersOpen && "rotate-180")} />
            </button>
          </div>
        </div>
        {filtersOpen ? (
          <div id={panelId} className="mt-4 grid items-end gap-4 border-t border-slate-100 pt-4 dark:border-slate-800 md:grid-cols-2 xl:grid-cols-[minmax(18rem,1.4fr)_repeat(3,minmax(10rem,1fr))]">
            <div className="md:col-span-2 xl:col-span-1"><SearchInput value={query} onChange={setQuery} placeholder="Search articles" /></div>
            <FilterSelect label={basePath === "/analysis" ? "Topic" : "Category"} value={primary} onChange={setPrimary} options={primaryOptions} />
            <FilterSelect label="Tag" value={tag} onChange={setTag} options={filters.tags} />
            {filters.difficulties ? <FilterSelect label="Difficulty" value={difficulty} onChange={setDifficulty} options={filters.difficulties} /> : null}
          </div>
        ) : null}
        {audienceFilter ? (
          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4 text-sm dark:border-slate-800">
            <span className="text-slate-500 dark:text-slate-400">Audience path:</span>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-200">{audienceLabel}</span>
            <button type="button" onClick={() => onAudienceFilterChange?.("")} className="text-xs font-semibold text-signal hover:underline">
              Show all
            </button>
          </div>
        ) : null}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((article) => <PostCard key={article.slug} post={article} basePath={basePath} />)}
      </div>
      {!filtered.length ? <div className="mt-8"><EmptyState /></div> : null}
    </div>
  );
}

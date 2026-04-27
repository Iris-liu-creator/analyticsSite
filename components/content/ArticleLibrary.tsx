"use client";

import { useMemo, useState } from "react";
import { ArticleMeta } from "@/lib/content";
import { SearchInput } from "@/components/ui/SearchInput";
import { EmptyState } from "@/components/ui/EmptyState";
import { FilterSelect } from "@/components/content/FilterBar";
import { PostCard } from "@/components/content/PostCard";

export function ArticleLibrary({
  articles,
  basePath,
  filters
}: {
  articles: ArticleMeta[];
  basePath: "/analysis" | "/posts";
  filters: { topics?: string[]; categories?: string[]; tags: string[]; difficulties?: string[] };
}) {
  const [query, setQuery] = useState("");
  const [primary, setPrimary] = useState("");
  const [tag, setTag] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const haystack = [article.title, article.summary, article.category, article.topic, ...article.tags].join(" ").toLowerCase();
      const primaryMatch = !primary || article.topic === primary || article.category === primary;
      return haystack.includes(query.toLowerCase()) && primaryMatch && (!tag || article.tags.includes(tag)) && (!difficulty || article.difficulty === difficulty);
    });
  }, [articles, query, primary, tag, difficulty]);

  const primaryOptions = filters.topics ?? filters.categories ?? [];

  return (
    <div>
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="md:col-span-2"><SearchInput value={query} onChange={setQuery} placeholder="Search articles" /></div>
          <FilterSelect label={basePath === "/analysis" ? "Topic" : "Category"} value={primary} onChange={setPrimary} options={primaryOptions} />
          <FilterSelect label="Tag" value={tag} onChange={setTag} options={filters.tags} />
          {filters.difficulties ? <FilterSelect label="Difficulty" value={difficulty} onChange={setDifficulty} options={filters.difficulties} /> : null}
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((article) => <PostCard key={article.slug} post={article} basePath={basePath} />)}
      </div>
      {!filtered.length ? <div className="mt-8"><EmptyState /></div> : null}
    </div>
  );
}

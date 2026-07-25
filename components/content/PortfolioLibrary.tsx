"use client";

import { useMemo, useState } from "react";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { ProjectMeta } from "@/lib/content";
import { SearchInput } from "@/components/ui/SearchInput";
import { PortfolioCard } from "@/components/content/PortfolioCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { FilterSelect } from "@/components/content/FilterBar";
import { businessFunctions, projectCategories, statuses, toolTags } from "@/data/tags";
import { cn } from "@/lib/utils";

export function PortfolioLibrary({ projects }: { projects: ProjectMeta[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [tool, setTool] = useState("");
  const [businessFunction, setBusinessFunction] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("Newest");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    return projects
      .filter((project) => {
        const haystack = [project.title, project.summary, project.category, project.impact, ...project.tools, ...(project.businessFunction ?? [])].join(" ").toLowerCase();
        return (
          haystack.includes(query.toLowerCase()) &&
          (!category || project.category === category) &&
          (!tool || project.tools.includes(tool)) &&
          (!businessFunction || project.businessFunction?.includes(businessFunction)) &&
          (!status || project.status === status)
        );
      })
      .sort((a, b) => {
        if (sort === "Most Impactful") return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
        if (sort === "Most Technical") return b.tools.length - a.tools.length;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  }, [projects, query, category, tool, businessFunction, status, sort]);

  const activeFilterCount = [query, category, tool, businessFunction, status, sort !== "Newest" ? sort : ""].filter(Boolean).length;

  function clearFilters() {
    setQuery("");
    setCategory("");
    setTool("");
    setBusinessFunction("");
    setStatus("");
    setSort("Newest");
  }

  return (
    <div>
      <div className="apple-card p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            aria-expanded={filtersOpen}
            aria-controls="portfolio-filter-panel"
            onClick={() => setFiltersOpen((open) => !open)}
            className="inline-flex items-center gap-3 text-left"
          >
            <span className="apple-icon h-10 w-10">
              <SlidersHorizontal className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-ink dark:text-white">Search and filters</span>
              <span className="block text-xs text-slate-500 dark:text-slate-400">
                {filtered.length} {filtered.length === 1 ? "result" : "results"}
                {activeFilterCount ? ` · ${activeFilterCount} active` : ""}
              </span>
            </span>
            <ChevronDown className={cn("h-4 w-4 text-slate-400 transition sm:hidden", filtersOpen && "rotate-180")} />
          </button>
          <div className="flex items-center gap-2">
            {activeFilterCount ? (
              <button
                type="button"
                onClick={clearFilters}
                className="apple-control inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300"
              >
                <X className="h-4 w-4" />
                Clear
              </button>
            ) : null}
            <button
              type="button"
              aria-expanded={filtersOpen}
              aria-controls="portfolio-filter-panel"
              onClick={() => setFiltersOpen((open) => !open)}
              className="apple-control hidden items-center gap-2 px-3 py-2 text-sm font-semibold sm:inline-flex"
            >
              {filtersOpen ? "Hide filters" : "Show filters"}
              <ChevronDown className={cn("h-4 w-4 text-slate-400 transition", filtersOpen && "rotate-180")} />
            </button>
          </div>
        </div>
        {filtersOpen ? (
          <div id="portfolio-filter-panel" className="mt-4 grid items-end gap-4 border-t border-slate-100 pt-4 dark:border-slate-800 md:grid-cols-2 xl:grid-cols-[minmax(18rem,1.4fr)_repeat(5,minmax(9rem,1fr))]">
            <div className="md:col-span-2 xl:col-span-1">
              <SearchInput value={query} onChange={setQuery} placeholder="Search projects, tools, outcomes" />
            </div>
            <FilterSelect label="Category" value={category} onChange={setCategory} options={projectCategories} />
            <FilterSelect label="Tool" value={tool} onChange={setTool} options={toolTags} />
            <FilterSelect label="Function" value={businessFunction} onChange={setBusinessFunction} options={businessFunctions} />
            <FilterSelect label="Status" value={status} onChange={setStatus} options={statuses} />
            <FilterSelect label="Sort" value={sort} onChange={setSort} options={["Newest", "Most Impactful", "Most Technical"]} />
          </div>
        ) : null}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => <PortfolioCard key={project.slug} project={project} />)}
      </div>
      {!filtered.length ? <div className="mt-8"><EmptyState /></div> : null}
    </div>
  );
}

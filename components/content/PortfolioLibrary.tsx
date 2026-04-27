"use client";

import { useMemo, useState } from "react";
import { ProjectMeta } from "@/lib/content";
import { SearchInput } from "@/components/ui/SearchInput";
import { PortfolioCard } from "@/components/content/PortfolioCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { FilterSelect } from "@/components/content/FilterBar";
import { businessFunctions, projectCategories, statuses, toolTags } from "@/data/tags";

export function PortfolioLibrary({ projects }: { projects: ProjectMeta[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [tool, setTool] = useState("");
  const [businessFunction, setBusinessFunction] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("Newest");

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

  return (
    <div>
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_repeat(5,1fr)]">
          <SearchInput value={query} onChange={setQuery} placeholder="Search projects, tools, outcomes" />
          <FilterSelect label="Category" value={category} onChange={setCategory} options={projectCategories} />
          <FilterSelect label="Tool" value={tool} onChange={setTool} options={toolTags} />
          <FilterSelect label="Function" value={businessFunction} onChange={setBusinessFunction} options={businessFunctions} />
          <FilterSelect label="Status" value={status} onChange={setStatus} options={statuses} />
          <FilterSelect label="Sort" value={sort} onChange={setSort} options={["Newest", "Most Impactful", "Most Technical"]} />
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => <PortfolioCard key={project.slug} project={project} />)}
      </div>
      {!filtered.length ? <div className="mt-8"><EmptyState /></div> : null}
    </div>
  );
}

import type { Metadata } from "next";
import { PortfolioLibrary } from "@/components/content/PortfolioLibrary";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getAllContent, ProjectMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Searchable portfolio of BI dashboards, analytics case studies, RevOps reporting, AI, and automation work."
};

export default function PortfolioPage() {
  const projects = getAllContent<ProjectMeta>("projects").map((item) => item.meta);
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Portfolio" }]} />
      <div className="mb-8">
        <h1 className="text-4xl font-semibold tracking-tight text-ink dark:text-white">Portfolio library</h1>
        <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">Browse dashboards, reporting systems, analytics case studies, and automation work by category, tool, function, and status.</p>
      </div>
      <PortfolioLibrary projects={projects} />
    </section>
  );
}

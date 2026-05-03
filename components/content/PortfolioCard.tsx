import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectMeta } from "@/lib/content";
import { TagPill } from "@/components/ui/TagPill";
import { formatDate } from "@/lib/utils";

export function PortfolioCard({ project }: { project: ProjectMeta }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      aria-label={`View case study: ${project.title}`}
      className="group block h-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-900"
    >
      <article className="flex h-full flex-col">
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
          <Image src={project.thumbnail} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>{project.category}</span>
            <span aria-hidden="true">|</span>
            <span>{formatDate(project.date)}</span>
          </div>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink dark:text-white">{project.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tools.slice(0, 4).map((tool) => <TagPill key={tool}>{tool}</TagPill>)}
          </div>
          <div className="mt-5 rounded-lg bg-slate-50 p-3 text-sm dark:bg-slate-950">
            <p className="font-semibold text-slate-800 dark:text-slate-100">Business problem</p>
            <p className="mt-1 text-slate-600 dark:text-slate-300">{project.impact ?? "Improve reporting clarity and decision speed."}</p>
          </div>
          <span className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink transition group-hover:border-slate-300 group-hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:group-hover:bg-slate-800">
            View Case Study <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </article>
    </Link>
  );
}

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
      className="group block h-full overflow-hidden apple-card apple-card-hover focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 dark:focus:ring-offset-slate-950"
    >
      <article className="flex h-full flex-col">
        <div className="apple-image-frame aspect-[16/9]">
          <Image src={project.thumbnail} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>{project.category}</span>
            <span aria-hidden="true">|</span>
            <span>{formatDate(project.date)}</span>
          </div>
          <h3 className="mt-3 text-xl font-semibold text-ink dark:text-white">{project.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tools.slice(0, 4).map((tool) => <TagPill key={tool}>{tool}</TagPill>)}
          </div>
          <div className="mt-5 rounded-lg bg-slate-100/60 p-3 text-sm ring-1 ring-white/70 dark:bg-white/5 dark:ring-white/10">
            <p className="font-semibold text-slate-800 dark:text-slate-100">Business problem</p>
            <p className="mt-1 text-slate-600 dark:text-slate-300">{project.impact ?? "Improve reporting clarity and decision speed."}</p>
          </div>
          <span className="mt-5 inline-flex w-full items-center justify-center gap-2 apple-control px-4 py-2.5 text-sm font-semibold">
            View Case Study <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </article>
    </Link>
  );
}

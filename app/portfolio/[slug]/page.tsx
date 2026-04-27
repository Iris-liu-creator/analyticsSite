import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CommentSection } from "@/components/content/CommentSection";
import { MDXContentRenderer } from "@/components/content/MDXContentRenderer";
import { ReactionBar } from "@/components/content/ReactionBar";
import { RelatedProjects } from "@/components/content/RelatedContent";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PowerBIEmbed } from "@/components/media/PowerBIEmbed";
import { TagPill } from "@/components/ui/TagPill";
import { getAllContent, getContentItem, getRelated, getSlugs, ProjectMeta } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return getSlugs("projects").map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getContentItem<ProjectMeta>("projects", slug);
    return { title: meta.title, description: meta.summary, openGraph: { title: meta.title, description: meta.summary, images: [meta.thumbnail] } };
  } catch {
    return {};
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (!getSlugs("projects").includes(slug)) notFound();
  const project = getContentItem<ProjectMeta>("projects", slug);
  const all = getAllContent<ProjectMeta>("projects");
  const related = getRelated(all, project.meta).map((item) => item.meta);

  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Portfolio", href: "/portfolio" }, { label: project.meta.title }]} />
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-signal">{project.meta.category} • {formatDate(project.meta.date)}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink dark:text-white">{project.meta.title}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{project.meta.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.meta.tools.map((tool) => <TagPill key={tool}>{tool}</TagPill>)}</div>
      </div>
      <div className="relative mb-8 aspect-[16/8] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-800">
        <Image src={project.meta.heroImage ?? project.meta.thumbnail} alt="" fill className="object-cover" priority />
      </div>
      <PowerBIEmbed src={project.meta.embedUrl} title={`${project.meta.title} dashboard`} />
      <MDXContentRenderer source={project.content} />
      <ReactionBar slug={project.meta.slug} />
      <CommentSection />
      <RelatedProjects projects={related} />
    </article>
  );
}

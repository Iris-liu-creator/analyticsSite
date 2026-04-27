import { ArticleMeta, ProjectMeta } from "@/lib/content";
import { PortfolioCard } from "@/components/content/PortfolioCard";
import { PostCard } from "@/components/content/PostCard";

export function RelatedProjects({ projects }: { projects: ProjectMeta[] }) {
  if (!projects.length) return null;
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold tracking-tight text-ink dark:text-white">Related projects</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {projects.map((project) => <PortfolioCard key={project.slug} project={project} />)}
      </div>
    </section>
  );
}

export function RelatedArticles({ articles, basePath }: { articles: ArticleMeta[]; basePath: "/analysis" | "/posts" }) {
  if (!articles.length) return null;
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold tracking-tight text-ink dark:text-white">Related reading</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {articles.map((article) => <PostCard key={article.slug} post={article} basePath={basePath} />)}
      </div>
    </section>
  );
}

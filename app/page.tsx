import { AnalysisCard } from "@/components/content/AnalysisCard";
import { PortfolioCard } from "@/components/content/PortfolioCard";
import { FeaturedCarousel } from "@/components/sections/FeaturedCarousel";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { ServiceCard } from "@/components/content/ServiceCard";
import { Button } from "@/components/ui/Button";
import { servicePillars } from "@/data/services";
import { impactStats } from "@/data/skills";
import { ArticleMeta, getAllContent, ProjectMeta } from "@/lib/content";

export default function HomePage() {
  const projects = getAllContent<ProjectMeta>("projects").map((item) => item.meta);
  const analysis = getAllContent<ArticleMeta>("analysis").map((item) => item.meta);
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
  const featuredAnalysis = analysis.filter((article) => article.featured).slice(0, 3);

  return (
    <>
      <HeroSection />
      <FeaturedCarousel projects={featuredProjects} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {impactStats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-900">
              <p className="text-3xl font-semibold text-ink dark:text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-signal">Portfolio</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink dark:text-white">Featured Case Studies</h2>
          </div>
          <Button href="/portfolio" variant="secondary">View All</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => <PortfolioCard key={project.slug} project={project} />)}
        </div>
      </section>
      <SkillsMatrix />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-signal">Analytics Services</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink dark:text-white">Optional Consulting Support for Business-Ready Analytics</h2>
            <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
              For medium-sized teams that need help clarifying KPIs, building reliable dashboards, automating reporting, or creating a more sustainable analytics operating model.
            </p>
          </div>
          <Button href="/services" variant="secondary">Discuss Your Analytics Needs</Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {servicePillars.map((service) => (
            <ServiceCard key={service.title} service={service} compact />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-signal">Analysis</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink dark:text-white">Featured Analysis</h2>
          </div>
          <Button href="/analysis" variant="secondary">Read Analysis</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredAnalysis.map((article) => <AnalysisCard key={article.slug} analysis={article} />)}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-wide text-signal">About Me</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink dark:text-white">A Business-Minded Analytics Professional.</h2>
          <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
            I build reporting systems that help teams understand performance, spot risk, and make better decisions. My work sits at the intersection of BI engineering, stakeholder communication, RevOps, and practical automation.
          </p>
          <Button href="/about" className="mt-6">Learn More</Button>
        </div>
      </section>
    </>
  );
}

import { FeaturedAnalysisCarousel } from "@/components/sections/FeaturedAnalysisCarousel";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { ServiceCard } from "@/components/content/ServiceCard";
import { Button } from "@/components/ui/Button";
import { calendlyUrl, servicePillars } from "@/data/services";
import { impactStats } from "@/data/skills";
import { ArticleMeta, getAllContent } from "@/lib/content";

export default function HomePage() {
  const analysis = getAllContent<ArticleMeta>("analysis").map((item) => item.meta);
  const featuredAnalysis = analysis.filter((article) => article.featured).slice(0, 5);

  return (
    <>
      <HeroSection />
      <FeaturedAnalysisCarousel articles={featuredAnalysis}>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {impactStats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-900">
              <p className="text-3xl font-semibold text-ink dark:text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </FeaturedAnalysisCarousel>
      <SkillsMatrix />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 grid gap-4 sm:flex sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-signal">Analytics Services</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink dark:text-white">Optional Consulting Support for Business-Ready Analytics</h2>
            <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
              For medium-sized teams that need help clarifying KPIs, building reliable dashboards, automating reporting, or creating a more sustainable analytics operating model.
            </p>
          </div>
          <Button href={calendlyUrl} variant="secondary" className="w-full sm:w-auto">Codesign Your Analytics</Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {servicePillars.map((service) => (
            <ServiceCard key={service.title} service={service} compact />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-wide text-signal">About Me</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink dark:text-white">A Business-Minded Analytics Professional.</h2>
          <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
            I build reporting systems that help teams understand performance, spot risk, and make better decisions. My work sits at the intersection of BI engineering, stakeholder communication, RevOps, and practical automation.
          </p>
          <Button href="/about" className="mt-6 w-full sm:w-auto">Learn More</Button>
        </div>
      </section>
    </>
  );
}

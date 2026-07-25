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
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-4">
          {impactStats.map((stat) => (
            <div key={stat.label} className="apple-card apple-card-hover px-3 py-4 text-center sm:p-6">
              <p className="text-2xl font-semibold text-ink dark:text-white sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300 sm:mt-2 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </FeaturedAnalysisCarousel>
      <SkillsMatrix />
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-14 lg:px-8">
        <div className="mb-4 grid gap-3 sm:mb-6 sm:flex sm:items-end sm:justify-between sm:gap-4">
          <div>
            <p className="apple-label">Analytics Services</p>
            <h2 className="mt-2 text-xl font-semibold leading-7 text-ink dark:text-white sm:text-3xl sm:leading-tight">Optional Consulting Support for Business-Ready Analytics</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:mt-3 sm:text-base">
              For medium-sized teams that need help clarifying KPIs, building reliable dashboards, automating reporting, or creating a more sustainable analytics operating model.
            </p>
          </div>
          <Button href={calendlyUrl} variant="secondary" className="min-h-10 w-full py-2 text-xs sm:min-h-11 sm:w-auto sm:py-2.5 sm:text-sm">Codesign Your Analytics</Button>
        </div>
        <div className="grid gap-3 sm:gap-6 lg:grid-cols-3">
          {servicePillars.map((service) => (
            <ServiceCard key={service.title} service={service} compact />
          ))}
        </div>
      </section>
      <section className="apple-page">
        <div className="apple-material p-8">
          <p className="apple-label">About Me</p>
          <h2 className="mt-2 text-3xl font-semibold text-ink dark:text-white">A Business-Minded Analytics Professional.</h2>
          <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
            I build reporting systems that help teams understand performance, spot risk, and make better decisions. My work sits at the intersection of BI engineering, stakeholder communication, RevOps, and practical automation.
          </p>
          <Button href="/about" className="mt-6 w-full sm:w-auto">Learn More</Button>
        </div>
      </section>
    </>
  );
}

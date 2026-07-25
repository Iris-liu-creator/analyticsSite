import type { Metadata } from "next";
import { ArrowRight, Calendar, ShieldCheck } from "lucide-react";
import { AddOnCard } from "@/components/content/AddOnCard";
import { CTASection } from "@/components/content/CTASection";
import { EngagementDisclaimer } from "@/components/content/EngagementDisclaimer";
import { IndependenceNotice } from "@/components/content/IndependenceNotice";
import { InquiryForm } from "@/components/content/InquiryForm";
import { PackageCard } from "@/components/content/PackageCard";
import { ServiceCard } from "@/components/content/ServiceCard";
import { ToolsCapabilities } from "@/components/content/ToolsCapabilities";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { calendlyUrl, credibilityCards, serviceAddOns, servicePackages, servicePillars } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Optional analytics consulting services for KPI clarification, dashboard development, reporting automation, and analytics enablement."
};

export default function ServicesPage() {
  return (
    <>
      <section className="apple-page lg:py-16">
        <Breadcrumbs items={[{ label: "Services" }]} />
        <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold text-ink dark:text-white sm:text-6xl">
              Analytics Services for Data-Driven Business Teams
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Helping medium-sized companies clarify KPIs, build reliable reporting systems, automate recurring workflows, and turn business data into decision-ready insights.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={calendlyUrl}>
                <Calendar className="h-4 w-4" />
                Discuss Your Analytics Needs
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/analysis" variant="secondary">Read Analysis</Button>
            </div>
          </div>
          <div className="apple-material p-6">
            <p className="apple-label">Engagement style</p>
            <h2 className="mt-2 text-2xl font-semibold text-ink dark:text-white">Built for Clarity, Impact, and Reusuability.</h2>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              Services are shaped around real business decisions, reliable reporting foundations, and smooth handover, so teams leave with systems they can understand, trust, and use.
            </p>
            <div className="mt-6 grid gap-3">
              {["Discovery before scope", "Clear definitions before dashboards", "Documentation and handover built in"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-slate-100/60 px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-white/70 dark:bg-white/5 dark:text-slate-200 dark:ring-white/10">
                  <span className="apple-icon h-8 w-8"><ShieldCheck className="h-4 w-4" /></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="apple-page">
        <div className="mb-8">
          <p className="apple-label">Services overview</p>
          <h2 className="mt-2 text-3xl font-semibold text-ink dark:text-white">Analytics support across setup, measurement, and operations</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {servicePillars.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <ToolsCapabilities />

      <section className="apple-page">
        <div className="mb-8">
          <p className="apple-label">Packages</p>
          <h2 className="mt-2 text-3xl font-semibold text-ink dark:text-white">Choose the level of support that fits the stage of the work</h2>
          <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
            Packages are scoped after discovery so the engagement can match the data complexity, stakeholder needs, and reporting maturity.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {servicePackages.map((pkg, index) => (
            <PackageCard key={pkg.title} pkg={pkg} index={index} />
          ))}
        </div>
      </section>

      <section className="apple-page">
        <div className="mb-8">
          <p className="apple-label">Optional Add-ons & Post-Launch Support</p>
          <h2 className="mt-2 text-3xl font-semibold text-ink dark:text-white">Support after the first launch</h2>
          <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
            After launch, ongoing support can be added depending on the reporting complexity, update frequency, and business needs.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceAddOns.map((addOn) => (
            <AddOnCard key={addOn.title} addOn={addOn} />
          ))}
        </div>
      </section>

      <section className="apple-page">
        <div className="mb-8">
          <p className="apple-label">Trust and credibility</p>
          <h2 className="mt-2 text-3xl font-semibold text-ink dark:text-white">Built for adoption, not just delivery</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {credibilityCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="flex items-center gap-3 apple-card apple-card-hover p-5">
                <span className="apple-icon h-10 w-10">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-ink dark:text-white">{card.title}</h3>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />

      <section className="apple-page">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <div>
            <p className="apple-label">Inquiry</p>
            <h2 className="mt-2 text-3xl font-semibold text-ink dark:text-white">Discuss Your Analytics Needs</h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Share your current reporting challenge, and I’ll help identify the best next step - whether that is KPI clarification, dashboard development, reporting automation, or a broader analytics enablement plan.
            </p>
            <div className="mt-6 grid gap-3">
              <p className="apple-card p-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Client data and business context are handled confidentially and used only for the agreed analytics and reporting scope.
              </p>
              <IndependenceNotice />
            </div>
          </div>
          <div className="grid gap-4">
            <InquiryForm />
            <EngagementDisclaimer />
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { Timeline } from "@/components/sections/Timeline";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description: "Professional summary, skills, services, and working style for a data analytics and BI professional."
};

export default function AboutPage() {
  const services = [
    "BI dashboard development",
    "Data analytics and reporting automation",
    "KPI design and executive reporting",
    "CRM and RevOps analytics",
    "Data storytelling",
    "AI-enabled analytics workflows"
  ];

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About" }]} />
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-ink dark:text-white">I build analytics experiences that business teams can trust.</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              This placeholder profile is written for a data analytics, BI, RevOps, and AI-enabled reporting professional. Replace it with your actual career story, industry context, achievements, and preferred contact details.
            </p>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              My work style is practical and stakeholder-centered: clarify decisions, define metrics, model data carefully, and design reports that reduce ambiguity. I value maintainable systems as much as polished visuals.
            </p>
            <Button href="/resume/resume.pdf" className="mt-6">Download resume</Button>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-semibold text-ink dark:text-white">Services</h2>
            <div className="mt-4 grid gap-3">
              {services.map((service) => (
                <div key={service} className="rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 dark:bg-slate-950 dark:text-slate-200">{service}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SkillsMatrix />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-signal">Career story</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink dark:text-white">From reporting requests to analytics systems.</h2>
          </div>
          <Timeline />
        </div>
      </section>
    </>
  );
}

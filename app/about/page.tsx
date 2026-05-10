import type { Metadata } from "next";
import { BarChart3, Bot, DatabaseZap, GitBranch, LineChart, Network } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { Timeline } from "@/components/sections/Timeline";

export const metadata: Metadata = {
  title: "About",
  description: "Professional summary, skills, services, and working style for a data analytics and BI professional."
};

export default function AboutPage() {
  const services = [
    {
      title: "Build decision-ready BI dashboards",
      description: "Well designed dashboards that help teams monitor performance, identify risks, and act faster",
      icon: BarChart3
    },
    {
      title: "End-to-End Reporting Workflow",
      description: "Reduce manual reporting effort and create reusable, reliable, and scalable reporting processes.",
      icon: GitBranch
    },
    {
      title: "Define KPIs and metric frameworks",
      description: "Turn business goals into measurable, consistent, and trusted performance indicators",
      icon: LineChart
    },
    {
      title: "Connect CRM, Finance, PS/CX, and operational data",
      description: "Bring siloed business data together to create clearer visibility across teams",
      icon: Network
    },
    {
      title: "Translate data into business narrative in various context",
      description: "Communicate insights in fashion that supports decisions",
      icon: DatabaseZap
    },
    {
      title: "Enable AI-assisted analytics workflows",
      description: "Explore practical, secured, cost-friendly ways to improve reporting and insight generation with AI.",
      icon: Bot
    }
  ];

  const principles = [
    "Business questions before dashboard design",
    "Metric clarity before visual polish",
    "Scalable workflows before one-off reports"
  ];

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About" }]} />
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-signal">Professional Summary</p>
              <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-ink dark:text-white sm:text-5xl">
                Analytics experiences that business teams can trust.
              </h1>
              <p className="mt-6 max-w-3xl text-xl font-medium leading-9 text-slate-700 dark:text-slate-200">
                I design BI and reporting solutions that turn complex business data into clear, reliable, and decision-ready insights. My work helps teams move beyond manual reporting, siloed systems, and fragmented metrics toward consistent performance visibility, clearer accountability, and faster operational decisions.
              </p>
            </div>
            <aside className="lg:pt-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-signal">My Approach to Trusted Analytics</p>
              <div className="mt-5 grid gap-3">
                {principles.map((principle, index) => (
                  <div key={principle} className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">0{index + 1}</p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-ink dark:text-white">{principle}</p>
                  </div>
                ))}
              </div>
            </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-7 max-w-5xl">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-signal">Capabilities</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink dark:text-white">Where I Add Value</h2>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Practical analytics support across dashboard delivery, metric design, automation, data integration, and AI-enabled reporting workflows.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article key={service.title} className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-100 hover:bg-blue-50/50 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-900">
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-blue-50 text-signal shadow-sm dark:bg-blue-950">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold leading-6 text-ink dark:text-white">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <SkillsMatrix />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-signal">Analytics Journey</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink dark:text-white">From ad hoc reporting to trusted analytics systems.</h2>
          </div>
          <Timeline />
        </div>
      </section>
    </>
  );
}

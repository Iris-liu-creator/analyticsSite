import { ArrowRight, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
      <div>
        <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-200">
          Data Analytics | BI Reporting | RevOps Insights | AI-enabled Business Intelligence
        </p>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-ink dark:text-white sm:text-6xl">
          Turning business data into trusted decisions, clean reporting, and useful automation.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          A professional portfolio for dashboards, analytics case studies, business intelligence systems, and practical AI workflows.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/portfolio">View Portfolio <ArrowRight className="h-4 w-4" /></Button>
          <Button href="/analysis" variant="secondary">Read Analysis</Button>
          <Button href="/contact" variant="ghost">Contact Me</Button>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Executive BI cockpit</p>
            <h2 className="mt-1 text-xl font-semibold text-ink dark:text-white">Revenue and operations health</h2>
          </div>
          <BarChart3 className="h-8 w-8 text-signal" />
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          {[
            ["Pipeline", "$4.8M", "12% up"],
            ["Forecast accuracy", "91%", "6 pts up"],
            ["Manual hours saved", "240", "quarterly"],
            ["Active dashboards", "32", "maintained"]
          ].map(([label, value, detail]) => (
            <div key={label} className="rounded-lg bg-slate-50 p-4 dark:bg-slate-950">
              <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
              <p className="mt-2 text-2xl font-semibold text-ink dark:text-white">{value}</p>
              <p className="mt-1 text-xs font-medium text-mint">{detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 h-28 rounded-lg bg-[linear-gradient(135deg,#dbeafe_0%,#ccfbf1_45%,#fef3c7_100%)] p-4 dark:bg-[linear-gradient(135deg,#1e3a8a_0%,#115e59_55%,#78350f_100%)]">
          <div className="grid h-full grid-cols-12 items-end gap-2">
            {[35, 48, 40, 65, 52, 74, 68, 82, 76, 88, 80, 92].map((height, index) => (
              <span key={index} className="rounded-t bg-white/85 dark:bg-white/70" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

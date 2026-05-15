import { ArrowRight, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroMetricValue } from "@/components/sections/HeroMetricValue";
import { calendlyUrl } from "@/data/services";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
      <div>
        <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold leading-5 text-blue-700 dark:bg-blue-950 dark:text-blue-200 sm:text-sm">
          Data Analytics | BI Reporting | RevOps Insights | AI-enabled Business Intelligence
        </p>
        <h1 className="mt-6 max-w-4xl text-[2rem] font-semibold leading-[1.12] tracking-tight text-ink dark:text-white sm:text-6xl sm:leading-none">
          Turning business data into trusted decisions, clean reporting, and useful automation.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
          A professional portfolio for dashboards, analytics case studies, business intelligence systems, and practical AI workflows.
        </p>
        <div className="mt-8 grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:gap-3">
          <Button href="/analysis" className="col-span-2 w-full px-2 text-xs sm:col-span-1 sm:w-auto sm:px-4 sm:text-sm">
            Explore Analysis <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/services" variant="secondary" className="col-span-1 w-full px-2 text-xs sm:w-auto sm:px-4 sm:text-sm">Services</Button>
          <Button href={calendlyUrl} variant="ghost" className="col-span-1 w-full px-2 text-xs sm:w-auto sm:px-4 sm:text-sm">Contact</Button>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Executive BI cockpit</p>
            <h2 className="mt-1 text-xl font-semibold text-ink dark:text-white">Analytics Delivery at a Glance</h2>
          </div>
          <BarChart3 className="h-8 w-8 text-signal" />
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          {[
            { label: "Reports Delivered", start: 66, end: 100, suffix: "+", trendPrefix: "▲", trendStart: 3, trendEnd: 12, trendSuffix: "% QoQ" },
            { label: "Monthly Hours Reduced", start: 280, end: 360, suffix: "+", trendPrefix: "▲", trendStart: 5, trendEnd: 18, trendSuffix: "% QoQ", trendEndSuffix: "% MoM" },
            { label: "Business Functions Supported", start: 3, end: 6, detail: "+1 team/function YoY" },
            { label: "Typical Response Time", start: 4, end: 2, prefix: "<", suffix: " Hours", trendPrefix: "▼", trendStart: 2, trendEnd: 25, trendSuffix: "% MoM" }
          ].map((metric) => (
            <div key={metric.label} className="rounded-lg bg-slate-50 p-4 dark:bg-slate-950">
              <p className="text-sm text-slate-500 dark:text-slate-400">{metric.label}</p>
              <p className="mt-2 text-2xl font-semibold text-ink dark:text-white">
                <HeroMetricValue start={metric.start} end={metric.end} prefix={metric.prefix} suffix={metric.suffix} />
              </p>
              {metric.trendStart ? (
                <p className="mt-1 text-xs font-medium text-mint">
                  <HeroMetricValue
                    start={metric.trendStart}
                    end={metric.trendEnd}
                    prefix={metric.trendPrefix}
                    suffix={metric.trendSuffix}
                    endSuffix={metric.trendEndSuffix}
                    className="inline-block min-w-[4.5rem] tabular-nums"
                  />
                </p>
              ) : metric.detail ? (
                <p className="mt-1 text-xs font-medium text-mint">{metric.detail}</p>
              ) : (
                <p className="mt-1 text-xs font-medium text-mint">&nbsp;</p>
              )}
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

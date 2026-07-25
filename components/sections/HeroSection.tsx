import { ArrowRight, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroMetricValue } from "@/components/sections/HeroMetricValue";
import { calendlyUrl } from "@/data/services";

export function HeroSection() {
  return (
    <section className="apple-page grid gap-10 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
      <div>
        <p className="inline-flex rounded-full border border-slate-200/70 bg-white/72 px-3 py-1 text-xs font-semibold leading-5 text-signal shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-blue-200 sm:text-sm">
          Data Analytics | BI Reporting | RevOps Insights | AI-enabled Business Intelligence
        </p>
        <h1 className="mt-6 max-w-4xl text-[2.5rem] font-semibold leading-[1.05] text-ink dark:text-white sm:text-6xl sm:leading-[1.02]">
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
      <div className="apple-material relative overflow-hidden p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Executive BI cockpit</p>
            <h2 className="mt-1 text-xl font-semibold text-ink dark:text-white">Analytics Delivery at a Glance</h2>
          </div>
          <span className="apple-icon h-12 w-12"><BarChart3 className="h-7 w-7" /></span>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          {[
            { label: "Reports Delivered", start: 66, end: 100, suffix: "+", trendPrefix: "▲", trendStart: 3, trendEnd: 12, trendSuffix: "% QoQ" },
            { label: "Monthly Hours Reduced", start: 280, end: 360, suffix: "+", trendPrefix: "▲", trendStart: 5, trendEnd: 18, trendSuffix: "% QoQ", trendEndSuffix: "% MoM" },
            { label: "Business Functions Supported", start: 3, end: 6, detail: "+1 team/function YoY" },
            { label: "Typical Response Time", start: 4, end: 2, prefix: "<", suffix: " Hours", trendPrefix: "▼", trendStart: 2, trendEnd: 25, trendSuffix: "% MoM" }
          ].map((metric) => (
            <div key={metric.label} className="rounded-lg bg-slate-100/60 p-4 ring-1 ring-white/70 backdrop-blur-xl transition duration-150 ease-out hover:bg-white/72 active:scale-[0.99] dark:bg-white/5 dark:ring-white/10 dark:hover:bg-white/10">
              <p className="text-sm text-slate-500 dark:text-slate-400">{metric.label}</p>
              <p className="mt-2 text-2xl font-semibold text-ink dark:text-white">
                <HeroMetricValue start={metric.start} end={metric.end} prefix={metric.prefix} suffix={metric.suffix} />
              </p>
              {metric.trendStart ? (
                <p className="mt-1 text-xs font-semibold text-mint">
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
                <p className="mt-1 text-xs font-semibold text-mint">{metric.detail}</p>
              ) : (
                <p className="mt-1 text-xs font-semibold text-mint">&nbsp;</p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 h-28 rounded-lg bg-[linear-gradient(135deg,#e8f2ff_0%,#e7f8f5_52%,#fff8d7_100%)] p-4 ring-1 ring-white/70 dark:bg-[linear-gradient(135deg,#102a4c_0%,#0f3f3b_55%,#3b2f0d_100%)] dark:ring-white/10">
          <div className="grid h-full grid-cols-12 items-end gap-2">
            {[35, 48, 40, 65, 52, 74, 68, 82, 76, 88, 80, 92].map((height, index) => (
              <span key={index} className="rounded-t bg-white/90 shadow-[0_1px_10px_rgba(255,255,255,0.28)] dark:bg-white/72" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

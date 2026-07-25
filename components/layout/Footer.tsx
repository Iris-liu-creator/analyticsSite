import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-8 bg-white/70 shadow-[0_-1px_0_rgba(0,0,0,0.06)] backdrop-blur-2xl dark:bg-slate-950/70 dark:shadow-[0_-1px_0_rgba(255,255,255,0.08)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-ink dark:text-white">Data Analytics | BI Reporting | AI-enabled BI</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
            An independent professional analytics portfolio showcasing BI dashboards, case studies, reporting end-to-end solutions, and data-driven business insights.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
          <Link aria-label="LinkedIn" className="apple-control p-2 text-slate-600 hover:text-signal dark:text-slate-300" href="https://www.linkedin.com/"><Linkedin className="h-5 w-5" /></Link>
          <Link aria-label="GitHub" className="apple-control p-2 text-slate-600 hover:text-signal dark:text-slate-300" href="https://github.com/"><Github className="h-5 w-5" /></Link>
          <Link aria-label="Email" className="apple-control p-2 text-slate-600 hover:text-signal dark:text-slate-300" href="mailto:irisinsightsops888@gmail.com"><Mail className="h-5 w-5" /></Link>
        </div>
      </div>
    </footer>
  );
}

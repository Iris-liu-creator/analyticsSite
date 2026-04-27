import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-ink dark:text-white">Data Analytics | BI Reporting | AI-enabled BI</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
            A GitHub-first portfolio for business intelligence, analytics case studies, dashboards, and data storytelling.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 md:justify-end">
          <Link aria-label="LinkedIn" className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:text-signal dark:border-slate-700 dark:text-slate-300" href="https://www.linkedin.com/"><Linkedin className="h-5 w-5" /></Link>
          <Link aria-label="GitHub" className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:text-signal dark:border-slate-700 dark:text-slate-300" href="https://github.com/"><Github className="h-5 w-5" /></Link>
          <Link aria-label="Email" className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:text-signal dark:border-slate-700 dark:text-slate-300" href="mailto:hello@example.com"><Mail className="h-5 w-5" /></Link>
          <Link className="text-sm font-medium text-slate-600 hover:text-signal dark:text-slate-300" href="/content-guide">Content guide</Link>
        </div>
      </div>
    </footer>
  );
}

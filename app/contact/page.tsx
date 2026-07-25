import type { Metadata } from "next";
import { Calendar, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/content/ContactForm";
import { EngagementDisclaimer } from "@/components/content/EngagementDisclaimer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { calendlyUrl } from "@/data/services";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact form and professional links."
};

export default function ContactPage() {
  return (
    <section className="apple-page-narrow">
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <h1 className="text-4xl font-semibold text-ink dark:text-white">Let&apos;s chat about reporting, analytics, and the future BI.</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Use the form for project enquiries, dashboard reviews, or analytics support & collaboration.
          </p>
          <div className="mt-8 grid gap-3">
            <Link href={calendlyUrl} className="flex items-center gap-3 apple-card apple-card-hover p-4 text-sm font-medium text-slate-700 hover:text-signal dark:text-slate-200"><span className="apple-icon h-10 w-10"><Calendar className="h-5 w-5" /></span> Book a Discovery Call</Link>
            <Link href="mailto:irisinsightsops888@gmail.com" className="flex items-center gap-3 apple-card apple-card-hover p-4 text-sm font-medium text-slate-700 hover:text-signal dark:text-slate-200"><span className="apple-icon h-10 w-10"><Mail className="h-5 w-5" /></span> Email</Link>
            <Link href="https://www.linkedin.com/in/liu-iris-irish/" className="flex items-center gap-3 apple-card apple-card-hover p-4 text-sm font-medium text-slate-700 hover:text-signal dark:text-slate-200"><span className="apple-icon h-10 w-10"><Linkedin className="h-5 w-5" /></span> LinkedIn</Link>
            <Link href="https://github.com/Iris-liu-creator/" className="flex items-center gap-3 apple-card apple-card-hover p-4 text-sm font-medium text-slate-700 hover:text-signal dark:text-slate-200"><span className="apple-icon h-10 w-10"><Github className="h-5 w-5" /></span> GitHub</Link>
          </div>
        </div>
        <div className="grid gap-4">
          <ContactForm />
          <EngagementDisclaimer />
        </div>
      </div>
    </section>
  );
}

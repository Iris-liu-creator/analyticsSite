import type { Metadata } from "next";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/content/ContactForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact form and professional links."
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-ink dark:text-white">Let&apos;s talk about reporting, analytics, and useful BI.</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Use the form for project enquiries, hiring conversations, dashboard reviews, or analytics collaboration.
          </p>
          <div className="mt-8 grid gap-3">
            <Link href="irisinsightsops888@gmail.com" className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 hover:text-signal dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"><Mail className="h-5 w-5" /> hello@example.com</Link>
            <Link href="https://www.linkedin.com/in/liu-iris-irish/" className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 hover:text-signal dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"><Linkedin className="h-5 w-5" /> LinkedIn</Link>
            <Link href="https://github.com/Iris-liu-creator/" className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 hover:text-signal dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"><Github className="h-5 w-5" /> GitHub</Link>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

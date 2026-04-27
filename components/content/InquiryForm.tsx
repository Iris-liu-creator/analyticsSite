"use client";

import { Calendar, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { budgetRanges, calendlyUrl, timelineOptions } from "@/data/services";
import { Button } from "@/components/ui/Button";

type InquiryFormState = {
  name: string;
  companyEmail: string;
  companyName: string;
  currentChallenge: string;
  budgetRange: string;
  preferredTimeline: string;
  requestDemo: boolean;
};

const initialState: InquiryFormState = {
  name: "",
  companyEmail: "",
  companyName: "",
  currentChallenge: "",
  budgetRange: "",
  preferredTimeline: "",
  requestDemo: false
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function InquiryForm() {
  const [form, setForm] = useState(initialState);
  const [emailError, setEmailError] = useState("");
  const [sent, setSent] = useState(false);

  function update<K extends keyof InquiryFormState>(key: K, value: InquiryFormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    if (key === "companyEmail") setEmailError("");
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValidEmail(form.companyEmail)) {
      setEmailError("Enter a valid company email address.");
      return;
    }

    setSent(true);
  }

  return (
    <form
      name="services-inquiry"
      method="POST"
      data-netlify="true"
      onSubmit={submit}
      className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <input type="hidden" name="form-name" value="services-inquiry" />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
          Name
          <input
            required
            name="name"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            className="h-11 rounded-lg border border-slate-200 bg-white px-3 dark:border-slate-700 dark:bg-slate-950"
          />
        </label>
        <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
          Company Email
          <input
            required
            type="email"
            name="companyEmail"
            placeholder="name@company.com"
            value={form.companyEmail}
            onChange={(event) => update("companyEmail", event.target.value)}
            aria-invalid={Boolean(emailError)}
            className="h-11 rounded-lg border border-slate-200 bg-white px-3 dark:border-slate-700 dark:bg-slate-950"
          />
          {emailError ? <span className="text-xs font-medium text-red-600">{emailError}</span> : null}
        </label>
        <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
          Company Name
          <input
            required
            name="companyName"
            value={form.companyName}
            onChange={(event) => update("companyName", event.target.value)}
            className="h-11 rounded-lg border border-slate-200 bg-white px-3 dark:border-slate-700 dark:bg-slate-950"
          />
        </label>
        <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
          Budget Range
          <select
            name="budgetRange"
            value={form.budgetRange}
            onChange={(event) => update("budgetRange", event.target.value)}
            className="h-11 rounded-lg border border-slate-200 bg-white px-3 dark:border-slate-700 dark:bg-slate-950"
          >
            <option value="">Select an option</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200 md:col-span-2">
          Current Challenge
          <textarea
            required
            name="currentChallenge"
            rows={5}
            value={form.currentChallenge}
            onChange={(event) => update("currentChallenge", event.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950"
          />
        </label>
        <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
          Preferred Timeline
          <select
            name="preferredTimeline"
            value={form.preferredTimeline}
            onChange={(event) => update("preferredTimeline", event.target.value)}
            className="h-11 rounded-lg border border-slate-200 bg-white px-3 dark:border-slate-700 dark:bg-slate-950"
          >
            <option value="">Select an option</option>
            {timelineOptions.map((timeline) => (
              <option key={timeline} value={timeline}>{timeline}</option>
            ))}
          </select>
        </label>
        <label className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 md:col-span-2">
          <input
            type="checkbox"
            name="requestDemo"
            checked={form.requestDemo}
            onChange={(event) => update("requestDemo", event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-signal"
          />
          <span>I would like to request a demo or examples of similar work</span>
        </label>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Button type="submit">
          Send inquiry
          <Send className="h-4 w-4" />
        </Button>
        {sent ? (
          <Button href={calendlyUrl} variant="secondary">
            <Calendar className="h-4 w-4" />
            Book a Discovery Call
          </Button>
        ) : null}
      </div>
      {sent ? (
        <p className="mt-4 rounded-lg bg-teal-50 p-4 text-sm font-medium text-teal-800 dark:bg-teal-950 dark:text-teal-100">
          Thanks — your inquiry has been captured. Please book a time via Calendly to discuss next steps.
        </p>
      ) : null}
    </form>
  );
}

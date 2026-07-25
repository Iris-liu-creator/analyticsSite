"use client";

import { Calendar, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { calendlyUrl } from "@/data/services";
import { submitNetlifyForm } from "@/lib/netlifyForms";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;

    try {
      setError("");
      await submitNetlifyForm(new FormData(formElement));
      setSent(true);
      formElement.reset();
    } catch {
      setError("Something went wrong while sending your message. Please try again or email directly.");
    }
  }

  return (
    <form
      name="contact"
      method="POST"
      onSubmit={submit}
      className="apple-card p-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid gap-4">
        <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
          Name
          <input required name="name" className="h-11 rounded-lg border border-slate-200/70 bg-white/80 px-3 outline-none backdrop-blur-xl transition focus:border-signal focus:ring-2 focus:ring-blue-100 dark:border-white/10 dark:bg-white/10" />
        </label>
        <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
          Work Email
          <input required type="email" name="workEmail" className="h-11 rounded-lg border border-slate-200/70 bg-white/80 px-3 outline-none backdrop-blur-xl transition focus:border-signal focus:ring-2 focus:ring-blue-100 dark:border-white/10 dark:bg-white/10" />
        </label>
        <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
          Company/Organisation
          <input required name="companyOrganisation" className="h-11 rounded-lg border border-slate-200/70 bg-white/80 px-3 outline-none backdrop-blur-xl transition focus:border-signal focus:ring-2 focus:ring-blue-100 dark:border-white/10 dark:bg-white/10" />
        </label>
        <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
          Topic of discussion
          <select required name="topic" defaultValue="" className="h-11 rounded-lg border border-slate-200/70 bg-white/80 px-3 outline-none backdrop-blur-xl transition focus:border-signal focus:ring-2 focus:ring-blue-100 dark:border-white/10 dark:bg-white/10">
            <option value="" disabled>Select a topic</option>
            <option>Analytics support / Service package enquiry</option>
            <option>BI consultation</option>
            <option>Analytics collaboration</option>
            <option>Project evaluation &amp; discussion</option>
            <option>Data pipeline design &amp; setup support</option>
            <option>Others, detail below</option>
          </select>
        </label>
        <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
          Message
          <textarea
            name="message"
            rows={5}
            placeholder="Briefly discribe your reporting challenge, current setup, or project goal."
            className="rounded-lg border border-slate-200/70 bg-white/80 px-3 py-2 outline-none backdrop-blur-xl transition focus:border-signal focus:ring-2 focus:ring-blue-100 dark:border-white/10 dark:bg-white/10"
          />
        </label>
        <Button type="submit">Start the Conversation <Send className="h-4 w-4" /></Button>
        {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
        {sent ? (
          <div className="rounded-lg bg-teal-50 p-4 text-sm font-medium text-teal-800 dark:bg-teal-950 dark:text-teal-100">
            <p>Thanks. Your message has been captured. Please book a time via Calendly to discuss next steps.</p>
            <Button href={calendlyUrl} variant="secondary" className="mt-3">
              <Calendar className="h-4 w-4" />
              Book a Discovery Call
            </Button>
          </div>
        ) : null}
      </div>
    </form>
  );
}

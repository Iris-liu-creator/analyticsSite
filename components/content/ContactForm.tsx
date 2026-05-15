"use client";

import { Calendar, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { calendlyUrl } from "@/data/services";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid gap-4">
        <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
          Name
          <input required name="name" className="h-11 rounded-lg border border-slate-200 bg-white px-3 dark:border-slate-700 dark:bg-slate-950" />
        </label>
        <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
          Work Email
          <input required type="email" name="workEmail" className="h-11 rounded-lg border border-slate-200 bg-white px-3 dark:border-slate-700 dark:bg-slate-950" />
        </label>
        <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
          Company/Organisation
          <input required name="companyOrganisation" className="h-11 rounded-lg border border-slate-200 bg-white px-3 dark:border-slate-700 dark:bg-slate-950" />
        </label>
        <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
          Topic of discussion
          <select required name="topic" defaultValue="" className="h-11 rounded-lg border border-slate-200 bg-white px-3 dark:border-slate-700 dark:bg-slate-950">
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
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950"
          />
        </label>
        <Button type="submit">Start the Conversation <Send className="h-4 w-4" /></Button>
        {sent ? (
          <div className="rounded-lg bg-teal-50 p-4 text-sm font-medium text-teal-800 dark:bg-teal-950 dark:text-teal-100">
            <p>Thanks. This demo form is ready for Netlify Forms, Formspree, or a future API route.</p>
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

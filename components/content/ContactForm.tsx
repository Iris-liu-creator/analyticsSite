"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

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
          Email
          <input required type="email" name="email" className="h-11 rounded-lg border border-slate-200 bg-white px-3 dark:border-slate-700 dark:bg-slate-950" />
        </label>
        <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
          Message
          <textarea required name="message" rows={5} className="rounded-lg border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950" />
        </label>
        <Button type="submit">Send message <Send className="h-4 w-4" /></Button>
        {sent ? <p className="text-sm text-mint">Thanks. This demo form is ready for Netlify Forms, Formspree, or a future API route.</p> : null}
      </div>
    </form>
  );
}

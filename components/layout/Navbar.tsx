"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/Button";

const nav = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/analysis", label: "Analysis" },
  { href: "/posts", label: "Posts" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3 font-semibold text-ink dark:text-white">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-sm text-white dark:bg-white dark:text-ink">BI</span>
          <span className="hidden sm:inline">Iris Analytics Intelligence</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-ink dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
          <Button href="/resume/resume.pdf" variant="secondary">Resume</Button>
        </div>
        <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white md:hidden dark:border-slate-700 dark:bg-slate-900" aria-label="Open menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="grid gap-1">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <ThemeToggle />
              <Button href="/resume/resume.pdf" variant="secondary" className="flex-1">Resume</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

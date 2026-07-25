"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/analysis", label: "Analysis" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/72 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-2xl backdrop-saturate-150 dark:bg-slate-950/72 dark:shadow-[0_1px_0_rgba(255,255,255,0.08)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="group flex items-center gap-3 font-semibold text-ink dark:text-white" aria-label="Iris Analytics Intelligence home">
          <span className="apple-icon h-10 w-10 transition duration-150 ease-out group-hover:-translate-y-0.5 group-active:scale-[0.98]"><span className="text-[0.72rem] font-semibold leading-none text-signal dark:text-blue-200">IA</span></span>
          <span className="hidden text-sm font-semibold leading-none sm:inline">Iris Analytics Intelligence</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition duration-150 ease-out hover:bg-white/70 hover:text-ink active:scale-[0.98] dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white">
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center apple-control"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="bg-white/80 px-4 py-3 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-2xl md:hidden dark:bg-slate-950/80 dark:shadow-[0_1px_0_rgba(255,255,255,0.08)]">
          <div className="grid gap-1">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-white/70 active:scale-[0.98] dark:text-slate-200 dark:hover:bg-white/10">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

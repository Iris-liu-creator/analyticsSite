"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { ProjectMeta } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { TagPill } from "@/components/ui/TagPill";

export function FeaturedCarousel({ projects }: { projects: ProjectMeta[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = projects[index];

  useEffect(() => {
    if (paused || projects.length < 2) return;
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % projects.length), 4500);
    return () => window.clearInterval(timer);
  }, [paused, projects.length]);

  if (!current) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-signal">Featured work</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink dark:text-white">Portfolio highlights</h2>
        </div>
        <div className="flex gap-2">
          <button aria-label="Previous project" className="rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-900" onClick={() => setIndex((value) => (value - 1 + projects.length) % projects.length)}><ChevronLeft className="h-5 w-5" /></button>
          <button aria-label={paused ? "Play carousel" : "Pause carousel"} className="rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-900" onClick={() => setPaused((value) => !value)}>{paused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}</button>
          <button aria-label="Next project" className="rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-900" onClick={() => setIndex((value) => (value + 1) % projects.length)}><ChevronRight className="h-5 w-5" /></button>
        </div>
      </div>
      <div className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-2">
        <div className="relative min-h-72">
          <Image src={current.thumbnail} alt="" fill className="object-cover" priority sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            {current.tools.slice(0, 5).map((tool) => <TagPill key={tool}>{tool}</TagPill>)}
          </div>
          <h3 className="mt-5 text-3xl font-semibold tracking-tight text-ink dark:text-white">{current.title}</h3>
          <p className="mt-4 text-slate-600 dark:text-slate-300">{current.summary}</p>
          <p className="mt-4 rounded-lg bg-slate-50 p-4 text-sm font-medium text-slate-700 dark:bg-slate-950 dark:text-slate-200">{current.impact}</p>
          <Button href={`/portfolio/${current.slug}`} className="mt-6">View Case Study</Button>
        </div>
      </div>
    </section>
  );
}

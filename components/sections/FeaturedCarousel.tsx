"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { ProjectMeta } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { TagPill } from "@/components/ui/TagPill";
import { cn } from "@/lib/utils";

function getLoopedIndex(index: number, length: number) {
  return (index + length) % length;
}

export function FeaturedCarousel({ projects }: { projects: ProjectMeta[] }) {
  const [trackIndex, setTrackIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const [paused, setPaused] = useState(false);
  const realIndex = projects.length ? getLoopedIndex(trackIndex - 1, projects.length) : 0;
  const current = projects[realIndex];

  useEffect(() => {
    if (paused || projects.length < 2) return;
    const timer = window.setInterval(() => {
      setWithTransition(true);
      setTrackIndex((value) => value + 1);
    }, 3800);
    return () => window.clearInterval(timer);
  }, [paused, projects.length]);

  if (!current) return null;

  const trackProjects = projects.length > 1 ? [projects[projects.length - 1], ...projects, projects[0]] : projects;
  const trackStyle = {
    "--track-index": trackIndex,
    "--carousel-slot": "clamp(320px, 36vw, 430px)"
  } as CSSProperties;

  function move(direction: 1 | -1) {
    if (projects.length < 2) return;
    setWithTransition(true);
    setTrackIndex((value) => value + direction);
  }

  function snapInfiniteLoop() {
    if (projects.length < 2) return;
    if (trackIndex === projects.length + 1) {
      setWithTransition(false);
      setTrackIndex(1);
      requestAnimationFrame(() => requestAnimationFrame(() => setWithTransition(true)));
    }
    if (trackIndex === 0) {
      setWithTransition(false);
      setTrackIndex(projects.length);
      requestAnimationFrame(() => requestAnimationFrame(() => setWithTransition(true)));
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-signal">Featured work</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink dark:text-white">Portfolio highlights</h2>
        </div>
        <Button href="/portfolio" variant="secondary">View all</Button>
      </div>

      <div className="relative overflow-x-hidden overflow-y-visible rounded-lg bg-slate-100 px-3 py-8 dark:bg-slate-950 sm:px-8 lg:px-12">
        <div className="relative mx-auto h-[560px] max-w-6xl sm:h-[530px] lg:h-[510px]">
          <div
            className={cn(
              "absolute left-1/2 top-1/2 flex w-max -translate-y-1/2",
              withTransition && "transition-transform duration-700 ease-out"
            )}
            style={{
              ...trackStyle,
              transform: "translateX(calc(-1 * var(--track-index) * var(--carousel-slot) - (var(--carousel-slot) / 2))) translateY(-50%)"
            }}
            onTransitionEnd={snapInfiniteLoop}
          >
            {trackProjects.map((project, slideIndex) => {
              const isActive = slideIndex === trackIndex;

              return (
                <div
                  key={`${project.slug}-${slideIndex}`}
                  className="flex w-[var(--carousel-slot)] shrink-0 items-center justify-center px-3"
                >
                  <article
                    className={cn(
                      "overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft transition-all duration-700 ease-out dark:border-slate-800 dark:bg-slate-900",
                      isActive
                        ? "z-20 w-[min(92vw,560px)] scale-100 opacity-100"
                        : "z-10 hidden w-[min(76vw,330px)] scale-90 opacity-70 blur-[0.2px] sm:block"
                    )}
                    aria-hidden={!isActive}
                  >
                    <div className={cn("relative bg-slate-200", isActive ? "h-52 sm:h-56" : "h-40")}>
                      <Image
                        src={project.thumbnail}
                        alt=""
                        fill
                        className="object-cover"
                        priority={isActive}
                        sizes={isActive ? "(min-width: 1024px) 560px, 92vw" : "(min-width: 1024px) 330px, 0vw"}
                      />
                      {!isActive ? <div className="absolute inset-0 bg-white/35 dark:bg-slate-950/35" /> : null}
                    </div>
                    <div className={cn(isActive ? "p-5" : "p-4")}>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.slice(0, isActive ? 4 : 2).map((tool) => (
                          <TagPill key={tool}>{tool}</TagPill>
                        ))}
                      </div>
                      <h3 className={cn("mt-3 font-semibold tracking-tight text-ink dark:text-white", isActive ? "text-2xl" : "line-clamp-2 text-lg")}>
                        {project.title}
                      </h3>
                      <p className={cn("mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300", isActive ? "line-clamp-2" : "line-clamp-2")}>
                        {project.summary}
                      </p>
                      {isActive ? (
                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                          <p className="max-w-sm rounded-lg bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 dark:bg-slate-950 dark:text-slate-200">{project.impact}</p>
                          <Button href={`/portfolio/${project.slug}`}>
                            View Case Study <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : null}
                    </div>
                  </article>
                </div>
              );
            })}
          </div>

          {projects.length > 1 ? (
            <>
              <button
                aria-label="Previous project"
                className="absolute left-2 top-[38%] z-30 grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-ink shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 sm:left-[19%]"
                onClick={() => move(-1)}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next project"
                className="absolute right-2 top-[38%] z-30 grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-ink shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 sm:right-[19%]"
                onClick={() => move(1)}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          ) : null}
        </div>

        <div className="mt-3 flex justify-center gap-2">
          {projects.map((project, dotIndex) => (
            <button
              key={project.slug}
              type="button"
              aria-label={`Show ${project.title}`}
              onClick={() => {
                setWithTransition(true);
                setTrackIndex(dotIndex + 1);
              }}
              className={cn(
                "h-2.5 rounded-full transition-all",
                dotIndex === realIndex ? "w-8 bg-signal" : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

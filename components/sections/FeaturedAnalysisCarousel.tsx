"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import type { ArticleMeta } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { TagPill } from "@/components/ui/TagPill";
import { cn, formatDate } from "@/lib/utils";

function getLoopedIndex(index: number, length: number) {
  return (index + length) % length;
}

export function FeaturedAnalysisCarousel({ articles, children }: { articles: ArticleMeta[]; children?: ReactNode }) {
  const [trackIndex, setTrackIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const [paused, setPaused] = useState(false);
  const realIndex = articles.length ? getLoopedIndex(trackIndex - 1, articles.length) : 0;
  const current = articles[realIndex];

  useEffect(() => {
    if (paused || articles.length < 2) return;
    const timer = window.setInterval(() => {
      setWithTransition(true);
      setTrackIndex((value) => value + 1);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [paused, articles.length]);

  if (!current) return null;

  const trackArticles = articles.length > 1 ? [articles[articles.length - 1], ...articles, articles[0]] : articles;
  const trackStyle = {
    "--track-index": trackIndex,
    "--carousel-slot": "clamp(292px, 82vw, 430px)"
  } as CSSProperties;

  function move(direction: 1 | -1) {
    if (articles.length < 2) return;
    setWithTransition(true);
    setTrackIndex((value) => value + direction);
  }

  function snapInfiniteLoop() {
    if (articles.length < 2) return;
    if (trackIndex === articles.length + 1) {
      setWithTransition(false);
      setTrackIndex(1);
      requestAnimationFrame(() => requestAnimationFrame(() => setWithTransition(true)));
    }
    if (trackIndex === 0) {
      setWithTransition(false);
      setTrackIndex(articles.length);
      requestAnimationFrame(() => requestAnimationFrame(() => setWithTransition(true)));
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-signal">Analysis</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink dark:text-white">Featured Analysis</h2>
        </div>
      </div>

      <div className="relative overflow-x-hidden overflow-y-visible rounded-lg bg-slate-100 px-2 py-8 dark:bg-slate-950 sm:px-8 lg:px-12">
        <div className="relative mx-auto h-[620px] max-w-6xl sm:h-[590px] lg:h-[565px]">
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
            {trackArticles.map((article, slideIndex) => {
              const isActive = slideIndex === trackIndex;

              return (
                <div key={`${article.slug}-${slideIndex}`} className="flex w-[var(--carousel-slot)] shrink-0 items-center justify-center px-3">
                  <article
                    className={cn(
                      "overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft transition-all duration-700 ease-out dark:border-slate-800 dark:bg-slate-900",
                      isActive
                        ? "z-20 w-[min(82vw,560px)] scale-100 opacity-100"
                        : "z-10 hidden w-[min(76vw,330px)] scale-90 opacity-70 blur-[0.2px] sm:block"
                    )}
                    aria-hidden={!isActive}
                  >
                    <div className={cn("relative bg-slate-100", isActive ? "h-44 sm:h-56" : "h-40")}>
                      <Image
                        src={article.thumbnail}
                        alt=""
                        fill
                        className="object-cover"
                        priority={isActive}
                        sizes={isActive ? "(min-width: 1024px) 560px, 92vw" : "(min-width: 1024px) 330px, 0vw"}
                      />
                      {!isActive ? <div className="absolute inset-0 bg-white/35 dark:bg-slate-950/35" /> : null}
                    </div>
                    <div className={cn("flex flex-col", isActive ? "min-h-[292px] p-5" : "p-4")}>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span>{article.category}</span>
                        <span aria-hidden="true">|</span>
                        <span>{formatDate(article.date)}</span>
                        <span aria-hidden="true">|</span>
                        <Clock className="h-3.5 w-3.5" />
                        <span>{article.readingTime} min</span>
                      </div>
                      <h3 className={cn("mt-3 font-semibold tracking-tight text-ink dark:text-white", isActive ? "text-xl sm:text-2xl" : "line-clamp-2 text-lg")}>
                        {article.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {article.summary}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {article.tags.slice(0, isActive ? 3 : 2).map((tag) => (
                          <TagPill key={tag}>{tag}</TagPill>
                        ))}
                        {isActive && article.difficulty ? (
                          <TagPill className="bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-200">{article.difficulty}</TagPill>
                        ) : null}
                      </div>
                      {isActive ? (
                        <div className="mt-auto flex justify-start pt-5">
                          <Button href={`/analysis/${article.slug}`} className="w-full sm:w-auto">
                            Read Analysis <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : null}
                    </div>
                  </article>
                </div>
              );
            })}
          </div>

          {articles.length > 1 ? (
            <>
              <button
                aria-label="Previous analysis"
                className="absolute left-2 top-[38%] z-30 hidden h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-ink shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 sm:left-[19%] sm:grid"
                onClick={() => move(-1)}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next analysis"
                className="absolute right-2 top-[38%] z-30 hidden h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-ink shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 sm:right-[19%] sm:grid"
                onClick={() => move(1)}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          ) : null}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {articles.map((article, dotIndex) => (
            <button
              key={article.slug}
              type="button"
              aria-label={`Show ${article.title}`}
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
      {children}
    </section>
  );
}

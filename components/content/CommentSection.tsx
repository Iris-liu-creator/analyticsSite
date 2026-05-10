"use client";

import { useEffect, useRef } from "react";

const giscusConfig = {
  repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
  repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID,
  category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
  categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
  mapping: process.env.NEXT_PUBLIC_GISCUS_MAPPING ?? "pathname",
  strict: process.env.NEXT_PUBLIC_GISCUS_STRICT ?? "0",
  reactionsEnabled: process.env.NEXT_PUBLIC_GISCUS_REACTIONS_ENABLED ?? "1",
  emitMetadata: process.env.NEXT_PUBLIC_GISCUS_EMIT_METADATA ?? "0",
  inputPosition: process.env.NEXT_PUBLIC_GISCUS_INPUT_POSITION ?? "bottom",
  lightTheme: process.env.NEXT_PUBLIC_GISCUS_THEME ?? "light_protanopia",
  darkTheme: process.env.NEXT_PUBLIC_GISCUS_DARK_THEME ?? "dark_tritanopia",
  lang: process.env.NEXT_PUBLIC_GISCUS_LANG ?? "en",
  loading: process.env.NEXT_PUBLIC_GISCUS_LOADING ?? "lazy"
};

const isConfigured = Boolean(
  giscusConfig.repo &&
  giscusConfig.repoId &&
  giscusConfig.category &&
  giscusConfig.categoryId
);

function getGiscusTheme() {
  if (typeof document === "undefined") return giscusConfig.lightTheme;
  return document.documentElement.classList.contains("dark")
    ? giscusConfig.darkTheme
    : giscusConfig.lightTheme;
}

function updateGiscusTheme() {
  const iframe = document.querySelector<HTMLIFrameElement>("iframe.giscus-frame");
  iframe?.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: getGiscusTheme() } } },
    "https://giscus.app"
  );
}

export function CommentSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isConfigured || !containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", giscusConfig.repo as string);
    script.setAttribute("data-repo-id", giscusConfig.repoId as string);
    script.setAttribute("data-category", giscusConfig.category as string);
    script.setAttribute("data-category-id", giscusConfig.categoryId as string);
    script.setAttribute("data-mapping", giscusConfig.mapping);
    script.setAttribute("data-strict", giscusConfig.strict);
    script.setAttribute("data-reactions-enabled", giscusConfig.reactionsEnabled);
    script.setAttribute("data-emit-metadata", giscusConfig.emitMetadata);
    script.setAttribute("data-input-position", giscusConfig.inputPosition);
    script.setAttribute("data-theme", getGiscusTheme());
    script.setAttribute("data-lang", giscusConfig.lang);
    script.setAttribute("data-loading", giscusConfig.loading);

    container.appendChild(script);

    const observer = new MutationObserver(updateGiscusTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      observer.disconnect();
      container.innerHTML = "";
    };
  }, []);

  return (
    <section className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold tracking-tight text-ink dark:text-white">Discussion & Reactions</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          Share a question, reaction, or practical takeaway from this article.
        </p>
      </div>
      {isConfigured ? (
        <div className="rounded-2xl bg-white/80 p-1 dark:bg-slate-900/40">
          <div ref={containerRef} />
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
          <p>Comment feature is coming soon. Stay tuned and keep reading!</p>
          <p className="mt-2">Configure Giscus environment variables to enable GitHub Discussions comments and reactions.</p>
        </div>
      )}
    </section>
  );
}

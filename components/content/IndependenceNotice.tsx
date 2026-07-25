export function IndependenceNotice() {
  return (
    <details className="group apple-card p-4 text-xs leading-6 text-slate-600 dark:text-slate-300">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-ink dark:text-white">
        Independence, conflict of interest &amp; confidentiality
        <span className="text-xs font-semibold text-signal transition group-open:rotate-180">⌄</span>
      </summary>
      <div className="mt-3 space-y-3 border-t border-slate-100 pt-3 dark:border-slate-800">
        <p>
          Iris Data Lab is an independent personal portfolio and limited-scope analytics advisory practice. Any external advisory or project work is undertaken strictly in a personal capacity, outside employment hours, using personal equipment, personal accounts, and public or client-provided information only.
        </p>
        <p>
          Iris Data Lab does not accept engagements involving my current employer, its customers, prospects, suppliers, partners, competitors, or any organisation or project that may give rise to an actual, potential, or perceived conflict of interest.
        </p>
        <p>
          No confidential, proprietary, commercially sensitive, or non-public information obtained through any employment, client engagement, or professional relationship is used, disclosed, reproduced, or relied upon in any Iris Data Lab content, advisory work, templates, deliverables, or services.
        </p>
        <p>
          All engagements are subject to conflict checks, confidentiality obligations, intellectual property considerations, and any applicable contractual, employment, or professional obligations. Iris Data Lab reserves the right to decline or discontinue any engagement where a conflict, confidentiality concern, or compliance risk may arise.
        </p>
      </div>
    </details>
  );
}

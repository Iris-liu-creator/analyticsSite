export function CommentSection() {
  const configured = Boolean(process.env.NEXT_PUBLIC_GISCUS_REPO && process.env.NEXT_PUBLIC_GISCUS_REPO_ID);

  return (
    <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-xl font-semibold text-ink dark:text-white">Comments</h2>
      {configured ? (
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          Giscus environment variables are configured. Add the Giscus script component here when you are ready to enable public discussions.
        </p>
      ) : (
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          Comments are coming soon. Connect GitHub Discussions, Supabase, or another provider to enable comments.
        </p>
      )}
    </section>
  );
}

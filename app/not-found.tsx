import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-signal">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink dark:text-white">This page is not in the model.</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">The route may have moved, or the content slug may not exist yet.</p>
      <Button href="/" className="mt-8">Return home</Button>
    </section>
  );
}

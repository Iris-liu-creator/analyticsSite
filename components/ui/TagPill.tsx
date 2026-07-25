import { cn } from "@/lib/utils";

export function TagPill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("apple-chip", className)}>
      {children}
    </span>
  );
}
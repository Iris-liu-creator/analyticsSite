import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({ children, href, variant = "primary", className, type = "button", onClick }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 active:scale-[0.98] dark:focus:ring-offset-slate-950",
    variant === "primary" && "bg-signal text-white shadow-sm hover:bg-blue-600",
    variant === "secondary" && "apple-control",
    variant === "ghost" && "text-slate-700 hover:bg-white/60 active:bg-white/80 dark:text-slate-200 dark:hover:bg-white/10",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
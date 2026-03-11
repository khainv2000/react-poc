import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/ui/shared/cx";

type Variant = "primary" | "ghost";

export function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; children: ReactNode }) {
  const base =
    "inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-60";
  const styles =
    variant === "primary"
      ? "border-border bg-brand-400/15 text-fg hover:bg-brand-400/25"
      : "border-border bg-transparent text-fg hover:bg-white/5";

  return (
    <button {...props} className={cx(base, styles, className)}>
      {children}
    </button>
  );
}

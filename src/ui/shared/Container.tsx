import type { ReactNode } from "react";
import { cx } from "@/ui/shared/cx";

export function Container({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cx("mx-auto w-full max-w-5xl px-5", className)}>{children}</div>;
}

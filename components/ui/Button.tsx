import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  children,
  variant = "primary",
  icon = true,
  className,
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
  icon?: boolean;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wide transition-all duration-300",
        variant === "primary" &&
          "bg-gradient-to-r from-blue-electric to-blue-intense text-white shadow-[0_0_0_1px_rgba(0,102,255,0.4),0_8px_30px_-6px_rgba(0,102,255,0.55)] hover:shadow-[0_0_0_1px_rgba(0,183,255,0.6),0_10px_40px_-4px_rgba(0,183,255,0.65)] hover:-translate-y-0.5",
        variant === "secondary" &&
          "border border-white/15 bg-white/[0.03] text-white backdrop-blur hover:border-cyan/50 hover:bg-white/[0.06]",
        variant === "ghost" &&
          "text-white/80 hover:text-white",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          size={16}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </a>
  );
}

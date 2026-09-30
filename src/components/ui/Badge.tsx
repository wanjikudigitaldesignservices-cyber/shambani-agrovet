import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
};

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "default",
  ...props
}) => {
  const variants = {
    default:
      "border-transparent bg-[var(--color-forest)] text-white hover:bg-[var(--color-leaf)]",
    secondary:
      "border-transparent bg-[var(--color-gray-100)] text-[var(--color-ink)] hover:bg-[var(--color-gray-200)]",
    destructive:
      "border-transparent bg-[var(--color-alert)] text-white hover:bg-[var(--color-alert)]/80",
    outline: "text-[var(--color-ink)] border-[var(--color-gray-200)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-harvest)] focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type PhotoTileProps = {
  to: string;
  src: string;
  title: string;
  count?: number;
  className?: string;
};

export const PhotoTile: React.FC<PhotoTileProps> = ({
  to,
  src,
  title,
  count,
  className,
}) => {
  return (
    <Link
      to={to}
      className={cn(
        "group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl p-4 transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-harvest)]",
        className
      )}
    >
      <div className="relative aspect-square w-full max-w-[160px] overflow-hidden rounded-full shadow-sm">
        <img
          src={src}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Subtle inner shadow for depth */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] pointer-events-none" />
      </div>
      
      <div className="text-center">
        <h3 className="font-heading text-lg font-bold text-[var(--color-forest)] transition-colors group-hover:text-[var(--color-leaf)]">
          {title}
        </h3>
        {count !== undefined && (
          <p className="text-sm font-medium text-[var(--color-gray-500)]">
            {count} product{count !== 1 ? 's' : ''}
          </p>
        )}
      </div>
    </Link>
  );
};

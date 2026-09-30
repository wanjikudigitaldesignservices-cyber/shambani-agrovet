import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type PhotoIconProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  size?: "sm" | "md" | "lg";
  ring?: "gold" | "green" | "none";
  shape?: "circle" | "square";
  srcSetWebp?: string; // Optional: Provide pre-computed WebP srcset
};

export const PhotoIcon: React.FC<PhotoIconProps> = ({
  size = "md",
  ring = "none",
  shape = "circle",
  src,
  alt,
  srcSetWebp,
  className,
  ...props
}) => {
  const sizeClasses = {
    sm: "w-16 h-16", // 64px
    md: "w-24 h-24", // 96px
    lg: "w-40 h-40", // 160px
  };

  const ringClasses = {
    none: "",
    gold: "ring-2 ring-[var(--color-harvest)] ring-offset-2",
    green: "ring-2 ring-[var(--color-leaf)] ring-offset-2",
  };

  const shapeClasses = {
    circle: "rounded-full",
    square: "rounded-2xl", // 16px rounded corners
  };

  const imageClasses = cn(
    "object-cover",
    sizeClasses[size],
    ringClasses[ring],
    shapeClasses[shape],
    className
  );

  if (srcSetWebp) {
    return (
      <picture className="inline-block shrink-0">
        <source srcSet={srcSetWebp} type="image/webp" />
        <img
          src={src}
          alt={alt ?? ""}
          className={imageClasses}
          loading="lazy"
          decoding="async"
          {...props}
        />
      </picture>
    );
  }

  return (
    <img
      src={src}
      alt={alt ?? ""}
      className={cn("inline-block shrink-0", imageClasses)}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};

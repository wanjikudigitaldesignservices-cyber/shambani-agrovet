import React from "react";
import { brand } from "@/config/brand.config";

type LogoProps = React.SVGProps<SVGSVGElement> & {
  variant?: "primary" | "stacked" | "icon-only" | "mono" | "reversed";
};

export const Logo: React.FC<LogoProps> = ({ variant = "primary", className, ...props }) => {
  const isIconOnly = variant === "icon-only";
  const isStacked = variant === "stacked";
  const isMono = variant === "mono";
  const isReversed = variant === "reversed";

  const colorForest = isReversed ? "#FFFFFF" : isMono ? "currentColor" : "#1F4D2B";
  const colorHarvest = isReversed ? "#F7F3EA" : isMono ? "currentColor" : "#E0A526";
  const colorInk = isReversed ? "#FFFFFF" : isMono ? "currentColor" : "#17211A";

  const width = isIconOnly ? 48 : isStacked ? 120 : 180;
  const height = isIconOnly ? 48 : isStacked ? 100 : 48;
  const viewBox = isIconOnly ? "0 0 48 48" : isStacked ? "0 0 120 100" : "0 0 180 48";



  // Re-write the SVG to be cleaner
  const CleanIcon = (
    <g transform={isIconOnly ? "" : isStacked ? "translate(36, 0)" : "translate(0, 0)"}>
      {/* Shield/Leaf base */}
      <path d="M24 4C24 4 6 10 6 26C6 38 24 44 24 44C24 44 42 38 42 26C42 10 24 4 24 4Z" fill={colorForest} />
      {/* Inner highlight (sprout/droplet) */}
      <path d="M24 14C24 14 16 22 16 30C16 34.4 19.6 38 24 38C28.4 38 32 34.4 32 30C32 22 24 14 24 14Z" fill={colorHarvest} />
    </g>
  );

  const Text = (
    <g transform={isStacked ? "translate(60, 75)" : "translate(56, 28)"}>
      <text
        x="0"
        y="0"
        fontFamily="Fraunces, serif"
        fontWeight="700"
        fontSize={isStacked ? "20" : "24"}
        fill={colorInk}
        textAnchor={isStacked ? "middle" : "start"}
      >
        {brand.short}
      </text>
      <text
        x={isStacked ? "0" : "120"}
        y={isStacked ? "20" : "0"}
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontWeight="500"
        fontSize={isStacked ? "11" : "12"}
        fill={colorForest}
        letterSpacing="1"
        textAnchor={isStacked ? "middle" : "start"}
        style={{ textTransform: "uppercase" }}
      >
        Agrovet
      </text>
    </g>
  );

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
      role="img"
      aria-label={`${brand.name} logo`}
    >
      {CleanIcon}
      {!isIconOnly && Text}
    </svg>
  );
};

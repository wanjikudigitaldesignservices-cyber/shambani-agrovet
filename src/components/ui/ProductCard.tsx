import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, WhatsappLogo } from "@phosphor-icons/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SaleClassBadge, type SaleClass } from "./SaleClassBadge";
import { formatPrice, whatsappOrderMessage } from "@/config/brand.config";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ProductCardProps = {
  slug: string;
  name: string;
  pack: string;
  price: number;
  imageSrc: string;
  saleClass: SaleClass;
  inStock: boolean;
  className?: string;
  onAddToCart?: () => void;
  onToggleWishlist?: () => void;
  isWishlisted?: boolean;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  slug,
  name,
  pack,
  price,
  imageSrc,
  saleClass,
  inStock,
  className,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false,
}) => {
  const productUrl = typeof window !== 'undefined' ? `${window.location.origin}/product/${slug}` : `/product/${slug}`;
  const waMessage = whatsappOrderMessage(name, pack, productUrl);
  // Assuming whatsappLink from brand config returns a valid string or "#" if empty
  // We'll hardcode the link generation here for simplicity if the config is not fully available in this component context yet.
  
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md border border-[var(--color-gray-100)]",
        className
      )}
    >
      {/* Wishlist Button */}
      <button
        onClick={onToggleWishlist}
        className="absolute right-3 top-3 z-10 rounded-full bg-white/80 p-2 text-[var(--color-gray-400)] backdrop-blur-sm transition-colors hover:text-[var(--color-alert)] focus:outline-none focus:ring-2 focus:ring-[var(--color-harvest)]"
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart
          weight={isWishlisted ? "fill" : "regular"}
          className={cn("h-5 w-5", isWishlisted && "text-[var(--color-alert)]")}
        />
      </button>

      {/* Badges Overlay */}
      <div className="absolute left-3 top-3 z-10 flex flex-col items-start gap-1">
        <SaleClassBadge saleClass={saleClass} />
        {!inStock && (
          <span className="rounded-sm bg-[var(--color-gray-100)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-gray-600)]">
            Out of Stock
          </span>
        )}
      </div>

      {/* Image */}
      <Link to={`/product/${slug}`} className="relative aspect-square w-full overflow-hidden rounded-xl bg-[var(--color-gray-50)] mb-4">
        <img
          src={imageSrc}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <Link to={`/product/${slug}`} className="mb-1 focus:outline-none focus:ring-2 focus:ring-[var(--color-harvest)] rounded-sm">
          <h3 className="line-clamp-2 text-sm font-bold leading-snug text-[var(--color-ink)] hover:text-[var(--color-leaf)] transition-colors">
            {name}
          </h3>
        </Link>
        <p className="mb-3 text-xs text-[var(--color-gray-500)]">{pack}</p>
        
        <div className="mt-auto flex items-end justify-between">
          <div className="font-heading text-lg font-bold text-[var(--color-forest)]">
            {formatPrice(price)}
          </div>
          
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] transition-colors hover:bg-[#25D366]/20 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-1"
              aria-label="Order via WhatsApp"
            >
              <WhatsappLogo weight="fill" className="h-5 w-5" />
            </a>
            
            <button
              onClick={onAddToCart}
              disabled={!inStock}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-harvest)] text-white transition-colors hover:bg-[#c78e1b] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[var(--color-harvest)] focus:ring-offset-1"
              aria-label="Add to cart"
            >
              <ShoppingCart weight="bold" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

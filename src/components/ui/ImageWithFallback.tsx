"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  onClick?: () => void;
  priority?: boolean;
  sizes?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc,
  className = "",
  fill = false,
  width,
  height,
  onClick,
  priority = false,
  sizes,
}: ImageWithFallbackProps) {
  const [imageError, setImageError] = useState(false);
  const [fallbackError, setFallbackError] = useState(false);

  const handleError = () => {
    if (!imageError && fallbackSrc) {
      setImageError(true);
    } else {
      setFallbackError(true);
    }
  };

  const currentSrc = imageError && fallbackSrc ? fallbackSrc : src;
  const showFallback = fallbackError || (imageError && !fallbackSrc);

  if (showFallback) {
    return (
      <div
        className={`bg-secondary flex items-center justify-center ${className} ${
          fill ? "w-full h-full" : ""
        }`}
        onClick={onClick}
        style={{
          width: fill ? undefined : width,
          height: fill ? undefined : height,
        }}
      >
        <ImageIcon className="w-1/4 h-1/4 text-muted-foreground" />
      </div>
    );
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      className={className}
      fill={fill}
      width={width}
      height={height}
      onClick={onClick}
      priority={priority}
      sizes={sizes}
      onError={handleError}
    />
  );
}

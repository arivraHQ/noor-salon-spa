"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImagePlaceholderProps {
  src?: string;
  aspectRatio?: string;
  brief: string;
  label?: string;
  className?: string;
  alt: string;
  priority?: boolean;
}

export function ImagePlaceholder({
  src,
  aspectRatio = "aspect-[3/4]",
  brief,
  label = "EDITORIAL PHOTOGRAPHY",
  className = "",
  alt,
  priority = false,
}: ImagePlaceholderProps) {
  const [imageError, setImageError] = useState(false);

  // If a valid image source is provided and hasn't errored
  if (src && !imageError) {
    return (
      <div
        className={`relative w-full overflow-hidden bg-blush/40 border border-champagne/40 ${aspectRatio} ${className}`}
      >
        {/* Comment with exact image brief for design documentation */}
        {/* Image Brief: {brief} */}
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-editorial ease-editorial hover:scale-105"
          onError={() => setImageError(true)}
        />
        {/* Subtle bottom label on hover */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-text/60 to-transparent p-4 text-[10px] tracking-widest text-bg font-jost uppercase opacity-0 hover:opacity-100 transition-opacity duration-300">
          <span>{label}</span> • <span>Civil Lines Studio</span>
        </div>
      </div>
    );
  }

  // Fallback to bespoke blush-toned editorial stamp block
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative w-full overflow-hidden bg-blush/50 border border-champagne/40 flex flex-col justify-between p-6 select-none ${aspectRatio} ${className}`}
    >
      {/* Top Hairline Meta */}
      <div className="flex items-center justify-between text-[10px] tracking-widest text-muted uppercase">
        <span>{label}</span>
        <span className="text-champagne font-mono">1:1 CROP ARCHIVE</span>
      </div>

      {/* Center Editorial Monogram Stamp */}
      <div className="my-auto flex flex-col items-center justify-center text-center px-4">
        <div className="w-10 h-10 border border-champagne/60 flex items-center justify-center mb-3">
          <span className="font-bodoni italic text-text text-lg">N</span>
        </div>
        <p className="font-bodoni italic text-text text-sm sm:text-base max-w-xs leading-snug">
          "{brief}"
        </p>
      </div>

      {/* Bottom Specification */}
      <div className="pt-2 border-t border-champagne/30 flex items-center justify-between text-[9px] tracking-widest text-muted uppercase">
        <span>Natural Daylight / 35mm</span>
        <span>Civil Lines Studio</span>
      </div>
    </div>
  );
}

import React from "react";

interface ImagePlaceholderProps {
  aspectRatio?: string;
  brief: string;
  label?: string;
  className?: string;
  alt: string;
}

export function ImagePlaceholder({
  aspectRatio = "aspect-[3/4]",
  brief,
  label = "EDITORIAL PHOTOGRAPHY",
  className = "",
  alt,
}: ImagePlaceholderProps) {
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

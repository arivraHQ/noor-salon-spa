"use client";

import React, { useRef, useState, useEffect } from "react";
import { siteContent, GalleryItem } from "@/content/site";
import { OffsetFrame } from "@/components/ui/OffsetFrame";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function Gallery() {
  const { gallery } = siteContent;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Desktop Custom Cursor Follower ("View")
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHoveringGallery, setIsHoveringGallery] = useState(false);

  const galleryImages = [
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1584297091622-af8e5bd80b13?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section
      id="gallery"
      aria-label="Studio Lookbook and Gallery"
      className="relative w-full py-20 sm:py-32 border-t border-champagne/40 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHoveringGallery(true)}
      onMouseLeave={() => setIsHoveringGallery(false)}
    >
      {/* Desktop Custom Follower ("View") - strictly disabled on touch/reduced motion */}
      {isHoveringGallery && (
        <div
          aria-hidden="true"
          style={{
            transform: `translate3d(${cursorPos.x - 32}px, ${cursorPos.y - 32}px, 0)`,
          }}
          className="hidden lg:flex pointer-events-none absolute z-30 w-16 h-16 rounded-full bg-primary text-bg items-center justify-center text-[10px] tracking-widest uppercase font-jost shadow-none transition-transform duration-75 ease-out select-none"
        >
          View
        </div>
      )}

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-end justify-between pb-10 border-b border-champagne/40">
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-12 h-[1px] bg-champagne" />
            <span className="text-xs uppercase tracking-widest font-jost text-muted">
              {gallery.eyebrow}
            </span>
          </div>
          <h2 className="font-bodoni text-3xl sm:text-5xl text-text font-normal">
            Lookbook & <span className="italic">Recent Work</span>
          </h2>
        </div>

        {/* Scroll Nav Buttons (Radius 0) */}
        <div className="mt-6 sm:mt-0 flex items-center space-x-4">
          <p className="text-xs font-jost text-muted mr-4 hidden md:block">
            {gallery.subtitle}
          </p>
          <div className="flex items-center space-x-2">
            <button
              onClick={scrollLeft}
              type="button"
              aria-label="Scroll left in lookbook"
              className="w-10 h-10 border border-champagne flex items-center justify-center text-text hover:bg-primary hover:text-bg transition-colors"
            >
              ←
            </button>
            <button
              onClick={scrollRight}
              type="button"
              aria-label="Scroll right in lookbook"
              className="w-10 h-10 border border-champagne flex items-center justify-center text-text hover:bg-primary hover:text-bg transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Lookbook Track */}
      <div
        ref={scrollContainerRef}
        className="mt-12 sm:mt-16 flex items-start space-x-8 sm:space-x-12 overflow-x-auto px-6 sm:px-8 lg:px-12 pb-8 scrollbar-none cursor-grab active:cursor-grabbing"
      >
        {gallery.items.map((item: GalleryItem, idx: number) => {
          const photo = galleryImages[idx];
          return (
            <div
              key={item.id}
              className="flex-shrink-0 w-72 sm:w-80 md:w-96 flex flex-col justify-between"
            >
              {/* Photo with 1px Champagne Offset Frame */}
              <OffsetFrame frameOffset="sm" frameDirection="bottom-right">
                <ImagePlaceholder
                  src={photo}
                  aspectRatio={item.aspect}
                  label={item.category}
                  brief={item.imageBrief}
                  alt={item.title}
                />
              </OffsetFrame>

              {/* Caption & Category */}
              <div className="mt-6 pt-3 border-t border-champagne/30">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-bodoni text-lg text-text font-medium">
                    {item.title}
                  </h3>
                  <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-xs font-jost text-muted mt-1 font-light leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { siteContent, Review } from "@/content/site";

export function Reviews() {
  const { reviews } = siteContent;
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentReview: Review = reviews[currentIndex];

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="reviews"
      aria-label="Client Words and Reviews"
      className="relative w-full py-20 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-champagne/40"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-10 border-b border-champagne/40 mb-16">
        <div className="flex items-center space-x-4">
          <span className="w-12 h-[1px] bg-champagne" />
          <span className="text-xs uppercase tracking-widest font-jost text-muted">
            Patron Reflections
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="font-mono text-xs text-champagne tracking-widest">
            0{currentIndex + 1} / 0{reviews.length}
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={prevReview}
              type="button"
              aria-label="Previous review"
              className="w-10 h-10 border border-champagne flex items-center justify-center text-text hover:bg-primary hover:text-bg transition-colors"
            >
              ←
            </button>
            <button
              onClick={nextReview}
              type="button"
              aria-label="Next review"
              className="w-10 h-10 border border-champagne flex items-center justify-center text-text hover:bg-primary hover:text-bg transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Main Large Editorial Quote Container */}
      <div className="min-h-[260px] flex flex-col justify-between">
        {/* Large Italic Quote */}
        <blockquote className="font-bodoni italic text-2xl sm:text-4xl md:text-5xl text-text font-normal leading-[1.25] max-w-5xl">
          {currentReview.quote}
        </blockquote>

        {/* Client Metadata and Service Name */}
        <div className="mt-12 pt-8 border-t border-champagne/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-widest font-jost">
            <span className="font-medium text-text">{currentReview.author}</span>
            <span className="text-champagne">•</span>
            <span className="text-muted">{currentReview.city}</span>
          </div>

          <div className="text-xs font-jost uppercase tracking-widest text-champagne font-mono">
            Treatment: {currentReview.service}
          </div>
        </div>
      </div>
    </section>
  );
}

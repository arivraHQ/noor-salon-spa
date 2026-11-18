"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "@/content/site";
import { OffsetFrame } from "@/components/ui/OffsetFrame";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function Intro() {
  const { intro } = siteContent;
  const editorialEase = [0.76, 0, 0.24, 1] as const;

  return (
    <section
      id="intro"
      aria-label="Introduction to Noor Studio"
      className="relative w-full py-20 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-champagne/40"
    >
      {/* Top Small Eyebrow */}
      <div className="flex items-center space-x-4 mb-12 sm:mb-16">
        <span className="w-12 h-[1px] bg-champagne" />
        <span className="text-xs uppercase tracking-widest font-jost text-muted">
          {intro.eyebrow}
        </span>
      </div>

      {/* Asymmetric Layout: Left Editorial Narrative, Right Staggered Photography */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Editorial Narrative (7 Columns) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-10">
          <div>
            <h2 className="font-bodoni text-3xl sm:text-4xl md:text-5xl text-text leading-[1.15] font-normal">
              We do not believe in <span className="italic">conveyor-belt</span> salon visits.
            </h2>
            <p className="mt-8 text-base sm:text-lg text-muted font-jost font-light leading-relaxed">
              {intro.paragraph}
            </p>
          </div>

          {/* Pull Quote Callout Box */}
          <div className="pt-8 border-t border-champagne/40">
            <blockquote className="font-bodoni italic text-xl sm:text-2xl text-text leading-snug">
              {intro.pullQuote}
            </blockquote>
            <div className="mt-4 flex items-center space-x-3 text-xs font-jost text-muted uppercase tracking-widest">
              <span className="font-medium text-text">{intro.author}</span>
              <span>—</span>
              <span>{intro.role}</span>
            </div>
          </div>
        </div>

        {/* Right Staggered Images (6 Columns, Staggered Heights) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
          {/* Staggered Image 1 (Smaller, Higher Offset) */}
          <div className="sm:col-span-5 sm:-mt-8">
            <OffsetFrame frameOffset="sm" frameDirection="bottom-left">
              <ImagePlaceholder
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
                aspectRatio="aspect-[4/5]"
                label="STUDIO CRAFT"
                brief={intro.image1Brief}
                alt="Hair shears resting on warm stone slab in studio"
              />
            </OffsetFrame>
            <p className="mt-3 text-[11px] font-jost text-muted tracking-widest uppercase text-right sm:text-left">
              Fig. 01 — Dedicated Tools
            </p>
          </div>

          {/* Staggered Image 2 (Taller, Grounded Offset) */}
          <div className="sm:col-span-7 sm:mt-12">
            <OffsetFrame frameOffset="md" frameDirection="bottom-right">
              <ImagePlaceholder
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
                aspectRatio="aspect-[3/4]"
                label="FORMULATIONS"
                brief={intro.image2Brief}
                alt="Senior aesthetician preparing botanical serum in dish"
              />
            </OffsetFrame>
            <p className="mt-3 text-[11px] font-jost text-muted tracking-widest uppercase">
              Fig. 02 — Diagnostic Botanicals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "@/content/site";
import { OffsetFrame } from "@/components/ui/OffsetFrame";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function Hero() {
  const { hero } = siteContent;

  // Custom Editorial Bezier [0.76, 0, 0.24, 1]
  const editorialEase = [0.76, 0, 0.24, 1] as const;

  return (
    <section
      aria-label="Hero Section"
      className="relative w-full min-h-[90vh] lg:min-h-[92vh] flex flex-col justify-between pt-4 sm:pt-8 pb-12 sm:pb-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Top Editorial Eyebrow & Coordinates Bar */}
      <div className="flex items-center justify-between border-b border-champagne/40 pb-4 text-xs font-jost uppercase tracking-widest text-muted">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: editorialEase }}
        >
          {hero.eyebrow}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: editorialEase, delay: 0.1 }}
          className="hidden sm:inline-block font-mono text-[11px] text-champagne"
        >
          26.4716° N, 80.3475° E
        </motion.span>
      </div>

      {/* Main Asymmetric Editorial Grid */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center my-auto py-6 sm:py-10">
        {/* Left Column: Vertical Tag + Giant Headline + Copy + CTA */}
        <div className="lg:col-span-7 flex flex-col justify-center relative z-20">
          <div className="flex items-start">
            {/* Small Vertical Side Label (Kanpur / Noor) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: editorialEase, delay: 0.2 }}
              className="hidden md:flex writing-vertical-rl rotate-180 text-[10px] tracking-ultra text-champagne uppercase font-jost mr-6 pt-3 select-none flex-shrink-0"
            >
              Civil Lines • Kanpur Studio
            </motion.div>

            {/* Giant Overlapping Headline */}
            <div className="flex flex-col w-full">
              <h1 className="font-bodoni text-text leading-[0.90] tracking-tight relative z-30 lg:w-[125%] pointer-events-none select-none">
                {/* Word 1: Beauty, (Regular upright) */}
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: editorialEase, delay: 0.2 }}
                  className="block text-[52px] sm:text-[84px] md:text-[108px] lg:text-[120px] xl:text-[132px] font-normal"
                >
                  Beauty,
                </motion.span>
                {/* Word 2: unhurried. (Italic contrasting cut, layers over photo on desktop) */}
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: editorialEase, delay: 0.35 }}
                  className="block text-[52px] sm:text-[84px] md:text-[108px] lg:text-[120px] xl:text-[132px] italic font-normal text-text lg:-mt-2"
                >
                  unhurried.
                </motion.span>
              </h1>

              {/* Editorial Intro Paragraph (kept cleanly in negative space) */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: editorialEase, delay: 0.5 }}
                className="mt-6 sm:mt-8 max-w-md text-muted text-base sm:text-lg font-jost font-light leading-relaxed"
              >
                {hero.description}
              </motion.p>

              {/* Single CTA (Radius 0, Solid Onyx, Hairline Accent) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: editorialEase, delay: 0.65 }}
                className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8"
              >
                <a
                  href={hero.cta.href}
                  className="inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-primary text-bg font-jost text-xs uppercase tracking-widest hover:bg-text hover:text-blush transition-colors duration-300 border border-primary focus:outline-none focus:ring-1 focus:ring-champagne"
                >
                  <span>{hero.cta.label}</span>
                  <span className="ml-3 font-mono">→</span>
                </a>

                <div className="flex items-center space-x-3 text-xs tracking-widest uppercase font-jost text-muted">
                  <span className="w-8 h-[1px] bg-champagne" />
                  <span>Unisex Studio / By Reservation</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Column: Tall Portrait Image with 1px Champagne Offset Frame */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center lg:justify-end z-10">
          <motion.div
            initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", opacity: 0 }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
            transition={{ duration: 1.0, ease: editorialEase, delay: 0.3 }}
            className="w-full max-w-sm sm:max-w-md lg:max-w-none"
          >
            <OffsetFrame frameOffset="md" frameDirection="bottom-right">
              {/* Image slot with editorial photography and image brief */}
              <ImagePlaceholder
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80"
                aspectRatio="aspect-[3/4]"
                label="HERO PORTRAIT / ATELIER"
                brief={hero.portraitBrief}
                alt="Editorial portrait of Indian woman with natural waves representing Noor Salon Kanpur"
                priority
              />
            </OffsetFrame>
          </motion.div>
        </div>
      </div>

      {/* Bottom Ticker / Footnote Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: editorialEase, delay: 0.8 }}
        className="pt-6 border-t border-champagne/40 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-jost text-muted"
      >
        <div>
          <span className="block text-[10px] uppercase tracking-widest text-text">Discipline</span>
          <span>Hair, Skin & Couture Bridal</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase tracking-widest text-text">Pace</span>
          <span>Generous Consultation Blocks</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase tracking-widest text-text">Formulations</span>
          <span>Sothys • Moroccanoil • Olaplex</span>
        </div>
        <div className="text-right sm:text-left">
          <span className="block text-[10px] uppercase tracking-widest text-text">Direct Line</span>
          <span>{siteContent.nap.phoneDisplay}</span>
        </div>
      </motion.div>
    </section>
  );
}

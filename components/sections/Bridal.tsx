"use client";

import React from "react";
import { siteContent, BridalTier } from "@/content/site";

export function Bridal() {
  const { bridal } = siteContent;

  const handleBridalTrial = (tierName?: string) => {
    const text = encodeURIComponent(
      `Hello Noor Atelier Kanpur,\nI would like to inquire about a Private Bridal Trial & Consultation${
        tierName ? ` for ${tierName}` : ""
      } at your Civil Lines studio.\nPlease let me know the upcoming Tuesday/Wednesday availability.`
    );
    window.open(`https://wa.me/${siteContent.nap.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section
      id="bridal"
      aria-label="Couture Bridal Packages"
      className="relative w-full py-20 sm:py-32 bg-blush/25 border-y border-champagne/40"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header with Luxury Serif and Editorial Briefing */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-12 border-b border-champagne/40">
          <div className="max-w-xl">
            <div className="flex items-center space-x-4 mb-4">
              <span className="w-12 h-[1px] bg-champagne" />
              <span className="text-xs uppercase tracking-widest font-jost text-muted">
                {bridal.eyebrow}
              </span>
            </div>
            <h2 className="font-bodoni text-3xl sm:text-5xl md:text-6xl text-text font-normal leading-tight">
              Couture <span className="italic">Bridal</span> Suite
            </h2>
            <p className="mt-6 text-base text-muted font-jost font-light leading-relaxed">
              {bridal.description}
            </p>
          </div>

          <div className="mt-8 lg:mt-0 flex flex-col items-start lg:items-end">
            <p className="text-xs font-jost text-muted max-w-xs lg:text-right mb-4">
              {bridal.trialNote}
            </p>
            <button
              onClick={() => handleBridalTrial()}
              type="button"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-bg font-jost text-xs uppercase tracking-widest hover:bg-text hover:text-blush transition-colors border border-primary focus:outline-none focus:ring-1 focus:ring-champagne"
            >
              <span>Request Bridal Trial</span>
              <span className="ml-3 font-mono">→</span>
            </button>
          </div>
        </div>

        {/* 3 Package Tiers as a Refined Horizontal Comparison List (NOT bouncy cards) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-champagne/40 border-b border-champagne/40">
          {bridal.tiers.map((tier: BridalTier, idx: number) => (
            <div
              key={tier.id}
              className={`py-10 lg:py-8 ${
                idx === 0
                  ? "lg:pr-10"
                  : idx === 1
                  ? "lg:px-10 bg-bg/40 -my-4 py-14"
                  : "lg:pl-10"
              } flex flex-col justify-between`}
            >
              <div>
                {/* Top Tier Header */}
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-mono text-xs text-champagne tracking-widest">
                    TIER 0{idx + 1}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {tier.duration}
                  </span>
                </div>

                <h3 className="font-bodoni text-2xl sm:text-3xl text-text font-normal">
                  {tier.name}
                </h3>
                <p className="text-xs font-jost text-muted mt-1 italic">
                  {tier.tagline}
                </p>

                {/* Price Display */}
                <div className="my-6 pb-6 border-b border-champagne/30">
                  <span className="font-bodoni text-3xl sm:text-4xl text-text font-medium">
                    {tier.priceFormatted}
                  </span>
                  <span className="block text-[10px] tracking-widest text-muted uppercase font-jost mt-1">
                    Complete Artistry + Dupatta Draping
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <span className="block text-[11px] uppercase tracking-widest font-jost text-text font-medium mb-3">
                    Inclusions:
                  </span>
                  {tier.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start space-x-2.5 text-xs font-jost text-muted"
                    >
                      <span className="text-champagne font-mono text-[11px] mt-0.5">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Action */}
              <div className="mt-10 pt-6 border-t border-champagne/30">
                <button
                  onClick={() => handleBridalTrial(tier.name)}
                  type="button"
                  className="w-full text-center py-3 text-xs uppercase tracking-widest font-jost text-text border border-champagne hover:bg-primary hover:text-bg hover:border-primary transition-colors"
                >
                  Book {tier.name} Trial
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

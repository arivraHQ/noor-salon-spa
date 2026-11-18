"use client";

import React from "react";
import { siteContent } from "@/content/site";
import { OffsetFrame } from "@/components/ui/OffsetFrame";

export function Visit() {
  const { visit, nap } = siteContent;

  return (
    <section
      id="visit"
      aria-label="Visit Noor Studio Kanpur"
      className="relative w-full py-20 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-champagne/40"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-12 border-b border-champagne/40 mb-16">
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-12 h-[1px] bg-champagne" />
            <span className="text-xs uppercase tracking-widest font-jost text-muted">
              {visit.eyebrow}
            </span>
          </div>
          <h2 className="font-bodoni text-3xl sm:text-5xl text-text font-normal">
            Visit Our <span className="italic">Studio</span>
          </h2>
        </div>
        <p className="mt-4 sm:mt-0 max-w-sm text-xs sm:text-sm font-jost text-muted font-light leading-relaxed">
          {visit.subtitle}
        </p>
      </div>

      {/* Grid: Left Studio Details, Right Map Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Address, Hours, Channels (7 Columns) */}
        <div className="lg:col-span-6 space-y-10">
          {/* Address Block */}
          <div>
            <span className="block text-[11px] uppercase tracking-widest font-jost text-champagne font-medium mb-3">
              Civil Lines Studio
            </span>
            <p className="font-bodoni text-2xl text-text leading-snug">
              {visit.addressLine1}
            </p>
            <p className="text-sm font-jost text-muted mt-1">
              {visit.addressLine2}
            </p>
            <p className="text-sm font-jost text-muted">{visit.cityPin}</p>
            <p className="text-xs font-jost text-muted/80 mt-2 italic">
              {visit.landmarks}
            </p>
          </div>

          {/* Operating Hours */}
          <div className="pt-8 border-t border-champagne/30">
            <span className="block text-[11px] uppercase tracking-widest font-jost text-champagne font-medium mb-4">
              Salon & Spa Hours
            </span>
            <div className="space-y-2 text-xs sm:text-sm font-jost text-text">
              {nap.hours.map((h, i) => (
                <div key={i} className="flex justify-between py-1 border-b border-champagne/15">
                  <span className="text-muted">{h.days}</span>
                  <span className="font-mono">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Direct */}
          <div className="pt-8 border-t border-champagne/30 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <span className="block text-[10px] uppercase tracking-widest font-jost text-muted mb-1">
                Concierge Phone & WhatsApp
              </span>
              <a
                href={`https://wa.me/${nap.whatsappNumber}`}
                className="font-bodoni text-lg text-text hover:text-champagne transition-colors"
              >
                {nap.phoneDisplay}
              </a>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-widest font-jost text-muted mb-1">
                Instagram Journal
              </span>
              <a
                href={nap.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bodoni text-lg text-text hover:text-champagne transition-colors"
              >
                {nap.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Map Placeholder with 1px Offset Frame (6 Columns) */}
        <div className="lg:col-span-6">
          <OffsetFrame frameOffset="md" frameDirection="bottom-right">
            <div className="w-full aspect-[4/3] bg-blush/20 border border-champagne/60 p-8 flex flex-col justify-between relative overflow-hidden select-none">
              {/* Top Details */}
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-muted uppercase">
                <span>KANPUR CARTOGRAPHY</span>
                <span>26.4716° N, 80.3475° E</span>
              </div>

              {/* Center Schematic Graphic */}
              <div className="my-auto flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 border border-champagne flex items-center justify-center mb-4 bg-bg">
                  <span className="font-bodoni italic text-xl text-text">N</span>
                </div>
                <p className="font-bodoni text-lg text-text">
                  Opposite Green Park Stadium
                </p>
                <p className="text-xs font-jost text-muted max-w-xs mt-1">
                  Civil Lines boulevard, accessible from VIP Road and Mall Road.
                </p>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-champagne/40 flex items-center justify-between">
                <span className="text-[10px] font-jost uppercase tracking-widest text-muted">
                  Valet Available Weekends
                </span>
                <a
                  href="https://maps.google.com/?q=Civil+Lines+Kanpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-jost uppercase tracking-widest text-text font-medium border-b border-primary hover:text-champagne hover:border-champagne transition-colors pb-0.5"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </OffsetFrame>
        </div>
      </div>
    </section>
  );
}

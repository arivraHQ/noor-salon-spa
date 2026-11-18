"use client";

import React from "react";
import { siteContent, SignatureTreatment } from "@/content/site";
import { OffsetFrame } from "@/components/ui/OffsetFrame";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function SignatureTreatments() {
  const { signatureTreatments } = siteContent;

  const treatmentImages = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
  ];

  return (
    <section
      id="signatures"
      aria-label="Signature Studio Treatments"
      className="relative w-full py-20 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-champagne/40"
    >
      {/* Section Eyebrow */}
      <div className="flex items-center justify-between pb-10 border-b border-champagne/40 mb-16 sm:mb-24">
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-12 h-[1px] bg-champagne" />
            <span className="text-xs uppercase tracking-widest font-jost text-muted">
              Curated Rituals
            </span>
          </div>
          <h2 className="font-bodoni text-3xl sm:text-5xl text-text font-normal">
            Signature <span className="italic">Treatments</span>
          </h2>
        </div>
        <span className="hidden sm:inline-block font-mono text-xs tracking-widest text-champagne">
          THREE IMMERSIONS
        </span>
      </div>

      {/* 3 Alternating Large Image & Text Rows */}
      <div className="space-y-24 sm:space-y-36">
        {signatureTreatments.map((treatment: SignatureTreatment, idx: number) => {
          const isEven = idx % 2 === 1; // Alternating layout
          const imageSrc = treatmentImages[idx];

          return (
            <div
              key={treatment.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image Column (5 Columns) */}
              <div
                className={`lg:col-span-5 ${
                  isEven ? "lg:col-start-8" : "lg:col-start-1"
                }`}
              >
                <OffsetFrame
                  frameOffset="md"
                  frameDirection={isEven ? "bottom-left" : "bottom-right"}
                >
                  <ImagePlaceholder
                    src={imageSrc}
                    aspectRatio="aspect-[4/5]"
                    label={`SIGNATURE ${treatment.number}`}
                    brief={treatment.imageBrief}
                    alt={treatment.title}
                  />
                </OffsetFrame>
              </div>

              {/* Text Narrative Column (7 Columns) */}
              <div
                className={`lg:col-span-7 flex flex-col justify-center ${
                  isEven ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-6"
                }`}
              >
                {/* Index / Price / Duration Bar */}
                <div className="flex items-center space-x-6 pb-4 border-b border-champagne/40 text-xs font-jost text-muted uppercase tracking-widest">
                  <span className="font-mono text-text font-medium text-sm">
                    {treatment.number}
                  </span>
                  <span>•</span>
                  <span className="text-text font-medium">{treatment.price}</span>
                  <span>•</span>
                  <span>{treatment.duration}</span>
                </div>

                {/* Treatment Headline */}
                <h3 className="font-bodoni text-2xl sm:text-4xl text-text font-normal mt-6 leading-tight">
                  {treatment.title}
                </h3>
                <p className="text-xs uppercase tracking-widest text-champagne font-jost mt-1 mb-4">
                  {treatment.subtitle}
                </p>

                {/* Description */}
                <p className="text-base text-muted font-jost font-light leading-relaxed mb-8">
                  {treatment.description}
                </p>

                {/* What is Included (Hairline list, no bullet emojis) */}
                <div className="pt-6 border-t border-champagne/30">
                  <h4 className="text-[11px] uppercase tracking-widest font-jost text-text font-medium mb-4">
                    What is Included in this Reservation:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 text-xs font-jost text-muted">
                    {treatment.includes.map((inc, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-champagne font-mono text-[10px] mt-0.5">
                          —
                        </span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Link */}
                <div className="mt-8">
                  <a
                    href="#booking"
                    className="inline-flex items-center text-xs uppercase tracking-widest font-jost text-text font-medium hover:text-champagne transition-colors border-b border-primary pb-0.5"
                  >
                    <span>Reserve {treatment.title}</span>
                    <span className="ml-2 font-mono">→</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

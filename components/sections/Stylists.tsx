"use client";

import React from "react";
import { siteContent, Stylist } from "@/content/site";
import { OffsetFrame } from "@/components/ui/OffsetFrame";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

interface StylistsProps {
  onSelectStylist?: (stylistId: string) => void;
}

export function Stylists({ onSelectStylist }: StylistsProps) {
  const { stylists } = siteContent;

  const stylistPhotos = [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  ];

  const handleBookWith = (stylistId: string) => {
    if (onSelectStylist) {
      onSelectStylist(stylistId);
    }
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="stylists"
      aria-label="Atelier Artists and Stylists"
      className="relative w-full py-20 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-champagne/40"
    >
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-12 border-b border-champagne/40">
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-12 h-[1px] bg-champagne" />
            <span className="text-xs uppercase tracking-widest font-jost text-muted">
              {stylists.eyebrow}
            </span>
          </div>
          <h2 className="font-bodoni text-3xl sm:text-5xl text-text font-normal">
            Senior <span className="italic">Atelier</span> Artists
          </h2>
        </div>
        <p className="mt-4 sm:mt-0 max-w-sm text-xs sm:text-sm font-jost text-muted font-light leading-relaxed">
          {stylists.subtitle}
        </p>
      </div>

      {/* Asymmetric Portrait Grid with Different Tile Heights */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 items-start">
        {stylists.list.map((artist: Stylist, idx: number) => {
          const photo = stylistPhotos[idx];
          const isSecondOrFourth = idx === 1 || idx === 3;

          return (
            <div
              key={artist.id}
              className={`flex flex-col justify-between ${
                isSecondOrFourth ? "lg:mt-12" : ""
              }`}
            >
              {/* Asymmetric Portrait with 1px Champagne Offset Frame */}
              <OffsetFrame frameOffset="sm" frameDirection="bottom-right">
                <ImagePlaceholder
                  src={photo}
                  aspectRatio={artist.aspectRatio}
                  label={`ARTIST 0${idx + 1}`}
                  brief={artist.imageBrief}
                  alt={artist.name}
                />
              </OffsetFrame>

              {/* Artist Meta & Information */}
              <div className="mt-6 flex flex-col justify-between">
                <div className="flex items-baseline justify-between border-b border-champagne/40 pb-2">
                  <h3 className="font-bodoni text-xl text-text font-medium">
                    {artist.name}
                  </h3>
                  <span className="font-mono text-[11px] text-champagne tracking-wider">
                    {artist.experienceYears} YRS
                  </span>
                </div>

                <p className="text-xs uppercase tracking-widest font-jost text-muted mt-2 font-medium">
                  {artist.speciality}
                </p>

                <p className="mt-3 text-xs font-jost text-muted font-light leading-relaxed line-clamp-3">
                  {artist.bio}
                </p>

                {/* Preselection Link into Booking Tool */}
                <div className="mt-6 pt-3 border-t border-champagne/30">
                  <button
                    onClick={() => handleBookWith(artist.id)}
                    type="button"
                    className="inline-flex items-center text-xs uppercase tracking-widest font-jost text-text font-medium hover:text-champagne transition-colors border-b border-primary pb-0.5"
                  >
                    <span>
                      Book with {artist.name.split(" ")[0]}
                    </span>
                    <span className="ml-2 font-mono">→</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

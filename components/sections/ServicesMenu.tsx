"use client";

import React, { useState } from "react";
import { siteContent, ServiceCategoryKey, ServiceItem } from "@/content/site";

export function ServicesMenu() {
  const { services } = siteContent;
  const [activeCategory, setActiveCategory] = useState<ServiceCategoryKey>("hair");

  const filteredItems = services.items.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section
      id="services"
      aria-label="Services and Price List"
      className="relative w-full py-20 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-champagne/40"
    >
      {/* Header with Editorial Typography */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-10 border-b border-champagne/40">
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-12 h-[1px] bg-champagne" />
            <span className="text-xs uppercase tracking-widest font-jost text-muted">
              {services.eyebrow}
            </span>
          </div>
          <h2 className="font-bodoni text-3xl sm:text-5xl text-text font-normal">
            Treatments & <span className="italic">Grooming</span>
          </h2>
        </div>
        <p className="mt-4 sm:mt-0 max-w-sm text-xs sm:text-sm font-jost text-muted font-light leading-relaxed">
          {services.subtitle}
        </p>
      </div>

      {/* Tabs Navigation (Radius 0, Solid Active Line) */}
      <div className="mt-8 sm:mt-12 flex items-center space-x-2 sm:space-x-8 overflow-x-auto pb-4 scrollbar-none border-b border-champagne/30">
        {services.categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              type="button"
              className={`relative px-4 sm:px-6 py-2.5 text-xs sm:text-sm uppercase tracking-widest font-jost transition-colors duration-200 flex-shrink-0 ${
                isActive
                  ? "text-text font-medium border-b-2 border-primary -mb-[1px]"
                  : "text-muted hover:text-text border-b-2 border-transparent"
              }`}
            >
              {cat.label}
              <span className="ml-1.5 text-[10px] font-mono text-champagne">
                (
                {
                  services.items.filter((item) => item.category === cat.key)
                    .length
                }
                )
              </span>
            </button>
          );
        })}
      </div>

      {/* Restaurant Menu Styled Grid with Dotted Leaders */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
        {filteredItems.map((item: ServiceItem) => (
          <div
            key={item.id}
            data-testid="service-item"
            className="group flex flex-col justify-between py-2 transition-colors duration-200"
          >
            {/* Top Line: Service Name + Dotted Leader + Price */}
            <div className="flex items-baseline justify-between w-full">
              <span className="font-bodoni text-lg sm:text-xl text-text font-medium">
                {item.name}
              </span>
              <span className="dotted-leader" aria-hidden="true" />
              <span className="font-bodoni text-lg sm:text-xl text-text font-normal whitespace-nowrap pl-2">
                {item.priceFormatted}
              </span>
            </div>

            {/* Bottom Line: Description + Duration Badge */}
            <div className="flex items-baseline justify-between mt-1 text-xs font-jost text-muted">
              <p className="max-w-md font-light pr-4">{item.description}</p>
              <span className="font-mono text-[11px] tracking-wider text-champagne whitespace-nowrap">
                {item.durationMinutes} mins
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Service Consultation Notice */}
      <div className="mt-16 pt-8 border-t border-champagne/40 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-jost text-muted gap-4">
        <p>
          * Complimentary scalp and skin diagnostics included with every first
          appointment.
        </p>
        <a
          href="#booking"
          className="inline-flex items-center text-text font-medium uppercase tracking-widest hover:text-champagne transition-colors border-b border-primary pb-0.5"
        >
          <span>Select Treatments in Booking Tool</span>
          <span className="ml-2 font-mono">↓</span>
        </a>
      </div>
    </section>
  );
}

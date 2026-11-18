"use client";

import React, { useState } from "react";
import { siteContent, FAQItem } from "@/content/site";

export function FAQ() {
  const { faq } = siteContent;
  const [openIds, setOpenIds] = useState<string[]>(["faq-1"]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative w-full py-20 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-champagne/40"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-12 border-b border-champagne/40 mb-12">
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-12 h-[1px] bg-champagne" />
            <span className="text-xs uppercase tracking-widest font-jost text-muted">
              {faq.eyebrow}
            </span>
          </div>
          <h2 className="font-bodoni text-3xl sm:text-5xl text-text font-normal">
            Studio <span className="italic">Etiquette</span> & Policies
          </h2>
        </div>
        <p className="mt-4 sm:mt-0 text-xs font-jost text-muted tracking-widest uppercase">
          6 REAL INQUIRIES
        </p>
      </div>

      {/* Accordion List with Hairline Dividers */}
      <div className="divide-y divide-champagne/40 border-b border-champagne/40">
        {faq.items.map((item: FAQItem, idx: number) => {
          const isOpen = openIds.includes(item.id);

          return (
            <div key={item.id} className="py-6 sm:py-8">
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                className="w-full text-left flex items-start justify-between space-x-6 group focus:outline-none"
              >
                <div className="flex items-start space-x-6">
                  <span className="font-mono text-xs text-champagne pt-1">
                    0{idx + 1}
                  </span>
                  <span className="font-bodoni text-xl sm:text-2xl text-text group-hover:italic transition-all">
                    {item.question}
                  </span>
                </div>
                <span className="font-mono text-lg text-champagne pt-1 flex-shrink-0">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="mt-4 pl-12 pr-6 max-w-3xl text-sm font-jost text-muted font-light leading-relaxed animate-fadeIn">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

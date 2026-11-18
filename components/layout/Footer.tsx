"use client";

import React from "react";
import Link from "next/link";
import { siteContent } from "@/content/site";

export function Footer() {
  const { nap, visit } = siteContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      aria-label="Site Footer"
      className="relative w-full bg-bg border-t-2 border-primary pt-20 pb-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Oversized Editorial Sign-Off in Italic Bodoni Moda */}
      <div className="pb-16 sm:pb-24 border-b border-champagne/40 flex flex-col justify-center">
        <span className="text-xs uppercase tracking-widest font-jost text-muted mb-4 block">
          ATELIER NOOR • KANPUR
        </span>
        <h2 className="font-bodoni italic text-6xl sm:text-8xl md:text-9xl text-text font-normal leading-[0.9] tracking-tight">
          {visit.footerSignoff}
        </h2>
      </div>

      {/* Footer Navigation Columns */}
      <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-jost text-muted">
        <div>
          <span className="block text-[11px] uppercase tracking-widest text-text font-medium mb-3">
            Treatments
          </span>
          <ul className="space-y-2">
            <li>
              <a href="#services" className="hover:text-text transition-colors">
                Haircut & French Gloss
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-text transition-colors">
                Sothys Facials & Peels
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-text transition-colors">
                Russian Dry Manicure
              </a>
            </li>
            <li>
              <a href="#signatures" className="hover:text-text transition-colors">
                24K Gold Ritual
              </a>
            </li>
          </ul>
        </div>

        <div>
          <span className="block text-[11px] uppercase tracking-widest text-text font-medium mb-3">
            Bridal Atelier
          </span>
          <ul className="space-y-2">
            <li>
              <a href="#bridal" className="hover:text-text transition-colors">
                The Engagement Edit
              </a>
            </li>
            <li>
              <a href="#bridal" className="hover:text-text transition-colors">
                The Wedding Ceremony
              </a>
            </li>
            <li>
              <a href="#bridal" className="hover:text-text transition-colors">
                Reception Glamour
              </a>
            </li>
            <li>
              <a href="#bridal" className="hover:text-text transition-colors">
                Studio Trial Request
              </a>
            </li>
          </ul>
        </div>

        <div>
          <span className="block text-[11px] uppercase tracking-widest text-text font-medium mb-3">
            Concierge
          </span>
          <ul className="space-y-2">
            <li>
              <a href={`https://wa.me/${nap.whatsappNumber}`} className="hover:text-text transition-colors">
                WhatsApp: {nap.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={nap.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">
                Instagram: {nap.instagramHandle}
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-text transition-colors">
                Studio Etiquette & Policies
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-between items-start md:items-end">
          <div>
            <span className="block text-[11px] uppercase tracking-widest text-text font-medium mb-1">
              Location
            </span>
            <p className="text-right sm:text-left">{nap.neighborhood}, {nap.city}</p>
          </div>
          <button
            onClick={scrollToTop}
            type="button"
            className="mt-6 md:mt-0 text-xs uppercase tracking-widest text-text font-medium border-b border-champagne hover:border-primary transition-colors pb-0.5"
          >
            Back to Top ↑
          </button>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="pt-8 border-t border-champagne/30 flex flex-col sm:flex-row items-center justify-between text-[11px] font-jost text-muted gap-4">
        <p>
          © {new Date().getFullYear()} {nap.name}. Established {nap.establishedYear} in Kanpur. All rights reserved.
        </p>
        <p className="text-champagne font-mono">
          DESIGNED FOR NOOR SALON & SPA • KANPUR
        </p>
      </div>
    </footer>
  );
}

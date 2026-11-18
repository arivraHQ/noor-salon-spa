"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/content/site";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const { leftLinks, rightLinks, cta } = siteContent.navigation;
  const allNavLinks = [...leftLinks, ...rightLinks, { label: cta.label, href: cta.href }];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-colors duration-editorial ease-editorial ${
          isScrolled
            ? "bg-bg/95 border-b border-champagne/40 backdrop-none"
            : "bg-bg border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 sm:h-24 flex items-center justify-between relative">
          {/* Left Navigation (Desktop) */}
          <nav
            aria-label="Primary Navigation Left"
            className="hidden lg:flex items-center space-x-8 xl:space-x-10 w-1/3"
          >
            {leftLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-xs tracking-widest uppercase font-jost text-text hover:text-text transition-colors duration-200 py-1"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Centered Wordmark with Brand Logo Emblem */}
          <div className="flex flex-col items-center justify-center text-center lg:w-1/3">
            <Link
              href="/"
              className="inline-flex items-center space-x-3 group cursor-pointer focus:outline-none focus:ring-1 focus:ring-champagne"
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/logo-emblem.png"
                  alt="Noor Salon & Spa Emblem"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bodoni text-2xl sm:text-3xl tracking-[0.16em] text-text font-normal leading-none">
                  NOOR
                </span>
                <span className="text-[8px] tracking-ultra text-muted uppercase font-jost mt-1">
                  Salon & Spa • Kanpur
                </span>
              </div>
            </Link>
          </div>

          {/* Right Navigation & CTA (Desktop) */}
          <div className="hidden lg:flex items-center justify-end space-x-8 xl:space-x-10 w-1/3">
            <nav
              aria-label="Primary Navigation Right"
              className="flex items-center space-x-8 xl:space-x-10"
            >
              {rightLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative text-xs tracking-widest uppercase font-jost text-text hover:text-text transition-colors duration-200 py-1"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            {/* Book Appointment CTA Link */}
            <a
              href={cta.href}
              className="group relative text-xs tracking-widest uppercase font-jost text-text font-medium border-b border-primary pb-0.5 hover:border-champagne transition-colors duration-300"
            >
              <span>{cta.label}</span>
              <span className="absolute -bottom-[1px] left-0 w-full h-[1px] bg-champagne origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-xs uppercase tracking-widest font-jost text-text p-2 -mr-2 focus:outline-none focus:ring-1 focus:ring-champagne flex items-center space-x-2"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="text-[11px] font-medium">Menu</span>
              <div className="w-5 flex flex-col space-y-1.5 justify-center">
                <span
                  className={`block h-[1px] w-5 bg-primary transition-transform duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                  }`}
                />
                <span
                  className={`block h-[1px] w-5 bg-primary transition-transform duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Takeover */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-50 bg-bg flex flex-col justify-between p-8 sm:p-12 lg:hidden overflow-y-auto animate-fadeIn"
        >
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between border-b border-champagne/40 pb-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8 overflow-hidden flex-shrink-0">
                <Image
                  src="/images/logo-emblem.png"
                  alt="Noor Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bodoni text-2xl tracking-[0.2em] text-text leading-none">NOOR</span>
                <span className="text-[9px] tracking-widest uppercase text-muted mt-1">Kanpur</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xs tracking-widest uppercase font-jost text-text py-2 px-3 border border-champagne/60 hover:bg-blush transition-colors"
            >
              Close [×]
            </button>
          </div>

          {/* Nav Links in Large Editorial Serif */}
          <nav className="my-10 flex flex-col space-y-5">
            {allNavLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex items-baseline justify-between py-1 border-b border-champagne/20"
              >
                <span className="font-bodoni text-2xl sm:text-3xl text-text group-hover:italic transition-all duration-300">
                  {link.label}
                </span>
                <span className="text-xs font-mono text-muted tracking-widest">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>

          {/* Bottom Details (Kanpur Studio NAP) */}
          <div className="pt-6 border-t border-champagne/40 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-xs font-jost text-muted">
            <div>
              <p className="font-medium text-text uppercase tracking-widest text-[10px] mb-1">
                Studio Address
              </p>
              <p>{siteContent.nap.address}</p>
            </div>
            <div>
              <p className="font-medium text-text uppercase tracking-widest text-[10px] mb-1">
                Direct Inquiries
              </p>
              <a
                href={`https://wa.me/${siteContent.nap.whatsappNumber}`}
                className="text-text underline hover:text-primary"
              >
                WhatsApp Concierge
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

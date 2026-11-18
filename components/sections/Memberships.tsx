"use client";

import React from "react";
import { siteContent, MembershipPlan } from "@/content/site";

export function Memberships() {
  const { memberships, nap } = siteContent;

  const handleInquire = (planName: string) => {
    const text = encodeURIComponent(
      `Hello Noor Salon & Spa Kanpur,\nI would like to inquire about enrolling in ${planName} membership.\nPlease share the enrollment procedure.`
    );
    window.open(`https://wa.me/${nap.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section
      id="memberships"
      aria-label="Studio Memberships"
      className="relative w-full py-20 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-champagne/40"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-12 border-b border-champagne/40">
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-12 h-[1px] bg-champagne" />
            <span className="text-xs uppercase tracking-widest font-jost text-muted">
              {memberships.eyebrow}
            </span>
          </div>
          <h2 className="font-bodoni text-3xl sm:text-5xl text-text font-normal">
            Studio <span className="italic">Memberships</span>
          </h2>
        </div>
        <p className="mt-4 sm:mt-0 max-w-sm text-xs sm:text-sm font-jost text-muted font-light leading-relaxed">
          {memberships.subtitle}
        </p>
      </div>

      {/* Clean Two-Column Editorial Comparison (NOT cards) */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-champagne/40 border-b border-champagne/40">
        {memberships.plans.map((plan: MembershipPlan, idx: number) => (
          <div
            key={plan.id}
            className={`py-12 ${
              idx === 0 ? "md:pr-14" : "md:pl-14"
            } flex flex-col justify-between`}
          >
            <div>
              {/* Cadence Tag */}
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-champagne">
                  PROGRAM 0{idx + 1}
                </span>
                <span className="text-xs font-jost uppercase tracking-widest text-muted">
                  {plan.cadence}
                </span>
              </div>

              {/* Title & Price */}
              <h3 className="font-bodoni text-3xl sm:text-4xl text-text font-normal">
                {plan.name}
              </h3>
              <p className="mt-2 text-xs font-jost text-muted italic">
                {plan.description}
              </p>

              <div className="my-8 pb-8 border-b border-champagne/30">
                <span className="font-bodoni text-4xl sm:text-5xl text-text font-medium">
                  {plan.priceFormatted}
                </span>
                <span className="ml-3 font-jost text-xs uppercase tracking-widest text-muted">
                  / {plan.period}
                </span>
              </div>

              {/* Inclusions List */}
              <div className="space-y-4">
                <span className="block text-xs uppercase tracking-widest font-jost text-text font-medium mb-4">
                  Privileges Included:
                </span>
                {plan.benefits.map((benefit, bIdx) => (
                  <div
                    key={bIdx}
                    className="flex items-start space-x-3 text-xs sm:text-sm font-jost text-muted"
                  >
                    <span className="text-champagne font-mono text-xs mt-0.5">
                      —
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inquire Action Button */}
            <div className="mt-12 pt-6 border-t border-champagne/30">
              <button
                onClick={() => handleInquire(plan.name)}
                type="button"
                className="w-full py-4 text-xs uppercase tracking-widest font-jost text-text border border-champagne hover:bg-primary hover:text-bg hover:border-primary transition-colors flex items-center justify-center space-x-3"
              >
                <span>Inquire for {plan.name}</span>
                <span className="font-mono">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

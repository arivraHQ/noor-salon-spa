"use client";

import React, { useState, useMemo } from "react";
import { siteContent, ServiceItem, Stylist } from "@/content/site";

interface BookingToolProps {
  preselectedStylistId?: string;
  onClearPreselectedStylist?: () => void;
}

export function BookingTool({
  preselectedStylistId,
}: BookingToolProps) {
  const { services, stylists, booking, nap } = siteContent;

  // Selected Services IDs (Multi-select) - default to hair-1
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([
    "hair-1",
  ]);

  // Selected Stylist ID (optional)
  const [selectedStylistId, setSelectedStylistId] = useState<string>(
    preselectedStylistId || ""
  );

  // Sync if prop changes
  React.useEffect(() => {
    if (preselectedStylistId) {
      setSelectedStylistId(preselectedStylistId);
    }
  }, [preselectedStylistId]);

  // Selected Date (default to tomorrow)
  const tomorrowStr = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  }, []);

  const [selectedDate, setSelectedDate] = useState<string>(tomorrowStr);
  const [selectedSlot, setSelectedSlot] = useState<string>(
    booking.timeSlots[1]
  );
  const [clientName, setClientName] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");

  // Toggle service selection
  const toggleService = (id: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Selected services objects
  const selectedServices = useMemo(() => {
    return services.items.filter((item) => selectedServiceIds.includes(item.id));
  }, [selectedServiceIds, services.items]);

  // Calculations
  const totalDuration = useMemo(() => {
    return selectedServices.reduce((acc, curr) => acc + curr.durationMinutes, 0);
  }, [selectedServices]);

  const totalPrice = useMemo(() => {
    return selectedServices.reduce((acc, curr) => acc + curr.priceValue, 0);
  }, [selectedServices]);

  // Selected stylist object
  const selectedStylist = useMemo(() => {
    return stylists.list.find((s) => s.id === selectedStylistId);
  }, [selectedStylistId, stylists.list]);

  // Build WhatsApp URL
  const whatsappUrl = useMemo(() => {
    const servicesListText = selectedServices
      .map((s) => `• ${s.name} (${s.priceFormatted})`)
      .join("\n");

    const stylistText = selectedStylist
      ? `${selectedStylist.name} (${selectedStylist.speciality})`
      : "Any Available Senior Artist";

    const message = `Hello Noor Salon & Spa Kanpur,
I would like to reserve an appointment:

*Selected Services:*
${servicesListText || "• No service selected"}

*Preferred Stylist:* ${stylistText}
*Preferred Date:* ${selectedDate}
*Preferred Time Slot:* ${selectedSlot}
*Estimated Duration:* ${totalDuration} minutes
*Estimated Total:* ₹${totalPrice.toLocaleString("en-IN")}

${clientName ? `*Client Name:* ${clientName}\n` : ""}${
      clientPhone ? `*Contact Number:* ${clientPhone}\n` : ""
    }Please confirm chair availability. Thank you.`;

    return `https://wa.me/${nap.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
  }, [
    selectedServices,
    selectedStylist,
    selectedDate,
    selectedSlot,
    totalDuration,
    totalPrice,
    clientName,
    clientPhone,
    nap.whatsappNumber,
  ]);

  return (
    <section
      id="booking"
      aria-label="Interactive Reservation Tool"
      className="relative w-full py-20 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-champagne/40"
    >
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-12 border-b border-champagne/40">
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-12 h-[1px] bg-champagne" />
            <span className="text-xs uppercase tracking-widest font-jost text-muted">
              {booking.eyebrow}
            </span>
          </div>
          <h2 className="font-bodoni text-3xl sm:text-5xl text-text font-normal">
            Reserve Your <span className="italic">Chair</span>
          </h2>
        </div>
        <p className="mt-4 sm:mt-0 max-w-sm text-xs sm:text-sm font-jost text-muted font-light leading-relaxed">
          {booking.subtitle}
        </p>
      </div>

      {/* Main Interactive Studio Grid */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Interactive Form (7 Columns) */}
        <div className="lg:col-span-7 space-y-12">
          {/* Step 1: Pick Services (Multi-Select) */}
          <div>
            <div className="flex items-baseline justify-between mb-4 border-b border-champagne/30 pb-2">
              <span className="text-xs uppercase tracking-widest font-jost font-medium text-text">
                1. Select Services (Multi-Select)
              </span>
              <span className="text-[11px] font-mono text-champagne">
                {selectedServiceIds.length} SELECTED
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin">
              {services.items.map((svc: ServiceItem) => {
                const isSelected = selectedServiceIds.includes(svc.id);
                return (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => toggleService(svc.id)}
                    className={`p-4 text-left transition-colors flex flex-col justify-between border ${
                      isSelected
                        ? "border-primary bg-blush/30"
                        : "border-champagne/40 bg-bg hover:border-champagne"
                    }`}
                  >
                    <div className="flex items-start justify-between w-full">
                      <span className="font-bodoni text-base text-text font-medium leading-snug">
                        {svc.name}
                      </span>
                      <span
                        className={`w-4 h-4 border flex items-center justify-center text-[10px] ml-2 flex-shrink-0 ${
                          isSelected
                            ? "bg-primary text-bg border-primary font-bold"
                            : "border-champagne bg-transparent"
                        }`}
                      >
                        {isSelected ? "✓" : ""}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs font-jost text-muted pt-2 border-t border-champagne/20">
                      <span>{svc.priceFormatted}</span>
                      <span className="font-mono text-[11px]">
                        {svc.durationMinutes}m
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Pick Stylist (Optional) */}
          <div>
            <div className="flex items-baseline justify-between mb-4 border-b border-champagne/30 pb-2">
              <span className="text-xs uppercase tracking-widest font-jost font-medium text-text">
                2. Senior Artist Preference (Optional)
              </span>
              <span className="text-[11px] font-mono text-champagne">
                {selectedStylist ? selectedStylist.name : "ANY ARTIST"}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              <button
                type="button"
                onClick={() => setSelectedStylistId("")}
                className={`p-3 text-xs font-jost tracking-wider uppercase text-center border transition-colors ${
                  !selectedStylistId
                    ? "border-primary bg-primary text-bg font-medium"
                    : "border-champagne/40 bg-bg text-muted hover:border-champagne"
                }`}
              >
                Any Artist
              </button>
              {stylists.list.map((st: Stylist) => {
                const isSelected = selectedStylistId === st.id;
                return (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setSelectedStylistId(st.id)}
                    className={`p-3 text-xs font-jost tracking-wider uppercase text-center border transition-colors ${
                      isSelected
                        ? "border-primary bg-primary text-bg font-medium"
                        : "border-champagne/40 bg-bg text-muted hover:border-champagne"
                    }`}
                  >
                    {st.name.split(" ")[0]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Date & Slot Pickers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Date Input */}
            <div>
              <label
                htmlFor="booking-date"
                className="block text-xs uppercase tracking-widest font-jost font-medium text-text mb-3 border-b border-champagne/30 pb-2"
              >
                3. Reservation Date
              </label>
              <input
                id="booking-date"
                type="date"
                min={tomorrowStr}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-3.5 bg-bg border border-champagne/60 text-text font-jost text-sm focus:outline-none focus:border-primary"
              />
              <span className="block mt-1 text-[11px] font-jost text-muted">
                Studio open Tue – Sun (Mon closed for trials)
              </span>
            </div>

            {/* Time Slot Picker */}
            <div>
              <span className="block text-xs uppercase tracking-widest font-jost font-medium text-text mb-3 border-b border-champagne/30 pb-2">
                4. Preferred Time Window
              </span>
              <div className="grid grid-cols-3 gap-2">
                {booking.timeSlots.map((slot) => {
                  const isSelected = selectedSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-2.5 text-xs font-mono text-center border transition-colors ${
                        isSelected
                          ? "border-primary bg-primary text-bg"
                          : "border-champagne/40 bg-bg text-muted hover:border-champagne"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Step 4: Optional Client Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-champagne/30">
            <div>
              <label
                htmlFor="client-name"
                className="block text-[11px] uppercase tracking-widest font-jost text-muted mb-1"
              >
                Your Full Name (Optional)
              </label>
              <input
                id="client-name"
                type="text"
                placeholder="e.g. Radhika Singhania"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full p-3 bg-bg border border-champagne/50 text-text text-xs font-jost focus:outline-none focus:border-primary placeholder:text-muted/60"
              />
            </div>
            <div>
              <label
                htmlFor="client-phone"
                className="block text-[11px] uppercase tracking-widest font-jost text-muted mb-1"
              >
                WhatsApp Mobile (Optional)
              </label>
              <input
                id="client-phone"
                type="tel"
                placeholder="e.g. +91 98765 43210"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full p-3 bg-bg border border-champagne/50 text-text text-xs font-jost focus:outline-none focus:border-primary placeholder:text-muted/60"
              />
            </div>
          </div>
        </div>

        {/* Right Live Reservation Summary Ticket (5 Columns) */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="border border-champagne p-6 sm:p-8 bg-bg flex flex-col justify-between relative">
            {/* Top Hairline Voucher Header */}
            <div className="flex items-center justify-between border-b border-champagne/40 pb-4 text-xs font-jost uppercase tracking-widest text-muted">
              <span>RESERVATION SUMMARY</span>
              <span className="font-mono text-champagne">CIVIL LINES</span>
            </div>

            {/* Selected Services Itemized List */}
            <div className="my-6 space-y-3 min-h-[140px]">
              {selectedServices.length === 0 ? (
                <p className="text-xs font-jost italic text-muted py-6 text-center">
                  Please select at least one treatment on the left.
                </p>
              ) : (
                selectedServices.map((svc) => (
                  <div
                    key={svc.id}
                    className="flex items-baseline justify-between text-xs font-jost py-1 border-b border-champagne/15"
                  >
                    <span className="text-text font-medium">{svc.name}</span>
                    <span className="font-mono text-text pl-2 whitespace-nowrap">
                      {svc.priceFormatted}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Reservation Logistics Meta */}
            <div className="pt-4 border-t border-champagne/40 space-y-2 text-xs font-jost text-muted">
              <div className="flex justify-between">
                <span>Stylist:</span>
                <span className="text-text font-medium">
                  {selectedStylist ? selectedStylist.name : "Senior Artist on Duty"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Date & Time:</span>
                <span className="text-text font-medium">
                  {selectedDate} at {selectedSlot}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Duration:</span>
                <span className="font-mono text-text font-medium">
                  {totalDuration} mins
                </span>
              </div>
            </div>

            {/* Estimated Total */}
            <div className="my-6 pt-6 border-t-2 border-primary flex items-baseline justify-between">
              <div>
                <span className="block text-xs uppercase tracking-widest font-jost text-muted">
                  Estimated Total:
                </span>
                <span className="text-[10px] text-muted/80">
                  Taxes & Diagnostics Included
                </span>
              </div>
              <span
                data-testid="booking-total"
                className="font-bodoni text-3xl sm:text-4xl text-text font-medium"
              >
                ₹{totalPrice.toLocaleString("en-IN")}
              </span>
            </div>

            {/* Direct WhatsApp Confirmation Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-primary text-bg font-jost text-xs uppercase tracking-widest text-center hover:bg-text hover:text-blush transition-colors flex items-center justify-center space-x-3 border border-primary focus:outline-none focus:ring-1 focus:ring-champagne"
            >
              <span>Confirm on WhatsApp</span>
              <span className="font-mono">→</span>
            </a>

            <p className="mt-3 text-[10px] font-jost text-center text-muted uppercase tracking-wider">
              No Advance Payment Required • Pay at Salon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

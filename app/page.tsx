"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { ServicesMenu } from "@/components/sections/ServicesMenu";
import { SignatureTreatments } from "@/components/sections/SignatureTreatments";
import { Bridal } from "@/components/sections/Bridal";
import { Stylists } from "@/components/sections/Stylists";
import { BookingTool } from "@/components/sections/BookingTool";
import { Gallery } from "@/components/sections/Gallery";
import { Memberships } from "@/components/sections/Memberships";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { Visit } from "@/components/sections/Visit";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const [selectedStylistId, setSelectedStylistId] = useState<string>("");

  return (
    <main className="min-h-screen bg-bg text-text relative selection:bg-blush selection:text-text">
      <Navbar />
      <Hero />
      <Intro />
      <ServicesMenu />
      <SignatureTreatments />
      <Bridal />
      <Stylists onSelectStylist={(id) => setSelectedStylistId(id)} />
      <BookingTool preselectedStylistId={selectedStylistId} />
      <Gallery />
      <Memberships />
      <Reviews />
      <FAQ />
      <Visit />
      <Footer />
    </main>
  );
}

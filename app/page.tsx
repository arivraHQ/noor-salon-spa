import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { ServicesMenu } from "@/components/sections/ServicesMenu";
import { SignatureTreatments } from "@/components/sections/SignatureTreatments";
import { Bridal } from "@/components/sections/Bridal";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text relative selection:bg-blush selection:text-text">
      <Navbar />
      <Hero />
      <Intro />
      <ServicesMenu />
      <SignatureTreatments />
      <Bridal />
    </main>
  );
}

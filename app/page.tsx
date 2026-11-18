import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text relative selection:bg-blush selection:text-text">
      <Navbar />
      <Hero />
    </main>
  );
}

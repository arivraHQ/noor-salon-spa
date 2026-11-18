import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bodoni",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noor Salon & Spa — Civil Lines, Kanpur",
  description:
    "An unhurried sanctuary for bespoke haircuts, French skin rituals, handcrafted nail architecture, and couture bridal artistry in Kanpur.",
  openGraph: {
    title: "Noor Salon & Spa — Civil Lines, Kanpur",
    description: "Beauty, unhurried. Bespoke hair, skin, bridal and spa in Civil Lines, Kanpur.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Noor Salon & Spa",
    image: "https://noorsalon.in/og-image.jpg",
    "@id": "https://noorsalon.in",
    url: "https://noorsalon.in",
    telephone: "+919000000000",
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "14/82 Civil Lines, Opposite Green Park Stadium",
      addressLocality: "Kanpur",
      addressRegion: "Uttar Pradesh",
      postalCode: "208001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.4716,
      longitude: 80.3475,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "11:00",
        closes: "19:00",
      },
    ],
    sameAs: ["https://www.instagram.com/noorsalonkanpur"],
  };

  return (
    <html lang="en" className={`${bodoniModa.variable} ${jost.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg text-text antialiased selection:bg-blush selection:text-text font-jost">
        {children}
      </body>
    </html>
  );
}

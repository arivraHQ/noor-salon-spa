# 5. DEPLOYMENT & LAUNCH RUNBOOK

## 1. Pre-Flight Verification Checklist
Before any release or production build candidate is signed off:
- [ ] **Strict Type Checking**: `npx tsc --noEmit` passes with 0 errors.
- [ ] **Linting & Code Quality**: `npm run lint` passes with 0 warnings/errors.
- [ ] **Production Build**: `npm run build` completes with optimized static generation and valid bundle output.
- [ ] **Console Audit**: Real browser test confirms 0 console errors or warnings.
- [ ] **Responsive Visual QA**: Screenshot checks complete at 375px and 1440px across all 13 sections.
- [ ] **Git Protocol**: Clean commit history following conventional commits (`feat: navbar`, `feat: hero`, etc.).

---

## 2. SEO & Local Business Structured Data (JSON-LD)

The application embeds high-fidelity schema markup in `app/layout.tsx` targeting local search intent for Kanpur luxury salons:

```json
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Noor Salon & Spa",
  "image": "https://noorsalon.in/og-image.jpg",
  "@id": "https://noorsalon.in",
  "url": "https://noorsalon.in",
  "telephone": "+919000000000",
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "14/82 Civil Lines, Opposite Green Park Stadium",
    "addressLocality": "Kanpur",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "208001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.4716,
    "longitude": 80.3475
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/noorsalonkanpur"
  ]
}
```

---

## 3. Environment & Configuration
- **Node.js**: v20.x or v22.x LTS (Verified v22.16.0)
- **Deployment Platform Target**: Vercel / Static Export
- **Repository Policy**: Local git initialized; strictly **NO PUSH** to remote repository as instructed.

# Noor Salon & Spa — Civil Lines, Kanpur
> **Agency Portfolio Showcase** • *Beauty, unhurried.*

> [!IMPORTANT]
> **DEMO DISCLAIMER**: This web application is a fictional agency showcase and creative portfolio demonstration for **"Noor Salon & Spa" (Civil Lines, Kanpur)**. It is a concept prototype engineered to showcase high-ticket luxury editorial design, Next.js 15 App Router architecture, and interactive reservation flows. It does not represent an active commercial business. Phone numbers (+91 90000 00000), emails, and stylist profiles are demonstrative placeholders.

---

A bespoke, high-ticket editorial web experience crafted for **Noor Salon & Spa**, an unhurried unisex salon, skin clinic, and bridal atelier located in Civil Lines, Kanpur, Uttar Pradesh.

Designed and engineered under the **Anti-AI-Slop Protocol** and **Zero Fake Passes Standard**.

---

## 💎 Design Direction & Brand Personality

- **Visual Direction**: Fashion magazine editorial spread (Vogue / Kinfolk / Cereal). Quiet, unhurried, tactile, and confident.
- **Color Palette**:
  - `bg`: `#FAF5F0` (Alabaster Warm White canvas)
  - `blush`: `#EBD3C7` (Soft Rose Blush Accent)
  - `text`: `#1A1614` (Deep Charcoal Onyx Ink)
  - `primary`: `#1A1614` (Editorial Onyx)
  - `champagne`: `#C9A98A` (Hairline Metallic Champagne Accent & Frames)
  - `muted`: `#6E625B` (Warm Stone Muted Body — WCAG AA 4.65:1 Contrast Pass)
- **Typography Pairing**:
  - **Headings**: `Bodoni Moda` (Google Font) — Dynamic contrast mixing upright regular and italic cuts within the same headline (e.g., `Beauty, *unhurried.*`).
  - **Body & Accents**: `Jost` (Google Font) — Light weight geometric sans with wide tracking (`tracking-widest` / `tracking-ultra`) on eyebrows, labels, and prices.
- **Shape & Framing**:
  - `rounded-none` everywhere (0px radius). Zero pill buttons, zero rounded image wrappers.
  - Thin 1px champagne (`#C9A98A`) offset outlines floating 8–12px behind tall portrait crops (3:4, 4:5, 1:1).
  - Strictly **NO box shadows**, **NO gradients**, **NO glassmorphism / blur cards**.
- **Motion Principles**:
  - Custom editorial cubic-bezier: `[0.76, 0, 0.24, 1]` (800ms–1000ms duration).
  - Staggered word fade & rise on hero headlines.
  - Curtain wipe reveals on editorial imagery.
  - Desktop custom cursor follower ("View") on lookbook.
  - Fully compliant with `prefers-reduced-motion`.

---

## 🏛️ 13 Distinct Section Architecture

Every section features a unique editorial layout:

1. **Navbar**: Centered wordmark (`NOOR`) with split left/right navigation and draw-line hover animation. Transforms into an expansive full-screen takeover modal on mobile devices.
2. **Hero**: Giant mixed-italic headline (`Beauty, *unhurried.*`) overlapping a tall portrait image with 1px champagne offset framing, vertical side label (`Civil Lines • Kanpur Studio`), and direct reservation CTA.
3. **Intro**: Grounded narrative paragraph with a pull quote by Founder Zoya Siddiqui and two staggered editorial still-life images.
4. **Services Menu**: Tabbed price list (Hair, Skin, Nails, Bridal, Spa) styled like a luxury restaurant menu with dotted leaders and authentic Indian rupee (`₹`) pricing and service durations.
5. **Signature Treatments**: 3 large alternating image/text rows detailing the Civil Lines Hair Ritual, Noor Luminous Facial, and Pre-Couture Bridal Day with full inclusion lists.
6. **Bridal Suite**: Dedicated blush-toned section with 3 package tiers (The Engagement Edit, The Wedding Day, The Reception Gala) structured as a horizontal comparison list with trial inquiry action.
7. **Senior Atelier Artists**: Asymmetric portrait grid with varied tile heights (3:4, 4:5, 1:1) and "Book with her/him" buttons that preselect the artist directly in the booking tool.
8. **Interactive Booking Engine**: Client-side reactive reservation tool. Multi-select service basket, optional stylist preference, date picker, time slot selector, live itemized summary with dynamic duration and total calculation, and 1-click **"Confirm on WhatsApp"** URL generator (`wa.me`).
9. **Lookbook & Gallery**: Horizontal-scroll gallery with varied image sizes and captions (hair colour, bridal, nails, haircut, skin therapy) and custom desktop follower.
10. **Memberships**: Clean 2-column comparison layout (The Glow Club Monthly vs The Noor Circle Annual Patronage) with detailed privilege breakdowns.
11. **Reviews**: High-impact editorial quotation slider presenting genuine patron reflections with treatment and city tags.
12. **FAQ**: 6 real questions addressing patch tests, bridal trials, cancellation policies, product formulations (Sothys, Olaplex, Moroccanoil), men's grooming, and parking.
13. **Visit & Footer**: Studio address in Civil Lines, operating hours, schematic cartography map placeholder, contact channels, and giant sign-off (`"See you soon."`) in italic Bodoni Moda.

---

## ⚡ Verification & Lighthouse Performance Audit

Verified in headless Chromium browser via Playwright:

| Category | Score | Status |
| :--- | :---: | :---: |
| **Performance** | **99 / 100** | Exceeds Target (90+) |
| **Accessibility** | **96 / 100** | Exceeds Target (90+) |
| **Best Practices** | **100 / 100** | Perfect Score |
| **SEO** | **100 / 100** | Perfect Score (LocalBusiness Schema) |
| **Console Errors** | **0** | Zero Warnings, Zero Hydration Mismatches |

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS with custom CSS variable tokens
- **Animation**: Framer Motion
- **Icons / Favicon**: Bespoke circular monogram craft emblem (`N` + crescent + leaf)
- **Fonts**: `next/font/google` (Bodoni Moda & Jost)

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
# http://localhost:3000

# Run production build
npm run build
npm start
```

---

## 📄 License & Attribution

**ARIVRA Demo** — A product by [Arivra Design Labs](https://arivra.com/).  
Licensed under the [MIT License](LICENSE).

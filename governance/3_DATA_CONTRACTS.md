# 3. DATA CONTRACTS & SINGLE SOURCE OF TRUTH

## 1. Overview
All textual content, business metadata (NAP), pricing catalogs, service rosters, stylist profiles, membership plans, reviews, and FAQs reside in a centralized, strictly-typed file: `/content/site.ts`.

Components import this data directly. No content strings or pricing figures may be hardcoded inside JSX templates.

---

## 2. Core TypeScript Interfaces

```typescript
export interface NAPDetails {
  name: string;
  tagline: string;
  establishedYear: number;
  city: string;
  neighborhood: string;
  fullAddress: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappMessageTemplate: string;
  instagramHandle: string;
  instagramUrl: string;
  hours: {
    weekdays: string;
    sunday: string;
    closed: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
}

export type ServiceCategoryKey = 'hair' | 'skin' | 'nails' | 'bridal' | 'spa';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategoryKey;
  description: string;
  priceFormatted: string;
  priceValue: number; // in INR
  isPriceStartingAt?: boolean;
  durationMinutes: number;
  genderTarget?: 'unisex' | 'women' | 'men';
}

export interface SignatureTreatment {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  price: string;
  includes: string[];
  imagePlaceholder: {
    aspect: string;
    brief: string;
    alt: string;
  };
}

export interface BridalTier {
  id: string;
  name: string; // 'Engagement' | 'Wedding Day' | 'Reception'
  tagline: string;
  priceDisplay: string;
  duration: string;
  features: string[];
  idealFor: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  speciality: string;
  experienceYears: number;
  bio: string;
  imagePlaceholder: {
    aspect: string;
    brief: string;
    alt: string;
  };
}

export interface MembershipPlan {
  id: string;
  name: string;
  cadence: string;
  priceFormatted: string;
  billingPeriod: string;
  description: string;
  benefits: string[];
  exclusivePerk: string;
}

export interface ReviewItem {
  id: string;
  clientName: string;
  city: string;
  service: string;
  quote: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  widthClass: string;
  aspectRatio: string;
  imagePlaceholder: {
    brief: string;
    alt: string;
  };
}
```

---

## 3. Authoritative Business Data Schema (`/content/site.ts`)

### Business NAP (Kanpur)
- **Name**: Noor Salon & Spa
- **Location**: 14/82 Civil Lines, Opposite Green Park Stadium, Kanpur, Uttar Pradesh 208001
- **Contact**: +91 90000 00000 (Dummy WhatsApp & Call channel)
- **Instagram**: `@noorsalonkanpur`
- **Hours**: Tuesday – Sunday: 10:00 AM – 8:00 PM | Monday: Closed

### Services Catalog (Sample Indian INR Pricing)
1. **Hair**:
   - Signature Haircut & Styling: ₹600 (45 mins)
   - Luxury Keratin / Botoplex Infusion: ₹4,500+ (120 mins)
   - Global Colour & Gloss Finish: ₹3,500+ (150 mins)
   - Balayage / Babylights Artistry: ₹5,500+ (180 mins)
   - Moroccan Oil Deep Conditioning Ritual: ₹1,800 (60 mins)
   - Scalp Detox & High-Frequency Therapy: ₹1,500 (45 mins)
2. **Skin & Facials**:
   - Sothys Illuminating French Facial: ₹3,200 (75 mins)
   - Deep Pore Clarifying Charcoal Cleanse: ₹1,800 (60 mins)
   - 24K Gold Radiance Infusion: ₹4,200 (90 mins)
   - Hydradermie Moisture Shield: ₹2,800 (60 mins)
3. **Nails**:
   - Russian Dry Manicure & BIAB Gel: ₹1,800 (75 mins)
   - Rose Petal Luxury Spa Pedicure: ₹1,400 (60 mins)
   - Minimalist Hand-Painted Nail Art (Set): ₹2,200 (90 mins)
   - Acrylic Extensions & Sculpting: ₹2,600 (90 mins)
4. **Bridal**:
   - Signature Bridal HD Makeup & Draping: Price on Request (240 mins)
   - Airbrush Bridal Transformation: Price on Request (240 mins)
   - Bridal Skin Prep Ritual (3 sittings): ₹9,500 (180 mins)
5. **Body Spa**:
   - Traditional Balinese Deep Tissue Ritual: ₹2,800 (60 mins)
   - Warm Almond & Saffron Body Polish: ₹3,400 (75 mins)
   - Aromatherapy Stress Relief Massage: ₹2,500 (60 mins)

### Bridal Package Tiers
1. **The Engagement Edit**: ₹18,000 — Hair sculpting, HD makeup, signature lash architecture, floral styling, trial consultation.
2. **The Wedding Ceremony (Signature)**: ₹38,000 — Bespoke bridal trial, airbrush complexion finish, jewelry & dupatta styling, personalized bridal kit, skin glow infusion 48 hours prior.
3. **The Reception & Gala**: ₹24,000 — High-fashion evening look, dramatic eye contour, luxury hair extension integration, touch-up concierge.

### Booking Request Message Format (`wa.me`)
```text
Hello Noor Salon & Spa Kanpur,
I would like to request an appointment:

• Services: [List of selected services]
• Preferred Stylist: [Stylist name or "Any Senior Artist"]
• Preferred Date: [Selected Date, e.g. Friday, Nov 22]
• Preferred Slot: [Selected Time, e.g. 02:00 PM]
• Estimated Duration: [Total Minutes, e.g. 105 mins]
• Estimated Total: [₹ Total]

Client Name: [Placeholder for user]
Please confirm availability. Thank you.
```

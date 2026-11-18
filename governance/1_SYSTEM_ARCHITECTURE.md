# 1. SYSTEM ARCHITECTURE BLUEPRINT

## 1. Executive Summary & Objective
- **Project**: Noor Salon & Spa Showcase
- **Client Profile**: Fictional luxury unisex salon and spa established in 2014, Civil Lines, Kanpur, Uttar Pradesh.
- **Goal**: Agency portfolio masterpiece delivering high-conversion appointment bookings via WhatsApp and bridal package enquiries.
- **Visual Direction**: Fashion magazine editorial spread, soft luxury, quiet confidence.

---

## 2. Tech Stack Specification
| Layer | Technology | Rationale & Strict Constraints |
| :--- | :--- | :--- |
| **Framework** | Next.js 15+ (App Router) | High-performance React server/client hybrid, streaming, optimized font and image loading. |
| **Language** | TypeScript (Strict Mode) | Complete type safety, zero `any`, strictly typed data contracts. |
| **Styling** | Tailwind CSS + CSS Variables | Centralized semantic design tokens in `globals.css` and `tailwind.config.ts`. Zero raw hex values in JSX. |
| **Animation** | Framer Motion | Smooth cubic-bezier transitions `[0.76, 0, 0.24, 1]`, curtain wipes, staggered headline reveals, accessible with `prefers-reduced-motion`. |
| **Typography** | `next/font/google` | Zero layout shift font loading for **Bodoni Moda** (headings) and **Jost** (body). |
| **Icons** | Custom Inline SVGs | Zero external icon bloat, zero emoji-as-icons, refined hairline strokes (1px-1.5px). |
| **QA / Testing** | Playwright + Headless Chromium | Automated end-to-end verification, responsive viewport testing (375px & 1440px), console error detection. |

---

## 3. Directory & File Architecture
```text
salon-spa-demo/
├── .agents/
│   ├── rules/
│   │   └── design-rules.md
│   └── PROJECT_MEMORY.md
├── AGENTS.md                          # Workspace rules (Tokens, Anti-patterns)
├── governance/
│   ├── 1_SYSTEM_ARCHITECTURE.md       # Tech stack, state rules, folder structure
│   ├── 2_DESIGN_SYSTEM.md             # Hex tokens, typography scales, motion
│   ├── 3_DATA_CONTRACTS.md            # TypeScript schema & data contracts
│   ├── 4_QA_PLAYBOOK.md               # Acceptance criteria, Playwright tests
│   └── 5_DEPLOYMENT_RUNBOOK.md        # Build, SEO schema, launch checklist
├── content/
│   └── site.ts                        # Single Source of Truth (Services, Prices, Copy, NAP)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                 # Split desktop nav, mobile full-screen takeover
│   │   ├── Footer.tsx                 # Oversized editorial sign-off, NAP, links
│   │   └── MobileMenuModal.tsx        # Elegant mobile overlay with curtain stagger
│   ├── sections/
│   │   ├── Hero.tsx                   # Oversized mixed italic type, portrait overlap, Kanpur tag
│   │   ├── Intro.tsx                  # Staggered editorial narrative & pull quote
│   │   ├── ServicesMenu.tsx           # Tabbed dotted-leader restaurant-style price list
│   │   ├── SignatureTreatments.tsx    # 3 alternating deep-dive editorial rows
│   │   ├── Bridal.tsx                 # Blush comparison suite & trial enquiry CTA
│   │   ├── Stylists.tsx               # Asymmetric portrait grid with direct booking preselect
│   │   ├── BookingTool.tsx            # Multi-select reactive booking engine + WhatsApp generator
│   │   ├── Gallery.tsx                # Horizontal lookbook with custom "View" cursor
│   │   ├── Memberships.tsx            # Clean 2-column comparison (Glow Club vs Annual)
│   │   ├── Reviews.tsx                # 4 large italic quotes with client metadata
│   │   ├── FAQ.tsx                    # 6 accordion items (patch test, cancellation, etc.)
│   │   └── Visit.tsx                  # Address, map placeholder, hours, contact channels
│   └── ui/
│       ├── OffsetFrame.tsx            # 1px champagne offset border wrapper
│       ├── CursorFollower.tsx         # Desktop gallery hover follower
│       ├── Button.tsx                 # Radius-0 luxury action button
│       └── TextReveal.tsx             # Word-by-word rising text animation
├── app/
│   ├── layout.tsx                     # Global fonts, metadata, tokens, body wrapper
│   ├── page.tsx                       # Main editorial journey stitching all sections
│   ├── globals.css                    # Tailwind directives, CSS variables, keyframes
│   └── icon.svg                       # Bespoke minimalist monogram favicon
├── public/
│   └── images/                        # High-resolution curated editorial placeholders
├── tailwind.config.ts                 # Token definitions mapped to CSS variables
├── tsconfig.json                      # Strict TypeScript compiler options
└── package.json
```

---

## 4. State Management & Data Flow Architecture
1. **Single Source of Truth (`/content/site.ts`)**:
   - All text, phone numbers, prices in INR (₹), services, stylists, memberships, and reviews are declared in a typed configuration file.
   - Zero hardcoded text inside presentation components.
2. **Booking Tool State Machine**:
   - Pure client-side reactive React state (`useState`, `useMemo`).
   - Selected Services (`selectedServiceIds: string[]`): Multi-select with real-time recalculation of total cost and service duration.
   - Selected Stylist (`selectedStylistId: string | null`): Allows selecting any stylist or pre-filling from the Stylists section via URL hash or callback.
   - Selected Date & Time Slot: Date picker constraint (next 30 days, Tuesday-Sunday) and available time slots (10:00 AM to 7:00 PM).
   - WhatsApp Action Dispatcher: Encodes all parameters into a human-formatted WhatsApp message dispatched to `https://wa.me/919000000000?text=...`.
3. **Responsive Navigation State**:
   - Desktop: Centered wordmark with left/right link distribution and underline draw on hover.
   - Mobile: Hamburger toggle transitioning into an expansive full-screen takeover with lockable body scroll.

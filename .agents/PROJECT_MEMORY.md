# PROJECT MEMORY: Noor Salon & Spa (Kanpur)

## Project Overview
- **Client**: Noor Salon & Spa (Unisex Premium Salon & Spa, Civil Lines, Kanpur, Uttar Pradesh)
- **Role**: Principal Full-Stack Architect & Lead Product Designer (Boutique Design Studio)
- **Type**: Agency Portfolio Showcase
- **Personality**: High-Ticket Editorial, Warm Luxury, Soft, Confident (Fashion magazine spread aesthetic)
- **Target Deliverable**: Mobile-first luxury web experience with live multi-service WhatsApp booking tool and bridal enquiries.

## Tech Stack & Tooling
- **Framework**: Next.js 15+ (App Router)
- **Language**: Strict TypeScript
- **Styling**: Tailwind CSS with custom design tokens (`bg: #FAF5F0`, `blush: #EBD3C7`, `text: #1A1614`, `primary: #1A1614`, `champagne: #C9A98A`, `muted: #6E625B`)
- **Animation**: Framer Motion (custom cubic bezier `[0.76, 0, 0.24, 1]`, duration 800-1000ms, curtain wipe reveals, staggered word rises, desktop cursor follower, `prefers-reduced-motion` compliance)
- **Typography**: Google Fonts via `next/font` — Bodoni Moda (headings, italic accent mix) + Jost (body & tracked uppercase labels)
- **Content Architecture**: Single Source of Truth in `/content/site.ts`

## Key Architectural Decisions
1. **Zero AI Slop**: Strict ban on purple/indigo gradients, bouncy Tailwind cards, stock photos of smiling corporate people or generic stones/lotus flowers, and buzzwords.
2. **Phase 0 Governance**: Full blueprint initialized in `/governance/` prior to writing feature code.
3. **Verified QA Loop**: Real headless browser verification and Playwright assertions (0 console errors, LCP < 2.0s, CLS < 0.1).
4. **Interactive WhatsApp Booking Engine**: Client-side state machine managing multi-select service basket, stylist pre-selection, date/time slot selection, real-time total price/duration calculation, and pre-formatted WhatsApp enquiry generator (`wa.me`).
5. **Editorial Framed Photography**: 1px champagne offset outline behind tall portrait crop image containers.

## Milestones & Status
- [x] Phase 0: Governance Blueprints & Project Memory Initialized
- [x] Phase 0: Step 0 Setup (`uipro init --ai antigravity`, design-system search, git init, initial commit)
- [x] Phase 1: Scaffold Next.js App Router project with tokenized Tailwind & Bodoni Moda/Jost fonts
- [x] Phase 2: Section 1 (Navbar) + Section 2 (Hero) — Verified via Playwright at 375px and 1440px with 0 console errors
- [x] Phase 3: Sections 3-13 complete build with individual commit history & headless browser verification
- [x] Phase 4: Lighthouse 90+ audit (Performance: 99, Accessibility: 96, Best Practices: 100, SEO: 100), QA Playbook execution, and final documentation

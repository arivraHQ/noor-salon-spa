# WORKSPACE RULES & DESIGN SPECIFICATION: NOOR SALON & SPA

## DESIGN SYSTEM (FINAL & AUTHORITATIVE)

### Color Tokens (Never hardcode raw hex values in components)
- `bg`: `#FAF5F0` (Alabaster Warm White)
- `blush`: `#EBD3C7` (Soft Rose Blush Accent)
- `text`: `#1A1614` (Deep Charcoal Ink)
- `primary`: `#1A1614` (Editorial Onyx)
- `champagne`: `#C9A98A` (Subtle Metallic Champagne Border/Accent)
- `muted`: `#8C7F78` (Warm Stone Muted Body / Secondary)

### Typography
- **Headings**: Bodoni Moda (Google Font)
  - Mix regular and italic inside the same headline for editorial contrast (e.g. `Beauty, *unhurried.*`).
- **Body**: Jost (Google Font)
  - Light weight (300/400), wide letter tracking (`tracking-widest` / `tracking-[0.2em]`) on small uppercase labels and eyebrows.
- **Scale**:
  - Hero: `110px-140px` desktop / `52px` mobile
  - H2: `64px` desktop / `36px` mobile
  - Body: `16px` base (`1.6` line-height)

### Shape & Framing
- **Radius**: `0` everywhere (`rounded-none`). No rounded buttons, no pill badges, no rounded image frames.
- **Frames**: Thin 1px champagne (`#C9A98A`) offset outlines behind images (image sits slightly off its frame by 8-12px).
- **Aspect Ratios**: Tall portrait crops (3:4, 2:3, 4:5).
- **Shadows & Gradients**: Absolutely NO box shadows, NO drop shadows, NO gradient fills, NO glassmorphism.

### Layout Philosophy
- Image-led, expansive negative space.
- Overlapping oversized typography layering over photographs.
- Asymmetric editorial columns.
- Small vertical side labels (`writing-mode: vertical-rl`).
- Mobile-first responsive hierarchy.

### Motion Principles
- **Easing**: Custom cubic bezier `[0.76, 0, 0.24, 1]`
- **Duration**: `800ms - 1000ms`, slow, deliberate, editorial luxury.
- **Image Reveal**: Elegant curtain wipe (clip-path or sliding mask).
- **Headlines**: Staggered word fade & rise.
- **Gallery**: Subtle desktop custom cursor follower ("View").
- **Accessibility**: Strict compliance with `prefers-reduced-motion`.

---

## BANNED PATTERNS & ANTI-AI-SLOP PROTOCOL

### Visual & Styling Bans
- NO purple/blue SaaS gradients, NO neon accents, NO pink gradient blobs.
- NO glassmorphism, blur cards, or frosted glass overlays.
- NO glitter, sparkle, or faux luxury floating particle effects.
- NO 3-equal-cards grids or default bouncy Tailwind card wrappers.
- NO centered-everything layouts (centered navbar wordmark is the sole exception).
- NO emojis or icons inside circles/pills for decoration.
- NO hot-pink cheesy salon template look.
- NO stock lotus flowers, zen stones, or bamboo imagery.

### Typography Bans
- NO Inter, Roboto, Poppins, Montserrat, or Playfair Display.
- NO standard unstyled sans-serif headings.

### Copy & Tone Bans
- Strictly FORBIDDEN buzzwords:
  - "revolutionize"
  - "elevate"
  - "seamless"
  - "pamper yourself"
  - "glow up"
  - "self-care journey"
- NO Latin `lorem ipsum` placeholder text anywhere.
- Every sentence must be grounded, refined, and authentic to a high-end Kanpur studio.

---

## VERIFICATION & ZERO FAKE PASS PROTOCOL
- No task is marked complete without automated headless browser verification.
- Zero console errors (`console.error` = 0).
- Zero broken links, zero missing image alt tags.
- Core Web Vitals targets: LCP < 2.0s, CLS < 0.1.

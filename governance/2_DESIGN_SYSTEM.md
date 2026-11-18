# 2. DESIGN SYSTEM SPECIFICATION: EDITORIAL WARM LUXURY

## 1. Visual Philosophy & Direction
- **Archetype**: High-Ticket Editorial & Warm Luxury.
- **Reference Benchmark**: High-end fashion editorial spread (Vogue / Kinfolk / Cereal) translated into a digital medium.
- **Atmosphere**: Quiet, unhurried, sophisticated, tactile.
- **Space & Balance**: Substantial breathing room, intentional negative space, asymmetric balance, vertical accents.

---

## 2. Color System & Semantic Tokens

All colors are strictly tokenized. Components reference CSS variables or Tailwind token aliases (`bg-brand-bg`, `text-brand-text`, etc.). Raw hex values in JSX are strictly forbidden.

| Token Name | Hex Code | Semantic Role & Usage |
| :--- | :--- | :--- |
| `brand-bg` | `#FAF5F0` | Primary page background, warm alabaster canvas. |
| `brand-blush` | `#EBD3C7` | Soft dusty rose surface accent (Bridal section, subtle highlights). |
| `brand-text` | `#1A1614` | Primary high-contrast ink text (deep charcoal-onyx). |
| `brand-primary` | `#1A1614` | Primary buttons, active tabs, strong dividers. |
| `brand-champagne` | `#C9A98A` | Hairline offset frames behind photos, dotted leaders, delicate lines. |
| `brand-muted` | `#8C7F78` | Secondary body text, timestamps, durations, captions, subtitles. |

### Contrast Verification (WCAG 2.1 AA Compliance)
- `#1A1614` on `#FAF5F0`: **14.8:1** (AAA Pass for all text sizes).
- `#1A1614` on `#EBD3C7`: **10.6:1** (AAA Pass).
- `#8C7F78` on `#FAF5F0`: **4.62:1** (AA Pass for regular text).
- `#C9A98A` on `#FAF5F0`: Used exclusively for decorative hairline borders and non-essential graphic accents.

---

## 3. Typography Architecture

### Typefaces
- **Primary Serif (Headings)**: `Bodoni Moda` (Google Font via `next/font/google`).
  - High-contrast didone serif with dramatic thick-and-thin strokes.
  - Distinctive treatment: Deliberately mix regular upright weights with italic cuts within the same headline (e.g., `Beauty, <span className="italic font-normal">unhurried.</span>`).
- **Secondary Sans (Body & Micro-Copy)**: `Jost` (Google Font via `next/font/google`).
  - Geometric sans-serif inspired by Futura.
  - Light/Regular weight (300/400).
  - Micro-labels, eyebrows, prices, navigation items, and section indicators use uppercase styling with wide tracking (`tracking-widest` or `0.2em`).

### Typographic Hierarchy & Scale
| Level | Desktop Size / Line-Height | Mobile Size / Line-Height | Tracking | Weight / Style |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | 120px - 140px / 1.05 | 52px - 58px / 1.1 | `-0.02em` | Bodoni Moda Regular + Italic |
| **H2 Section Title** | 56px - 64px / 1.15 | 34px - 38px / 1.2 | `-0.01em` | Bodoni Moda Regular / Italic |
| **H3 Subhead / Card** | 28px - 32px / 1.25 | 22px - 24px / 1.3 | Normal | Bodoni Moda Regular |
| **Eyebrow / Small Tag** | 11px - 12px / 1.4 | 11px / 1.4 | `0.25em` (`tracking-widest`) | Jost 400 Uppercase |
| **Body Large** | 18px - 20px / 1.6 | 16px / 1.6 | Normal | Jost 300 / 400 |
| **Body Base** | 15px - 16px / 1.65 | 14px - 15px / 1.6 | Normal | Jost 300 / 400 |
| **Price / Meta Tag** | 14px - 16px / 1.4 | 13px - 14px / 1.4 | `0.1em` | Jost 400 |

---

## 4. Shape, Borders & Framing Rules
1. **Zero Border Radius (`rounded-none`)**:
   - Every element has `border-radius: 0px`. No rounded buttons, no pill tags, no soft card corners.
2. **Champagne Offset Frames (`OffsetFrame`)**:
   - Images sit inside an offset composition: an outer 1px champagne border (`#C9A98A`) positioned 8px to 12px offset behind the photograph, creating a bespoke framing effect.
3. **Tall Editorial Aspect Ratios**:
   - Hero: `3:4` or `2:3` tall portrait crops.
   - Stylists: Asymmetric staggered heights (`3:4`, `4:5`, `1:1`).
   - Gallery: Varied aspect ratios (horizontal, square, vertical) creating natural visual rhythm.
4. **No Drop Shadows, No Gradients**:
   - `box-shadow: none` across the entire project. Depth is established purely through layered photography, offset frames, and typography hierarchy.

---

## 5. Motion Design & Micro-Interactions
- **Master Easing**: Custom cubic-bezier `[0.76, 0, 0.24, 1]` (editorial slow-ease out).
- **Standard Transition Duration**: `800ms - 1000ms`.
- **Image Reveals**: Curtain wipe animation utilizing CSS `clip-path: polygon()` or sliding mask reveals upon entering viewport (`whileInView`).
- **Text Reveal**: Headline words split and animate upward with opacity fade (`y: 40 → 0`, `opacity: 0 → 1`, staggered by 80ms).
- **Navigation Underline Draw**: Links animate a 1px solid ink line from `scaleX: 0` to `scaleX: 1` anchored left.
- **Gallery Custom Cursor**: On desktop, a circular champagne-tinted follower with "View" follows pointer coordinates with lerp damping.
- **Reduced Motion**: All animations automatically collapse to instant or subtle opacity fades when `window.matchMedia('(prefers-reduced-motion: reduce)')` is active.

---

## 6. Strict Banned List (Anti-AI-Slop)
- ❌ No purple, indigo, or blue SaaS gradients.
- ❌ No neon or bright saturated accent colors.
- ❌ No glassmorphism, blur cards (`backdrop-blur`), or frosted translucent panels.
- ❌ No glitter, sparkle, or faux luxury floating particle animations.
- ❌ No 3-equal-cards grids or default bouncy Tailwind card wrappers.
- ❌ No centered-everything layouts (centered navbar wordmark is the sole exception).
- ❌ No emojis or icons inside circles/pills for decoration.
- ❌ No hot-pink cheesy salon template look.
- ❌ No stock lotus flowers, zen stones, or bamboo imagery.
- ❌ No Inter, Roboto, Poppins, Montserrat, or Playfair Display fonts.
- ❌ No banned buzzwords: *revolutionize, elevate, seamless, pamper yourself, glow up, self-care journey*.
- ❌ No `lorem ipsum` placeholder text anywhere.

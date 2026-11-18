# 4. QA PLAYBOOK & VERIFICATION SPECIFICATION

## 1. Acceptance Criteria & Quality Gates
Under the Anti-AI-Slop and Zero Fake Passes protocol, no code is considered complete or production-ready until verified in a real headless browser with tangible proof.

### Zero Fake Pass Rules
1. **Zero Console Errors**: 0 uncaught errors or React hydration warnings.
2. **Zero Broken Links**: All internal anchor links (`#services`, `#bridal`, `#booking`, `#visit`) scroll smoothly to target anchors.
3. **Responsive Verification**: Verified at both 375px (mobile) and 1440px (desktop).
4. **Interactive Feature Verification**:
   - Mobile menu opens and closes seamlessly.
   - Services tabs toggle categories and render accurate prices with dotted leaders.
   - Stylist "Book with her/him" button pre-populates the booking tool.
   - Multi-select booking tool updates live total (₹) and duration (mins), generates valid WhatsApp URL.
   - FAQ accordion expands and collapses with keyboard accessibility (`Enter` / `Space`).
   - Gallery horizontal lookbook scrolls cleanly without breaking document viewport.

---

## 2. Responsive Breakpoint Test Matrix

| Viewport | Target Device | Critical Checks |
| :--- | :--- | :--- |
| **375px × 812px** | Mobile (iPhone SE / 13 Mini) | - Fullscreen drawer navigation operates smoothly.<br>- Hero title wraps naturally without clipping or overflowing.<br>- Price list dotted leaders collapse gracefully to stack if necessary.<br>- Booking tool summary sticks or remains easily viewable.<br>- Horizontal lookbook allows touch swiping. |
| **768px × 1024px** | Tablet (iPad Portrait) | - Multi-column layouts break down into balanced 2-column or 1-column layouts.<br>- Offset frames do not collide with adjacent text columns. |
| **1440px × 900px** | Desktop (MacBook Pro) | - Centered split navigation links render balanced with hover underline animations.<br>- Mixed italic editorial hero typography scales dynamically (120-140px).<br>- Desktop custom cursor follower activates over the gallery.<br>- Dotted leaders align cleanly with right-aligned INR prices. |

---

## 3. Playwright Automated Test Script Template

```typescript
import { test, expect } from '@playwright/test';

test.describe('Noor Salon & Spa - Quality Verification Suite', () => {
  test.beforeEach(async ({ page }) => {
    // Monitor for console errors
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        console.error(`Page Console Error: ${msg.text()}`);
      }
    });
    await page.goto('http://localhost:3000');
  });

  test('Navbar and Hero section render cleanly without layout overflow', async ({ page }) => {
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Beauty');
    
    // Check horizontal scrollbar does not exist
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });

  test('Services menu tab switching functions accurately', async ({ page }) => {
    const skinTab = page.locator('button:has-text("Skin")');
    await skinTab.click();
    await expect(page.locator('text=Sothys Illuminating French Facial')).toBeVisible();
  });

  test('Stylist pre-selection triggers booking tool state', async ({ page }) => {
    const stylistCard = page.locator('button:has-text("Book with")').first();
    await stylistCard.click();
    await expect(page.locator('#booking')).toBeInViewport();
  });

  test('Booking tool updates total calculation and WhatsApp link', async ({ page }) => {
    const serviceCheckbox = page.locator('[data-testid="service-item"]').first();
    await serviceCheckbox.click();
    
    const totalDisplay = page.locator('[data-testid="booking-total"]');
    await expect(totalDisplay).not.toHaveText('₹0');

    const whatsappBtn = page.locator('a:has-text("Confirm on WhatsApp")');
    const href = await whatsappBtn.getAttribute('href');
    expect(href).toContain('https://wa.me/919000000000');
    expect(href).toContain('Services');
  });
});
```

---

## 4. Performance & Accessibility Gates (Lighthouse Targets)
- **Performance**: > 90 (FCP < 1.2s, LCP < 2.0s, CLS < 0.1).
- **Accessibility**: > 95 (WCAG 2.1 AA compliance, semantic markup, focus outlines, valid ARIA).
- **Best Practices**: 100.
- **SEO**: 100 (Structured schema markup, metadata, OpenGraph).

import { chromium } from 'playwright';

async function testBookingEngine() {
  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(1000);

  // 1. Verify initial total contains ₹600 (default haircut)
  const initialTotal = await page.locator('[data-testid="booking-total"]').textContent();
  console.log(`Initial Booking Total: ${initialTotal}`);
  if (!initialTotal?.includes('600')) {
    throw new Error(`Expected initial total to be 600, got ${initialTotal}`);
  }

  // 2. Click another service (e.g. Sothys Paris Illuminating Facial ₹3,400)
  const facialBtn = page.locator('button:has-text("Sothys Paris Illuminating Facial")');
  await facialBtn.click();
  await page.waitForTimeout(300);

  // Total should now be 600 + 3400 = 4,000
  const updatedTotal = await page.locator('[data-testid="booking-total"]').textContent();
  console.log(`Updated Booking Total after facial: ${updatedTotal}`);
  if (!updatedTotal?.includes('4,000')) {
    throw new Error(`Expected updated total to be 4,000, got ${updatedTotal}`);
  }

  // 3. Test Stylist preselect button from Stylists section
  const bookWithKabir = page.locator('button:has-text("Book with Kabir")');
  await bookWithKabir.click();
  await page.waitForTimeout(500);

  // Verify WhatsApp URL contains Kabir and 4,000
  const waLink = page.locator('a:has-text("Confirm on WhatsApp")');
  const href = await waLink.getAttribute('href');
  console.log(`Generated WhatsApp URL sample: ${href?.substring(0, 120)}...`);

  if (!href?.includes('Kabir') || !href?.includes('4%2C000')) {
    throw new Error('WhatsApp URL did not properly encode Kabir or total amount');
  }

  console.log('Booking Engine Test Passed Successfully with 100% assertions!');
  await browser.close();
}

testBookingEngine().catch(err => {
  console.error(err);
  process.exit(1);
});

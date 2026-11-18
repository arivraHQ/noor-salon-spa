import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function run() {
  const screenshotsDir = path.resolve('public', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true
  });

  const errors = [];

  // 1. Desktop Test (1440px)
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const desktopPage = await desktopContext.newPage();
  desktopPage.on('console', msg => {
    if (msg.type() === 'error') errors.push(`[Desktop Console Error] ${msg.text()}`);
  });
  desktopPage.on('pageerror', err => {
    errors.push(`[Desktop Page Error] ${err.message}`);
  });
  desktopPage.on('requestfailed', req => {
    errors.push(`[Desktop Request Failed] ${req.url()} - ${req.failure()?.errorText}`);
  });

  await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(1200); // allow animations to settle
  await desktopPage.screenshot({ path: path.join(screenshotsDir, 'hero-1440px.png'), fullPage: false });

  // 2. Mobile Test (375px)
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 812 },
    isMobile: true
  });
  const mobilePage = await mobileContext.newPage();
  mobilePage.on('console', msg => {
    if (msg.type() === 'error') errors.push(`[Mobile Console Error] ${msg.text()}`);
  });
  mobilePage.on('pageerror', err => {
    errors.push(`[Mobile Page Error] ${err.message}`);
  });
  mobilePage.on('requestfailed', req => {
    errors.push(`[Mobile Request Failed] ${req.url()} - ${req.failure()?.errorText}`);
  });

  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1200);
  await mobilePage.screenshot({ path: path.join(screenshotsDir, 'hero-375px.png'), fullPage: false });

  // Also test Mobile Menu Toggle interaction
  const menuButton = mobilePage.locator('button[aria-label="Toggle navigation menu"]');
  await menuButton.click();
  await mobilePage.waitForTimeout(500);
  await mobilePage.screenshot({ path: path.join(screenshotsDir, 'hero-375px-menu-open.png'), fullPage: false });

  await browser.close();

  console.log(`Verification Complete!`);
  console.log(`Errors count: ${errors.length}`);
  if (errors.length > 0) {
    console.error('Errors found:', errors);
    process.exit(1);
  } else {
    console.log('Zero console errors! Screenshots saved successfully.');
    process.exit(0);
  }
}

run().catch(err => {
  console.error('Run failed:', err);
  process.exit(1);
});

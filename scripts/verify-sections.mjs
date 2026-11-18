import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function run() {
  const sectionName = process.argv[2] || 'section';
  const screenshotsDir = path.resolve('public', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true
  });

  const errors = [];

  // Desktop (1440px)
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

  await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(1000);
  await desktopPage.screenshot({ path: path.join(screenshotsDir, `${sectionName}-1440px.png`), fullPage: true });

  // Mobile (375px)
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

  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1000);
  await mobilePage.screenshot({ path: path.join(screenshotsDir, `${sectionName}-375px.png`), fullPage: true });

  await browser.close();

  console.log(`Verification Complete for ${sectionName}!`);
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

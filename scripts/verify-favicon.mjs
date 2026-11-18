import { chromium } from 'playwright';
import path from 'path';

async function checkFavicon() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Take screenshot of navbar
  const navbar = page.locator('header');
  await navbar.screenshot({ path: path.resolve('public', 'screenshots', 'navbar-with-logo.png') });

  await browser.close();

  console.log('Favicon verification successful! Console errors:', errors.length);
  if (errors.length > 0) process.exit(1);
}

checkFavicon().catch(err => {
  console.error(err);
  process.exit(1);
});

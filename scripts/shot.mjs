// Uso: node scripts/shot.mjs <url> <width> <out.png> [fullPage]
import { chromium } from 'playwright';

const [url, width = '1440', out = 'shot.png', full = 'false'] = process.argv.slice(2);

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: Number(width), height: 900 },
  deviceScaleFactor: 2,
});
await page.goto(url, { waitUntil: 'networkidle' });
// Rola a página inteira para disparar lazy-loads antes do fullPage
if (full === 'true') {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
}
await page.waitForTimeout(500);
await page.screenshot({ path: out, fullPage: full === 'true' });
await browser.close();
console.log('saved', out);

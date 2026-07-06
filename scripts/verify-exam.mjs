// Verificación de los ejemplos de examen por nivel.
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const OUT = process.env.SHOTS_DIR ?? '.verify-shots';
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
page.on('pageerror', (e) => console.log('PAGE-ERROR:', e.message));

await page.goto('http://localhost:4173/');
await page.waitForSelector('h1');

const examButtons = await page
  .getByRole('button', { name: /Ejemplo de examen/ })
  .allTextContents();
console.log('EXAM-BUTTONS:', examButtons);

// Abrir el examen A1 y responder la primera pregunta.
await page.getByRole('button', { name: /Ejemplo de examen A1/ }).click();
await page.waitForSelector('.exam-official');
console.log('OFFICIAL:', await page.locator('.exam-official').allTextContents());
await page.screenshot({ path: `${OUT}/exam-01-a1.png`, fullPage: true });

await page.getByRole('button', { name: 'Un saludo por la tarde' }).click();
console.log('X1-OK:', (await page.locator('.option.correct').count()) === 1);
await page.getByRole('button', { name: 'Continuar' }).click();
await page.screenshot({ path: `${OUT}/exam-02-a1-p2.png`, fullPage: true });

// PROBE: examen B2 (nivel «planned») también abre con su muestra.
await page.getByRole('button', { name: 'Volver' }).click();
await page.getByRole('button', { name: /Ejemplo de examen B2/ }).click();
await page.waitForSelector('.exam-official');
console.log('B2-COUNT:', await page.locator('.runner-count').textContent());
await page.screenshot({ path: `${OUT}/exam-03-b2.png`, fullPage: true });

await browser.close();
console.log('DONE');

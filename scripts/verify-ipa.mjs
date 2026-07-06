// Verificación del feature de transcripción fonética interactiva.
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const OUT = process.env.SHOTS_DIR ?? '.verify-shots';
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
page.on('pageerror', (e) => console.log('PAGE-ERROR:', e.message));

await page.goto('http://localhost:4173/');
await page.getByRole('button', { name: /Saludos y despedidas/ }).click();
await page.waitForSelector('.vocab-card');

const ipaCount = await page.locator('.ipa').count();
const symCount = await page.locator('.ipa-sym').count();
console.log(`IPA-BLOCKS=${ipaCount} IPA-SYMBOLS=${symCount}`);
await page.screenshot({ path: `${OUT}/ipa-01-vocab.png`, fullPage: true });

// Tocar el símbolo dʒ (bom dia BR) y comprobar la hoja de explicación.
await page.locator('.ipa-sym', { hasText: 'dʒ' }).first().click();
await page.waitForSelector('.sheet');
console.log('SHEET-TITLE:', await page.locator('.sheet-title').textContent());
console.log('SHEET-TEXT:', (await page.locator('.sheet .explanation').textContent())?.slice(0, 80));
await page.screenshot({ path: `${OUT}/ipa-02-sheet-dz.png` });

// Cerrar tocando el fondo.
await page.locator('.sheet-backdrop').click({ position: { x: 10, y: 10 } });
console.log('SHEET-CLOSED:', (await page.locator('.sheet').count()) === 0);

// PROBE: símbolo nasal con tilde combinante (ɐ̃) tokeniza como unidad.
await page.locator('.ipa-sym', { hasText: 'ɐ̃' }).first().click();
await page.waitForSelector('.sheet');
console.log('SHEET-NASAL:', await page.locator('.sheet-title').textContent());
await page.screenshot({ path: `${OUT}/ipa-03-sheet-nasal.png` });
await page.locator('.sheet-close').click();

// PROBE: pestaña Pronunciación también muestra IPA enlazado.
await page.getByRole('button', { name: /Pronunciación/ }).click();
const pronSyms = await page.locator('.pron-sample .ipa-sym').count();
console.log('PRON-TAB-SYMBOLS:', pronSyms);
await page.screenshot({ path: `${OUT}/ipa-04-pron.png`, fullPage: true });

// PROBE: la práctica sigue intacta (primer ejercicio responde bien).
await page.getByRole('button', { name: /Práctica/ }).click();
await page.getByRole('button', { name: 'Buenos días' }).click();
console.log('EXERCISE-OK:', (await page.locator('.option.correct').count()) === 1);

await browser.close();
console.log('DONE');

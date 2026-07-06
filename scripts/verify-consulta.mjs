// Verificación E2E de la sección Consulta.
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const OUT = process.env.SHOTS_DIR ?? '.verify-shots';
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
page.on('pageerror', (e) => console.log('PAGE-ERROR:', e.message));

await page.goto('http://localhost:4173/');
await page.waitForSelector('h1');

// Ir a Consulta con la barra inferior.
await page.getByRole('button', { name: /Consulta/ }).click();
await page.waitForSelector('.ref-card');
const cards = await page.locator('.ref-card .lesson-title').allTextContents();
console.log('REF-CARDS:', cards);
await page.screenshot({ path: `${OUT}/consulta-01-indice.png`, fullPage: true });

// Verbos: buscar «ter» y comprobar el subjuntivo futuro «tiveres».
await page.getByRole('button', { name: /Verbos/ }).click();
await page.locator('.input.search').fill('tener');
await page.getByRole('button', { name: /^ter tener/ }).click();
await page.waitForSelector('.ref-table');
const body = await page.locator('.app').innerText();
console.log('TER-TIVERES:', body.includes('tiveres'));
console.log('TER-TENHA:', body.includes('tenha'));
console.log('TER-TINHAMOS:', body.includes('tínhamos'));
await page.screenshot({ path: `${OUT}/consulta-02-verbo-ter.png`, fullPage: true });

// Volver y probar fonemas: abrir la hoja del símbolo ʁ.
await page.getByRole('button', { name: 'Volver' }).click();
await page.getByRole('button', { name: 'Volver' }).click();
await page.getByRole('button', { name: /Fonemas/ }).click();
await page.waitForSelector('.phoneme-row');
console.log('PHONEME-ROWS:', await page.locator('.phoneme-row').count());
await page.locator('.phoneme-sym', { hasText: 'ʁ' }).click();
await page.waitForSelector('.sheet');
console.log('SHEET:', await page.locator('.sheet-title').textContent());
await page.screenshot({ path: `${OUT}/consulta-03-fonemas.png` });
await page.locator('.sheet-close').click();

// Adjetivos: búsqueda de «esquisito» (falso amigo).
await page.getByRole('button', { name: 'Volver' }).click();
await page.getByRole('button', { name: /Adjetivos/ }).click();
await page.locator('.input.search').fill('esquisito');
const adjCards = await page.locator('.vocab-card').count();
console.log('ADJ-SEARCH-ESQUISITO:', adjCards);
await page.screenshot({ path: `${OUT}/consulta-04-adjetivos.png`, fullPage: true });

// Falsos amigos: búsqueda «embarazada».
await page.getByRole('button', { name: 'Volver' }).click();
await page.getByRole('button', { name: /Falsos amigos/ }).click();
await page.locator('.input.search').fill('embarazada');
console.log('FF-SEARCH:', await page.locator('.ff-card').count());
console.log('FF-TEXT:', (await page.locator('.ff-card').first().innerText()).slice(0, 90));

// Divergencias: búsqueda «autobús» en el léxico.
await page.getByRole('button', { name: 'Volver' }).click();
await page.getByRole('button', { name: /Divergencias/ }).click();
await page.locator('.input.search').fill('autobus');
const rows = await page.locator('.ref-table tbody tr').count();
console.log('LEXICON-AUTOBUS-ROWS:', rows);
await page.screenshot({ path: `${OUT}/consulta-05-divergencias.png` });

// Pronombres y números abren.
await page.getByRole('button', { name: 'Volver' }).click();
await page.getByRole('button', { name: /Pronombres/ }).click();
console.log('PRON-TABLES:', await page.locator('.ref-table').count());
await page.getByRole('button', { name: 'Volver' }).click();
await page.getByRole('button', { name: /Números/ }).click();
console.log('NUM-TABLES:', await page.locator('.ref-table').count());

// PROBE: búsqueda sin resultados muestra aviso.
await page.getByRole('button', { name: 'Volver' }).click();
await page.getByRole('button', { name: /Adverbios/ }).click();
await page.locator('.input.search').fill('zzzzz');
console.log('NO-RESULTS:', (await page.locator('.notice').textContent())?.slice(0, 40));

await browser.close();
console.log('DONE');

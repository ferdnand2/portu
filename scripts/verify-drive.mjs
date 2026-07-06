// Recorrido end-to-end de Portu con Playwright sobre el Edge del sistema.
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const OUT = process.env.SHOTS_DIR ?? '.verify-shots';
mkdirSync(OUT, { recursive: true });
const shots = [];
let step = 0;

async function shot(page, name) {
  step += 1;
  const file = `${OUT}/${String(step).padStart(2, '0')}-${name}.png`;
  await page.screenshot({ path: file, fullPage: true });
  shots.push(file);
  console.log(`SHOT ${file}`);
}

const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
page.on('console', (m) => {
  if (m.type() === 'error') console.log('CONSOLE-ERROR:', m.text());
});
page.on('pageerror', (e) => console.log('PAGE-ERROR:', e.message));

await page.goto('http://localhost:4173/');
await page.waitForSelector('h1');
console.log('TITLE:', await page.title());
await shot(page, 'home');

// Selector de variante: elegir Portugal y comprobar estado.
await page.getByRole('button', { name: /Portugal/ }).click();
const ptPressed = await page
  .getByRole('button', { name: /Portugal/ })
  .getAttribute('aria-pressed');
console.log('VARIANT-PT-PRESSED:', ptPressed);

// Abrir lección 1.
await page.getByRole('button', { name: /Saludos y despedidas/ }).click();
await page.waitForSelector('.vocab-card');
const cards = await page.locator('.vocab-card').count();
const brBadges = await page.locator('.badge-br').count();
const ptBadges = await page.locator('.badge-pt').count();
console.log(`VOCAB: cards=${cards} badgesBR=${brBadges} badgesPT=${ptBadges}`);
await shot(page, 'leccion1-vocab');

// Pestañas de gramática y pronunciación.
await page.getByRole('button', { name: /Gramática/ }).click();
console.log('GRAMMAR-H3:', await page.locator('h3').allTextContents());
await shot(page, 'leccion1-gramatica');
await page.getByRole('button', { name: /Pronunciación/ }).click();
await shot(page, 'leccion1-pronunciacion');

// Práctica completa de la lección 1 (respuestas correctas, con un fallo a propósito).
await page.getByRole('button', { name: /Práctica/ }).click();
await page.waitForSelector('.runner-header');
await shot(page, 'practica-e1-listen');

const continuar = () =>
  page.getByRole('button', { name: /Continuar|Ver resultado/ }).click();

// e1: listen-choice — FALLAR a propósito (probar el camino de error).
await page.getByRole('button', { name: 'Buenas noches' }).click();
const optClasses = await page.locator('.option.correct').count();
console.log('E1-WRONG: correct-highlight-count=', optClasses);
await shot(page, 'practica-e1-fallado');
await continuar();

// e2: listen-choice — correcto.
await page.getByRole('button', { name: 'Hasta mañana' }).click();
await continuar();

// e3: dictado — escribir sin tilde ni mayúscula (tolerancia).
await page.locator('.input').fill('boa noite');
await page.getByRole('button', { name: 'Comprobar' }).click();
console.log('E3-FEEDBACK:', await page.locator('.feedback').textContent());
await continuar();

// e4: read-choice.
await shot(page, 'practica-e4-read');
await page.getByRole('button', { name: /Una mujer/ }).click();
await continuar();

// e5: fill-blank con tolerancia de tildes ("obrigada" sin problema).
await page.locator('.input').fill('obrigada');
await page.getByRole('button', { name: 'Comprobar' }).click();
await continuar();

// e6: order-words — tocar chips en orden correcto.
for (const w of ['Olá,', 'tudo', 'bem?']) {
  await page.locator('.word-pool .word-chip', { hasText: w }).first().click();
}
await shot(page, 'practica-e6-order');
await page.getByRole('button', { name: 'Comprobar' }).click();
console.log('E6-FEEDBACK:', await page.locator('.feedback').textContent());
await continuar();

// e7: translate.
await page.locator('.input').fill('boa tarde');
await page.getByRole('button', { name: 'Comprobar' }).click();
await continuar();

// e8: translate con dos aceptadas — probar la variante PT «até já».
await page.locator('.input').fill('ate ja');
await page.getByRole('button', { name: 'Comprobar' }).click();
console.log('E8-FEEDBACK:', await page.locator('.feedback').textContent());
await continuar();

// e9/e10: hablar — sin micrófono real; en headless SpeechRecognition puede
// existir (Edge) pero fallar; observar qué camino sale.
await shot(page, 'practica-e9-speak');
const micBtn = page.getByRole('button', { name: /Hablar|practiqué/ });
console.log('E9-BUTTON:', await micBtn.first().textContent());
for (const _ of [1, 2]) {
  const fallback = page.getByRole('button', { name: /practiqué/ });
  if (await fallback.count()) {
    await fallback.click();
  } else {
    // Con reconocimiento "disponible" pero sin voz: dos intentos fallidos.
    for (let i = 0; i < 2; i++) {
      const b = page.getByRole('button', { name: /Hablar|Reintentar/ });
      await b.click();
      await page.waitForSelector('.feedback, .listening', { timeout: 15000 });
      await page
        .waitForSelector('.listening', { state: 'detached', timeout: 20000 })
        .catch(() => {});
      if (await page.locator('.btn.continue').count()) break;
    }
  }
  await page.waitForSelector('.btn.continue', { timeout: 20000 });
  await continuar();
}

// Resumen.
await page.waitForSelector('.summary');
console.log('SUMMARY:', await page.locator('.summary-score').textContent());
await shot(page, 'practica-resumen');

// Volver al inicio: progreso reflejado.
await page.getByRole('button', { name: 'Volver' }).click();
await page.waitForSelector('.lesson-row');
console.log('HOME-CHIPS:', await page.locator('.lesson-row .chip').allTextContents());
await shot(page, 'home-con-progreso');

// PROBE persistencia: recargar y comprobar que chip y variante sobreviven.
await page.reload();
await page.waitForSelector('.lesson-row');
console.log(
  'AFTER-RELOAD-CHIPS:',
  await page.locator('.lesson-row .chip').allTextContents(),
);
console.log(
  'AFTER-RELOAD-PT-PRESSED:',
  await page.getByRole('button', { name: /Portugal/ }).getAttribute('aria-pressed'),
);

// PROBE: localStorage corrupto no debe romper la app.
await page.evaluate(() => localStorage.setItem('portu.progress', '{corrupto###'));
await page.reload();
await page.waitForSelector('h1');
console.log(
  'CORRUPT-STORAGE-OK: app rendered, chips=',
  await page.locator('.lesson-row .chip').allTextContents(),
);
await shot(page, 'tras-storage-corrupto');

await browser.close();
console.log('DONE');

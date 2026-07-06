/**
 * Evaluación de respuestas (capa de dominio, funciones puras).
 * No sabe nada de React ni del navegador: es trivialmente testeable.
 */

/** Normaliza para comparar: minúsculas, sin puntuación, espacios colapsados. */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[.,;:!?¡¿"“”«»()\-—]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Quita diacríticos (á → a, ç → c) para comparaciones tolerantes. */
export function stripDiacritics(text: string): string {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

/**
 * ¿La respuesta del usuario coincide con alguna de las aceptadas?
 * Tolerante con mayúsculas, puntuación y tildes (para no frustrar en móvil),
 * pero la corrección mostrada siempre lleva la ortografía completa.
 */
export function matchesAccepted(input: string, accepted: string[]): boolean {
  const user = stripDiacritics(normalize(input));
  return accepted.some((a) => stripDiacritics(normalize(a)) === user);
}

/** Distancia de Levenshtein clásica. */
export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const curr = [i];
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    prev = curr;
  }
  return prev[b.length];
}

/**
 * Similitud [0..1] entre lo dicho y el objetivo, para el ejercicio de habla.
 * Compara sin tildes porque el reconocedor de voz ya devuelve su propia
 * ortografía y lo que evaluamos es la pronunciación, no la escritura.
 */
export function speechSimilarity(heard: string, target: string): number {
  const h = stripDiacritics(normalize(heard));
  const t = stripDiacritics(normalize(target));
  if (t.length === 0) return 0;
  const dist = levenshtein(h, t);
  return Math.max(0, 1 - dist / Math.max(h.length, t.length));
}

/** Umbral de aprobación para el ejercicio de habla. */
export const SPEECH_PASS_THRESHOLD = 0.75;

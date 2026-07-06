/**
 * Generador de ejercicios (capa de dominio, puro y determinista).
 *
 * A partir del vocabulario de una lección produce ejercicios en las 4
 * habilidades: escuchar (elegir significado, dictado), leer (elegir
 * significado), escribir (dictado, traducción) y hablar. Así cada lección
 * multiplica su práctica sin escribir ejercicios a mano, y el pool crece
 * solo al añadir vocabulario.
 *
 * Determinismo: los ids, distractores y posiciones de la respuesta salen de
 * un hash estable, de modo que el progreso guardado siga siendo válido
 * entre sesiones.
 */
import type {
  AudioVariant,
  Exercise,
  Lesson,
  VocabItem,
} from './content';
import type { MainVariant } from './progress';

function hash(s: string): number {
  let h = 5381;
  for (const ch of s) h = (h * 33 + (ch.codePointAt(0) ?? 0)) >>> 0;
  return h;
}

/** Quita la elipsis final de formas como «eu me chamo…». */
function clean(text: string): string {
  return text.replace(/…+$/u, '').trim();
}

/** Divide formas dobles como «obrigado / obrigada» en sus partes. */
function parts(text: string): string[] {
  return text.split(' / ').map(clean);
}

/** La forma que el estudiante practica: su variante principal si existe. */
function mainForm(item: VocabItem, main: MainVariant) {
  return (
    item.forms.find((f) => f.variant === main) ??
    item.forms.find((f) => f.variant === 'both') ??
    item.forms[0]
  );
}

/** «hola (informal)» → «hola», para no ofrecer distractores ambiguos. */
function baseMeaning(es: string): string {
  return es.split(' (')[0].trim();
}

function distractors(item: VocabItem, all: VocabItem[], n: number): string[] {
  return all
    .filter((v) => v.id !== item.id && baseMeaning(v.es) !== baseMeaning(item.es))
    .sort((a, b) => hash(a.id + item.id) - hash(b.id + item.id))
    .slice(0, n)
    .map((v) => v.es);
}

function withAnswer(
  item: VocabItem,
  wrong: string[],
): { options: string[]; answer: number } {
  const answer = hash(item.id) % (wrong.length + 1);
  const options = [...wrong];
  options.splice(answer, 0, item.es);
  return { options, answer };
}

export function generateExercises(lesson: Lesson, main: MainVariant): Exercise[] {
  const out: Exercise[] = [];
  for (const item of lesson.vocab) {
    const form = mainForm(item, main);
    const audioVariant: AudioVariant =
      form.variant === 'both' ? main : form.variant;
    const text = parts(form.text)[0];
    const wrong = distractors(item, lesson.vocab, 3);

    if (wrong.length >= 2) {
      const choice = withAnswer(item, wrong);
      out.push({
        id: `g-${item.id}-lc`,
        type: 'listen-choice',
        skill: 'listening',
        audio: { text, variant: audioVariant },
        question: '¿Qué significa lo que oyes?',
        options: choice.options,
        answer: choice.answer,
      });
      out.push({
        id: `g-${item.id}-rc`,
        type: 'read-choice',
        skill: 'reading',
        text: form.text,
        textVariant: form.variant,
        question: '¿Qué significa?',
        options: choice.options,
        answer: choice.answer,
      });
    }
    out.push({
      id: `g-${item.id}-dic`,
      type: 'dictation',
      skill: 'writing',
      audio: { text, variant: audioVariant },
    });
    out.push({
      id: `g-${item.id}-tr`,
      type: 'translate',
      skill: 'writing',
      es: item.es,
      accepted: item.forms.flatMap((f) =>
        parts(f.text).map((t) => ({ text: t, variant: f.variant })),
      ),
    });
    out.push({
      id: `g-${item.id}-sp`,
      type: 'speak',
      skill: 'speaking',
      target: { text, variant: audioVariant },
      translation: item.es,
    });
  }
  // Barajado determinista para mezclar palabras y habilidades.
  return out.sort((a, b) => hash(a.id) - hash(b.id));
}

/** Pool completo de práctica: ejercicios curados + generados del vocabulario. */
export function exercisePool(lesson: Lesson, main: MainVariant): Exercise[] {
  return [...lesson.exercises, ...generateExercises(lesson, main)];
}

/**
 * Modelo del contenido del curso (capa de dominio, sin dependencias).
 *
 * Todo el pensum se expresa con estos tipos. El compilador de TypeScript
 * valida el contenido: añadir una lección mal formada no compila.
 */

/** En qué variante se usa una forma: Brasil, Portugal o ambas. */
export type Variant = 'br' | 'pt' | 'both';

/** Variante concreta para audio: el TTS necesita un acento específico. */
export type AudioVariant = 'br' | 'pt';

/** Las 4 habilidades del MCER. */
export type Skill = 'listening' | 'reading' | 'writing' | 'speaking';

/** Una forma concreta de decir algo, marcada con su variante. */
export interface TermForm {
  text: string;
  variant: Variant;
  /** Matiz de uso, en español. */
  note?: string;
  /**
   * Transcripción fonética (AFI) por acento. Si la forma suena igual en
   * ambas variantes basta con dar una; si difieren, se dan las dos.
   * Los símbolos deben existir en el catálogo de `domain/ipa.ts`.
   */
  ipa?: { br?: string; pt?: string };
}

/**
 * Frase de ejemplo. Si es igual en ambas variantes se usa `both`;
 * si diverge, se dan `br` y `pt` por separado. `es` es la traducción.
 */
export interface Example {
  both?: string;
  br?: string;
  pt?: string;
  es: string;
}

/** Entrada de vocabulario: un concepto con una o más formas. */
export interface VocabItem {
  id: string;
  /** Significado en español. */
  es: string;
  forms: TermForm[];
  example?: Example;
}

/** Punto de gramática explicado en español. */
export interface GrammarPoint {
  id: string;
  title: string;
  /** Explicación en español; los saltos de línea separan párrafos. */
  explanation: string;
  examples: Example[];
  /** Nota específica sobre la divergencia BR/PT, si existe. */
  variantNote?: string;
}

/** Muestra de audio para una nota de pronunciación. */
export interface PronunciationSample {
  text: string;
  variant: Variant;
  /** Cómo suena, en aproximación para hispanohablantes. */
  hint?: string;
  /** Transcripción fonética (AFI) de la muestra en esta variante. */
  ipa?: string;
}

export interface PronunciationNote {
  id: string;
  title: string;
  explanation: string;
  samples: PronunciationSample[];
}

// ---------------------------------------------------------------------------
// Ejercicios. Es una unión discriminada por `type`: añadir un tipo nuevo de
// ejercicio = añadir un miembro aquí + registrar su componente en
// `ui/exercises/registry.tsx` (principio abierto/cerrado).
// ---------------------------------------------------------------------------

interface ExerciseBase {
  id: string;
  skill: Skill;
}

/** Escuchar un audio y elegir la opción correcta. */
export interface ListenChoiceExercise extends ExerciseBase {
  type: 'listen-choice';
  audio: { text: string; variant: AudioVariant };
  question: string;
  options: string[];
  answer: number;
}

/** Dictado: escuchar y escribir lo oído. */
export interface DictationExercise extends ExerciseBase {
  type: 'dictation';
  audio: { text: string; variant: AudioVariant };
}

/** Leer un texto y responder una pregunta de comprensión. */
export interface ReadChoiceExercise extends ExerciseBase {
  type: 'read-choice';
  text: string;
  textVariant: Variant;
  question: string;
  options: string[];
  answer: number;
}

/** Completar el hueco (`___`) de una frase. */
export interface FillBlankExercise extends ExerciseBase {
  type: 'fill-blank';
  sentence: string;
  accepted: string[];
  variant: Variant;
  translation?: string;
  hint?: string;
}

/** Ordenar palabras para formar una frase. */
export interface OrderWordsExercise extends ExerciseBase {
  type: 'order-words';
  words: string[];
  answer: string;
  variant: Variant;
  translation?: string;
}

/** Traducir del español; se aceptan formas de una o ambas variantes. */
export interface TranslateExercise extends ExerciseBase {
  type: 'translate';
  es: string;
  accepted: { text: string; variant: Variant }[];
}

/** Decir una frase en voz alta; se evalúa con reconocimiento de voz. */
export interface SpeakExercise extends ExerciseBase {
  type: 'speak';
  target: { text: string; variant: AudioVariant };
  translation?: string;
}

export type Exercise =
  | ListenChoiceExercise
  | DictationExercise
  | ReadChoiceExercise
  | FillBlankExercise
  | OrderWordsExercise
  | TranslateExercise
  | SpeakExercise;

// ---------------------------------------------------------------------------
// Estructura del pensum: Nivel MCER → Módulo temático → Lección.
// ---------------------------------------------------------------------------

export interface Lesson {
  id: string;
  title: string;
  description: string;
  vocab: VocabItem[];
  grammar: GrammarPoint[];
  pronunciation: PronunciationNote[];
  exercises: Exercise[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  status: 'available' | 'planned';
  lessons: Lesson[];
}

export type LevelId = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface Level {
  id: LevelId;
  name: string;
  description: string;
  status: 'available' | 'planned';
  modules: Module[];
}

export interface Curriculum {
  levels: Level[];
}

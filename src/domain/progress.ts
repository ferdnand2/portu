/**
 * Modelo del progreso del estudiante (capa de dominio, funciones puras).
 * Las mutaciones son inmutables: devuelven un estado nuevo, nunca modifican
 * el anterior. La persistencia vive en `services/storage.ts`.
 */

/** Variante que el estudiante practica activamente. */
export type MainVariant = 'br' | 'pt';

export const PROGRESS_VERSION = 1;

export interface ProgressState {
  version: typeof PROGRESS_VERSION;
  settings: {
    mainVariant: MainVariant;
  };
  /** lessonId → ids de ejercicios completados correctamente. */
  completed: Record<string, string[]>;
}

export function initialProgress(): ProgressState {
  return {
    version: PROGRESS_VERSION,
    settings: { mainVariant: 'br' },
    completed: {},
  };
}

export function markExerciseDone(
  state: ProgressState,
  lessonId: string,
  exerciseId: string,
): ProgressState {
  const done = state.completed[lessonId] ?? [];
  if (done.includes(exerciseId)) return state;
  return {
    ...state,
    completed: { ...state.completed, [lessonId]: [...done, exerciseId] },
  };
}

export function setMainVariant(
  state: ProgressState,
  variant: MainVariant,
): ProgressState {
  if (state.settings.mainVariant === variant) return state;
  return { ...state, settings: { ...state.settings, mainVariant: variant } };
}

export interface LessonCompletion {
  done: number;
  total: number;
}

export function lessonCompletion(
  state: ProgressState,
  contextId: string,
  pool: readonly { id: string }[],
): LessonCompletion {
  const done = state.completed[contextId] ?? [];
  const valid = pool.filter((e) => done.includes(e.id)).length;
  return { done: valid, total: pool.length };
}

/**
 * Controlador del progreso (patrón MVC: conecta el Modelo con la Vista).
 * Las vistas consumen esta API por contexto; nunca tocan el repositorio
 * ni localStorage directamente.
 */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  markExerciseDone,
  setMainVariant,
  type MainVariant,
  type ProgressState,
} from '../../domain/progress';
import {
  LocalStorageProgressRepository,
  type ProgressRepository,
} from '../../services/storage';

export interface ProgressApi {
  state: ProgressState;
  markDone(lessonId: string, exerciseId: string): void;
  setVariant(variant: MainVariant): void;
}

const ProgressContext = createContext<ProgressApi | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [repo] = useState<ProgressRepository>(
    () => new LocalStorageProgressRepository(),
  );
  const [state, setState] = useState<ProgressState>(() => repo.load());

  const update = useCallback(
    (fn: (s: ProgressState) => ProgressState) => {
      setState((s) => {
        const next = fn(s);
        if (next !== s) repo.save(next);
        return next;
      });
    },
    [repo],
  );

  const api = useMemo<ProgressApi>(
    () => ({
      state,
      markDone: (lessonId, exerciseId) =>
        update((s) => markExerciseDone(s, lessonId, exerciseId)),
      setVariant: (variant) => update((s) => setMainVariant(s, variant)),
    }),
    [state, update],
  );

  return <ProgressContext.Provider value={api}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressApi {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress debe usarse dentro de <ProgressProvider>');
  return ctx;
}

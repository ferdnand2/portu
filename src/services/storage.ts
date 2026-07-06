/**
 * Persistencia del progreso (capa de servicios / infraestructura).
 *
 * La UI depende de la interfaz `ProgressRepository`, no de localStorage
 * (inversión de dependencias): mañana se puede sustituir por IndexedDB o un
 * backend con base de datos real sin tocar la UI ni el dominio.
 *
 * Garantías tipo ACID dentro de lo que permite localStorage:
 * - Atomicidad: todo el estado se serializa y se escribe en UNA sola clave
 *   con una sola operación `setItem`; nunca hay estados a medias.
 * - Consistencia: el estado lleva `version` y al cargar se valida/migra;
 *   un JSON corrupto o de esquema desconocido cae al estado inicial.
 * - Durabilidad: localStorage es síncrono y persistente entre sesiones.
 * (El aislamiento no aplica: hay un único escritor, la propia app.)
 */
import {
  initialProgress,
  PROGRESS_VERSION,
  type ProgressState,
} from '../domain/progress';

export interface ProgressRepository {
  load(): ProgressState;
  save(state: ProgressState): void;
}

const STORAGE_KEY = 'portu.progress';

export class LocalStorageProgressRepository implements ProgressRepository {
  load(): ProgressState {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return initialProgress();
      const parsed: unknown = JSON.parse(raw);
      return migrate(parsed);
    } catch {
      return initialProgress();
    }
  }

  save(state: ProgressState): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Cuota llena o modo privado: la app sigue funcionando en memoria.
    }
  }
}

/** Valida y migra estados de versiones anteriores del esquema. */
function migrate(data: unknown): ProgressState {
  if (
    typeof data === 'object' &&
    data !== null &&
    (data as { version?: unknown }).version === PROGRESS_VERSION
  ) {
    const s = data as ProgressState;
    if (s.settings?.mainVariant && typeof s.completed === 'object') return s;
  }
  // Aquí irán las migraciones v1 → v2, etc. Esquema desconocido: reinicio.
  return initialProgress();
}

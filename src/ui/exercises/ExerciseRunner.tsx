import { useState } from 'react';
import type { Exercise } from '../../domain/content';
import { useProgress } from '../hooks/useProgress';
import { SKILL_META } from '../skillMeta';
import { ExerciseView } from './ExerciseView';

/**
 * Recorre una lista de ejercicios, puntúa y registra el progreso bajo
 * `contextId` (una lección, un examen…). Al entrar practica primero los
 * ejercicios pendientes; si no queda ninguno, repasa todos.
 */
export function ExerciseRunner({
  contextId,
  exercises,
}: {
  contextId: string;
  exercises: Exercise[];
}) {
  const { state, markDone } = useProgress();
  const [queue, setQueue] = useState<Exercise[]>(() => {
    const done = state.completed[contextId] ?? [];
    const pending = exercises.filter((e) => !done.includes(e.id));
    return pending.length > 0 ? pending : exercises;
  });
  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState<boolean | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = queue.length;
  const exercise = queue[index];

  const handleResult = (ok: boolean) => {
    if (answered !== null) return;
    setAnswered(ok);
    if (ok) {
      setCorrectCount((c) => c + 1);
      markDone(contextId, exercise.id);
    }
  };

  const next = () => {
    if (index + 1 >= total) {
      setFinished(true);
    } else {
      setIndex(index + 1);
      setAnswered(null);
    }
  };

  const startOver = (list: Exercise[]) => {
    setQueue(list);
    setIndex(0);
    setAnswered(null);
    setCorrectCount(0);
    setFinished(false);
  };

  if (finished) {
    const done = state.completed[contextId] ?? [];
    const pending = exercises.filter((e) => !done.includes(e.id));
    const perfect = correctCount === total;
    return (
      <div className="card summary">
        <h3>{perfect ? '🎉 ¡Perfecto!' : '✅ Ronda terminada'}</h3>
        <p className="summary-score">
          {correctCount} de {total} correctos
        </p>
        <p className="explanation">
          {pending.length > 0
            ? `Te quedan ${pending.length} ejercicios por dominar en esta lección.`
            : '¡Has completado todos los ejercicios! Puedes repasarlos cuando quieras.'}
        </p>
        {pending.length > 0 && (
          <button
            type="button"
            className="btn primary"
            onClick={() => startOver(pending)}
          >
            Practicar pendientes ({pending.length})
          </button>
        )}
        <button
          type="button"
          className="btn summary-alt"
          onClick={() => startOver(exercises)}
        >
          Repasar todo ({exercises.length})
        </button>
      </div>
    );
  }

  const skill = SKILL_META[exercise.skill];
  const progressPct = ((index + (answered !== null ? 1 : 0)) / total) * 100;

  return (
    <div className="section">
      <div className="runner-header">
        <span className="chip">
          {skill.icon} {skill.label}
        </span>
        <span className="runner-count">
          {index + 1} / {total}
          {queue.length < exercises.length && (
            <span className="note"> · pendientes</span>
          )}
        </span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progressPct}%` }} />
      </div>
      <div className="card" key={exercise.id}>
        <ExerciseView exercise={exercise} onResult={handleResult} />
        {answered !== null && (
          <button type="button" className="btn primary continue" onClick={next}>
            {index + 1 >= total ? 'Ver resultado' : 'Continuar'}
          </button>
        )}
      </div>
    </div>
  );
}

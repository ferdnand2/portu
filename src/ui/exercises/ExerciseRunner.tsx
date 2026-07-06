import { useState } from 'react';
import type { Lesson } from '../../domain/content';
import { useProgress } from '../hooks/useProgress';
import { SKILL_META } from '../skillMeta';
import { ExerciseView } from './ExerciseView';

/** Recorre los ejercicios de la lección, puntúa y registra el progreso. */
export function ExerciseRunner({ lesson }: { lesson: Lesson }) {
  const { markDone } = useProgress();
  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState<boolean | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = lesson.exercises.length;
  const exercise = lesson.exercises[index];

  const handleResult = (ok: boolean) => {
    if (answered !== null) return;
    setAnswered(ok);
    if (ok) {
      setCorrectCount((c) => c + 1);
      markDone(lesson.id, exercise.id);
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

  const restart = () => {
    setIndex(0);
    setAnswered(null);
    setCorrectCount(0);
    setFinished(false);
  };

  if (finished) {
    const perfect = correctCount === total;
    return (
      <div className="card summary">
        <h3>{perfect ? '🎉 ¡Perfecto!' : '✅ Práctica terminada'}</h3>
        <p className="summary-score">
          {correctCount} de {total} correctos
        </p>
        <p className="explanation">
          {perfect
            ? 'Dominas esta lección. ¡A por la siguiente!'
            : 'Repite la práctica para reforzar lo que fallaste.'}
        </p>
        <button type="button" className="btn primary" onClick={restart}>
          Repetir práctica
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

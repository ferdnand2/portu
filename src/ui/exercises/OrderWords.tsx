import { useState } from 'react';
import type { OrderWordsExercise } from '../../domain/content';
import { normalize } from '../../domain/evaluation';
import { VariantBadge } from '../components/VariantBadge';

/** Baraja evitando (si se puede) que salga ya en el orden correcto. */
function shuffle(words: string[]): string[] {
  const result = [...words];
  for (let attempt = 0; attempt < 5; attempt++) {
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    if (result.join(' ') !== words.join(' ') || words.length < 2) break;
  }
  return result;
}

export function OrderWords({
  exercise,
  onResult,
}: {
  exercise: OrderWordsExercise;
  onResult: (correct: boolean) => void;
}) {
  const [available, setAvailable] = useState(() => shuffle(exercise.words));
  const [chosen, setChosen] = useState<string[]>([]);
  const [state, setState] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const pick = (i: number) => {
    if (state !== 'idle') return;
    setChosen([...chosen, available[i]]);
    setAvailable(available.filter((_, k) => k !== i));
  };

  const unpick = (i: number) => {
    if (state !== 'idle') return;
    setAvailable([...available, chosen[i]]);
    setChosen(chosen.filter((_, k) => k !== i));
  };

  const submit = () => {
    if (state !== 'idle' || available.length > 0) return;
    const ok = normalize(chosen.join(' ')) === normalize(exercise.answer);
    setState(ok ? 'correct' : 'wrong');
    onResult(ok);
  };

  return (
    <div>
      <p className="question">
        Ordena las palabras <VariantBadge variant={exercise.variant} />
      </p>
      {exercise.translation && <p className="es-text">«{exercise.translation}»</p>}
      <div className="word-line">
        {chosen.length === 0 && <span className="hint">Toca las palabras en orden…</span>}
        {chosen.map((word, i) => (
          <button
            type="button"
            className="word-chip chosen"
            key={`${word}-${i}`}
            onClick={() => unpick(i)}
          >
            {word}
          </button>
        ))}
      </div>
      <div className="word-pool">
        {available.map((word, i) => (
          <button
            type="button"
            className="word-chip"
            key={`${word}-${i}`}
            onClick={() => pick(i)}
          >
            {word}
          </button>
        ))}
      </div>
      {state === 'idle' ? (
        <button
          type="button"
          className="btn primary"
          onClick={submit}
          disabled={available.length > 0}
        >
          Comprobar
        </button>
      ) : state === 'correct' ? (
        <div className="feedback ok">✓ ¡Correcto!</div>
      ) : (
        <div className="feedback bad">
          ✗ Era: <span className="pt-text">«{exercise.answer}»</span>
        </div>
      )}
    </div>
  );
}

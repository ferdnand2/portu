import { useState } from 'react';
import type {
  ListenChoiceExercise,
  ReadChoiceExercise,
} from '../../domain/content';
import { AudioButton } from '../components/AudioButton';
import { VariantBadge } from '../components/VariantBadge';

/** Lista de opciones de una sola elección, con corrección visual. */
function Options({
  options,
  answer,
  onResult,
}: {
  options: string[];
  answer: number;
  onResult: (correct: boolean) => void;
}) {
  const [picked, setPicked] = useState<number | null>(null);

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    onResult(i === answer);
  };

  const classFor = (i: number) => {
    if (picked === null) return 'option';
    if (i === answer) return 'option correct';
    if (i === picked) return 'option wrong';
    return 'option dimmed';
  };

  return (
    <div className="options">
      {options.map((option, i) => (
        <button
          type="button"
          className={classFor(i)}
          key={i}
          onClick={() => pick(i)}
          disabled={picked !== null}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export function ListenChoice({
  exercise,
  onResult,
}: {
  exercise: ListenChoiceExercise;
  onResult: (correct: boolean) => void;
}) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div>
      <div className="exercise-audio">
        <VariantBadge variant={exercise.audio.variant} />
        <AudioButton text={exercise.audio.text} variant={exercise.audio.variant} />
        <span className="hint">Toca para escuchar (puedes repetir)</span>
      </div>
      <p className="question">{exercise.question}</p>
      <Options
        options={exercise.options}
        answer={exercise.answer}
        onResult={(ok) => {
          setRevealed(true);
          onResult(ok);
        }}
      />
      {revealed && (
        <p className="reveal">
          Has oído: <span className="pt-text">«{exercise.audio.text}»</span>
        </p>
      )}
    </div>
  );
}

export function ReadChoice({
  exercise,
  onResult,
}: {
  exercise: ReadChoiceExercise;
  onResult: (correct: boolean) => void;
}) {
  return (
    <div>
      <div className="passage">
        <VariantBadge variant={exercise.textVariant} />
        <div className="pt-text passage-text">{exercise.text}</div>
      </div>
      <p className="question">{exercise.question}</p>
      <Options
        options={exercise.options}
        answer={exercise.answer}
        onResult={onResult}
      />
    </div>
  );
}

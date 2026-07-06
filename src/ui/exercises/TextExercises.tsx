import { useState, type ReactNode } from 'react';
import type {
  DictationExercise,
  FillBlankExercise,
  TranslateExercise,
} from '../../domain/content';
import { matchesAccepted } from '../../domain/evaluation';
import { AudioButton } from '../components/AudioButton';
import { VariantBadge } from '../components/VariantBadge';

/**
 * Núcleo compartido de los ejercicios de respuesta escrita: campo de texto,
 * botón de comprobar y corrección tolerante con tildes y puntuación.
 */
function TextCheck({
  accepted,
  correctDisplay,
  placeholder,
  onResult,
}: {
  accepted: string[];
  correctDisplay: ReactNode;
  placeholder?: string;
  onResult: (correct: boolean) => void;
}) {
  const [value, setValue] = useState('');
  const [state, setState] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const submit = () => {
    if (state !== 'idle' || value.trim() === '') return;
    const ok = matchesAccepted(value, accepted);
    setState(ok ? 'correct' : 'wrong');
    onResult(ok);
  };

  return (
    <div className="text-check">
      <input
        className="input"
        type="text"
        lang="pt"
        autoCapitalize="off"
        autoCorrect="off"
        autoComplete="off"
        spellCheck={false}
        placeholder={placeholder ?? 'Escribe en portugués…'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && submit()}
        disabled={state !== 'idle'}
      />
      {state === 'idle' ? (
        <button
          type="button"
          className="btn primary"
          onClick={submit}
          disabled={value.trim() === ''}
        >
          Comprobar
        </button>
      ) : state === 'correct' ? (
        <div className="feedback ok">✓ ¡Correcto!</div>
      ) : (
        <div className="feedback bad">
          <div>✗ No exactamente.</div>
          <div className="feedback-answer">{correctDisplay}</div>
        </div>
      )}
    </div>
  );
}

export function Dictation({
  exercise,
  onResult,
}: {
  exercise: DictationExercise;
  onResult: (correct: boolean) => void;
}) {
  return (
    <div>
      <p className="question">Escucha y escribe lo que oyes.</p>
      <div className="exercise-audio">
        <VariantBadge variant={exercise.audio.variant} />
        <AudioButton text={exercise.audio.text} variant={exercise.audio.variant} />
        <span className="hint">Puedes repetir el audio</span>
      </div>
      <TextCheck
        accepted={[exercise.audio.text]}
        correctDisplay={
          <>
            Era: <span className="pt-text">«{exercise.audio.text}»</span>
          </>
        }
        onResult={onResult}
      />
    </div>
  );
}

export function FillBlank({
  exercise,
  onResult,
}: {
  exercise: FillBlankExercise;
  onResult: (correct: boolean) => void;
}) {
  return (
    <div>
      <p className="question">Completa la frase.</p>
      <div className="passage">
        <VariantBadge variant={exercise.variant} />
        <div className="pt-text passage-text">{exercise.sentence}</div>
      </div>
      {exercise.translation && <p className="es-text">{exercise.translation}</p>}
      <TextCheck
        accepted={exercise.accepted}
        placeholder={exercise.hint ? `Pista: ${exercise.hint}` : 'La palabra que falta…'}
        correctDisplay={
          <>
            La palabra era: <span className="pt-text">«{exercise.accepted[0]}»</span>
          </>
        }
        onResult={onResult}
      />
    </div>
  );
}

export function Translate({
  exercise,
  onResult,
}: {
  exercise: TranslateExercise;
  onResult: (correct: boolean) => void;
}) {
  return (
    <div>
      <p className="question">Traduce al portugués:</p>
      <p className="translate-prompt">«{exercise.es}»</p>
      <TextCheck
        accepted={exercise.accepted.map((a) => a.text)}
        correctDisplay={
          <div>
            Se aceptaba:
            {exercise.accepted.map((a) => (
              <div className="accepted-row" key={a.text}>
                <VariantBadge variant={a.variant} />
                <span className="pt-text">{a.text}</span>
              </div>
            ))}
          </div>
        }
        onResult={onResult}
      />
    </div>
  );
}

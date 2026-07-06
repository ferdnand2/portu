import { useRef, useState } from 'react';
import type { SpeakExercise } from '../../domain/content';
import {
  SPEECH_PASS_THRESHOLD,
  speechSimilarity,
} from '../../domain/evaluation';
import { recognition } from '../../services/recognition';
import { langFor } from '../../services/tts';
import { AudioButton } from '../components/AudioButton';
import { VariantBadge } from '../components/VariantBadge';

const MAX_ATTEMPTS = 2;

type Status = 'idle' | 'listening' | 'retry' | 'done' | 'unavailable-done';

export function Speak({
  exercise,
  onResult,
}: {
  exercise: SpeakExercise;
  onResult: (correct: boolean) => void;
}) {
  const available = recognition.isAvailable();
  const [status, setStatus] = useState<Status>('idle');
  const [heard, setHeard] = useState('');
  const [passed, setPassed] = useState(false);
  const attempts = useRef(0);

  const listen = async () => {
    setStatus('listening');
    let transcript = '';
    try {
      transcript = await recognition.listenOnce(langFor(exercise.target.variant));
    } catch {
      transcript = '';
    }
    attempts.current += 1;
    setHeard(transcript);
    const ok =
      speechSimilarity(transcript, exercise.target.text) >= SPEECH_PASS_THRESHOLD;
    if (ok) {
      setPassed(true);
      setStatus('done');
      onResult(true);
    } else if (attempts.current < MAX_ATTEMPTS) {
      setStatus('retry');
    } else {
      setPassed(false);
      setStatus('done');
      onResult(false);
    }
  };

  const markPracticed = () => {
    setStatus('unavailable-done');
    onResult(true);
  };

  return (
    <div>
      <p className="question">Di esta frase en voz alta:</p>
      <div className="passage">
        <VariantBadge variant={exercise.target.variant} />
        <div className="pt-text passage-text">{exercise.target.text}</div>
        <AudioButton
          text={exercise.target.text}
          variant={exercise.target.variant}
        />
      </div>
      {exercise.translation && <p className="es-text">«{exercise.translation}»</p>}

      {available ? (
        <>
          {(status === 'idle' || status === 'retry') && (
            <>
              {status === 'retry' && (
                <div className="feedback bad">
                  Entendí: <span className="pt-text">«{heard || '…nada'}»</span>.
                  ¡Inténtalo otra vez!
                </div>
              )}
              <button type="button" className="btn primary mic" onClick={listen}>
                🎤 {status === 'retry' ? 'Reintentar' : 'Hablar'}
              </button>
            </>
          )}
          {status === 'listening' && (
            <div className="listening">🎤 Escuchando… habla ahora</div>
          )}
          {status === 'done' && (
            <div className={passed ? 'feedback ok' : 'feedback bad'}>
              {passed ? '✓ ¡Muy bien! Te entendí: ' : '✗ Entendí: '}
              <span className="pt-text">«{heard || '…nada'}»</span>
            </div>
          )}
        </>
      ) : status === 'unavailable-done' ? (
        <div className="feedback ok">✓ Marcado como practicado</div>
      ) : (
        <div>
          <p className="notice">
            Tu navegador no permite el reconocimiento de voz. Escucha el modelo,
            repítelo en voz alta y continúa.
          </p>
          <button type="button" className="btn primary" onClick={markPracticed}>
            Lo practiqué en voz alta
          </button>
        </div>
      )}
    </div>
  );
}

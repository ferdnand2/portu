import { useState } from 'react';
import type { SpeakExercise } from '../../domain/content';
import {
  SPEECH_PASS_THRESHOLD,
  speechSimilarity,
} from '../../domain/evaluation';
import { recognition } from '../../services/recognition';
import { langFor } from '../../services/tts';
import { AudioButton } from '../components/AudioButton';
import { VariantBadge } from '../components/VariantBadge';

type Status = 'idle' | 'listening' | 'failed' | 'done';

/** Mensajes claros para los códigos de error de la Web Speech API. */
const ERROR_MESSAGES: Record<string, string> = {
  'not-allowed':
    'El navegador no tiene permiso para usar el micrófono. Actívalo en el icono de la barra de direcciones.',
  'service-not-allowed':
    'El servicio de voz del navegador está desactivado. Prueba con Chrome o desde el teléfono.',
  network:
    'El servicio de reconocimiento del navegador falló (en Edge de escritorio es frecuente). Prueba con Chrome o desde el teléfono.',
  'no-speech': 'No se oyó nada. Acércate al micrófono y habla claro.',
  'audio-capture': 'No se encontró ningún micrófono en el dispositivo.',
  'language-not-supported':
    'Tu navegador no soporta reconocimiento de voz en portugués.',
  aborted: 'La escucha se interrumpió. Inténtalo de nuevo.',
};

export function Speak({
  exercise,
  onResult,
}: {
  exercise: SpeakExercise;
  onResult: (correct: boolean) => void;
}) {
  const available = recognition.isAvailable();
  const [status, setStatus] = useState<Status>('idle');
  const [attempts, setAttempts] = useState(0);
  const [heard, setHeard] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [passed, setPassed] = useState(false);

  const listen = async () => {
    setStatus('listening');
    setError(null);
    setHeard('');
    let transcript = '';
    try {
      transcript = await recognition.listenOnce(langFor(exercise.target.variant));
    } catch (e) {
      const code = e instanceof Error ? e.message : 'unknown';
      setError(ERROR_MESSAGES[code] ?? `No se pudo reconocer la voz (${code}).`);
      setAttempts((a) => a + 1);
      setStatus('failed');
      return;
    }
    setAttempts((a) => a + 1);
    setHeard(transcript);
    const ok =
      speechSimilarity(transcript, exercise.target.text) >= SPEECH_PASS_THRESHOLD;
    if (ok) {
      setPassed(true);
      setStatus('done');
      onResult(true);
    } else if (transcript === '') {
      setError(ERROR_MESSAGES['no-speech']);
      setStatus('failed');
    } else {
      setStatus('failed');
    }
  };

  const finish = (ok: boolean) => {
    setPassed(ok);
    setStatus('done');
    onResult(ok);
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

      {!available ? (
        status === 'done' ? (
          <div className="feedback ok">✓ Marcado como practicado</div>
        ) : (
          <div>
            <p className="notice">
              Tu navegador no permite el reconocimiento de voz. Escucha el
              modelo, repítelo en voz alta y continúa.
            </p>
            <button type="button" className="btn primary" onClick={() => finish(true)}>
              Lo practiqué en voz alta
            </button>
          </div>
        )
      ) : (
        <>
          {status === 'idle' && (
            <button type="button" className="btn primary mic" onClick={listen}>
              🎤 Hablar
            </button>
          )}
          {status === 'listening' && (
            <div className="listening">🎤 Escuchando… habla ahora</div>
          )}
          {status === 'failed' && (
            <div className="speak-retry">
              {error ? (
                <p className="notice">⚠️ {error}</p>
              ) : (
                <div className="feedback bad">
                  Entendí: <span className="pt-text">«{heard}»</span>. ¡Casi!
                  Inténtalo otra vez.
                </div>
              )}
              <button type="button" className="btn primary mic" onClick={listen}>
                🎤 Reintentar
              </button>
              <div className="speak-outs">
                {attempts >= 2 && (
                  <button type="button" className="btn" onClick={() => finish(true)}>
                    Lo dije bien · marcar practicado
                  </button>
                )}
                <button type="button" className="btn" onClick={() => finish(false)}>
                  Saltar este ejercicio
                </button>
              </div>
            </div>
          )}
          {status === 'done' && (
            <div className={passed ? 'feedback ok' : 'feedback bad'}>
              {passed
                ? heard
                  ? '✓ ¡Muy bien! Te entendí: '
                  : '✓ Marcado como practicado '
                : '✗ Saltado '}
              {heard && <span className="pt-text">«{heard}»</span>}
            </div>
          )}
        </>
      )}
    </div>
  );
}

/**
 * Reconocimiento de voz (capa de servicios).
 *
 * Usa la Web Speech API (SpeechRecognition). No está disponible en todos los
 * navegadores (p. ej. Firefox y algunos iOS); la UI ofrece una alternativa
 * manual cuando `isAvailable()` es false.
 */

export interface RecognitionService {
  isAvailable(): boolean;
  /** Escucha una frase y devuelve la transcripción. */
  listenOnce(lang: string): Promise<string>;
}

/* La API no está en los tipos del DOM estándar; declaración mínima local. */
interface SpeechRecognitionLike {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((event: RecognitionEventLike) => void) | null;
  onerror: ((event: { error?: string }) => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
}

interface RecognitionEventLike {
  results: ArrayLike<ArrayLike<{ transcript: string }>>;
}

function getRecognitionCtor(): (new () => SpeechRecognitionLike) | undefined {
  const w = window as unknown as Record<string, unknown>;
  return (w.SpeechRecognition ?? w.webkitSpeechRecognition) as
    | (new () => SpeechRecognitionLike)
    | undefined;
}

class WebSpeechRecognition implements RecognitionService {
  isAvailable(): boolean {
    return getRecognitionCtor() !== undefined;
  }

  listenOnce(lang: string): Promise<string> {
    const Ctor = getRecognitionCtor();
    if (!Ctor) {
      return Promise.reject(new Error('SpeechRecognition no disponible'));
    }
    return new Promise((resolve, reject) => {
      const rec = new Ctor();
      rec.lang = lang;
      rec.interimResults = false;
      rec.maxAlternatives = 1;
      let settled = false;
      rec.onresult = (event) => {
        settled = true;
        const transcript = event.results[0]?.[0]?.transcript ?? '';
        resolve(transcript);
      };
      rec.onerror = (event) => {
        settled = true;
        reject(new Error(event.error ?? 'error de reconocimiento'));
      };
      rec.onend = () => {
        if (!settled) resolve('');
      };
      rec.start();
    });
  }
}

export const recognition: RecognitionService = new WebSpeechRecognition();

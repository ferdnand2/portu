/**
 * Síntesis de voz (capa de servicios).
 *
 * La UI depende de la interfaz `SpeechService`; la implementación usa la
 * Web Speech API del navegador, que en móvil trae voces pt-BR y pt-PT
 * separadas — la clave para oír cada frase con su acento.
 */
import type { AudioVariant } from '../domain/content';

export interface TtsAvailability {
  br: boolean;
  pt: boolean;
  /** Hay al menos una voz de portugués (del tipo que sea). */
  any: boolean;
}

export interface SpeechService {
  speak(text: string, variant: AudioVariant): void;
  availability(): Promise<TtsAvailability>;
}

export function langFor(variant: AudioVariant): string {
  return variant === 'br' ? 'pt-BR' : 'pt-PT';
}

class WebSpeechTts implements SpeechService {
  private voicesReady: Promise<SpeechSynthesisVoice[]>;

  constructor() {
    this.voicesReady = this.waitForVoices();
  }

  private waitForVoices(): Promise<SpeechSynthesisVoice[]> {
    return new Promise((resolve) => {
      if (!('speechSynthesis' in window)) {
        resolve([]);
        return;
      }
      const existing = speechSynthesis.getVoices();
      if (existing.length > 0) {
        resolve(existing);
        return;
      }
      // Las voces cargan de forma asíncrona; con tope por si el evento no llega.
      const timeout = setTimeout(() => resolve(speechSynthesis.getVoices()), 2000);
      speechSynthesis.addEventListener(
        'voiceschanged',
        () => {
          clearTimeout(timeout);
          resolve(speechSynthesis.getVoices());
        },
        { once: true },
      );
    });
  }

  private pickVoice(
    voices: SpeechSynthesisVoice[],
    variant: AudioVariant,
  ): SpeechSynthesisVoice | undefined {
    const wanted = langFor(variant).toLowerCase();
    const norm = (lang: string) => lang.replace('_', '-').toLowerCase();
    return (
      voices.find((v) => norm(v.lang) === wanted) ??
      voices.find((v) => norm(v.lang).startsWith('pt'))
    );
  }

  speak(text: string, variant: AudioVariant): void {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langFor(variant);
    utterance.rate = 0.92;
    void this.voicesReady.then((voices) => {
      const voice = this.pickVoice(voices, variant);
      if (voice) utterance.voice = voice;
      speechSynthesis.speak(utterance);
    });
  }

  async availability(): Promise<TtsAvailability> {
    const voices = await this.voicesReady;
    const norm = (lang: string) => lang.replace('_', '-').toLowerCase();
    const langs = voices.map((v) => norm(v.lang));
    return {
      br: langs.some((l) => l.startsWith('pt-br')),
      pt: langs.some((l) => l.startsWith('pt-pt')),
      any: langs.some((l) => l.startsWith('pt')),
    };
  }
}

export const tts: SpeechService = new WebSpeechTts();

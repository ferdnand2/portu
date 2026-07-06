import type { AudioVariant, Variant } from '../../domain/content';
import { tts } from '../../services/tts';

export function AudioButton({
  text,
  variant,
  showLabel = false,
}: {
  text: string;
  variant: AudioVariant;
  showLabel?: boolean;
}) {
  const label = variant === 'br' ? 'BR' : 'PT';
  return (
    <button
      type="button"
      className="audio-btn"
      onClick={() => tts.speak(text, variant)}
      aria-label={`Escuchar «${text}» con acento ${variant === 'br' ? 'brasileño' : 'portugués'}`}
    >
      <span aria-hidden="true">🔊</span>
      {showLabel && <span className="audio-btn-label">{label}</span>}
    </button>
  );
}

/**
 * Audio para una forma según su variante: si se usa en ambas, ofrece los dos
 * acentos (ese contraste es el corazón del método del curso).
 */
export function FormAudio({ text, variant }: { text: string; variant: Variant }) {
  if (variant === 'both') {
    return (
      <span className="form-audio">
        <AudioButton text={text} variant="br" showLabel />
        <AudioButton text={text} variant="pt" showLabel />
      </span>
    );
  }
  return (
    <span className="form-audio">
      <AudioButton text={text} variant={variant} />
    </span>
  );
}

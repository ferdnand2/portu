import type { PronunciationNote } from '../../domain/content';
import { FormAudio } from '../components/AudioButton';
import { IpaText } from '../components/IpaText';
import { VariantBadge } from '../components/VariantBadge';

export function PronunciationSection({ notes }: { notes: PronunciationNote[] }) {
  return (
    <div className="section">
      {notes.map((note) => (
        <div className="card" key={note.id}>
          <h3>{note.title}</h3>
          <p className="explanation">{note.explanation}</p>
          {note.samples.map((sample, i) => (
            <div className="pron-sample" key={i}>
              <VariantBadge variant={sample.variant} />
              <span className="pt-text">{sample.text}</span>
              <FormAudio text={sample.text} variant={sample.variant} />
              {sample.ipa && <IpaText ipa={sample.ipa} />}
              {sample.hint && <span className="hint">≈ {sample.hint}</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

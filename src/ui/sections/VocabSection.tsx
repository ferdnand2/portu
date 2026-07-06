import type { TermForm, VocabItem } from '../../domain/content';
import { FormAudio } from '../components/AudioButton';
import { ExampleView } from '../components/ExampleView';
import { FormIpa } from '../components/IpaText';
import { VariantBadge } from '../components/VariantBadge';
import { useProgress } from '../hooks/useProgress';

/** Ordena las formas para mostrar primero la variante principal del usuario. */
function sortForms(forms: TermForm[], main: 'br' | 'pt'): TermForm[] {
  const rank = (f: TermForm) =>
    f.variant === 'both' ? 0 : f.variant === main ? 1 : 2;
  return [...forms].sort((a, b) => rank(a) - rank(b));
}

export function VocabSection({ vocab }: { vocab: VocabItem[] }) {
  const { state } = useProgress();
  const main = state.settings.mainVariant;
  return (
    <div className="section">
      <p className="notice">
        🔤 Toca cualquier símbolo de la pronunciación /así/ para ver cómo suena.
      </p>
      {vocab.map((item) => (
        <div className="card vocab-card" key={item.id}>
          <div className="vocab-es">{item.es}</div>
          {sortForms(item.forms, main).map((form) => (
            <div className="vocab-form" key={`${form.variant}-${form.text}`}>
              <VariantBadge variant={form.variant} />
              <span className="pt-text">{form.text}</span>
              <FormAudio text={form.text} variant={form.variant} />
              <FormIpa form={form} />
              {form.note && <div className="note">{form.note}</div>}
            </div>
          ))}
          {item.example && <ExampleView example={item.example} />}
        </div>
      ))}
    </div>
  );
}

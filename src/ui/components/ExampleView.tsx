import type { Example, Variant } from '../../domain/content';
import { FormAudio } from './AudioButton';
import { VariantBadge } from './VariantBadge';

interface Row {
  text: string;
  variant: Variant;
}

function rowsOf(example: Example): Row[] {
  const rows: Row[] = [];
  if (example.both) rows.push({ text: example.both, variant: 'both' });
  if (example.br) rows.push({ text: example.br, variant: 'br' });
  if (example.pt) rows.push({ text: example.pt, variant: 'pt' });
  return rows;
}

/** Frase de ejemplo con banderita(s), audio y traducción. */
export function ExampleView({ example }: { example: Example }) {
  return (
    <div className="example">
      {rowsOf(example).map((row) => (
        <div className="example-row" key={`${row.variant}-${row.text}`}>
          <VariantBadge variant={row.variant} />
          <span className="pt-text">{row.text}</span>
          <FormAudio text={row.text} variant={row.variant} />
        </div>
      ))}
      <div className="es-text">{example.es}</div>
    </div>
  );
}

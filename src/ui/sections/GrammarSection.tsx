import type { GrammarPoint } from '../../domain/content';
import { ExampleView } from '../components/ExampleView';

export function GrammarSection({ grammar }: { grammar: GrammarPoint[] }) {
  return (
    <div className="section">
      {grammar.map((point) => (
        <div className="card" key={point.id}>
          <h3>{point.title}</h3>
          {point.explanation.split('\n').map((paragraph, i) => (
            <p className="explanation" key={i}>
              {paragraph}
            </p>
          ))}
          <div className="examples">
            {point.examples.map((example, i) => (
              <ExampleView example={example} key={i} />
            ))}
          </div>
          {point.variantNote && (
            <div className="callout">
              <span aria-hidden="true">💡</span> {point.variantNote}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

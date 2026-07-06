import { useMemo, useState } from 'react';
import type { RefBlock, RefSection } from '../../domain/reference';
import { filterBlocks } from '../../domain/reference';
import { FormAudio } from '../components/AudioButton';
import { ExampleView } from '../components/ExampleView';
import { FormIpa } from '../components/IpaText';
import { VariantBadge } from '../components/VariantBadge';

function WordsBlock({ block }: { block: Extract<RefBlock, { kind: 'words' }> }) {
  return (
    <>
      {block.title && <h2 className="ref-block-title">{block.title}</h2>}
      {block.items.map((item) => (
        <div className="card vocab-card" key={item.id}>
          <div className="vocab-es">{item.es}</div>
          {item.forms.map((form) => (
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
    </>
  );
}

function TableBlock({ block }: { block: Extract<RefBlock, { kind: 'table' }> }) {
  return (
    <div className="card">
      <h3>{block.title}</h3>
      <div className="table-scroll">
        <table className="ref-table">
          <thead>
            <tr>
              {block.headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className={j === 0 ? 'ref-td-first' : 'pt-text'}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {block.note && (
        <div className="callout">
          <span aria-hidden="true">💡</span> {block.note}
        </div>
      )}
    </div>
  );
}

function InfoBlock({ block }: { block: Extract<RefBlock, { kind: 'info' }> }) {
  const { point } = block;
  return (
    <div className="card">
      <h3>{point.title}</h3>
      {point.explanation.split('\n').map((p, i) => (
        <p className="explanation" key={i}>
          {p}
        </p>
      ))}
      {point.examples.map((example, i) => (
        <ExampleView example={example} key={i} />
      ))}
      {point.variantNote && (
        <div className="callout">
          <span aria-hidden="true">💡</span> {point.variantNote}
        </div>
      )}
    </div>
  );
}

function FalseFriendsBlock({
  block,
}: {
  block: Extract<RefBlock, { kind: 'falsefriends' }>;
}) {
  return (
    <>
      {block.items.map((ff) => (
        <div className="card ff-card" key={ff.id}>
          <div className="vocab-form">
            <VariantBadge variant={ff.variant} />
            <span className="pt-text">{ff.word}</span>
            <FormAudio text={ff.word} variant={ff.variant} />
            {ff.ipa && (
              <FormIpa form={{ text: ff.word, variant: ff.variant, ipa: ff.ipa }} />
            )}
          </div>
          <p className="ff-seems">❌ Parece: {ff.seems}</p>
          <p className="ff-means">✅ Significa: {ff.means}</p>
          {ff.tip && <div className="note">{ff.tip}</div>}
        </div>
      ))}
    </>
  );
}

function LexiconBlock({
  block,
}: {
  block: Extract<RefBlock, { kind: 'lexicon' }>;
}) {
  return (
    <div className="card">
      {block.title && <h3>{block.title}</h3>}
      <div className="table-scroll">
        <table className="ref-table">
          <thead>
            <tr>
              <th>Español</th>
              <th>🇧🇷 Brasil</th>
              <th>🇵🇹 Portugal</th>
            </tr>
          </thead>
          <tbody>
            {block.items.map((item) => (
              <tr key={item.id}>
                <td className="ref-td-first">{item.es}</td>
                <td className="pt-text">{item.br}</td>
                <td className="pt-text">{item.pt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BlockView({ block }: { block: RefBlock }) {
  switch (block.kind) {
    case 'words':
      return <WordsBlock block={block} />;
    case 'table':
      return <TableBlock block={block} />;
    case 'info':
      return <InfoBlock block={block} />;
    case 'falsefriends':
      return <FalseFriendsBlock block={block} />;
    case 'lexicon':
      return <LexiconBlock block={block} />;
    default: {
      const exhaustive: never = block;
      return exhaustive;
    }
  }
}

/** Pantalla genérica de una ficha de consulta compuesta de bloques. */
export function ReferenceSectionScreen({
  section,
  onBack,
}: {
  section: RefSection;
  onBack: () => void;
}) {
  const [query, setQuery] = useState('');
  const blocks = useMemo(
    () => filterBlocks(section.blocks, query),
    [section, query],
  );
  return (
    <div className="app">
      <header className="lesson-header">
        <button type="button" className="back-btn" onClick={onBack} aria-label="Volver">
          ‹
        </button>
        <div>
          <div className="breadcrumb">Consulta</div>
          <h2>
            {section.icon} {section.title}
          </h2>
        </div>
      </header>
      {section.searchable && (
        <input
          className="input search"
          type="search"
          placeholder="Buscar…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      )}
      {blocks.length === 0 ? (
        <p className="notice">Sin resultados para «{query}».</p>
      ) : (
        blocks.map((block, i) => <BlockView block={block} key={i} />)
      )}
    </div>
  );
}

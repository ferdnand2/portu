import { useState } from 'react';
import { IPA_SYMBOLS, type IpaSymbol } from '../../domain/ipa';
import { FormAudio } from '../components/AudioButton';
import { IpaSheet } from '../components/IpaText';
import { VariantBadge } from '../components/VariantBadge';

/** Agrupación pedagógica de los símbolos del catálogo. */
const GROUPS: { title: string; note?: string; symbols: string[] }[] = [
  {
    title: 'Marcas',
    symbols: ['ˈ', '.'],
  },
  {
    title: 'Vocales orales',
    note: 'La clave está en abiertas vs cerradas (ɛ/e, ɔ/o) y en la ɐ relajada.',
    symbols: ['a', 'ɐ', 'e', 'ɛ', 'ə', 'i', 'o', 'ɔ', 'u'],
  },
  {
    title: 'Vocales nasales',
    note: 'Se dicen «por la nariz», sin llegar a pronunciar la n.',
    symbols: ['ɐ̃', 'ẽ', 'ĩ', 'õ', 'ũ'],
  },
  {
    title: 'Semivocales (forman diptongos)',
    symbols: ['j', 'w', 'j̃', 'w̃'],
  },
  {
    title: 'Consonantes como en español',
    symbols: ['b', 'd', 'f', 'g', 'k', 'l', 'm', 'n', 'p', 't', 's'],
  },
  {
    title: 'Consonantes que hay que aprender',
    note: 'Aquí vive el acento: domina estas y sonarás portugués.',
    symbols: ['ɲ', 'ʎ', 'dʒ', 'tʃ', 'z', 'ʃ', 'ʒ', 'v', 'ɾ', 'ʁ'],
  },
];

function bySymbol(symbol: string): IpaSymbol | undefined {
  return IPA_SYMBOLS.find((s) => s.symbol === symbol);
}

/** Ficha de consulta: resumen de todos los fonemas con audio. */
export function PhonemesScreen({ onBack }: { onBack: () => void }) {
  const [selected, setSelected] = useState<IpaSymbol | null>(null);
  return (
    <div className="app">
      <header className="lesson-header">
        <button type="button" className="back-btn" onClick={onBack} aria-label="Volver">
          ‹
        </button>
        <div>
          <div className="breadcrumb">Consulta</div>
          <h2>🔤 Fonemas del portugués</h2>
        </div>
      </header>
      <p className="notice">
        Toca cualquier símbolo para su explicación completa. El mismo catálogo
        alimenta las transcripciones /entre barras/ de todo el curso.
      </p>
      {GROUPS.map((group) => (
        <div className="card" key={group.title}>
          <h3>{group.title}</h3>
          {group.note && <p className="note">{group.note}</p>}
          {group.symbols.map((sym) => {
            const symbol = bySymbol(sym);
            if (!symbol) return null;
            return (
              <div className="phoneme-row" key={sym}>
                <button
                  type="button"
                  className="phoneme-sym"
                  onClick={() => setSelected(symbol)}
                  aria-label={`Símbolo ${symbol.symbol}: ${symbol.name}`}
                >
                  {symbol.symbol}
                </button>
                <span className="lesson-info">
                  <span className="phoneme-name">{symbol.name}</span>
                  <span className="note">{symbol.description}</span>
                </span>
                {symbol.example && (
                  <span className="phoneme-example">
                    <VariantBadge variant={symbol.example.variant} />
                    <span className="pt-text">{symbol.example.text}</span>
                    <FormAudio
                      text={symbol.example.text}
                      variant={symbol.example.variant}
                    />
                  </span>
                )}
              </div>
            );
          })}
        </div>
      ))}
      {selected && <IpaSheet symbol={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

import { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import type { TermForm } from '../../domain/content';
import { tokenizeIpa, type IpaSymbol } from '../../domain/ipa';
import { FormAudio } from './AudioButton';
import { VariantBadge } from './VariantBadge';

/** Hoja emergente con la explicación de un símbolo fonético. */
function IpaSheet({
  symbol,
  onClose,
}: {
  symbol: IpaSymbol;
  onClose: () => void;
}) {
  return createPortal(
    <div className="sheet-backdrop" onClick={onClose}>
      <div
        className="sheet"
        role="dialog"
        aria-label={`Símbolo ${symbol.symbol}: ${symbol.name}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sheet-head">
          <span className="ipa-big">{symbol.symbol}</span>
          <span className="sheet-title">{symbol.name}</span>
          <button type="button" className="sheet-close" onClick={onClose} aria-label="Cerrar">
            ✕
          </button>
        </div>
        <p className="explanation">{symbol.description}</p>
        {symbol.example && (
          <div className="example-row">
            <VariantBadge variant={symbol.example.variant} />
            <span className="pt-text">{symbol.example.text}</span>
            <FormAudio text={symbol.example.text} variant={symbol.example.variant} />
            <span className="es-text">({symbol.example.es})</span>
          </div>
        )}
        {symbol.variantNote && (
          <div className="callout">
            <span aria-hidden="true">💡</span> {symbol.variantNote}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}

/**
 * Transcripción fonética interactiva: cada símbolo del catálogo es un
 * enlace que abre su explicación.
 */
export function IpaText({ ipa }: { ipa: string }) {
  const [selected, setSelected] = useState<IpaSymbol | null>(null);
  const tokens = useMemo(() => tokenizeIpa(ipa), [ipa]);
  return (
    <span className="ipa" translate="no">
      <span aria-hidden="true">/</span>
      {tokens.map((token, i) =>
        token.kind === 'symbol' ? (
          <button
            type="button"
            className="ipa-sym"
            key={i}
            title={`${token.symbol.name} — toca para ver la explicación`}
            onClick={() => setSelected(token.symbol)}
          >
            {token.symbol.symbol}
          </button>
        ) : (
          <span key={i}>{token.text}</span>
        ),
      )}
      <span aria-hidden="true">/</span>
      {selected && <IpaSheet symbol={selected} onClose={() => setSelected(null)} />}
    </span>
  );
}

/**
 * Transcripción de una forma de vocabulario: una línea por acento cuando
 * BR y PT suenan distinto, con su banderita.
 */
export function FormIpa({ form }: { form: TermForm }) {
  if (!form.ipa) return null;
  const { br, pt } = form.ipa;
  if (br && pt && br !== pt) {
    return (
      <div className="ipa-lines">
        <div className="ipa-line">
          <VariantBadge variant="br" />
          <IpaText ipa={br} />
        </div>
        <div className="ipa-line">
          <VariantBadge variant="pt" />
          <IpaText ipa={pt} />
        </div>
      </div>
    );
  }
  const single = br ?? pt;
  if (!single) return null;
  return (
    <div className="ipa-lines">
      <div className="ipa-line">
        <IpaText ipa={single} />
      </div>
    </div>
  );
}

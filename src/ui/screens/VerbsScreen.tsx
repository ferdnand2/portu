import { useMemo, useState } from 'react';
import {
  conjugate,
  PERSON_LABELS,
  type VerbEntry,
} from '../../domain/conjugator';
import { VERBS } from '../../data/reference/verbos';
import { stripDiacritics } from '../../domain/evaluation';
import { AudioButton } from '../components/AudioButton';

function fold(text: string): string {
  return stripDiacritics(text.toLowerCase());
}

/** Lista de verbos con buscador. */
export function VerbsScreen({
  onBack,
  onOpenVerb,
}: {
  onBack: () => void;
  onOpenVerb: (id: string) => void;
}) {
  const [query, setQuery] = useState('');
  const verbs = useMemo(() => {
    const q = fold(query.trim());
    const list = [...VERBS].sort((a, b) =>
      a.infinitive.localeCompare(b.infinitive),
    );
    if (q === '') return list;
    return list.filter(
      (v) => fold(v.infinitive).includes(q) || fold(v.es).includes(q),
    );
  }, [query]);

  return (
    <div className="app">
      <header className="lesson-header">
        <button type="button" className="back-btn" onClick={onBack} aria-label="Volver">
          ‹
        </button>
        <div>
          <div className="breadcrumb">Consulta</div>
          <h2>🔀 Verbos</h2>
        </div>
      </header>
      <input
        className="input search"
        type="search"
        placeholder="Buscar verbo (portugués o español)…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="card">
        {verbs.length === 0 && <p className="note">Sin resultados.</p>}
        {verbs.map((verb) => (
          <button
            type="button"
            className="lesson-row"
            key={verb.id}
            onClick={() => onOpenVerb(verb.id)}
          >
            <span className="lesson-info">
              <span className="lesson-title pt-text">{verb.infinitive}</span>
              <span className="note">{verb.es}</span>
            </span>
            {verb.irregular ? (
              <span className="chip">irregular</span>
            ) : (
              <span className="chip soon">regular</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

/** Detalle: conjugación completa de un verbo. */
export function VerbDetailScreen({
  verb,
  onBack,
}: {
  verb: VerbEntry;
  onBack: () => void;
}) {
  const c = useMemo(() => conjugate(verb), [verb]);
  return (
    <div className="app">
      <header className="lesson-header">
        <button type="button" className="back-btn" onClick={onBack} aria-label="Volver">
          ‹
        </button>
        <div>
          <div className="breadcrumb">Consulta · Verbos</div>
          <h2 className="pt-text">
            {verb.infinitive}{' '}
            <AudioButton text={verb.infinitive} variant="br" />
          </h2>
          <p className="note">{verb.es}</p>
        </div>
      </header>
      {verb.note && (
        <p className="notice">
          <span aria-hidden="true">💡</span> {verb.note}
        </p>
      )}
      {c.tenses.map((tense) => (
        <div className="card" key={tense.id}>
          <h3>
            {tense.label}
            {tense.hint && <span className="hint"> · {tense.hint}</span>}
          </h3>
          <div className="table-scroll">
            <table className="ref-table">
              <tbody>
                {tense.forms.map((form, i) => (
                  <tr key={i}>
                    <td className="ref-td-first">{PERSON_LABELS[i]}</td>
                    <td className="pt-text">{form}</td>
                    <td className="verb-audio-cell">
                      <AudioButton text={form} variant="br" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <div className="card">
        <h3>Imperativo</h3>
        <div className="table-scroll">
          <table className="ref-table">
            <tbody>
              <tr>
                <td className="ref-td-first">tu 🇵🇹 (y 🇧🇷 coloquial)</td>
                <td className="pt-text">{c.imperativo.tu}!</td>
              </tr>
              <tr>
                <td className="ref-td-first">você (formal en ambos)</td>
                <td className="pt-text">{c.imperativo.voce}!</td>
              </tr>
              <tr>
                <td className="ref-td-first">vocês</td>
                <td className="pt-text">{c.imperativo.voces}!</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="callout">
          💡 Negativo siempre con subjuntivo: não {c.imperativo.voce.replace(/!$/, '')}…
        </div>
      </div>
      <div className="card">
        <h3>Formas nominales</h3>
        <div className="table-scroll">
          <table className="ref-table">
            <tbody>
              <tr>
                <td className="ref-td-first">gerundio 🇧🇷 (🇵🇹: a + inf.)</td>
                <td className="pt-text">{c.gerundio}</td>
              </tr>
              <tr>
                <td className="ref-td-first">participio</td>
                <td className="pt-text">
                  {c.participio}
                  {c.participioAlt && ` / ${c.participioAlt}`}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="note ipa-lines">
        Nota 🇵🇹: en los verbos -ar, el perfeito de nós lleva acento en Portugal:
        falámos (ayer) vs falamos (siempre).
      </p>
    </div>
  );
}

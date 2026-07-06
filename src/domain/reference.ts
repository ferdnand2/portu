/**
 * Modelo de la sección Consulta (capa de dominio).
 *
 * Cada ficha de consulta es una `RefSection` compuesta de bloques tipados.
 * Añadir una ficha nueva = escribir un archivo de datos con sus bloques y
 * registrarla en `data/reference/index.ts`; la UI genérica hace el resto
 * (principio abierto/cerrado, igual que con los ejercicios).
 */
import type { GrammarPoint, Variant, VocabItem } from './content';

/** Falso amigo: palabra portuguesa que engaña al hispanohablante. */
export interface FalseFriend {
  id: string;
  /** La palabra traicionera. */
  word: string;
  variant: Variant;
  ipa?: { br?: string; pt?: string };
  /** Lo que PARECE significar. */
  seems: string;
  /** Lo que significa DE VERDAD. */
  means: string;
  /** Y entonces, ¿cómo se dice lo otro? */
  tip?: string;
}

/** Entrada del léxico divergente: mismo concepto, palabra distinta. */
export interface LexicalDivergence {
  id: string;
  es: string;
  br: string;
  pt: string;
}

export type RefBlock =
  | { kind: 'words'; title?: string; items: VocabItem[] }
  | {
      kind: 'table';
      title: string;
      headers: string[];
      rows: string[][];
      note?: string;
    }
  | { kind: 'info'; point: GrammarPoint }
  | { kind: 'falsefriends'; items: FalseFriend[] }
  | { kind: 'lexicon'; title?: string; items: LexicalDivergence[] };

export interface RefSection {
  id: string;
  icon: string;
  title: string;
  description: string;
  /** Si la ficha ofrece buscador (tiene listas filtrables). */
  searchable: boolean;
  blocks: RefBlock[];
}

/** Normaliza para búsqueda: minúsculas y sin tildes. */
function fold(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

function wordMatches(item: VocabItem, q: string): boolean {
  return (
    fold(item.es).includes(q) ||
    item.forms.some((f) => fold(f.text).includes(q))
  );
}

/**
 * Filtra los bloques de una sección según la búsqueda: las listas se
 * reducen a las entradas que coinciden; tablas e info se ocultan mientras
 * se busca (no son filtrables).
 */
export function filterBlocks(blocks: RefBlock[], query: string): RefBlock[] {
  const q = fold(query.trim());
  if (q === '') return blocks;
  const out: RefBlock[] = [];
  for (const block of blocks) {
    if (block.kind === 'words') {
      const items = block.items.filter((i) => wordMatches(i, q));
      if (items.length > 0) out.push({ ...block, items });
    } else if (block.kind === 'falsefriends') {
      const items = block.items.filter(
        (i) =>
          fold(i.word).includes(q) ||
          fold(i.means).includes(q) ||
          fold(i.seems).includes(q),
      );
      if (items.length > 0) out.push({ ...block, items });
    } else if (block.kind === 'lexicon') {
      const items = block.items.filter(
        (i) =>
          fold(i.es).includes(q) || fold(i.br).includes(q) || fold(i.pt).includes(q),
      );
      if (items.length > 0) out.push({ ...block, items });
    }
  }
  return out;
}

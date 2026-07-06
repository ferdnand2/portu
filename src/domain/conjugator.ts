/**
 * Motor de conjugación (capa de dominio, puro).
 *
 * Los verbos regulares se conjugan por reglas (incluidos los ajustes
 * ortográficos c/qu, g/gu, ç/c, c/ç, g/j). Los irregulares declaran solo lo
 * mínimo: el motor deriva el resto — el subjuntivo presente sale de la 1ª
 * persona del presente, y el subjuntivo imperfecto/futuro salen de la 3ª
 * plural del perfeito, igual que en las gramáticas.
 */

/** [eu, tu, você/ele, nós, vocês/eles] */
type Forms = [string, string, string, string, string];

export interface IrregularData {
  /** Presente completo, o solo la 1ª persona si el resto es regular. */
  presente?: Forms;
  presente1sg?: string;
  /** Solo cuando no se puede derivar de la 1ª persona (seja, vá, saiba…). */
  subjPresente?: Forms;
  perfeito?: Forms;
  imperfeito?: Forms;
  /** far, dir, trar, por. */
  futuroStem?: string;
  participio?: string;
  /** Segundo participio (pago, aceito/aceite…). */
  participioAlt?: string;
  gerundio?: string;
  imperativoTu?: string;
  infPessoal?: Forms;
}

export interface VerbEntry {
  id: string;
  infinitive: string;
  es: string;
  /** Nota de uso o divergencia BR/PT. */
  note?: string;
  irregular?: IrregularData;
}

export interface TenseTable {
  id: string;
  label: string;
  hint?: string;
  forms: Forms;
}

export interface ConjugationResult {
  tenses: TenseTable[];
  imperativo: { tu: string; voce: string; voces: string };
  gerundio: string;
  participio: string;
  participioAlt?: string;
}

export const PERSON_LABELS = [
  'eu',
  'tu 🇵🇹',
  'você / ele',
  'nós',
  'vocês / eles',
] as const;

type VerbClass = 'ar' | 'er' | 'ir';

const ENDINGS: Record<
  VerbClass,
  { presente: Forms; perfeito: Forms; imperfeito: Forms; subj: Forms }
> = {
  ar: {
    presente: ['o', 'as', 'a', 'amos', 'am'],
    perfeito: ['ei', 'aste', 'ou', 'amos', 'aram'],
    imperfeito: ['ava', 'avas', 'ava', 'ávamos', 'avam'],
    subj: ['e', 'es', 'e', 'emos', 'em'],
  },
  er: {
    presente: ['o', 'es', 'e', 'emos', 'em'],
    perfeito: ['i', 'este', 'eu', 'emos', 'eram'],
    imperfeito: ['ia', 'ias', 'ia', 'íamos', 'iam'],
    subj: ['a', 'as', 'a', 'amos', 'am'],
  },
  ir: {
    presente: ['o', 'es', 'e', 'imos', 'em'],
    perfeito: ['i', 'iste', 'iu', 'imos', 'iram'],
    imperfeito: ['ia', 'ias', 'ia', 'íamos', 'iam'],
    subj: ['a', 'as', 'a', 'amos', 'am'],
  },
};

/** Ajustes ortográficos para conservar el sonido (ficar→fique, pagar→pague…). */
function fixStem(infinitive: string, stem: string, endingStart: string): string {
  const soft = endingStart === 'e' || endingStart === 'i';
  const hard = endingStart === 'a' || endingStart === 'o';
  if (soft && infinitive.endsWith('car')) return stem.slice(0, -1) + 'qu';
  if (soft && infinitive.endsWith('çar')) return stem.slice(0, -1) + 'c';
  if (soft && infinitive.endsWith('gar')) return stem + 'u';
  if (hard && infinitive.endsWith('cer')) return stem.slice(0, -1) + 'ç';
  if (hard && (infinitive.endsWith('ger') || infinitive.endsWith('gir')))
    return stem.slice(0, -1) + 'j';
  if (hard && infinitive.endsWith('guir')) return stem.slice(0, -1);
  return stem;
}

function apply(infinitive: string, stem: string, endings: Forms): Forms {
  return endings.map(
    (e) => fixStem(infinitive, stem, e[0] ?? '') + e,
  ) as Forms;
}

/** Acentúa la última vocal de la base para el nós del subj. imperfecto. */
function accentLastVowel(base: string): string {
  const map: Record<string, string> = { a: 'á', e: 'é', i: 'í', o: 'ô', u: 'ú' };
  for (let i = base.length - 1; i >= 0; i--) {
    const acc = map[base[i]];
    if (acc) return base.slice(0, i) + acc + base.slice(i + 1);
  }
  return base;
}

export function conjugate(verb: VerbEntry): ConjugationResult {
  const inf = verb.infinitive;
  const irr = verb.irregular ?? {};
  const cls = (inf === 'pôr' ? 'er' : inf.slice(-2)) as VerbClass;
  const stem = inf === 'pôr' ? 'p' : inf.slice(0, -2);
  const e = ENDINGS[cls];

  // Presente
  let presente: Forms;
  if (irr.presente) {
    presente = irr.presente;
  } else {
    presente = apply(inf, stem, e.presente);
    if (irr.presente1sg) presente = [irr.presente1sg, ...presente.slice(1)] as Forms;
  }

  // Subjuntivo presente: desde la 1ª persona del presente.
  let subjPresente: Forms;
  if (irr.subjPresente) {
    subjPresente = irr.subjPresente;
  } else {
    const base = presente[0].slice(0, -1); // quita la -o
    subjPresente = e.subj.map((end) =>
      cls === 'ar' ? fixStem(inf, base, end[0] ?? '') + end : base + end,
    ) as Forms;
  }

  const perfeito = irr.perfeito ?? apply(inf, stem, e.perfeito);
  const imperfeito = irr.imperfeito ?? apply(inf, stem, e.imperfeito);

  // Derivados de la 3ª plural del perfeito (falaram → fala-).
  const base3pl = perfeito[4].slice(0, -3);
  const subjImperfeito: Forms = [
    base3pl + 'sse',
    base3pl + 'sses',
    base3pl + 'sse',
    accentLastVowel(base3pl) + 'ssemos',
    base3pl + 'ssem',
  ];
  const subjFuturo: Forms = [
    base3pl + 'r',
    base3pl + 'res',
    base3pl + 'r',
    base3pl + 'rmos',
    base3pl + 'rem',
  ];

  const futStem = irr.futuroStem ?? inf;
  const futuro: Forms = [
    futStem + 'ei',
    futStem + 'ás',
    futStem + 'á',
    futStem + 'emos',
    futStem + 'ão',
  ];
  const condicional: Forms = [
    futStem + 'ia',
    futStem + 'ias',
    futStem + 'ia',
    futStem + 'íamos',
    futStem + 'iam',
  ];

  const infPessoal: Forms =
    irr.infPessoal ?? [inf, inf + 'es', inf, inf + 'mos', inf + 'em'];

  const gerundio =
    irr.gerundio ?? stem + (cls === 'ar' ? 'ando' : cls === 'er' ? 'endo' : 'indo');
  const participio = irr.participio ?? stem + (cls === 'ar' ? 'ado' : 'ido');

  return {
    tenses: [
      { id: 'presente', label: 'Presente', forms: presente },
      { id: 'perfeito', label: 'Pretérito perfeito', hint: 'hice / he hecho', forms: perfeito },
      { id: 'imperfeito', label: 'Imperfeito', hint: 'hacía', forms: imperfeito },
      { id: 'futuro', label: 'Futuro', hint: 'haré (formal; hablado: vou + inf.)', forms: futuro },
      { id: 'condicional', label: 'Condicional', hint: 'haría', forms: condicional },
      { id: 'subj-presente', label: 'Subjuntivo presente', hint: 'que eu…', forms: subjPresente },
      { id: 'subj-imperfeito', label: 'Subjuntivo imperfecto', hint: 'se eu…', forms: subjImperfeito },
      { id: 'subj-futuro', label: 'Subjuntivo futuro ⭐', hint: 'quando eu…', forms: subjFuturo },
      { id: 'inf-pessoal', label: 'Infinitivo personal ⭐', hint: 'para eu…', forms: infPessoal },
    ],
    imperativo: {
      tu: irr.imperativoTu ?? presente[2],
      voce: subjPresente[2],
      voces: subjPresente[4],
    },
    gerundio,
    participio,
    participioAlt: irr.participioAlt,
  };
}

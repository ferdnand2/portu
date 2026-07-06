/**
 * Alfabeto fonético (AFI) del curso: catálogo de símbolos con explicación
 * para hispanohablantes, y tokenizador de transcripciones (capa de dominio).
 *
 * Cada símbolo que aparezca en una transcripción debe estar en el catálogo;
 * la UI convierte cada uno en un enlace a su explicación.
 */
import type { Variant } from './content';

export interface IpaExample {
  /** Palabra portuguesa donde suena el símbolo. */
  text: string;
  variant: Variant;
  es: string;
}

export interface IpaSymbol {
  symbol: string;
  name: string;
  /** Cómo suena, explicado para un hispanohablante. */
  description: string;
  example?: IpaExample;
  variantNote?: string;
}

/* Nota de codificación: ẽ ĩ õ ũ son caracteres precompuestos; ɐ̃ j̃ w̃ llevan
   tilde combinante (U+0303). Usar siempre estas mismas formas en los datos. */
export const IPA_SYMBOLS: IpaSymbol[] = [
  // ---- marcas ----
  {
    symbol: 'ˈ',
    name: 'acento tónico',
    description:
      'No es un sonido: marca que la sílaba que viene justo después es la tónica (la fuerte).',
  },
  {
    symbol: '.',
    name: 'separador de sílabas',
    description: 'Separa las sílabas dentro de una palabra.',
  },
  // ---- vocales orales ----
  {
    symbol: 'a',
    name: 'a abierta',
    description: 'Como la a del español.',
    example: { text: 'falar', variant: 'both', es: 'hablar' },
  },
  {
    symbol: 'ɐ',
    name: 'a relajada',
    description:
      'Una a floja, a medio camino entre a y e. Es la a átona típica del portugués (sobre todo al final de palabra).',
    example: { text: 'de nada', variant: 'both', es: 'de nada' },
  },
  {
    symbol: 'ɐ̃',
    name: 'a relajada nasal',
    description:
      'La ɐ dicha «por la nariz»: es el sonido de la ã escrita. No existe en español; di «an» sin llegar a pronunciar la n.',
    example: { text: 'amanhã', variant: 'both', es: 'mañana' },
  },
  {
    symbol: 'e',
    name: 'e cerrada',
    description: 'Como la e del español, quizá un punto más cerrada.',
    example: { text: 'você', variant: 'br', es: 'tú / usted' },
  },
  {
    symbol: 'ɛ',
    name: 'e abierta',
    description:
      'Una e con la boca más abierta, tirando a la a. Distingue palabras: «é» (es) suena ɛ, «e» (y) suena i.',
    example: { text: 'até', variant: 'both', es: 'hasta' },
  },
  {
    symbol: 'ə',
    name: 'vocal muda',
    description:
      'Vocal neutra, apenas un soplo; a menudo desaparece del todo. Es la marca del portugués de Portugal: las e átonas se reducen a esto.',
    example: { text: 'boa noite', variant: 'pt', es: 'buenas noches' },
    variantNote: 'Casi exclusiva de Portugal; en Brasil esa e átona suena i.',
  },
  {
    symbol: 'ẽ',
    name: 'e nasal',
    description: 'La e dicha por la nariz: «en» sin llegar a pronunciar la n.',
    example: { text: 'com licença', variant: 'both', es: 'permiso' },
  },
  {
    symbol: 'i',
    name: 'i',
    description: 'Como la i del español.',
  },
  {
    symbol: 'ĩ',
    name: 'i nasal',
    description: 'La i dicha por la nariz: así suena «sim» (sí).',
    example: { text: 'sim', variant: 'both', es: 'sí' },
  },
  {
    symbol: 'o',
    name: 'o cerrada',
    description: 'Como la o del español, un punto más cerrada y redondeada.',
  },
  {
    symbol: 'ɔ',
    name: 'o abierta',
    description:
      'Una o con la boca más abierta, tirando a la a. «Avó» (abuela) lleva ɔ; «avô» (abuelo) lleva o: ¡cambia el significado!',
    example: { text: 'até logo', variant: 'both', es: 'hasta luego' },
  },
  {
    symbol: 'õ',
    name: 'o nasal',
    description: 'La o dicha por la nariz: «on» sin llegar a pronunciar la n.',
    example: { text: 'bom dia', variant: 'both', es: 'buenos días' },
  },
  {
    symbol: 'u',
    name: 'u',
    description:
      'Como la u del español. Ojo: la o átona final se pronuncia u («tudo» → túdu).',
    example: { text: 'tudo', variant: 'both', es: 'todo' },
  },
  {
    symbol: 'ũ',
    name: 'u nasal',
    description: 'La u dicha por la nariz: así suena «um» (un).',
    example: { text: 'um pouco', variant: 'both', es: 'un poco' },
  },
  // ---- semivocales ----
  {
    symbol: 'j',
    name: 'i breve',
    description: 'Una i rapidita que forma diptongo, como la y de «hay».',
    example: { text: 'oi', variant: 'br', es: 'hola' },
  },
  {
    symbol: 'j̃',
    name: 'i breve nasal',
    description:
      'La i breve dicha por la nariz. Aparece al final de «bem»: bẽj̃ (BR) / bɐ̃j̃ (PT).',
    example: { text: 'tudo bem', variant: 'both', es: '¿qué tal?' },
  },
  {
    symbol: 'w',
    name: 'u breve',
    description: 'Una u rapidita que forma diptongo, como la u de «auto».',
    example: { text: 'tchau', variant: 'br', es: 'chao' },
  },
  {
    symbol: 'w̃',
    name: 'u breve nasal',
    description:
      'La u breve dicha por la nariz: es el final de «não» (nɐ̃w̃) y de todo el grupo -ão.',
    example: { text: 'não', variant: 'both', es: 'no' },
  },
  // ---- consonantes que suenan como en español ----
  { symbol: 'b', name: 'b', description: 'Como en español.' },
  {
    symbol: 'd',
    name: 'd',
    description:
      'Como en español. Pero atención: en Brasil, ante sonido i se convierte en dʒ.',
  },
  { symbol: 'f', name: 'f', description: 'Como en español.' },
  {
    symbol: 'g',
    name: 'g suave',
    description: 'Como la g de «gato», siempre suave (nunca como la j española).',
  },
  { symbol: 'k', name: 'k', description: 'Como la c de «casa» o la q de «queso».' },
  { symbol: 'l', name: 'l', description: 'Como en español (al inicio de sílaba).' },
  { symbol: 'm', name: 'm', description: 'Como en español.' },
  { symbol: 'n', name: 'n', description: 'Como en español.' },
  {
    symbol: 'ɲ',
    name: 'ñ',
    description: 'Como la ñ española: es el sonido del dígrafo nh («amanhã»).',
    example: { text: 'amanhã', variant: 'both', es: 'mañana' },
  },
  {
    symbol: 'ʎ',
    name: 'll clásica',
    description:
      'Como la «ll» española pronunciada a la antigua (o el «gli» italiano): la lengua toca el paladar. Es el sonido del dígrafo lh: «filho», «trabalho».',
    example: { text: 'filho', variant: 'both', es: 'hijo' },
  },
  { symbol: 'p', name: 'p', description: 'Como en español.' },
  { symbol: 't', name: 't', description: 'Como en español. En Brasil, ante sonido i se convierte en tʃ.' },
  // ---- consonantes que hay que aprender ----
  {
    symbol: 'dʒ',
    name: 'd palatal',
    description:
      'Como la j del inglés «job» (una ch sonora). En Brasil, así suena la d ante sonido i: «dia» → dʒí.ɐ.',
    example: { text: 'bom dia', variant: 'br', es: 'buenos días' },
    variantNote: 'Solo Brasil; en Portugal la d se mantiene como en español.',
  },
  {
    symbol: 'tʃ',
    name: 'ch',
    description:
      'Como la ch española. En Brasil, así suena la t ante sonido i: «noite» → nój.tʃi.',
    example: { text: 'boa noite', variant: 'br', es: 'buenas noches' },
    variantNote: 'Solo Brasil; en Portugal la t se mantiene como en español.',
  },
  {
    symbol: 's',
    name: 's',
    description: 'Como la s española (al inicio de sílaba).',
  },
  {
    symbol: 'z',
    name: 's sonora',
    description:
      'Una s con zumbido (como la z inglesa de «zoo»). En portugués, la s entre vocales suena así: «casa» → ká.zɐ.',
    example: { text: 'prazer', variant: 'both', es: 'mucho gusto' },
  },
  {
    symbol: 'ʃ',
    name: 'sh',
    description:
      'Como la sh inglesa de «she». En Portugal, la s al final de sílaba o palabra suena así: «português» → puɾ.tu.géʃ.',
    example: { text: 'português', variant: 'pt', es: 'portugués' },
    variantNote: 'La s final como ʃ es rasgo de Portugal (y de Río de Janeiro).',
  },
  {
    symbol: 'ʒ',
    name: 'y sonora',
    description:
      'Como la ll/y suave rioplatense o la j francesa. Es el sonido de la j portuguesa: «já» → ʒa.',
    example: { text: 'até já', variant: 'pt', es: 'hasta ahorita' },
  },
  {
    symbol: 'v',
    name: 'v labiodental',
    description:
      'Con los dientes de arriba tocando el labio de abajo, como la v inglesa. En portugués v y b son sonidos DISTINTOS (error típico del hispanohablante).',
    example: { text: 'você', variant: 'br', es: 'tú / usted' },
  },
  {
    symbol: 'ɾ',
    name: 'r suave',
    description: 'Como la r española de «caro» (un solo golpe de lengua).',
    example: { text: 'obrigado', variant: 'both', es: 'gracias' },
  },
  {
    symbol: 'ʁ',
    name: 'r gutural',
    description:
      'Una r desde la garganta, como la r francesa (o una j española suave). Así suenan la rr y la r inicial: «Rio» → ʁí.u.',
    example: { text: 'por favor', variant: 'br', es: 'por favor' },
    variantNote:
      'Típica de Brasil (donde varía entre garganta y aspiración). En Portugal la rr también puede sonar gutural o vibrante como la rr española.',
  },
];

export type IpaToken =
  | { kind: 'symbol'; symbol: IpaSymbol }
  | { kind: 'plain'; text: string };

/* Ordenados de más largo a más corto para que dʒ gane a d, ɐ̃ a ɐ, etc. */
const byLength = [...IPA_SYMBOLS].sort(
  (a, b) => b.symbol.length - a.symbol.length,
);

/** Divide una transcripción en símbolos del catálogo y texto plano. */
export function tokenizeIpa(transcription: string): IpaToken[] {
  const tokens: IpaToken[] = [];
  let i = 0;
  while (i < transcription.length) {
    const match = byLength.find((s) => transcription.startsWith(s.symbol, i));
    if (match) {
      tokens.push({ kind: 'symbol', symbol: match });
      i += match.symbol.length;
    } else {
      const ch = transcription[i];
      const last = tokens[tokens.length - 1];
      if (last && last.kind === 'plain') {
        last.text += ch;
      } else {
        tokens.push({ kind: 'plain', text: ch });
      }
      i += 1;
    }
  }
  return tokens;
}

import type { Lesson } from '../../domain/content';

/** A2 · Módulo 3: Salud y cuerpo. */
export const a2m3: Lesson = {
  id: 'a2-m3-l1',
  title: 'En el médico',
  description: 'Di qué te duele, entiende consejos y pide una cita.',
  vocab: [
    {
      id: 'v-doente',
      es: 'enfermo/a',
      forms: [
        { text: 'doente', variant: 'both', ipa: { br: 'duˈẽ.tʃi', pt: 'duˈẽ.tə' } },
      ],
      example: { both: 'Estou doente.', es: 'Estoy enfermo.' },
    },
    {
      id: 'v-dor',
      es: 'dolor',
      forms: [{ text: 'dor', variant: 'both', ipa: { br: 'doʁ', pt: 'doɾ' } }],
      example: { both: 'Estou com dor de cabeça.', es: 'Tengo dolor de cabeza.' },
    },
    {
      id: 'v-cabeca',
      es: 'cabeza / garganta / barriga',
      forms: [
        {
          text: 'cabeça / garganta / barriga',
          variant: 'both',
          ipa: { br: 'kaˈbe.sɐ / gaʁˈgɐ̃.tɐ / baˈʁi.gɐ', pt: 'kɐˈbe.sɐ / gɐɾˈgɐ̃.tɐ / bɐˈʁi.gɐ' },
        },
      ],
    },
    {
      id: 'v-febre',
      es: 'fiebre',
      forms: [{ text: 'febre', variant: 'both', ipa: { br: 'ˈfɛ.bɾi', pt: 'ˈfɛ.bɾə' } }],
    },
    {
      id: 'v-resfriado',
      es: 'resfriado',
      forms: [
        { text: 'resfriado', variant: 'br', ipa: { br: 'ʁes.fɾiˈa.du' } },
        {
          text: 'constipação',
          variant: 'pt',
          ipa: { pt: 'kõʃ.ti.pɐˈsɐ̃w̃' },
          note: '¡Falso amigo doble! En Portugal «estar constipado» = estar resfriado, nada más.',
        },
      ],
    },
    {
      id: 'v-remedio',
      es: 'medicina / remedio',
      forms: [
        { text: 'remédio', variant: 'br', ipa: { br: 'ʁeˈmɛ.dʒu' } },
        { text: 'medicamento', variant: 'pt', ipa: { pt: 'mə.di.kɐˈmẽ.tu' }, note: 'En Brasil también se dice, pero «remédio» domina.' },
      ],
    },
    {
      id: 'v-consulta',
      es: 'cita médica / médico',
      forms: [
        {
          text: 'consulta / médico',
          variant: 'both',
          ipa: { br: 'kõˈsuw.tɐ / ˈmɛ.dʒi.ku', pt: 'kõˈsul.tɐ / ˈmɛ.di.ku' },
        },
      ],
      example: { both: 'Preciso de marcar uma consulta.', es: 'Necesito pedir una cita.' },
    },
    {
      id: 'v-doi',
      es: 'duele',
      forms: [
        {
          text: 'dói',
          variant: 'both',
          ipa: { br: 'dɔj' },
          note: 'De «doer». La estructura completa cambia por país: mira la gramática.',
        },
      ],
    },
    {
      id: 'v-melhorar',
      es: 'mejorar / descansar',
      forms: [
        {
          text: 'melhorar / descansar',
          variant: 'both',
          ipa: { br: 'me.ʎoˈɾaʁ / dʒis.kɐ̃ˈsaʁ', pt: 'mə.ʎuˈɾaɾ / dəʃ.kɐ̃ˈsaɾ' },
          note: '«Melhoras!» (¡mejórate pronto!) es el deseo estándar en ambos países.',
        },
      ],
    },
    {
      id: 'v-gripe',
      es: 'gripe / tos',
      forms: [
        { text: 'gripe / tosse', variant: 'both', ipa: { br: 'ˈgɾi.pi / ˈtɔ.si', pt: 'ˈgɾi.pə / ˈtɔ.sə' } },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-doer',
      title: '⭐ Decir que algo te duele',
      explanation:
        'Aquí cada país tiene su fórmula favorita:\n' +
        'En Portugal, doer + pronombre dativo, como en español: «Dói-me a cabeça» (me duele la cabeza), «Doem-te as costas?».\n' +
        'En Brasil se prefiere «estar com dor de…»: «Estou com dor de cabeça», o el gerundio: «Minha cabeça está doendo».\n' +
        'Nota el patrón de siempre: el pronombre pega al verbo por detrás en Portugal (dói-me) y por delante en Brasil cuando se usa (me dói).',
      examples: [
        { br: 'Estou com dor de garganta.', pt: 'Dói-me a garganta.', es: 'Me duele la garganta.' },
        { br: 'Minha barriga está doendo.', pt: 'Dói-me a barriga.', es: 'Me duele la barriga.' },
      ],
    },
    {
      id: 'g-estar-com',
      title: 'Estar com: tener fiebre, hambre, sueño',
      explanation:
        'Donde el español usa «tener», el portugués usa mucho «estar com» para estados pasajeros: «Estou com febre» (tengo fiebre), «Estou com fome» (tengo hambre), «Estou com sono» (tengo sueño), «Estou com frio».\n' +
        '«Ter» también es posible («tenho febre»), pero «estar com» es lo más natural para lo momentáneo.',
      examples: [
        { both: 'Estou com febre e com tosse.', es: 'Tengo fiebre y tos.' },
        { both: 'Ela está com sono.', es: 'Ella tiene sueño.' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-doi',
      title: 'El diptongo ói: dói',
      explanation: 'ói es o abierta + i breve: dói (duele), herói (héroe). Con o cerrada cambia la palabra: doi- no existe; compara «dois» (dos), con o cerrada.',
      samples: [
        { text: 'dói', variant: 'both', ipa: 'dɔj', hint: 'dói (o abierta)' },
        { text: 'dois', variant: 'both', ipa: 'dojs', hint: 'dôis (o cerrada)' },
      ],
    },
    {
      id: 'p-ss',
      title: 'tosse, passar: la doble s',
      explanation: 'La ss siempre suena /s/ (sorda); una s sola entre vocales es /z/: «tosse» (tos) vs «tose»… por eso «passar» lleva ss.',
      samples: [
        { text: 'tosse', variant: 'both', ipa: 'ˈtɔ.si', hint: 'tó-si' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Dói-me a garganta e tenho febre.', variant: 'pt' },
      question: '¿Qué síntomas tiene?',
      options: [
        'Dolor de garganta y fiebre',
        'Dolor de cabeza y tos',
        'Dolor de barriga',
        'Está resfriado sin fiebre',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: '— Bom dia, doutor. Estou com dor de cabeça e muita tosse.\n— Vou receitar um remédio. Descanse e beba muita água.',
      textVariant: 'br',
      question: '¿Qué le recomienda el médico?',
      options: [
        'Descansar y beber mucha agua',
        'Ir al hospital',
        'Trabajar menos horas',
      ],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Estou ___ dor de cabeça.',
      accepted: ['com'],
      variant: 'br',
      translation: 'Tengo dolor de cabeza.',
      hint: 'la preposición de los estados',
    },
    {
      id: 'e4',
      type: 'translate',
      skill: 'writing',
      es: 'estoy resfriado',
      accepted: [
        { text: 'estou resfriado', variant: 'br' },
        { text: 'estou constipado', variant: 'pt' },
      ],
    },
    {
      id: 'e5',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'Melhoras!', variant: 'br' },
    },
    {
      id: 'e6',
      type: 'order-words',
      skill: 'writing',
      words: ['Preciso', 'de', 'marcar', 'uma', 'consulta'],
      answer: 'Preciso de marcar uma consulta',
      variant: 'pt',
      translation: 'Necesito pedir una cita',
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Estou com dor de cabeça.', variant: 'br' },
      translation: 'Tengo dolor de cabeza.',
    },
  ],
};

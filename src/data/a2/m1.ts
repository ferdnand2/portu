import type { Lesson } from '../../domain/content';

/** A2 · Módulo 1: El pretérito perfeito. */
export const a2m1: Lesson = {
  id: 'a2-m1-l1',
  title: 'Ayer: el pretérito perfeito',
  description: 'Cuenta lo que hiciste — y descubre que «he hecho» también se dice así.',
  vocab: [
    {
      id: 'v-ontem-noite',
      es: 'anoche',
      forms: [
        {
          text: 'ontem à noite',
          variant: 'both',
          ipa: { br: 'ˈõ.tẽj̃ a ˈnoj.tʃi', pt: 'ˈõ.tɐ̃j̃ a ˈnoj.tə' },
        },
      ],
    },
    {
      id: 'v-anteontem',
      es: 'anteayer',
      forms: [
        { text: 'anteontem', variant: 'both', ipa: { br: 'ɐ̃.tʃiˈõ.tẽj̃', pt: 'ɐ̃.təˈõ.tɐ̃j̃' } },
      ],
    },
    {
      id: 'v-semana-passada',
      es: 'la semana pasada',
      forms: [
        {
          text: 'a semana passada',
          variant: 'both',
          ipa: { br: 'ɐ seˈmɐ̃.nɐ paˈsa.dɐ', pt: 'ɐ səˈmɐ̃.nɐ pɐˈsa.ðɐ' },
        },
      ],
    },
    {
      id: 'v-mes-passado',
      es: 'el mes / el año pasado',
      forms: [
        {
          text: 'o mês passado / o ano passado',
          variant: 'both',
          ipa: { br: 'u ˈmes paˈsa.du', pt: 'u ˈmeʃ pɐˈsa.ðu' },
        },
      ],
    },
    {
      id: 'v-ja',
      es: 'ya',
      forms: [{ text: 'já', variant: 'both', ipa: { br: 'ʒa' } }],
      example: { br: 'Você já almoçou?', pt: 'Já almoçaste?', es: '¿Ya almorzaste?' },
    },
    {
      id: 'v-ainda-nao',
      es: 'todavía no',
      forms: [
        { text: 'ainda não', variant: 'both', ipa: { br: 'aˈĩ.dɐ ˈnɐ̃w̃', pt: 'ɐˈĩ.dɐ ˈnɐ̃w̃' } },
      ],
    },
    {
      id: 'v-fui',
      es: 'fui (de ser e ir)',
      forms: [
        {
          text: 'fui',
          variant: 'both',
          ipa: { br: 'fuj' },
          note: 'Como en español, ser e ir comparten el pasado: fui, foste 🇵🇹, foi, fomos, foram.',
        },
      ],
    },
    {
      id: 'v-fiz',
      es: 'hice',
      forms: [{ text: 'fiz', variant: 'both', ipa: { br: 'fis', pt: 'fiʃ' } }],
      example: { both: 'Fiz um bolo ontem.', es: 'Hice un pastel ayer.' },
    },
    {
      id: 'v-tive',
      es: 'tuve / estuve',
      forms: [
        {
          text: 'tive / estive',
          variant: 'both',
          ipa: { br: 'ˈtʃi.vi / esˈtʃi.vi', pt: 'ˈti.və / əʃˈti.və' },
        },
      ],
    },
    {
      id: 'v-vi-comi',
      es: 'vi / comí',
      forms: [
        { text: 'vi / comi', variant: 'both', ipa: { br: 'vi / koˈmi' } },
      ],
    },
    {
      id: 'v-cheguei',
      es: 'llegué',
      forms: [
        {
          text: 'cheguei',
          variant: 'both',
          ipa: { br: 'ʃeˈgej', pt: 'ʃəˈgɐj' },
          note: 'Ortografía: chegar → cheguei, ficar → fiquei (la u guarda el sonido).',
        },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-perfeito',
      title: 'El pretérito perfeito',
      explanation:
        'Con falar / comer / partir:\n' +
        'eu falei / comi / parti\n' +
        'tu falaste / comeste / partiste 🇵🇹\n' +
        'você-ele falou / comeu / partiu\n' +
        'nós falamos / comemos / partimos\n' +
        'vocês-eles falaram / comeram / partiram\n' +
        'Irregulares imprescindibles: ser/ir → fui, foi, fomos, foram · fazer → fiz, fez, fizemos, fizeram · ter → tive, teve, tivemos, tiveram · estar → estive, esteve · poder → pude, pôde.',
      examples: [
        { br: 'Ontem eu trabalhei até tarde.', pt: 'Ontem trabalhei até tarde.', es: 'Ayer trabajé hasta tarde.' },
        { br: 'Você foi à festa?', pt: 'Foste à festa?', es: '¿Fuiste a la fiesta?' },
        { both: 'Nós fizemos uma viagem incrível.', es: 'Hicimos un viaje increíble.' },
      ],
    },
    {
      id: 'g-he-hecho',
      title: '⭐ «Hoy he comido» = «Hoje comi»',
      explanation:
        'El error número uno del hispanohablante: en portugués NO se usa el perfecto compuesto como en España. Todo pasado terminado va en perfeito simple, aunque sea de hoy: «Hoje comi muito» (hoy he comido mucho), «Já vi esse filme» (ya he visto esa película).\n' +
        '«Tenho comido» existe, pero significa otra cosa: acción repetida últimamente — «Tenho comido muito ultimamente» (últimamente he estado comiendo mucho).',
      examples: [
        { both: 'Hoje acordei cedo.', es: 'Hoy me he despertado temprano.' },
        { both: 'Já estive em Lisboa duas vezes.', es: 'Ya he estado en Lisboa dos veces.' },
        { both: 'Tenho estudado muito este mês.', es: 'He estado estudiando mucho este mes (repetido).' },
      ],
      variantNote: 'Esta regla es idéntica en Brasil y Portugal: cero divergencia, pero máxima interferencia con el español.',
    },
  ],
  pronunciation: [
    {
      id: 'p-ei-verbos',
      title: 'La terminación -ei: falei, cheguei',
      explanation:
        'El diptongo -ei de la primera persona suena «éi» en Brasil y «ãi» cerrado en Portugal (como viste con queijo).',
      samples: [
        { text: 'falei', variant: 'br', ipa: 'faˈlej', hint: 'fa-léi' },
        { text: 'falei', variant: 'pt', ipa: 'fɐˈlɐj', hint: 'fa-lãi' },
      ],
    },
    {
      id: 'p-ou',
      title: 'La terminación -ou: falou',
      explanation:
        'El diptongo ou de la tercera persona se pronuncia hoy como una o simple en ambos países: «falou» = falô.',
      samples: [{ text: 'ele falou', variant: 'both', ipa: 'ˈe.li faˈlo', hint: 'fa-lô' }],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Ontem eu trabalhei até tarde.', variant: 'br' },
      question: '¿Qué dice esta persona?',
      options: [
        'Ayer trabajó hasta tarde',
        'Hoy trabaja hasta tarde',
        'Mañana trabajará',
        'Nunca trabaja',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: '— Já foste ao Brasil?\n— Ainda não, mas fui a Angola o ano passado.',
      textVariant: 'pt',
      question: '¿Adónde fue esta persona el año pasado?',
      options: ['A Angola', 'A Brasil', 'A ningún lado'],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Ontem eu ___ ao cinema.',
      accepted: ['fui'],
      variant: 'both',
      translation: 'Ayer fui al cine.',
      hint: 'ir en perfeito',
    },
    {
      id: 'e4',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Com quem ___ ontem?',
      accepted: ['falaste'],
      variant: 'pt',
      translation: '¿Con quién hablaste ayer?',
      hint: 'falar, segunda persona',
    },
    {
      id: 'e5',
      type: 'translate',
      skill: 'writing',
      es: 'hoy he comido mucho',
      accepted: [{ text: 'hoje comi muito', variant: 'both' }],
    },
    {
      id: 'e6',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'Fiz um bolo ontem', variant: 'br' },
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Ontem eu cheguei tarde em casa.', variant: 'br' },
      translation: 'Ayer llegué tarde a casa.',
    },
  ],
};

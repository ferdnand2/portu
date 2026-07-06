import type { Lesson } from '../../domain/content';

/** B1 · Módulo 5: Narrar historias. */
export const b1m5: Lesson = {
  id: 'b1-m5-l1',
  title: 'Contar una historia',
  description: 'Conectores narrativos, el pluscuamperfecto y el discurso indirecto básico.',
  vocab: [
    {
      id: 'v-entao',
      es: 'entonces',
      forms: [
        {
          text: 'então',
          variant: 'both',
          ipa: { br: 'ẽˈtɐ̃w̃' },
          note: 'También muletilla para arrancar: «Então…» = bueno, pues…',
        },
      ],
    },
    {
      id: 'v-de-repente',
      es: 'de repente',
      forms: [
        { text: 'de repente', variant: 'both', ipa: { br: 'dʒi ʁeˈpẽ.tʃi', pt: 'də ʁəˈpẽ.tə' } },
      ],
    },
    {
      id: 'v-assim-que',
      es: 'en cuanto / tan pronto como',
      forms: [
        { text: 'assim que', variant: 'both', ipa: { br: 'aˈsĩ ki', pt: 'ɐˈsĩ kə' } },
      ],
      example: { both: 'Assim que cheguei, o filme começou.', es: 'En cuanto llegué, empezó la película.' },
    },
    {
      id: 'v-no-fim',
      es: 'al final / al principio',
      forms: [
        {
          text: 'no fim / no início',
          variant: 'both',
          ipa: { br: 'nu ˈfĩ / nu iˈni.si.u', pt: 'nu ˈfĩ / nu iˈni.sju' },
          note: 'En Brasil también «no final» y «no começo».',
        },
      ],
    },
    {
      id: 'v-afinal',
      es: 'al fin y al cabo / resulta que',
      forms: [
        {
          text: 'afinal',
          variant: 'both',
          ipa: { br: 'a.fiˈnaw', pt: 'ɐ.fiˈnal' },
          note: '«Afinal, quem chegou?» = ¿al final quién llegó? Muy usado en ambos países.',
        },
      ],
    },
    {
      id: 'v-acontecer',
      es: 'suceder / pasar',
      forms: [
        {
          text: 'acontecer',
          variant: 'both',
          ipa: { br: 'a.kõ.teˈseʁ', pt: 'ɐ.kõ.təˈseɾ' },
          note: '«O que aconteceu?» = ¿qué pasó?',
        },
      ],
    },
    {
      id: 'v-perceber',
      es: 'darse cuenta / entender',
      forms: [
        {
          text: 'perceber',
          variant: 'both',
          ipa: { br: 'peʁ.seˈbeʁ', pt: 'pəɾ.səˈβeɾ' },
          note: '⭐ En Brasil = darse cuenta; en Portugal además = entender: «Percebes?» = ¿entiendes? (BR diría «Entendeu?»).',
        },
      ],
    },
    {
      id: 'v-historia',
      es: 'historia / cuento',
      forms: [
        {
          text: 'história / conto',
          variant: 'both',
          ipa: { br: 'isˈtɔ.ɾi.ɐ / ˈkõ.tu', pt: 'iʃˈtɔ.ɾjɐ / ˈkõ.tu' },
        },
      ],
    },
    {
      id: 'v-parecer',
      es: 'parecer',
      forms: [
        { text: 'parecer', variant: 'both', ipa: { br: 'pa.ɾeˈseʁ', pt: 'pɐ.ɾəˈseɾ' } },
      ],
      example: { both: 'Parecia um sonho.', es: 'Parecía un sueño.' },
    },
    {
      id: 'v-engracado',
      es: 'gracioso / curioso',
      forms: [
        {
          text: 'engraçado',
          variant: 'both',
          ipa: { br: 'ẽ.gɾaˈsa.du', pt: 'ẽ.gɾɐˈsa.ðu' },
          note: '«O engraçado é que…» = lo curioso es que…',
        },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-pluscuam',
      title: 'El pluscuamperfecto: tinha feito',
      explanation:
        'Para «lo que ya había pasado antes»: ter en imperfeito + participio — «Quando cheguei, o filme já tinha começado» (cuando llegué, la película ya había empezado).\n' +
        'Existe también una forma simple (chegara, fizera) que hoy es literaria; en el habla siempre «tinha + participio».',
      examples: [
        { both: 'Quando cheguei, ela já tinha saído.', es: 'Cuando llegué, ella ya había salido.' },
        { both: 'Nunca tinha visto nada assim.', es: 'Nunca había visto nada así.' },
      ],
    },
    {
      id: 'g-discurso',
      title: 'Contar lo que alguien dijo',
      explanation:
        'Discurso indirecto con «dizer que», y los tiempos retroceden como en español: presente → imperfeito, perfeito → pluscuamperfecto.\n' +
        '«Estou cansado» → «Ele disse que estava cansado».\n' +
        '«Fui ao médico» → «Ela disse que tinha ido ao médico».\n' +
        'Preguntas: «perguntou se…» (preguntó si…), «perguntou onde/quando/por que…».',
      examples: [
        { both: 'Ele disse que estava com fome.', es: 'Dijo que tenía hambre.' },
        { both: 'Ela perguntou se eu falava português.', es: 'Preguntó si yo hablaba portugués.' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-historia',
      title: 'história: la h muda y la sílaba tónica',
      explanation: 'La h nunca suena: «história» empieza en i. Y el acento va en TÓ: is-TÓ-ria.',
      samples: [
        { text: 'história', variant: 'br', ipa: 'isˈtɔ.ɾi.ɐ', hint: 'is-tó-ria' },
      ],
    },
    {
      id: 'p-entao-ritmo',
      title: 'então, aconteceu: encadenar la narración',
      explanation: 'Los conectores se dicen rápido y átonos; practica la frase completa con ritmo natural.',
      samples: [
        {
          text: 'Então, de repente, aconteceu uma coisa engraçada',
          variant: 'br',
          ipa: 'ẽˈtɐ̃w̃ dʒi ʁeˈpẽ.tʃi a.kõ.teˈsew ˈu.mɐ ˈkoj.zɐ ẽ.gɾaˈsa.dɐ',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Quando cheguei, o filme já tinha começado.', variant: 'br' },
      question: '¿Qué pasó?',
      options: [
        'La película ya había empezado cuando llegó',
        'Llegó antes de que empezara',
        'La película fue cancelada',
        'No fue al cine',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: 'Assim que saí de casa, começou a chover. Voltei para apanhar o guarda-chuva e, afinal, quando cheguei à rua… já havia sol!',
      textVariant: 'pt',
      question: '¿Cómo termina la historia?',
      options: [
        'Al final había sol',
        'Siguió lloviendo todo el día',
        'Perdió el paraguas',
      ],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Quando cheguei, ela já ___ saído.',
      accepted: ['tinha'],
      variant: 'both',
      translation: 'Cuando llegué, ella ya había salido.',
      hint: 'ter, imperfeito',
    },
    {
      id: 'e4',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Ele disse que ___ cansado.',
      accepted: ['estava'],
      variant: 'both',
      translation: 'Dijo que estaba cansado.',
      hint: 'discurso indirecto: presente → imperfeito',
    },
    {
      id: 'e5',
      type: 'translate',
      skill: 'writing',
      es: '¿qué pasó?',
      accepted: [{ text: 'o que aconteceu?', variant: 'both' }],
    },
    {
      id: 'e6',
      type: 'order-words',
      skill: 'writing',
      words: ['De', 'repente,', 'a', 'luz', 'apagou'],
      answer: 'De repente, a luz apagou',
      variant: 'both',
      translation: 'De repente, la luz se apagó',
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Nunca tinha visto nada assim.', variant: 'br' },
      translation: 'Nunca había visto nada así.',
    },
  ],
};

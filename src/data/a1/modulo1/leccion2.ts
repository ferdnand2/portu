import type { Lesson } from '../../../domain/content';

/** A1 · Módulo 1 · Lección 2: Presentarse. */
export const leccion2: Lesson = {
  id: 'a1-m1-l2',
  title: 'Presentarse',
  description:
    'Di cómo te llamas, de dónde eres y qué idiomas hablas; pregunta lo mismo.',
  vocab: [
    {
      id: 'v-chamar',
      es: 'me llamo…',
      forms: [
        {
          text: 'eu me chamo…',
          variant: 'br',
          ipa: { br: 'ew mi ˈʃɐ.mu' },
          note: 'Pronombre antes del verbo.',
        },
        {
          text: 'chamo-me…',
          variant: 'pt',
          ipa: { pt: 'ˈʃɐ.mu mə' },
          note: 'Pronombre después del verbo, con guion.',
        },
      ],
      example: { br: 'Eu me chamo Ana.', pt: 'Chamo-me Ana.', es: 'Me llamo Ana.' },
    },
    {
      id: 'v-nome',
      es: 'mi nombre es…',
      forms: [
        {
          text: 'o meu nome é…',
          variant: 'both',
          ipa: { br: 'u mew ˈno.mi ˈɛ', pt: 'u mew ˈno.mə ˈɛ' },
        },
      ],
      example: { both: 'O meu nome é Fernando.', es: 'Mi nombre es Fernando.' },
    },
    {
      id: 'v-como-chama',
      es: '¿cómo te llamas?',
      forms: [
        {
          text: 'Como você se chama?',
          variant: 'br',
          ipa: { br: 'ˈko.mu voˈse si ˈʃɐ.mɐ' },
        },
        {
          text: 'Como te chamas?',
          variant: 'pt',
          ipa: { pt: 'ˈko.mu tə ˈʃɐ.mɐʃ' },
        },
      ],
    },
    {
      id: 'v-prazer',
      es: 'mucho gusto',
      forms: [
        {
          text: 'prazer / muito prazer',
          variant: 'both',
          ipa: { br: 'pɾaˈzeʁ', pt: 'pɾɐˈzeɾ' },
          note: 'Literalmente «placer». Respuesta habitual: «O prazer é meu».',
        },
      ],
    },
    {
      id: 'v-de-onde',
      es: '¿de dónde eres?',
      forms: [
        {
          text: 'De onde você é?',
          variant: 'br',
          ipa: { br: 'dʒi ˈõ.dʒi voˈse ˈɛ' },
        },
        {
          text: 'De onde és?',
          variant: 'pt',
          ipa: { pt: 'də ˈõ.də ˈɛʃ' },
        },
      ],
    },
    {
      id: 'v-sou-de',
      es: 'soy de…',
      forms: [
        {
          text: 'eu sou de…',
          variant: 'both',
          ipa: { br: 'ew ˈsow dʒi', pt: 'ew ˈsow də' },
        },
      ],
      example: { both: 'Eu sou de Caracas.', es: 'Soy de Caracas.' },
    },
    {
      id: 'v-moro-em',
      es: 'vivo en…',
      forms: [
        {
          text: 'moro em…',
          variant: 'both',
          ipa: { br: 'ˈmɔ.ɾu ẽj̃', pt: 'ˈmɔ.ɾu ɐ̃j̃' },
          note: 'De «morar» (residir). «Vivo em…» también se entiende.',
        },
      ],
      example: { both: 'Moro em Lisboa.', es: 'Vivo en Lisboa.' },
    },
    {
      id: 'v-falar',
      es: 'hablar',
      forms: [
        {
          text: 'falar',
          variant: 'both',
          ipa: { br: 'faˈlaʁ', pt: 'fɐˈlaɾ' },
        },
      ],
      example: {
        both: 'Falo espanhol e um pouco de português.',
        es: 'Hablo español y un poco de portugués.',
      },
    },
    {
      id: 'v-um-pouco',
      es: 'un poco',
      forms: [
        { text: 'um pouco', variant: 'both', ipa: { br: 'ũ ˈpo.ku' } },
      ],
    },
    {
      id: 'v-sim-nao',
      es: 'sí / no',
      forms: [
        { text: 'sim / não', variant: 'both', ipa: { br: 'sĩ / nɐ̃w̃' } },
      ],
    },
    {
      id: 'v-senhor',
      es: 'señor / señora',
      forms: [
        {
          text: 'senhor / senhora',
          variant: 'both',
          ipa: {
            br: 'siˈɲoʁ / siˈɲɔ.ɾɐ',
            pt: 'səˈɲoɾ / səˈɲɔ.ɾɐ',
          },
          note: 'Con artículo se vuelve el «usted» formal: «o senhor», «a senhora».',
        },
      ],
    },
    {
      id: 'v-e-voce',
      es: '¿y tú?',
      forms: [
        { text: 'e você?', variant: 'br', ipa: { br: 'i voˈse' } },
        { text: 'e tu?', variant: 'pt', ipa: { pt: 'i ˈtu' } },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-ser',
      title: 'El verbo ser en presente',
      explanation:
        'Primer verbo del curso y casi idéntico al español:\n' +
        'eu sou — yo soy\n' +
        'tu és — tú eres 🇵🇹\n' +
        'você é — tú eres / usted es 🇧🇷\n' +
        'ele / ela é — él / ella es\n' +
        'nós somos — nosotros somos\n' +
        'vocês são — ustedes son / vosotros sois\n' +
        'eles / elas são — ellos / ellas son',
      examples: [
        { both: 'Eu sou venezuelano.', es: 'Soy venezolano.' },
        { br: 'Você é do Brasil?', pt: 'Tu és de Portugal?', es: '¿Eres de Brasil / de Portugal?' },
        { both: 'Nós somos amigos.', es: 'Somos amigos.' },
      ],
      variantNote:
        'La forma «tu és» se oye a diario en Portugal; en Brasil casi siempre oirás «você é». «Vós sois» existe pero es arcaica: en ambos países se usa «vocês são» para el plural.',
    },
    {
      id: 'g-chamar-se',
      title: 'Chamar-se y la posición del pronombre',
      explanation:
        '«Llamarse» es «chamar-se», y aquí aparece otra divergencia sistemática que verás en todo el idioma: dónde va el pronombre reflexivo.\n' +
        'En Brasil el pronombre va ANTES del verbo (próclisis): «eu me chamo», «você se chama».\n' +
        'En Portugal va DESPUÉS, unido con guion (énclisis): «chamo-me», «ela chama-se». Pero ojo: en preguntas con palabra interrogativa vuelve delante: «Como te chamas?».\n' +
        'Este patrón (Brasil delante, Portugal detrás) se repite con todos los pronombres átonos: me, te, se, nos…',
      examples: [
        { br: 'Eu me chamo João.', pt: 'Chamo-me João.', es: 'Me llamo João.' },
        { br: 'Como você se chama?', pt: 'Como te chamas?', es: '¿Cómo te llamas?' },
        { br: 'Ela se chama Maria.', pt: 'Ela chama-se Maria.', es: 'Ella se llama María.' },
      ],
      variantNote:
        'No hace falta memorizar reglas de colocación todavía: quédate con el patrón general 🇧🇷 «me chamo» / 🇵🇹 «chamo-me» y tu oído hará el resto.',
    },
  ],
  pronunciation: [
    {
      id: 'p-reduccion',
      title: 'Portugal se «come» las vocales átonas',
      explanation:
        'El rasgo que más cuesta al oído hispano: en Portugal las vocales átonas se reducen o desaparecen, mientras que en Brasil se pronuncian todas con claridad. Por eso el portugués europeo suena «apurado» y el brasileño, «cantado».',
      samples: [
        {
          text: 'telefone',
          variant: 'br',
          ipa: 'te.leˈfo.ni',
          hint: 'te-le-fô-ni (todas las vocales claras)',
        },
        {
          text: 'telefone',
          variant: 'pt',
          ipa: 'tə.ləˈfɔ.nə',
          hint: 't’lefón (las átonas casi desaparecen)',
        },
      ],
    },
    {
      id: 'p-s-final',
      title: 'La s final: /s/ en Brasil, /sh/ en Portugal',
      explanation:
        'La «s» al final de sílaba o palabra suena /s/ en la mayor parte de Brasil, pero /sh/ en Portugal (y también en Río de Janeiro): «português» termina en «sh» en Lisboa.',
      samples: [
        { text: 'português', variant: 'br', ipa: 'poʁ.tuˈges', hint: 'português' },
        { text: 'português', variant: 'pt', ipa: 'puɾ.tuˈgeʃ', hint: 'purtuguêsh' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Como você se chama?', variant: 'br' },
      question: '¿Qué te están preguntando?',
      options: ['Cómo te llamas', 'De dónde eres', 'Cómo estás', 'Dónde vives'],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'De onde és?', variant: 'pt' },
      question: '¿Qué te están preguntando?',
      options: ['De dónde eres', 'Cómo te llamas', 'Qué idiomas hablas', 'Dónde trabajas'],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'Muito prazer', variant: 'pt' },
    },
    {
      id: 'e4',
      type: 'read-choice',
      skill: 'reading',
      text: '— Bom dia! Chamo-me Rui. E tu?\n— Oi! Eu me chamo Camila. Muito prazer!',
      textVariant: 'both',
      question: 'Por su forma de hablar, ¿de dónde son probablemente Rui y Camila?',
      options: [
        'Rui de Portugal y Camila de Brasil',
        'Rui de Brasil y Camila de Portugal',
        'Los dos del mismo país',
      ],
      answer: 0,
    },
    {
      id: 'e5',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Eu ___ de Caracas.',
      accepted: ['sou'],
      variant: 'both',
      translation: 'Soy de Caracas.',
      hint: 'verbo ser, primera persona',
    },
    {
      id: 'e6',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Tu ___ do Porto?',
      accepted: ['és', 'es'],
      variant: 'pt',
      translation: '¿Eres de Oporto?',
      hint: 'verbo ser, segunda persona',
    },
    {
      id: 'e7',
      type: 'order-words',
      skill: 'writing',
      words: ['me', 'Eu', 'chamo', 'Fernando'],
      answer: 'Eu me chamo Fernando',
      variant: 'br',
      translation: 'Me llamo Fernando',
    },
    {
      id: 'e8',
      type: 'translate',
      skill: 'writing',
      es: '¿cómo te llamas?',
      accepted: [
        { text: 'Como você se chama?', variant: 'br' },
        { text: 'Como te chamas?', variant: 'pt' },
        { text: 'Como se chama?', variant: 'both' },
      ],
    },
    {
      id: 'e9',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Eu falo espanhol e um pouco de português.', variant: 'br' },
      translation: 'Hablo español y un poco de portugués.',
    },
    {
      id: 'e10',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Chamo-me Fernando e sou da Venezuela.', variant: 'pt' },
      translation: 'Me llamo Fernando y soy de Venezuela.',
    },
  ],
};

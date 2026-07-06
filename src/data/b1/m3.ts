import type { Lesson } from '../../domain/content';

/** B1 · Módulo 3: Pronombres y colocación. */
export const b1m3: Lesson = {
  id: 'b1-m3-l1',
  title: 'Te veo / vejo-te: los pronombres',
  description: 'Domina los pronombres de objeto y LA divergencia sintáctica entre Brasil y Portugal.',
  vocab: [
    {
      id: 'v-me-te',
      es: 'me / te',
      forms: [
        {
          text: 'me / te',
          variant: 'both',
          ipa: { br: 'mi / tʃi', pt: 'mə / tə' },
        },
      ],
      example: { br: 'Ele me ajudou.', pt: 'Ele ajudou-me.', es: 'Él me ayudó.' },
    },
    {
      id: 'v-o-a',
      es: 'lo / la (objeto directo)',
      forms: [
        {
          text: 'o / a',
          variant: 'both',
          ipa: { br: 'u / ɐ' },
          note: 'En el Brasil hablado casi no se usan: se repite «ele/ela» — «Vi ele ontem» (coloquial).',
        },
      ],
      example: { br: 'Eu vi ele ontem.', pt: 'Vi-o ontem.', es: 'Lo vi ayer.' },
    },
    {
      id: 'v-lhe',
      es: 'le (objeto indirecto)',
      forms: [
        {
          text: 'lhe / lhes',
          variant: 'both',
          ipa: { br: 'ʎi / ʎis', pt: 'ʎə / ʎəʃ' },
          note: 'En Brasil coloquial se sustituye por «para ele/ela»: «Dei o livro para ela».',
        },
      ],
    },
    {
      id: 'v-nos-vos',
      es: 'nos / os',
      forms: [
        {
          text: 'nos / vos',
          variant: 'both',
          ipa: { br: 'nus', pt: 'nuʃ / vuʃ' },
          note: '«Vos» (a ustedes/vosotros) es de Portugal: «Quero vos dizer…» = quiero deciros.',
        },
      ],
    },
    {
      id: 'v-comigo',
      es: 'conmigo / contigo',
      forms: [
        {
          text: 'comigo / contigo',
          variant: 'both',
          ipa: { br: 'koˈmi.gu / kõˈtʃi.gu', pt: 'kuˈmi.gu / kõˈti.gu' },
          note: 'En Brasil «contigo» convive con «com você».',
        },
      ],
    },
    {
      id: 'v-ajudar',
      es: 'ayudar',
      forms: [
        { text: 'ajudar', variant: 'both', ipa: { br: 'a.ʒuˈdaʁ', pt: 'ɐ.ʒuˈdaɾ' } },
      ],
      example: { br: 'Você pode me ajudar?', pt: 'Podes ajudar-me?', es: '¿Puedes ayudarme?' },
    },
    {
      id: 'v-emprestar',
      es: 'prestar',
      forms: [
        { text: 'emprestar', variant: 'both', ipa: { br: 'ẽ.pɾesˈtaʁ', pt: 'ẽ.pɾəʃˈtaɾ' } },
      ],
      example: { br: 'Me empresta a caneta?', pt: 'Emprestas-me a caneta?', es: '¿Me prestas el bolígrafo?' },
    },
    {
      id: 'v-mandar',
      es: 'enviar / mandar',
      forms: [
        {
          text: 'mandar / enviar',
          variant: 'both',
          ipa: { br: 'mɐ̃ˈdaʁ / ẽ.viˈaʁ', pt: 'mɐ̃ˈdaɾ / ẽ.viˈaɾ' },
        },
      ],
      example: { br: 'Te mando a foto depois.', pt: 'Mando-te a foto depois.', es: 'Te mando la foto después.' },
    },
    {
      id: 'v-dizer',
      es: 'decir / contar',
      forms: [
        {
          text: 'dizer / contar',
          variant: 'both',
          ipa: { br: 'dʒiˈzeʁ / kõˈtaʁ', pt: 'diˈzeɾ / kõˈtaɾ' },
        },
      ],
      example: { br: 'Me diz uma coisa…', pt: 'Diz-me uma coisa…', es: 'Dime una cosa…' },
    },
    {
      id: 'v-encontro',
      es: 'nos vemos…',
      forms: [
        { text: 'a gente se vê', variant: 'br', ipa: { br: 'ɐ ˈʒẽ.tʃi si ˈve' } },
        { text: 'vemo-nos', variant: 'pt', ipa: { pt: 'ˈve.mu nuʃ' } },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-colocacion',
      title: '⭐⭐ La colocación: el gran divisor',
      explanation:
        'Ya la conoces de «chamar-se»; ahora el sistema completo.\n' +
        'BRASIL — pronombre ANTES del verbo, siempre que se pueda: «Ele me viu», «Te ligo amanhã», «Me ajuda!» (incluso arrancando la frase, cosa que la norma culta evita pero el habla adora).\n' +
        'PORTUGAL — pronombre DESPUÉS con guion por defecto: «Ele viu-me», «Ligo-te amanhã», «Ajuda-me!». PERO ciertas palabras lo atraen hacia delante: negación (não me viu), interrogativos (quem te disse?), «que» (espero que me ajudes), adverbios como já, ainda, também.\n' +
        'Regla de superviviencia: en Brasil, delante; en Portugal, detrás salvo que haya una «palabra imán» antes.',
      examples: [
        { br: 'Eu te ligo amanhã.', pt: 'Ligo-te amanhã.', es: 'Te llamo mañana.' },
        { br: 'Ela não me viu.', pt: 'Ela não me viu.', es: 'Ella no me vio. (¡con negación, igual!)' },
        { br: 'Você pode me ajudar?', pt: 'Podes ajudar-me?', es: '¿Puedes ayudarme?' },
      ],
    },
    {
      id: 'g-futuro-mesoclise',
      title: 'Curiosidad: la mesóclisis',
      explanation:
        'En el futuro y el condicional, el portugués europeo muy formal incrusta el pronombre DENTRO del verbo: «Dir-te-ei» (te diré), «Ajudar-me-ias?» (¿me ayudarías?).\n' +
        'Hoy es lenguaje de documentos y discursos solemnes; en el habla se evita reformulando («Vou dizer-te»). En Brasil no existe fuera de la literatura. Te la enseñamos para que la reconozcas, no para usarla.',
      examples: [
        { pt: 'Dir-te-ei a verdade.', br: 'Vou te dizer a verdade.', es: 'Te diré la verdad.' },
      ],
      variantNote: 'Si ves un verbo con un pronombre en el medio, es futuro o condicional formal portugués.',
    },
  ],
  pronunciation: [
    {
      id: 'p-lhe',
      title: 'lhe: la ll clásica átona',
      explanation: '«lhe» es ʎ + vocal débil: /ʎi/ 🇧🇷, /ʎə/ 🇵🇹. En el habla rápida casi desaparece.',
      samples: [
        { text: 'Eu lhe disse a verdade', variant: 'br', ipa: 'ew ʎi ˈdʒi.si ɐ veʁˈda.dʒi', hint: 'eu-lli-dyíssi' },
      ],
    },
    {
      id: 'p-enclisis-ritmo',
      title: 'El ritmo de la énclisis portuguesa',
      explanation:
        'En «ligo-te», «vejo-o», el pronombre se pega átono al verbo, como una sílaba extra sin acento: LI-go-te. Escúchalo hasta que suene natural.',
      samples: [
        { text: 'Ligo-te amanhã', variant: 'pt', ipa: 'ˈli.gu tə ɐ.mɐˈɲɐ̃', hint: 'lí-gu-te' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Te ligo amanhã, tá?', variant: 'br' },
      question: '¿Qué promete esta persona?',
      options: [
        'Llamarte mañana',
        'Visitarte hoy',
        'Escribirte una carta',
        'Verte el sábado',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: '— Emprestas-me o teu carregador?\n— Claro, empresto-to já. Mas devolve-mo antes de saíres!',
      textVariant: 'pt',
      question: '¿Qué le pide una persona a la otra?',
      options: ['El cargador prestado', 'El coche prestado', 'Dinero prestado'],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'order-words',
      skill: 'writing',
      words: ['Ele', 'me', 'ajudou', 'muito'],
      answer: 'Ele me ajudou muito',
      variant: 'br',
      translation: 'Él me ayudó mucho',
    },
    {
      id: 'e4',
      type: 'order-words',
      skill: 'writing',
      words: ['Ele', 'ajudou-me', 'muito'],
      answer: 'Ele ajudou-me muito',
      variant: 'pt',
      translation: 'Él me ayudó mucho',
    },
    {
      id: 'e5',
      type: 'translate',
      skill: 'writing',
      es: 'te llamo mañana',
      accepted: [
        { text: 'te ligo amanhã', variant: 'br' },
        { text: 'ligo-te amanhã', variant: 'pt' },
      ],
    },
    {
      id: 'e6',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Espero que ___ ajudes. (Portugal: ¿delante o detrás?)',
      accepted: ['me'],
      variant: 'pt',
      translation: 'Espero que me ayudes. («que» atrae el pronombre hacia delante)',
      hint: 'pronombre de 1ª persona',
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Você pode me ajudar?', variant: 'br' },
      translation: '¿Puedes ayudarme?',
    },
  ],
};

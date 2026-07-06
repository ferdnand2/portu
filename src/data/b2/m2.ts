import type { Lesson } from '../../domain/content';

/** B2 · Módulo 2: El infinitivo personal. */
export const b2m2: Lesson = {
  id: 'b2-m2-l1',
  title: 'Para fazermos: el infinitivo personal',
  description: 'Un infinitivo que se conjuga — otra exclusividad del portugués.',
  vocab: [
    {
      id: 'v-para-inf',
      es: 'para que (nosotros)…',
      forms: [
        {
          text: 'para fazermos',
          variant: 'both',
          ipa: { br: 'ˈpa.ɾɐ faˈzeʁ.mus', pt: 'ˈpɐ.ɾɐ fɐˈzeɾ.muʃ' },
          note: '«Trouxe o mapa para não nos perdermos» = traje el mapa para que no nos perdamos.',
        },
      ],
    },
    {
      id: 'v-antes-de',
      es: 'antes de que… / después de que…',
      forms: [
        {
          text: 'antes de / depois de',
          variant: 'both',
          ipa: { br: 'ˈɐ̃.tʃis dʒi / deˈpojz dʒi', pt: 'ˈɐ̃.təʒ də / dəˈpojʒ də' },
        },
      ],
      example: { both: 'Antes de saírem, fechem as janelas.', es: 'Antes de que salgan, cierren las ventanas.' },
    },
    {
      id: 'v-e-melhor',
      es: 'es mejor que…',
      forms: [
        { text: 'é melhor…', variant: 'both', ipa: { br: 'ɛ meˈʎɔʁ', pt: 'ɛ məˈʎɔɾ' } },
      ],
      example: { both: 'É melhor irmos cedo.', es: 'Es mejor que vayamos temprano.' },
    },
    {
      id: 'v-ao-inf',
      es: 'al + infinitivo',
      forms: [
        {
          text: 'ao chegarmos',
          variant: 'both',
          ipa: { br: 'aw ʃeˈgaʁ.mus', pt: 'aw ʃəˈgaɾ.muʃ' },
          note: '«Ao chegarmos, vimos o mar» = al llegar (nosotros), vimos el mar.',
        },
      ],
    },
    {
      id: 'v-sem',
      es: 'sin que…',
      forms: [
        { text: 'sem', variant: 'both', ipa: { br: 'sẽj̃', pt: 'sɐ̃j̃' } },
      ],
      example: { both: 'Saíram sem nos avisarem.', es: 'Salieron sin avisarnos.' },
    },
    {
      id: 'v-apesar-de',
      es: 'a pesar de que…',
      forms: [
        { text: 'apesar de', variant: 'both', ipa: { br: 'a.peˈzaʁ dʒi', pt: 'ɐ.pəˈzaɾ də' } },
      ],
    },
    {
      id: 'v-o-facto',
      es: 'el hecho de que…',
      forms: [
        { text: 'o fato de', variant: 'br', ipa: { br: 'u ˈfa.tu dʒi' }, note: 'Sin c en Brasil: fato.' },
        { text: 'o facto de', variant: 'pt', ipa: { pt: 'u ˈfak.tu də' }, note: 'Con c en Portugal (y se pronuncia). Ojo: en Portugal «fato» es un traje.' },
      ],
    },
    {
      id: 'v-convem',
      es: 'conviene que…',
      forms: [
        { text: 'convém', variant: 'both', ipa: { br: 'kõˈvẽj̃', pt: 'kõˈvɐ̃j̃' } },
      ],
      example: { both: 'Convém chegarmos antes das oito.', es: 'Conviene que lleguemos antes de las ocho.' },
    },
    {
      id: 'v-combinar-b2',
      es: 'quedamos en…',
      forms: [
        {
          text: 'combinámos…',
          variant: 'pt',
          ipa: { pt: 'kõ.biˈna.muʃ' },
          note: 'Portugal distingue por escrito el pasado con acento: combinámos (quedamos ayer) vs combinamos (quedamos siempre).',
        },
        {
          text: 'combinamos…',
          variant: 'br',
          ipa: { br: 'kõ.biˈnɐ̃.mus' },
        },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-inf-pessoal',
      title: '⭐⭐ El infinitivo personal',
      explanation:
        'El portugués puede conjugar el infinitivo para decir QUIÉN hace la acción: fazer, fazeres 🇵🇹, fazer, fazermos, fazerem. (Idéntico al subjuntivo futuro en los regulares; difiere en los irregulares: ser → sermos, no formos.)\n' +
        'Se usa donde el español necesita «que + subjuntivo»:\n' +
        '«É melhor IRMOS» = es mejor QUE VAYAMOS.\n' +
        '«Para não SE PERDEREM» = para que no se pierdan.\n' +
        '«Antes de SAÍRES» = antes de que salgas.\n' +
        'Resultado: frases más cortas y elegantes. Es una de las estructuras que hace sonar «nativo».',
      examples: [
        { both: 'É melhor sairmos cedo para chegarmos antes do jantar.', es: 'Es mejor que salgamos temprano para llegar antes de la cena.' },
        { both: 'Trouxe um mapa para não nos perdermos.', es: 'Traje un mapa para que no nos perdamos.' },
        { pt: 'Obrigado por teres vindo.', br: 'Obrigado por você ter vindo.', es: 'Gracias por haber venido.' },
      ],
    },
    {
      id: 'g-cuando-usarlo',
      title: '¿Infinitivo personal o subjuntivo?',
      explanation:
        'Tras preposiciones (para, antes de, depois de, sem, ao, apesar de) → infinitivo personal: «para fazermos».\n' +
        'Tras «que» → subjuntivo: «quero que faças».\n' +
        'Con expresiones impersonales (é melhor, convém, basta) valen ambos: «É melhor irmos» = «É melhor que vamos».\n' +
        'Si el sujeto es el mismo de la frase principal y es singular, el infinitivo queda sin marca: «Vim para ajudar».',
      examples: [
        { both: 'Depois de terminarmos, vamos comemorar.', es: 'Después de que terminemos, vamos a celebrar.' },
        { both: 'Apesar de estarem cansados, continuaram.', es: 'A pesar de que estaban cansados, continuaron.' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-mos-final',
      title: '-armos, -ermos: el acento no se mueve',
      explanation: 'En el infinitivo personal el acento sigue en la vocal del infinitivo: fa-ZER-mos, che-GAR-mos, sa-ÍR-des… no «fazÉRmos».',
      samples: [
        { text: 'para chegarmos', variant: 'br', ipa: 'ˈpa.ɾɐ ʃeˈgaʁ.mus', hint: 'she-GÁR-mus' },
      ],
    },
    {
      id: 'p-facto',
      title: 'facto 🇵🇹 vs fato 🇧🇷',
      explanation:
        'Tras el Acuerdo Ortográfico solo se escriben las consonantes que se pronuncian, y Portugal pronuncia la c de «facto»: /ˈfaktu/. Brasil nunca la dijo, así que escribe «fato».',
      samples: [
        { text: 'de facto', variant: 'pt', ipa: 'də ˈfak.tu', hint: 'de-fác-tu (= en efecto)' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'É melhor sairmos cedo para chegarmos antes do jantar.', variant: 'pt' },
      question: '¿Qué propone?',
      options: [
        'Salir temprano para llegar antes de la cena',
        'Cenar más tarde',
        'Quedarse en casa',
        'Salir después de cenar',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: 'Deixei as chaves na receção para não termos de voltar antes das seis. Ao saírem, avisem o porteiro.',
      textVariant: 'pt',
      question: '¿Qué deben hacer al salir?',
      options: ['Avisar al portero', 'Devolver las llaves', 'Volver a las seis'],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Trouxe um mapa para não nos ___ .',
      accepted: ['perdermos'],
      variant: 'both',
      translation: 'Traje un mapa para que no nos perdamos.',
      hint: 'perder-se, infinitivo personal de nós',
    },
    {
      id: 'e4',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'É melhor ___ cedo amanhã.',
      accepted: ['irmos', 'sairmos'],
      variant: 'both',
      translation: 'Es mejor que vayamos/salgamos temprano mañana.',
      hint: 'infinitivo personal de nós',
    },
    {
      id: 'e5',
      type: 'translate',
      skill: 'writing',
      es: 'antes de que salgas (tú, Portugal)',
      accepted: [{ text: 'antes de saíres', variant: 'pt' }],
    },
    {
      id: 'e6',
      type: 'order-words',
      skill: 'writing',
      words: ['Obrigado', 'por', 'teres', 'vindo'],
      answer: 'Obrigado por teres vindo',
      variant: 'pt',
      translation: 'Gracias por haber venido',
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'É melhor irmos agora.', variant: 'br' },
      translation: 'Es mejor que vayamos ahora.',
    },
  ],
};

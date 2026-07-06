import type { Lesson } from '../../domain/content';

/** B1 · Módulo 2: Consejos e hipótesis. */
export const b1m2: Lesson = {
  id: 'b1-m2-l1',
  title: 'Si yo fuera tú: consejos e hipótesis',
  description: 'Da consejos, imagina situaciones y usa el condicional con el imperfecto de subjuntivo.',
  vocab: [
    {
      id: 'v-conselho',
      es: 'consejo / aconsejar',
      forms: [
        {
          text: 'conselho / aconselhar',
          variant: 'both',
          ipa: { br: 'kõˈse.ʎu / a.kõ.seˈʎaʁ', pt: 'kõˈsɐ.ʎu / ɐ.kõ.səˈʎaɾ' },
        },
      ],
    },
    {
      id: 'v-se-eu-fosse',
      es: 'si yo fuera tú…',
      forms: [
        { text: 'se eu fosse você…', variant: 'br', ipa: { br: 'si ew ˈfo.si voˈse' } },
        { text: 'se eu fosse a ti… / no teu lugar…', variant: 'pt', ipa: { pt: 'sə ew ˈfo.sə ɐ ˈti' } },
      ],
    },
    {
      id: 'v-deveria',
      es: 'deberías…',
      forms: [
        { text: 'você deveria…', variant: 'br', ipa: { br: 'voˈse de.veˈɾi.ɐ' } },
        { text: 'devias…', variant: 'pt', ipa: { pt: 'dəˈvi.ɐʃ' }, note: 'Portugal prefiere el imperfeito: «devias descansar».' },
      ],
    },
    {
      id: 'v-melhor',
      es: 'sería mejor…',
      forms: [
        {
          text: 'seria melhor…',
          variant: 'both',
          ipa: { br: 'seˈɾi.ɐ meˈʎɔʁ', pt: 'səˈɾi.ɐ məˈʎɔɾ' },
        },
      ],
    },
    {
      id: 'v-valer-a-pena',
      es: 'valer la pena',
      forms: [
        {
          text: 'valer a pena',
          variant: 'both',
          ipa: { br: 'vaˈleʁ ɐ ˈpe.nɐ', pt: 'vɐˈleɾ ɐ ˈpe.nɐ' },
          note: 'Sin «la»: «Vale a pena visitar o Porto».',
        },
      ],
    },
    {
      id: 'v-caso',
      es: 'en caso de que / si acaso',
      forms: [
        {
          text: 'caso',
          variant: 'both',
          ipa: { br: 'ˈka.zu' },
          note: 'Con subjuntivo: «Caso precise, me liga» 🇧🇷 = si acaso necesitas, llámame.',
        },
      ],
    },
    {
      id: 'v-resolver',
      es: 'resolver / decidir',
      forms: [
        {
          text: 'resolver',
          variant: 'both',
          ipa: { br: 'ʁe.zowˈveʁ', pt: 'ʁə.zolˈveɾ' },
          note: 'En Brasil también significa decidir: «Resolvi estudar português» = decidí estudiar portugués.',
        },
      ],
    },
    {
      id: 'v-jeito',
      es: 'manera / solución',
      forms: [
        {
          text: 'jeito',
          variant: 'br',
          ipa: { br: 'ˈʒej.tu' },
          note: 'Palabra comodín brasileña: «dar um jeito» (encontrar una solución), «de jeito nenhum» (de ninguna manera).',
        },
        {
          text: 'maneira / forma',
          variant: 'pt',
          ipa: { pt: 'mɐˈnɐj.ɾɐ' },
          note: '«Jeito» se entiende en Portugal, pero se usa mucho menos.',
        },
      ],
    },
    {
      id: 'v-preocupar',
      es: 'preocuparse',
      forms: [
        {
          text: 'preocupar-se',
          variant: 'both',
          ipa: { br: 'pɾe.o.kuˈpaʁ si', pt: 'pɾju.kuˈpaɾ sə' },
        },
      ],
      example: { br: 'Não se preocupe!', pt: 'Não te preocupes!', es: '¡No te preocupes!' },
    },
    {
      id: 'v-arriscar',
      es: 'arriesgar / intentar',
      forms: [
        {
          text: 'arriscar / tentar',
          variant: 'both',
          ipa: { br: 'a.ʁisˈkaʁ / tẽˈtaʁ', pt: 'ɐ.ʁiʃˈkaɾ / tẽˈtaɾ' },
        },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-imp-subjuntivo',
      title: 'El imperfecto de subjuntivo: fosse, tivesse',
      explanation:
        'Se forma desde la 3ª plural del perfeito quitando -ram y añadiendo -sse: falaram → falasse, comeram → comesse, foram → fosse, tiveram → tivesse, fizeram → fizesse.\n' +
        'Su uso estrella: hipótesis con «se» — «Se eu fosse rico, viajaria o mundo» (si fuera rico, viajaría por el mundo).\n' +
        'Es el equivalente exacto del «-ra/-se» español, así que la lógica ya la tienes.',
      examples: [
        { br: 'Se eu fosse você, não faria isso.', pt: 'Se eu fosse a ti, não fazia isso.', es: 'Si yo fuera tú, no haría eso.' },
        { both: 'Se tivesse dinheiro, compraria uma casa na praia.', es: 'Si tuviera dinero, compraría una casa en la playa.' },
      ],
    },
    {
      id: 'g-condicional-imp',
      title: 'Condicional… o imperfeito',
      explanation:
        'En la respuesta de la hipótesis, el condicional (faria, compraria) es la forma «de libro». Pero en el habla, ambos países lo sustituyen muchísimo por el imperfeito: «Se eu fosse você, não FAZIA isso».\n' +
        'En Portugal esta sustitución es casi la norma; en Brasil conviven las dos.\n' +
        'Para dar consejos suaves: «(Você) deveria descansar» 🇧🇷 / «Devias descansar» 🇵🇹, o «Era melhor ires ao médico» 🇵🇹.',
      examples: [
        { br: 'Eu compraria esse carro.', pt: 'Eu comprava esse carro.', es: 'Yo compraría ese coche.' },
        { br: 'Você deveria falar com ela.', pt: 'Devias falar com ela.', es: 'Deberías hablar con ella.' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-fosse',
      title: 'fosse vs foce… la ss del subjuntivo',
      explanation: 'Todas las formas en -sse suenan con /s/ sorda: fosse (fó-si 🇧🇷 / fós 🇵🇹), tivesse, pudesse.',
      samples: [
        { text: 'se eu fosse', variant: 'br', ipa: 'si ew ˈfo.si', hint: 'fó-si' },
        { text: 'se eu fosse', variant: 'pt', ipa: 'sə ew ˈfo.sə', hint: 'fós' },
      ],
    },
    {
      id: 'p-jeito',
      title: 'jeito: la j otra vez',
      explanation: 'jeito = «llei-tu» con la ll argentina. Nunca con j española.',
      samples: [{ text: 'dar um jeito', variant: 'br', ipa: 'daʁ ũ ˈʒej.tu', hint: 'dar-um-lléitu' }],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Se eu fosse você, eu não faria isso.', variant: 'br' },
      question: '¿Qué está haciendo esta persona?',
      options: ['Dando un consejo', 'Dando una orden', 'Pidiendo perdón', 'Invitando'],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: '— Não sei se aceito o emprego novo…\n— No teu lugar, aceitava. Vale a pena arriscar!',
      textVariant: 'pt',
      question: '¿Qué le aconseja?',
      options: [
        'Que acepte el empleo, vale la pena',
        'Que no acepte',
        'Que pida más sueldo',
      ],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Se eu ___ rico, viajaria o mundo.',
      accepted: ['fosse'],
      variant: 'both',
      translation: 'Si fuera rico, viajaría por el mundo.',
      hint: 'ser, imperfecto de subjuntivo',
    },
    {
      id: 'e4',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Se ___ dinheiro, compraria uma casa.',
      accepted: ['tivesse'],
      variant: 'both',
      translation: 'Si tuviera dinero, compraría una casa.',
      hint: 'ter, imperfecto de subjuntivo',
    },
    {
      id: 'e5',
      type: 'translate',
      skill: 'writing',
      es: 'deberías descansar',
      accepted: [
        { text: 'você deveria descansar', variant: 'br' },
        { text: 'devias descansar', variant: 'pt' },
      ],
    },
    {
      id: 'e6',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'Não se preocupe', variant: 'br' },
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Se eu fosse você, aceitaria.', variant: 'br' },
      translation: 'Si yo fuera tú, aceptaría.',
    },
  ],
};

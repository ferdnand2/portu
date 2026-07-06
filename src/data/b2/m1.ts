import type { Lesson } from '../../domain/content';

/** B2 · Módulo 1: El subjuntivo futuro. */
export const b2m1: Lesson = {
  id: 'b2-m1-l1',
  title: 'Quando puderes: el subjuntivo futuro',
  description: 'La joya del portugués: un tiempo que el español dejó de usar hace siglos.',
  vocab: [
    {
      id: 'v-quando',
      es: 'cuando (+ futuro)',
      forms: [
        {
          text: 'quando',
          variant: 'both',
          ipa: { br: 'ˈkwɐ̃.du' },
          note: 'Con acciones futuras dispara el subjuntivo futuro: «quando puder» (cuando pueda).',
        },
      ],
    },
    {
      id: 'v-assim-que-b2',
      es: 'en cuanto / apenas',
      forms: [
        {
          text: 'assim que / logo que',
          variant: 'both',
          ipa: { br: 'aˈsĩ ki / ˈlɔ.gu ki', pt: 'ɐˈsĩ kə / ˈlɔ.gu kə' },
        },
      ],
    },
    {
      id: 'v-enquanto-b2',
      es: 'mientras (+ futuro)',
      forms: [
        { text: 'enquanto', variant: 'both', ipa: { br: 'ẽˈkwɐ̃.tu' } },
      ],
      example: { both: 'Enquanto estiveres aqui, aproveita!', es: 'Mientras estés aquí, ¡aprovecha!' },
    },
    {
      id: 'v-se-futuro',
      es: 'si (condición real)',
      forms: [
        {
          text: 'se',
          variant: 'both',
          ipa: { br: 'si', pt: 'sə' },
          note: 'Si la condición es futura y posible: «se quiseres» (si quieres), «se você puder» (si puedes).',
        },
      ],
    },
    {
      id: 'v-caso-b2',
      es: 'en caso de que',
      forms: [
        { text: 'caso', variant: 'both', ipa: { br: 'ˈka.zu' }, note: 'Este va con subjuntivo presente: «caso precises».' },
      ],
    },
    {
      id: 'v-desde-que',
      es: 'siempre que / con tal de que',
      forms: [
        { text: 'desde que', variant: 'both', ipa: { br: 'ˈdes.dʒi ki', pt: 'ˈdeʒ.də kə' } },
      ],
    },
    {
      id: 'v-puder',
      es: 'cuando pueda',
      forms: [
        { text: 'quando você puder', variant: 'br', ipa: { br: 'ˈkwɐ̃.du voˈse puˈdeʁ' } },
        { text: 'quando puderes', variant: 'pt', ipa: { pt: 'ˈkwɐ̃.du puˈdɛ.ɾəʃ' } },
      ],
    },
    {
      id: 'v-quiser',
      es: 'si quieres / lo que quieras',
      forms: [
        { text: 'se você quiser', variant: 'br', ipa: { br: 'si voˈse kiˈzeʁ' } },
        { text: 'se quiseres', variant: 'pt', ipa: { pt: 'sə kiˈzɛ.ɾəʃ' } },
      ],
      example: { br: 'Se você quiser, podemos ir juntos.', pt: 'Se quiseres, podemos ir juntos.', es: 'Si quieres, podemos ir juntos.' },
    },
    {
      id: 'v-tiver',
      es: 'cuando tengas',
      forms: [
        { text: 'quando você tiver', variant: 'br', ipa: { br: 'ˈkwɐ̃.du voˈse tʃiˈveʁ' } },
        { text: 'quando tiveres', variant: 'pt', ipa: { pt: 'ˈkwɐ̃.du tiˈvɛ.ɾəʃ' } },
      ],
    },
    {
      id: 'v-for',
      es: 'si es / cuando vaya',
      forms: [
        {
          text: 'for',
          variant: 'both',
          ipa: { br: 'foʁ', pt: 'foɾ' },
          note: 'De ser E ir a la vez: «se for possível» (si es posible), «quando eu for a Lisboa» (cuando vaya a Lisboa).',
        },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-subj-futuro',
      title: '⭐⭐ El subjuntivo futuro',
      explanation:
        'El español antiguo lo tenía («adonde fueres, haz lo que vieres») y lo perdió; el portugués lo usa a diario y es OBLIGATORIO.\n' +
        'Se forma desde la 3ª plural del perfeito quitando -am: falaram → falar, tiveram → tiver, puderam → puder, quiseram → quiser, foram → for, fizeram → fizer.\n' +
        'Personas: falar, falares 🇵🇹, falar, falarmos, falarem.\n' +
        'Se usa tras quando, se, assim que, enquanto, depois que… cuando la acción es FUTURA: donde el español dice «cuando PUEDAS», el portugués dice «quando PUDERES», nunca «quando podes/possas».',
      examples: [
        { br: 'Quando você puder, me liga.', pt: 'Quando puderes, liga-me.', es: 'Cuando puedas, llámame.' },
        { br: 'Se você precisar de ajuda, é só falar.', pt: 'Se precisares de ajuda, é só dizeres.', es: 'Si necesitas ayuda, solo dilo.' },
        { both: 'Assim que eu chegar, aviso.', es: 'En cuanto llegue, aviso.' },
      ],
      variantNote:
        'En los verbos regulares el subjuntivo futuro es idéntico al infinitivo (falar), por eso pasa desapercibido; los irregulares (tiver, puder, for, fizer) lo delatan.',
    },
    {
      id: 'g-mapa-se',
      title: 'El mapa completo del «si»',
      explanation:
        'Tres «si» distintos, tres tiempos:\n' +
        'Condición futura posible → subjuntivo FUTURO: «Se tiveres tempo, vem» (si tienes tiempo, ven).\n' +
        'Hipótesis irreal → imperfecto de subjuntivo: «Se tivesses tempo, virias» (si tuvieras…).\n' +
        'Constatación presente/pasada → indicativo: «Se está a chover, ficamos em casa».\n' +
        'El primero es el que no existe en español moderno: entrénalo hasta que salga solo.',
      examples: [
        { pt: 'Se vieres amanhã, trago-te o livro.', br: 'Se você vier amanhã, trago o livro.', es: 'Si vienes mañana, te traigo el libro.' },
        { both: 'Se eu fosse tu, não ia.', es: 'Si yo fuera tú, no iría. (irreal: imperfecto)' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-tiver-puder',
      title: 'tiver, puder, quiser: acento final',
      explanation: 'Todos los subjuntivos futuros irregulares son agudos: ti-VER, pu-DER, ki-ZER. La r final se pronuncia (o aspira 🇧🇷).',
      samples: [
        { text: 'quando tiver tempo', variant: 'br', ipa: 'ˈkwɐ̃.du tʃiˈveʁ ˈtẽ.pu' },
        { text: 'se quiseres', variant: 'pt', ipa: 'sə kiˈzɛ.ɾəʃ', hint: 'ki-zé-resh' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Quando você puder, me liga.', variant: 'br' },
      question: '¿Qué te piden?',
      options: [
        'Que llames cuando puedas',
        'Que llames ahora mismo',
        'Que no llames más',
        'Que esperes una llamada',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: 'Assim que chegares a Lisboa, manda mensagem. Se tiveres tempo, vamos jantar ao Bairro Alto.',
      textVariant: 'pt',
      question: '¿Cuándo van a cenar?',
      options: [
        'Si el visitante tiene tiempo',
        'Esta noche seguro',
        'Cuando llueva',
      ],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Quando ___ tempo, liga-me.',
      accepted: ['tiveres'],
      variant: 'pt',
      translation: 'Cuando tengas tiempo, llámame.',
      hint: 'ter, subjuntivo futuro de tu',
    },
    {
      id: 'e4',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Se você ___ de ajuda, é só falar.',
      accepted: ['precisar'],
      variant: 'br',
      translation: 'Si necesitas ayuda, solo dilo.',
      hint: 'precisar, subjuntivo futuro',
    },
    {
      id: 'e5',
      type: 'translate',
      skill: 'writing',
      es: 'cuando pueda',
      accepted: [
        { text: 'quando puder', variant: 'both' },
        { text: 'quando eu puder', variant: 'both' },
      ],
    },
    {
      id: 'e6',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'Assim que eu chegar, aviso', variant: 'br' },
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Se quiseres, podemos ir juntos.', variant: 'pt' },
      translation: 'Si quieres, podemos ir juntos.',
    },
  ],
};

import type { Lesson } from '../../domain/content';

/** A2 · Módulo 2: El imperfeito. */
export const a2m2: Lesson = {
  id: 'a2-m2-l1',
  title: 'Antes era diferente: el imperfeito',
  description: 'Habla de hábitos y recuerdos, y aprende a elegir entre perfeito e imperfeito.',
  vocab: [
    {
      id: 'v-antigamente',
      es: 'antes / antiguamente',
      forms: [
        {
          text: 'antigamente',
          variant: 'both',
          ipa: { br: 'ɐ̃.tʃi.gaˈmẽ.tʃi', pt: 'ɐ̃.ti.gɐˈmẽ.tə' },
        },
      ],
    },
    {
      id: 'v-crianca',
      es: 'cuando era niño/a',
      forms: [
        {
          text: 'quando era criança',
          variant: 'both',
          ipa: { br: 'ˈkwɐ̃.du ˈɛ.ɾɐ kɾiˈɐ̃.sɐ' },
        },
      ],
    },
    {
      id: 'v-costumava',
      es: 'solía…',
      forms: [
        {
          text: 'costumava',
          variant: 'both',
          ipa: { br: 'kos.tuˈma.vɐ', pt: 'kuʃ.tuˈma.vɐ' },
          note: 'De «costumar»: «Costumava ir à praia» = solía ir a la playa.',
        },
      ],
    },
    {
      id: 'v-era-tinha-ia',
      es: 'era / tenía / iba',
      forms: [
        {
          text: 'era / tinha / ia',
          variant: 'both',
          ipa: { br: 'ˈɛ.ɾɐ / ˈtʃi.ɲɐ / ˈi.ɐ', pt: 'ˈɛ.ɾɐ / ˈti.ɲɐ / ˈi.ɐ' },
        },
      ],
    },
    {
      id: 'v-morava',
      es: 'vivía (residía)',
      forms: [
        { text: 'morava', variant: 'both', ipa: { br: 'moˈɾa.vɐ', pt: 'muˈɾa.vɐ' } },
      ],
      example: { both: 'Eu morava perto da praia.', es: 'Yo vivía cerca de la playa.' },
    },
    {
      id: 'v-brincar',
      es: 'jugar (como los niños)',
      forms: [
        {
          text: 'brincar',
          variant: 'both',
          ipa: { br: 'bɾĩˈkaʁ', pt: 'bɾĩˈkaɾ' },
          note: '¡Falso amigo! No es «brincar» (saltar = pular 🇧🇷 / saltar 🇵🇹). Jugar un deporte o partido es «jogar».',
        },
      ],
      example: { both: 'As crianças brincavam no parque.', es: 'Los niños jugaban en el parque.' },
    },
    {
      id: 'v-epoca',
      es: 'en aquella época',
      forms: [
        {
          text: 'naquela época',
          variant: 'both',
          ipa: { br: 'naˈkɛ.lɐ ˈɛ.po.kɐ', pt: 'nɐˈkɛ.lɐ ˈɛ.pu.kɐ' },
        },
      ],
    },
    {
      id: 'v-enquanto',
      es: 'mientras',
      forms: [
        { text: 'enquanto', variant: 'both', ipa: { br: 'ẽˈkwɐ̃.tu' } },
      ],
      example: { both: 'Eu lia enquanto ela cozinhava.', es: 'Yo leía mientras ella cocinaba.' },
    },
    {
      id: 'v-cachorro',
      es: 'perro',
      forms: [
        {
          text: 'cachorro',
          variant: 'br',
          ipa: { br: 'kaˈʃo.ʁu' },
          note: 'En Brasil «cachorro» es el perro adulto. ¡Otro falso amigo!',
        },
        {
          text: 'cão',
          variant: 'pt',
          ipa: { pt: 'kɐ̃w̃' },
          note: 'En Portugal se dice «cão»; «cachorro» es solo el cachorrito.',
        },
      ],
    },
    {
      id: 'v-lembrar',
      es: 'acordarse / recordar',
      forms: [
        {
          text: 'lembrar-se de',
          variant: 'both',
          ipa: { br: 'lẽˈbɾaʁ si dʒi', pt: 'lẽˈbɾaɾ sə də' },
          note: 'Recuerda: «acordar» era despertarse; recordar es «lembrar».',
        },
      ],
      example: { br: 'Eu me lembro daquele dia.', pt: 'Lembro-me daquele dia.', es: 'Me acuerdo de aquel día.' },
    },
  ],
  grammar: [
    {
      id: 'g-imperfeito',
      title: 'El imperfeito',
      explanation:
        'Formación regular: -ar → -ava (falava, falavas 🇵🇹, falava, falávamos, falavam); -er/-ir → -ia (comia, partia).\n' +
        'Solo cuatro irregulares: ser → era · ter → tinha · vir → vinha · pôr → punha. (Ir es regular: ia.)\n' +
        'Se usa como en español: hábitos del pasado, descripciones, la hora y la edad en el pasado.',
      examples: [
        { both: 'Antigamente eu morava no centro.', es: 'Antes vivía en el centro.' },
        { both: 'Ela tinha dez anos naquela época.', es: 'Ella tenía diez años en aquella época.' },
        { br: 'Onde você morava?', pt: 'Onde moravas?', es: '¿Dónde vivías?' },
      ],
    },
    {
      id: 'g-contraste',
      title: 'Perfeito o imperfeito: elegir bien',
      explanation:
        'La lógica es la misma que en español, así que confía en tu instinto:\n' +
        'Acción terminada, contada como un hecho → perfeito: «Ontem comi peixe».\n' +
        'Hábito o escenario de fondo → imperfeito: «Antigamente comia peixe todos os dias».\n' +
        'Combinados: el imperfeito pinta el fondo y el perfeito interrumpe: «Eu lia quando ele chegou» (leía cuando él llegó).',
      examples: [
        { both: 'Eu tomava banho quando o telefone tocou.', es: 'Me estaba duchando cuando sonó el teléfono.' },
        { both: 'Fui ao Porto uma vez; naquela época morava em Lisboa.', es: 'Fui a Oporto una vez; en esa época vivía en Lisboa.' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-v',
      title: 'La v de -ava: siempre labiodental',
      explanation:
        'El imperfeito está lleno de uves: falava, morava, brincava. Recuerda apoyar los dientes en el labio — «morava» con b española suena a otra palabra para un oído luso.',
      samples: [
        { text: 'eu morava', variant: 'both', ipa: 'ew moˈɾa.vɐ', hint: 'mo-rá-va (v de dientes)' },
      ],
    },
    {
      id: 'p-nh-tinha',
      title: 'tinha, vinha: la nh en verbos',
      explanation: 'Los irregulares tinha y vinha llevan la ñ portuguesa (nh).',
      samples: [
        { text: 'eu tinha um cachorro', variant: 'br', ipa: 'ew ˈtʃi.ɲɐ ũ kaˈʃo.ʁu', hint: 'chí-ña' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Quando era criança, morava no Porto.', variant: 'pt' },
      question: '¿Qué cuenta esta persona?',
      options: [
        'Dónde vivía de niño',
        'Dónde vive ahora',
        'Adónde va a mudarse',
        'Dónde trabaja',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: 'Antigamente eu brincava na rua com meus primos todos os dias. Hoje as crianças ficam no celular.',
      textVariant: 'br',
      question: '¿Qué hacía esta persona antiguamente?',
      options: [
        'Jugaba en la calle con sus primos',
        'Saltaba muros con sus primos',
        'Trabajaba en la calle',
      ],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Antigamente nós ___ perto da praia.',
      accepted: ['morávamos', 'moravamos'],
      variant: 'both',
      translation: 'Antes vivíamos cerca de la playa.',
      hint: 'morar, imperfeito de nós',
    },
    {
      id: 'e4',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Eu ___ dez anos quando fui a Lisboa.',
      accepted: ['tinha'],
      variant: 'both',
      translation: 'Tenía diez años cuando fui a Lisboa.',
      hint: 'ter, imperfeito',
    },
    {
      id: 'e5',
      type: 'translate',
      skill: 'writing',
      es: 'yo solía ir',
      accepted: [{ text: 'eu costumava ir', variant: 'both' }],
    },
    {
      id: 'e6',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'Eu tinha um cachorro', variant: 'br' },
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Quando era criança, brincava muito na rua.', variant: 'pt' },
      translation: 'De niño, jugaba mucho en la calle.',
    },
  ],
};

import type { Lesson } from '../../domain/content';

/** A1 · Módulo 2: Números, fechas y horas. */
export const a1m2: Lesson = {
  id: 'a1-m2-l1',
  title: 'Números y la hora',
  description: 'Cuenta del 1 al 10, pregunta y di la hora, y ubica el día.',
  vocab: [
    {
      id: 'v-um',
      es: 'uno (1)',
      forms: [
        {
          text: 'um / uma',
          variant: 'both',
          ipa: { br: 'ũ / ˈu.mɐ' },
          note: 'Tiene género, como en español: um livro, uma casa.',
        },
      ],
    },
    {
      id: 'v-dois',
      es: 'dos (2)',
      forms: [
        {
          text: 'dois / duas',
          variant: 'both',
          ipa: { br: 'dojs / ˈdu.ɐs', pt: 'dojʃ / ˈdu.ɐʃ' },
          note: 'También tiene género: dois carros, duas horas.',
        },
      ],
    },
    {
      id: 'v-tres',
      es: 'tres (3)',
      forms: [{ text: 'três', variant: 'both', ipa: { br: 'tɾes', pt: 'tɾeʃ' } }],
    },
    {
      id: 'v-quatro',
      es: 'cuatro (4)',
      forms: [{ text: 'quatro', variant: 'both', ipa: { br: 'ˈkwa.tɾu' } }],
    },
    {
      id: 'v-cinco',
      es: 'cinco (5)',
      forms: [{ text: 'cinco', variant: 'both', ipa: { br: 'ˈsĩ.ku' } }],
    },
    {
      id: 'v-seis',
      es: 'seis (6)',
      forms: [
        {
          text: 'seis',
          variant: 'both',
          ipa: { br: 'sejs', pt: 'sejʃ' },
          note: 'En Brasil, al dictar números (teléfonos) se dice «meia» (de media docena) para no confundir con «três».',
        },
      ],
    },
    {
      id: 'v-sete',
      es: 'siete (7)',
      forms: [
        { text: 'sete', variant: 'both', ipa: { br: 'ˈsɛ.tʃi', pt: 'ˈsɛ.tə' } },
      ],
    },
    {
      id: 'v-oito',
      es: 'ocho (8)',
      forms: [{ text: 'oito', variant: 'both', ipa: { br: 'ˈoj.tu' } }],
    },
    {
      id: 'v-nove',
      es: 'nueve (9)',
      forms: [
        { text: 'nove', variant: 'both', ipa: { br: 'ˈnɔ.vi', pt: 'ˈnɔ.və' } },
      ],
    },
    {
      id: 'v-dez',
      es: 'diez (10)',
      forms: [{ text: 'dez', variant: 'both', ipa: { br: 'dɛs', pt: 'dɛʃ' } }],
    },
    {
      id: 'v-que-horas',
      es: '¿qué hora es?',
      forms: [
        {
          text: 'Que horas são?',
          variant: 'both',
          ipa: { br: 'ki ˈɔ.ɾɐs ˈsɐ̃w̃', pt: 'kə ˈɔ.ɾɐʃ ˈsɐ̃w̃' },
          note: 'Literalmente «¿qué horas son?»: siempre en plural.',
        },
      ],
      example: { both: '— Que horas são? — São três e meia.', es: '— ¿Qué hora es? — Son las tres y media.' },
    },
    {
      id: 'v-meio-dia',
      es: 'mediodía / medianoche',
      forms: [
        {
          text: 'meio-dia / meia-noite',
          variant: 'both',
          ipa: { br: 'ˈme.ju ˈdʒi.ɐ', pt: 'ˈmɐj.u ˈdi.ɐ' },
        },
      ],
    },
    {
      id: 'v-hoje',
      es: 'hoy',
      forms: [{ text: 'hoje', variant: 'both', ipa: { br: 'ˈo.ʒi', pt: 'ˈo.ʒə' } }],
      example: { both: 'Hoje é sexta-feira.', es: 'Hoy es viernes.' },
    },
    {
      id: 'v-amanha',
      es: 'mañana (el día siguiente)',
      forms: [{ text: 'amanhã', variant: 'both', ipa: { br: 'a.mɐˈɲɐ̃', pt: 'ɐ.mɐˈɲɐ̃' } }],
    },
    {
      id: 'v-ontem',
      es: 'ayer',
      forms: [
        { text: 'ontem', variant: 'both', ipa: { br: 'ˈõ.tẽj̃', pt: 'ˈõ.tɐ̃j̃' } },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-hora',
      title: 'Decir la hora',
      explanation:
        'Con la una se usa el singular: «É uma hora». Con el resto, plural: «São duas / cinco horas».\n' +
        'La media es «e meia» (São quatro e meia) y los minutos se suman con «e»: «São dez e vinte».\n' +
        'Para los minutos que faltan, cada país tiene su fórmula favorita: en Brasil «São quinze para as três» (faltan 15 para las 3); en Portugal es común «São três menos um quarto», como en español.',
      examples: [
        { both: 'É meio-dia e meia.', es: 'Son las doce y media del mediodía.' },
        { br: 'São quinze para as oito.', pt: 'São oito menos um quarto.', es: 'Son las ocho menos cuarto.' },
        { both: 'A reunião é às nove horas.', es: 'La reunión es a las nueve.' },
      ],
      variantNote:
        'Ambas fórmulas se entienden en los dos países; usa la de tu variante principal.',
    },
    {
      id: 'g-dias',
      title: 'Los días de la semana',
      explanation:
        'De lunes a viernes los días se cuentan como «ferias»: segunda-feira (lunes), terça-feira (martes), quarta-feira (miércoles), quinta-feira (jueves), sexta-feira (viernes). El fin de semana: sábado y domingo.\n' +
        'En el habla se suele acortar: «na segunda» = el lunes. «El lunes voy» se dice con em: «Na segunda-feira eu vou»; para algo habitual se usa el plural: «às segundas» (los lunes).',
      examples: [
        { both: 'Hoje é quarta-feira.', es: 'Hoy es miércoles.' },
        { both: 'Tenho aula às terças e quintas.', es: 'Tengo clase los martes y jueves.' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-numeros-s',
      title: 'La s final de los números',
      explanation:
        'Los números que terminan en s o z son un buen laboratorio del contraste: en Brasil suenan con /s/ y en Portugal con /ʃ/ («sh»).',
      samples: [
        { text: 'dois, três, seis, dez', variant: 'br', ipa: 'dojs tɾes sejs dɛs', hint: 'dois-tres-seis-des' },
        { text: 'dois, três, seis, dez', variant: 'pt', ipa: 'dojʃ tɾeʃ sejʃ dɛʃ', hint: 'doish-tresh-seish-desh' },
      ],
    },
    {
      id: 'p-sete-nove',
      title: 'sete y nove: la e final otra vez',
      explanation:
        'Recuerda el patrón de la lección 1: la e final es «i» en Brasil y casi desaparece en Portugal. En «sete», además, la t brasileña se vuelve «ch».',
      samples: [
        { text: 'sete, nove', variant: 'br', ipa: 'ˈsɛ.tʃi ˈnɔ.vi', hint: 'sé-chi, nó-vi' },
        { text: 'sete, nove', variant: 'pt', ipa: 'ˈsɛ.tə ˈnɔ.və', hint: 'set, nov' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'sete', variant: 'br' },
      question: '¿Qué número oíste?',
      options: ['Siete', 'Seis', 'Ocho', 'Nueve'],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'São três e meia.', variant: 'pt' },
      question: '¿Qué hora es?',
      options: [
        'Las tres y media',
        'Las dos y media',
        'Las tres menos cuarto',
        'Las seis'
      ],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'nove', variant: 'br' },
    },
    {
      id: 'e4',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'São duas ___ da tarde.',
      accepted: ['horas'],
      variant: 'both',
      translation: 'Son las dos de la tarde.',
      hint: 'siempre en plural',
    },
    {
      id: 'e5',
      type: 'translate',
      skill: 'writing',
      es: '¿qué hora es?',
      accepted: [{ text: 'Que horas são?', variant: 'both' }],
    },
    {
      id: 'e6',
      type: 'read-choice',
      skill: 'reading',
      text: 'HORÁRIO DE ATENDIMENTO\nSegunda a sexta: 9h às 18h\nSábado: 10h às 13h\nDomingo: fechado',
      textVariant: 'both',
      question: '¿Hasta qué hora abre los sábados?',
      options: ['Hasta las 13h', 'Hasta las 18h', 'No abre los sábados'],
      answer: 0,
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'São oito e meia da manhã.', variant: 'br' },
      translation: 'Son las ocho y media de la mañana.',
    },
  ],
};

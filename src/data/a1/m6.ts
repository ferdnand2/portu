import type { Lesson } from '../../domain/content';

/** A1 · Módulo 6: Rutina diaria. */
export const a1m6: Lesson = {
  id: 'a1-m6-l1',
  title: 'Mi día a día',
  description: 'Cuenta tu rutina con el presente regular y el famoso «estar haciendo».',
  vocab: [
    {
      id: 'v-acordar',
      es: 'despertarse',
      forms: [
        {
          text: 'acordar',
          variant: 'both',
          ipa: { br: 'a.koʁˈdaʁ', pt: 'ɐ.kuɾˈdaɾ' },
          note: 'Falso amigo: no es «acordarse» (recordar), ¡es despertarse!',
        },
      ],
      example: { both: 'Eu acordo às sete.', es: 'Me despierto a las siete.' },
    },
    {
      id: 'v-levantar',
      es: 'levantarse',
      forms: [
        { text: 'levantar-se', variant: 'both', ipa: { br: 'le.vɐ̃ˈtaʁ si', pt: 'lə.vɐ̃ˈtaɾ sə' } },
      ],
      example: { br: 'Eu me levanto cedo.', pt: 'Levanto-me cedo.', es: 'Me levanto temprano.' },
    },
    {
      id: 'v-banho',
      es: 'ducharse',
      forms: [
        { text: 'tomar banho', variant: 'br', ipa: { br: 'toˈmaʁ ˈbɐ̃.ɲu' } },
        { text: 'tomar duche', variant: 'pt', ipa: { pt: 'tuˈmaɾ ˈdu.ʃə' } },
      ],
    },
    {
      id: 'v-trabalhar',
      es: 'trabajar',
      forms: [
        { text: 'trabalhar', variant: 'both', ipa: { br: 'tɾa.baˈʎaʁ', pt: 'tɾɐ.bɐˈʎaɾ' } },
      ],
    },
    {
      id: 'v-estudar',
      es: 'estudiar',
      forms: [
        { text: 'estudar', variant: 'both', ipa: { br: 'es.tuˈdaʁ', pt: 'əʃ.tuˈdaɾ' } },
      ],
    },
    {
      id: 'v-almocar',
      es: 'almorzar / cenar',
      forms: [
        {
          text: 'almoçar / jantar',
          variant: 'both',
          ipa: { br: 'aw.moˈsaʁ / ʒɐ̃ˈtaʁ', pt: 'al.muˈsaɾ / ʒɐ̃ˈtaɾ' },
        },
      ],
    },
    {
      id: 'v-voltar',
      es: 'volver a casa',
      forms: [
        {
          text: 'voltar para casa',
          variant: 'both',
          ipa: { br: 'vowˈtaʁ pɾɐ ˈka.zɐ', pt: 'volˈtaɾ ˈpɐ.ɾɐ ˈka.zɐ' },
          note: 'En Brasil oirás «pra casa» (para → pra, coloquial universal).',
        },
      ],
    },
    {
      id: 'v-dormir',
      es: 'dormir',
      forms: [
        { text: 'dormir', variant: 'both', ipa: { br: 'doʁˈmiʁ', pt: 'duɾˈmiɾ' } },
      ],
    },
    {
      id: 'v-cedo',
      es: 'temprano / tarde',
      forms: [
        {
          text: 'cedo / tarde',
          variant: 'both',
          ipa: { br: 'ˈse.du / ˈtaʁ.dʒi', pt: 'ˈse.ðu / ˈtaɾ.də' },
        },
      ],
    },
    {
      id: 'v-sempre',
      es: 'siempre / nunca',
      forms: [
        {
          text: 'sempre / nunca',
          variant: 'both',
          ipa: { br: 'ˈsẽ.pɾi / ˈnũ.kɐ', pt: 'ˈsẽ.pɾə / ˈnũ.kɐ' },
        },
      ],
    },
    {
      id: 'v-todos-dias',
      es: 'todos los días',
      forms: [
        {
          text: 'todos os dias',
          variant: 'both',
          ipa: { br: 'ˈto.duz uz ˈdʒi.ɐs', pt: 'ˈto.duz uʒ ˈdi.ɐʃ' },
          note: 'Ojo: sin «los» extra — «todos os dias», no «todos los días».',
        },
      ],
    },
    {
      id: 'v-depois',
      es: 'después / antes',
      forms: [
        {
          text: 'depois / antes',
          variant: 'both',
          ipa: { br: 'deˈpojs / ˈɐ̃.tʃis', pt: 'dəˈpojʃ / ˈɐ̃.təʃ' },
        },
      ],
      example: { both: 'Depois do trabalho, vou à academia.', es: 'Después del trabajo, voy al gimnasio.' },
    },
  ],
  grammar: [
    {
      id: 'g-presente-regular',
      title: 'El presente regular: -ar, -er, -ir',
      explanation:
        'Las tres conjugaciones, con falar (hablar), comer (comer) y abrir (abrir):\n' +
        'eu falo / como / abro\n' +
        'tu falas / comes / abres 🇵🇹\n' +
        'você-ele falA / comE / abrE\n' +
        'nós falamos / comemos / abrimos\n' +
        'vocês-eles falam / comem / abrem\n' +
        'Casi idéntico al español; la trampa es la 3ª persona plural: -am/-em son nasales (falam suena «fálãu»).',
      examples: [
        { both: 'Eu trabalho de segunda a sexta.', es: 'Trabajo de lunes a viernes.' },
        { br: 'Você estuda português?', pt: 'Tu estudas português?', es: '¿Estudias portugués?' },
        { both: 'Eles jantam às oito.', es: 'Ellos cenan a las ocho.' },
      ],
    },
    {
      id: 'g-gerundio',
      title: '⭐ «Estoy trabajando»: la divergencia estrella',
      explanation:
        'Para las acciones en curso, cada país usa una estructura distinta — es LA divergencia gramatical más famosa:\n' +
        'En Brasil, gerundio como en español: «Estou trabalhando», «Ela está comendo».\n' +
        'En Portugal, estar A + infinitivo: «Estou a trabalhar», «Ela está a comer».\n' +
        'Las dos se entienden en todas partes, pero cada una suena inmediatamente a su país. Elige la de tu variante y reconoce la otra.',
      examples: [
        { br: 'Estou trabalhando agora.', pt: 'Estou a trabalhar agora.', es: 'Estoy trabajando ahora.' },
        { br: 'O que você está fazendo?', pt: 'O que estás a fazer?', es: '¿Qué estás haciendo?' },
        { br: 'Estamos aprendendo português.', pt: 'Estamos a aprender português.', es: 'Estamos aprendiendo portugués.' },
      ],
      variantNote:
        'El gerundio también existe en Portugal (sur del país y usos literarios), pero en Lisboa y el habla estándar domina «estar a + infinitivo».',
    },
  ],
  pronunciation: [
    {
      id: 'p-lh-trabalho',
      title: 'trabalho: repaso del lh',
      explanation:
        'La palabra más útil con ʎ: trabalho (trabajo, sustantivo) y trabalhar (verbo). No es «trabajo» con j española ni con y.',
      samples: [
        { text: 'trabalho', variant: 'br', ipa: 'tɾaˈba.ʎu', hint: 'tra-bá-liu' },
      ],
    },
    {
      id: 'p-am-final',
      title: 'La terminación verbal -am',
      explanation:
        'El plural falam/comem no suena como se escribe: -am es el diptongo nasal ɐ̃w̃ (como ão átono) y -em es ẽj̃. «Falam» = fálãu, «comem» = cómẽi.',
      samples: [
        { text: 'eles falam', variant: 'both', ipa: 'ˈe.lis ˈfa.lɐ̃w̃', hint: 'fá-lãu' },
        { text: 'eles comem', variant: 'both', ipa: 'ˈe.lis ˈko.mẽj̃', hint: 'có-mẽi' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Estou trabalhando agora.', variant: 'br' },
      question: '¿Qué dice esta persona (acento brasileño)?',
      options: [
        'Está trabajando ahora',
        'Trabajó ayer',
        'Va a trabajar mañana',
        'No trabaja',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Estou a trabalhar agora.', variant: 'pt' },
      question: 'La misma idea con acento portugués: ¿qué estructura oíste?',
      options: [
        'estar a + infinitivo (Portugal)',
        'gerundio (Brasil)',
        'futuro',
        'pasado',
      ],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Eu estou ___ português.',
      accepted: ['estudando'],
      variant: 'br',
      translation: 'Estoy estudiando portugués.',
      hint: 'gerundio brasileño',
    },
    {
      id: 'e4',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Estou ___ estudar português.',
      accepted: ['a'],
      variant: 'pt',
      translation: 'Estoy estudiando portugués.',
      hint: 'la preposición portuguesa',
    },
    {
      id: 'e5',
      type: 'read-choice',
      skill: 'reading',
      text: 'Acordo às sete todos os dias, tomo banho e começo a trabalhar às nove.',
      textVariant: 'br',
      question: '¿A qué hora empieza a trabajar?',
      options: ['A las nueve', 'A las siete', 'A las ocho'],
      answer: 0,
    },
    {
      id: 'e6',
      type: 'translate',
      skill: 'writing',
      es: 'estoy trabajando',
      accepted: [
        { text: 'estou trabalhando', variant: 'br' },
        { text: 'estou a trabalhar', variant: 'pt' },
      ],
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Eu acordo cedo todos os dias.', variant: 'br' },
      translation: 'Me despierto temprano todos los días.',
    },
  ],
};

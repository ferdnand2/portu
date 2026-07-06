import type { Lesson } from '../../../domain/content';

/** A1 · Módulo 1 · Lección 1: Saludos y despedidas. */
export const leccion1: Lesson = {
  id: 'a1-m1-l1',
  title: 'Saludos y despedidas',
  description:
    'Saluda y despídete a cualquier hora del día, da las gracias y pide disculpas.',
  vocab: [
    {
      id: 'v-ola',
      es: 'hola',
      forms: [
        { text: 'olá', variant: 'both', ipa: { br: 'oˈla', pt: 'ɔˈla' } },
      ],
      example: { both: 'Olá, tudo bem?', es: 'Hola, ¿qué tal?' },
    },
    {
      id: 'v-oi',
      es: 'hola (informal)',
      forms: [
        {
          text: 'oi',
          variant: 'br',
          ipa: { br: 'oj' },
          note: 'Muy común en Brasil; en Portugal suena claramente brasileño.',
        },
      ],
      example: { br: 'Oi, gente!', es: '¡Hola a todos!' },
    },
    {
      id: 'v-bom-dia',
      es: 'buenos días',
      forms: [
        {
          text: 'bom dia',
          variant: 'both',
          ipa: { br: 'bõ ˈdʒi.ɐ', pt: 'bõ ˈdi.ɐ' },
        },
      ],
    },
    {
      id: 'v-boa-tarde',
      es: 'buenas tardes',
      forms: [
        {
          text: 'boa tarde',
          variant: 'both',
          ipa: { br: 'ˈbo.ɐ ˈtaɾ.dʒi', pt: 'ˈbo.ɐ ˈtaɾ.də' },
        },
      ],
    },
    {
      id: 'v-boa-noite',
      es: 'buenas noches',
      forms: [
        {
          text: 'boa noite',
          variant: 'both',
          ipa: { br: 'ˈbo.ɐ ˈnoj.tʃi', pt: 'ˈbo.ɐ ˈnoj.tə' },
          note: 'Se usa tanto al llegar como al despedirse por la noche.',
        },
      ],
    },
    {
      id: 'v-tchau',
      es: 'chao / adiós (informal)',
      forms: [
        {
          text: 'tchau',
          variant: 'br',
          ipa: { br: 'tʃaw' },
          note: 'La despedida informal estándar en Brasil.',
        },
        {
          text: 'adeus',
          variant: 'pt',
          ipa: { pt: 'ɐˈdewʃ' },
          note: 'En Brasil «adeus» suena definitivo, como si no fueran a verse más.',
        },
      ],
    },
    {
      id: 'v-ate-logo',
      es: 'hasta luego',
      forms: [
        {
          text: 'até logo',
          variant: 'both',
          ipa: { br: 'aˈtɛ ˈlɔ.gu', pt: 'ɐˈtɛ ˈlɔ.gu' },
        },
        {
          text: 'até já',
          variant: 'pt',
          ipa: { pt: 'ɐˈtɛ ˈʒa' },
          note: 'Si van a verse muy pronto, en un rato.',
        },
      ],
    },
    {
      id: 'v-ate-amanha',
      es: 'hasta mañana',
      forms: [
        {
          text: 'até amanhã',
          variant: 'both',
          ipa: { br: 'aˈtɛ a.mɐˈɲɐ̃', pt: 'ɐˈtɛ ɐ.mɐˈɲɐ̃' },
        },
      ],
    },
    {
      id: 'v-obrigado',
      es: 'gracias',
      forms: [
        {
          text: 'obrigado / obrigada',
          variant: 'both',
          ipa: {
            br: 'o.bɾiˈga.du / o.bɾiˈga.dɐ',
            pt: 'u.bɾiˈga.du / u.bɾiˈga.dɐ',
          },
          note: 'Concuerda con quien habla: hombre «obrigado», mujer «obrigada».',
        },
      ],
      example: { both: 'Muito obrigado!', es: '¡Muchas gracias! (dice un hombre)' },
    },
    {
      id: 'v-por-favor',
      es: 'por favor',
      forms: [
        {
          text: 'por favor',
          variant: 'both',
          ipa: { br: 'poʁ faˈvoʁ', pt: 'puɾ fɐˈvoɾ' },
        },
        {
          text: 'se faz favor',
          variant: 'pt',
          ipa: { pt: 'sə faʃ fɐˈvoɾ' },
          note: 'Muy típica de Portugal.',
        },
      ],
    },
    {
      id: 'v-de-nada',
      es: 'de nada',
      forms: [
        {
          text: 'de nada',
          variant: 'both',
          ipa: { br: 'dʒi ˈna.dɐ', pt: 'də ˈna.dɐ' },
        },
      ],
    },
    {
      id: 'v-desculpe',
      es: 'disculpe / perdón',
      forms: [
        {
          text: 'desculpe / desculpa',
          variant: 'both',
          ipa: {
            br: 'dʒisˈkuw.pi / dʒisˈkuw.pɐ',
            pt: 'dəʃˈkul.pə / dəʃˈkul.pɐ',
          },
          note: '«Desculpe» es formal (usted); «desculpa», informal (tú).',
        },
      ],
    },
    {
      id: 'v-com-licenca',
      es: 'permiso / con permiso',
      forms: [
        {
          text: 'com licença',
          variant: 'both',
          ipa: { br: 'kõ liˈsẽ.sɐ' },
        },
      ],
      example: { both: 'Com licença, posso passar?', es: 'Permiso, ¿puedo pasar?' },
    },
    {
      id: 'v-tudo-bem',
      es: '¿qué tal? / ¿todo bien?',
      forms: [
        {
          text: 'tudo bem?',
          variant: 'both',
          ipa: { br: 'ˈtu.du ˈbẽj̃', pt: 'ˈtu.du ˈbɐ̃j̃' },
          note: 'La respuesta es igual: «Tudo bem!» o «Tudo bom!».',
        },
      ],
      example: { both: '— Tudo bem? — Tudo bem, e você?', es: '— ¿Qué tal? — Bien, ¿y tú?' },
    },
  ],
  grammar: [
    {
      id: 'g-voce-tu',
      title: '¿«Tú» o «usted»? — você y tu',
      explanation:
        'Es la primera gran divergencia entre variantes y conviene tenerla clara desde el día uno.\n' +
        'En Brasil el trato normal (informal y semiformal) es «você», que se conjuga en tercera persona, como «usted» en español: «você fala» (tú hablas). «Tu» existe en algunas regiones, pero el estándar que aprenderás es «você».\n' +
        'En Portugal el trato informal es «tu», con su conjugación propia de segunda persona: «tu falas». «Você» explícito puede sonar seco o incluso descortés; para el trato formal se usa «o senhor / a senhora» o simplemente el verbo en tercera persona sin pronombre.\n' +
        'Formal en ambos países: «o senhor» (señor) y «a senhora» (señora).',
      examples: [
        { br: 'Você fala espanhol?', pt: 'Tu falas espanhol?', es: '¿Hablas español?' },
        { br: 'Como você está?', pt: 'Como estás?', es: '¿Cómo estás?' },
        { both: 'O senhor fala inglês?', es: '¿Habla usted inglés? (a un hombre)' },
      ],
      variantNote:
        'Regla práctica: en Brasil piensa en «você» + tercera persona; en Portugal, «tu» + segunda persona con los amigos y tercera persona (sin «você») con desconocidos.',
    },
    {
      id: 'g-obrigado',
      title: 'Obrigado / obrigada: gracias con género',
      explanation:
        '«Gracias» en portugués es un adjetivo que significa «obligado/agradecido», así que concuerda con la persona QUE habla, no con quien recibe las gracias.\n' +
        'Un hombre dice siempre «obrigado»; una mujer dice siempre «obrigada». Para intensificar: «muito obrigado / muito obrigada».',
      examples: [
        { both: 'Muito obrigado pela ajuda.', es: 'Muchas gracias por la ayuda (habla un hombre).' },
        { both: 'Obrigada, até amanhã!', es: 'Gracias, ¡hasta mañana! (habla una mujer).' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-o-final',
      title: 'La -o final suena [u]',
      explanation:
        'En ambas variantes, la «o» átona final se pronuncia como una «u» débil: «obrigado» suena «obrigadu», «tudo» suena «tudu».',
      samples: [
        { text: 'obrigado', variant: 'both', ipa: 'o.bɾiˈga.du', hint: 'obrigádu' },
        { text: 'tudo bem', variant: 'both', ipa: 'ˈtu.du ˈbẽj̃', hint: 'túdu beim' },
      ],
    },
    {
      id: 'p-e-final',
      title: 'La -e final: [i] en Brasil, casi muda en Portugal',
      explanation:
        'La «e» átona final se convierte en «i» en Brasil y prácticamente desaparece en Portugal. Además, en Brasil «de/te» finales suenan «dyi/chi».',
      samples: [
        { text: 'boa noite', variant: 'br', ipa: 'ˈbo.ɐ ˈnoj.tʃi', hint: 'boa nói-chi' },
        { text: 'boa noite', variant: 'pt', ipa: 'ˈbo.ɐ ˈnoj.tə', hint: 'boa noit (la e casi no se oye)' },
      ],
    },
    {
      id: 'p-di-ti',
      title: 'di / ti en Brasil suenan «dyi / chi»',
      explanation:
        'En la mayor parte de Brasil, «d» y «t» ante el sonido [i] se palatalizan: «dia» suena «dyía» (como «gia» en italiano) y «tio» suena «chío». En Portugal se pronuncian como en español.',
      samples: [
        { text: 'bom dia', variant: 'br', ipa: 'bõ ˈdʒi.ɐ', hint: 'bom dyía' },
        { text: 'bom dia', variant: 'pt', ipa: 'bõ ˈdi.ɐ', hint: 'bom día' },
      ],
    },
    {
      id: 'p-nasal-ao',
      title: 'La nasal ão',
      explanation:
        'El grupo «ão» es una vocal nasal, algo así como «áu» dicho por la nariz. Es uno de los sonidos más característicos del portugués y es igual en ambas variantes.',
      samples: [{ text: 'não', variant: 'both', ipa: 'nɐ̃w̃', hint: 'nãu (nasal)' }],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Bom dia!', variant: 'br' },
      question: '¿Qué acabas de oír?',
      options: ['Buenos días', 'Buenas tardes', 'Buenas noches', 'Hasta luego'],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Até amanhã!', variant: 'pt' },
      question: '¿Qué se despide diciendo esta persona?',
      options: ['Hasta mañana', 'Hasta luego', 'Buenos días', 'Adiós'],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'Boa noite', variant: 'br' },
    },
    {
      id: 'e4',
      type: 'read-choice',
      skill: 'reading',
      text: '— Olá, tudo bem?\n— Tudo bem, obrigada. E você?',
      textVariant: 'br',
      question: '¿Quién responde: un hombre o una mujer?',
      options: [
        'Una mujer, porque dice «obrigada»',
        'Un hombre, porque dice «obrigada»',
        'No se puede saber',
      ],
      answer: 0,
    },
    {
      id: 'e5',
      type: 'fill-blank',
      skill: 'writing',
      sentence: '— Muito ___! — De nada.',
      accepted: ['obrigado', 'obrigada'],
      variant: 'both',
      translation: '— ¡Muchas gracias! — De nada.',
      hint: 'gracias',
    },
    {
      id: 'e6',
      type: 'order-words',
      skill: 'writing',
      words: ['tudo', 'Olá,', 'bem?'],
      answer: 'Olá, tudo bem?',
      variant: 'both',
      translation: 'Hola, ¿qué tal?',
    },
    {
      id: 'e7',
      type: 'translate',
      skill: 'writing',
      es: 'buenas tardes',
      accepted: [{ text: 'boa tarde', variant: 'both' }],
    },
    {
      id: 'e8',
      type: 'translate',
      skill: 'writing',
      es: 'hasta luego',
      accepted: [
        { text: 'até logo', variant: 'both' },
        { text: 'até já', variant: 'pt' },
      ],
    },
    {
      id: 'e9',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Oi, tudo bem?', variant: 'br' },
      translation: 'Hola, ¿qué tal?',
    },
    {
      id: 'e10',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Olá, boa tarde!', variant: 'pt' },
      translation: 'Hola, ¡buenas tardes!',
    },
  ],
};

import type { Lesson } from '../../domain/content';

/** A2 · Módulo 5: Tiempo libre y planes. */
export const a2m5: Lesson = {
  id: 'a2-m5-l1',
  title: '¿Salimos? Planes e invitaciones',
  description: 'Invita, acepta, rechaza con cortesía y «combina» un plan.',
  vocab: [
    {
      id: 'v-convite',
      es: 'invitación / invitar',
      forms: [
        {
          text: 'convite / convidar',
          variant: 'both',
          ipa: { br: 'kõˈvi.tʃi / kõ.viˈdaʁ', pt: 'kõˈvi.tə / kõ.viˈdaɾ' },
        },
      ],
    },
    {
      id: 'v-combinar',
      es: 'quedar / acordar un plan',
      forms: [
        {
          text: 'combinar',
          variant: 'both',
          ipa: { br: 'kõ.biˈnaʁ', pt: 'kõ.biˈnaɾ' },
          note: '«Combinado!» = ¡quedamos así! / ¡trato hecho!',
        },
      ],
      example: { both: 'Vamos combinar um jantar.', es: 'Quedemos para cenar.' },
    },
    {
      id: 'v-marcar',
      es: 'agendar / fijar (hora, lugar)',
      forms: [
        { text: 'marcar', variant: 'both', ipa: { br: 'maʁˈkaʁ', pt: 'mɐɾˈkaɾ' } },
      ],
      example: { both: 'Vamos marcar para sábado?', es: '¿Lo dejamos para el sábado?' },
    },
    {
      id: 'v-passeio',
      es: 'paseo / pasear',
      forms: [
        {
          text: 'passeio / passear',
          variant: 'both',
          ipa: { br: 'paˈsej.u / pa.siˈaʁ', pt: 'pɐˈsɐj.u / pɐ.siˈaɾ' },
        },
      ],
    },
    {
      id: 'v-fim-de-semana',
      es: 'fin de semana',
      forms: [
        {
          text: 'fim de semana',
          variant: 'both',
          ipa: { br: 'fĩ dʒi seˈmɐ̃.nɐ', pt: 'fĩ də səˈmɐ̃.nɐ' },
          note: 'En Brasil también se dice «final de semana».',
        },
      ],
    },
    {
      id: 'v-cinema',
      es: 'cine / película',
      forms: [
        {
          text: 'cinema / filme',
          variant: 'both',
          ipa: { br: 'siˈne.mɐ / ˈfiw.mi', pt: 'siˈne.mɐ / ˈfil.mə' },
        },
      ],
    },
    {
      id: 'v-festa',
      es: 'fiesta',
      forms: [{ text: 'festa', variant: 'both', ipa: { br: 'ˈfɛs.tɐ', pt: 'ˈfɛʃ.tɐ' } }],
    },
    {
      id: 'v-topar',
      es: '¿te apuntas?',
      forms: [
        {
          text: 'Topa?',
          variant: 'br',
          ipa: { br: 'ˈtɔ.pɐ' },
          note: 'De «topar» (aceptar un plan): «Cinema hoje, topa?». Respuesta: «Topo!».',
        },
        {
          text: 'Alinhas?',
          variant: 'pt',
          ipa: { pt: 'ɐˈli.ɲɐʃ' },
          note: 'De «alinhar»: «Festa no sábado, alinhas?». Respuesta: «Alinho!».',
        },
      ],
    },
    {
      id: 'v-bora',
      es: '¡vamos! / ¡dale!',
      forms: [
        {
          text: 'Bora!',
          variant: 'br',
          ipa: { br: 'ˈbɔ.ɾɐ' },
          note: 'Contracción coloquial de «vamos embora». «Bora almoçar?» = ¿vamos a almorzar?',
        },
        {
          text: 'Vamos lá!',
          variant: 'pt',
          ipa: { pt: 'ˈvɐ.muʒ ˈla' },
        },
      ],
    },
    {
      id: 'v-encontrar',
      es: 'verse / encontrarse',
      forms: [
        {
          text: 'encontrar-se',
          variant: 'both',
          ipa: { br: 'ẽ.kõˈtɾaʁ si', pt: 'ẽ.kõˈtɾaɾ sə' },
        },
      ],
      example: { br: 'A gente se encontra às oito.', pt: 'Encontramo-nos às oito.', es: 'Nos vemos a las ocho.' },
    },
    {
      id: 'v-infelizmente',
      es: 'lamentablemente / ¡qué pena!',
      forms: [
        {
          text: 'infelizmente / que pena!',
          variant: 'both',
          ipa: { br: 'ĩ.fe.lizˈmẽ.tʃi / ki ˈpe.nɐ', pt: 'ĩ.fə.liʒˈmẽ.tə / kə ˈpe.nɐ' },
          note: 'Para rechazar con cortesía: «Infelizmente não posso…».',
        },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-condicional-cortesia',
      title: 'Gostaria, poderia: la cortesía',
      explanation:
        'El condicional se forma como el futuro pero con -ia: falaria, comeria, iria. Para A2 basta su uso estrella, la cortesía:\n' +
        '«Gostaria de convidar você» 🇧🇷 / «Gostaria de te convidar» 🇵🇹 (me gustaría invitarte)\n' +
        '«Poderia me ajudar?» (¿podría ayudarme?)\n' +
        'En el habla, ambos países suavizan aún más usando el imperfeito: «Podia ajudar-me?» 🇵🇹, «Queria te perguntar uma coisa» 🇧🇷.',
      examples: [
        { br: 'Eu gostaria de convidar vocês para jantar.', pt: 'Gostaria de vos convidar para jantar.', es: 'Me gustaría invitarlos a cenar.' },
        { both: 'Você poderia chegar mais cedo?', es: '¿Podrías llegar más temprano?' },
      ],
    },
    {
      id: 'g-invitar',
      title: 'Invitar, aceptar y rechazar',
      explanation:
        'Invitar: 🇧🇷 «Você quer ir ao cinema?» / «Vamos pegar uma praia?» — 🇵🇹 «Queres ir ao cinema?» / «Vamos tomar um café?».\n' +
        'Aceptar: «Claro!», «Adoraria!», 🇧🇷 «Topo!», «Bora!» — 🇵🇹 «Alinho!», «Combinado!».\n' +
        'Rechazar con estilo: «Infelizmente não posso, tenho de trabalhar. Fica para a próxima!» (queda para la próxima).',
      examples: [
        { br: 'Vamos jantar fora no sábado? Topa?', pt: 'Vamos jantar fora no sábado? Alinhas?', es: '¿Cenamos fuera el sábado? ¿Te apuntas?' },
        { both: 'Infelizmente não posso, mas fica para a próxima!', es: 'Lamentablemente no puedo, ¡pero queda para la próxima!' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-elisiones',
      title: 'El habla rápida se come sílabas',
      explanation:
        'En conversación real: «vamos embora» → «bora» 🇧🇷, «para» → «pra» 🇧🇷, «está» → «tá» (ambos), «estás» → «tás» 🇵🇹. Entrena el oído con estas formas porque son lo que realmente se oye.',
      samples: [
        { text: 'Tá bom, bora!', variant: 'br', ipa: 'ta ˈbõ ˈbɔ.ɾɐ', hint: 'tá-bõ-bó-ra' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Você quer ir ao cinema hoje à noite?', variant: 'br' },
      question: '¿Qué te proponen?',
      options: [
        'Ir al cine esta noche',
        'Cenar en casa',
        'Ir a una fiesta mañana',
        'Estudiar juntos',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: '— Festa na casa da Rita no sábado. Alinhas?\n— Alinho! A que horas?\n— Às nove. Combinado?\n— Combinado!',
      textVariant: 'pt',
      question: '¿Aceptó la invitación?',
      options: [
        'Sí, se apuntó y quedaron a las nueve',
        'No, tiene que trabajar',
        'Preguntó dónde era y no confirmó',
      ],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Eu ___ de ir, mas tenho de trabalhar.',
      accepted: ['gostaria'],
      variant: 'both',
      translation: 'Me gustaría ir, pero tengo que trabajar.',
      hint: 'gostar, condicional',
    },
    {
      id: 'e4',
      type: 'translate',
      skill: 'writing',
      es: '¿te apuntas?',
      accepted: [
        { text: 'topa?', variant: 'br' },
        { text: 'alinhas?', variant: 'pt' },
      ],
    },
    {
      id: 'e5',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'Combinado! Até sábado.', variant: 'br' },
    },
    {
      id: 'e6',
      type: 'order-words',
      skill: 'writing',
      words: ['Queres', 'ir', 'jantar', 'fora', 'no', 'sábado?'],
      answer: 'Queres ir jantar fora no sábado?',
      variant: 'pt',
      translation: '¿Quieres salir a cenar el sábado?',
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Queres ir ao cinema comigo?', variant: 'pt' },
      translation: '¿Quieres ir al cine conmigo?',
    },
  ],
};

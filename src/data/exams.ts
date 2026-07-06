import type { ExamInfo, LevelId } from '../domain/content';

/**
 * Ejemplos de examen por nivel MCER.
 *
 * Referencias oficiales:
 * - Portugal: la red CAPLE (Universidade de Lisboa) certifica por nivel:
 *   ACESSO (A1), CIPLE (A2), DEPLE (B1), DIPLE (B2), DAPLE (C1), DUPLE (C2).
 * - Brasil: el Celpe-Bras es el único certificado oficial del gobierno
 *   brasileño; no usa niveles MCER sino bandas (Intermediário ≈ B1 hasta
 *   Avançado Superior ≈ C1) y evalúa mediante tareas comunicativas.
 */
export const EXAMS: Partial<Record<LevelId, ExamInfo>> = {
  A1: {
    levelId: 'A1',
    officialPt: 'CAPLE — ACESSO: certificado oficial de nivel A1.',
    officialBr:
      'Celpe-Bras: no certifica A1; este nivel es la base para llegar a su banda mínima (Intermediário ≈ B1).',
    description:
      'A este nivel el examen comprueba supervivencia básica: entender saludos y datos personales, presentarse, rellenar un formulario sencillo y mantener un intercambio muy simple. La muestra siguiente imita ese formato con lo visto en el módulo 1.',
    sample: [
      {
        id: 'x1',
        type: 'listen-choice',
        skill: 'listening',
        audio: { text: 'Boa tarde! Tudo bem?', variant: 'br' },
        question: 'Comprensión oral: ¿qué acabas de oír?',
        options: [
          'Un saludo por la tarde',
          'Una despedida por la noche',
          'Una pregunta sobre tu nombre',
          'Un agradecimiento',
        ],
        answer: 0,
      },
      {
        id: 'x2',
        type: 'read-choice',
        skill: 'reading',
        text: '— Bom dia! Como te chamas?\n— Chamo-me Sofia. E tu?',
        textVariant: 'pt',
        question: 'Comprensión escrita: ¿qué están haciendo estas personas?',
        options: ['Presentándose', 'Despidiéndose', 'Pidiendo direcciones'],
        answer: 0,
      },
      {
        id: 'x3',
        type: 'dictation',
        skill: 'writing',
        audio: { text: 'Até amanhã', variant: 'pt' },
      },
      {
        id: 'x4',
        type: 'fill-blank',
        skill: 'writing',
        sentence: 'Eu ___ de Buenos Aires.',
        accepted: ['sou'],
        variant: 'both',
        translation: 'Soy de Buenos Aires.',
        hint: 'verbo ser',
      },
      {
        id: 'x5',
        type: 'fill-blank',
        skill: 'writing',
        sentence: '— ___ obrigado pela ajuda!',
        accepted: ['muito'],
        variant: 'both',
        translation: '— ¡Muchas gracias por la ayuda!',
        hint: 'intensificador',
      },
      {
        id: 'x6',
        type: 'order-words',
        skill: 'writing',
        words: ['Chamo-me', 'Rita', 'e', 'sou', 'do', 'Porto'],
        answer: 'Chamo-me Rita e sou do Porto',
        variant: 'pt',
        translation: 'Me llamo Rita y soy de Oporto',
      },
      {
        id: 'x7',
        type: 'translate',
        skill: 'writing',
        es: '¿de dónde eres?',
        accepted: [
          { text: 'De onde você é?', variant: 'br' },
          { text: 'De onde és?', variant: 'pt' },
        ],
      },
      {
        id: 'x8',
        type: 'read-choice',
        skill: 'reading',
        text: '— Oi! Você é da Argentina?\n— Não, eu sou do México. E você?\n— Eu sou do Brasil.',
        textVariant: 'br',
        question: '¿De dónde es la segunda persona que habla?',
        options: ['De México', 'De Argentina', 'De Brasil'],
        answer: 0,
      },
      {
        id: 'x9',
        type: 'listen-choice',
        skill: 'listening',
        audio: { text: 'Muito prazer!', variant: 'pt' },
        question: '¿Qué significa lo que oyes?',
        options: ['Mucho gusto', 'Muchas gracias', 'Buenos días', 'Hasta luego'],
        answer: 0,
      },
      {
        id: 'x10',
        type: 'speak',
        skill: 'speaking',
        target: { text: 'Bom dia! Eu sou de Caracas.', variant: 'br' },
        translation: 'Expresión oral: ¡Buenos días! Soy de Caracas.',
      },
    ],
  },
  A2: {
    levelId: 'A2',
    officialPt: 'CAPLE — CIPLE: certificado oficial de nivel A2.',
    officialBr:
      'Celpe-Bras: A2 aún queda por debajo de su banda mínima (Intermediário ≈ B1).',
    description:
      'El examen A2 añade el pasado: contar qué hiciste, hábitos de antes, compras, salud y planes sencillos. Muestra del estilo de preguntas:',
    sample: [
      {
        id: 'x1',
        type: 'listen-choice',
        skill: 'listening',
        audio: { text: 'Ontem eu trabalhei muito.', variant: 'br' },
        question: '¿Cuándo trabajó esta persona?',
        options: ['Ayer', 'Hoy', 'Mañana', 'Ahora mismo'],
        answer: 0,
      },
      {
        id: 'x2',
        type: 'fill-blank',
        skill: 'writing',
        sentence: 'Ontem nós ___ ao cinema.',
        accepted: ['fomos'],
        variant: 'both',
        translation: 'Ayer fuimos al cine.',
        hint: 'ir en pretérito perfeito',
      },
      {
        id: 'x3',
        type: 'read-choice',
        skill: 'reading',
        text: 'Quando era criança, morava no Porto e ia à praia todos os verões.',
        textVariant: 'pt',
        question: '¿Qué expresa esta frase?',
        options: [
          'Costumbres del pasado (imperfeito)',
          'Planes de futuro',
          'Una orden',
        ],
        answer: 0,
      },
      {
        id: 'x4',
        type: 'translate',
        skill: 'writing',
        es: 'ayer',
        accepted: [{ text: 'ontem', variant: 'both' }],
      },
    ],
  },
  B1: {
    levelId: 'B1',
    officialPt: 'CAPLE — DEPLE: certificado oficial de nivel B1.',
    officialBr: 'Celpe-Bras: banda Intermediário (≈ B1), su nivel de entrada.',
    description:
      'En B1 el examen pide opinar, justificar y desenvolverse en imprevistos; entra el subjuntivo presente. Muestra del estilo de preguntas:',
    sample: [
      {
        id: 'x1',
        type: 'fill-blank',
        skill: 'writing',
        sentence: 'Espero que você ___ vir à festa.',
        accepted: ['possa'],
        variant: 'br',
        translation: 'Espero que puedas venir a la fiesta.',
        hint: 'poder, subjuntivo presente',
      },
      {
        id: 'x2',
        type: 'listen-choice',
        skill: 'listening',
        audio: { text: 'Acho que amanhã vai chover.', variant: 'pt' },
        question: '¿Qué expresa esta persona?',
        options: [
          'Una opinión sobre el tiempo',
          'Una invitación',
          'Una queja',
          'Un saludo',
        ],
        answer: 0,
      },
      {
        id: 'x3',
        type: 'read-choice',
        skill: 'reading',
        text: 'Na minha opinião, aprender as duas variantes ao mesmo tempo é melhor, embora seja mais difícil.',
        textVariant: 'both',
        question: '¿Qué palabra introduce el contraste («aunque»)?',
        options: ['embora', 'na minha opinião', 'ao mesmo tempo'],
        answer: 0,
      },
      {
        id: 'x4',
        type: 'translate',
        skill: 'writing',
        es: 'espero que vengas',
        accepted: [
          { text: 'espero que você venha', variant: 'br' },
          { text: 'espero que venhas', variant: 'pt' },
        ],
      },
    ],
  },
  B2: {
    levelId: 'B2',
    officialPt: 'CAPLE — DIPLE: certificado oficial de nivel B2.',
    officialBr: 'Celpe-Bras: banda Intermediário Superior (≈ B2).',
    description:
      'B2 exige argumentar con fluidez y dominar estructuras propias del portugués sin equivalente en español: el subjuntivo futuro y el infinitivo personal. Muestra:',
    sample: [
      {
        id: 'x1',
        type: 'fill-blank',
        skill: 'writing',
        sentence: 'Quando ___ tempo, liga-me.',
        accepted: ['tiveres'],
        variant: 'pt',
        translation: 'Cuando tengas tiempo, llámame.',
        hint: 'ter, subjuntivo futuro (2ª persona)',
      },
      {
        id: 'x2',
        type: 'fill-blank',
        skill: 'writing',
        sentence: 'Se você ___ de ajuda, é só falar.',
        accepted: ['precisar'],
        variant: 'br',
        translation: 'Si necesitas ayuda, solo dilo.',
        hint: 'precisar, subjuntivo futuro',
      },
      {
        id: 'x3',
        type: 'read-choice',
        skill: 'reading',
        text: 'É melhor sairmos cedo para chegarmos antes do jantar.',
        textVariant: 'both',
        question: '¿Qué estructura típica del portugués aparece aquí?',
        options: [
          'Infinitivo personal (sairmos, chegarmos)',
          'Voz pasiva',
          'Gerundio',
        ],
        answer: 0,
      },
      {
        id: 'x4',
        type: 'listen-choice',
        skill: 'listening',
        audio: { text: 'Se quiseres, podemos ir juntos.', variant: 'pt' },
        question: '¿Qué te están diciendo?',
        options: [
          'Si quieres, podemos ir juntos',
          'Quiero ir contigo ya',
          'Fuimos juntos ayer',
          'No quiero ir',
        ],
        answer: 0,
      },
    ],
  },
  C1: {
    levelId: 'C1',
    officialPt: 'CAPLE — DAPLE: certificado oficial de nivel C1.',
    officialBr: 'Celpe-Bras: banda Avançado / Avançado Superior (≈ C1).',
    description:
      'En C1 se evalúan matices: expresiones idiomáticas, registro formal e informal y comprensión a velocidad nativa. Muestra:',
    sample: [
      {
        id: 'x1',
        type: 'read-choice',
        skill: 'reading',
        text: '— E aí, fechou o negócio?\n— Ainda não… estou com a pulga atrás da orelha.',
        textVariant: 'br',
        question: '¿Qué significa «estar com a pulga atrás da orelha»?',
        options: ['Estar desconfiado', 'Tener piojos', 'Estar contento'],
        answer: 0,
      },
      {
        id: 'x2',
        type: 'listen-choice',
        skill: 'listening',
        audio: { text: 'Não vale a pena chorar sobre leite derramado.', variant: 'pt' },
        question: '¿Qué expresa este refrán?',
        options: [
          'No lamentarse por lo que ya no tiene remedio',
          'Hay que cuidar la comida',
          'Llorar alivia',
          'La leche está cara',
        ],
        answer: 0,
      },
      {
        id: 'x3',
        type: 'fill-blank',
        skill: 'writing',
        sentence: 'Agradecíamos que nos ___ a resposta com brevidade.',
        accepted: ['enviassem'],
        variant: 'pt',
        translation:
          'Agradeceríamos que nos enviaran la respuesta a la brevedad (registro formal).',
        hint: 'enviar, imperfecto de subjuntivo',
      },
      {
        id: 'x4',
        type: 'speak',
        skill: 'speaking',
        target: { text: 'Se calhar amanhã passo por cá.', variant: 'pt' },
        translation: 'A lo mejor mañana me paso por aquí («se calhar» es muy de Portugal).',
      },
    ],
  },
};

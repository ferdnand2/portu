import type { Lesson } from '../../domain/content';

/** A2 · Módulo 4: Trabajo y estudios. */
export const a2m4: Lesson = {
  id: 'a2-m4-l1',
  title: 'Trabajo y estudios',
  description: 'Habla de tu empleo, entiende anuncios y conoce el famoso «a gente».',
  vocab: [
    {
      id: 'v-emprego',
      es: 'empleo / trabajo',
      forms: [
        {
          text: 'emprego / trabalho',
          variant: 'both',
          ipa: { br: 'ẽˈpɾe.gu / tɾaˈba.ʎu', pt: 'ẽˈpɾe.gu / tɾɐˈba.ʎu' },
        },
      ],
    },
    {
      id: 'v-empresa',
      es: 'empresa / oficina',
      forms: [
        {
          text: 'empresa / escritório',
          variant: 'both',
          ipa: { br: 'ẽˈpɾe.zɐ / es.kɾiˈtɔ.ɾi.u', pt: 'ẽˈpɾe.zɐ / əʃ.kɾiˈtɔ.ɾju' },
          note: '«Escritório» es la oficina (¡no el mueble!). El taller mecánico sí es «oficina» en Portugal.',
        },
      ],
    },
    {
      id: 'v-reuniao',
      es: 'reunión',
      forms: [
        { text: 'reunião', variant: 'both', ipa: { br: 'ʁe.u.niˈɐ̃w̃', pt: 'ʁju.niˈɐ̃w̃' } },
      ],
    },
    {
      id: 'v-chefe',
      es: 'jefe / colega',
      forms: [
        {
          text: 'chefe / colega',
          variant: 'both',
          ipa: { br: 'ˈʃɛ.fi / koˈlɛ.gɐ', pt: 'ˈʃɛ.fə / kuˈlɛ.gɐ' },
        },
      ],
    },
    {
      id: 'v-salario',
      es: 'sueldo / salario',
      forms: [
        { text: 'salário / ordenado', variant: 'both', ipa: { br: 'saˈla.ɾi.u', pt: 'sɐˈla.ɾju' }, note: '«Ordenado» se oye sobre todo en Portugal.' },
      ],
    },
    {
      id: 'v-entrevista',
      es: 'entrevista / currículum',
      forms: [
        {
          text: 'entrevista / currículo',
          variant: 'both',
          ipa: { br: 'ẽ.tɾeˈvis.tɐ / kuˈʁi.ku.lu', pt: 'ẽ.tɾəˈviʃ.tɐ / kuˈʁi.ku.lu' },
          note: 'En Portugal también «CV» (cê-vê).',
        },
      ],
    },
    {
      id: 'v-a-gente',
      es: 'nosotros (coloquial)',
      forms: [
        {
          text: 'a gente',
          variant: 'br',
          ipa: { br: 'ɐ ˈʒẽ.tʃi' },
          note: 'La forma coloquial reina en Brasil: «a gente trabalha» = nosotros trabajamos. ¡Verbo en singular!',
        },
        {
          text: 'nós',
          variant: 'pt',
          ipa: { pt: 'nɔʃ' },
          note: '«A gente» también existe en Portugal, pero «nós» domina.',
        },
      ],
      example: { br: 'A gente se vê amanhã!', pt: 'Vemo-nos amanhã!', es: '¡Nos vemos mañana!' },
    },
    {
      id: 'v-estagio',
      es: 'prácticas / pasantía',
      forms: [
        { text: 'estágio', variant: 'both', ipa: { br: 'esˈta.ʒu', pt: 'əʃˈta.ʒju' } },
      ],
    },
    {
      id: 'v-faculdade',
      es: 'universidad / facultad',
      forms: [
        {
          text: 'faculdade',
          variant: 'br',
          ipa: { br: 'fa.kuwˈda.dʒi' },
          note: 'En Brasil, «fazer faculdade» = estudiar una carrera.',
        },
        { text: 'universidade', variant: 'pt', ipa: { pt: 'u.ni.vəɾ.siˈða.də' } },
      ],
    },
    {
      id: 'v-ganhar',
      es: 'ganar (dinero)',
      forms: [
        { text: 'ganhar', variant: 'both', ipa: { br: 'gɐ̃ˈɲaʁ', pt: 'gɐ̃ˈɲaɾ' } },
      ],
      example: { both: 'Quanto ganha um professor?', es: '¿Cuánto gana un profesor?' },
    },
  ],
  grammar: [
    {
      id: 'g-a-gente',
      title: '⭐ «A gente»: el nosotros brasileño',
      explanation:
        'En el Brasil hablado, «a gente» sustituye a «nós» constantemente. Literalmente es «la gente», así que el verbo va en TERCERA persona del singular: «A gente mora aqui» (vivimos aquí), «A gente foi ao cinema» (fuimos al cine).\n' +
        '«Nós» sigue siendo correcto y se usa en la escritura. En Portugal domina «nós» con su conjugación normal (-mos).\n' +
        'Truco de oído: si oyes «a gente» + verbo singular, traduce «nosotros».',
      examples: [
        { br: 'A gente trabalha juntos há dois anos.', pt: 'Trabalhamos juntos há dois anos.', es: 'Trabajamos juntos desde hace dos años.' },
        { br: 'A gente se fala depois!', pt: 'Falamos depois!', es: '¡Hablamos después!' },
      ],
    },
    {
      id: 'g-futuro-simple',
      title: 'El futuro simple: para escribir',
      explanation:
        'Se forma pegando -ei, -ás, -á, -emos, -ão al infinitivo: falarei, falarás 🇵🇹, falará, falaremos, falarão. Irregulares solo tres: fazer → farei, dizer → direi, trazer → trarei.\n' +
        'En el habla de ambos países casi siempre se usa «ir + infinitivo» (vou falar); el futuro simple queda para textos, noticias y promesas solemnes.\n' +
        'En Portugal oirás además «hei de + infinitivo» para intenciones: «Hei de conseguir» (lo conseguiré, ya verás).',
      examples: [
        { both: 'Um dia terei a minha própria empresa.', es: 'Algún día tendré mi propia empresa.' },
        { br: 'Amanhã vou mandar o currículo.', pt: 'Amanhã vou enviar o CV.', es: 'Mañana voy a enviar el currículum.' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-oes',
      title: 'El plural -ões: reuniões',
      explanation:
        'Las palabras en -ão hacen el plural más común en -ões: reunião → reuniões, estação → estações. Es õ + i breve nasal.',
      samples: [
        { text: 'reuniões', variant: 'both', ipa: 'ʁe.u.niˈõj̃s', hint: 're-u-ni-õis' },
      ],
    },
    {
      id: 'p-e-atona-pt',
      title: 'La e átona inicial en Portugal',
      explanation:
        'En Portugal, es-/en- iniciales se comen la e: «estágio» suena shtá죠… casi sin vocal inicial: «shtáju», «escritório» → «shcritóriu». En Brasil la e se oye clara (y suena i: «istájiu»).',
      samples: [
        { text: 'estágio', variant: 'br', ipa: 'esˈta.ʒu', hint: 'is-tá-ju' },
        { text: 'estágio', variant: 'pt', ipa: 'əʃˈta.ʒju', hint: 'shtá-ju' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'A reunião começa às dez.', variant: 'br' },
      question: '¿Qué anuncia esta persona?',
      options: [
        'La reunión empieza a las diez',
        'La reunión terminó a las diez',
        'Hay diez reuniones',
        'La reunión se canceló',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: 'PROCURA-SE empregado de mesa para restaurante no centro. Experiência mínima: 1 ano. Enviar CV para geral@restaurante.pt',
      textVariant: 'pt',
      question: '¿Qué pide el anuncio?',
      options: [
        'Un camarero con un año de experiencia',
        'Un cocinero sin experiencia',
        'Un restaurante en venta',
      ],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: '___ gente trabalha muito nesta empresa.',
      accepted: ['a'],
      variant: 'br',
      translation: 'Nosotros trabajamos mucho en esta empresa.',
      hint: 'el «nosotros» brasileño',
    },
    {
      id: 'e4',
      type: 'translate',
      skill: 'writing',
      es: 'nosotros trabajamos',
      accepted: [
        { text: 'a gente trabalha', variant: 'br' },
        { text: 'nós trabalhamos', variant: 'both' },
      ],
    },
    {
      id: 'e5',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'Tenho uma entrevista amanhã', variant: 'pt' },
    },
    {
      id: 'e6',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Um dia eu ___ meu próprio negócio.',
      accepted: ['terei'],
      variant: 'both',
      translation: 'Algún día tendré mi propio negocio.',
      hint: 'ter, futuro simple',
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Eu trabalho numa empresa grande.', variant: 'br' },
      translation: 'Trabajo en una empresa grande.',
    },
  ],
};

import type { Lesson } from '../../domain/content';

/** A1 · Módulo 5: La ciudad y direcciones. */
export const a1m5: Lesson = {
  id: 'a1-m5-l1',
  title: 'Por la ciudad',
  description: 'Pregunta dónde queda algo, entiende direcciones y muévete en transporte.',
  vocab: [
    {
      id: 'v-rua',
      es: 'calle / plaza',
      forms: [
        {
          text: 'rua / praça',
          variant: 'both',
          ipa: { br: 'ˈʁu.ɐ / ˈpɾa.sɐ' },
        },
      ],
    },
    {
      id: 'v-onibus',
      es: 'autobús',
      forms: [
        { text: 'ônibus', variant: 'br', ipa: { br: 'ˈo.ni.bus' } },
        { text: 'autocarro', variant: 'pt', ipa: { pt: 'aw.tɔˈka.ʁu' } },
      ],
      example: { br: 'Vou de ônibus.', pt: 'Vou de autocarro.', es: 'Voy en autobús.' },
    },
    {
      id: 'v-trem',
      es: 'tren',
      forms: [
        { text: 'trem', variant: 'br', ipa: { br: 'tɾẽj̃' } },
        { text: 'comboio', variant: 'pt', ipa: { pt: 'kõˈboj.u' } },
      ],
    },
    {
      id: 'v-ponto',
      es: 'parada (de autobús)',
      forms: [
        { text: 'ponto de ônibus', variant: 'br', ipa: { br: 'ˈpõ.tu dʒi ˈo.ni.bus' } },
        { text: 'paragem', variant: 'pt', ipa: { pt: 'pɐˈɾa.ʒɐ̃j̃' } },
      ],
    },
    {
      id: 'v-metro',
      es: 'metro / estación',
      forms: [
        {
          text: 'metrô / estação',
          variant: 'br',
          ipa: { br: 'meˈtɾo / es.taˈsɐ̃w̃' },
        },
        {
          text: 'metro / estação',
          variant: 'pt',
          ipa: { pt: 'ˈmɛ.tɾu / əʃ.tɐˈsɐ̃w̃' },
          note: 'Misma palabra, pero en Brasil es aguda (metrô) y en Portugal grave (métro).',
        },
      ],
    },
    {
      id: 'v-banco',
      es: 'banco / farmacia / supermercado',
      forms: [
        {
          text: 'banco / farmácia / supermercado',
          variant: 'both',
          ipa: { br: 'ˈbɐ̃.ku / faʁˈma.si.ɐ / su.peʁ.meʁˈka.du' },
        },
      ],
    },
    {
      id: 'v-perto',
      es: 'cerca / lejos',
      forms: [
        {
          text: 'perto / longe',
          variant: 'both',
          ipa: { br: 'ˈpɛʁ.tu / ˈlõ.ʒi', pt: 'ˈpɛɾ.tu / ˈlõ.ʒə' },
        },
      ],
      example: { both: 'É perto daqui?', es: '¿Queda cerca de aquí?' },
    },
    {
      id: 'v-direita',
      es: 'a la derecha / a la izquierda',
      forms: [
        {
          text: 'à direita / à esquerda',
          variant: 'both',
          ipa: { br: 'a dʒiˈɾej.tɐ / a esˈkeʁ.dɐ', pt: 'a diˈɾɐj.tɐ / a əʃˈkeɾ.dɐ' },
        },
      ],
    },
    {
      id: 'v-em-frente',
      es: 'derecho / todo recto',
      forms: [
        {
          text: 'em frente',
          variant: 'both',
          ipa: { br: 'ẽj̃ ˈfɾẽ.tʃi', pt: 'ɐ̃j̃ ˈfɾẽ.tə' },
          note: '«Siga em frente» = siga derecho. «Em frente a» también es «frente a».',
        },
      ],
    },
    {
      id: 'v-onde-fica',
      es: '¿dónde queda…?',
      forms: [
        {
          text: 'Onde fica…?',
          variant: 'both',
          ipa: { br: 'ˈõ.dʒi ˈfi.kɐ', pt: 'ˈõ.də ˈfi.kɐ' },
        },
      ],
      example: { both: 'Onde fica a farmácia?', es: '¿Dónde queda la farmacia?' },
    },
    {
      id: 'v-virar',
      es: 'girar / doblar',
      forms: [
        { text: 'virar', variant: 'both', ipa: { br: 'viˈɾaʁ', pt: 'viˈɾaɾ' } },
      ],
      example: { both: 'Vire à direita na praça.', es: 'Gire a la derecha en la plaza.' },
    },
    {
      id: 'v-quarteirao',
      es: 'cuadra / manzana',
      forms: [
        { text: 'quarteirão', variant: 'br', ipa: { br: 'kwaʁ.tejˈɾɐ̃w̃' } },
        { text: 'quarteirão', variant: 'pt', ipa: { pt: 'kwɐɾ.tɐjˈɾɐ̃w̃' }, note: 'En Portugal se usa menos; se dice «na próxima rua».' },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-ficar',
      title: 'Ficar: el verbo de la ubicación',
      explanation:
        'Para decir dónde está algo fijo (edificios, lugares), el portugués prefiere «ficar» en vez de «estar»: «O banco fica na praça» (el banco queda en la plaza). Es como el «quedar» latinoamericano.\n' +
        '«Estar» se usa para lo que se mueve: «O carro está na rua».\n' +
        'Ficar tiene otros usos que verás más adelante (quedarse, ponerse), es un verbo comodín del portugués.',
      examples: [
        { both: 'O hotel fica perto da estação.', es: 'El hotel queda cerca de la estación.' },
        { both: 'Onde fica o supermercado?', es: '¿Dónde queda el supermercado?' },
      ],
    },
    {
      id: 'g-contracciones',
      title: 'Las contracciones: no, na, do, da, ao, à',
      explanation:
        'El portugués contrae SIEMPRE las preposiciones em, de y a con los artículos — no es opcional como «del» en español:\n' +
        'em + o/a = no / na → «no banco» (en el banco), «na rua» (en la calle)\n' +
        'de + o/a = do / da → «perto do metrô», «longe da praça»\n' +
        'a + o/a = ao / à → «vou ao banco», «vire à esquerda»\n' +
        'La «à» con acento grave (crase) es a + a: suena igual pero se escribe con el acento.',
      examples: [
        { both: 'A farmácia fica na esquina.', es: 'La farmacia queda en la esquina.' },
        { both: 'Vou ao supermercado.', es: 'Voy al supermercado.' },
        { br: 'O ponto de ônibus fica em frente ao banco.', pt: 'A paragem fica em frente ao banco.', es: 'La parada queda frente al banco.' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-r-inicial',
      title: 'La r inicial: rua',
      explanation:
        'La r al inicio de palabra (y la rr) es gutural, desde la garganta: «rua» suena como «júa» con j suave. En Portugal alterna entre esa r gutural y una rr vibrante como la española.',
      samples: [
        { text: 'rua', variant: 'both', ipa: 'ˈʁu.ɐ', hint: 'jú-a (garganta)' },
      ],
    },
    {
      id: 'p-cao',
      title: 'La terminación -ção',
      explanation:
        'El equivalente de -ción es -ção, con la nasal ão: estação (estación), informação. Plural: -ções (estações).',
      samples: [
        { text: 'estação', variant: 'br', ipa: 'es.taˈsɐ̃w̃', hint: 'es-ta-sãu' },
        { text: 'estação', variant: 'pt', ipa: 'əʃ.tɐˈsɐ̃w̃', hint: 'sh-ta-sãu' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'O banco fica à direita da praça.', variant: 'br' },
      question: '¿Dónde queda el banco?',
      options: [
        'A la derecha de la plaza',
        'A la izquierda de la plaza',
        'Lejos de la plaza',
        'Dentro de la estación',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: '— Desculpe, onde fica a paragem do autocarro?\n— É ali, em frente à farmácia.',
      textVariant: 'pt',
      question: '¿Qué está buscando esta persona?',
      options: ['La parada del autobús', 'La estación de tren', 'Una farmacia'],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'O supermercado fica ___ frente ao banco.',
      accepted: ['em'],
      variant: 'both',
      translation: 'El supermercado queda frente al banco.',
      hint: 'preposición',
    },
    {
      id: 'e4',
      type: 'translate',
      skill: 'writing',
      es: 'el autobús',
      accepted: [
        { text: 'o ônibus', variant: 'br' },
        { text: 'o autocarro', variant: 'pt' },
      ],
    },
    {
      id: 'e5',
      type: 'translate',
      skill: 'writing',
      es: 'el tren',
      accepted: [
        { text: 'o trem', variant: 'br' },
        { text: 'o comboio', variant: 'pt' },
      ],
    },
    {
      id: 'e6',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'Vire à esquerda', variant: 'br' },
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Onde fica a estação?', variant: 'pt' },
      translation: '¿Dónde queda la estación?',
    },
  ],
};

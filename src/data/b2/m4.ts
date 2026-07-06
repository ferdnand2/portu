import type { Lesson } from '../../domain/content';

/** B2 · Módulo 4: Trabajo profesional y registro formal. */
export const b2m4: Lesson = {
  id: 'b2-m4-l1',
  title: 'Correos y registro formal',
  description: 'Escribe correos profesionales y modula el registro en cada país.',
  vocab: [
    {
      id: 'v-prezados',
      es: 'estimados señores (apertura)',
      forms: [
        {
          text: 'Prezados senhores,',
          variant: 'br',
          ipa: { br: 'pɾeˈza.dus siˈɲo.ɾis' },
          note: 'Apertura formal brasileña; entre colegas basta «Olá, Ana» o «Bom dia».',
        },
        {
          text: 'Exmos. Senhores,',
          variant: 'pt',
          ipa: { pt: 'əʃ.səlẽ.ˈtis.si.muʃ siˈɲo.ɾəʃ' },
          note: 'Abreviatura de «Excelentíssimos». También «Caro Dr. Silva» — en Portugal los títulos pesan.',
        },
      ],
    },
    {
      id: 'v-atenciosamente',
      es: 'atentamente (cierre)',
      forms: [
        { text: 'Atenciosamente,', variant: 'br', ipa: { br: 'a.tẽ.si.o.zaˈmẽ.tʃi' } },
        {
          text: 'Com os melhores cumprimentos,',
          variant: 'pt',
          ipa: { pt: 'kõ uʒ məˈʎɔ.ɾəʃ kũ.pɾiˈmẽ.tuʃ' },
        },
      ],
    },
    {
      id: 'v-segue-anexo',
      es: 'adjunto envío…',
      forms: [
        { text: 'segue em anexo', variant: 'both', ipa: { br: 'ˈsɛ.gi ẽj̃ aˈnɛk.su', pt: 'ˈsɛ.gə ɐ̃j̃ ɐˈnɛk.su' } },
      ],
      example: { both: 'Segue em anexo o relatório.', es: 'Adjunto el informe.' },
    },
    {
      id: 'v-prazo',
      es: 'plazo / fecha límite',
      forms: [
        { text: 'prazo', variant: 'both', ipa: { br: 'ˈpɾa.zu' } },
      ],
      example: { both: 'O prazo termina na sexta.', es: 'El plazo termina el viernes.' },
    },
    {
      id: 'v-relatorio',
      es: 'informe / presupuesto',
      forms: [
        {
          text: 'relatório / orçamento',
          variant: 'both',
          ipa: { br: 'ʁe.laˈtɔ.ɾi.u / oʁ.saˈmẽ.tu', pt: 'ʁə.lɐˈtɔ.ɾju / ɔɾ.sɐˈmẽ.tu' },
        },
      ],
    },
    {
      id: 'v-agendar',
      es: 'agendar una reunión',
      forms: [
        { text: 'agendar uma reunião', variant: 'both', ipa: { br: 'a.ʒẽˈdaʁ', pt: 'ɐ.ʒẽˈdaɾ' } },
      ],
    },
    {
      id: 'v-por-gentileza',
      es: 'por favor (formal)',
      forms: [
        { text: 'por gentileza', variant: 'br', ipa: { br: 'puʁ ʒẽ.tʃiˈle.zɐ' } },
        { text: 'agradecia que…', variant: 'pt', ipa: { pt: 'ɐ.gɾɐ.dəˈsi.ɐ kə' }, note: 'El imperfeito de cortesía portugués: «Agradecia que enviassem…».' },
      ],
    },
    {
      id: 'v-atender',
      es: 'atender / contestar',
      forms: [
        {
          text: 'atender',
          variant: 'both',
          ipa: { br: 'a.tẽˈdeʁ', pt: 'ɐ.tẽˈdeɾ' },
          note: '«Atender o telefone» = contestar el teléfono; «atender um cliente» = atender.',
        },
      ],
    },
    {
      id: 'v-licenca-trabalho',
      es: 'permiso / baja',
      forms: [
        { text: 'licença', variant: 'br', ipa: { br: 'liˈsẽ.sɐ' }, note: '«Licença-maternidade», «licença médica».' },
        { text: 'baixa', variant: 'pt', ipa: { pt: 'ˈbaj.ʃɐ' }, note: 'La baja médica en Portugal: «estar de baixa».' },
      ],
    },
    {
      id: 'v-vossa',
      es: 'su (de ustedes, formal PT)',
      forms: [
        {
          text: 'vosso / vossa',
          variant: 'pt',
          ipa: { pt: 'ˈvɔ.su / ˈvɔ.sɐ' },
          note: 'Vivo en Portugal: «a vossa empresa» = su empresa (de ustedes). En Brasil se usa «de vocês» o «sua».',
        },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-registro',
      title: 'El registro formal en cada país',
      explanation:
        'Portugal es más ceremonioso: títulos (Dr., Eng.ª, Prof.) casi obligatorios, «V. Exa.» en cartas, el imperfeito de cortesía («Agradecia que…», «Pretendia saber…»).\n' +
        'Brasil es más directo incluso en lo profesional: «você» funciona con jefes en muchas empresas, y la cortesía pasa por fórmulas («por gentileza», «fico no aguardo») más que por títulos.\n' +
        'Neutro seguro en ambos: tratar de «o senhor / a senhora» hasta que te ofrezcan otra cosa.',
      examples: [
        { pt: 'Agradecia que me enviassem o orçamento.', br: 'Por gentileza, poderiam enviar o orçamento?', es: 'Les agradecería que me enviaran el presupuesto.' },
        { both: 'Fico no aguardo da vossa resposta.', es: 'Quedo a la espera de su respuesta.' },
      ],
      variantNote: '«Fico no aguardo» es más brasileño; el cierre portugués típico es «Aguardo a vossa resposta».',
    },
    {
      id: 'g-condicional-comp',
      title: 'El condicional compuesto y las conjeturas',
      explanation:
        'Teria + participio para lo que habría pasado: «Teria sido melhor avisar antes» (habría sido mejor avisar antes).\n' +
        'Y para conjeturas sobre el pasado, el futuro compuesto: «Terá recebido o email?» (¿habrá recibido el email?).\n' +
        'Combinado con la hipótesis irreal completa: «Se tivesses enviado o relatório, teríamos fechado o negócio» (si hubieras enviado el informe, habríamos cerrado el trato).',
      examples: [
        { both: 'Se tivéssemos mais tempo, teríamos feito melhor.', es: 'Si hubiéramos tenido más tiempo, lo habríamos hecho mejor.' },
        { both: 'Ela já terá chegado?', es: '¿Ya habrá llegado ella?' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-orcamento',
      title: 'orçamento: ç + nasales en serie',
      explanation: 'or-sa-MEN-tu, con dos nasales seguidas bien marcadas.',
      samples: [
        { text: 'orçamento', variant: 'br', ipa: 'oʁ.saˈmẽ.tu', hint: 'or-sa-mẽ-tu' },
      ],
    },
    {
      id: 'p-exa',
      title: 'V. Exa.: cómo se lee',
      explanation: 'La abreviatura «V. Exa.» se lee completa: «Vossa Excelência». Solo en Portugal y solo por escrito muy formal.',
      samples: [
        { text: 'Vossa Excelência', variant: 'pt', ipa: 'ˈvɔ.sɐ əʃ.səˈlẽ.sjɐ' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Segue em anexo o relatório. Fico no aguardo da sua resposta.', variant: 'br' },
      question: '¿Qué hace este correo?',
      options: [
        'Adjunta un informe y espera respuesta',
        'Pide una reunión urgente',
        'Reclama un pago',
        'Anuncia unas vacaciones',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: 'Exmos. Senhores,\nAgradecia que me enviassem o orçamento até sexta-feira, uma vez que o prazo do projeto termina na próxima semana.\nCom os melhores cumprimentos,\nJoana Ferreira',
      textVariant: 'pt',
      question: '¿Qué pide Joana y para cuándo?',
      options: [
        'El presupuesto, antes del viernes',
        'El informe, para la próxima semana',
        'Una reunión el viernes',
      ],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Se tivesses enviado o relatório, ___ fechado o negócio.',
      accepted: ['teríamos', 'teriamos'],
      variant: 'pt',
      translation: 'Si hubieras enviado el informe, habríamos cerrado el trato.',
      hint: 'ter, condicional de nós',
    },
    {
      id: 'e4',
      type: 'translate',
      skill: 'writing',
      es: 'adjunto el informe',
      accepted: [{ text: 'segue em anexo o relatório', variant: 'both' }],
    },
    {
      id: 'e5',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'O prazo termina na sexta', variant: 'br' },
    },
    {
      id: 'e6',
      type: 'order-words',
      skill: 'writing',
      words: ['Fico', 'no', 'aguardo', 'da', 'sua', 'resposta'],
      answer: 'Fico no aguardo da sua resposta',
      variant: 'br',
      translation: 'Quedo a la espera de su respuesta',
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Podemos agendar uma reunião para quinta?', variant: 'br' },
      translation: '¿Podemos agendar una reunión para el jueves?',
    },
  ],
};

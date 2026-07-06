import type { Lesson } from '../../domain/content';

/** A1 · Módulo 4: Comida y restaurante. */
export const a1m4: Lesson = {
  id: 'a1-m4-l1',
  title: 'En el restaurante',
  description: 'Pide comida y bebida, di qué te gusta y paga la cuenta.',
  vocab: [
    {
      id: 'v-agua',
      es: 'agua',
      forms: [{ text: 'água', variant: 'both', ipa: { br: 'ˈa.gwɐ' } }],
      example: { both: 'Uma água sem gás, por favor.', es: 'Un agua sin gas, por favor.' },
    },
    {
      id: 'v-cafe',
      es: 'café',
      forms: [
        {
          text: 'café',
          variant: 'both',
          ipa: { br: 'kaˈfɛ', pt: 'kɐˈfɛ' },
          note: 'En Portugal, «um café» a secas es un expreso; en Brasil, «um cafezinho».',
        },
      ],
    },
    {
      id: 'v-cerveja',
      es: 'cerveza',
      forms: [
        { text: 'cerveja', variant: 'both', ipa: { br: 'seʁˈve.ʒɐ', pt: 'səɾˈvɐj.ʒɐ' } },
      ],
    },
    {
      id: 'v-suco',
      es: 'jugo / zumo',
      forms: [
        { text: 'suco', variant: 'br', ipa: { br: 'ˈsu.ku' } },
        { text: 'sumo', variant: 'pt', ipa: { pt: 'ˈsu.mu' } },
      ],
      example: { br: 'Um suco de laranja.', pt: 'Um sumo de laranja.', es: 'Un jugo de naranja.' },
    },
    {
      id: 'v-pao',
      es: 'pan',
      forms: [{ text: 'pão', variant: 'both', ipa: { br: 'pɐ̃w̃' } }],
    },
    {
      id: 'v-queijo',
      es: 'queso',
      forms: [
        { text: 'queijo', variant: 'both', ipa: { br: 'ˈkej.ʒu', pt: 'ˈkɐj.ʒu' } },
      ],
    },
    {
      id: 'v-carne',
      es: 'carne / pescado / pollo',
      forms: [
        {
          text: 'carne / peixe / frango',
          variant: 'both',
          ipa: { br: 'ˈkaʁ.ni / ˈpej.ʃi / ˈfɾɐ̃.gu', pt: 'ˈkaɾ.nə / ˈpɐj.ʃə / ˈfɾɐ̃.gu' },
        },
      ],
    },
    {
      id: 'v-sobremesa',
      es: 'postre',
      forms: [
        {
          text: 'sobremesa',
          variant: 'both',
          ipa: { br: 'so.bɾiˈme.zɐ', pt: 'su.bɾəˈme.zɐ' },
          note: 'Falso amigo: no es la charla de sobremesa, ¡es el postre!',
        },
      ],
    },
    {
      id: 'v-cardapio',
      es: 'menú / carta',
      forms: [
        { text: 'cardápio', variant: 'br', ipa: { br: 'kaʁˈda.pi.u' } },
        { text: 'ementa', variant: 'pt', ipa: { pt: 'eˈmẽ.tɐ' } },
      ],
    },
    {
      id: 'v-conta',
      es: 'la cuenta',
      forms: [{ text: 'a conta', variant: 'both', ipa: { br: 'ɐ ˈkõ.tɐ' } }],
      example: { both: 'A conta, por favor!', es: '¡La cuenta, por favor!' },
    },
    {
      id: 'v-cafe-manha',
      es: 'desayuno',
      forms: [
        { text: 'café da manhã', variant: 'br', ipa: { br: 'kaˈfɛ dɐ mɐˈɲɐ̃' } },
        { text: 'pequeno-almoço', variant: 'pt', ipa: { pt: 'pəˈke.nu alˈmo.su' } },
      ],
      example: {
        br: 'O café da manhã do hotel é ótimo.',
        pt: 'O pequeno-almoço do hotel é ótimo.',
        es: 'El desayuno del hotel es buenísimo.',
      },
    },
    {
      id: 'v-almoco',
      es: 'almuerzo / cena',
      forms: [
        {
          text: 'almoço / jantar',
          variant: 'both',
          ipa: { br: 'awˈmo.su / ʒɐ̃ˈtaʁ', pt: 'alˈmo.su / ʒɐ̃ˈtaɾ' },
        },
      ],
    },
    {
      id: 'v-gostoso',
      es: 'rico / sabroso',
      forms: [
        { text: 'gostoso', variant: 'br', ipa: { br: 'gosˈto.zu' }, note: 'Muy brasileño; también «uma delícia».' },
        { text: 'saboroso', variant: 'pt', ipa: { pt: 'sɐ.buˈɾo.zu' }, note: 'En Portugal también se oye mucho «ótimo» o «muito bom».' },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-gostar',
      title: 'Gostar DE: decir qué te gusta',
      explanation:
        'La gran diferencia con el español: «gustar» no funciona al revés. En portugués el que disfruta es el sujeto: «Eu gosto de café» (literalmente «yo gusto de café»).\n' +
        'Siempre lleva DE, que se contrae con el artículo: gosto do vinho (de + o), gosto da comida (de + a).\n' +
        'Para el negativo: «Não gosto de peixe».',
      examples: [
        { both: 'Eu gosto de café, mas não gosto de chá.', es: 'Me gusta el café, pero no me gusta el té.' },
        { br: 'Você gosta da comida brasileira?', pt: 'Gostas da comida portuguesa?', es: '¿Te gusta la comida brasileña/portuguesa?' },
        { both: 'Nós gostamos muito deste restaurante.', es: 'Nos gusta mucho este restaurante.' },
      ],
    },
    {
      id: 'g-pedir',
      title: 'Pedir con cortesía: queria…',
      explanation:
        'La fórmula mágica en los dos países es «queria» (querría/quisiera): «Queria um café, por favor». Suena más suave que «quero».\n' +
        'También sirve «pode trazer…?» (¿puede traer…?): «Pode trazer a conta, por favor?».\n' +
        'En Portugal oirás además «se faz favor» en lugar de «por favor», y al camarero se le llama la atención con «desculpe!».',
      examples: [
        { both: 'Queria uma água e dois cafés, por favor.', es: 'Quería un agua y dos cafés, por favor.' },
        { br: 'Pode trazer o cardápio?', pt: 'Pode trazer a ementa, se faz favor?', es: '¿Puede traer la carta?' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-j',
      title: 'La j portuguesa (ʒ)',
      explanation:
        'La j (y la g ante e/i) suena como la «ll/y» rioplatense sonora: queijo, cerveja, jantar. Nunca como la j española.',
      samples: [
        { text: 'cerveja', variant: 'br', ipa: 'seʁˈve.ʒɐ', hint: 'ser-vé-lla (ll argentina)' },
        { text: 'jantar', variant: 'both', ipa: 'ʒɐ̃ˈtaɾ', hint: 'llan-tár' },
      ],
    },
    {
      id: 'p-ei',
      title: 'El diptongo ei: «ei» en Brasil, «ãi» en Portugal',
      explanation:
        'En Portugal el diptongo ei se pronuncia casi «ãi»: queijo suena «cãijo», peixe suena «pãishe». En Brasil se mantiene «ei» (y a veces se reduce a «e»: «quêjo»).',
      samples: [
        { text: 'queijo', variant: 'br', ipa: 'ˈkej.ʒu', hint: 'kéi-llu' },
        { text: 'queijo', variant: 'pt', ipa: 'ˈkɐj.ʒu', hint: 'kãi-llu' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Queria um café e um pastel de nata, se faz favor.', variant: 'pt' },
      question: '¿Qué pide esta persona?',
      options: [
        'Un café y un pastel',
        'La cuenta',
        'Una cerveza',
        'La carta',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: 'CARDÁPIO\nSuco de laranja — R$ 8\nCafé — R$ 5\nPão de queijo — R$ 6\nÁgua — R$ 4',
      textVariant: 'br',
      question: '¿Cuánto cuesta el jugo de naranja?',
      options: ['8 reales', '5 reales', '6 reales'],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Eu gosto ___ café.',
      accepted: ['de'],
      variant: 'both',
      translation: 'Me gusta el café.',
      hint: 'la preposición de gostar',
    },
    {
      id: 'e4',
      type: 'translate',
      skill: 'writing',
      es: 'jugo de naranja',
      accepted: [
        { text: 'suco de laranja', variant: 'br' },
        { text: 'sumo de laranja', variant: 'pt' },
      ],
    },
    {
      id: 'e5',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'A conta, por favor', variant: 'br' },
    },
    {
      id: 'e6',
      type: 'order-words',
      skill: 'writing',
      words: ['Queria', 'uma', 'água,', 'se', 'faz', 'favor'],
      answer: 'Queria uma água, se faz favor',
      variant: 'pt',
      translation: 'Quería un agua, por favor',
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Eu gosto de café com leite.', variant: 'br' },
      translation: 'Me gusta el café con leche.',
    },
  ],
};

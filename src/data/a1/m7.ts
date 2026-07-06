import type { Lesson } from '../../domain/content';

/** A1 · Módulo 7: Compras y ropa. */
export const a1m7: Lesson = {
  id: 'a1-m7-l1',
  title: 'De compras',
  description: 'Pregunta precios, habla de ropa y usa los demostrativos.',
  vocab: [
    {
      id: 'v-loja',
      es: 'tienda',
      forms: [{ text: 'loja', variant: 'both', ipa: { br: 'ˈlɔ.ʒɐ' } }],
    },
    {
      id: 'v-roupa',
      es: 'ropa',
      forms: [{ text: 'roupa', variant: 'both', ipa: { br: 'ˈʁow.pɐ', pt: 'ˈʁo.pɐ' } }],
    },
    {
      id: 'v-camisa',
      es: 'camisa / camiseta',
      forms: [
        { text: 'camisa / camiseta', variant: 'br', ipa: { br: 'kaˈmi.zɐ / ka.miˈze.tɐ' } },
        {
          text: 'camisa / t-shirt',
          variant: 'pt',
          ipa: { pt: 'kɐˈmi.zɐ' },
          note: 'En Portugal la camiseta es «t-shirt» (dicho a la inglesa).',
        },
      ],
    },
    {
      id: 'v-calca',
      es: 'pantalón',
      forms: [
        { text: 'calça', variant: 'br', ipa: { br: 'ˈkaw.sɐ' } },
        { text: 'calças', variant: 'pt', ipa: { pt: 'ˈkal.sɐʃ' }, note: 'En Portugal siempre en plural, como en español.' },
      ],
    },
    {
      id: 'v-sapatos',
      es: 'zapatos / vestido',
      forms: [
        {
          text: 'sapatos / vestido',
          variant: 'both',
          ipa: { br: 'saˈpa.tus / vesˈtʃi.du', pt: 'sɐˈpa.tuʃ / vəʃˈti.ðu' },
        },
      ],
    },
    {
      id: 'v-caro',
      es: 'caro / barato',
      forms: [
        {
          text: 'caro / barato',
          variant: 'both',
          ipa: { br: 'ˈka.ɾu / baˈɾa.tu' },
        },
      ],
      example: { both: 'Está muito caro!', es: '¡Está muy caro!' },
    },
    {
      id: 'v-preco',
      es: 'precio',
      forms: [{ text: 'preço', variant: 'both', ipa: { br: 'ˈpɾe.su' } }],
    },
    {
      id: 'v-quanto-custa',
      es: '¿cuánto cuesta?',
      forms: [
        {
          text: 'Quanto custa?',
          variant: 'both',
          ipa: { br: 'ˈkwɐ̃.tu ˈkus.tɐ', pt: 'ˈkwɐ̃.tu ˈkuʃ.tɐ' },
        },
      ],
      example: { both: 'Quanto custa este vestido?', es: '¿Cuánto cuesta este vestido?' },
    },
    {
      id: 'v-cartao',
      es: 'tarjeta / efectivo',
      forms: [
        {
          text: 'cartão / dinheiro',
          variant: 'both',
          ipa: { br: 'kaʁˈtɐ̃w̃ / dʒiˈɲej.ɾu', pt: 'kɐɾˈtɐ̃w̃ / diˈɲɐj.ɾu' },
          note: '«Posso pagar com cartão?» = ¿puedo pagar con tarjeta? En Portugal la tarjeta local es el «multibanco».',
        },
      ],
    },
    {
      id: 'v-celular',
      es: 'celular / móvil',
      forms: [
        { text: 'celular', variant: 'br', ipa: { br: 'se.luˈlaʁ' } },
        { text: 'telemóvel', variant: 'pt', ipa: { pt: 'tə.ləˈmɔ.vɛl' } },
      ],
    },
    {
      id: 'v-legal',
      es: '¡genial! / ¡qué bueno!',
      forms: [
        {
          text: 'legal',
          variant: 'br',
          ipa: { br: 'leˈgaw' },
          note: 'La muletilla brasileña por excelencia: «Que legal!» = ¡qué genial!',
        },
        {
          text: 'fixe',
          variant: 'pt',
          ipa: { pt: 'ˈfi.ʃə' },
          note: 'Su equivalente portugués: «Que fixe!». También «giro» (bonito/mono).',
        },
      ],
    },
    {
      id: 'v-desconto',
      es: 'descuento / rebajas',
      forms: [
        { text: 'desconto', variant: 'both', ipa: { br: 'dʒisˈkõ.tu', pt: 'dəʃˈkõ.tu' } },
        { text: 'saldos', variant: 'pt', note: 'Las rebajas en Portugal son «os saldos»; en Brasil, «promoção/liquidação».' },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-demostrativos',
      title: 'Los demostrativos: este, esse, aquele',
      explanation:
        'Tres grados, como el español clásico:\n' +
        'este/esta — cerca de mí (isto, neutro)\n' +
        'esse/essa — cerca de ti (isso)\n' +
        'aquele/aquela — lejos de ambos (aquilo)\n' +
        'Los neutros isto/isso/aquilo se usan para cosas sin nombrar: «O que é isso?» (¿qué es eso?).\n' +
        'En el habla brasileña este y esse se mezclan mucho (domina esse); en Portugal la distinción se respeta más.',
      examples: [
        { both: 'Quanto custa esta camisa?', es: '¿Cuánto cuesta esta camisa?' },
        { both: 'Aquela loja é mais barata.', es: 'Aquella tienda es más barata.' },
        { br: 'O que é isso?', pt: 'O que é isso?', es: '¿Qué es eso?' },
      ],
    },
    {
      id: 'g-muito',
      title: 'Muito: cuándo concuerda y cuándo no',
      explanation:
        'Como adverbio (muy) es invariable: «muito caro», «muito caras» ✗ → «muito caras» es error si es «muy»: «São muito caras» (muy caras) usa muito invariable.\n' +
        'Como adjetivo (mucho/a/os/as) concuerda: «muitas lojas» (muchas tiendas), «muito dinheiro» (mucho dinero).\n' +
        'Truco: si en español dices «muy», el muito no cambia; si dices «muchos/as», sí.',
      examples: [
        { both: 'Esta loja é muito boa.', es: 'Esta tienda es muy buena.' },
        { both: 'Há muitas lojas nesta rua.', es: 'Hay muchas tiendas en esta calle.' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-l-final',
      title: 'La l final: legal → «legáu» en Brasil',
      explanation:
        'La l al final de sílaba se vuelve u en Brasil: legal suena «legáu», Brasil suena «Brasíu». En Portugal se mantiene una l oscura, como la l inglesa de «ball».',
      samples: [
        { text: 'legal', variant: 'br', ipa: 'leˈgaw', hint: 'le-gáu' },
        { text: 'telemóvel', variant: 'pt', ipa: 'tə.ləˈmɔ.vɛl', hint: 't’le-mó-vel (l final clara)' },
      ],
    },
    {
      id: 'p-x',
      title: 'La x de fixe (y otras x)',
      explanation:
        'La x portuguesa suele sonar «sh»: fixe (fishe), caixa (cáisha), baixo (báishu). Tiene otros valores (táxi = ks), pero «sh» es el más común.',
      samples: [
        { text: 'baixo', variant: 'both', ipa: 'ˈbaj.ʃu', hint: 'bái-shu' },
        { text: 'fixe', variant: 'pt', ipa: 'ˈfi.ʃə', hint: 'fish' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Quanto custa esta t-shirt?', variant: 'pt' },
      question: '¿Qué hace esta persona?',
      options: [
        'Pregunta el precio',
        'Pide otra talla',
        'Devuelve una compra',
        'Saluda al vendedor',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: '— Que legal esse vestido! Quanto custa?\n— R$ 120, mas está com desconto: sai por R$ 90.',
      textVariant: 'br',
      question: '¿Cuánto pagaría al final por el vestido?',
      options: ['90 reales', '120 reales', '30 reales'],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: '___ custa este casaco?',
      accepted: ['quanto'],
      variant: 'both',
      translation: '¿Cuánto cuesta este abrigo?',
      hint: 'pregunta de precio',
    },
    {
      id: 'e4',
      type: 'translate',
      skill: 'writing',
      es: 'el celular / el móvil',
      accepted: [
        { text: 'o celular', variant: 'br' },
        { text: 'o telemóvel', variant: 'pt' },
      ],
    },
    {
      id: 'e5',
      type: 'translate',
      skill: 'writing',
      es: '¡genial!',
      accepted: [
        { text: 'legal!', variant: 'br' },
        { text: 'que legal!', variant: 'br' },
        { text: 'fixe!', variant: 'pt' },
        { text: 'que fixe!', variant: 'pt' },
      ],
    },
    {
      id: 'e6',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'Posso pagar com cartão?', variant: 'br' },
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Quanto custa este casaco?', variant: 'pt' },
      translation: '¿Cuánto cuesta este abrigo?',
    },
  ],
};

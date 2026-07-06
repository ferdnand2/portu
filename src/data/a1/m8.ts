import type { Lesson } from '../../domain/content';

/** A1 · Módulo 8: Viajes y transporte. */
export const a1m8: Lesson = {
  id: 'a1-m8-l1',
  title: 'De viaje',
  description: 'Aeropuerto, hotel y planes con «ir + infinitivo» (el futuro fácil).',
  vocab: [
    {
      id: 'v-viagem',
      es: 'viaje',
      forms: [
        {
          text: 'viagem',
          variant: 'both',
          ipa: { br: 'viˈa.ʒẽj̃', pt: 'viˈa.ʒɐ̃j̃' },
          note: 'Femenino: A viagem. «Boa viagem!» = ¡buen viaje!',
        },
      ],
    },
    {
      id: 'v-aeroporto',
      es: 'aeropuerto / avión',
      forms: [
        {
          text: 'aeroporto / avião',
          variant: 'both',
          ipa: { br: 'a.e.ɾoˈpoʁ.tu / a.viˈɐ̃w̃', pt: 'ɐ.e.ɾuˈpoɾ.tu / ɐ.viˈɐ̃w̃' },
        },
      ],
    },
    {
      id: 'v-passagem',
      es: 'billete / pasaje',
      forms: [
        { text: 'passagem', variant: 'br', ipa: { br: 'paˈsa.ʒẽj̃' } },
        { text: 'bilhete', variant: 'pt', ipa: { pt: 'biˈʎe.tə' } },
      ],
      example: {
        br: 'Comprei a passagem pela internet.',
        pt: 'Comprei o bilhete pela internet.',
        es: 'Compré el billete por internet.',
      },
    },
    {
      id: 'v-mala',
      es: 'maleta / pasaporte',
      forms: [
        {
          text: 'mala / passaporte',
          variant: 'both',
          ipa: { br: 'ˈma.lɐ / pa.saˈpɔʁ.tʃi', pt: 'ˈma.lɐ / pɐ.sɐˈpɔɾ.tə' },
        },
      ],
    },
    {
      id: 'v-hotel',
      es: 'hotel / reserva',
      forms: [
        {
          text: 'hotel / reserva',
          variant: 'both',
          ipa: { br: 'oˈtɛw / ʁeˈzɛʁ.vɐ', pt: 'ɔˈtɛl / ʁəˈzɛɾ.vɐ' },
          note: 'La h nunca suena: «hotel» empieza en o.',
        },
      ],
    },
    {
      id: 'v-praia',
      es: 'playa',
      forms: [{ text: 'praia', variant: 'both', ipa: { br: 'ˈpɾaj.ɐ' } }],
    },
    {
      id: 'v-ferias',
      es: 'vacaciones',
      forms: [
        {
          text: 'férias',
          variant: 'both',
          ipa: { br: 'ˈfɛ.ɾi.ɐs', pt: 'ˈfɛ.ɾi.ɐʃ' },
          note: 'Siempre plural: «estou de férias» = estoy de vacaciones.',
        },
      ],
    },
    {
      id: 'v-alugar',
      es: 'alquilar un coche',
      forms: [
        { text: 'alugar um carro', variant: 'both', ipa: { br: 'a.luˈgaʁ ũ ˈka.ʁu', pt: 'ɐ.luˈgaɾ ũ ˈka.ʁu' } },
      ],
    },
    {
      id: 'v-voo',
      es: 'vuelo',
      forms: [
        {
          text: 'voo',
          variant: 'both',
          ipa: { br: 'ˈvo.u' },
          note: '«O voo está atrasado» = el vuelo está retrasado.',
        },
      ],
    },
    {
      id: 'v-chegada',
      es: 'llegada / salida',
      forms: [
        {
          text: 'chegada / partida',
          variant: 'both',
          ipa: { br: 'ʃeˈga.dɐ / paʁˈtʃi.dɐ', pt: 'ʃəˈga.ðɐ / pɐɾˈti.ðɐ' },
          note: 'La ch portuguesa suena «sh», nunca «ch»: chegada = shegada.',
        },
      ],
    },
    {
      id: 'v-embarque',
      es: 'embarque / puerta',
      forms: [
        {
          text: 'embarque / portão',
          variant: 'br',
          ipa: { br: 'ẽ.baʁ.ki / poʁˈtɐ̃w̃' },
        },
        {
          text: 'embarque / porta',
          variant: 'pt',
          ipa: { pt: 'ẽ.baɾ.kə / ˈpɔɾ.tɐ' },
          note: 'La puerta de embarque: «portão» en Brasil, «porta» en Portugal.',
        },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-ir',
      title: 'El verbo ir',
      explanation:
        'eu vou — yo voy\n' +
        'tu vais — tú vas 🇵🇹\n' +
        'você / ele vai — tú vas / él va\n' +
        'nós vamos — nosotros vamos\n' +
        'vocês / eles vão — ustedes van / ellos van\n' +
        'Con destinos: ir A (visita corta) o ir PARA (quedarse): «vou ao banco» vs «vou para Lisboa». Y los medios de transporte con DE: «vou de avião, de carro, de ônibus» (pero «a pé», a pie).',
      examples: [
        { both: 'Vamos à praia amanhã.', es: 'Vamos a la playa mañana.' },
        { br: 'Vou de ônibus para o aeroporto.', pt: 'Vou de autocarro para o aeroporto.', es: 'Voy en autobús al aeropuerto.' },
      ],
    },
    {
      id: 'g-futuro-proximo',
      title: 'El futuro fácil: ir + infinitivo',
      explanation:
        'Igual que en español «voy a viajar», pero SIN la a: «Vou viajar», «Vamos jantar fora».\n' +
        'Es la forma normal de hablar del futuro en ambos países; el futuro simple (viajarei) queda para la escritura formal.\n' +
        'Ojo con el doble ir: «voy a ir» = «vou» a secas (o «vou lá»).',
      examples: [
        { both: 'Vou viajar no próximo mês.', es: 'Voy a viajar el mes que viene.' },
        { br: 'O que você vai fazer nas férias?', pt: 'O que vais fazer nas férias?', es: '¿Qué vas a hacer en las vacaciones?' },
        { both: 'Vamos alugar um carro.', es: 'Vamos a alquilar un coche.' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-hotel',
      title: 'hotel: la l final otra vez',
      explanation:
        'El mejor par para oír la l final: en Brasil «hotel» termina en u (otéu); en Portugal, en l oscura (otél).',
      samples: [
        { text: 'hotel', variant: 'br', ipa: 'oˈtɛw', hint: 'o-téu' },
        { text: 'hotel', variant: 'pt', ipa: 'ɔˈtɛl', hint: 'o-tél' },
      ],
    },
    {
      id: 'p-ch',
      title: 'La ch: siempre «sh»',
      explanation:
        'ch en portugués suena «sh» en los dos países: chegada, chamar, chuva. Nunca como la ch española (ese sonido es tch: tchau).',
      samples: [
        { text: 'chegada', variant: 'both', ipa: 'ʃeˈga.dɐ', hint: 'she-gá-da' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'O voo está atrasado uma hora.', variant: 'br' },
      question: '¿Qué pasa con el vuelo?',
      options: [
        'Está retrasado una hora',
        'Fue cancelado',
        'Sale a tiempo',
        'Ya salió',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: 'PARTIDAS\nLisboa → Madrid — 14:30 — Porta 12\nInício do embarque: 14:00',
      textVariant: 'pt',
      question: '¿A qué hora empieza el embarque?',
      options: ['A las 14:00', 'A las 14:30', 'A las 12:00'],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Amanhã eu ___ viajar para o Porto.',
      accepted: ['vou'],
      variant: 'both',
      translation: 'Mañana voy a viajar a Oporto.',
      hint: 'ir, primera persona',
    },
    {
      id: 'e4',
      type: 'translate',
      skill: 'writing',
      es: 'el billete / pasaje',
      accepted: [
        { text: 'a passagem', variant: 'br' },
        { text: 'o bilhete', variant: 'pt' },
      ],
    },
    {
      id: 'e5',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'Boa viagem!', variant: 'br' },
    },
    {
      id: 'e6',
      type: 'order-words',
      skill: 'writing',
      words: ['Vou', 'de', 'férias', 'para', 'a', 'praia'],
      answer: 'Vou de férias para a praia',
      variant: 'both',
      translation: 'Me voy de vacaciones a la playa',
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Vou viajar no próximo mês.', variant: 'br' },
      translation: 'Voy a viajar el mes que viene.',
    },
  ],
};

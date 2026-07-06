import type { Lesson } from '../../domain/content';

/** B1 · Módulo 6: Viajes e imprevistos. */
export const b1m6: Lesson = {
  id: 'b1-m6-l1',
  title: 'Imprevistos de viaje',
  description: 'Reclama, resuelve problemas y sobrevive a un vuelo perdido.',
  vocab: [
    {
      id: 'v-reclamar',
      es: 'reclamar / la queja',
      forms: [
        {
          text: 'reclamar / a reclamação',
          variant: 'both',
          ipa: { br: 'ʁe.klaˈmaʁ / ʁe.kla.maˈsɐ̃w̃', pt: 'ʁə.klɐˈmaɾ / ʁə.klɐ.mɐˈsɐ̃w̃' },
          note: 'En Portugal existe el «livro de reclamações», obligatorio en todo comercio.',
        },
      ],
    },
    {
      id: 'v-perder-voo',
      es: 'perder el vuelo',
      forms: [
        { text: 'perder o voo', variant: 'both', ipa: { br: 'peʁˈdeʁ u ˈvo.u', pt: 'pəɾˈdeɾ u ˈvo.u' } },
      ],
    },
    {
      id: 'v-atraso',
      es: 'retraso / retrasado',
      forms: [
        {
          text: 'atraso / atrasado',
          variant: 'both',
          ipa: { br: 'aˈtɾa.zu / a.tɾaˈza.du', pt: 'ɐˈtɾa.zu / ɐ.tɾɐˈza.ðu' },
        },
      ],
    },
    {
      id: 'v-greve',
      es: 'huelga',
      forms: [{ text: 'greve', variant: 'both', ipa: { br: 'ˈgɾɛ.vi', pt: 'ˈgɾɛ.və' } }],
    },
    {
      id: 'v-bagagem',
      es: 'equipaje extraviado',
      forms: [
        {
          text: 'bagagem extraviada',
          variant: 'both',
          ipa: { br: 'baˈga.ʒẽj̃ es.tɾa.viˈa.dɐ', pt: 'bɐˈga.ʒɐ̃j̃ əʃ.tɾɐ.viˈa.ðɐ' },
        },
      ],
    },
    {
      id: 'v-seguro',
      es: 'seguro (de viaje)',
      forms: [
        { text: 'seguro de viagem', variant: 'both', ipa: { br: 'seˈgu.ɾu dʒi viˈa.ʒẽj̃', pt: 'səˈgu.ɾu də viˈa.ʒɐ̃j̃' } },
      ],
    },
    {
      id: 'v-reembolso',
      es: 'reembolso / indemnización',
      forms: [
        {
          text: 'reembolso / indenização',
          variant: 'br',
          ipa: { br: 'ʁe.ẽˈbow.su / ĩ.de.ni.zaˈsɐ̃w̃' },
        },
        {
          text: 'reembolso / indemnização',
          variant: 'pt',
          ipa: { pt: 'ʁe.ẽˈbol.su / ĩ.dɛm.ni.zɐˈsɐ̃w̃' },
          note: 'Ojo a la letra extra: indenização 🇧🇷 / indemnização 🇵🇹.',
        },
      ],
    },
    {
      id: 'v-resolver-prob',
      es: 'resolver el problema',
      forms: [
        {
          text: 'resolver o problema',
          variant: 'both',
          ipa: { br: 'ʁe.zowˈveʁ u pɾoˈble.mɐ', pt: 'ʁə.zolˈveɾ u pɾuˈβle.mɐ' },
        },
      ],
    },
    {
      id: 'v-atendimento',
      es: 'atención al cliente',
      forms: [
        { text: 'atendimento ao cliente', variant: 'br', ipa: { br: 'a.tẽ.dʒiˈmẽ.tu aw kliˈẽ.tʃi' } },
        { text: 'apoio ao cliente', variant: 'pt', ipa: { pt: 'ɐˈpoj.u aw kliˈẽ.tə' } },
      ],
    },
    {
      id: 'v-fila',
      es: 'fila / cola',
      forms: [
        { text: 'fila', variant: 'br', ipa: { br: 'ˈfi.lɐ' } },
        { text: 'fila / bicha', variant: 'pt', ipa: { pt: 'ˈfi.lɐ' }, note: '«Bicha» para cola es del Portugal más tradicional; hoy domina «fila». En Brasil «bicha» es un insulto: ¡no la uses allí!' },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-pedir-indirecto',
      title: 'Pedir que + subjuntivo',
      explanation:
        'Para pedir acciones a otros: pedir/exigir/sugerir que + subjuntivo — «Peço que verifiquem a minha reserva» (pido que verifiquen mi reserva).\n' +
        'Más suave con gustaría: «Gostaria que me informassem…» (con imperfecto de subjuntivo).\n' +
        'Fórmulas de reclamación útiles: «Isto é inadmissível!» (¡esto es inadmisible!), «Exijo uma solução», «Com quem posso falar?».',
      examples: [
        { both: 'Peço que resolvam o problema hoje.', es: 'Pido que resuelvan el problema hoy.' },
        { both: 'Gostaria que me devolvessem o dinheiro.', es: 'Me gustaría que me devolvieran el dinero.' },
      ],
    },
    {
      id: 'g-imperativo-formal',
      title: 'El imperativo completo',
      explanation:
        'Informal tu 🇵🇹 (y BR coloquial): fala!, come!, parte! — es el presente sin la s. Negativo con subjuntivo: não fales!\n' +
        'Con você/o senhor (formal en ambos): use el subjuntivo: fale!, coma!, desculpe!, «Aguarde um momento» (espere un momento).\n' +
        'En la práctica brasileña se mezclan: «Fala com ela!» y «Fale com ela!» conviven; en Portugal la distinción tu/você se respeta.',
      examples: [
        { br: 'Me ajuda, por favor!', pt: 'Ajuda-me, por favor!', es: '¡Ayúdame, por favor! (informal)' },
        { both: 'Aguarde um momento, por favor.', es: 'Espere un momento, por favor. (formal)' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-voo',
      title: 'voo: dos oes seguidas',
      explanation: 'voo se pronuncia con dos sílabas: VÔ-u. Sin nasal (no confundir con vão).',
      samples: [
        { text: 'o voo está atrasado', variant: 'br', ipa: 'u ˈvo.u esˈta a.tɾaˈza.du' },
      ],
    },
    {
      id: 'p-gem',
      title: 'bagagem, viagem: la terminación -gem',
      explanation: '-gem es ʒ + nasal: bagagem = ba-gá-llẽi 🇧🇷 / ba-gá-llãi 🇵🇹. Todas son femeninas.',
      samples: [
        { text: 'bagagem', variant: 'br', ipa: 'baˈga.ʒẽj̃', hint: 'ba-gá-llẽi' },
        { text: 'bagagem', variant: 'pt', ipa: 'bɐˈga.ʒɐ̃j̃', hint: 'ba-gá-llãi' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'O meu voo foi cancelado por causa da greve.', variant: 'pt' },
      question: '¿Por qué fue cancelado el vuelo?',
      options: ['Por una huelga', 'Por el clima', 'Por overbooking', 'Por avería'],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: 'Prezados senhores,\nMinha bagagem foi extraviada no voo de ontem. Peço que resolvam o problema com urgência e solicito a indenização prevista.',
      textVariant: 'br',
      question: '¿Qué pide quien escribe?',
      options: [
        'Que resuelvan lo del equipaje y lo indemnicen',
        'Cambiar de asiento',
        'Un vuelo más barato',
      ],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Peço que ___ o problema hoje.',
      accepted: ['resolvam'],
      variant: 'both',
      translation: 'Pido que resuelvan el problema hoy.',
      hint: 'resolver, subjuntivo de vocês',
    },
    {
      id: 'e4',
      type: 'translate',
      skill: 'writing',
      es: 'el vuelo está retrasado',
      accepted: [{ text: 'o voo está atrasado', variant: 'both' }],
    },
    {
      id: 'e5',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'Quero fazer uma reclamação', variant: 'pt' },
    },
    {
      id: 'e6',
      type: 'order-words',
      skill: 'writing',
      words: ['Aguarde', 'um', 'momento,', 'por', 'favor'],
      answer: 'Aguarde um momento, por favor',
      variant: 'both',
      translation: 'Espere un momento, por favor',
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Perdi o meu voo, pode me ajudar?', variant: 'br' },
      translation: 'Perdí mi vuelo, ¿puede ayudarme?',
    },
  ],
};

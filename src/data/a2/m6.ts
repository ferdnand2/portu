import type { Lesson } from '../../domain/content';

/** A2 · Módulo 6: El clima y la casa. */
export const a2m6: Lesson = {
  id: 'a2-m6-l1',
  title: 'El clima y la casa',
  description: 'Habla del tiempo que hace y describe dónde vives.',
  vocab: [
    {
      id: 'v-chuva',
      es: 'lluvia / llover',
      forms: [
        {
          text: 'chuva / chover',
          variant: 'both',
          ipa: { br: 'ˈʃu.vɐ / ʃoˈveʁ', pt: 'ˈʃu.vɐ / ʃuˈveɾ' },
        },
      ],
    },
    {
      id: 'v-sol',
      es: 'sol / calor / frío',
      forms: [
        {
          text: 'sol / calor / frio',
          variant: 'both',
          ipa: { br: 'sɔw / kaˈloʁ / ˈfɾi.u', pt: 'sɔl / kɐˈloɾ / ˈfɾi.u' },
        },
      ],
    },
    {
      id: 'v-vento',
      es: 'viento / nube',
      forms: [
        { text: 'vento / nuvem', variant: 'both', ipa: { br: 'ˈvẽ.tu / ˈnu.vẽj̃', pt: 'ˈvẽ.tu / ˈnu.vɐ̃j̃' } },
      ],
    },
    {
      id: 'v-apartamento',
      es: 'apartamento / casa',
      forms: [
        {
          text: 'apartamento / casa',
          variant: 'both',
          ipa: { br: 'a.paʁ.taˈmẽ.tu / ˈka.zɐ', pt: 'ɐ.pɐɾ.tɐˈmẽ.tu / ˈka.zɐ' },
        },
      ],
    },
    {
      id: 'v-quarto',
      es: 'habitación / sala / cocina',
      forms: [
        {
          text: 'quarto / sala / cozinha',
          variant: 'both',
          ipa: { br: 'ˈkwaʁ.tu / ˈsa.lɐ / koˈzi.ɲɐ', pt: 'ˈkwaɾ.tu / ˈsa.lɐ / kuˈzi.ɲɐ' },
        },
      ],
    },
    {
      id: 'v-banheiro',
      es: 'baño',
      forms: [
        { text: 'banheiro', variant: 'br', ipa: { br: 'bɐ̃ˈɲej.ɾu' } },
        { text: 'casa de banho', variant: 'pt', ipa: { pt: 'ˈka.zɐ də ˈbɐ̃.ɲu' } },
      ],
      example: {
        br: 'Onde fica o banheiro?',
        pt: 'Onde fica a casa de banho?',
        es: '¿Dónde está el baño?',
      },
    },
    {
      id: 'v-geladeira',
      es: 'nevera / refrigerador',
      forms: [
        { text: 'geladeira', variant: 'br', ipa: { br: 'ʒe.laˈdej.ɾɐ' } },
        { text: 'frigorífico', variant: 'pt', ipa: { pt: 'fɾi.guˈɾi.fi.ku' } },
      ],
    },
    {
      id: 'v-fogao',
      es: 'cocina (el aparato) / horno',
      forms: [
        {
          text: 'fogão / forno',
          variant: 'both',
          ipa: { br: 'foˈgɐ̃w̃ / ˈfoʁ.nu', pt: 'fuˈgɐ̃w̃ / ˈfoɾ.nu' },
        },
      ],
    },
    {
      id: 'v-janela',
      es: 'ventana / puerta',
      forms: [
        {
          text: 'janela / porta',
          variant: 'both',
          ipa: { br: 'ʒaˈnɛ.lɐ / ˈpɔʁ.tɐ', pt: 'ʒɐˈnɛ.lɐ / ˈpɔɾ.tɐ' },
        },
      ],
    },
    {
      id: 'v-aluguel',
      es: 'alquiler',
      forms: [
        { text: 'aluguel', variant: 'br', ipa: { br: 'a.luˈgɛw' } },
        {
          text: 'renda',
          variant: 'pt',
          ipa: { pt: 'ˈʁẽ.dɐ' },
          note: 'En Portugal «renda» es el alquiler mensual; el verbo es «arrendar».',
        },
      ],
    },
    {
      id: 'v-previsao',
      es: 'pronóstico del tiempo',
      forms: [
        {
          text: 'previsão do tempo',
          variant: 'both',
          ipa: { br: 'pɾe.viˈzɐ̃w̃ du ˈtẽ.pu', pt: 'pɾə.viˈzɐ̃w̃ du ˈtẽ.pu' },
          note: '«Tempo» es a la vez «tiempo» (clima) y «tiempo» (horas), como en español.',
        },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-tiempo',
      title: 'Hablar del clima',
      explanation:
        'Con fazer y estar, como en español: «Faz calor» / «Está calor» (hace calor), «Faz frio», «Está sol», «Está nublado».\n' +
        'Para la lluvia reaparece la divergencia del gerundio: 🇧🇷 «Está chovendo» / 🇵🇹 «Está a chover».\n' +
        'Pronóstico: «Amanhã vai chover», «Vai fazer 30 graus».',
      examples: [
        { br: 'Está chovendo muito hoje.', pt: 'Está a chover muito hoje.', es: 'Está lloviendo mucho hoy.' },
        { both: 'No verão faz muito calor em Lisboa.', es: 'En verano hace mucho calor en Lisboa.' },
      ],
    },
    {
      id: 'g-haver-ter',
      title: '⭐ «Hay»: há en Portugal, tem en Brasil',
      explanation:
        'El «hay» estándar es «há» (de haver): «Há dois quartos» (hay dos cuartos).\n' +
        'Pero el Brasil hablado usa TER impersonal: «Tem dois quartos», «Tem farmácia por aqui?» (¿hay farmacia por aquí?). Es marca registrada del portugués brasileño coloquial.\n' +
        'En Portugal, «tem» impersonal suena mal: usa siempre «há».\n' +
        'Bonus: «há» también significa «hace» temporal: «Moro aqui há dois anos» (vivo aquí desde hace dos años).',
      examples: [
        { br: 'Tem um supermercado na esquina.', pt: 'Há um supermercado na esquina.', es: 'Hay un supermercado en la esquina.' },
        { both: 'Trabalho aqui há três anos.', es: 'Trabajo aquí desde hace tres años.' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-ch-chuva',
      title: 'chuva, chover: repaso de la ch',
      explanation: 'La ch siempre es «sh»: chuva = shuva. Y «chove» rima con «nove».',
      samples: [
        { text: 'chuva', variant: 'both', ipa: 'ˈʃu.vɐ', hint: 'shú-va' },
      ],
    },
    {
      id: 'p-ao-atono',
      title: 'fogão, verão: -ão tónico vs -am átono',
      explanation:
        'Cuando -ão lleva el acento (fogão, verão) suena fuerte y claro; recuerda que la terminación verbal -am es el mismo diptongo pero átono y breve (falam).',
      samples: [
        { text: 'verão', variant: 'both', ipa: 'veˈɾɐ̃w̃', hint: 've-rãu (tónico)' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Está a chover muito hoje.', variant: 'pt' },
      question: '¿Qué estructura acabas de oír (acento portugués)?',
      options: [
        'estar a + infinitivo: está lloviendo',
        'gerundio brasileño',
        'futuro: va a llover',
        'pasado: llovió',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: 'ALUGA-SE apartamento no centro: dois quartos, sala, cozinha e banheiro. Perto do metrô. R$ 1.800/mês.',
      textVariant: 'br',
      question: '¿Cuántas habitaciones (dormitorios) tiene?',
      options: ['Dos', 'Una', 'Tres'],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: '___ um supermercado na esquina. (formal / Portugal)',
      accepted: ['há'],
      variant: 'both',
      translation: 'Hay un supermercado en la esquina.',
      hint: 'haver impersonal',
    },
    {
      id: 'e4',
      type: 'translate',
      skill: 'writing',
      es: 'el baño',
      accepted: [
        { text: 'o banheiro', variant: 'br' },
        { text: 'a casa de banho', variant: 'pt' },
      ],
    },
    {
      id: 'e5',
      type: 'translate',
      skill: 'writing',
      es: 'la nevera',
      accepted: [
        { text: 'a geladeira', variant: 'br' },
        { text: 'o frigorífico', variant: 'pt' },
      ],
    },
    {
      id: 'e6',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'Amanhã vai chover', variant: 'br' },
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Hoje faz muito calor.', variant: 'br' },
      translation: 'Hoy hace mucho calor.',
    },
  ],
};

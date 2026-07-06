import type { Lesson } from '../../domain/content';

/** B1 · Módulo 1: Opiniones y subjuntivo presente. */
export const b1m1: Lesson = {
  id: 'b1-m1-l1',
  title: 'Opinar: el subjuntivo presente',
  description: 'Da tu opinión, expresa deseos y dudas con el subjuntivo.',
  vocab: [
    {
      id: 'v-achar',
      es: 'creer / opinar',
      forms: [
        {
          text: 'achar',
          variant: 'both',
          ipa: { br: 'aˈʃaʁ', pt: 'ɐˈʃaɾ' },
          note: 'El verbo de opinión número uno: «Acho que sim» = creo que sí.',
        },
      ],
      example: { both: 'Acho que ele tem razão.', es: 'Creo que él tiene razón.' },
    },
    {
      id: 'v-opiniao',
      es: 'en mi opinión',
      forms: [
        {
          text: 'na minha opinião',
          variant: 'both',
          ipa: { br: 'na ˈmi.ɲɐ o.pi.niˈɐ̃w̃', pt: 'nɐ ˈmi.ɲɐ ɔ.pi.niˈɐ̃w̃' },
        },
      ],
    },
    {
      id: 'v-concordar',
      es: 'estar de acuerdo / en desacuerdo',
      forms: [
        {
          text: 'concordar / discordar',
          variant: 'both',
          ipa: { br: 'kõ.koʁˈdaʁ / dʒis.koʁˈdaʁ', pt: 'kõ.kuɾˈdaɾ / diʃ.kuɾˈdaɾ' },
          note: 'Con «com»: «Concordo com você» 🇧🇷 / «Concordo contigo» 🇵🇹.',
        },
      ],
    },
    {
      id: 'v-talvez',
      es: 'tal vez / quizás',
      forms: [
        {
          text: 'talvez',
          variant: 'both',
          ipa: { br: 'tawˈves', pt: 'talˈveʃ' },
          note: 'Dispara el subjuntivo: «Talvez ele venha» = quizás venga.',
        },
      ],
    },
    {
      id: 'v-duvidar',
      es: 'dudar / la duda',
      forms: [
        {
          text: 'duvidar / a dúvida',
          variant: 'both',
          ipa: { br: 'du.viˈdaʁ / ˈdu.vi.dɐ', pt: 'du.viˈdaɾ / ˈdu.vi.ðɐ' },
        },
      ],
    },
    {
      id: 'v-esperar',
      es: 'esperar (desear)',
      forms: [
        { text: 'esperar', variant: 'both', ipa: { br: 'es.peˈɾaʁ', pt: 'əʃ.pəˈɾaɾ' } },
      ],
      example: { br: 'Espero que você possa vir.', pt: 'Espero que possas vir.', es: 'Espero que puedas venir.' },
    },
    {
      id: 'v-certeza',
      es: 'estar seguro',
      forms: [
        {
          text: 'ter certeza',
          variant: 'br',
          ipa: { br: 'teʁ seʁˈte.zɐ' },
          note: '«Tenho certeza» = estoy seguro.',
        },
        {
          text: 'ter a certeza',
          variant: 'pt',
          ipa: { pt: 'teɾ ɐ səɾˈte.zɐ' },
          note: 'Portugal añade el artículo: «Tenho a certeza».',
        },
      ],
    },
    {
      id: 'v-sugerir',
      es: 'sugerir / proponer',
      forms: [
        {
          text: 'sugerir / propor',
          variant: 'both',
          ipa: { br: 'su.ʒeˈɾiʁ / pɾoˈpoʁ', pt: 'su.ʒəˈɾiɾ / pɾuˈpoɾ' },
        },
      ],
    },
    {
      id: 'v-embora',
      es: 'aunque',
      forms: [
        {
          text: 'embora',
          variant: 'both',
          ipa: { br: 'ẽˈbɔ.ɾɐ' },
          note: 'Siempre con subjuntivo: «Embora seja difícil» (aunque sea difícil). Ojo: «ir embora» es otra cosa: irse.',
        },
      ],
    },
    {
      id: 'v-tomara',
      es: 'ojalá',
      forms: [
        {
          text: 'Tomara que…',
          variant: 'br',
          ipa: { br: 'toˈma.ɾɐ ki' },
          note: '«Tomara que não chova!» = ¡ojalá no llueva!',
        },
        {
          text: 'Oxalá…',
          variant: 'pt',
          ipa: { pt: 'ɔ.ʃɐˈla' },
          note: 'El «ojalá» portugués, del mismo origen árabe.',
        },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-subjuntivo',
      title: 'El subjuntivo presente',
      explanation:
        'Se forma desde la 1ª persona del presente cambiando la vocal (como en español): falo → fale, como → coma, parto → parta. Con tu 🇵🇹: fales, comas.\n' +
        'Irregulares clave: ser → seja · estar → esteja · ir → vá · dar → dê · saber → saiba · querer → queira · poder → possa · fazer → faça · ter → tenha · vir → venha.\n' +
        'Disparadores: querer que, esperar que, duvidar que, é importante/bom/possível que, talvez, embora, para que.',
      examples: [
        { br: 'Quero que você venha à festa.', pt: 'Quero que venhas à festa.', es: 'Quiero que vengas a la fiesta.' },
        { both: 'É importante que todos participem.', es: 'Es importante que todos participen.' },
        { both: 'Talvez eu vá ao Brasil este ano.', es: 'Tal vez vaya a Brasil este año.' },
      ],
    },
    {
      id: 'g-indicativo-vs',
      title: 'Achar que + indicativo, duvidar que + subjuntivo',
      explanation:
        'La misma lógica del español: afirmación → indicativo, duda/deseo/emoción → subjuntivo.\n' +
        '«Acho que ele VEM» (creo que viene: indicativo) vs «Duvido que ele VENHA» (dudo que venga: subjuntivo).\n' +
        'Y en negativo se invierte: «Não acho que ele venha».',
      examples: [
        { both: 'Acho que vai chover.', es: 'Creo que va a llover.' },
        { both: 'Duvido que ele chegue a tempo.', es: 'Dudo que llegue a tiempo.' },
        { both: 'Não acho que seja uma boa ideia.', es: 'No creo que sea una buena idea.' },
      ],
      variantNote: 'La gramática del subjuntivo es idéntica en Brasil y Portugal; solo cambia la persona (você/tu) con la que conjugas.',
    },
  ],
  pronunciation: [
    {
      id: 'p-seja-faca',
      title: 'seja, faça: consonantes suaves',
      explanation:
        'seja lleva la ʒ (y argentina) y faça la ç = /s/. «Faça» con ch o con z delata al principiante.',
      samples: [
        { text: 'seja', variant: 'both', ipa: 'ˈse.ʒɐ', hint: 'sé-lla (ll argentina)' },
        { text: 'faça', variant: 'both', ipa: 'ˈfa.sɐ', hint: 'fá-sa' },
      ],
    },
    {
      id: 'p-venha-tenha',
      title: 'venha, tenha: la nh en el subjuntivo',
      explanation: 'Los subjuntivos de vir y ter llevan ñ: venha (vẽña), tenha (tẽña).',
      samples: [
        { text: 'venha', variant: 'both', ipa: 'ˈvẽ.ɲɐ', hint: 'vẽ-ña' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Acho que amanhã vai chover.', variant: 'pt' },
      question: '¿Qué expresa esta persona?',
      options: [
        'Una opinión sobre el tiempo',
        'Una orden',
        'Un deseo de que llueva',
        'Una queja',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: 'Na minha opinião, aprender as duas variantes ao mesmo tempo é melhor, embora seja mais difícil no início.',
      textVariant: 'both',
      question: '¿Por qué «seja» está en subjuntivo?',
      options: [
        'Porque sigue a «embora» (aunque)',
        'Porque es una pregunta',
        'Porque es pasado',
      ],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Espero que você ___ vir à festa.',
      accepted: ['possa'],
      variant: 'br',
      translation: 'Espero que puedas venir a la fiesta.',
      hint: 'poder, subjuntivo',
    },
    {
      id: 'e4',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Duvido que ele ___ a tempo.',
      accepted: ['chegue'],
      variant: 'both',
      translation: 'Dudo que llegue a tiempo.',
      hint: 'chegar, subjuntivo',
    },
    {
      id: 'e5',
      type: 'translate',
      skill: 'writing',
      es: 'ojalá no llueva',
      accepted: [
        { text: 'tomara que não chova', variant: 'br' },
        { text: 'oxalá não chova', variant: 'pt' },
      ],
    },
    {
      id: 'e6',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'Talvez eu vá ao Brasil', variant: 'br' },
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Espero que tudo corra bem.', variant: 'pt' },
      translation: 'Espero que todo salga bien.',
    },
  ],
};

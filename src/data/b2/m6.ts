import type { Lesson } from '../../domain/content';

/** B2 · Módulo 6: Voz pasiva y estilo indirecto avanzado. */
export const b2m6: Lesson = {
  id: 'b2-m6-l1',
  title: 'Vende-se: pasivas y estilo indirecto',
  description: 'El «se» impersonal, la pasiva completa y transformar discurso ajeno con soltura.',
  vocab: [
    {
      id: 'v-vende-se',
      es: 'se vende / se alquila',
      forms: [
        {
          text: 'vende-se / aluga-se',
          variant: 'br',
          ipa: { br: 'ˈvẽ.dʒi si / aˈlu.gɐ si' },
        },
        {
          text: 'vende-se / arrenda-se',
          variant: 'pt',
          ipa: { pt: 'ˈvẽ.də sə / ɐˈʁẽ.dɐ sə' },
        },
      ],
    },
    {
      id: 'v-fala-se',
      es: 'se habla…',
      forms: [
        {
          text: 'fala-se português',
          variant: 'both',
          ipa: { br: 'ˈfa.lɐ si poʁ.tuˈges', pt: 'ˈfa.lɐ sə puɾ.tuˈgeʃ' },
        },
      ],
    },
    {
      id: 'v-diz-se',
      es: 'dicen que… / se dice que…',
      forms: [
        {
          text: 'diz-se que…',
          variant: 'pt',
          ipa: { pt: 'ˈdiʃ sə kə' },
        },
        {
          text: 'dizem que…',
          variant: 'br',
          ipa: { br: 'ˈdʒi.zẽj̃ ki' },
          note: 'Brasil prefiere la 3ª plural: «Dizem que vai chover».',
        },
      ],
    },
    {
      id: 'v-anunciar',
      es: 'anunciar / comunicar',
      forms: [
        {
          text: 'anunciar / comunicar',
          variant: 'both',
          ipa: { br: 'a.nũ.siˈaʁ / ko.mu.niˈkaʁ', pt: 'ɐ.nũ.siˈaɾ / ku.mu.niˈkaɾ' },
        },
      ],
    },
    {
      id: 'v-garantir',
      es: 'asegurar / garantizar',
      forms: [
        { text: 'garantir / assegurar', variant: 'both', ipa: { br: 'ga.ɾɐ̃ˈtʃiʁ', pt: 'gɐ.ɾɐ̃ˈtiɾ' } },
      ],
      example: { both: 'Ele garantiu que viria.', es: 'Aseguró que vendría.' },
    },
    {
      id: 'v-negar',
      es: 'negar / admitir',
      forms: [
        { text: 'negar / admitir', variant: 'both', ipa: { br: 'neˈgaʁ / adʒiˈmi.tʃiʁ', pt: 'nəˈgaɾ / ɐd.miˈtiɾ' } },
      ],
    },
    {
      id: 'v-boato',
      es: 'rumor',
      forms: [
        { text: 'boato', variant: 'both', ipa: { br: 'buˈa.tu' } },
      ],
      example: { both: 'Não passa de um boato.', es: 'No es más que un rumor.' },
    },
    {
      id: 'v-fonte',
      es: 'fuente (de información)',
      forms: [
        { text: 'fonte', variant: 'both', ipa: { br: 'ˈfõ.tʃi', pt: 'ˈfõ.tə' } },
      ],
      example: { both: 'Segundo fontes oficiais…', es: 'Según fuentes oficiales…' },
    },
    {
      id: 'v-averiguar',
      es: 'comprobar / aclarar',
      forms: [
        {
          text: 'verificar / esclarecer',
          variant: 'both',
          ipa: { br: 've.ɾi.fiˈkaʁ / es.kla.ɾeˈseʁ', pt: 'və.ɾi.fiˈkaɾ / əʃ.klɐ.ɾəˈseɾ' },
        },
        {
          text: 'tirar a limpo',
          variant: 'br',
          ipa: { br: 'tʃiˈɾaʁ ɐ ˈlĩ.pu' },
          note: '«Vamos tirar isso a limpo» = vamos a aclarar esto.',
        },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-se-pasivo',
      title: 'El se pasivo e impersonal',
      explanation:
        'Como en español: «Vende-se esta casa» (se vende esta casa), «Fala-se português» (se habla portugués).\n' +
        'Norma culta: el verbo concuerda — «Vendem-se casas». En el habla brasileña se oye el singular generalizado («Vende-se casas»), y además el pronombre salta delante como siempre: «Se vende casas» (coloquial).\n' +
        'Impersonal puro con verbos intransitivos: «Vive-se bem no Porto» (se vive bien en Oporto).',
      examples: [
        { both: 'Vendem-se apartamentos no centro.', es: 'Se venden apartamentos en el centro.' },
        { both: 'Vive-se bem nesta cidade.', es: 'Se vive bien en esta ciudad.' },
        { pt: 'Diz-se que o fado nasceu em Alfama.', br: 'Dizem que o samba nasceu no Rio.', es: 'Se dice que… / Dicen que…' },
      ],
    },
    {
      id: 'g-indirecto-avanzado',
      title: 'Estilo indirecto: el cuadro completo',
      explanation:
        'Las transformaciones al reportar:\n' +
        'presente → imperfeito: «Estou cansado» → disse que estava cansado\n' +
        'perfeito → mais-que-perfeito: «Fui ao Porto» → disse que tinha ido\n' +
        'futuro → condicional: «Irei amanhã» → disse que iria no dia seguinte\n' +
        'imperativo → subjuntivo/infinitivo: «Espera!» → pediu que esperasse / pediu para esperar\n' +
        'Y los deícticos: hoje → naquele dia, amanhã → no dia seguinte, aqui → ali/lá.',
      examples: [
        { both: 'Ela garantiu que chegaria a tempo.', es: 'Aseguró que llegaría a tiempo.' },
        { both: 'Pediram-nos que esperássemos lá fora.', es: 'Nos pidieron que esperáramos afuera.' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-vende-se',
      title: 'vende-se: el se átono final',
      explanation: 'El «se» enclítico es una sílaba fantasma: VEN-de-si 🇧🇷 / VEND-s’ 🇵🇹. En los carteles lo verás escrito con guion.',
      samples: [
        { text: 'vende-se', variant: 'br', ipa: 'ˈvẽ.dʒi si', hint: 'vẽ-dyi-si' },
        { text: 'vende-se', variant: 'pt', ipa: 'ˈvẽ.də sə', hint: 'vẽd-s’' },
      ],
    },
    {
      id: 'p-boato',
      title: 'boato: el hiato o-a',
      explanation: 'bu-Á-tu, tres sílabas con hiato: no «buato» de dos.',
      samples: [{ text: 'boato', variant: 'both', ipa: 'buˈa.tu', hint: 'bu-á-tu' }],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Ela garantiu que chegaria a tempo.', variant: 'br' },
      question: '¿Qué se reporta?',
      options: [
        'Que ella aseguró que llegaría a tiempo',
        'Que ella llegó tarde',
        'Que ella no vendrá',
        'Que ella pidió esperar',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: 'ARRENDA-SE\nApartamento T2 em Alfama, com vista para o rio.\nContactar depois das 18h.',
      textVariant: 'pt',
      question: '¿Qué anuncia el cartel?',
      options: [
        'Se alquila un apartamento en Lisboa',
        'Se vende una casa en Oporto',
        'Se busca compañero de piso',
      ],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: '___ -se apartamentos no centro.',
      accepted: ['vendem', 'vende'],
      variant: 'both',
      translation: 'Se venden apartamentos en el centro.',
      hint: 'vender, con se pasivo',
    },
    {
      id: 'e4',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Ele disse que ___ cansado.',
      accepted: ['estava'],
      variant: 'both',
      translation: 'Dijo que estaba cansado.',
      hint: 'estilo indirecto',
    },
    {
      id: 'e5',
      type: 'translate',
      skill: 'writing',
      es: 'dicen que va a llover',
      accepted: [
        { text: 'dizem que vai chover', variant: 'br' },
        { text: 'diz-se que vai chover', variant: 'pt' },
      ],
    },
    {
      id: 'e6',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'Não passa de um boato', variant: 'br' },
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Vamos tirar isso a limpo.', variant: 'br' },
      translation: 'Vamos a aclarar esto.',
    },
  ],
};

import type { Lesson } from '../../domain/content';

/** B2 · Módulo 5: Cultura de ambos países. */
export const b2m5: Lesson = {
  id: 'b2-m5-l1',
  title: 'Cultura: -inho, -ão y saudade',
  description: 'Diminutivos, aumentativos y el vocabulario cultural de cada país.',
  vocab: [
    {
      id: 'v-saudade',
      es: 'nostalgia / extrañar',
      forms: [
        {
          text: 'saudade',
          variant: 'both',
          ipa: { br: 'sawˈda.dʒi', pt: 'sawˈða.ðə' },
          note: 'La palabra insignia del idioma. «Estou com saudade(s) de você» 🇧🇷 / «Tenho saudades tuas» 🇵🇹 = te extraño.',
        },
      ],
    },
    {
      id: 'v-cafezinho',
      es: 'cafecito',
      forms: [
        {
          text: 'cafezinho',
          variant: 'br',
          ipa: { br: 'ka.fɛˈzi.ɲu' },
          note: 'Institución brasileña: ofrecer un cafezinho es hospitalidad básica.',
        },
        {
          text: 'bica',
          variant: 'pt',
          ipa: { pt: 'ˈbi.kɐ' },
          note: 'En Lisboa, el expreso es «uma bica»; en Oporto, «um cimbalino».',
        },
      ],
    },
    {
      id: 'v-jeitinho',
      es: 'el «arreglito» brasileño',
      forms: [
        {
          text: 'jeitinho',
          variant: 'br',
          ipa: { br: 'ʒejˈtʃi.ɲu' },
          note: '«Dar um jeitinho»: resolver algo con creatividad informal. Concepto cultural clave de Brasil.',
        },
      ],
    },
    {
      id: 'v-desenrascar',
      es: 'apañárselas',
      forms: [
        {
          text: 'desenrascar-se',
          variant: 'pt',
          ipa: { pt: 'də.zẽ.ʁɐʃˈkaɾ sə' },
          note: 'El equivalente cultural portugués del jeitinho: salir de un apuro con lo que hay.',
        },
        {
          text: 'se virar',
          variant: 'br',
          ipa: { br: 'si viˈɾaʁ' },
          note: '«Eu me viro» = yo me las arreglo.',
        },
      ],
    },
    {
      id: 'v-festa-junina',
      es: 'fiestas típicas',
      forms: [
        {
          text: 'festa junina',
          variant: 'br',
          ipa: { br: 'ˈfɛs.tɐ ʒuˈni.nɐ' },
          note: 'Las fiestas de junio brasileñas (São João): fogatas, quadrilha y comida típica.',
        },
        {
          text: 'Santos Populares',
          variant: 'pt',
          ipa: { pt: 'ˈsɐ̃.tuʃ pu.puˈla.ɾəʃ' },
          note: 'Junio en Portugal: Santo António en Lisboa, São João en Oporto, sardinas y manjericos.',
        },
      ],
    },
    {
      id: 'v-musica',
      es: 'músicas emblemáticas',
      forms: [
        { text: 'samba / bossa nova / forró', variant: 'br', ipa: { br: 'ˈsɐ̃.bɐ / ˈbɔ.sɐ ˈnɔ.vɐ / foˈʁɔ' } },
        { text: 'fado', variant: 'pt', ipa: { pt: 'ˈfa.ðu' }, note: 'Patrimonio de la humanidad; se escucha en silencio y se aplaude al final.' },
      ],
    },
    {
      id: 'v-comida-tipica',
      es: 'platos nacionales',
      forms: [
        { text: 'feijoada', variant: 'br', ipa: { br: 'fej.ʒuˈa.dɐ' }, note: 'El plato nacional brasileño, tradición de los sábados.' },
        { text: 'bacalhau', variant: 'pt', ipa: { pt: 'bɐ.kɐˈʎaw' }, note: 'Dicen que hay más de 365 recetas: una por día.' },
      ],
    },
    {
      id: 'v-legal-fixe-b2',
      es: 'coloquialismos de cada país',
      forms: [
        {
          text: 'beleza / valeu',
          variant: 'br',
          ipa: { br: 'beˈle.zɐ / vaˈlew' },
          note: '«Beleza?» = ¿todo bien?; «Valeu!» = ¡gracias/chao informal!',
        },
        {
          text: 'porreiro / obrigadinho',
          variant: 'pt',
          ipa: { pt: 'puˈʁɐj.ɾu / ɔ.bɾi.gɐˈdi.ɲu' },
          note: '«Porreiro» = genial (coloquial de Portugal).',
        },
      ],
    },
    {
      id: 'v-menino',
      es: 'niño / chico',
      forms: [
        { text: 'menino / garoto / moleque', variant: 'br', ipa: { br: 'meˈni.nu / gaˈɾo.tu / moˈlɛ.ki' } },
        { text: 'menino / miúdo / puto', variant: 'pt', ipa: { pt: 'məˈni.nu / ˈmju.ðu' }, note: '«Puto» en Portugal es simplemente «chaval» — ¡pero en Brasil es vulgar! Cuidado.' },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-diminutivos',
      title: '⭐ -inho: el diminutivo omnipresente',
      explanation:
        'El diminutivo -inho/-inha va mucho más allá del tamaño: suaviza («um minutinho»), muestra cariño («amorzinho»), intensifica («pertinho» = muy cerca, «rapidinho» = súper rápido) o ironiza.\n' +
        'Si la palabra termina en vocal tónica, nasal o consonante, se usa -zinho: café → cafezinho, mãe → mãezinha, flor → florzinha.\n' +
        'Brasil lo usa muchísimo más que Portugal; abusar de él es rasgo brasileño (encantador).\n' +
        'El aumentativo -ão también es expresivo: casarão (caserón), amigão (amigazo), y a veces despectivo o admirativo según el tono.',
      examples: [
        { br: 'Espera um minutinho, tá?', pt: 'Espera um minutinho, está bem?', es: 'Espera un minutito, ¿sí?' },
        { both: 'Moro pertinho da praia.', es: 'Vivo muy cerquita de la playa.' },
        { both: 'Que golaço!', es: '¡Qué golazo!' },
      ],
    },
    {
      id: 'g-saudade-gram',
      title: 'La gramática de la saudade',
      explanation:
        'Extrañar a alguien se dice con saudade y cada país tiene su fórmula:\n' +
        '🇧🇷 «estar com saudade de»: «Estou com saudade de você», «Que saudade da feijoada da minha mãe!»\n' +
        '🇵🇹 «ter saudades de» (a menudo plural): «Tenho saudades tuas», «Tenho saudades de Lisboa».\n' +
        'También existe el verbo directo: «sentir falta de» (ambos) y 🇧🇷 coloquial «sentir saudade».',
      examples: [
        { br: 'Estou com saudade de vocês!', pt: 'Tenho saudades vossas!', es: '¡Los extraño!' },
        { both: 'Sinto falta dos verões na Venezuela.', es: 'Echo de menos los veranos en Venezuela.' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-inho',
      title: '-inho: la ñ + o final',
      explanation: 'ĩ-ñu: cafezinho = ka-fe-ZÍ-ñu. La o final, como siempre, suena u.',
      samples: [
        { text: 'cafezinho', variant: 'br', ipa: 'ka.fɛˈzi.ɲu', hint: 'ka-fe-zí-ñu' },
        { text: 'obrigadinho', variant: 'pt', ipa: 'ɔ.bɾi.gɐˈdi.ɲu', hint: 'o-bri-ga-dí-ñu' },
      ],
    },
    {
      id: 'p-saudade',
      title: 'saudade: el diptongo au + d suaves',
      explanation: 'sau-DA-de: en Brasil termina en «dyi» (saudádyi); en Portugal las d se suavizan y la e final desaparece (saudád).',
      samples: [
        { text: 'saudade', variant: 'br', ipa: 'sawˈda.dʒi', hint: 'sau-dá-dyi' },
        { text: 'saudade', variant: 'pt', ipa: 'sawˈða.ðə', hint: 'sau-dád' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Estou com saudade de você!', variant: 'br' },
      question: '¿Qué te está diciendo esta persona?',
      options: ['Que te extraña', 'Que está cansada', 'Que está triste contigo', 'Que llega tarde'],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: '— Anda cá, miúdo! Queres provar o bacalhau da avó?\n— Quero, sim! E depois um pastelinho de nata?',
      textVariant: 'pt',
      question: '¿Dónde ocurre probablemente esta escena?',
      options: ['En Portugal (miúdo, bacalhau, pastel de nata)', 'En Brasil', 'Imposible saberlo'],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Espera um ___ , já venho!',
      accepted: ['minutinho', 'momentinho', 'pouquinho'],
      variant: 'both',
      translation: 'Espera un momentito, ¡ya vengo!',
      hint: 'diminutivo de minuto',
    },
    {
      id: 'e4',
      type: 'translate',
      skill: 'writing',
      es: 'te extraño',
      accepted: [
        { text: 'estou com saudade de você', variant: 'br' },
        { text: 'tenho saudades tuas', variant: 'pt' },
        { text: 'sinto a tua falta', variant: 'pt' },
      ],
    },
    {
      id: 'e5',
      type: 'translate',
      skill: 'writing',
      es: 'muy cerquita',
      accepted: [{ text: 'pertinho', variant: 'both' }],
    },
    {
      id: 'e6',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'Vamos tomar um cafezinho?', variant: 'br' },
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Tenho saudades de Lisboa.', variant: 'pt' },
      translation: 'Extraño Lisboa.',
    },
  ],
};

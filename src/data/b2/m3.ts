import type { Lesson } from '../../domain/content';

/** B2 · Módulo 3: Argumentar y debatir. */
export const b2m3: Lesson = {
  id: 'b2-m3-l1',
  title: 'Argumentar y debatir',
  description: 'Conectores de nivel alto para defender ideas por escrito y en voz alta.',
  vocab: [
    {
      id: 'v-no-entanto',
      es: 'sin embargo',
      forms: [
        {
          text: 'no entanto / contudo',
          variant: 'both',
          ipa: { br: 'nu ẽˈtɐ̃.tu / kõˈtu.du', pt: 'nu ẽˈtɐ̃.tu / kõˈtu.ðu' },
        },
      ],
    },
    {
      id: 'v-alem-disso',
      es: 'además',
      forms: [
        {
          text: 'além disso',
          variant: 'both',
          ipa: { br: 'aˈlẽj̃ ˈdʒi.su', pt: 'ɐˈlɐ̃j̃ ˈdi.su' },
        },
      ],
    },
    {
      id: 'v-por-um-lado',
      es: 'por un lado… por otro…',
      forms: [
        {
          text: 'por um lado… por outro…',
          variant: 'both',
          ipa: { br: 'poʁ ũ ˈla.du puʁ ˈo.tɾu', pt: 'puɾ ũ ˈla.ðu puɾ ˈo.tɾu' },
        },
      ],
    },
    {
      id: 'v-alias',
      es: 'de hecho / es más',
      forms: [
        {
          text: 'aliás',
          variant: 'both',
          ipa: { br: 'aliˈas', pt: 'ɐˈljaʃ' },
          note: 'Comodín culto: corrige o refuerza. «Aliás, foi ele quem começou».',
        },
      ],
    },
    {
      id: 'v-embora-b2',
      es: 'aunque (+ subjuntivo)',
      forms: [
        { text: 'embora', variant: 'both', ipa: { br: 'ẽˈbɔ.ɾɐ' } },
      ],
      example: { both: 'Embora seja caro, vale a pena.', es: 'Aunque sea caro, vale la pena.' },
    },
    {
      id: 'v-apesar-b2',
      es: 'a pesar de',
      forms: [
        { text: 'apesar de', variant: 'both', ipa: { br: 'a.peˈzaʁ dʒi', pt: 'ɐ.pəˈzaɾ də' } },
      ],
    },
    {
      id: 'v-ou-seja',
      es: 'o sea / es decir',
      forms: [
        { text: 'ou seja', variant: 'both', ipa: { br: 'ow ˈse.ʒɐ', pt: 'o ˈsɐ.ʒɐ' } },
      ],
    },
    {
      id: 'v-segundo',
      es: 'según',
      forms: [
        { text: 'segundo / de acordo com', variant: 'both', ipa: { br: 'seˈgũ.du', pt: 'səˈgũ.du' } },
      ],
      example: { both: 'Segundo o estudo, a cidade cresceu 10%.', es: 'Según el estudio, la ciudad creció un 10 %.' },
    },
    {
      id: 'v-defender',
      es: 'defender / sostener (una idea)',
      forms: [
        {
          text: 'defender / afirmar',
          variant: 'both',
          ipa: { br: 'de.fẽˈdeʁ / a.fiʁˈmaʁ', pt: 'də.fẽˈdeɾ / ɐ.fiɾˈmaɾ' },
        },
      ],
    },
    {
      id: 'v-pois',
      es: 'pues / ya que',
      forms: [
        {
          text: 'pois',
          variant: 'both',
          ipa: { br: 'pojs', pt: 'pojʃ' },
          note: '⭐ En Portugal, «pois» solo también es el «ajá, claro» de asentir: «— Está frio. — Pois está».',
        },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-concesivas',
      title: 'Conceder para ganar: embora, apesar de, mesmo que',
      explanation:
        'Tres formas de decir «aunque», cada una con su gramática:\n' +
        'embora + subjuntivo presente/imperfecto: «Embora custe caro…»\n' +
        'apesar de + infinitivo (personal): «Apesar de custarem caro…»\n' +
        'mesmo que + subjuntivo: «Mesmo que custe caro…» (incluso si)\n' +
        'En debate, conceder antes de contraatacar suena maduro: «Embora o argumento tenha mérito, os dados mostram outra coisa».',
      examples: [
        { both: 'Embora os preços tenham subido, o consumo não caiu.', es: 'Aunque los precios subieron, el consumo no cayó.' },
        { both: 'Apesar de ser mais lento, o comboio é mais confortável.', es: 'A pesar de ser más lento, el tren es más cómodo.' },
      ],
    },
    {
      id: 'g-estructura',
      title: 'Estructurar una argumentación',
      explanation:
        'Abrir: «Em primeiro lugar…», «Antes de mais 🇵🇹 / Antes de mais nada 🇧🇷…»\n' +
        'Encadenar: «Além disso…», «Por outro lado…», «Aliás…»\n' +
        'Conceder: «É verdade que…, no entanto…»\n' +
        'Concluir: «Em suma…», «Portanto…», «Sendo assim…».\n' +
        'Estos conectores son idénticos en ambos países: aquí la divergencia es mínima y el registro lo es todo.',
      examples: [
        { both: 'Em primeiro lugar, os dados; em suma, a proposta funciona.', es: 'En primer lugar, los datos; en suma, la propuesta funciona.' },
        { both: 'É verdade que custa caro; no entanto, poupa tempo.', es: 'Es verdad que cuesta caro; sin embargo, ahorra tiempo.' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-alias',
      title: 'aliás: aguda',
      explanation: 'a-li-ÁS, con acento final. En Portugal se comprime: «aljásh».',
      samples: [
        { text: 'aliás', variant: 'br', ipa: 'a.liˈas', hint: 'a-li-ás' },
        { text: 'aliás', variant: 'pt', ipa: 'ɐˈljaʃ', hint: 'al-jásh' },
      ],
    },
    {
      id: 'p-pois',
      title: 'pois: la palabrita portuguesa',
      explanation: 'En Portugal la oirás sola constantemente como asentimiento. Suena «poish».',
      samples: [
        { text: 'Pois é…', variant: 'pt', ipa: 'pojʒ ˈɛ', hint: 'poish-é (= pues sí…)' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'É verdade que custa caro; no entanto, poupa muito tempo.', variant: 'pt' },
      question: '¿Qué estrategia argumentativa usa?',
      options: [
        'Concede un punto y luego contraargumenta',
        'Niega todo desde el principio',
        'Cambia de tema',
        'Hace una pregunta',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: 'Por um lado, o trabalho remoto poupa tempo de deslocação; por outro, isola os colegas. Aliás, vários estudos apontam nessa direção.',
      textVariant: 'both',
      question: '¿Qué hace «aliás» en este texto?',
      options: [
        'Refuerza lo dicho con apoyo adicional',
        'Contradice lo anterior',
        'Cierra la conclusión',
      ],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: '___ seja caro, vale a pena.',
      accepted: ['embora'],
      variant: 'both',
      translation: 'Aunque sea caro, vale la pena.',
      hint: 'concesiva + subjuntivo',
    },
    {
      id: 'e4',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Apesar de ___ mais lento, o comboio é mais confortável.',
      accepted: ['ser'],
      variant: 'pt',
      translation: 'A pesar de ser más lento, el tren es más cómodo.',
      hint: 'apesar de + infinitivo',
    },
    {
      id: 'e5',
      type: 'translate',
      skill: 'writing',
      es: 'sin embargo',
      accepted: [
        { text: 'no entanto', variant: 'both' },
        { text: 'contudo', variant: 'both' },
      ],
    },
    {
      id: 'e6',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'Além disso, é mais barato', variant: 'br' },
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Na minha opinião, vale a pena tentar.', variant: 'br' },
      translation: 'En mi opinión, vale la pena intentarlo.',
    },
  ],
};

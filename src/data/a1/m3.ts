import type { Lesson } from '../../domain/content';

/** A1 · Módulo 3: Familia y descripciones. */
export const a1m3: Lesson = {
  id: 'a1-m3-l1',
  title: 'La familia',
  description: 'Presenta a tu familia, di la edad y describe a las personas.',
  vocab: [
    {
      id: 'v-pai',
      es: 'padre',
      forms: [{ text: 'pai', variant: 'both', ipa: { br: 'paj' } }],
      example: { br: 'Meu pai é médico.', pt: 'O meu pai é médico.', es: 'Mi padre es médico.' },
    },
    {
      id: 'v-mae',
      es: 'madre',
      forms: [{ text: 'mãe', variant: 'both', ipa: { br: 'mɐ̃j̃' } }],
    },
    {
      id: 'v-irmao',
      es: 'hermano / hermana',
      forms: [
        {
          text: 'irmão / irmã',
          variant: 'both',
          ipa: { br: 'iʁˈmɐ̃w̃ / iʁˈmɐ̃', pt: 'iɾˈmɐ̃w̃ / iɾˈmɐ̃' },
        },
      ],
      example: { both: 'Tenho dois irmãos e uma irmã.', es: 'Tengo dos hermanos y una hermana.' },
    },
    {
      id: 'v-filho',
      es: 'hijo / hija',
      forms: [
        { text: 'filho / filha', variant: 'both', ipa: { br: 'ˈfi.ʎu / ˈfi.ʎɐ' } },
      ],
    },
    {
      id: 'v-avo',
      es: 'abuelo / abuela',
      forms: [
        {
          text: 'avô / avó',
          variant: 'both',
          ipa: { br: 'aˈvo / aˈvɔ', pt: 'ɐˈvo / ɐˈvɔ' },
          note: '¡Solo cambia la vocal! Abuelo con o cerrada (ô), abuela con o abierta (ó).',
        },
      ],
    },
    {
      id: 'v-marido',
      es: 'esposo / esposa',
      forms: [
        {
          text: 'marido / mulher',
          variant: 'both',
          ipa: { br: 'maˈɾi.du / muˈʎɛʁ', pt: 'mɐˈɾi.ðu / muˈʎɛɾ' },
          note: '«Mulher» es a la vez «mujer» y «esposa»; «esposa» también existe.',
        },
      ],
    },
    {
      id: 'v-tio',
      es: 'tío / tía',
      forms: [
        { text: 'tio / tia', variant: 'both', ipa: { br: 'ˈtʃi.u / ˈtʃi.ɐ', pt: 'ˈti.u / ˈti.ɐ' } },
      ],
    },
    {
      id: 'v-primo',
      es: 'primo / prima',
      forms: [{ text: 'primo / prima', variant: 'both', ipa: { br: 'ˈpɾi.mu / ˈpɾi.mɐ' } }],
    },
    {
      id: 'v-familia',
      es: 'familia',
      forms: [{ text: 'família', variant: 'both', ipa: { br: 'faˈmi.li.ɐ', pt: 'fɐˈmi.li.ɐ' } }],
    },
    {
      id: 'v-velho',
      es: 'mayor / menor (edad)',
      forms: [
        {
          text: 'mais velho / mais novo',
          variant: 'both',
          ipa: { br: 'majs ˈvɛ.ʎu / majs ˈno.vu', pt: 'majʃ ˈvɛ.ʎu / majʃ ˈno.vu' },
          note: 'Literalmente «más viejo / más nuevo»: mi hermano mayor = «meu irmão mais velho».',
        },
      ],
    },
    {
      id: 'v-alto',
      es: 'alto / bajo',
      forms: [
        {
          text: 'alto / baixo',
          variant: 'both',
          ipa: { br: 'ˈaw.tu / ˈbaj.ʃu' },
          note: 'La l antes de consonante suena como u en Brasil: «alto» → áutu.',
        },
      ],
    },
    {
      id: 'v-simpatico',
      es: 'simpático / amable',
      forms: [
        { text: 'simpático', variant: 'both', ipa: { br: 'sĩˈpa.tʃi.ku', pt: 'sĩˈpa.ti.ku' } },
        {
          text: 'gente boa',
          variant: 'br',
          note: 'Coloquial brasileño: «ele é gente boa» = es buena gente.',
        },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-ter',
      title: 'El verbo ter (tener) y la edad',
      explanation:
        'Presente de ter:\n' +
        'eu tenho — yo tengo\n' +
        'tu tens — tú tienes 🇵🇹\n' +
        'você / ele / ela tem — tú tienes, él/ella tiene\n' +
        'nós temos — nosotros tenemos\n' +
        'vocês / eles têm — ustedes/ellos tienen (¡con acento circunflejo!)\n' +
        'La edad se dice con ter, como en español: «Tenho trinta anos» (tengo treinta años). Y para preguntar: «Quantos anos você tem?» 🇧🇷 / «Quantos anos tens?» 🇵🇹.',
      examples: [
        { both: 'Eu tenho uma filha.', es: 'Tengo una hija.' },
        { br: 'Quantos anos você tem?', pt: 'Quantos anos tens?', es: '¿Cuántos años tienes?' },
        { both: 'Ela tem oito anos.', es: 'Ella tiene ocho años.' },
      ],
    },
    {
      id: 'g-posesivos',
      title: 'Los posesivos y el artículo',
      explanation:
        'Meu/minha (mi), teu/tua (tu 🇵🇹), seu/sua (su, y «tu» en Brasil con você), nosso/nossa (nuestro). Concuerdan con la cosa poseída: minha mãe, meu pai.\n' +
        'La divergencia: en Portugal el posesivo casi siempre lleva artículo delante — «o meu pai», «a minha casa» — mientras que en Brasil el artículo es opcional y suele omitirse: «meu pai», «minha casa».',
      examples: [
        { br: 'Minha irmã mora em Bogotá.', pt: 'A minha irmã mora em Bogotá.', es: 'Mi hermana vive en Bogotá.' },
        { br: 'Seu filho é muito simpático.', pt: 'O teu filho é muito simpático.', es: 'Tu hijo es muy simpático.' },
      ],
      variantNote:
        'Ninguna de las dos formas es incorrecta en el otro país; es cuestión de costumbre. Sigue la de tu variante.',
    },
  ],
  pronunciation: [
    {
      id: 'p-avo',
      title: 'avô vs avó: o cerrada y o abierta',
      explanation:
        'El par abuelo/abuela se distingue SOLO por la apertura de la o: avô (cerrada, como a-vóu apretado) y avó (abierta, hacia la a). Es el mejor ejemplo de por qué ô y ó importan.',
      samples: [
        { text: 'avô', variant: 'both', ipa: 'ɐˈvo', hint: 'abuelo — o cerrada' },
        { text: 'avó', variant: 'both', ipa: 'ɐˈvɔ', hint: 'abuela — o abierta' },
      ],
    },
    {
      id: 'p-lh',
      title: 'El dígrafo lh',
      explanation:
        'lh suena como una «ll» clásica (la lengua toca el paladar), igual en ambos países: filho, filha, mulher, velho.',
      samples: [
        { text: 'filho', variant: 'both', ipa: 'ˈfi.ʎu', hint: 'fí-liu (ll clásica)' },
        { text: 'mulher', variant: 'both', ipa: 'muˈʎɛɾ', hint: 'mu-liér' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Eu tenho dois irmãos.', variant: 'br' },
      question: '¿Qué dice esta persona?',
      options: [
        'Tiene dos hermanos',
        'Tiene dos hijos',
        'Tiene tres primos',
        'No tiene hermanos',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: 'A minha avó chama-se Rosa, tem oitenta anos e é muito simpática.',
      textVariant: 'pt',
      question: '¿Quién es Rosa?',
      options: ['La abuela', 'La tía', 'La madre'],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Eu ___ trinta anos.',
      accepted: ['tenho'],
      variant: 'both',
      translation: 'Tengo treinta años.',
      hint: 'ter, primera persona',
    },
    {
      id: 'e4',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'Tu ___ irmãos?',
      accepted: ['tens'],
      variant: 'pt',
      translation: '¿Tienes hermanos?',
      hint: 'ter, segunda persona',
    },
    {
      id: 'e5',
      type: 'translate',
      skill: 'writing',
      es: 'mi padre',
      accepted: [
        { text: 'meu pai', variant: 'br' },
        { text: 'o meu pai', variant: 'pt' },
      ],
    },
    {
      id: 'e6',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'A minha família é grande', variant: 'pt' },
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Minha mãe se chama Teresa.', variant: 'br' },
      translation: 'Mi madre se llama Teresa.',
    },
  ],
};

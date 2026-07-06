import type { RefSection } from '../../domain/reference';

/** Ficha de consulta: todos los pronombres. */
export const pronombres: RefSection = {
  id: 'pronombres',
  icon: '👤',
  title: 'Pronombres',
  description: 'Personales, posesivos, demostrativos, interrogativos y su colocación.',
  searchable: false,
  blocks: [
    {
      kind: 'table',
      title: 'Personales',
      headers: ['', 'Sujeto', 'O. directo', 'O. indirecto', 'Tras preposición'],
      rows: [
        ['yo', 'eu', 'me', 'me', 'mim · comigo'],
        ['tú 🇵🇹', 'tu', 'te', 'te', 'ti · contigo'],
        ['tú/usted 🇧🇷', 'você', 'o / a', 'lhe', 'você · com você'],
        ['él / ella', 'ele / ela', 'o / a', 'lhe', 'ele / ela'],
        ['nosotros', 'nós', 'nos', 'nos', 'nós · conosco 🇧🇷 / connosco 🇵🇹'],
        ['ustedes', 'vocês', 'os / as', 'lhes', 'vocês · convosco 🇵🇹'],
        ['ellos/as', 'eles / elas', 'os / as', 'lhes', 'eles / elas'],
      ],
      note:
        'El Brasil hablado evita o/a/lhe: repite «ele/ela» como objeto («Vi ele ontem») y usa «para ele/ela» en vez de lhe.',
    },
    {
      kind: 'info',
      point: {
        id: 'colocacion',
        title: '⭐ Colocación: la regla de supervivencia',
        explanation:
          'BRASIL: pronombre ANTES del verbo — «Ele me viu», «Te ligo amanhã».\n' +
          'PORTUGAL: pronombre DESPUÉS con guion — «Ele viu-me», «Ligo-te amanhã» — SALVO que antes haya una «palabra imán» que lo atraiga hacia delante: não, que, quem, já, ainda, também, sempre, talvez… «Ela NÃO me viu», «Espero QUE me ajudes».\n' +
          'En futuro y condicional, el portugués muy formal usa mesóclisis (el pronombre dentro): «dir-te-ei» = te diré. Reconócela; no hace falta usarla.',
        examples: [
          { br: 'Eu te ligo amanhã.', pt: 'Ligo-te amanhã.', es: 'Te llamo mañana.' },
          { both: 'Ela não me viu.', es: 'Ella no me vio (la negación manda en ambos).' },
        ],
      },
    },
    {
      kind: 'table',
      title: 'Posesivos',
      headers: ['', 'masculino', 'femenino', 'plurales'],
      rows: [
        ['mi', 'meu', 'minha', 'meus / minhas'],
        ['tu 🇵🇹', 'teu', 'tua', 'teus / tuas'],
        ['su / tu 🇧🇷', 'seu', 'sua', 'seus / suas'],
        ['nuestro', 'nosso', 'nossa', 'nossos / nossas'],
        ['vuestro / de ustedes 🇵🇹', 'vosso', 'vossa', 'vossos / vossas'],
        ['de él / de ella', 'dele / dela', 'dele / dela', 'deles / delas'],
      ],
      note:
        'Portugal antepone artículo: «o meu pai»; Brasil suele omitirlo: «meu pai». Para deshacer la ambigüedad de seu/sua (¿de usted? ¿de él?) ambos países usan dele/dela: «a casa dela» = su casa (de ella).',
    },
    {
      kind: 'table',
      title: 'Demostrativos',
      headers: ['Cerca de mí', 'Cerca de ti', 'Lejos'],
      rows: [
        ['este / esta', 'esse / essa', 'aquele / aquela'],
        ['estes / estas', 'esses / essas', 'aqueles / aquelas'],
        ['isto (neutro)', 'isso', 'aquilo'],
      ],
      note:
        'En el habla brasileña este y esse se funden (domina esse); Portugal mantiene la distinción. Contraen con em y de: neste, nisso, daquilo, naquela…, y con a: àquele.',
    },
    {
      kind: 'table',
      title: 'Interrogativos',
      headers: ['Portugués', 'Español', 'Ejemplo'],
      rows: [
        ['quem', 'quién', 'Quem é?'],
        ['o que / que', 'qué', 'O que aconteceu?'],
        ['qual / quais', 'cuál / cuáles', 'Qual é o teu nome?'],
        ['quanto/a/os/as', 'cuánto', 'Quanto custa?'],
        ['onde / aonde', 'dónde / adónde', 'Onde fica?'],
        ['quando', 'cuándo', 'Quando chegas?'],
        ['como', 'cómo', 'Como se diz…?'],
        ['por que 🇧🇷 / porque 🇵🇹', 'por qué', 'Por que você foi? / Porque foste?'],
      ],
      note:
        'Ortografía del porqué: Brasil separa al preguntar (por que) y junta al responder (porque); Portugal escribe porque en ambos y usa «porquê» al final de frase. «O quê?» y «porquê?» llevan circunflejo a final de frase en los dos países.',
    },
    {
      kind: 'table',
      title: 'Indefinidos',
      headers: ['Portugués', 'Español'],
      rows: [
        ['alguém / ninguém', 'alguien / nadie'],
        ['algo / nada', 'algo / nada'],
        ['algum, alguma / nenhum, nenhuma', 'algún / ningún'],
        ['todo, toda / tudo', 'todo (adj.) / todo (neutro)'],
        ['cada', 'cada'],
        ['outro, outra', 'otro'],
        ['qualquer / quaisquer', 'cualquier(a)'],
        ['vários, várias', 'varios'],
      ],
      note:
        'Ojo con todo vs tudo: «todo o dia» = todo el día 🇵🇹 / cada día 🇧🇷 según contexto, pero «tudo» es el neutro: «Tudo bem?». «Toda a gente» 🇵🇹 = «todo mundo» 🇧🇷 = todo el mundo.',
    },
    {
      kind: 'table',
      title: 'Relativos',
      headers: ['Portugués', 'Español', 'Ejemplo'],
      rows: [
        ['que', 'que', 'O livro que comprei.'],
        ['quem', 'quien', 'A pessoa com quem falei.'],
        ['o qual / a qual', 'el cual', 'O projeto sobre o qual falámos.'],
        ['cujo / cuja', 'cuyo', 'O autor cujo livro li.'],
        ['onde', 'donde', 'A cidade onde moro.'],
      ],
    },
  ],
};

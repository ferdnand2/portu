import type { RefSection } from '../../domain/reference';

/** Ficha de consulta: ortografía y acentuación. */
export const ortografia: RefSection = {
  id: 'ortografia',
  icon: '✏️',
  title: 'Ortografía y acentuación',
  description: 'Qué señala cada acento, las letras traicioneras y el Acuerdo Ortográfico.',
  searchable: false,
  blocks: [
    {
      kind: 'table',
      title: 'Los cuatro acentos',
      headers: ['Acento', 'Señala', 'Ejemplos'],
      rows: [
        ['agudo ´', 'vocal tónica ABIERTA', 'avó (abuela), café, pé, ótimo'],
        ['circunflejo ^', 'vocal tónica CERRADA', 'avô (abuelo), você, três, português'],
        ['til ~', 'vocal NASAL', 'não, amanhã, ações, põe'],
        ['grave `', 'solo la crase: a + a', 'à, às, àquele (vou à praia)'],
      ],
      note:
        'La pareja avó/avô resume el sistema: mismo lugar del acento, distinta apertura, distinta palabra.',
    },
    {
      kind: 'info',
      point: {
        id: 'orto-reglas',
        title: 'Cuándo lleva tilde (visto desde el español)',
        explanation:
          'La lógica es parecida al español (esdrújulas siempre, agudas/graves según terminación), con dos sorpresas:\n' +
          '1. Las agudas terminadas en -a, -e, -o llevan tilde: café, você, avó (en español sería al revés con -n/-s).\n' +
          '2. Los diptongos abiertos éi, ói llevan tilde en la sílaba tónica: papéis, herói, dói.\n' +
          'Y una tranquilidad: -em y -ns finales agudos como «também», «parabéns» llevan tilde; «bem» y «sem» (monosílabos) no.',
        examples: [
          { both: 'Parabéns! Você é demais.', es: '¡Felicidades! Eres genial.' },
          { both: 'O herói caiu de joelhos.', es: 'El héroe cayó de rodillas.' },
        ],
      },
    },
    {
      kind: 'info',
      point: {
        id: 'orto-letras',
        title: 'Letras y dígrafos traicioneros',
        explanation:
          'ç — solo ante a, o, u y nunca al inicio: começar, açúcar. Suena /s/.\n' +
          'nh = ñ (amanhã) · lh = ll clásica (filho) · ch = «sh» (chuva).\n' +
          'ss entre vocales = /s/ sorda (passar); una s sola entre vocales = /z/ (casa suena «caza»).\n' +
          'j y g(e,i) = ʒ, la «y» argentina: janela, gente.\n' +
          'x — la más caótica: normalmente «sh» (baixo, xícara), a veces /ks/ (táxi), /z/ (exame) o /s/ (próximo). Se aprende palabra a palabra.\n' +
          'h inicial — siempre muda: hotel, hoje, história.',
        examples: [
          { both: 'Hoje o exame foi fácil.', es: 'Hoy el examen fue fácil (exame con x = /z/).' },
        ],
      },
    },
    {
      kind: 'info',
      point: {
        id: 'orto-acordo',
        title: 'El Acuerdo Ortográfico (1990, en vigor desde ~2009)',
        explanation:
          'Unificó casi toda la escritura. Lo que cambió:\n' +
          'Portugal dejó de escribir consonantes mudas: acção → ação, óptimo → ótimo, baptismo → batismo.\n' +
          'Brasil perdió la diéresis: lingüiça → linguiça.\n' +
          'Ambos simplificaron acentos: ideia y voo ya no llevan tilde; «para» (verbo) perdió la suya.\n' +
          'Lo que SIGUE distinto (porque la pronunciación difiere):\n' +
          'facto 🇵🇹 / fato 🇧🇷 · receção 🇵🇹 / recepção 🇧🇷 (¡en esa Brasil sí pronuncia la p!).\n' +
          'Cultismos con e/o cerradas en Brasil y abiertas en Portugal: gênero/género, Antônio/António, bebê/bebé, tênis/ténis.',
        examples: [
          { br: 'O Antônio joga tênis.', pt: 'O António joga ténis.', es: 'Antonio juega al tenis — misma frase, dos ortografías.' },
        ],
        variantNote:
          'Regla práctica para escribir: elige tu variante y sé consistente; ambas son correctas.',
      },
    },
    {
      kind: 'info',
      point: {
        id: 'orto-porque',
        title: 'El rompecabezas del porqué',
        explanation:
          'BRASIL, cuatro formas: por que (pregunta), porque (respuesta), por quê (pregunta a final de frase), o porquê (sustantivo: el porqué).\n' +
          'PORTUGAL, más simple: porque (pregunta y respuesta), porquê a final de frase, o porquê (sustantivo). «Por que» separado solo cuando = «pelo qual».',
        examples: [
          { br: 'Por que você não veio? — Porque estava doente.', pt: 'Porque não vieste? — Porque estava doente.', es: '¿Por qué no viniste? — Porque estaba enfermo.' },
        ],
      },
    },
  ],
};

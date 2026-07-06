import type { RefSection } from '../../domain/reference';

/** Ficha de consulta: contracciones de preposición + artículo/pronombre. */
export const contracciones: RefSection = {
  id: 'contracciones',
  icon: '🔗',
  title: 'Contracciones',
  description: 'no, na, do, da, ao, à, pelo, num, dele… todas en un solo lugar.',
  searchable: false,
  blocks: [
    {
      kind: 'info',
      point: {
        id: 'intro',
        title: 'La regla general',
        explanation:
          'El portugués contrae SIEMPRE em, de, a y por con los artículos — no es opcional como «del» en español. Escribir «em o banco» es error: es «no banco».\n' +
          'Además, em y de contraen también con pronombres y demostrativos.',
        examples: [
          { both: 'Moro no centro, perto da estação.', es: 'Vivo en el centro, cerca de la estación.' },
          { both: 'Vou ao mercado e depois à farmácia.', es: 'Voy al mercado y después a la farmacia.' },
        ],
      },
    },
    {
      kind: 'table',
      title: 'em (en)',
      headers: ['+', 'Resultado', 'Ejemplo'],
      rows: [
        ['o / a', 'no / na', 'no banco, na rua'],
        ['os / as', 'nos / nas', 'nos bancos, nas ruas'],
        ['um / uma', 'num / numa', 'num café, numa loja'],
        ['ele / ela', 'nele / nela', 'Confio nele.'],
        ['este / esse / aquele', 'neste / nesse / naquele', 'neste momento'],
        ['isto / isso / aquilo', 'nisto / nisso / naquilo', 'Pensa nisso!'],
      ],
      note: 'En Brasil «em um / em uma» sin contraer también es correcto por escrito.',
    },
    {
      kind: 'table',
      title: 'de (de)',
      headers: ['+', 'Resultado', 'Ejemplo'],
      rows: [
        ['o / a', 'do / da', 'perto do metrô, longe da praça'],
        ['os / as', 'dos / das', 'dos meus pais'],
        ['um / uma', 'dum / duma 🇵🇹', 'dum amigo (en BR: de um)'],
        ['ele / ela', 'dele / dela', 'a casa dela'],
        ['este / esse / aquele', 'deste / desse / daquele', 'gosto deste'],
        ['isto / isso / aquilo', 'disto / disso / daquilo', 'Nada disso!'],
        ['aqui / aí / ali', 'daqui / daí / dali', 'Sou daqui.'],
      ],
    },
    {
      kind: 'table',
      title: 'a (a)',
      headers: ['+', 'Resultado', 'Ejemplo'],
      rows: [
        ['o / os', 'ao / aos', 'Vou ao banco.'],
        ['a / as', 'à / às', 'Vire à esquerda. Chego às oito.'],
        ['aquele / aquela', 'àquele / àquela', 'Fui àquela loja.'],
        ['aquilo', 'àquilo', 'Não ligues àquilo.'],
      ],
      note:
        'La «à» con acento grave (crase) es a + a: suena igual que «a», pero se escribe con acento. Es EL detalle ortográfico que distingue al que escribe bien.',
    },
    {
      kind: 'table',
      title: 'por (por)',
      headers: ['+', 'Resultado', 'Ejemplo'],
      rows: [
        ['o / a', 'pelo / pela', 'Obrigado pela ajuda.'],
        ['os / as', 'pelos / pelas', 'pelas ruas da cidade'],
      ],
    },
    {
      kind: 'table',
      title: 'com (con)',
      headers: ['+', 'Resultado', 'Ejemplo'],
      rows: [
        ['mim', 'comigo', 'Vem comigo!'],
        ['ti', 'contigo', 'Preciso falar contigo. 🇵🇹 (🇧🇷 también «com você»)'],
        ['si', 'consigo', 'Leve o passaporte consigo. (formal)'],
        ['nós', 'conosco 🇧🇷 / connosco 🇵🇹', 'Almoça conosco?'],
        ['vós', 'convosco 🇵🇹', 'Queremos falar convosco.'],
      ],
      note: 'Única divergencia ortográfica de la serie: conosco 🇧🇷 / connosco 🇵🇹 (con doble n).',
    },
  ],
};

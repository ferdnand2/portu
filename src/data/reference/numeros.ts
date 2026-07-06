import type { RefSection } from '../../domain/reference';

/** Ficha de consulta: números, ordinales y fechas. */
export const numeros: RefSection = {
  id: 'numeros',
  icon: '🔢',
  title: 'Números y fechas',
  description: 'Del 0 al millón, ordinales, fechas y cómo se leen precios y años.',
  searchable: false,
  blocks: [
    {
      kind: 'table',
      title: '0 – 19',
      headers: ['Nº', 'Portugués', 'Nº', 'Portugués'],
      rows: [
        ['0', 'zero', '10', 'dez'],
        ['1', 'um / uma', '11', 'onze'],
        ['2', 'dois / duas', '12', 'doze'],
        ['3', 'três', '13', 'treze'],
        ['4', 'quatro', '14', 'catorze'],
        ['5', 'cinco', '15', 'quinze'],
        ['6', 'seis (🇧🇷 al dictar: meia)', '16', 'dezesseis 🇧🇷 / dezasseis 🇵🇹'],
        ['7', 'sete', '17', 'dezessete 🇧🇷 / dezassete 🇵🇹'],
        ['8', 'oito', '18', 'dezoito'],
        ['9', 'nove', '19', 'dezenove 🇧🇷 / dezanove 🇵🇹'],
      ],
      note: 'Divergencia sistemática del 16 al 19: deze- 🇧🇷 / deza- 🇵🇹.',
    },
    {
      kind: 'table',
      title: 'Decenas y centenas',
      headers: ['Nº', 'Portugués', 'Nº', 'Portugués'],
      rows: [
        ['20', 'vinte', '100', 'cem / cento e…'],
        ['30', 'trinta', '200', 'duzentos/as'],
        ['40', 'quarenta', '300', 'trezentos/as'],
        ['50', 'cinquenta', '400', 'quatrocentos/as'],
        ['60', 'sessenta', '500', 'quinhentos/as'],
        ['70', 'setenta', '600', 'seiscentos/as'],
        ['80', 'oitenta', '700', 'setecentos/as'],
        ['90', 'noventa', '800', 'oitocentos/as'],
        ['1.000', 'mil', '900', 'novecentos/as'],
        ['1.000.000', 'um milhão', '2.000', 'dois mil'],
      ],
      note:
        'Las centenas tienen género: duzentas pessoas. «Cem» exacto, «cento e» al combinar: cento e vinte (120).',
    },
    {
      kind: 'info',
      point: {
        id: 'num-e',
        title: 'La «e» que une los números',
        explanation:
          'Se pone «e» entre decenas y unidades, y entre centenas y lo que sigue: trinta E dois (32), cento E cinquenta E cinco (155), duzentos E dez (210).\n' +
          'Con miles, «e» solo si lo que sigue es redondo o menor de cien: mil E cem (1.100), dois mil E vinte (2.020), pero: dois mil, trezentos e 45 → dois mil trezentos e quarenta e cinco.',
        examples: [
          { both: 'Custa noventa e nove reais.', es: 'Cuesta noventa y nueve reales.' },
          { both: 'Mil novecentos e oitenta e quatro.', es: 'Mil novecientos ochenta y cuatro (así se leen los años).' },
        ],
      },
    },
    {
      kind: 'table',
      title: 'Ordinales 1º–10º',
      headers: ['', 'Portugués', '', 'Portugués'],
      rows: [
        ['1º', 'primeiro/a', '6º', 'sexto/a'],
        ['2º', 'segundo/a', '7º', 'sétimo/a'],
        ['3º', 'terceiro/a', '8º', 'oitavo/a'],
        ['4º', 'quarto/a', '9º', 'nono/a'],
        ['5º', 'quinto/a', '10º', 'décimo/a'],
      ],
      note: 'Los pisos: «moro no terceiro andar». Reyes y siglos también: século vinte e um se dice cardinal.',
    },
    {
      kind: 'table',
      title: 'Meses (¡en minúscula!)',
      headers: ['', '', '', ''],
      rows: [
        ['enero', 'janeiro', 'julio', 'julho'],
        ['febrero', 'fevereiro', 'agosto', 'agosto'],
        ['marzo', 'março', 'septiembre', 'setembro'],
        ['abril', 'abril', 'octubre', 'outubro'],
        ['mayo', 'maio', 'noviembre', 'novembro'],
        ['junio', 'junho', 'diciembre', 'dezembro'],
      ],
      note: 'Meses y días de la semana van en minúscula, como en español.',
    },
    {
      kind: 'info',
      point: {
        id: 'num-fechas',
        title: 'Decir la fecha',
        explanation:
          'Fórmula: (dia) + de + mes + de + año — «15 de setembro de 2026».\n' +
          'El día 1 puede ser ordinal: «primeiro de maio» 🇧🇷 / «um de maio» 🇵🇹.\n' +
          'Preguntar: «Que dia é hoje?». Responder: «Hoje é (dia) vinte e três».\n' +
          'Con años: «em 2026» se lee «em dois mil e vinte e seis».',
        examples: [
          { br: 'Nasci em primeiro de março de 1990.', pt: 'Nasci a um de março de 1990.', es: 'Nací el primero de marzo de 1990.' },
          { both: 'A reunião é no dia quinze.', es: 'La reunión es el día quince.' },
        ],
      },
    },
    {
      kind: 'info',
      point: {
        id: 'num-precos',
        title: 'Precios y cantidades',
        explanation:
          'Moneda detrás: «dez reais», «vinte euros». Con céntimos: «nove e noventa» (9,90).\n' +
          'Ojo al separador: el portugués usa coma para decimales y punto para miles, como el español europeo: 1.500,50.\n' +
          'Teléfonos en Brasil se dictan dígito a dígito y el 6 es «meia»: 96 = «nove meia».',
        examples: [
          { both: 'São quinze euros e cinquenta.', es: 'Son quince euros con cincuenta.' },
          { br: 'Meu número termina em nove meia quatro.', es: 'Mi número termina en 964 (¡meia = 6!).' },
        ],
      },
    },
  ],
};

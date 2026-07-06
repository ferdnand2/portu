import type { RefSection } from '../../domain/reference';

/** Ficha de consulta: el mapa maestro de las divergencias BR/PT. */
export const divergencias: RefSection = {
  id: 'divergencias',
  icon: '🌍',
  title: 'Divergencias BR/PT',
  description: 'El mapa del método: léxico, gramática y pronunciación lado a lado.',
  searchable: true,
  blocks: [
    {
      kind: 'lexicon',
      title: 'Léxico divergente esencial',
      items: [
        { id: 'lx-onibus', es: 'autobús', br: 'ônibus', pt: 'autocarro' },
        { id: 'lx-trem', es: 'tren', br: 'trem', pt: 'comboio' },
        { id: 'lx-parada', es: 'parada de bus', br: 'ponto', pt: 'paragem' },
        { id: 'lx-camion', es: 'camión', br: 'caminhão', pt: 'camião' },
        { id: 'lx-conducir', es: 'conducir', br: 'dirigir', pt: 'conduzir' },
        { id: 'lx-carne', es: 'carné de conducir', br: 'carteira de motorista', pt: 'carta de condução' },
        { id: 'lx-acera', es: 'acera', br: 'calçada', pt: 'passeio' },
        { id: 'lx-frenar', es: 'frenar', br: 'frear', pt: 'travar' },
        { id: 'lx-celular', es: 'celular / móvil', br: 'celular', pt: 'telemóvel' },
        { id: 'lx-pantalla', es: 'pantalla', br: 'tela', pt: 'ecrã' },
        { id: 'lx-raton', es: 'ratón (PC)', br: 'mouse', pt: 'rato' },
        { id: 'lx-archivo', es: 'archivo', br: 'arquivo', pt: 'ficheiro' },
        { id: 'lx-contrasena', es: 'contraseña', br: 'senha', pt: 'palavra-passe' },
        { id: 'lx-descargar', es: 'descargar', br: 'baixar', pt: 'descarregar' },
        { id: 'lx-jugo', es: 'jugo / zumo', br: 'suco', pt: 'sumo' },
        { id: 'lx-desayuno', es: 'desayuno', br: 'café da manhã', pt: 'pequeno-almoço' },
        { id: 'lx-menu', es: 'menú / carta', br: 'cardápio', pt: 'ementa' },
        { id: 'lx-helado', es: 'helado', br: 'sorvete', pt: 'gelado' },
        { id: 'lx-sandwich', es: 'sándwich', br: 'sanduíche', pt: 'sandes' },
        { id: 'lx-caramelo', es: 'caramelo', br: 'bala', pt: 'rebuçado' },
        { id: 'lx-chicle', es: 'chicle', br: 'chiclete', pt: 'pastilha elástica' },
        { id: 'lx-nata', es: 'nata / crema', br: 'creme de leite', pt: 'natas' },
        { id: 'lx-taza', es: 'taza', br: 'xícara', pt: 'chávena' },
        { id: 'lx-bano', es: 'baño', br: 'banheiro', pt: 'casa de banho' },
        { id: 'lx-inodoro', es: 'inodoro', br: 'vaso sanitário', pt: 'sanita' },
        { id: 'lx-ducha', es: 'ducha', br: 'chuveiro', pt: 'duche' },
        { id: 'lx-nevera', es: 'nevera', br: 'geladeira', pt: 'frigorífico' },
        { id: 'lx-alquiler', es: 'alquiler', br: 'aluguel', pt: 'renda' },
        { id: 'lx-traje', es: 'traje', br: 'terno', pt: 'fato' },
        { id: 'lx-equipo', es: 'equipo (deporte)', br: 'time', pt: 'equipa' },
        { id: 'lx-hincha', es: 'hincha', br: 'torcedor', pt: 'adepto' },
        { id: 'lx-portero', es: 'portero (fútbol)', br: 'goleiro', pt: 'guarda-redes' },
        { id: 'lx-cesped', es: 'césped', br: 'grama', pt: 'relva' },
        { id: 'lx-genial', es: '¡genial!', br: 'legal', pt: 'fixe' },
        { id: 'lx-chaval', es: 'niño / chaval', br: 'garoto / moleque', pt: 'miúdo / puto' },
        { id: 'lx-billete', es: 'billete / pasaje', br: 'passagem', pt: 'bilhete' },
        { id: 'lx-azafata', es: 'azafata / auxiliar', br: 'aeromoça', pt: 'hospedeira' },
        { id: 'lx-fontanero', es: 'fontanero / plomero', br: 'encanador', pt: 'canalizador' },
        { id: 'lx-grapadora', es: 'grapadora', br: 'grampeador', pt: 'agrafador' },
        { id: 'lx-jamon', es: 'jamón cocido', br: 'presunto', pt: 'fiambre' },
        { id: 'lx-perro', es: 'perro', br: 'cachorro', pt: 'cão' },
        { id: 'lx-chiste', es: 'chiste', br: 'piada', pt: 'anedota / piada' },
      ],
    },
    {
      kind: 'info',
      point: {
        id: 'div-gram',
        title: 'Las 6 divergencias gramaticales que importan',
        explanation:
          '1. Trato: você + 3ª persona 🇧🇷 / tu + 2ª persona 🇵🇹.\n' +
          '2. Acción en curso: estou fazendo 🇧🇷 / estou a fazer 🇵🇹.\n' +
          '3. Colocación del pronombre: me chamo 🇧🇷 / chamo-me 🇵🇹 (salvo palabra imán: não, que…).\n' +
          '4. «Nosotros» hablado: a gente + singular 🇧🇷 / nós + -mos 🇵🇹.\n' +
          '5. «Hay» hablado: tem 🇧🇷 / há 🇵🇹.\n' +
          '6. Artículo con posesivo: meu pai 🇧🇷 / o meu pai 🇵🇹.',
        examples: [
          { br: 'A gente tá fazendo o jantar.', pt: 'Estamos a fazer o jantar.', es: 'Estamos haciendo la cena. (las divergencias 2 y 4 juntas)' },
        ],
        variantNote:
          'Todo lo demás — subjuntivos, tiempos, concordancias — es esencialmente igual en ambos países.',
      },
    },
    {
      kind: 'info',
      point: {
        id: 'div-pron',
        title: 'Las 4 diferencias de pronunciación que definen el acento',
        explanation:
          '1. Vocales átonas: Brasil las pronuncia todas; Portugal las reduce o elimina (telefone: te-le-fô-ni / t’lefón).\n' +
          '2. La s final: /s/ 🇧🇷 (menos Río) vs /ʃ/ «sh» 🇵🇹 (dois / doish).\n' +
          '3. di/ti: en Brasil suenan dyi/chi (dia = dyía, noite = nói-chi); en Portugal, como en español.\n' +
          '4. La e átona final: i en Brasil, casi muda en Portugal.\n' +
          'El resultado global: el brasileño suena «cantado» y abierto; el europeo, «apurado» y cerrado. La ficha de Fonemas tiene cada sonido con audio.',
        examples: [
          { br: 'Boa noite! Vinte e três.', pt: 'Boa noite! Vinte e três.', es: 'Compara los dos audios de la misma frase: buenas noches, veintitrés.' },
        ],
      },
    },
    {
      kind: 'info',
      point: {
        id: 'div-orto',
        title: 'Ortografía: pequeñas señales de origen',
        explanation:
          'Tras el Acuerdo Ortográfico las diferencias son pocas pero delatoras: facto/fato, receção 🇵🇹/recepção 🇧🇷, e cerrada vs abierta en los cultismos: género, António, bebé 🇵🇹 vs gênero, Antônio, bebê 🇧🇷. El detalle completo está en la ficha de Ortografía.',
        examples: [],
      },
    },
  ],
};

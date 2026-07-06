import type { Lesson } from '../../domain/content';

/** B1 · Módulo 4: Medios y tecnología. */
export const b1m4: Lesson = {
  id: 'b1-m4-l1',
  title: 'Tecnología: tela o ecrã',
  description: 'El vocabulario digital (muy divergente) y la voz pasiva.',
  vocab: [
    {
      id: 'v-tela',
      es: 'pantalla',
      forms: [
        { text: 'tela', variant: 'br', ipa: { br: 'ˈtɛ.lɐ' } },
        { text: 'ecrã', variant: 'pt', ipa: { pt: 'ɛˈkɾɐ̃' } },
      ],
    },
    {
      id: 'v-arquivo',
      es: 'archivo',
      forms: [
        { text: 'arquivo', variant: 'br', ipa: { br: 'aʁˈki.vu' } },
        { text: 'ficheiro', variant: 'pt', ipa: { pt: 'fiˈʃɐj.ɾu' } },
      ],
    },
    {
      id: 'v-baixar',
      es: 'descargar',
      forms: [
        { text: 'baixar', variant: 'br', ipa: { br: 'bajˈʃaʁ' } },
        { text: 'descarregar', variant: 'pt', ipa: { pt: 'dəʃ.kɐ.ʁəˈgaɾ' } },
      ],
      example: {
        br: 'Baixei o aplicativo ontem.',
        pt: 'Descarreguei a aplicação ontem.',
        es: 'Descargué la aplicación ayer.',
      },
    },
    {
      id: 'v-senha',
      es: 'contraseña',
      forms: [
        { text: 'senha', variant: 'br', ipa: { br: 'ˈse.ɲɐ' } },
        { text: 'palavra-passe', variant: 'pt', ipa: { pt: 'pɐˈla.vɾɐ ˈpa.sə' } },
      ],
    },
    {
      id: 'v-aplicativo',
      es: 'aplicación / app',
      forms: [
        { text: 'aplicativo', variant: 'br', ipa: { br: 'a.pli.kaˈtʃi.vu' } },
        { text: 'aplicação / app', variant: 'pt', ipa: { pt: 'ɐ.pli.kɐˈsɐ̃w̃' } },
      ],
    },
    {
      id: 'v-noticia',
      es: 'noticia / periódico',
      forms: [
        {
          text: 'notícia / jornal',
          variant: 'both',
          ipa: { br: 'noˈtʃi.si.ɐ / ʒoʁˈnaw', pt: 'nuˈti.sjɐ / ʒuɾˈnal' },
        },
      ],
    },
    {
      id: 'v-rede',
      es: 'red social',
      forms: [
        {
          text: 'rede social',
          variant: 'both',
          ipa: { br: 'ˈʁe.dʒi so.siˈaw', pt: 'ˈʁe.ðə su.siˈal' },
        },
      ],
    },
    {
      id: 'v-mensagem',
      es: 'mensaje',
      forms: [
        {
          text: 'mensagem',
          variant: 'both',
          ipa: { br: 'mẽˈsa.ʒẽj̃', pt: 'mẽˈsa.ʒɐ̃j̃' },
          note: 'Femenino: A mensagem. «Manda mensagem!» = ¡escríbeme!',
        },
      ],
    },
    {
      id: 'v-ligar',
      es: 'llamar (por teléfono) / encender',
      forms: [
        {
          text: 'ligar',
          variant: 'both',
          ipa: { br: 'liˈgaʁ', pt: 'liˈgaɾ' },
          note: 'Doble sentido: «te ligo» (te llamo) y «ligar a TV» (encender). En Portugal «llamar» también es «telefonar».',
        },
      ],
    },
    {
      id: 'v-computador',
      es: 'computadora / ordenador',
      forms: [
        {
          text: 'computador',
          variant: 'both',
          ipa: { br: 'kõ.pu.taˈdoʁ', pt: 'kõ.pu.tɐˈðoɾ' },
          note: 'Aquí no hay pelea: los dos países dicen «computador».',
        },
      ],
    },
  ],
  grammar: [
    {
      id: 'g-pasiva',
      title: 'La voz pasiva: ser + participio',
      explanation:
        'Como en español: «A notícia foi publicada ontem» (la noticia fue publicada ayer). El participio concuerda: publicado/publicada.\n' +
        'Participios irregulares imprescindibles: fazer → feito · dizer → dito · escrever → escrito · abrir → aberto · ver → visto · pôr → posto · vir → vindo.',
      examples: [
        { both: 'O aplicativo foi baixado um milhão de vezes.', es: 'La aplicación fue descargada un millón de veces.' },
        { both: 'A mensagem foi escrita em português.', es: 'El mensaje fue escrito en portugués.' },
      ],
    },
    {
      id: 'g-duplo-participio',
      title: 'Verbos con dos participios',
      explanation:
        'Varios verbos tienen participio regular (con ter) e irregular (con ser/estar): aceitar → aceitado/aceito 🇧🇷 aceite 🇵🇹 · pagar → pagado/pago · ganhar → ganhado/ganho.\n' +
        'Regla práctica: con «ter» el regular, con «ser/estar» el corto: «Tinha pagado» pero «Está pago».\n' +
        'Nota la divergencia de «aceptado»: aceito 🇧🇷 / aceite 🇵🇹 — la viste en la carta del examen C1.',
      examples: [
        { both: 'A conta já está paga.', es: 'La cuenta ya está pagada.' },
        { br: 'O pedido foi aceito.', pt: 'O pedido foi aceite.', es: 'La solicitud fue aceptada.' },
      ],
    },
  ],
  pronunciation: [
    {
      id: 'p-ecra',
      title: 'ecrã: nasal final átona',
      explanation: 'Palabra francesa adaptada (écran): la ã final es nasal y el acento cae en ella: e-crÃ.',
      samples: [{ text: 'ecrã', variant: 'pt', ipa: 'ɛˈkɾɐ̃', hint: 'e-crã' }],
    },
    {
      id: 'p-dzi-noticia',
      title: 'notícia, dito: di/ti brasileños en la tecnología',
      explanation: 'El vocabulario tech está lleno de di/ti: notícia (nochísia 🇧🇷), aplicativo (aplicachívu 🇧🇷). En Portugal, sin palatalizar.',
      samples: [
        { text: 'notícia', variant: 'br', ipa: 'noˈtʃi.si.ɐ', hint: 'no-chí-sia' },
        { text: 'notícia', variant: 'pt', ipa: 'nuˈti.sjɐ', hint: 'nu-tí-sia' },
      ],
    },
  ],
  exercises: [
    {
      id: 'e1',
      type: 'listen-choice',
      skill: 'listening',
      audio: { text: 'Esqueci a minha palavra-passe outra vez!', variant: 'pt' },
      question: '¿Qué le pasa a esta persona?',
      options: [
        'Olvidó su contraseña',
        'Perdió el teléfono',
        'No tiene internet',
        'Borró un archivo',
      ],
      answer: 0,
    },
    {
      id: 'e2',
      type: 'read-choice',
      skill: 'reading',
      text: 'O novo aplicativo do banco foi baixado mais de um milhão de vezes na primeira semana, segundo o jornal.',
      textVariant: 'br',
      question: '¿Qué informa el texto?',
      options: [
        'La app del banco fue muy descargada',
        'El banco cerró',
        'El periódico lanzó una app',
      ],
      answer: 0,
    },
    {
      id: 'e3',
      type: 'fill-blank',
      skill: 'writing',
      sentence: 'A mensagem foi ___ em português.',
      accepted: ['escrita'],
      variant: 'both',
      translation: 'El mensaje fue escrito en portugués.',
      hint: 'participio irregular de escrever, femenino',
    },
    {
      id: 'e4',
      type: 'translate',
      skill: 'writing',
      es: 'la pantalla',
      accepted: [
        { text: 'a tela', variant: 'br' },
        { text: 'o ecrã', variant: 'pt' },
      ],
    },
    {
      id: 'e5',
      type: 'translate',
      skill: 'writing',
      es: 'descargar el archivo',
      accepted: [
        { text: 'baixar o arquivo', variant: 'br' },
        { text: 'descarregar o ficheiro', variant: 'pt' },
      ],
    },
    {
      id: 'e6',
      type: 'dictation',
      skill: 'writing',
      audio: { text: 'Me manda uma mensagem', variant: 'br' },
    },
    {
      id: 'e7',
      type: 'speak',
      skill: 'speaking',
      target: { text: 'Esqueci a minha senha.', variant: 'br' },
      translation: 'Olvidé mi contraseña.',
    },
  ],
};

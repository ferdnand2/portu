import type { RefSection } from '../../domain/reference';

/** Ficha de consulta: adverbios esenciales por tipo. */
export const adverbios: RefSection = {
  id: 'adverbios',
  icon: '🧭',
  title: 'Adverbios',
  description: 'De tiempo, lugar, modo, cantidad y afirmación, con las muletillas de cada país.',
  searchable: true,
  blocks: [
    {
      kind: 'words',
      title: 'Tiempo',
      items: [
        {
          id: 'adv-agora',
          es: 'ahora',
          forms: [{ text: 'agora', variant: 'both', ipa: { br: 'aˈgɔ.ɾɐ', pt: 'ɐˈgɔ.ɾɐ' } }],
        },
        {
          id: 'adv-ja',
          es: 'ya / enseguida',
          forms: [
            {
              text: 'já',
              variant: 'both',
              ipa: { br: 'ʒa' },
              note: 'También «enseguida»: «Já vou!» = ¡ya voy!',
            },
          ],
        },
        {
          id: 'adv-ainda',
          es: 'todavía / aún',
          forms: [{ text: 'ainda', variant: 'both', ipa: { br: 'aˈĩ.dɐ', pt: 'ɐˈĩ.dɐ' } }],
        },
        {
          id: 'adv-sempre',
          es: 'siempre / nunca',
          forms: [
            {
              text: 'sempre / nunca',
              variant: 'both',
              ipa: { br: 'ˈsẽ.pɾi / ˈnũ.kɐ', pt: 'ˈsẽ.pɾə / ˈnũ.kɐ' },
              note: '«Jamais» es el nunca enfático.',
            },
          ],
        },
        {
          id: 'adv-cedo',
          es: 'temprano / tarde',
          forms: [{ text: 'cedo / tarde', variant: 'both', ipa: { br: 'ˈse.du / ˈtaʁ.dʒi', pt: 'ˈse.ðu / ˈtaɾ.də' } }],
        },
        {
          id: 'adv-logo',
          es: 'luego / pronto',
          forms: [
            {
              text: 'logo',
              variant: 'both',
              ipa: { br: 'ˈlɔ.gu' },
              note: '«Até logo» = hasta luego; «logo depois» = justo después. En Portugal «logo» también = esta tarde/noche: «Vemo-nos logo!».',
            },
          ],
        },
        {
          id: 'adv-depois',
          es: 'después / antes',
          forms: [{ text: 'depois / antes', variant: 'both', ipa: { br: 'deˈpojs / ˈɐ̃.tʃis', pt: 'dəˈpojʃ / ˈɐ̃.təʃ' } }],
        },
        {
          id: 'adv-as-vezes',
          es: 'a veces / de vez en cuando',
          forms: [
            { text: 'às vezes / de vez em quando', variant: 'both', ipa: { br: 'az ˈve.zis', pt: 'aʒ ˈve.zəʃ' } },
          ],
        },
        {
          id: 'adv-antigamente',
          es: 'antiguamente',
          forms: [{ text: 'antigamente', variant: 'both', ipa: { br: 'ɐ̃.tʃi.gaˈmẽ.tʃi', pt: 'ɐ̃.ti.gɐˈmẽ.tə' } }],
        },
      ],
    },
    {
      kind: 'words',
      title: 'Lugar',
      items: [
        {
          id: 'adv-aqui',
          es: 'aquí',
          forms: [
            { text: 'aqui', variant: 'br', ipa: { br: 'aˈki' } },
            {
              text: 'aqui / cá',
              variant: 'pt',
              ipa: { pt: 'ɐˈki / ˈka' },
              note: 'Portugal usa mucho «cá»: «Anda cá!» = ¡ven acá!',
            },
          ],
        },
        {
          id: 'adv-ai',
          es: 'ahí (donde tú)',
          forms: [
            {
              text: 'aí',
              variant: 'both',
              ipa: { br: 'aˈi' },
              note: 'En Brasil también muletilla narrativa: «Aí ele disse…» = y entonces él dijo…',
            },
          ],
        },
        {
          id: 'adv-ali',
          es: 'allí / allá',
          forms: [
            { text: 'ali / lá', variant: 'both', ipa: { br: 'aˈli / ˈla' }, note: '«Lá» es el lejano general: «lá em casa», «lá no Brasil».' },
          ],
        },
        {
          id: 'adv-perto',
          es: 'cerca / lejos',
          forms: [{ text: 'perto / longe', variant: 'both', ipa: { br: 'ˈpɛʁ.tu / ˈlõ.ʒi', pt: 'ˈpɛɾ.tu / ˈlõ.ʒə' } }],
        },
        {
          id: 'adv-dentro',
          es: 'dentro / fuera',
          forms: [{ text: 'dentro / fora', variant: 'both', ipa: { br: 'ˈdẽ.tɾu / ˈfɔ.ɾɐ' } }],
        },
        {
          id: 'adv-em-cima',
          es: 'arriba / abajo',
          forms: [
            { text: 'em cima / embaixo', variant: 'br', ipa: { br: 'ẽj̃ ˈsi.mɐ / ẽˈbaj.ʃu' } },
            { text: 'em cima / em baixo', variant: 'pt', ipa: { pt: 'ɐ̃j̃ ˈsi.mɐ / ɐ̃j̃ ˈbaj.ʃu' }, note: 'Misma pronunciación; solo cambia la ortografía (junto 🇧🇷, separado 🇵🇹).' },
          ],
        },
        {
          id: 'adv-atras',
          es: 'atrás / delante',
          forms: [{ text: 'atrás / à frente', variant: 'both', ipa: { br: 'aˈtɾas / a ˈfɾẽ.tʃi', pt: 'ɐˈtɾaʃ / a ˈfɾẽ.tə' } }],
        },
      ],
    },
    {
      kind: 'words',
      title: 'Modo',
      items: [
        {
          id: 'adv-bem',
          es: 'bien / mal',
          forms: [{ text: 'bem / mal', variant: 'both', ipa: { br: 'bẽj̃ / ˈmaw', pt: 'bɐ̃j̃ / ˈmal' } }],
        },
        {
          id: 'adv-assim',
          es: 'así',
          forms: [{ text: 'assim', variant: 'both', ipa: { br: 'aˈsĩ' } }],
        },
        {
          id: 'adv-devagar',
          es: 'despacio / deprisa',
          forms: [
            { text: 'devagar / depressa', variant: 'both', ipa: { br: 'dʒi.vaˈgaʁ / dʒiˈpɾɛ.sɐ', pt: 'də.vɐˈgaɾ / dəˈpɾɛ.sɐ' } },
          ],
        },
        {
          id: 'adv-sozinho',
          es: 'solo / juntos',
          forms: [
            {
              text: 'sozinho / juntos',
              variant: 'both',
              ipa: { br: 'sɔˈzi.ɲu / ˈʒũ.tus', pt: 'sɔˈzi.ɲu / ˈʒũ.tuʃ' },
              note: '«Sozinho» es el diminutivo de só ya lexicalizado: moro sozinho = vivo solo.',
            },
          ],
        },
        {
          id: 'adv-de-repente',
          es: 'de repente',
          forms: [
            {
              text: 'de repente',
              variant: 'both',
              ipa: { br: 'dʒi ʁeˈpẽ.tʃi', pt: 'də ʁəˈpẽ.tə' },
              note: 'En Brasil coloquial también = «quizás»: «De repente a gente vai» = capaz que vamos.',
            },
          ],
        },
        {
          id: 'adv-a-vontade',
          es: 'a gusto / con confianza',
          forms: [
            { text: 'à vontade', variant: 'both', ipa: { br: 'a võˈta.dʒi', pt: 'a võˈta.ðə' }, note: '«Fica à vontade!» = ¡ponte cómodo!' },
          ],
        },
      ],
    },
    {
      kind: 'words',
      title: 'Cantidad',
      items: [
        {
          id: 'adv-muito',
          es: 'muy / mucho — poco',
          forms: [{ text: 'muito / pouco', variant: 'both', ipa: { br: 'ˈmũj̃.tu / ˈpo.ku' } }],
        },
        {
          id: 'adv-bastante',
          es: 'bastante',
          forms: [{ text: 'bastante', variant: 'both', ipa: { br: 'basˈtɐ̃.tʃi', pt: 'bɐʃˈtɐ̃.tə' } }],
        },
        {
          id: 'adv-demais',
          es: 'demasiado',
          forms: [
            {
              text: 'demais',
              variant: 'both',
              ipa: { br: 'dʒiˈmajs', pt: 'dəˈmajʃ' },
              note: 'Va DESPUÉS: «caro demais». En Brasil coloquial también = «buenísimo»: «Esse filme é demais!».',
            },
          ],
        },
        {
          id: 'adv-quase',
          es: 'casi',
          forms: [{ text: 'quase', variant: 'both', ipa: { br: 'ˈkwa.zi', pt: 'ˈkwa.zə' } }],
        },
        {
          id: 'adv-so',
          es: 'solo / solamente',
          forms: [
            { text: 'só / apenas', variant: 'both', ipa: { br: 'ˈsɔ / aˈpe.nas', pt: 'ˈsɔ / ɐˈpe.nɐʃ' }, note: '«É só isso» = es solo eso; «só um minuto» = solo un minuto.' },
          ],
        },
        {
          id: 'adv-mais',
          es: 'más / menos',
          forms: [{ text: 'mais / menos', variant: 'both', ipa: { br: 'majs / ˈme.nus', pt: 'majʃ / ˈme.nuʃ' } }],
        },
        {
          id: 'adv-tao',
          es: 'tan',
          forms: [{ text: 'tão', variant: 'both', ipa: { br: 'tɐ̃w̃' } }],
        },
        {
          id: 'adv-pra-caramba',
          es: 'un montón (coloquial)',
          forms: [
            { text: 'pra caramba', variant: 'br', ipa: { br: 'pɾa kaˈɾɐ̃.bɐ' }, note: '«Gostei pra caramba!» = me encantó un montón.' },
            { text: 'imenso', variant: 'pt', ipa: { pt: 'iˈmẽ.su' }, note: '«Gosto imenso!» = me gusta muchísimo (muy PT).' },
          ],
        },
      ],
    },
    {
      kind: 'words',
      title: 'Afirmación, negación y duda',
      items: [
        {
          id: 'adv-sim-nao',
          es: 'sí / no',
          forms: [
            {
              text: 'sim / não',
              variant: 'both',
              ipa: { br: 'sĩ / nɐ̃w̃' },
              note: 'Para afirmar se repite el verbo más que decir sim: «— Falas português? — Falo!».',
            },
          ],
        },
        {
          id: 'adv-tambem',
          es: 'también / tampoco',
          forms: [
            { text: 'também / também não', variant: 'both', ipa: { br: 'tɐ̃ˈbẽj̃', pt: 'tɐ̃ˈbɐ̃j̃' }, note: 'No hay «tampoco» de una palabra: es «também não».' },
          ],
        },
        {
          id: 'adv-talvez',
          es: 'tal vez',
          forms: [
            { text: 'talvez', variant: 'both', ipa: { br: 'tawˈves', pt: 'talˈveʃ' }, note: 'Con subjuntivo: «Talvez ele venha».' },
            { text: 'se calhar', variant: 'pt', ipa: { pt: 'sə kɐˈʎaɾ' }, note: 'El «a lo mejor» de Portugal, con indicativo: «Se calhar vou».' },
          ],
        },
        {
          id: 'adv-com-certeza',
          es: 'con seguridad / claro',
          forms: [
            { text: 'com certeza / claro', variant: 'both', ipa: { br: 'kõ seʁˈte.zɐ', pt: 'kõ səɾˈte.zɐ' } },
          ],
        },
        {
          id: 'adv-ne',
          es: '¿no? / ¿verdad? (muletilla)',
          forms: [
            { text: 'né?', variant: 'br', ipa: { br: 'ˈnɛ' }, note: 'Contracción de «não é?». Omnipresente en Brasil.' },
            { text: 'não é? / pois', variant: 'pt', note: '«Pois» solo = asentir: «— Está frio. — Pois está».' },
          ],
        },
        {
          id: 'adv-pois-nao',
          es: '¡claro que sí! (tienda 🇧🇷)',
          forms: [
            {
              text: 'pois não',
              variant: 'br',
              ipa: { br: 'pojz ˈnɐ̃w̃' },
              note: 'Trampa lógica: «Pois não?» en Brasil significa «¿en qué puedo ayudarle?» / «¡claro!». Nunca es una negación.',
            },
          ],
        },
      ],
    },
  ],
};

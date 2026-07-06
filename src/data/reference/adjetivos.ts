import type { RefSection } from '../../domain/reference';

/** Ficha de consulta: adjetivos esenciales por tema. */
export const adjetivos: RefSection = {
  id: 'adjetivos',
  icon: '🎨',
  title: 'Adjetivos',
  description: 'Los esenciales por tema, con contrarios y trampas marcadas.',
  searchable: true,
  blocks: [
    {
      kind: 'words',
      title: 'Descripción física',
      items: [
        {
          id: 'adj-alto',
          es: 'alto / bajo',
          forms: [{ text: 'alto / baixo', variant: 'both', ipa: { br: 'ˈaw.tu / ˈbaj.ʃu' } }],
        },
        {
          id: 'adj-bonito',
          es: 'bonito / feo',
          forms: [
            { text: 'bonito / feio', variant: 'both', ipa: { br: 'boˈni.tu / ˈfej.u' } },
            { text: 'giro / gira', variant: 'pt', ipa: { pt: 'ˈʒi.ɾu' }, note: 'Muy de Portugal: «É tão giro!» = ¡qué mono!' },
            { text: 'lindo', variant: 'both', note: 'Más fuerte que bonito, como en español.' },
          ],
        },
        {
          id: 'adj-magro',
          es: 'delgado / gordo',
          forms: [{ text: 'magro / gordo', variant: 'both', ipa: { br: 'ˈma.gɾu / ˈgoʁ.du' } }],
        },
        {
          id: 'adj-forte',
          es: 'fuerte / débil',
          forms: [
            { text: 'forte / fraco', variant: 'both', ipa: { br: 'ˈfɔʁ.tʃi / ˈfɾa.ku', pt: 'ˈfɔɾ.tə / ˈfɾa.ku' } },
          ],
        },
        {
          id: 'adj-jovem',
          es: 'joven / viejo',
          forms: [
            { text: 'jovem / velho', variant: 'both', ipa: { br: 'ˈʒɔ.vẽj̃ / ˈvɛ.ʎu', pt: 'ˈʒɔ.vɐ̃j̃ / ˈvɛ.ʎu' } },
          ],
        },
        {
          id: 'adj-loiro',
          es: 'rubio / moreno',
          forms: [
            { text: 'loiro / moreno', variant: 'both', ipa: { br: 'ˈloj.ɾu / moˈɾe.nu' } },
          ],
        },
        {
          id: 'adj-careca',
          es: 'calvo',
          forms: [{ text: 'careca', variant: 'both', ipa: { br: 'kaˈɾɛ.kɐ' } }],
        },
      ],
    },
    {
      kind: 'words',
      title: 'Carácter',
      items: [
        {
          id: 'adj-simpatico',
          es: 'simpático / antipático',
          forms: [
            { text: 'simpático / antipático', variant: 'both', ipa: { br: 'sĩˈpa.tʃi.ku', pt: 'sĩˈpa.ti.ku' } },
          ],
        },
        {
          id: 'adj-engracado',
          es: 'gracioso / divertido',
          forms: [{ text: 'engraçado / divertido', variant: 'both', ipa: { br: 'ẽ.gɾaˈsa.du' } }],
        },
        {
          id: 'adj-chato',
          es: 'pesado / aburrido / molesto',
          forms: [
            {
              text: 'chato',
              variant: 'both',
              ipa: { br: 'ˈʃa.tu' },
              note: 'Palabra comodín: una persona chata (pesada), un filme chato (aburrido), que chato! (¡qué fastidio!).',
            },
          ],
        },
        {
          id: 'adj-inteligente',
          es: 'inteligente / tonto',
          forms: [
            { text: 'inteligente / burro', variant: 'both', ipa: { br: 'ĩ.te.liˈʒẽ.tʃi / ˈbu.ʁu', pt: 'ĩ.tə.liˈʒẽ.tə / ˈbu.ʁu' } },
            { text: 'bobo', variant: 'br', note: 'Tonto suave: «Não seja bobo!»' },
            { text: 'parvo', variant: 'pt', ipa: { pt: 'ˈpaɾ.vu' }, note: 'El tonto portugués.' },
          ],
        },
        {
          id: 'adj-educado',
          es: 'cortés / maleducado',
          forms: [
            {
              text: 'educado / mal-educado',
              variant: 'both',
              ipa: { br: 'e.duˈka.du' },
              note: '«Educado» apunta a los modales más que a los estudios (culto = «instruído/culto»).',
            },
          ],
        },
        {
          id: 'adj-preguicoso',
          es: 'perezoso / trabajador',
          forms: [
            { text: 'preguiçoso / trabalhador', variant: 'both', ipa: { br: 'pɾe.giˈso.zu / tɾa.ba.ʎaˈdoʁ' } },
          ],
        },
        {
          id: 'adj-teimoso',
          es: 'terco / testarudo',
          forms: [{ text: 'teimoso', variant: 'both', ipa: { br: 'tejˈmo.zu', pt: 'tɐjˈmo.zu' } }],
        },
        {
          id: 'adj-timido',
          es: 'tímido / extrovertido',
          forms: [{ text: 'tímido / extrovertido', variant: 'both', ipa: { br: 'ˈtʃi.mi.du', pt: 'ˈti.mi.ðu' } }],
        },
      ],
    },
    {
      kind: 'words',
      title: 'Estados de ánimo',
      items: [
        {
          id: 'adj-feliz',
          es: 'feliz / triste',
          forms: [{ text: 'feliz / triste', variant: 'both', ipa: { br: 'feˈlis / ˈtɾis.tʃi', pt: 'fəˈliʃ / ˈtɾiʃ.tə' } }],
        },
        {
          id: 'adj-cansado',
          es: 'cansado',
          forms: [{ text: 'cansado', variant: 'both', ipa: { br: 'kɐ̃ˈsa.du' } }],
        },
        {
          id: 'adj-bravo',
          es: 'enojado / enfadado',
          forms: [
            { text: 'bravo', variant: 'br', ipa: { br: 'ˈbɾa.vu' }, note: '«Ficou bravo comigo» = se enojó conmigo.' },
            { text: 'zangado / chateado', variant: 'pt', ipa: { pt: 'zɐ̃ˈga.ðu' }, note: '«Chateado» también existe en Brasil (molesto/triste).' },
          ],
        },
        {
          id: 'adj-nervoso',
          es: 'nervioso / tranquilo',
          forms: [
            {
              text: 'nervoso / calmo',
              variant: 'both',
              ipa: { br: 'neʁˈvo.zu / ˈkaw.mu', pt: 'nəɾˈvo.zu / ˈkal.mu' },
              note: 'En Brasil «nervoso» también es «alterado/enojado»: «Fiquei nervoso!».',
            },
          ],
        },
        {
          id: 'adj-animado',
          es: 'entusiasmado / animado',
          forms: [
            { text: 'animado / empolgado', variant: 'br', ipa: { br: 'a.niˈma.du / ẽ.powˈga.du' }, note: '«Empolgado» = súper entusiasmado (muy BR).' },
            { text: 'animado / entusiasmado', variant: 'pt' },
          ],
        },
        {
          id: 'adj-preocupado',
          es: 'preocupado',
          forms: [{ text: 'preocupado', variant: 'both', ipa: { br: 'pɾe.o.kuˈpa.du' } }],
        },
        {
          id: 'adj-apaixonado',
          es: 'enamorado',
          forms: [
            {
              text: 'apaixonado',
              variant: 'both',
              ipa: { br: 'a.paj.ʃoˈna.du' },
              note: '«Apaixonado por» = enamorado de. Enamorarse = «apaixonar-se».',
            },
          ],
        },
        {
          id: 'adj-doente',
          es: 'enfermo / sano',
          forms: [{ text: 'doente / saudável', variant: 'both', ipa: { br: 'duˈẽ.tʃi / sawˈda.vew', pt: 'duˈẽ.tə / sawˈða.vɛl' } }],
        },
      ],
    },
    {
      kind: 'words',
      title: 'Para valorar cosas',
      items: [
        {
          id: 'adj-bom',
          es: 'bueno / malo',
          forms: [
            {
              text: 'bom / mau',
              variant: 'both',
              ipa: { br: 'bõ / ˈmaw' },
              note: 'Femenino: boa / má. No confundir mau (malo) con mal (adverbio), como en español.',
            },
          ],
        },
        {
          id: 'adj-otimo',
          es: 'buenísimo / pésimo',
          forms: [
            { text: 'ótimo / péssimo', variant: 'both', ipa: { br: 'ˈɔ.tʃi.mu / ˈpɛ.si.mu', pt: 'ˈɔ.ti.mu / ˈpɛ.si.mu' } },
          ],
        },
        {
          id: 'adj-legal-ref',
          es: 'genial',
          forms: [
            { text: 'legal / maneiro', variant: 'br', ipa: { br: 'leˈgaw / maˈnej.ɾu' } },
            { text: 'fixe / porreiro', variant: 'pt', ipa: { pt: 'ˈfi.ʃə / puˈʁɐj.ɾu' } },
          ],
        },
        {
          id: 'adj-caro',
          es: 'caro / barato',
          forms: [{ text: 'caro / barato', variant: 'both', ipa: { br: 'ˈka.ɾu / baˈɾa.tu' } }],
        },
        {
          id: 'adj-facil',
          es: 'fácil / difícil',
          forms: [{ text: 'fácil / difícil', variant: 'both', ipa: { br: 'ˈfa.siw / dʒiˈfi.siw', pt: 'ˈfa.sil / diˈfi.sil' } }],
        },
        {
          id: 'adj-rapido',
          es: 'rápido / lento',
          forms: [{ text: 'rápido / lento', variant: 'both', ipa: { br: 'ˈʁa.pi.du / ˈlẽ.tu' } }],
        },
        {
          id: 'adj-novo',
          es: 'nuevo / antiguo',
          forms: [
            {
              text: 'novo / antigo',
              variant: 'both',
              ipa: { br: 'ˈno.vu / ɐ̃ˈtʃi.gu', pt: 'ˈno.vu / ɐ̃ˈti.gu' },
              note: '«Novo» también es joven: «meu irmão mais novo» = mi hermano menor.',
            },
          ],
        },
        {
          id: 'adj-limpo',
          es: 'limpio / sucio',
          forms: [{ text: 'limpo / sujo', variant: 'both', ipa: { br: 'ˈlĩ.pu / ˈsu.ʒu' } }],
        },
        {
          id: 'adj-cheio',
          es: 'lleno / vacío',
          forms: [{ text: 'cheio / vazio', variant: 'both', ipa: { br: 'ˈʃej.u / vaˈzi.u', pt: 'ˈʃɐj.u / vɐˈzi.u' } }],
        },
        {
          id: 'adj-quente',
          es: 'caliente / frío',
          forms: [{ text: 'quente / frio', variant: 'both', ipa: { br: 'ˈkẽ.tʃi / ˈfɾi.u', pt: 'ˈkẽ.tə / ˈfɾi.u' } }],
        },
        {
          id: 'adj-esquisito',
          es: 'raro / extraño ⚠️',
          forms: [
            {
              text: 'esquisito',
              variant: 'both',
              ipa: { br: 'es.kiˈzi.tu', pt: 'əʃ.kiˈzi.tu' },
              note: '¡Falso amigo estrella! NO es exquisito: es raro. Exquisito = «requintado» o «delicioso».',
            },
          ],
        },
        {
          id: 'adj-gostoso-ref',
          es: 'rico / sabroso',
          forms: [
            { text: 'gostoso / uma delícia', variant: 'br', ipa: { br: 'gosˈto.zu' } },
            { text: 'saboroso / ótimo', variant: 'pt' },
          ],
        },
      ],
    },
    {
      kind: 'words',
      title: 'Tamaño y medida',
      items: [
        {
          id: 'adj-grande',
          es: 'grande / pequeño',
          forms: [{ text: 'grande / pequeno', variant: 'both', ipa: { br: 'ˈgɾɐ̃.dʒi / peˈke.nu', pt: 'ˈgɾɐ̃.də / pəˈke.nu' } }],
        },
        {
          id: 'adj-comprido',
          es: 'largo / corto',
          forms: [
            {
              text: 'comprido / curto',
              variant: 'both',
              ipa: { br: 'kõˈpɾi.du / ˈkuʁ.tu', pt: 'kõˈpɾi.ðu / ˈkuɾ.tu' },
              note: 'También «longo». ¡«Largo» NO significa largo! (mira la siguiente).',
            },
          ],
        },
        {
          id: 'adj-largo',
          es: 'ancho / estrecho ⚠️',
          forms: [
            {
              text: 'largo / estreito',
              variant: 'both',
              ipa: { br: 'ˈlaʁ.gu / esˈtɾej.tu', pt: 'ˈlaɾ.gu / əʃˈtɾɐj.tu' },
              note: 'Falso amigo: largo = ancho. «Uma rua larga» es una calle ancha.',
            },
          ],
        },
        {
          id: 'adj-pesado',
          es: 'pesado / ligero',
          forms: [{ text: 'pesado / leve', variant: 'both', ipa: { br: 'peˈza.du / ˈlɛ.vi', pt: 'pəˈza.ðu / ˈlɛ.və' } }],
        },
      ],
    },
  ],
};

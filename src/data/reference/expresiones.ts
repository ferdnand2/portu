import type { RefSection } from '../../domain/reference';

/** Ficha de consulta: expresiones cotidianas y refranes tradicionales. */
export const expresiones: RefSection = {
  id: 'expresiones',
  icon: '💬',
  title: 'Expresiones y refranes',
  description: 'Lo que hace sonar natural: modismos de cada país y refranes populares.',
  searchable: true,
  blocks: [
    {
      kind: 'words',
      title: 'Del día a día',
      items: [
        {
          id: 'exp-valeu',
          es: '¡gracias! / ¡chao! (informal)',
          forms: [
            { text: 'Valeu!', variant: 'br', ipa: { br: 'vaˈlew' }, note: 'Literal «valió». Gracias entre amigos, y despedida.' },
          ],
        },
        {
          id: 'exp-beleza',
          es: '¿todo bien? / ¡perfecto!',
          forms: [
            { text: 'Beleza?', variant: 'br', ipa: { br: 'beˈle.zɐ' }, note: 'Saludo y confirmación: «— Te busco às oito. — Beleza!».' },
            { text: 'Está bem!', variant: 'pt', note: 'El «vale/ok» portugués; coloquial: «tá bem».' },
          ],
        },
        {
          id: 'exp-ficar-a-vontade',
          es: 'ponte cómodo',
          forms: [
            { text: 'Fica à vontade!', variant: 'both', ipa: { br: 'ˈfi.kɐ a võˈta.dʒi' } },
          ],
        },
        {
          id: 'exp-nao-faz-mal',
          es: 'no importa / no pasa nada',
          forms: [
            { text: 'Não faz mal.', variant: 'both', ipa: { br: 'nɐ̃w̃ faz ˈmaw', pt: 'nɐ̃w̃ faʒ ˈmal' } },
          ],
        },
        {
          id: 'exp-deixa-pra-la',
          es: 'olvídalo / déjalo',
          forms: [
            { text: 'Deixa pra lá.', variant: 'br', ipa: { br: 'ˈdej.ʃɐ pɾa ˈla' } },
            { text: 'Deixa lá.', variant: 'pt', ipa: { pt: 'ˈdɐj.ʃɐ ˈla' }, note: 'También consuelo: «Deixa lá, correu mal mas aprendeste».' },
          ],
        },
        {
          id: 'exp-puxar-conversa',
          es: 'entablar conversación',
          forms: [
            { text: 'puxar conversa', variant: 'br', ipa: { br: 'puˈʃaʁ kõˈvɛʁ.sɐ' }, note: '«Puxa» también es exclamación: «Puxa!» = ¡caray!' },
            { text: 'meter conversa', variant: 'pt' },
          ],
        },
        {
          id: 'exp-jeito',
          es: 'encontrar una solución',
          forms: [
            { text: 'dar um jeito', variant: 'br', ipa: { br: 'daʁ ũ ˈʒej.tu' }, note: 'El arte brasileño de resolver lo imposible.' },
            { text: 'desenrascar-se', variant: 'pt', ipa: { pt: 'də.zẽ.ʁɐʃˈkaɾ sə' }, note: 'Su primo portugués: salir del apuro con lo que hay.' },
          ],
        },
        {
          id: 'exp-pao-duro',
          es: 'tacaño',
          forms: [
            { text: 'pão-duro', variant: 'br', ipa: { br: 'pɐ̃w̃ ˈdu.ɾu' }, note: 'Literal «pan duro».' },
            { text: 'forreta', variant: 'pt', ipa: { pt: 'fuˈʁe.tɐ' } },
          ],
        },
        {
          id: 'exp-ficar-de-olho',
          es: 'vigilar / echar un ojo',
          forms: [
            { text: 'ficar de olho em', variant: 'br', ipa: { br: 'fiˈkaʁ dʒi ˈo.ʎu' } },
            { text: 'ficar de olho em', variant: 'pt', note: 'Se entiende igual; también «estar atento a».' },
          ],
        },
        {
          id: 'exp-se-calhar',
          es: 'a lo mejor',
          forms: [
            { text: 'se calhar', variant: 'pt', ipa: { pt: 'sə kɐˈʎaɾ' }, note: 'Marca registrada del habla portuguesa.' },
            { text: 'vai que…', variant: 'br', note: 'BR coloquial: «Vai que dá certo!» = ¿y si sale bien?' },
          ],
        },
      ],
    },
    {
      kind: 'words',
      title: 'Modismos con historia',
      items: [
        {
          id: 'exp-olhos-cara',
          es: 'costar un ojo de la cara',
          forms: [
            { text: 'custar os olhos da cara', variant: 'both', ipa: { br: 'kusˈtaʁ uz ˈo.ʎuz da ˈka.ɾɐ' } },
          ],
        },
        {
          id: 'exp-pulga',
          es: 'estar mosqueado / desconfiar',
          forms: [
            {
              text: 'estar com a pulga atrás da orelha',
              variant: 'both',
              note: 'Literal: con la pulga detrás de la oreja.',
            },
          ],
        },
        {
          id: 'exp-burros',
          es: 'fracasar en el intento',
          forms: [
            { text: 'dar com os burros n’água', variant: 'both', note: 'Literal: dar con los burros en el agua.' },
          ],
        },
        {
          id: 'exp-coelhos',
          es: 'dos pájaros de un tiro',
          forms: [
            {
              text: 'matar dois coelhos com uma cajadada só',
              variant: 'both',
              note: 'Literal: matar dos conejos de un solo garrotazo.',
            },
          ],
        },
        {
          id: 'exp-maos-atadas',
          es: 'estar de manos atadas',
          forms: [{ text: 'ficar de mãos atadas', variant: 'both' }],
        },
        {
          id: 'exp-tirar-limpo',
          es: 'aclarar un asunto',
          forms: [
            { text: 'tirar a limpo', variant: 'br', ipa: { br: 'tʃiˈɾaʁ ɐ ˈlĩ.pu' }, note: '«Vamos tirar isso a limpo!»' },
            { text: 'pôr em pratos limpos', variant: 'pt', note: 'Literal: poner en platos limpios.' },
          ],
        },
        {
          id: 'exp-maria-vai',
          es: 'seguir a la masa',
          forms: [
            { text: 'maria vai com as outras', variant: 'both', note: 'Persona sin criterio propio: «Não sejas maria vai com as outras!».' },
          ],
        },
      ],
    },
    {
      kind: 'words',
      title: 'Refranes populares',
      items: [
        {
          id: 'ref-arrisca',
          es: 'quien no arriesga, no gana',
          forms: [
            { text: 'Quem não arrisca, não petisca.', variant: 'both', note: 'Literal: quien no arriesga, no picotea.' },
          ],
        },
        {
          id: 'ref-passaro',
          es: 'más vale pájaro en mano…',
          forms: [
            { text: 'Mais vale um pássaro na mão do que dois a voar.', variant: 'both' },
          ],
        },
        {
          id: 'ref-grao',
          es: 'poco a poco se llega lejos',
          forms: [
            {
              text: 'De grão em grão, a galinha enche o papo.',
              variant: 'both',
              note: 'Literal: grano a grano, la gallina llena el buche.',
            },
          ],
        },
        {
          id: 'ref-agua-mole',
          es: 'la constancia todo lo puede',
          forms: [
            {
              text: 'Água mole em pedra dura, tanto bate até que fura.',
              variant: 'both',
              note: 'Literal: agua blanda en piedra dura, tanto golpea que perfora. Rima y todo.',
            },
          ],
        },
        {
          id: 'ref-leite',
          es: 'a lo hecho, pecho',
          forms: [
            { text: 'Não vale a pena chorar sobre leite derramado.', variant: 'both', note: 'Literal: no vale la pena llorar sobre leche derramada.' },
          ],
        },
        {
          id: 'ref-cavalo',
          es: 'a caballo regalado no le mires el diente',
          forms: [
            { text: 'Cavalo dado não se olham os dentes.', variant: 'both' },
          ],
        },
      ],
    },
  ],
};

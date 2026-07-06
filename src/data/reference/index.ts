import type { RefSection } from '../../domain/reference';
import { adjetivos } from './adjetivos';
import { adverbios } from './adverbios';
import { expresiones } from './expresiones';
import { pronombres } from './pronombres';
import { contracciones } from './contracciones';

/**
 * Registro de fichas de consulta genéricas (bloques). Las fichas con
 * pantalla propia (fonemas, verbos) se registran como accesos en
 * `REF_SHORTCUTS` y viven en sus componentes.
 */
export const REF_SECTIONS: RefSection[] = [
  adjetivos,
  adverbios,
  pronombres,
  contracciones,
  expresiones,
];

export function findRefSection(id: string): RefSection | undefined {
  return REF_SECTIONS.find((s) => s.id === id);
}

/** Accesos con pantalla dedicada. */
export const REF_SHORTCUTS = [
  {
    id: 'fonemas',
    icon: '🔤',
    title: 'Fonemas',
    description: 'Todos los sonidos del portugués con ejemplo y audio.',
  },
  {
    id: 'verbos',
    icon: '🔀',
    title: 'Verbos',
    description: 'Conjugador completo: todos los tiempos, regulares e irregulares.',
  },
] as const;

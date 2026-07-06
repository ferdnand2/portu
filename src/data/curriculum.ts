import type { Curriculum, Lesson, Level, Module } from '../domain/content';
import { leccion1 } from './a1/modulo1/leccion1';
import { leccion2 } from './a1/modulo1/leccion2';

/**
 * Pensum completo. Los módulos «planned» ya tienen su lugar en la estructura;
 * escribir sus lecciones no requiere tocar código de la app.
 * El detalle pedagógico de cada módulo está en docs/pensum.md.
 */

const planned = (id: string, title: string, description: string): Module => ({
  id,
  title,
  description,
  status: 'planned',
  lessons: [],
});

const a1: Level = {
  id: 'A1',
  name: 'A1 — Acceso',
  description:
    'Sobrevivir en portugués: saludar, presentarte, pedir, comprar y moverte.',
  status: 'available',
  modules: [
    {
      id: 'a1-m1',
      title: 'Saludos y presentaciones',
      description: 'Primeros contactos: saludar, presentarse, ser y llamarse.',
      status: 'available',
      lessons: [leccion1, leccion2],
    },
    planned('a1-m2', 'Números, fechas y horas', 'Contar, preguntar la hora, días y meses.'),
    planned('a1-m3', 'Familia y descripciones', 'Ser / estar / ter; describir personas.'),
    planned('a1-m4', 'Comida y restaurante', 'Pedir en un café o restaurante; gustos con «gostar de».'),
    planned('a1-m5', 'La ciudad y direcciones', 'Preguntar y entender direcciones; haver/ficar.'),
    planned('a1-m6', 'Rutina diaria', 'Presente de los verbos regulares -ar, -er, -ir; reflexivos.'),
    planned('a1-m7', 'Compras y ropa', 'Precios, tallas, colores; demostrativos.'),
    planned('a1-m8', 'Viajes y transporte', 'Billetes, aeropuerto y hotel; ir + infinitivo (futuro próximo).'),
  ],
};

const plannedLevel = (
  id: Level['id'],
  name: string,
  description: string,
): Level => ({ id, name, description, status: 'planned', modules: [] });

export const curriculum: Curriculum = {
  levels: [
    a1,
    plannedLevel(
      'A2',
      'A2 — Plataforma',
      'Hablar del pasado (pretérito perfeito e imperfeito), planes, salud y trabajo.',
    ),
    plannedLevel(
      'B1',
      'B1 — Umbral',
      'Opinar y argumentar: subjuntivo presente, condicional, experiencias.',
    ),
    plannedLevel(
      'B2',
      'B2 — Avanzado',
      'Matices: subjuntivo futuro (¡joya del portugués!), voz pasiva, debate.',
    ),
    plannedLevel(
      'C1',
      'C1 — Dominio',
      'Registro, expresiones idiomáticas de cada país y fluidez fina.',
    ),
  ],
};

export interface LessonLocation {
  level: Level;
  module: Module;
  lesson: Lesson;
}

export function findLesson(lessonId: string): LessonLocation | undefined {
  for (const level of curriculum.levels) {
    for (const module of level.modules) {
      const lesson = module.lessons.find((l) => l.id === lessonId);
      if (lesson) return { level, module, lesson };
    }
  }
  return undefined;
}

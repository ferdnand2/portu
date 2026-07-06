import type { Curriculum, Lesson, Level, Module } from '../domain/content';
import { leccion1 } from './a1/modulo1/leccion1';
import { leccion2 } from './a1/modulo1/leccion2';
import { a1m2 } from './a1/m2';
import { a1m3 } from './a1/m3';
import { a1m4 } from './a1/m4';
import { a1m5 } from './a1/m5';
import { a1m6 } from './a1/m6';
import { a1m7 } from './a1/m7';
import { a1m8 } from './a1/m8';
import { a2m1 } from './a2/m1';
import { a2m2 } from './a2/m2';
import { a2m3 } from './a2/m3';
import { a2m4 } from './a2/m4';
import { a2m5 } from './a2/m5';
import { a2m6 } from './a2/m6';
import { b1m1 } from './b1/m1';
import { b1m2 } from './b1/m2';
import { b1m3 } from './b1/m3';
import { b1m4 } from './b1/m4';
import { b1m5 } from './b1/m5';
import { b1m6 } from './b1/m6';
import { b2m1 } from './b2/m1';
import { b2m2 } from './b2/m2';
import { b2m3 } from './b2/m3';
import { b2m4 } from './b2/m4';
import { b2m5 } from './b2/m5';
import { b2m6 } from './b2/m6';

/**
 * Pensum completo. Los módulos «planned» ya tienen su lugar en la estructura;
 * escribir sus lecciones no requiere tocar código de la app.
 * El detalle pedagógico de cada módulo está en docs/pensum.md.
 */

const available = (
  id: string,
  title: string,
  description: string,
  lessons: Lesson[],
): Module => ({ id, title, description, status: 'available', lessons });

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
    available('a1-m2', 'Números, fechas y horas', 'Contar, preguntar la hora, días y meses.', [a1m2]),
    available('a1-m3', 'Familia y descripciones', 'Ter, la edad, posesivos y descripciones.', [a1m3]),
    available('a1-m4', 'Comida y restaurante', 'Pedir en un café o restaurante; gustos con «gostar de».', [a1m4]),
    available('a1-m5', 'La ciudad y direcciones', 'Direcciones, ficar y las contracciones no/na/do/da.', [a1m5]),
    available('a1-m6', 'Rutina diaria', 'Presente regular y el contraste estrella: fazendo / a fazer.', [a1m6]),
    available('a1-m7', 'Compras y ropa', 'Precios y demostrativos; legal 🇧🇷 / fixe 🇵🇹.', [a1m7]),
    available('a1-m8', 'Viajes y transporte', 'Aeropuerto y hotel; ir + infinitivo (futuro próximo).', [a1m8]),
  ],
};

const plannedLevel = (
  id: Level['id'],
  name: string,
  description: string,
): Level => ({ id, name, description, status: 'planned', modules: [] });

const a2: Level = {
  id: 'A2',
  name: 'A2 — Plataforma',
  description:
    'Hablar del pasado (perfeito e imperfeito), salud, trabajo, planes y tu casa.',
  status: 'available',
  modules: [
    available('a2-m1', 'El pretérito perfeito', 'Contar lo que hiciste; «hoy he comido» = «hoje comi».', [a2m1]),
    available('a2-m2', 'El imperfeito', 'Hábitos y recuerdos; brincar y otros falsos amigos.', [a2m2]),
    available('a2-m3', 'Salud y cuerpo', 'Dói-me 🇵🇹 / estou com dor 🇧🇷; estar com febre.', [a2m3]),
    available('a2-m4', 'Trabajo y estudios', 'El «a gente» brasileño y el futuro simple.', [a2m4]),
    available('a2-m5', 'Tiempo libre y planes', 'Invitar y quedar: topa? 🇧🇷 / alinhas? 🇵🇹.', [a2m5]),
    available('a2-m6', 'El clima y la casa', 'Está chovendo/a chover; há 🇵🇹 vs tem 🇧🇷 impersonal.', [a2m6]),
  ],
};

const b1: Level = {
  id: 'B1',
  name: 'B1 — Umbral',
  description:
    'Opinar, aconsejar, narrar y dominar los pronombres: el salto a la autonomía.',
  status: 'available',
  modules: [
    available('b1-m1', 'Opiniones y subjuntivo', 'Achar, esperar que, talvez; tomara 🇧🇷 / oxalá 🇵🇹.', [b1m1]),
    available('b1-m2', 'Consejos e hipótesis', 'Se eu fosse…; condicional vs imperfeito.', [b1m2]),
    available('b1-m3', 'Pronombres y colocación', 'Te ligo 🇧🇷 / ligo-te 🇵🇹: el gran divisor.', [b1m3]),
    available('b1-m4', 'Medios y tecnología', 'tela/ecrã, senha/palavra-passe; la voz pasiva.', [b1m4]),
    available('b1-m5', 'Narrar historias', 'Conectores, tinha feito y el discurso indirecto.', [b1m5]),
    available('b1-m6', 'Viajes e imprevistos', 'Reclamar con subjuntivo e imperativo formal.', [b1m6]),
  ],
};

const b2: Level = {
  id: 'B2',
  name: 'B2 — Avanzado',
  description:
    'Las joyas del portugués: subjuntivo futuro, infinitivo personal, registro y cultura.',
  status: 'available',
  modules: [
    available('b2-m1', 'El subjuntivo futuro', 'Quando puderes, se tiveres: obligatorio y sin equivalente.', [b2m1]),
    available('b2-m2', 'El infinitivo personal', 'Para fazermos, antes de saíres: el infinitivo que se conjuga.', [b2m2]),
    available('b2-m3', 'Argumentar y debatir', 'No entanto, aliás, embora: conectores de nivel.', [b2m3]),
    available('b2-m4', 'Correos y registro formal', 'Prezados 🇧🇷 / Exmos. 🇵🇹; condicional compuesto.', [b2m4]),
    available('b2-m5', 'Cultura: -inho y saudade', 'Diminutivos, jeitinho/desenrascar y las dos mesas.', [b2m5]),
    available('b2-m6', 'Pasivas y estilo indirecto', 'Vende-se, dizem que; reportar con precisión.', [b2m6]),
  ],
};

export const curriculum: Curriculum = {
  levels: [
    a1,
    a2,
    b1,
    b2,
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

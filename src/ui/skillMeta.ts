import type { Skill } from '../domain/content';

export const SKILL_META: Record<Skill, { icon: string; label: string }> = {
  listening: { icon: '👂', label: 'Escuchar' },
  reading: { icon: '📖', label: 'Leer' },
  writing: { icon: '✍️', label: 'Escribir' },
  speaking: { icon: '🗣️', label: 'Hablar' },
};

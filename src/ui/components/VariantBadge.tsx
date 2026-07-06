import type { Variant } from '../../domain/content';

const META: Record<Variant, { flag: string; label: string; title: string }> = {
  br: { flag: '🇧🇷', label: 'BR', title: 'Portugués de Brasil' },
  pt: { flag: '🇵🇹', label: 'PT', title: 'Portugués de Portugal' },
  both: { flag: '🇧🇷🇵🇹', label: '', title: 'Se usa en ambas variantes' },
};

/** La «banderita»: marca en qué variante se usa cada forma. */
export function VariantBadge({ variant }: { variant: Variant }) {
  const meta = META[variant];
  return (
    <span className={`badge badge-${variant}`} title={meta.title}>
      <span aria-hidden="true">{meta.flag}</span>
      {meta.label && <span className="badge-label">{meta.label}</span>}
    </span>
  );
}

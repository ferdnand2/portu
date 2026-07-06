import { REF_SECTIONS, REF_SHORTCUTS } from '../../data/reference';

/** Índice de la sección Consulta. */
export function ReferenceHome({
  onOpenSection,
}: {
  onOpenSection: (id: string) => void;
}) {
  const cards = [
    ...REF_SHORTCUTS.map((s) => ({ ...s })),
    ...REF_SECTIONS.map((s) => ({
      id: s.id,
      icon: s.icon,
      title: s.title,
      description: s.description,
    })),
  ];
  return (
    <div className="app with-bottom-nav">
      <header className="top-header">
        <h1>Consulta</h1>
        <p className="subtitle">
          Material de referencia para acudir en cualquier momento.
        </p>
      </header>
      {cards.map((card) => (
        <button
          type="button"
          className="card ref-card"
          key={card.id}
          onClick={() => onOpenSection(card.id)}
        >
          <span className="ref-icon" aria-hidden="true">
            {card.icon}
          </span>
          <span className="lesson-info">
            <span className="lesson-title">{card.title}</span>
            <span className="note">{card.description}</span>
          </span>
          <span className="chevron" aria-hidden="true">
            ›
          </span>
        </button>
      ))}
    </div>
  );
}

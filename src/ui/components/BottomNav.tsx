export type NavTab = 'learn' | 'reference';

/** Barra de navegación inferior: Aprender | Consulta. */
export function BottomNav({
  active,
  onSelect,
}: {
  active: NavTab;
  onSelect: (tab: NavTab) => void;
}) {
  return (
    <nav className="bottom-nav" aria-label="Navegación principal">
      <button
        type="button"
        className={`bottom-nav-tab ${active === 'learn' ? 'active' : ''}`}
        aria-current={active === 'learn'}
        onClick={() => onSelect('learn')}
      >
        <span aria-hidden="true">🎓</span>
        <span>Aprender</span>
      </button>
      <button
        type="button"
        className={`bottom-nav-tab ${active === 'reference' ? 'active' : ''}`}
        aria-current={active === 'reference'}
        onClick={() => onSelect('reference')}
      >
        <span aria-hidden="true">📚</span>
        <span>Consulta</span>
      </button>
    </nav>
  );
}

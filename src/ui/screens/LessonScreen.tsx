import { useState } from 'react';
import type { LessonLocation } from '../../data/curriculum';
import { ExerciseRunner } from '../exercises/ExerciseRunner';
import { GrammarSection } from '../sections/GrammarSection';
import { PronunciationSection } from '../sections/PronunciationSection';
import { VocabSection } from '../sections/VocabSection';

type Tab = 'vocab' | 'grammar' | 'pron' | 'practice';

const TABS: { id: Tab; icon: string; label: string }[] = [
  { id: 'vocab', icon: '📚', label: 'Vocabulario' },
  { id: 'grammar', icon: '🧩', label: 'Gramática' },
  { id: 'pron', icon: '👄', label: 'Pronunciación' },
  { id: 'practice', icon: '🏋️', label: 'Práctica' },
];

export function LessonScreen({
  location,
  onBack,
}: {
  location: LessonLocation;
  onBack: () => void;
}) {
  const [tab, setTab] = useState<Tab>('vocab');
  const { lesson, module, level } = location;

  return (
    <div className="app">
      <header className="lesson-header">
        <button type="button" className="back-btn" onClick={onBack} aria-label="Volver">
          ‹
        </button>
        <div>
          <div className="breadcrumb">
            {level.id} · {module.title}
          </div>
          <h2>{lesson.title}</h2>
        </div>
      </header>

      <nav className="tabs" aria-label="Secciones de la lección">
        {TABS.map((t) => (
          <button
            type="button"
            key={t.id}
            className={`tab ${tab === t.id ? 'active' : ''}`}
            aria-current={tab === t.id}
            onClick={() => setTab(t.id)}
          >
            <span aria-hidden="true">{t.icon}</span>
            <span className="tab-label">{t.label}</span>
          </button>
        ))}
      </nav>

      {tab === 'vocab' && <VocabSection vocab={lesson.vocab} />}
      {tab === 'grammar' && <GrammarSection grammar={lesson.grammar} />}
      {tab === 'pron' && <PronunciationSection notes={lesson.pronunciation} />}
      {tab === 'practice' && <ExerciseRunner lesson={lesson} />}
    </div>
  );
}

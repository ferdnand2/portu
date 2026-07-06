import { useEffect, useState } from 'react';
import { curriculum } from '../../data/curriculum';
import { EXAMS } from '../../data/exams';
import type { LevelId } from '../../domain/content';
import { exercisePool } from '../../domain/generateExercises';
import { lessonCompletion } from '../../domain/progress';
import { tts, type TtsAvailability } from '../../services/tts';
import { useProgress } from '../hooks/useProgress';

export function Home({
  onOpenLesson,
  onOpenExam,
}: {
  onOpenLesson: (id: string) => void;
  onOpenExam: (levelId: LevelId) => void;
}) {
  const { state, setVariant } = useProgress();
  const [voices, setVoices] = useState<TtsAvailability | null>(null);
  const main = state.settings.mainVariant;

  useEffect(() => {
    void tts.availability().then(setVoices);
  }, []);

  return (
    <div className="app with-bottom-nav">
      <header className="top-header">
        <h1>Portu</h1>
        <p className="subtitle">Portugués 🇧🇷🇵🇹 para hispanohablantes · MCER</p>
        <p className="byline">Hecho por Fernando Rodríguez Escalona</p>
      </header>

      <div className="card variant-picker">
        <div className="vocab-es">Tu variante principal</div>
        <p className="note">
          La practicas activamente; la otra la aprenderás a reconocer.
        </p>
        <div className="variant-buttons">
          <button
            type="button"
            className={`btn variant ${main === 'br' ? 'selected' : ''}`}
            aria-pressed={main === 'br'}
            onClick={() => setVariant('br')}
          >
            🇧🇷 Brasil
          </button>
          <button
            type="button"
            className={`btn variant ${main === 'pt' ? 'selected' : ''}`}
            aria-pressed={main === 'pt'}
            onClick={() => setVariant('pt')}
          >
            🇵🇹 Portugal
          </button>
        </div>
      </div>

      {voices && !voices.any && (
        <p className="notice">
          ⚠️ Tu dispositivo no tiene voces de portugués instaladas: el audio no
          sonará. En Android: Ajustes → Síntesis de voz.
        </p>
      )}
      {voices && voices.any && (!voices.br || !voices.pt) && (
        <p className="notice">
          ℹ️ Falta la voz {voices.br ? 'pt-PT' : 'pt-BR'} en este dispositivo;
          se usará otra voz de portugués como aproximación.
        </p>
      )}

      {curriculum.levels.map((level) => (
        <section className="level" key={level.id}>
          <div className="level-header">
            <h2>{level.name}</h2>
            {level.status === 'planned' && <span className="chip soon">Próximamente</span>}
          </div>
          <p className="level-desc">{level.description}</p>
          {EXAMS[level.id] && (
            <button
              type="button"
              className="btn exam-btn"
              onClick={() => onOpenExam(level.id)}
            >
              📝 Ejemplo de examen {level.id}
            </button>
          )}
          {level.modules.map((module) => (
            <div
              className={`card module ${module.status === 'planned' ? 'planned' : ''}`}
              key={module.id}
            >
              <div className="module-title">{module.title}</div>
              <p className="note">{module.description}</p>
              {module.status === 'planned' ? (
                <span className="chip soon">Próximamente</span>
              ) : (
                module.lessons.map((lesson, i) => {
                  const pool = exercisePool(lesson, main);
                  const { done, total } = lessonCompletion(state, lesson.id, pool);
                  return (
                    <button
                      type="button"
                      className="lesson-row"
                      key={lesson.id}
                      onClick={() => onOpenLesson(lesson.id)}
                    >
                      <span className="lesson-num">{i + 1}</span>
                      <span className="lesson-info">
                        <span className="lesson-title">{lesson.title}</span>
                        <span className="note">{lesson.description}</span>
                      </span>
                      <span className={`chip ${done === total ? 'done' : ''}`}>
                        {done === total ? '✓' : `${done}/${total}`}
                      </span>
                    </button>
                  );
                })
              )}
            </div>
          ))}
        </section>
      ))}

      <footer className="foot-note">
        Progreso guardado en este dispositivo · v0.1
      </footer>
    </div>
  );
}

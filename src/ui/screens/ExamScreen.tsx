import type { ExamInfo } from '../../domain/content';
import { ExerciseRunner } from '../exercises/ExerciseRunner';

export function ExamScreen({
  exam,
  onBack,
}: {
  exam: ExamInfo;
  onBack: () => void;
}) {
  return (
    <div className="app">
      <header className="lesson-header">
        <button type="button" className="back-btn" onClick={onBack} aria-label="Volver">
          ‹
        </button>
        <div>
          <div className="breadcrumb">Nivel {exam.levelId}</div>
          <h2>Ejemplo de examen</h2>
        </div>
      </header>

      <div className="card">
        <h3>Exámenes oficiales de referencia</h3>
        <p className="exam-official">
          <span aria-hidden="true">🇵🇹</span> {exam.officialPt}
        </p>
        <p className="exam-official">
          <span aria-hidden="true">🇧🇷</span> {exam.officialBr}
        </p>
        <p className="explanation">{exam.description}</p>
      </div>

      <ExerciseRunner
        contextId={`exam-${exam.levelId}`}
        exercises={exam.sample}
      />
    </div>
  );
}

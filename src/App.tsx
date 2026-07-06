import { useState } from 'react';
import type { LevelId } from './domain/content';
import { findLesson } from './data/curriculum';
import { EXAMS } from './data/exams';
import { ProgressProvider } from './ui/hooks/useProgress';
import { ExamScreen } from './ui/screens/ExamScreen';
import { Home } from './ui/screens/Home';
import { LessonScreen } from './ui/screens/LessonScreen';

type Route =
  | { name: 'home' }
  | { name: 'lesson'; lessonId: string }
  | { name: 'exam'; levelId: LevelId };

export default function App() {
  const [route, setRoute] = useState<Route>({ name: 'home' });
  const goHome = () => setRoute({ name: 'home' });

  let screen;
  if (route.name === 'lesson') {
    const location = findLesson(route.lessonId);
    screen = location ? (
      <LessonScreen location={location} onBack={goHome} />
    ) : undefined;
  } else if (route.name === 'exam') {
    const exam = EXAMS[route.levelId];
    screen = exam ? <ExamScreen exam={exam} onBack={goHome} /> : undefined;
  }

  return (
    <ProgressProvider>
      {screen ?? (
        <Home
          onOpenLesson={(lessonId) => setRoute({ name: 'lesson', lessonId })}
          onOpenExam={(levelId) => setRoute({ name: 'exam', levelId })}
        />
      )}
    </ProgressProvider>
  );
}

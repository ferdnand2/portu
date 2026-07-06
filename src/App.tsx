import { useState } from 'react';
import type { LevelId } from './domain/content';
import { findLesson } from './data/curriculum';
import { EXAMS } from './data/exams';
import { findRefSection } from './data/reference';
import { BottomNav } from './ui/components/BottomNav';
import { ProgressProvider } from './ui/hooks/useProgress';
import { ExamScreen } from './ui/screens/ExamScreen';
import { Home } from './ui/screens/Home';
import { LessonScreen } from './ui/screens/LessonScreen';
import { PhonemesScreen } from './ui/screens/PhonemesScreen';
import { ReferenceHome } from './ui/screens/ReferenceHome';
import { ReferenceSectionScreen } from './ui/screens/ReferenceSectionScreen';
import { VerbDetailScreen, VerbsScreen } from './ui/screens/VerbsScreen';
import { findVerb } from './data/reference/verbos';

type Route =
  | { name: 'home' }
  | { name: 'lesson'; lessonId: string }
  | { name: 'exam'; levelId: LevelId }
  | { name: 'reference' }
  | { name: 'ref-section'; sectionId: string }
  | { name: 'verb'; verbId: string };

export default function App() {
  const [route, setRoute] = useState<Route>({ name: 'home' });
  const goHome = () => setRoute({ name: 'home' });
  const goReference = () => setRoute({ name: 'reference' });

  const openRefSection = (sectionId: string) =>
    setRoute({ name: 'ref-section', sectionId });

  let screen;
  if (route.name === 'lesson') {
    const location = findLesson(route.lessonId);
    screen = location ? (
      <LessonScreen location={location} onBack={goHome} />
    ) : undefined;
  } else if (route.name === 'exam') {
    const exam = EXAMS[route.levelId];
    screen = exam ? <ExamScreen exam={exam} onBack={goHome} /> : undefined;
  } else if (route.name === 'reference') {
    screen = (
      <>
        <ReferenceHome onOpenSection={openRefSection} />
        <BottomNav active="reference" onSelect={(t) => (t === 'learn' ? goHome() : goReference())} />
      </>
    );
  } else if (route.name === 'ref-section') {
    if (route.sectionId === 'fonemas') {
      screen = <PhonemesScreen onBack={goReference} />;
    } else if (route.sectionId === 'verbos') {
      screen = (
        <VerbsScreen
          onBack={goReference}
          onOpenVerb={(verbId) => setRoute({ name: 'verb', verbId })}
        />
      );
    } else {
      const section = findRefSection(route.sectionId);
      screen = section ? (
        <ReferenceSectionScreen section={section} onBack={goReference} />
      ) : undefined;
    }
  } else if (route.name === 'verb') {
    const verb = findVerb(route.verbId);
    screen = verb ? (
      <VerbDetailScreen
        verb={verb}
        onBack={() => setRoute({ name: 'ref-section', sectionId: 'verbos' })}
      />
    ) : undefined;
  }

  return (
    <ProgressProvider>
      {screen ?? (
        <>
          <Home
            onOpenLesson={(lessonId) => setRoute({ name: 'lesson', lessonId })}
            onOpenExam={(levelId) => setRoute({ name: 'exam', levelId })}
          />
          <BottomNav active="learn" onSelect={(t) => (t === 'learn' ? goHome() : goReference())} />
        </>
      )}
    </ProgressProvider>
  );
}

import { useState } from 'react';
import { findLesson } from './data/curriculum';
import { ProgressProvider } from './ui/hooks/useProgress';
import { Home } from './ui/screens/Home';
import { LessonScreen } from './ui/screens/LessonScreen';

type Route = { name: 'home' } | { name: 'lesson'; lessonId: string };

export default function App() {
  const [route, setRoute] = useState<Route>({ name: 'home' });

  const location = route.name === 'lesson' ? findLesson(route.lessonId) : undefined;

  return (
    <ProgressProvider>
      {route.name === 'lesson' && location ? (
        <LessonScreen
          location={location}
          onBack={() => setRoute({ name: 'home' })}
        />
      ) : (
        <Home onOpenLesson={(lessonId) => setRoute({ name: 'lesson', lessonId })} />
      )}
    </ProgressProvider>
  );
}

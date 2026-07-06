import type { Exercise } from '../../domain/content';
import { ListenChoice, ReadChoice } from './ChoiceExercises';
import { Dictation, FillBlank, Translate } from './TextExercises';
import { OrderWords } from './OrderWords';
import { Speak } from './Speak';

export interface ExerciseViewProps {
  exercise: Exercise;
  onResult: (correct: boolean) => void;
}

/**
 * Despacho por tipo de ejercicio (principio abierto/cerrado): para añadir un
 * tipo nuevo se amplía la unión `Exercise` en el dominio, se crea su
 * componente y se añade un caso aquí — el `default: never` hace que el
 * compilador avise si falta alguno. Nada más de la app cambia.
 */
export function ExerciseView({ exercise, onResult }: ExerciseViewProps) {
  switch (exercise.type) {
    case 'listen-choice':
      return <ListenChoice exercise={exercise} onResult={onResult} />;
    case 'read-choice':
      return <ReadChoice exercise={exercise} onResult={onResult} />;
    case 'dictation':
      return <Dictation exercise={exercise} onResult={onResult} />;
    case 'fill-blank':
      return <FillBlank exercise={exercise} onResult={onResult} />;
    case 'translate':
      return <Translate exercise={exercise} onResult={onResult} />;
    case 'order-words':
      return <OrderWords exercise={exercise} onResult={onResult} />;
    case 'speak':
      return <Speak exercise={exercise} onResult={onResult} />;
    default: {
      const exhaustive: never = exercise;
      return exhaustive;
    }
  }
}

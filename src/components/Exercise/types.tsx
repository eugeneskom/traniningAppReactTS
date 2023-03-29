import { Training } from "../../types/types";

export interface ExerciseProps {
  exercise: Training;
  onCompleteExercise: (id: number) => void;
}
export type ExercisesList = "skipping" | "push ups" | "jumping jacks" | "lunges" | "squats";

export type Training = {
  type: ExercisesList;
  sets: number;
  reps: number;
  id: number;
  checked: boolean;
};

export type Repetition = {
  exercise: string,
  times: number | null
}
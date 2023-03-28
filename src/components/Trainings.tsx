import Exercise from "./Exercise";
// type: "skipping" | "push ups" | "jumping jacks" | "lunges" | "plank" | "squats";
type ExercisesList = "skipping" | "push ups" | "jumping jacks" | "lunges" | "squats";

type Training = {
  type: ExercisesList;
  sets: number;
  reps: number;
  id: number;
};

const trainingList: Training[] = [
  { type: "skipping", sets: 3, reps: 100, id: 1 },
  { type: "push ups", sets: 3, reps: 12, id: 2 },
  { type: "jumping jacks", sets: 3, reps: 15, id: 3 },
  { type: "lunges", sets: 3, reps: 12, id: 4 },
  { type: "squats", sets: 3, reps: 15, id: 5 },
];

export default function Trainings() {
  return (
    <>
      {trainingList.map((exc) => (
        <Exercise key={exc.id} type={exc.type} sets={exc.sets} reps={exc.reps} id={exc.id} />
      ))}
    </>
  );
}

import Exercise from "./Exercise/Exercise";
import { Training } from "../types/types";
import { useState } from "react";
import { Typography } from "@mui/material";

const trainingListData: Training[] = [
  { type: "skipping", sets: 3, reps: 100, id: 1, checked: false },
  { type: "push ups", sets: 3, reps: 12, id: 2, checked: false },
  { type: "jumping jacks", sets: 3, reps: 15, id: 3, checked: false },
  { type: "lunges", sets: 3, reps: 12, id: 4, checked: false },
  { type: "squats", sets: 3, reps: 15, id: 5, checked: false },
];

export default function Trainings() {
  const [trainingList, setTrainingList] = useState(trainingListData);
  const [isTrainingFinished, setIstTrainingFinished] = useState(false)

  function handleCompleteExercise(id: number): void {
    setTrainingList(() => {
      const completedTrainings = trainingList.map((exercise) => {
        if (exercise.id === id) {
          return { ...exercise, checked: !exercise.checked };
        } else {
          return exercise;
        }
      });
      const allChecked = completedTrainings.every((training) => training.checked);
      if (allChecked) {
        console.log("all checked");
        setIstTrainingFinished(true)
      }else{
        setIstTrainingFinished(false)
      }
      return completedTrainings;
    });
  }

  return (
    <>
      {trainingList.map((exercise) => (
        <Exercise key={exercise.id} exercise={exercise} onCompleteExercise={handleCompleteExercise} />
      ))}
      {isTrainingFinished ? (
        <Typography variant="h3" component="h4">
          Congratulation, you've completed the training. Well done!
        </Typography>
      ) : ""
      }
    </>
  );
}

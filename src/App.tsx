import React from "react";
import "./App.css";
import { useState, createContext, useEffect } from "react";
import { getTrainings } from "./libs/helpers";
import Form from "./components/Form";
import ShowCase from "./components/ShowCase";
import { Repetition } from "./libs/helpers";
export type GlobalContent = {
  inputNumber: number;
  setInputNumber: (c: number) => void;
  isInputError: boolean;
  setIsInputError: (c: boolean) => void;
  trainings: Repetition[];
  setTrainings: (c: Repetition[]) => void;
};

export const AppContext = createContext<GlobalContent>({
  inputNumber: 0,
  setInputNumber: () => {},
  isInputError: false,
  setIsInputError: () => {},
  trainings: [],
  setTrainings: () => {},
});
function App() {
  const [inputNumber, setInputNumber] = useState(0);
  const [isInputError, setIsInputError] = useState(false);
  const [trainings, setTrainings] = useState<Repetition[]>(getTrainings());

  return (
    <AppContext.Provider value={{ trainings, setTrainings, inputNumber, setInputNumber, isInputError, setIsInputError }}>
      <Form />
      <ShowCase />
    </AppContext.Provider>
  );
}

export default App;

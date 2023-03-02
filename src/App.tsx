import React from "react";
import "./App.css";
import { useState, createContext, useEffect } from "react";
import { getTrainings } from "./libs/helpers";
import Form from "./components/Form";
import History from "./components/History";
import { Repetition } from "./libs/helpers";

export type GlobalContent = {
  inputNumber: number;
  setInputNumber: (c: number) => void;
  isInputError: boolean;
  setIsInputError: (c: boolean) => void;
  trainings: Repetition[] | null;
  setTrainings: (trainings: (arg: Repetition[] | null) => Repetition[] | Repetition[]) => void;
};

export const AppContext = createContext<GlobalContent>({
  inputNumber: 0,
  setInputNumber: () => {},
  isInputError: false,
  setIsInputError: () => {},
  trainings: [] || null,
  setTrainings: () => {},
});
function App() {
  const [inputNumber, setInputNumber] = useState(0);
  const [isInputError, setIsInputError] = useState(false);
  const [trainings, setTrainings] = useState<Repetition[] | null>(null);

  useEffect(() => {
    if (getTrainings() !== null) {
      setTrainings(getTrainings());
    }
  }, []);

  return (
    <AppContext.Provider value={{ trainings, setTrainings, inputNumber, setInputNumber, isInputError, setIsInputError }}>
      <Form />
      <h2>History</h2>
      <History />
    </AppContext.Provider>
  );
}

export default App;

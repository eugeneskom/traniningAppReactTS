import React from "react";
import "./App.css";
import { useState, createContext, useContext } from "react";

import Form from "./components/Form";
export type GlobalContent = {
  inputNumber: number;
  setInputNumber: (c: number) => void;
  isInputError: boolean;
  setIsInputError: (c:boolean) => void;

};
export const AppContext = createContext<GlobalContent>({
  inputNumber: 0,
  setInputNumber: () => {},
  isInputError: false,
  setIsInputError: () => {},
});
function App() {
  const [inputNumber, setInputNumber] = useState(1);
  const [isInputError, setIsInputError] = useState(false);
  return (
    <AppContext.Provider value={{ inputNumber, setInputNumber,isInputError,setIsInputError }}>
      <Form />
    </AppContext.Provider>
  );
}

export default App;

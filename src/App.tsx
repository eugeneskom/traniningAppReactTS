import "./App.css";
import { useState, createContext, useEffect } from "react";
import { getTrainings } from "./libs/helpers";
import Form from "./components/Form";
import History from "./components/History";
import { Repetition } from "./libs/helpers";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export type GlobalContent = {
  inputNumber: number | null;
  setInputNumber: (c: number | null) => void;
  isInputError: boolean;
  setIsInputError: (c: boolean) => void;
  trainings: Repetition[] | null;
  setTrainings: (trainings: ((arg: Repetition[] | null) => Repetition[]) | Repetition[] | null) => void;
};

export const AppContext = createContext<GlobalContent>({
  inputNumber: null,
  setInputNumber: () => {},
  isInputError: false,
  setIsInputError: () => {},
  trainings: [] || null,
  setTrainings: () => {},
});
function App() {
  const [inputNumber, setInputNumber] = useState<number | null>(null);
  const [isInputError, setIsInputError] = useState(false);
  const [trainings, setTrainings] = useState<Repetition[] | null>(null);

  useEffect(() => {
    if (getTrainings() !== null) {
      setTrainings(getTrainings());
    }
  }, []);

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Save training</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          {/* <li>
            <Link to="/users">Users</Link>
          </li> */}
        </ul>
      </nav>
      <AppContext.Provider value={{ trainings, setTrainings, inputNumber, setInputNumber, isInputError, setIsInputError }}>
      <Routes>
          <Route
            path="/"
            element={<Form />}
          />
          <Route path="/history" element={<History />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
        
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;

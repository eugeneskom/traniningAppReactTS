import "./App.css";
import { useState, createContext, useEffect } from "react";
import { getTrainings } from "./libs/helpers";
import Form from "./components/Form";
import History from "./components/History";
import { Repetition } from "./libs/helpers";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

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

const NavLink = styled(Link)`
  background-color: #1976d2;
  text-align: center;
  color: white;
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
  text-decoration:none;
  :hover{
    background-color:#0c62b9;
  }
`;
const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  column-gap:10px;
`

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
        <NavList>
          <li>
            <NavLink to="/">Save training</NavLink>
          </li>
          <li>
            <NavLink to="/history">History</NavLink>
          </li>
          {/* <li>
            <Link to="/users">Users</Link>
          </li> */}
        </NavList>
      </nav>
      <AppContext.Provider value={{ trainings, setTrainings, inputNumber, setInputNumber, isInputError, setIsInputError }}>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/history" element={<History />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;

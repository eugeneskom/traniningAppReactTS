import "./App.css";
import { useState, createContext, useEffect } from "react";
import { getTrainings } from "./libs/helpers";
import Form from "./components/Form";
import History from "./components/History";
import { Repetition } from "./libs/helpers";
import { BrowserRouter, Routes, Route,  NavLink, NavLinkProps, useLocation } from "react-router-dom";
import styled from "styled-components";
import Trainings from "./components/Trainings";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import AnimatedRoutes from "./components/AnimatedRoutes";

export type GlobalContent = {
  inputNumber: number | "";
  setInputNumber: (c: number | "") => void;
  isInputError: boolean;
  setIsInputError: (c: boolean) => void;
  trainings: Repetition[] | null;
  setTrainings: (trainings: ((arg: Repetition[] | null) => Repetition[]) | Repetition[] | null) => void;
};

export const AppContext = createContext<GlobalContent>({
  inputNumber: "",
  setInputNumber: () => {},
  isInputError: false,
  setIsInputError: () => {},
  trainings: [] || null,
  setTrainings: () => {},
});

interface StyledNavLinkProps extends NavLinkProps {
  activeclassname?: string;
}

const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
  background-color: #1976d2;
  text-align: center;
  color: white;
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
  text-decoration:none;
  &.${props => props.activeclassname} {
    font-weight: bold;
    text-decoration: underline;
  }
  :hover{
    background-color:#0c62b9;
  }
`;
const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  column-gap:10px;
`
const Container = styled.div`
  max-width:1200px;
  width:100%;
  margin: 0 auto;
  padding: 0 15px;
`

function App() {
  const [inputNumber, setInputNumber] = useState<number | "">("");
  const [isInputError, setIsInputError] = useState(false);
  const [trainings, setTrainings] = useState<Repetition[] | null>(null);

  useEffect(() => {
    if (getTrainings() !== null) {
      setTrainings(getTrainings());
    }
  }, []);

  return (
    <BrowserRouter>
    <Container>

      <nav>
        <NavList>
          <li>
            <StyledNavLink to="/" activeclassname="active" >Save training</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/history" activeclassname="active" >History</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/trainings" activeclassname="active" >Trainings</StyledNavLink>
          </li>
        </NavList>
      </nav>
      <AppContext.Provider value={{ trainings, setTrainings, inputNumber, setInputNumber, isInputError, setIsInputError }}>
        {/* <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/history" element={<History />} />
          <Route path="/trainings" element={<Trainings />} />
        </Routes> */}
        <AnimatedRoutes/>
      </AppContext.Provider>
    </Container>
    </BrowserRouter>
  );
}

export default App;

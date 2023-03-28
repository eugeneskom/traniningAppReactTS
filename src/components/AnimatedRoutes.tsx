import { BrowserRouter, Routes, Route,  NavLink, NavLinkProps, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Form from "./Form";
import History from "./History";
import Trainings from "./Trainings";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
      <Routes location={location}>
          <Route path="/" element={<Form />} />
          <Route path="/history" element={<History />} />
          <Route path="/trainings" element={<Trainings />} />
        </Routes>

      </CSSTransition>
    </TransitionGroup>
  );
}

export default AnimatedRoutes
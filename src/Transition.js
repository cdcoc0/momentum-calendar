import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Momentum from './momentum/Momentum';
import Calendar from './calendar/Calendar';
import './Transition.scss';

const Transition = () => {
    const location = useLocation();

  return (
      <TransitionGroup className="Transition-group">
        <CSSTransition key={location.pathname} className="slide" timeout={{enter: 800, exit: 400}}>
            <Switch location={location}>
                <Route path="/" exact><Momentum /></Route>
                <Route path="/calendar" exact><Calendar /></Route>
            </Switch>
        </CSSTransition>
      </TransitionGroup>
  );
}

export default Transition;
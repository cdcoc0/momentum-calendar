import React, {useState, useEffect} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Momentum from './momentum/Momentum';
import Calendar from './calendar/Calendar';
import './Transition.scss';

const Transition = () => {
  const [direction, setDirection] = useState('slideToLeft')
  const location = useLocation();

  const getDirection = () => {
    if(window.location.pathname !== '/') {
      setDirection('slideToLeft');
    } else { setDirection('slideToRight'); }
  }

  useEffect(() => {
    getDirection();
    console.log(direction, window.location.pathname);
  }, [direction, location])

  return (
      <TransitionGroup className="Transition-group">
        <CSSTransition key={location.pathname} 
                        classNames={direction} timeout={{enter: 1000, exit: 1000}}>
            <Switch location={location}>
                <Route path="/" exact><Momentum /></Route>
                <Route path="/calendar" exact><Calendar /></Route>
            </Switch>
        </CSSTransition>
      </TransitionGroup>
  );
}

export default Transition;
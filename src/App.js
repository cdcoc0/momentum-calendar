import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Momentum from './momentum/Momentum';
import Background from './Background';
import Calendar from './calendar/Calendar';

const App = () => {
  return (
    <Router>
      <Background />
      <Switch>
        <Route path="/" exact><Momentum /></Route>
        <Route path="/calendar" exact><Calendar /></Route>
      </Switch>
    </Router>
  );
}

export default App;
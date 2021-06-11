import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Background from './Background';
import Transition from './Transition';

const App = () => {
  return (
    <Router>
      <Background />
      <Transition />
    </Router>
  );
}

export default App;
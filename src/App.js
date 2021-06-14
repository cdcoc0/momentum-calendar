import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Background from './Background';
import Transition from './Transition';

const App = () => {
  return (
    <Router>
      <div style={{height: "100%"}}>
        <Background />
        <div className="app-nav-space"></div>
        <Transition />
      </div>
    </Router>
  );
}

export default App;
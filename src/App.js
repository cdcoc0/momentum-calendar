import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Background from './Background';
import Transition from './Transition';
import SignIn from './auth/SignIn';
import { authService } from './fbconfig';

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, [])

  return (
    <Router>
      <div style={{height: "100%"}}>
        <Background />
        {
          init ? (isLoggedIn ? 
            <Transition /> : <Route exact path="/"><SignIn /></Route>) : <div type="text" style={{color: "white"}}>Loading...</div>
        }
      </div>
    </Router>
  );
}

export default App;
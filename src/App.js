import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Background from './Background';
import Transition from './Transition';
import SignIn from './auth/SignIn';
import { authService } from './fbconfig';

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        setUserObj({
          uid: user.uid,
          displayName: user.displayName,
          updateProfile: args => user.updateProfile(args)
        });
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, [])

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };

  return (
    <Router>
      <div style={{height: "100%"}}>
        <Background />
        {
          init ? (isLoggedIn ? 
            <Transition userObj={userObj} refreshUser={refreshUser} /> : <Route exact path="/"><SignIn /></Route>) : <div type="text" style={{color: "white"}}>Loading...</div>
        }
      </div>
    </Router>
  );
}

export default App;
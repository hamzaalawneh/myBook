// App.js

import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import firebase from './Firebase'
require('firebase/auth')



function App(props) {
  const [userId, setUserId] = useState(localStorage.getItem('userId'));


  // const [userId, setUserId] = useState(1);
  // localStorage.setItem('userId','')
  return (
    <Router>
      <div>
        {console.log('userId' + userId)}
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/Home' component={Home} />
          <Route path='/SignUp' component={SignUp} />
        </Switch>

      </div>
    </Router>
  );

}

export default App;
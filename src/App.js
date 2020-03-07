// App.js

import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import firebase from './Firebase'


// firebase.firestore().collection('users').add({
//   title:'testing HEre'
// })
function App(props) {
  // const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const [userId, setUserId] = useState(1);

  return (
    <Router>
      <div>
        {userId ?
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Login' component={Login} />
            <Route path='/SignUp' component={SignUp} />
          </Switch>
          :
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/Login' component={Login} />
            <Route path='/SignUp' component={SignUp} />
          </Switch>
        }
      </div>
    </Router>
  );

}

export default App;
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Papers from './pages/Papers'
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
        <Route path='/' component={Papers} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/signup' component={Signup} exact />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

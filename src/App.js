import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Redirect, Router } from 'react-router';

import Login from './core/pages/login/Login';
import Dashboard from './core/pages/dashboard/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path='/' render={() =>
          <Redirect to='/login' />
        } />
        <Route exact path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
      </Router>
    );
  }
}

export default App;

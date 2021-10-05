import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './core/pages/login/Login';
import Dashboard from './core/pages/dashboard/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/dashboard' component={ Dashboard } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

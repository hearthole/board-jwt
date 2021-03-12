import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/header';
import Home from './view/home';
import Login from './view/login';
import Board from './view/board';
import Auth from './hoc/auth';

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Auth(Home, false)} />
          <Route exact path="/login" component={Auth(Login, false)} />
          <Route exact path="/board" component={Auth(Board, true)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

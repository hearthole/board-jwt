import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/header';
import Home from './view/home';
import Login from './view/login';
import Board from './view/board';

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/board" component={Board} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

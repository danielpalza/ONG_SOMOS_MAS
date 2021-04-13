import React from 'react';
import logo from './logo.svg';
import './App.css';

/* Componentes */
import Home from './components/Home/home.js';

import { Counter } from './components/counter/Counter';
/* Modulos */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;

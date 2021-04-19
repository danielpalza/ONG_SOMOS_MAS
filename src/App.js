import React from 'react';
import './App.css';

/* Componentes */
import HomeScreen from './pages/homeScreen/homeScreen';
import Testimonials from './pages/backoffice/testimonial/testimonials';
import { Counter } from './components/counter/Counter';
/* Modulos */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;

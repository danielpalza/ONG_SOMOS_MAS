import React from 'react';
import './App.css';

/* Componentes */
import HomePage from './pages/HomeScreen/homeScreen';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import ProfileScreen from './components/ProfileScreen';
import Login from './pages/login';
import Logout from './pages/logout/Logout';
/* Modulos */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/my-profile" component={ProfileScreen} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

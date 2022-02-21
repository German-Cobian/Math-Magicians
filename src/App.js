import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CalculatorPage from './pages/CalculatorPage';
import Quote from './pages/QuotePage';
import Home from './pages/HomePage';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <div className="container">
          <Route path="/calculator">
            <CalculatorPage />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </div>
      </Switch>
    </Router>
  </>
);

export default App;

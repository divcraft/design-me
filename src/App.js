import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StrategyPage from './pages/StrategyPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/strategy' component={StrategyPage} />
        <Route path='/faq' component={FAQPage} />
        <Route path='/contact' component={ContactPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;

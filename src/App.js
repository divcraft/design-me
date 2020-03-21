import React from 'react';
import './styles/style.sass';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StrategyPage from './pages/StrategyPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/strategy' component={StrategyPage} />
        <Route path='/faq' component={FAQPage} />
        <Route path='/contact' component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;

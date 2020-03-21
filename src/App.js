import React from 'react';
import './styles/style.sass';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import StrategyPage from './pages/StrategyPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/strategy' component={StrategyPage} />
          <Route path='/faq' component={FAQPage} />
          <Route path='/contact' component={ContactPage} />
          <Redirect to='/' />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;

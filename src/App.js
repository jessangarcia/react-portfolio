import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Projects from './components/Project';
import Resume from './components/Resume';
import Header from './components/Header';

function App() {

  return (
    <div>
      <Router>
        <Nav />
        <Header />
        <Switch>
          <Route path='/react=portfolio' component={About} />
          <Route path='/about' component={About} />
          <Route path='/project' component={Projects} />
          <Route path='/contact' component={Contact} />
          <Route path='/resume' component={Resume} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

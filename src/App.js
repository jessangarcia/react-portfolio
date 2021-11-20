import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Projects from './components/Project';

function App() {

  return (
    <div>
        <Router>
          <nav>
          <Nav />
          </nav>
          <main>
          <Switch>
            <Route exact path='/react-port' component={About} />
            <Route path='/about' component={About} />
            <Route path='/project' component={Projects} />
            <Route path='/contact' component={Contact} />
          </Switch>
          </main>
          <footer className="fixed-bottom">
            <Footer />
          </footer>
        </Router>
    </div>
  );
}

export default App;

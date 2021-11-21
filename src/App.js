import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Projects from './components/Project';
import Resume from './components/Resume';

function App() {

  return (
    <div>
        <Router>
          <nav>
          <Nav />
          </nav>
          <main>
          <Switch>
            <Route exact path='/react=portfolio' component={About} />
            <Route path='/about' component={About} />
            <Route path='/project' component={Projects} />
            <Route path='/contact' component={Contact} />
            <Route path='/resume' component={Resume} />
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

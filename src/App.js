import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

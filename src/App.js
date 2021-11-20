import React, { useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Projects from './components/Project';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: 'projects',
      description: 'projects created while in UofU bootcamp',
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {!contactSelected ? (
          <>
          <About />
          <Projects />
          </>
        ) : (
          <Contact />
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

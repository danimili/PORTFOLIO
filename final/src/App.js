import React from 'react';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}

export default App;

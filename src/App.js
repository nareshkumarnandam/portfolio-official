import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Projects from './components/Projects';
// import CircularIndeterminate from './components/common/CircularIndeterminate';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <br />
        <About />
        <br />
        <Experience />
        <br />
        <Projects />
        <br />
        <Contact />
      </BrowserRouter>
    </>
  );
}

export default App;

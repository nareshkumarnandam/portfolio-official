import { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

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
      </BrowserRouter>
    </>
  );
}

export default App;

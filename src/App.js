import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Projects from './components/Projects';
import CircularIndeterminate from './components/common/CircularIndeterminate';
import Contact from './components/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isSlowNetwork, setIsSlowNetwork] = useState(false);

  useEffect(() => {
    // Check the network status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Check network type (slow network detection)
    const updateNetworkType = () => {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (connection && connection.downlink < 1.5) { // Adjust threshold as needed for "slow" network
        setIsSlowNetwork(true);
      } else {
        setIsSlowNetwork(false);
      }
    };

    // Event listeners for network status
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check slow network on load
    updateNetworkType();
    window.addEventListener('load', () => setIsLoading(false)); // Stop loading once the page fully loads

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Show loading spinner if offline or on slow network
  if (!isOnline || isLoading) {
    return <CircularIndeterminate />;
  }

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

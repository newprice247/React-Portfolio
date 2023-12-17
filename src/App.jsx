

import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
// Import the swipe handler
import { useSwipeable } from 'react-swipeable';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { useLocation } from 'react-router-dom';

// This is the main component of the app
function App() {
  // Create a swipe handler to navigate between pages
  const navigate = useNavigate();
  const currentPage = useLocation().pathname;
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentPage === '/') {
        navigate('/resume');
      } else if (currentPage === '/resume') {
        navigate('/contact');
      } else if (currentPage === '/contact') {
        navigate('/about');
      } else if (currentPage === '/about') {
        navigate('/projects');
      } else if (currentPage === '/projects') {
        navigate('/certs');
      } else if (currentPage === '/certs') {
        navigate('/');
      }
    },
    onSwipedRight: () => {
      if (currentPage === '/') {
        navigate('/projects');
      } else if (currentPage === '/projects') {
        navigate('/about');
      } else if (currentPage === '/about') {
        navigate('/contact');
      } else if (currentPage === '/contact') {
        navigate('/resume');
      } else if (currentPage === '/resume') {
        navigate('/certs');
      } else if (currentPage === '/certs') {
        navigate('/');
      }
    },
  });

  // Render the app, using Outlet to determine the page, sandwiched between the header and footer
  return (
    <div className="App" {...handlers}>
      <Header />
      <main variant="gradient" color="gray" className="mx-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;


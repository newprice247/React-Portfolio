

import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { useLocation } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const currentPage = useLocation().pathname;
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentPage === '/') {
        navigate('/contact'); // Navigate to the next page
      } else if (currentPage === '/contact') {
        navigate('/projects'); // Navigate to the next page
      } else if (currentPage === '/projects') {
        navigate('/about'); // Navigate to the next page
      } else if (currentPage === '/about') {
        navigate('/'); // Navigate to the next page
      }
    },
    onSwipedRight: () => {
      if (currentPage === '/') {
        navigate('/about'); // Navigate to the next page
      } else if (currentPage === '/about') {
        navigate('/projects'); // Navigate to the next page
      } else if (currentPage === '/projects') {
        navigate('/contact'); // Navigate to the next page
      } else if (currentPage === '/contact') {
        navigate('/'); // Navigate to the next page
      }
    }
  });

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


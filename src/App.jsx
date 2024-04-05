

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

// This is the main component of the app
function App() {

  // Render the app, using Outlet to determine the page, sandwiched between the header and footer
  return (
    <div className="App">
      <Header />
      <main variant="gradient" color="gray" className="mx-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;


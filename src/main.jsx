

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';
import App from './App.jsx';

// page imports
import Error from './pages/Error.jsx';
import Homepage from './pages/Homepage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import CertsPage from './pages/CertsPage';
// css imports
import './App.css';
import './index.css';

// Create a router to the separate pages of the app
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Homepage />,
        onLoading: () => {
          console.log('Loading...');
        },
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/projects',
        element: <ProjectPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/resume',
        element: <ResumePage />,
      },
      {
        path: '/certs',
        element: <CertsPage />,
      },

      
    ],
  },
]);

// Render the app using the router to determine the page
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrap the app in a theme provider to provide the default theme
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);

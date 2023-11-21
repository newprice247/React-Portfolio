

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';
import App from './App.jsx';
import Error from './components/Error.jsx';
import Homepage from './components/Homepage.jsx';
import AboutPage from './components/AboutPage.jsx';
import ProjectPage from './components/ProjectPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import ResumePage from './components/Resume.jsx';
import './App.css';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Homepage />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './components/Error.jsx'
import Homepage from './components/Homepage.jsx'
import AboutPage from './components/AboutPage.jsx'
import './App.css'
import './index.css'

import { ThemeProvider } from '@material-tailwind/react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      // {
      //   path: '/',
      //   element: <Header />,
      // },
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
)

import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { Outlet } from 'react-router-dom'
import {
  Card, Typography
} from '@material-tailwind/react'

function App() {

  return (
    <>
      <Header />
      <main
        variant="gradient"
        color="gray"
        className="mx-3"
        >
        <Outlet />
      </main>
      < Footer />
    </>
  )
}

export default App

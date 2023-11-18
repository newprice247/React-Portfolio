import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { Outlet } from 'react-router-dom'
import {
  Card, Typography
} from '@material-tailwind/react'

function App() {

  return (
    <div className="App"
    >
      <Header />
      <main
        variant="gradient"
        color="gray"
        className="mx-3 h-[100vh]"
      >
        <Outlet />
      </main>
      < Footer />
    </div>
  )
}

export default App

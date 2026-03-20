import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LandingPage from './components/LandingPage'
import Dashboard from './components/Dashboard'
import Graphique from './graphique'

function App() {


  return (
    <>
      <LandingPage/>
      <Dashboard/>
      <Graphique/>
    </>
  )
}

export default App

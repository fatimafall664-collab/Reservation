<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Accueil from "./Pages/Accueil";
import Series from "./Pages/Series";
import Connexion from "./Pages/Connexion";
import Inscription from "./Pages/Inscription";
import Reinitialisation from "./Pages/Reinitialisation";
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LandingPage from './components/LandingPage'
import Dashboard from './components/Dashboard'
import Graphique from './graphique'

function App() {

>>>>>>> origin/feature/landing-page

export default function App() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#7f1d1d] text-white">
    <BrowserRouter>
      <Navbar logo="/" />
      <Routes>
        <Route path="/" element={<Accueil />} />
         <Route path="/" element={<Series />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/reset-password" element={<Reinitialisation />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
=======
    <>
      <LandingPage/>
      <Dashboard/>
      <Graphique/>
    </>
  )
>>>>>>> origin/feature/landing-page
}

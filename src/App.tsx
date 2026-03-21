<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Accueil from "./Pages/Accueil";
import Series from "./components/Series"
import Connexion from "./Pages/Connexion";
import Inscription from "./Pages/Inscription";
import Reinitialisation from "./Pages/Reinitialisation";
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg';
import './App.css'
import Footer from './components/Footer';  
import Chart from './components/diagramme';

function App() {
  const [count, setCount] = useState(0)
>>>>>>> origin/feature/diagramme

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
}
=======
    <>
      <Chart />
      <Footer />
    </>
  )
}

export default App
>>>>>>> origin/feature/diagramme

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Accueil from "./Pages/Accueil";
import Series from "./components/serie";
import Connexion from "./Pages/Connexion";
import Inscription from "./Pages/Inscription";
import Reinitialisation from "./Pages/Reinitialisation";
import { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Film from "./components/film";
import Serie from "./components/serie";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Chart from "./components/diagramme";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#7f1d1d] text-white flex flex-col">
      <BrowserRouter>
        <Navbar logo="/" />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/series" element={<Series />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/reset-password" element={<Reinitialisation />} />
        </Routes>
      </BrowserRouter>
          <LandingPage/>
          <Serie/>
          <Film/>
          <Dashboard/>
          <Chart />
          <Footer />
    </div>
  );
}

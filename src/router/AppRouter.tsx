import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages publiques
import LandingPage from "../Pages/landing/LandingPage";
import Login from "../Pages/auth/Login";
import Register from "../Pages/auth/Register";
import ResetPassword from "../Pages/auth/Resetpassword";


// Pages Dashboard
import DashboardHome from "../Pages/dashboard/DashboardHome";
import Reservations from "../Pages/dashboard/Reservations";
import Tickets from "../Pages/dashboard/Tickets";
import FilmsPage from "../Pages/films/FilmsPage";
import SeancesPage from "../Pages/seances/SeancesPage";
import ReservationPage from "../Pages/reservation/ReservationPage";
import PaiementPage from "../Pages/paiement/PaiementPage";
import TicketPage from "../Pages/ticket/TicketPage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Routes publiques */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/reset" element={<ResetPassword />} />

        {/* Routes Dashboard */}
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/dashboard/reservations" element={<Reservations />} />
        <Route path="/dashboard/tickets" element={<Tickets />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/films/:id" element={<SeancesPage />} />
        <Route path="/reservation/:id" element={<ReservationPage />} />
        <Route path="/paiement" element={<PaiementPage />} />
        <Route path="/ticket/:id" element={<TicketPage />} />
      </Routes>
    </Router>
  );
}

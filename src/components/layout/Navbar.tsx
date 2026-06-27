import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-black/80 backdrop-blur-md px-6 py-4 flex justify-between items-center fixed top-0 left-0 z-50 pointer-events-auto">
      
      {/* Logo */}
      <Link to="/" className="text-blue-600 text-2xl font-bold">
        MFRSCiné
      </Link>

      {/* Liens */}
      <div className="flex gap-4 items-center">

        {/* BOUTON DASHBOARD FONCTIONNEL */}
        <Link to="/dashboard">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">
            Dashboard
          </button>
        </Link>

        <Link to="/auth/login" className="text-white hover:text-blue-500">
          Connexion
        </Link>

        <Link to="/auth/register" className="text-white hover:text-blue-500">
          Inscription
        </Link>
      </div>
    </nav>
  );
}

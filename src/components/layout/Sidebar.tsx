import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 p-6 flex flex-col gap-6 fixed left-0 top-0">
      <h2 className="text-red-600 text-xl font-bold">MFRSCiné</h2>

      <nav className="flex flex-col gap-4 text-gray-300">
        <Link to="/dashboard" className="hover:text-white">
          Dashboard
        </Link>
        <Link to="/dashboard/reservations" className="hover:text-white">
          Mes réservations
        </Link>
        <Link to="/dashboard/tickets" className="hover:text-white">
          Mes billets
        </Link>
      </nav>
    </aside>
  );
}

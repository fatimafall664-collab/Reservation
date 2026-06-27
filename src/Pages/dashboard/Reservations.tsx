import DashboardLayout from "./components/DashboardLayout";
import ReservationTable from "./components/ReservationTable";

export default function Reservations() {
  const reservations = [
    { id: 1, film: "Inception", date: "12/02/2025", salle: "3", seat: "B12", status: "Confirmé" },
    { id: 2, film: "Interstellar", date: "20/02/2025", salle: "1", seat: "A5", status: "Confirmé" },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Mes réservations</h1>
      <ReservationTable data={reservations} />
    </DashboardLayout>
  );
}

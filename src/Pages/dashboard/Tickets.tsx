import DashboardLayout from "./components/DashboardLayout";
import TicketCard from "./components/TicketCard";

export default function Tickets() {
  const tickets = [
    {
      film: "Inception",
      date: "12/02/2025",
      salle: "3",
      seat: "B12",
      code: "CINE-98273",
    },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Mes billets</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tickets.map((t, i) => (
          <TicketCard key={i} {...t} />
        ))}
      </div>
    </DashboardLayout>
  );
}

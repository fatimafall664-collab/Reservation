interface Reservation {
  id: number;
  film: string;
  date: string;
  salle: string;
  seat: string;
  status: string;
}

export default function ReservationTable({ data }: { data: Reservation[] }) {
  return (
    <table className="w-full text-left bg-gray-900 rounded-lg overflow-hidden">
      <thead className="bg-gray-800">
        <tr>
          <th className="p-3">Film</th>
          <th className="p-3">Date</th>
          <th className="p-3">Salle</th>
          <th className="p-3">Siège</th>
          <th className="p-3">Statut</th>
        </tr>
      </thead>

      <tbody>
        {data.map((r) => (
          <tr key={r.id} className="border-t border-gray-700">
            <td className="p-3">{r.film}</td>
            <td className="p-3">{r.date}</td>
            <td className="p-3">{r.salle}</td>
            <td className="p-3">{r.seat}</td>
            <td className="p-3 text-red-500">{r.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

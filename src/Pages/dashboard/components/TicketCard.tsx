interface TicketProps {
  film: string;
  date: string;
  salle: string;
  seat: string;
  code: string;
}

export default function TicketCard({ film, date, salle, seat, code }: TicketProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-2">{film}</h3>
      <p className="text-gray-400">Date : {date}</p>
      <p className="text-gray-400">Salle : {salle}</p>
      <p className="text-gray-400">Siège : {seat}</p>

      <div className="mt-4 p-4 bg-black rounded text-center">
        <p className="text-red-500 font-bold">Code billet :</p>
        <p className="text-white text-lg">{code}</p>
      </div>
    </div>
  );
}

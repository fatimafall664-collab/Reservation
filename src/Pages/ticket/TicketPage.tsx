import Navbar from "../../components/layout/Navbar";
import { useParams } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

export default function TicketPage() {
  const { id } = useParams();

  // TEMP : données mockées (plus tard : backend)
  const ticket = {
    movie: "The Dark Knight",
    time: "20:00",
    salle: "Salle 1",
    seats: ["C5", "C6"],
    code: id,
  };

  const qrData = JSON.stringify({
    movie: ticket.movie,
    time: ticket.time,
    salle: ticket.salle,
    seats: ticket.seats,
    code: ticket.code,
  });

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="px-6 py-10 max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">🎟️ Ticket numérique</h1>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          {/* QR CODE RÉEL */}
          <div className="bg-white p-4 rounded mb-6 flex justify-center">
            <QRCodeCanvas value={qrData} size={180} />
          </div>

          {/* INFOS */}
          <h2 className="text-2xl font-bold mb-2">{ticket.movie}</h2>

          <p className="text-gray-300">
            🕒 {ticket.time} • 🏛️ {ticket.salle}
          </p>

          <p className="text-gray-300 mt-2">
            🪑 Sièges : <span className="text-white">{ticket.seats.join(", ")}</span>
          </p>

          <p className="text-gray-300 mt-4">
            🔐 Code de réservation :
            <span className="text-red-500 font-bold"> {ticket.code}</span>
          </p>

          <p className="text-gray-500 text-sm mt-6">
            Présentez ce ticket à l’entrée du cinéma.
          </p>
        </div>
      </section>
    </div>
  );
}

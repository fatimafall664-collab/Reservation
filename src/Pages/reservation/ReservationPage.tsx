import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Button from "../../components/ui/Button";

export default function ReservationPage() {
  const { id } = useParams();

  // Simulation d’une salle (plus tard : backend)
  const rows = 8;
  const seatsPerRow = 12;

  // Sièges occupés (exemple)
  const occupiedSeats = ["A3", "A4", "B6", "C1", "D10", "E5", "F7"];

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const toggleSeat = (seat: string) => {
    if (occupiedSeats.includes(seat)) return;

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const pricePerSeat = 3500;
  const total = selectedSeats.length * pricePerSeat;

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="px-6 py-10 max-w-4xl mx-auto">
        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-2">Choix des sièges</h1>
        <p className="text-gray-400 mb-6">
          Film #{id} • Salle 1 • Séance 20:00
        </p>

        {/* ÉCRAN */}
        <div className="bg-gray-700 text-center py-2 rounded mb-8">
          ÉCRAN
        </div>

        {/* SALLE */}
        <div className="grid gap-4">
          {[...Array(rows)].map((_, rowIndex) => {
            const rowLetter = String.fromCharCode(65 + rowIndex);

            return (
              <div key={rowIndex} className="flex justify-center gap-2">
                {[...Array(seatsPerRow)].map((_, seatIndex) => {
                  const seatId = `${rowLetter}${seatIndex + 1}`;
                  const isOccupied = occupiedSeats.includes(seatId);
                  const isSelected = selectedSeats.includes(seatId);

                  return (
                    <div
                      key={seatId}
                      onClick={() => toggleSeat(seatId)}
                      className={`
                        w-8 h-8 rounded cursor-pointer border
                        flex items-center justify-center text-xs
                        ${
                          isOccupied
                            ? "bg-red-600 border-red-700 cursor-not-allowed"
                            : isSelected
                            ? "bg-yellow-400 text-black border-yellow-500"
                            : "bg-green-600 border-green-700 hover:bg-green-500"
                        }
                      `}
                    >
                      {seatIndex + 1}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* RÉCAP */}
        <div className="mt-10 bg-gray-900 p-6 rounded-lg border border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Récapitulatif</h2>

          <p className="text-gray-300">
            Sièges sélectionnés :{" "}
            {selectedSeats.length > 0 ? selectedSeats.join(", ") : "Aucun"}
          </p>

          <p className="text-gray-300 mt-2">
            Prix total : <span className="text-red-500">{total} FCFA</span>
          </p>

          <Link to="/paiement">
            <Button
              disabled={selectedSeats.length === 0}
              className="mt-6 w-full"
            >
              Continuer vers le paiement
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

import Navbar from "../../components/layout/Navbar";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

export default function PaiementPage() {
  // TEMP : données mockées (plus tard on récupère depuis la réservation)
  const movie = {
    title: "The Dark Knight",
    time: "20:00",
    salle: "Salle 1",
    seats: ["C5", "C6"],
    price: 3500,
  };

  const total = movie.seats.length * movie.price;

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="px-6 py-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Paiement</h1>

        {/* RÉCAP */}
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold mb-4">Récapitulatif</h2>

          <p className="text-gray-300">
            🎬 Film : <span className="text-white">{movie.title}</span>
          </p>

          <p className="text-gray-300 mt-1">
            🕒 Séance : <span className="text-white">{movie.time}</span>
          </p>

          <p className="text-gray-300 mt-1">
            🏛️ Salle : <span className="text-white">{movie.salle}</span>
          </p>

          <p className="text-gray-300 mt-1">
            🪑 Sièges :{" "}
            <span className="text-white">{movie.seats.join(", ")}</span>
          </p>

          <p className="text-gray-300 mt-3 text-xl">
            💰 Total : <span className="text-red-500">{total} FCFA</span>
          </p>
        </div>

        {/* MOYENS DE PAIEMENT */}
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold mb-4">Méthode de paiement</h2>

          <div className="flex flex-col gap-4">
            <label className="flex items-center gap-3 bg-gray-800 p-3 rounded cursor-pointer">
              <input type="radio" name="pay" className="accent-red-600" />
              Wave
            </label>

            <label className="flex items-center gap-3 bg-gray-800 p-3 rounded cursor-pointer">
              <input type="radio" name="pay" className="accent-red-600" />
              Orange Money
            </label>

            <label className="flex items-center gap-3 bg-gray-800 p-3 rounded cursor-pointer">
              <input type="radio" name="pay" className="accent-red-600" />
              Free Money
            </label>

            <label className="flex items-center gap-3 bg-gray-800 p-3 rounded cursor-pointer">
              <input type="radio" name="pay" className="accent-red-600" />
              Carte bancaire (Visa / Mastercard)
            </label>
          </div>
        </div>

        {/* BOUTON PAYER */}
        <Link to="/ticket/12345">
          <Button className="w-full text-lg py-3">Payer maintenant</Button>
        </Link>
      </section>
    </div>
  );
}

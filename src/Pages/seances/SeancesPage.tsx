import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Button from "../../components/ui/Button";

export default function SeancesPage() {
  const { id } = useParams();

  // TEMP : données mockées (backend plus tard)
  const movie = {
    id,
    title: "The Dark Knight",
    genre: "Action",
    duration: "2h32",
    age: "12+",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description:
      "Batman affronte le Joker, un criminel imprévisible qui plonge Gotham dans le chaos.",
  };

  const days = [
    "Aujourd’hui",
    "Demain",
    "Samedi",
    "Dimanche",
    "Lundi",
    "Mardi",
  ];

  const seances = [
    { time: "14:00", format: "2D", salle: "Salle 1" },
    { time: "17:30", format: "3D", salle: "Salle 2" },
    { time: "20:00", format: "IMAX", salle: "Salle IMAX" },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="px-6 py-10 max-w-5xl mx-auto">
        {/* HEADER FILM */}
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full md:w-1/3 rounded-lg shadow-lg"
          />

          <div>
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
            <p className="text-gray-400 mb-4">
              {movie.genre} • {movie.duration} • {movie.age}
            </p>
            <p className="text-gray-300">{movie.description}</p>
          </div>
        </div>

        {/* JOURS */}
        <div className="flex gap-4 mt-10 overflow-x-auto pb-2">
          {days.map((day, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-red-600 transition"
            >
              {day}
            </button>
          ))}
        </div>

        {/* SÉANCES */}
        <h2 className="text-3xl font-bold mt-10 mb-6">Séances disponibles</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {seances.map((s, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700"
            >
              <p className="text-2xl font-bold">{s.time}</p>
              <p className="text-gray-400">{s.format}</p>
              <p className="text-gray-500">{s.salle}</p>

              <Link to={`/reservation/${movie.id}`}>
                <Button className="mt-4 w-full">Réserver</Button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

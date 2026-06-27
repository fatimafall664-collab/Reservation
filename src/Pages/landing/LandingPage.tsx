import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function LandingPage() {
  const movies = [
    { id: 1, title: "Black Panther", poster: "/blackPanther.jpg" },
    { id: 2, title: "The Woman King", poster: "/theWomanKing.jpg" },
    { id: 3, title: "Avengers", poster: "/avengers.jpg" },
    { id: 4, title: "Fast & Furious", poster: "/fast&furious.jpg" },
    { id: 5, title: "Twilight", poster: "/twilight.jpg" },
    { id: 6, title: "Avatar", poster: "/avatar.jpg" },
  ];

  const films = [
    { id: 7, title: "Winx Club", poster: "/winxClub.jpg" },
    { id: 8, title: "Le Dernier Des Mohicans", poster: "/mohicans.jpeg" },
    { id: 9, title: "LoliRock", poster: "/lolirock.jpg" },
    { id: 10, title: "La Reine Des Neiges", poster: "/elsa.jpg" },
    { id: 11, title: "Totally Spies", poster: "/spies.jpg" },
    { id: 12, title: "L'attaque Des Titans", poster: "/snk.jpg" },
  ];

  const series = [
    { id: 13, title: "Prison Break", poster: "/prisonBreak.jpg" },
    { id: 14, title: "Revenge", poster: "/revenge.jpg" },
    { id: 15, title: "The Originals", poster: "/theOriginals.jpg" },
    { id: 16, title: "Peaky Blinders", poster: "/peakyBlinders.jpg" },
    { id: 17, title: "Suits", poster: "/suits.jpg" },
    { id: 18, title: "The Vampire Diaries", poster: "/vampireDiaries.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#7f1d1d] text-white">

      <div className="min-h-screen relative overflow-hidden">

  
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: "url('/blackPanther.jpg')",
          }}
        ></div>

        <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-b from-black/60 via-black/45 to-black/65"></div>

        <div className="relative z-10">
          <Navbar />

          <section className="h-screen flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-xl">
              Réservez vos films préférés en un clic
            </h1>

            <p className="text-gray-300 max-w-xl mb-6 drop-shadow-lg">
              Découvrez les dernières sorties, choisissez votre séance et réservez vos places instantanément.
            </p>

            <Link to="/films">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                Voir les films
              </Button>
            </Link>
          </section>
        </div>
      </div>

      {/* FILMS À L'AFFICHE */}
      <section id="films" className="px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Films à l'affiche</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <Card
              key={movie.id}
              className="p-0 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full aspect-[2/3] object-cover transition-transform duration-500 hover:scale-110"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold">{movie.title}</h3>

                <Link to="/dashboard/reservations">
                  <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white transition hover:scale-105">
                    Réserver
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* PROCHAINEMENT */}
      <section className="px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Prochainement</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {films.map((film) => (
            <Card
              key={film.id}
              className="p-0 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={film.poster}
                alt={film.title}
                className={`w-full aspect-[2/3] transition-transform duration-500 hover:scale-110 ${
                  film.title === "Winx Club" ||
                  film.title === "Le Dernier Des Mohicans" ||
                  film.title === "LoliRock"
                    ? "object-contain bg-[#111] p-2"
                    : "object-cover"
                }`}
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold">{film.title}</h3>

                <Link to="/dashboard/reservations">
                  <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white transition hover:scale-105">
                    Réserver
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* SERIES */}
      <section className="px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Séries à découvrir</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {series.map((serie) => (
            <Card
              key={serie.id}
              className="p-0 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={serie.poster}
                alt={serie.title}
                className="w-full aspect-[2/3] object-cover transition-transform duration-500 hover:scale-110"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold">{serie.title}</h3>

                <Link to="/dashboard/reservations">
                  <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white transition hover:scale-105">
                    Réserver
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-6 text-center text-gray-400 border-t border-gray-800">
        2026 MFRSCiné — Tous droits réservés.
      </footer>
    </div>
  );
}
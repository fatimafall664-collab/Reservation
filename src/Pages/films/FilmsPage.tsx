import Navbar from "../../components/layout/Navbar";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

export default function FilmsPage() {
  const movies = [
    {
      id: 1,
      title: "The Dark Knight",
      genre: "Action",
      duration: "2h32",
      age: "12+",
      poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
      id: 2,
      title: "Inception",
      genre: "Science-fiction",
      duration: "2h28",
      age: "10+",
      poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    },
    {
      id: 3,
      title: "Interstellar",
      genre: "Aventure",
      duration: "2h49",
      age: "10+",
      poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="px-6 py-16">
        <h1 className="text-4xl font-bold mb-10">🎬 Films à l'affiche</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <Card key={movie.id} className="p-0 overflow-hidden">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-96 object-cover"
              />

              <div className="p-4">
                <h2 className="text-2xl font-bold">{movie.title}</h2>
                <p className="text-gray-400">
                  {movie.genre} • {movie.duration} • {movie.age}
                </p>

                <Link to={`/films/${movie.id}`}>
                  <Button className="mt-4 w-full">Voir les séances</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

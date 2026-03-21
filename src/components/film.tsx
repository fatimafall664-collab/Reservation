type FilmType = {
  title: string;
  image: string;
};

const films: FilmType[] = [
  {
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
  {
    title: "Avengers: Endgame",
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    title: "Titanic",
    image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
  },
  {
    title: "Joker",
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
];

export default function Film() {
  return (
    <div className="p-6">
      <h2 className="text-white text-2xl mb-4">Films</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {films.map((film, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img src={film.image} className="w-full h-60 object-cover" />

            <div className="p-3 text-white">
              <h3 className="font-semibold">{film.title}</h3>

              <button className="mt-2 bg-red-600 w-full py-2 rounded hover:bg-red-700">
                Réserver
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

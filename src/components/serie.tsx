type SerieType = {
  title: string;
  image: string;
};

const series: SerieType[] = [
  {
    title: "Breaking Bad",
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
  },
  {
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
  },
  {
    title: "Money Heist",
    image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
  },
  {
    title: "Game of Thrones",
    image: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
  },
  {
    title: "The Witcher",
    image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
  },
  {
    title: "Lupin",
    image: "https://image.tmdb.org/t/p/w500/sgxawbFB5Vi5OkPWQLNfl3dvkNJ.jpg",
  },
];

export default function Serie() {
  return (
    <div className="p-6">
      <h2 className="text-white text-2xl mb-4">Séries</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {series.map((serie, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img src={serie.image} className="w-full h-60 object-cover" />

            <div className="p-3 text-white">
              <h3 className="font-semibold">{serie.title}</h3>

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

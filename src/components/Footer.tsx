export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-white mt-80">
        <section className="px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Pourquoi choisir notre cinéma</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-lg">
            <span className="text-4xl mb-4"></span>
            <h3 className="font-semibold mb-2">Réservation rapide</h3>
            <p className="text-center text-sm">Réservez vos places en quelques clics depuis notre site.</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-lg">
            <span className="text-4xl mb-4"></span>
            <h3 className="font-semibold mb-2">Snacks & boissons</h3>
            <p className="text-center text-sm">Profitez de notre large gamme de snacks et boissons.</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-lg">
            <span className="text-4xl mb-4"></span>
            <h3 className="font-semibold mb-2">Salles modernes</h3>
            <p className="text-center text-sm">Salles confortables avec son et image de haute qualité.</p>
          </div>

        </div>
      </section>
      <div className="max-w-8xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-400 text-sm">
           {new Date().getFullYear()} CINEMA. Tous droits réservés.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-red-600 transition">Mentions légales</a>
          <a href="#" className="hover:text-red-600 transition">Contact</a>
          <a href="#" className="hover:text-red-600 transition">À propos</a>
        </div>
      </div>
    </footer>
  );
}
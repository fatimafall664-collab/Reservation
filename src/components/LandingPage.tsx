export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#7f1d1d] text-white">

      <div className="relative w-full h-[90vh] md:h-[100vh] flex flex-col md:flex-row items-center">
        <div className="md:w-2/5 px-6 md:px-20 flex flex-col justify-center space-y-6 z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1E8FD6]">BLACK PANTHER</h1>
          <p className="text-lg md:text-xl">Découvrez le film au cinéma</p>
          <button className="bg-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition duration-300 w-max">
            Réservez maintenant
          </button>
        </div>

        <div className="md:w-3/5 relative w-full h-[80vh] md:h-full">
          <img
            src="/blackPanther.jpg"
            alt="Black Panther"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

<section className="px-6 py-10">
  <h2 className="text-2xl font-bold mb-6">À l'affiche au cinéma</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition flex flex-col">
      <div className="w-full aspect-[2/3]">
        <img src="/blackPanther.jpg" className="w-full h-full object-cover" alt="Black Panther"/>
      </div>
      <p className="p-3 text-center font-semibold">Black Panther</p>
    </div>
    
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition flex flex-col">
      <div className="w-full aspect-[2/3]">
        <img src="/theWomanKing.jpg" className="w-full h-full object-cover" alt="The Woman King"/>
      </div>
      <p className="p-3 text-center font-semibold">The Woman King</p>
    </div>

    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition flex flex-col">
      <div className="w-full aspect-[2/3]">
        <img src="/avengers.jpg" className="w-full h-full object-cover" alt="Avengers"/>
      </div>
      <p className="p-3 text-center font-semibold">Avengers</p>
    </div>

    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition flex flex-col">
      <div className="w-full aspect-[2/3]">
        <img src="/fast&furious.jpg" className="w-full h-full object-cover" alt="Fast & Furious"/>
      </div>
      <p className="p-3 text-center font-semibold">Fast & Furious</p>
    </div>

  </div>
</section>

<section className="px-6 py-10 bg-gray-900/20">
  <h2 className="text-2xl font-bold mb-6">Prochainement</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

<div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition flex flex-col">
  <div className="w-full aspect-[2/3] bg-gray-700 flex items-center justify-center">
    <img
      src="/winxClub.jpg"
      alt="Winx Club"
      className="w-full h-full object-contain"
    />
  </div>
  <p className="p-3 text-center font-semibold text-white">Winx Club</p>
</div>

<div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition flex flex-col">
  <div className="w-full aspect-[2/3] bg-gray-700 flex items-center justify-center">
    <img
      src="/mohicans.jpeg"
      alt="Le Dernier Des Mohicans"
      className="w-full h-full object-contain"
    />
  </div>
  <p className="p-3 text-center font-semibold text-white">Le Dernier Des Mohicans</p>
</div>

    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition flex flex-col">
      <div className="w-full aspect-[2/3]">
        <img src="/spies.jpg" className="w-full h-full object-cover" alt="Film 7"/>
      </div>
      <p className="p-3 text-center font-semibold">Totally Spies</p>
    </div>

    
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition flex flex-col">
      <div className="w-full aspect-[2/3]">
        <img src="/elsa.jpg" className="w-full h-full object-cover" alt="Film 8"/>
      </div>
      <p className="p-3 text-center font-semibold">Elsa</p>
    </div>

  </div>
</section>

<section className="px-6 py-10 bg-gray-900/10">
  <h2 className="text-2xl font-bold mb-6">Séries à découvrir</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition flex flex-col">
      <div className="w-full aspect-[2/3]">
        <img src="/prisonBreak.jpg" className="w-full h-full object-cover" alt="Prison Break"/>
      </div>
      <p className="p-3 text-center font-semibold">Prison Break</p>
    </div>

    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition flex flex-col">
      <div className="w-full aspect-[2/3]">
        <img src="/revenge.jpg" className="w-full h-full object-cover" alt="Revenge"/>
      </div>
      <p className="p-3 text-center font-semibold">Revenge</p>
    </div>

    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition flex flex-col">
      <div className="w-full aspect-[2/3]">
        <img src="/theOriginals.jpg" className="w-full h-full object-cover" alt="The Originals"/>
      </div>
      <p className="p-3 text-center font-semibold">The Originals</p>
    </div>

    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition flex flex-col">
      <div className="w-full aspect-[2/3]">
        <img src="/peakyBlinders.jpg" className="w-full h-full object-cover" alt="Peaky Blinders"/>
      </div>
      <p className="p-3 text-center font-semibold">Peaky Blinders</p>
    </div>

  </div>
</section>

    </div>
  )
}
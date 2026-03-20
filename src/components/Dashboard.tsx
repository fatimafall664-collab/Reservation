import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-800 text-white">
    
     <aside className="w-64 bg-gray-900 p-5 flex flex-col">
  <img src="/MFRScine.png" alt="logo" className="w-full h-auto mb-4"/>

  <nav className="flex flex-col gap-4 w-full">
    <button className="hover:bg-gray-700 p-2 rounded text-white text-left">Tableau de bord</button>
    <button className="hover:bg-gray-700 p-2 rounded text-white text-left">Films</button>
    <button className="hover:bg-gray-700 p-2 rounded text-white text-left">Ventes</button>
    <button className="hover:bg-gray-700 p-2 rounded text-white text-left">Clients</button>
    <button className="hover:bg-gray-700 p-2 rounded text-white text-left">Paramètres</button>
  </nav>
</aside>

      <section className="flex-1 p-6 overflow-y-auto">
      
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="bg-gray-900 shadow rounded-lg p-4 text-white">
            <h2 className="text-gray-400">Total Films</h2>
            <p className="text-2xl font-bold">298</p>
          </div>
          <div className="bg-gray-900 shadow rounded-lg p-4 text-white">
            <h2 className="text-gray-400">Tickets Vendus</h2>
            <p className="text-2xl font-bold">10 654 987</p>
          </div>
          <div className="bg-gray-900 shadow rounded-lg p-4 text-white">
            <h2 className="text-gray-400">Clients</h2>
            <p className="text-2xl font-bold">7 865 487</p>
          </div>
          <div className="bg-gray-900 shadow rounded-lg p-4 text-white">
            <h2 className="text-gray-400">Recettes</h2>
            <p className="text-2xl font-bold">12 500 695</p>
          </div>
        </div>

<div className="mb-6">
  <h2 className="text-xl font-bold mb-4">Les plus visionnés</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition flex flex-col">
      <div className="w-full h-64 bg-gray-700 flex items-start justify-center overflow-hidden">
        <img src="/blackPanther.jpg" alt="Black Panther" className="w-full h-full object-cover object-top" />
      </div>
      <h3 className="p-3 text-center font-semibold text-white">Black Panther</h3>
      <p className="px-3 pb-3 text-center text-gray-400">125 694 vues</p>
    </div>

    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition flex flex-col">
      <div className="w-full h-64 bg-gray-700 flex items-start justify-center overflow-hidden">
        <img src="/theWomanKing.jpg" alt="The Woman King" className="w-full h-full object-cover object-top" />
      </div>
      <h3 className="p-3 text-center font-semibold text-white">The Woman King</h3>
      <p className="px-3 pb-3 text-center text-gray-400">98 165 vues</p>
    </div>

    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition flex flex-col">
      <div className="w-full h-64 bg-gray-700 flex items-start justify-center overflow-hidden">
        <img src="/prisonBreak.jpg" alt="Revenge" className="w-full h-full object-cover object-top" />
      </div>
      <h3 className="p-3 text-center font-semibold text-white">Prison Break</h3>
      <p className="px-3 pb-3 text-center text-gray-400">87 543 vues</p>
    </div>

    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition flex flex-col">
      <div className="w-full h-64 bg-gray-700 flex items-start justify-center overflow-hidden">
        <img src="/revenge.jpg" alt="Winx Club" className="w-full h-full object-cover object-top" />
      </div>
      <h3 className="p-3 text-center font-semibold text-white">Revenge</h3>
      <p className="px-3 pb-3 text-center text-gray-400">76 420 vues</p>
    </div>

    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition flex flex-col">
      <div className="w-full h-64 bg-gray-700 flex items-start justify-center overflow-hidden">
        <img src="/theOriginals.jpg" alt="Spider-Man" className="w-full h-full object-cover object-top" />
      </div>
      <h3 className="p-3 text-center font-semibold text-white">The Originals</h3>
      <p className="px-3 pb-3 text-center text-gray-400">65 320 vues</p>
    </div>

  </div>
</div>
      </section>
    </div>
  )
}

export default Dashboard;
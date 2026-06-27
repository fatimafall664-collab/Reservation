import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import Navbar from "../../components/layout/Navbar";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DashboardHome() {
  const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"];
  const annees = ["2023", "2024", "2025", "2026"];
  const films = ["Black Panther", "Avengers", "Winx Club", "Lolirock", "Twilight"];
  const salles = ["Salle 1", "Salle 2", "Salle 3", "IMAX", "VIP"];
  const heures = ["10h00", "13h00", "16h00", "19h00", "22h00"];

  const [moisSelectionne, setMoisSelectionne] = useState("Janvier");
  const [anneeSelectionnee, setAnneeSelectionnee] = useState("2026");
  const [salleSelectionnee, setSalleSelectionnee] = useState("Salle 1");
  const [heureSelectionnee, setHeureSelectionnee] = useState("10h00");


  const generateData = () => {
    const data = {};

    annees.forEach((annee) => {
      data[annee] = {};

      films.forEach((film) => {
        data[annee][film] = {};

        salles.forEach((salle) => {
          data[annee][film][salle] = {};

          heures.forEach((heure) => {
            data[annee][film][salle][heure] = {};

            mois.forEach((m) => {
              data[annee][film][salle][heure][m] =
                Math.floor(Math.random() * 180) + 20; 
            });
          });
        });
      });
    });

    return data;
  };

  const dataTickets = generateData();

  const barData = {
    labels: films,
    datasets: [
      {
        label: `Tickets vendus — ${moisSelectionne} ${anneeSelectionnee}`,
        data: films.map(
          (film) =>
            dataTickets[anneeSelectionnee][film][salleSelectionnee][heureSelectionnee][moisSelectionne]
        ),
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
        ],
      },
    ],
  };

  const barOptions = {
    responsive: true,
    animation: {
      duration: 1200,
      easing: "easeOutQuart",
    },
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "white" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      y: {
        ticks: { color: "white" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#7f1d1d] min-h-screen text-white">
      <Navbar />

      <div className="pt-24 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Dashboard </h1>

        {/* 🔽 FILTRES */}
        <div className="flex gap-6 mb-6 flex-wrap">
          <div>
            <label className="mr-3 text-lg">Mois :</label>
            <select
              value={moisSelectionne}
              onChange={(e) => setMoisSelectionne(e.target.value)}
              className="bg-gray-800 text-white p-2 rounded"
            >
              {mois.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mr-3 text-lg">Année :</label>
            <select
              value={anneeSelectionnee}
              onChange={(e) => setAnneeSelectionnee(e.target.value)}
              className="bg-gray-800 text-white p-2 rounded"
            >
              {annees.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mr-3 text-lg">Salle :</label>
            <select
              value={salleSelectionnee}
              onChange={(e) => setSalleSelectionnee(e.target.value)}
              className="bg-gray-800 text-white p-2 rounded"
            >
              {salles.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mr-3 text-lg">Séance :</label>
            <select
              value={heureSelectionnee}
              onChange={(e) => setHeureSelectionnee(e.target.value)}
              className="bg-gray-800 text-white p-2 rounded"
            >
              {heures.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 🔽 GRAPHIQUE */}
        <div className="bg-gray-900 p-6 rounded-lg mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Comparaison des films — {salleSelectionnee} — {heureSelectionnee} ({moisSelectionne}{" "}
            {anneeSelectionnee})
          </h2>
          <Bar data={barData} options={barOptions} />
        </div>

        {/* 🔽 TABLEAU */}
        <div className="bg-gray-900 p-6 rounded-lg mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Tableau des ventes — {salleSelectionnee} — {heureSelectionnee} ({moisSelectionne}{" "}
            {anneeSelectionnee})
          </h2>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-3 border-b border-gray-700">Film</th>
                <th className="p-3 border-b border-gray-700">Salle</th>
                <th className="p-3 border-b border-gray-700">Séance</th>
                <th className="p-3 border-b border-gray-700">Mois</th>
                <th className="p-3 border-b border-gray-700">Tickets vendus</th>
              </tr>
            </thead>

            <tbody>
              {films.map((film, index) => {
                const tickets =
                  dataTickets[anneeSelectionnee][film][salleSelectionnee][heureSelectionnee][moisSelectionne];

                return (
                  <tr key={index} className="hover:bg-gray-800">
                    <td className="p-3 border-b border-gray-700">{film}</td>
                    <td className="p-3 border-b border-gray-700">{salleSelectionnee}</td>
                    <td className="p-3 border-b border-gray-700">{heureSelectionnee}</td>
                    <td className="p-3 border-b border-gray-700">{moisSelectionne}</td>
                    <td className="p-3 border-b border-gray-700 font-bold text-red-400">
                      {tickets}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
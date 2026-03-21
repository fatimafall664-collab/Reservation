import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const dataSemaine = [
  { name: "Lun", recettes: 640, depenses: 740 },
  { name: "Mar", recettes: 560, depenses: 830 },
  { name: "Mer", recettes: 300, depenses: 580 },
  { name: "Jeu", recettes: 770, depenses: 900 },
  { name: "Ven", recettes: 770, depenses: 620 },
  { name: "Sam", recettes: 640, depenses: 300 },
  { name: "Dim", recettes: 900, depenses: 800 },
];

const dataMois = [
  { name: "Jan", recettes: 4500, depenses: 5000 },
  { name: "Fév", recettes: 5600, depenses: 4800 },
  { name: "Mar", recettes: 6000, depenses: 5200 },
  { name: "Avr", recettes: 5800, depenses: 5400 },
  { name: "Mai", recettes: 6200, depenses: 5000 },
];

const dataAnnee = [
  { name: "2022", recettes: 65000, depenses: 60000 },
  { name: "2023", recettes: 72000, depenses: 70000 },
  { name: "2024", recettes: 68000, depenses: 65000 },
];

const Chart: React.FC = () => {
  const [periode, setPeriode] = useState<"Semaine" | "Mois" | "Annee">("Semaine");

  const data =
    periode === "Semaine" ? dataSemaine :
    periode === "Mois" ? dataMois :
    dataAnnee;

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-700">
     
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-white">Recettes vs Dépenses</h2>
        <select
          value={periode}
          onChange={(e) => setPeriode(e.target.value as "Semaine" | "Mois" | "Annee")}
          className="border rounded px-3 py-1 text-sm text-gray-300 bg-gray-800"
        >
          <option value="Semaine">Semaine</option>
          <option value="Mois">Mois</option>
          <option value="Annee">Année</option>
        </select>
      </div>

     
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#D1D5DB", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#D1D5DB", fontSize: 12 }}
            />
            <Tooltip
              cursor={{ fill: "#1F2937" }}
              contentStyle={{ backgroundColor: "#111827", borderColor: "#374151", color: "#D1D5DB" }}
            />
            <Legend iconType="circle" verticalAlign="bottom" height={20} wrapperStyle={{ color: "#D1D5DB" }} />
            
            <Bar dataKey="recettes" fill="#1E40AF" radius={[4, 4, 0, 0]} barSize={12} />
            <Bar dataKey="depenses" fill="#60A5FA" radius={[4, 4, 0, 0]} barSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
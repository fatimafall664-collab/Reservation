import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const user = { prenom, nom, email, password };

    // Sauvegarde locale (simulation de base de données)
    localStorage.setItem("cinebook_user", JSON.stringify(user));

    alert("Compte créé avec succès !");
    navigate("/auth/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#7f1d1d] text-white flex items-center justify-center">
      <form
        onSubmit={handleRegister}
        className="bg-gray-900 p-6 rounded-lg w-full max-w-sm"
      >
        <h1 className="text-3xl font-bold mb-6">Inscription</h1>

        <input
          type="text"
          placeholder="Prénom"
          className="w-full p-2 mb-4 rounded bg-gray-800"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Nom"
          className="w-full p-2 mb-4 rounded bg-gray-800"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 rounded bg-gray-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full p-2 mb-4 rounded bg-gray-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700"
        >
          S'inscrire
        </button>

        <p className="mt-4 text-center">
          Déjà un compte ?{" "}
          <Link to="/auth/login" className="text-blue-500">
            Connexion
          </Link>
        </p>
      </form>
    </div>
  );
}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const savedUserRaw = localStorage.getItem("cinebook_user");

    if (!savedUserRaw) {
      alert("Aucun compte trouvé. Veuillez vous inscrire.");
      return;
    }

    const savedUser = JSON.parse(savedUserRaw);

    if (email === savedUser.email && password === savedUser.password) {
      alert("Connexion réussie !");
      navigate("/dashboard");
    } else {
      alert("Identifiants incorrects");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#7f1d1d] text-white flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-6 rounded-lg w-full max-w-sm"
      >
        <h1 className="text-3xl font-bold mb-6">Connexion</h1>

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
          Se connecter
        </button>

        <p className="mt-4 text-center">
          Pas de compte ?{" "}
          <Link to="/auth/register" className="text-blue-500">
            Inscription
          </Link>
        </p>
      </form>
    </div>
  );
}

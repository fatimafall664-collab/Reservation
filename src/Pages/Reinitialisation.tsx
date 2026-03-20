import { useState } from "react";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold">Réinitialisation du mot de passe</h1>
      <form className="flex text-white flex-col gap-4 mt-4">
        <label>Email</label>
        <input
          type="email"
          placeholder="Entrez votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="button"
          onClick={() => console.log("Lien envoyé à", email)}
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Réinitialiser
        </button>
      </form>
    </div>
  );
}

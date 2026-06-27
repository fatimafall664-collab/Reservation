import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useState } from "react";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    console.log("Reset password for:", email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-900 p-8 rounded-lg w-[90%] max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6">
          Réinitialiser le mot de passe
        </h2>

        <div className="flex flex-col gap-4">
          <Input
            label="Email"
            type="email"
            value={email}
            placeholder="exemple@mail.com"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button onClick={handleReset}>Envoyer le lien</Button>

          <a href="/auth/login" className="text-gray-400 text-sm text-center">
            Retour à la connexion
          </a>
        </div>
      </div>
    </div>
  );
}

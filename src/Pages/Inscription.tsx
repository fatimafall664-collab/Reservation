export default function Inscription() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold">Inscription</h1>
      <form className="flex flex-col gap-4 mt-4">
        <input type="text" placeholder="Nom" className="border p-2 rounded" />
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <input type="password" placeholder="Mot de passe" className="border p-2 rounded" />
        <button className="bg-blue-700 text-white p-2 rounded">S’inscrire</button>
      </form>
    </div>
  );
}

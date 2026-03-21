
import { Link } from "react-router-dom";
type NavbarProps = {
  logo: string; 
};

export default function Navbar({ }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white">
      <div className="flex w-12 h-auto m-0 p-0  items-center gap-2">
        <img src="/logo.png" alt="" />
        <span className="font-bold text-lg">Cinema</span>
      </div>
      <ul className="flex gap-4">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/connexion">Connexion</Link></li>
        <li><Link to="/inscription">Inscription</Link></li>
        <li><Link to="/reset-password">Reinitialisation</Link></li>
      </ul>
    </nav>
  );
}

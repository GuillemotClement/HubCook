import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="shadow-md py-4 px-8 flex justify-between items-center">
      <NavLink to="/" className="flex items-center gap-x-2">
        <img src={logo} alt="" className="h-9" />
        <span className="text-xl font-bold">HubCook</span>
      </NavLink>
      <nav>
        <ul className="flex gap-x-2">
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/recipes">Recettes</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
        </ul>
      </nav>
      <ul className="flex gap-x-2">
        <li>
          <NavLink to="/login">Connexion</NavLink>
        </li>
        <li>
          <NavLink to="/register">Inscription</NavLink>
        </li>
        <li>
          <NavLink to="/profil">Profil</NavLink>
        </li>
        <li>
          <NavLink to="/">Deconnexion</NavLink>
        </li>
      </ul>
    </header>
  );
}

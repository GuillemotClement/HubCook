import { NavLink } from "react-router";

export default function Header() {
	return (
		<header className="flex justify-between py-3 px-8 shadow-md items-center">
			<NavLink to="/">
				<i className="fa-solid fa-kitchen-set text-3xl mr-2" />
				<span className="text-2xl font-bold">HubCook</span>
			</NavLink>
			<ul className="flex gap-x-3">
				<li>
					<NavLink to="/">Accueil</NavLink>
				</li>
				<li>
					<NavLink to="/recipes">Recettes</NavLink>
				</li>
			</ul>
			<ul className="flex gap-x-3">
				<li>
					<NavLink to="/">Connexion</NavLink>
				</li>
				<li>
					<NavLink to="/register">Inscription</NavLink>
				</li>
				<li>
					<NavLink to="/">Profil</NavLink>
				</li>
				<li>
					<NavLink to="/">Deconnexion</NavLink>
				</li>
			</ul>
		</header>
	);
}

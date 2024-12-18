import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../context";
import { signout } from "../apis/auth";

export default function Header() {
	//on récupère user depuis le context
	const { user } = useContext(AuthContext);

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
			<ul>
				{/* si on as un user */}
				{user ? (
					<>
						<li>
							<NavLink to="login">Connexion</NavLink>
						</li>
						<li>
							<NavLink to="register">Inscription</NavLink>
						</li>
					</>
				) : (
					<>
						<li>
							<NavLink to="profil">Profil</NavLink>
						</li>
						<li onClick={() => signout()}>Deconnexion</li>
					</>
				)}
			</ul>
		</header>
	);
}
